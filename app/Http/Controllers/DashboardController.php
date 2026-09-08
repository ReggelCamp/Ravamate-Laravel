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

    public function getLatest(){
        $latestTransaction = DashboardModel::latest()
        ->with("stores")
        ->first();

        return response()->json($latestTransaction);
    }

    public function getSalesmanInfo(){
        $salesman = DashboardModel::with("stores")->get();
        return response()->json($salesman);
    }
}
