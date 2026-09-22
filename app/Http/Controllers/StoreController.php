<?php

namespace App\Http\Controllers;

use App\Models\SalesmanModel;
use App\Models\StoreModel;
use Illuminate\Http\Request;

class StoreController extends Controller
{
    public function getStore(){
        $stores = StoreModel::with('salesman')->get();
        //dd($stores);
        return response()->json($stores);
        
    }

public function createStore(Request $request){
    $store = StoreModel::create([
        'store_name'        => $request->store_name,
        'longitude'         => $request->longitude,
        'latitude'          => $request->latitude,
        'customercode'      => 'TEMP',
        'salesman_id'       => $request->salesman_id,
        'transaction_sales' => $request->transaction_sales ?? null,
        'transaction_date'  => $request->transaction_date,
        'contact_person'    => $request->contact_person ?? null,
    ]);

    $store->customercode = 'CC0' . $store->store_id;
    $store->save();

    return response()->json([
        'message' => 'Store created successfully',
        'data' => $store
    ], 200);
}

}