<?php

namespace App\Http\Controllers;

use App\Models\product;
use App\Models\productPlacementModel;
use App\Models\transactionDetails;
use Illuminate\Http\Request;

class productPlacementController extends Controller
{
function createPlacement(Request $request)
{
    $product = productPlacementModel::create([
        'type'            => $request->type,
        'item_description' => $request->item_description,
        'customer_class'  => $request->customer_class,
        'item_number'    => 'TEMP',
        'placement'      => $request->placement,
    ]);

    $product->item_number = 'ITM-10' . $product->id;
    $product->save();

    return response()->json([
        'message' => 'Placement created successfully',
        'data' => $product
    ], 201);
}

    
function getAllProductPlacement(){
        $product = productPlacementModel::get();

        return response()->json($product);
    }

}