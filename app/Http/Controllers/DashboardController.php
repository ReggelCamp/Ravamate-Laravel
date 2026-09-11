<?php

namespace App\Http\Controllers;

use App\Models\DashboardModel;
use App\Models\SalesmanModel;
use App\Models\StoreModel;
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
                'transactions'
            ])->get();
        return response()->json($salesman);
    }
}
