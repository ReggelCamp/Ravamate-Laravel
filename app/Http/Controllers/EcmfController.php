<?php

namespace App\Http\Controllers;

use App\Models\DashboardModel;
use App\Models\SalesmanModel;
use App\Models\StoreModel;
use App\Models\SyncData;
use App\Models\Transaction;
use App\Models\transactionDetails;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class EcmfController extends Controller
{
    public function updateEcmftable(Request $request){
        $store = StoreModel::find($request->id);

        if (!$store) {
            return response()->json([
                'message' => 'Store not found.'
            ], 404);
        }

        $store->update([
            'store_name'         => $request->store_name,
            'customer_group'     => $request->customer_group,
            'contact_person'     => $request->contact_person,
            'email_address'      => $request->email_address,
            'contact_no'         => $request->contact_no,
            'province'           => $request->province,
            'municipality'       => $request->municipality,
            'barangay'           => $request->barangay,
            'postal_code'        => $request->postal_code,
            'other_address'      => $request->other_address,
            'ship_to'            => $request->ship_to,
            'sold_to'            => $request->sold_to,
            'geo_area'           => $request->geo_area,
            'eod'                => $request->eod,
            'chain'              => $request->chain,
            'coverage'           => $request->coverage,
            'frequency'          => $request->frequency,
            'tin'                => $request->tin,
        ]);

        return response()->json([
            'message' => 'Store saved successfully.',
            'salesman' => $store->fresh(),
        ], 200);
    }
}