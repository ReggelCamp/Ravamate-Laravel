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
        $result = DashboardModel::all();

        return response()->json($result);
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

        $latestTransaction = DashboardModel::latest()
            ->when($date, function ($query) use ($date) {
                $query->whereHas('stores', function ($storeQuery) use ($date) {
                    $storeQuery->whereDate('transaction_date', $date);
                });
            })
            ->with(['stores' => function ($query) use ($date) {
                if ($date) {
                    $query->whereDate('transaction_date', $date);
                }
            }])
            ->first();

        return response()->json($latestTransaction);
    }

    public function getSalesmanInfo(Request $request){
    $date = $request->validate([
        'date' => ['nullable', 'date_format:Y-m-d'],
    ])['date'] ?? null;

    $salesman = DashboardModel::query()
        ->when($date, function ($query) use ($date) {
            $query->whereHas('stores', function ($storeQuery) use ($date) {
                $storeQuery->whereDate('transaction_date', $date);
            });
        })
        ->with([
            'stores' => function ($query) use ($date) {
                if ($date) {
                    $query->whereDate('transaction_date', $date);
                }
            },

            'transactions.transactionDetails.productDetails'

        ])
        ->get();

    return response()->json($salesman);
}

    /**
     * Summarize a salesman's sales and SKU lines for the selected business day
     * or for the month-to-date ending on that day.
     */
    public function getSalesmanSummary(Request $request)
    {
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

        // The dashboard itself uses store.transaction_date as its business date.
        $stores = StoreModel::query()
            ->where('salesman_id', $validated['salesman_id'])
            ->whereBetween('transaction_date', [$startDate, $endDate])
            ->get(['store_id', 'transaction_sales']);

        $storeIds = $stores->pluck('store_id')->filter()->unique()->values();
        $transactions = Transaction::query()
            ->where('salesman_id', $validated['salesman_id'])
            ->whereIn('store_id', $storeIds)
            ->with('transactionDetails:id,transaction_id')
            ->get(['transaction_id', 'store_id']);

        return response()->json([
            'sales' => (float) $stores->sum(fn ($store) => (float) $store->transaction_sales),
            'sku_count' => $transactions->sum(fn ($transaction) => $transaction->transactionDetails->count()),
            'visited_stores' => $stores->count(),
            'period' => $validated['period'],
        ]);
    }

}
