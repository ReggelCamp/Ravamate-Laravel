<?php

namespace App\Http\Controllers;

use App\Models\DashboardModel;
use App\Models\SalesmanModel;
use App\Models\StoreModel;
use App\Models\Transaction;
use Carbon\Carbon;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function getSalesmanTable(Request $request)
    {
        // The fit-to-screen table shows the same data as the main dashboard
        // table (full salesman rows with their stores, transactions and
        // product details), filtered by the selected business day.
        return $this->getSalesmanInfo($request);
    }

    public function getSalesman()
    {
        $salesmen = DashboardModel::select('salesman_name')
            ->distinct()
            ->orderBy('salesman_name')
            ->get();

        return response()->json($salesmen);
    }

    public function getLatest(Request $request){
        $date = $request->validate([
            'date' => ['nullable', 'date_format:Y-m-d'],
        ])['date'] ?? null;

        // The business day is determined by the transaction model's date
        // (transaction.transaction_date), not the store-row date.
        $latestTransaction = DashboardModel::latest()
            ->when($date, function ($query) use ($date) {
                $query->whereHas('transactions', function ($transactionQuery) use ($date) {
                    $transactionQuery->whereDate('transaction_date', $date);
                });
            })
            ->with(['stores' => function ($query) use ($date) {
                if ($date) {
                    $query->whereHas('transactions', function ($transactionQuery) use ($date) {
                        $transactionQuery->whereDate('transaction_date', $date);
                    });
                }
            }])
            ->first();

        return response()->json($latestTransaction);
    }

    public function getSalesmanInfo(Request $request){
    $date = $request->validate([
        'date' => ['nullable', 'date_format:Y-m-d'],
    ])['date'] ?? null;

    // Which salesmen (and which stores of theirs) belong to the selected day
    // is decided by the transaction model's date (transaction.transaction_date).
    $salesman = DashboardModel::query()
        ->when($date, function ($query) use ($date) {
            $query->whereHas('transactions', function ($transactionQuery) use ($date) {
                $transactionQuery->whereDate('transaction_date', $date);
            });
        })
        ->with([
            'stores' => function ($query) use ($date) {
                if ($date) {
                    $query->whereHas('transactions', function ($transactionQuery) use ($date) {
                        $transactionQuery->whereDate('transaction_date', $date);
                    });
                }
            },
            'stores.transactions.transactionDetails.productDetails'
        ])
        ->get();

    return response()->json($salesman);
}

public function getSalesmanSummary(Request $request){
    $validated = $request->validate([
        'salesman_id' => ['required', 'integer', 'exists:salesman,id'],
        'date' => ['required', 'date_format:Y-m-d'],
        'period' => ['required', 'in:day,mtd'],
    ]);

    $businessDate = Carbon::createFromFormat('Y-m-d', $validated['date']);
    $startDate = $validated['period'] === 'mtd'
        ? $businessDate->copy()->startOfMonth()
        : $businessDate->copy()->startOfDay();
    $endDate = $businessDate->copy()->endOfDay();

    // The selected day / month is defined by the transactions themselves
    // (transaction.transaction_date), so the stores included in the summary
    // are derived from the transactions posted in that period.
    $storeIds = Transaction::query()
        ->where('salesman_id', $validated['salesman_id'])
        ->whereBetween('transaction_date', [$startDate, $endDate])
        ->pluck('store_id')
        ->filter()
        ->unique()
        ->values();

    $stores = StoreModel::query()
        ->where('salesman_id', $validated['salesman_id'])
        ->whereIn('store_id', $storeIds)
        ->get(['store_id', 'store_name', 'transaction_sales']);

    $transactions = Transaction::query()
        ->where('salesman_id', $validated['salesman_id'])
        ->whereIn('store_id', $storeIds)
        ->with('transactionDetails:id,transaction_id')
        ->get(['transaction_id', 'store_id']);

    // Group transactions by store_id, count each store's SKU lines separately
    $transactionsByStore = $transactions->groupBy('store_id');

    $perStore = $stores->groupBy('store_id')->map(function ($storeRows, $storeId) use ($transactionsByStore) {
        $storeTransactions = $transactionsByStore->get($storeId, collect());

        return [
            'store_id' => $storeId,
            'store_name' => $storeRows->first()->store_name,
            'sales' => (float) $storeRows->sum(fn ($store) => (float) $store->transaction_sales),
            'sku_count' => $storeTransactions->sum(fn ($transaction) => $transaction->transactionDetails->count()),
        ];
    })->values();
    //dd($perStore);
    return response()->json([
        'sales' => (float) $stores->sum(fn ($store) => (float) $store->transaction_sales),
        'sku_count' => $transactions->sum(fn ($transaction) => $transaction->transactionDetails->count()),
        'visited_stores' => $stores->count(),
        'period' => $validated['period'],
        'stores' => $perStore,
    ]);
}

}




