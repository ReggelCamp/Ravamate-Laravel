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
    public function getStoreSalesman(Request $request){
        $stores = StoreModel::with('mcpLayout')
        ->where('salesman_id',$request->salesman_id)
        ->get();

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

    // public function GeoReset (Request $request){
    //     $LongLat = StoreModel::where($request->store_id);

    //     if (!$LongLat) {
    //         return response()->json([
    //             'message' => 'Salesman not found.'
    //         ], 404);
    //     }

    //     $LongLat->update([
    //         'longitude' => $request->longitude,
    //         'latitude'  => $request->latitude
    //     ]);

    //     return response()->json([
    //         'message' => 'Placement updated successfully',
    //         'data' => $LongLat
    //     ], 201);

    // }


    public function GeoReset(Request $request){
        $LongLat = StoreModel::where('store_id', $request->store_id)->first();

        if (!$LongLat) {
            return response()->json([
                'message' => 'Store not found.'
            ], 404);
        }

        $LongLat->update([
            'longitude' => $request->longitude,
            'latitude'  => $request->latitude,
        ]);

        // $LongLat->update([
        //     'longitude' => $request->input('longitude', 0),
        //     'latitude'  => $request->input('latitude', 0),
        // ]);

        return response()->json([
            'message' => 'Placement updated successfully',
            'data' => $LongLat
        ], 200);
    }

}