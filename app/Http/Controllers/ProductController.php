<?php

namespace App\Http\Controllers;

use App\Models\product;
use App\Models\productPlacementModel;
use App\Models\transactionDetails;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    function getProductsTable(){
        $products = product::get();

        return response()->json($products);
    }

    function getAllProduct(Request $request){
        $validated = $request->validate([
            'transaction_id' => ['required'],
        ]);

        $product = transactionDetails::with('productDetails')
            ->where('transaction_id', $validated['transaction_id'])
            ->get()
            ->map(function (transactionDetails $detail) {
                $product = $detail->productDetails;
        //dd($product);
                return [
                    'StockCode' => $product?->StockCode ?? $detail->StockCode,
                    'description' => $product?->description ?? $detail->description,
                    'quantity' => $detail->quantity,
                    'amount' => $detail->quantity * ($product?->price ?? 0),
                    'price' => $product?->price ?? 0
                ];
            })
            ->values();
    
        return response()->json([
            'data' => $product,
            'length' => $product->count()
        ]);
    }
}
