<?php

namespace App\Http\Controllers;

use App\Models\DcrModel;
use Illuminate\Http\Request;

class DcrController extends Controller
{
    public function getDCRtable(Request $request)
    {
        $query = DcrModel::query();

        if ($request->filled('salesman_name')) {
            $query->where('salesman_name', $request->salesman_name);
        }

        return response()->json($query->get());
    }

    public function getSalesmen()
    {
        $salesmen = DcrModel::select('salesman_name')
            ->distinct()
            ->orderBy('salesman_name')
            ->get();

        return response()->json($salesmen);
    }
}
