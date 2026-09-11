<?php

namespace App\Http\Controllers;

use App\Models\Transaction;
use App\Models\transactionDetails;
use Illuminate\Http\Request;

class TransactionDetailsController extends Controller
{
    public function getTransactionDetails(){
        $transactionDetails= transactionDetails::with('transaction')->get();
        return response()->json($transactionDetails);
    }
}
