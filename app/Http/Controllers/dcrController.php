<?php

namespace App\Http\Controllers;

use App\Models\dcrModel;
use Illuminate\Http\Request;

class dcrController extends Controller
{
    public function getDCRtable(Request $request)
    {
        $query = dcrModel::query();

        if ($request->filled('salesman_name')) {
            $query->where('salesman_name', $request->salesman_name);
        }

        return response()->json($query->get());
    }

    public function getSalesmen()
    {
        $salesmen = dcrModel::select('salesman_name')
            ->distinct()
            ->orderBy('salesman_name')
            ->get();

        return response()->json($salesmen);
    }
}
