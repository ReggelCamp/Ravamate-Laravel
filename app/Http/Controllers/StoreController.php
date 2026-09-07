<?php

namespace App\Http\Controllers;

use App\Models\SalesmanModel;
use App\Models\StoreModel;
use Illuminate\Http\Request;

class StoreController extends Controller
{
    public function getStore(){
        $stores = StoreModel::with('salesman')->get();
        return response()->json($stores);
    }
}