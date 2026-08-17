<?php

namespace App\Http\Controllers;

use App\Models\Sale_Management\dsrModel;
use Illuminate\Http\Request;

class DsrController extends Controller{
    
    public function getSalesmanNames(){
        $query = dsrModel::query();

        $query->select('salesman_name')
            ->whereDate('created_at', $request->date)
            ->distinct();

        $salesmen = $query->get();
    }
}