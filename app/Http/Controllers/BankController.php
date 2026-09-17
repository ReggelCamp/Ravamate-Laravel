<?php

namespace App\Http\Controllers;

use App\Models\bank;
use Illuminate\Http\Request;

class BankController extends Controller
{
    public function createBank(Request $request){
        $bank = bank::create([
            'bank_code'     => $request->bank_code,
            'bank_name'     => $request->bank_name,
            'created_at'    => $request->created_at ?? now(),
            'updated_at'    => $request->updated_at ?? null,
        ]);
        return response()->json([
            'message' => 'Bank created successfully',
            'data' => $bank
        ], 200);
    }
}
