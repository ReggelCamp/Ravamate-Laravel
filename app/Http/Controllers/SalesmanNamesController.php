<?php

namespace App\Http\Controllers;

use App\Models\SalesmanNamesModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class SalesmanNamesController extends Controller
{
    public function createSalesmanName(Request $request){
        $salesmanName = SalesmanNamesModel::create([
            'name' => $request->name,
            'last_name' => $request->last_name,
        ]);
        return response()->json([
            'message' => 'Salesman name created successfully',
            'data' => $salesmanName
        ],200);
    }

    public function getSalesmanNames(){
        $salesmanNames = SalesmanNamesModel::all();

        return response()->json($salesmanNames);
    }
}