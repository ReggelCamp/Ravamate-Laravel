<?php

namespace App\Http\Controllers;

use App\Models\DashboardModel;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function getSalesmanTable(Request $request)
    {
        $result = DashboardModel::all();

        return response()->json($result);
    }

    public function getSalesmen()
    {
        $salesmen = DashboardModel::select('salesman_name')
            ->distinct()
            ->orderBy('salesman_name')
            ->get();

        return response()->json($salesmen);
    }
}
