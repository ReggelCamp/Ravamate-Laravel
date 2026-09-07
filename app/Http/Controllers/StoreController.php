<?php

namespace App\Http\Controllers;

use App\Models\StoreModel;
use Illuminate\Http\Request;

class StoreController extends Controller
{
    public function getStore(){
        $stores = StoreModel::all();
        return response()->json($stores);
        
        dd($stores);
    }
}