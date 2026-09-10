<?php

namespace App\Http\Controllers;

use App\Models\Transaction;
use Illuminate\Http\Request;

class TransactionController extends Controller
{
    public function getSalesmanTransaction(){
        $salesmanTransaction = Transaction::with('TransactionSalesman')->get();
        return response()->json($salesmanTransaction);
    }
    public function getStoreTransaction(){
        $storeTransaction = Transaction::with('TransactionStore')->get();
        return response()->json($storeTransaction);
    }
}
