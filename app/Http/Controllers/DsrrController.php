<?php

namespace App\Http\Controllers;

use App\Models\DsrrModel;
use Illuminate\Http\Request;

class DsrrController extends Controller{
    
    public function getSalesmanNames(Request $request){
        $validated = $request->validate([
            'date' => ['required', 'date_format:Y-m-d'],
        ]);

        $query = DsrrModel::query();

        $query->select('salesman_name')
            ->whereDate('created_at', $validated['date'])
            ->whereNotNull('salesman_name')
            ->distinct()
            ->orderBy('salesman_name');

        $salesmen = $query->get();

        return response()->json($salesmen);
    }
}
