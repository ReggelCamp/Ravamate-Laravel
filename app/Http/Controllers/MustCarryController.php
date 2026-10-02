<?php

namespace App\Http\Controllers;

use App\Models\MustCarryModel;
use App\Models\product;
use App\Models\productPlacementModel;
use App\Models\transactionDetails;
use Illuminate\Http\Request;

class MustCarryController extends Controller
{
    public function createMustCarry(Request $request){
        $product = MustCarryModel::create([
            'customer_type' => $request->customer_type,
            'item_number'   => $request->item_number,
            'description'   => $request->description,
            'is_active'     => $request->is_active ?? "YES",
            'created_at'    => now(),
        ]);

        return response()->json([
            'message' => 'Product created successfully',
            'data' => $product,
        ], 201);
    }

    public function getMustCarry(Request $request){
        $mustCarry = MustCarryModel::all();

        return response()->json([
            'message' => 'Must Carry retrieved successfully',
            'data' => $mustCarry,
        ], 200);
    }

    public function deleteMustCarry(Request $request){
    $mustCarry = MustCarryModel::find($request->id);

    if (!$mustCarry) {
        return response()->json([
            'message' => 'Must Carry item not found',
        ], 404);
    }

    $mustCarry->delete();

    return response()->json([
        'message' => 'Must Carry item deleted successfully',
    ], 200);
}
}