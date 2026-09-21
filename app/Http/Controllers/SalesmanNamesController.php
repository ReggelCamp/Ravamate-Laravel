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
    $salesmanNames = SalesmanNamesModel::select(
        'id',
        'name',
        'last_name'
    )
    ->selectRaw("CONCAT(name, ' ', last_name) AS salesman_name")
    ->get();

    return response()->json($salesmanNames);
}

}