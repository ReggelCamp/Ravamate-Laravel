<?php

namespace App\Http\Controllers;

use App\Models\Transaction;
use App\Models\transactionDetails;
use Illuminate\Http\Request;

class TransactionDetailsController extends Controller
{
    public function getTransactionDetails(){
        $transactionDetails = transactionDetails::with('transaction')->get();
        return response()->json($transactionDetails);
    }

    public function createTransactionDetails(Request $request){
        $request->validate([
            'transaction_id' => ['required', 'exists:transaction,transaction_id'],
        ]);
        $transactionDetails = TransactionDetails::create([
            
            'transaction_id' => $request->transaction_id,
            'product_id'     => $request->product_id,
            'quantity'       => $request->quantity,
            'current_price'  => $request->current_price,
            'u_m'            => $request->u_m,
            'payment_method' => $request-> payment_method ?? null,
            'bank_code'      => $request-> bank_code ?? null,
            'check_no'       => $request-> check_no ?? null,
            'bank_name'      => $request-> bank_name ?? null,
            'check_date'     => $request-> check_date ?? null,
            'export_status'  => $request->export_status ?? null,
        ]);

        return response()->json($transactionDetails);
    }
}
