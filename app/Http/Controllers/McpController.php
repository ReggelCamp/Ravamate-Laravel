<?php

namespace App\Http\Controllers;

use App\Models\McpLayout;
use App\Models\StoreModel;
use Illuminate\Http\Request;

class McpController extends Controller
{
    public function createMcpController(Request $request)
    {
        $mcpLayout = McpLayout::create([
            'call_frequency' => $request->call_frequency,
            'days' => $request->days,
            'week' => $request->week,
            'call_time' => $request->call_time
        ]);

        return response()->json([
            'message' => 'Mcp created successfully',
            'data' => $mcpLayout
        ], 201);
    }

// public function getMcpLayout(Request $request){
//     $query = McpLayout::with([
//         'StoreDetails.salesman'
//     ]);

//     if ($request->filled('salesman_id')) {
//         $query->whereHas('StoreDetails', function ($query) use ($request) {
//             $query->where('salesman_id', $request->salesman_id);
//         });
//     }

//     $SalesmanMcp = $query->get();

//     return response()->json([
//         'message' => 'success',
//         'data' => $SalesmanMcp
//     ], 200);
// }

    
public function getSalesmanMcp(Request $request){
    $query = McpLayout::with([
        'SalesmanDetails',
        'StoreDetails'
    ]);

    if ($request->filled('salesman_id')) {
        $query->where(
            'salesman_id',
            $request->salesman_id
        );
    }

    return response()->json([
        'message' => 'success',
        'data' => $query->get()
    ], 200);
}
public function updateMcpTable(Request $request)
    {
        $store = StoreModel::find($request->store_id);

        $store->update([
            'call_frequency' => $request->call_frequency,
            'week' => $request->week,
            'day' => $request->days,
        ]);

        return response()->json([
            'message' => 'success',
            'data' => $store
        ], 200);
    }
}