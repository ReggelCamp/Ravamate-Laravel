<?php

namespace App\Http\Controllers;

use App\Models\DsrModel;
use Illuminate\Http\Request;

class DsrController extends Controller{
    
    public function getSalesmanNames(Request $request){
        $validated = $request->validate([
            'date' => ['required', 'date_format:Y-m-d'],
        ]);

        $query = DsrModel::query();

        $query->select('salesman_name')
            ->whereDate('created_at', $validated['date'])
            ->whereNotNull('salesman_name')
            ->distinct()
            ->orderBy('salesman_name');

        $salesmen = $query->get();

        return response()->json($salesmen);
    }
}
