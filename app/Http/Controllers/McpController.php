<?php

namespace App\Http\Controllers;

use App\Models\McpLayout;
use Illuminate\Http\Request;

class McpController extends Controller{
    public function createMcpController(Request $request){
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

    public function getMcpLayout(){
        $SalesmanMcp = McpLayout::with([
            "SalesmanDetails",
            "StoreDetails"
        ]);
        return response()->json([
            'message' => 'success',
            'data' => $SalesmanMcp
        ], 201);
    }
}