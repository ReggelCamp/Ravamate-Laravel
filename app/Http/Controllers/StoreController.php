<?php

namespace App\Http\Controllers;

use App\Models\SalesmanModel;
use App\Models\StoreModel;
use Illuminate\Http\Request;

class StoreController extends Controller
{
    public function getStore(){
        $stores = StoreModel::with('salesman')->get();
        return response()->json($stores);
    }

    public function createStore(Request $request){
        $store = StoreModel::create([
            'store_name'          => $request->store_name,
            'longitude'           => $request->longitude,
            'latitude'            => $request->latitude,
            'salesman_id'         => $request->salesman_id,
            'transaction_sales'   => $request->transaction_sales ?? null,
            'transaction_date'    => $request->transaction_date,
        ]);
        return response()->json([
            'message' => 'Store created successfully',
            'data' => $store
        ],200);
    }
}