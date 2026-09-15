<?php

namespace App\Http\Controllers;

use App\Models\DashboardModel;
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

    public function createTransaction(Request $request){
        $transaction = Transaction::create([
            'transaction_date' => $request->transaction_date,
            'salesman_id'      => $request->salesman_id,
            'store_id'         => $request->store_id,
            'sales'            => $request->sales ?? null,
            'store_name'       => $request->store_name,

            'customercode'     => $request->customercode,
            'invoice_no'       => $request->invoice_no,
            'site'             => $request->site,
            'item_no'          => $request->item_no,
            'um'               => $request->um,
            'quantity'         => $request->quantity ?? null,
            'reason_code'      => $request->reason_code,

            'api_status'       => $request->api_status ?? null,
            'api_response'     => $request->api_response ?? null,

            'created_at'     => $request->created_at ?? now(),
            'updated_at'     => $request->updated_at ?? now(),

            'export_status' => $request->export_status ?? 'PENDING',
        ]);

        return response()->json([
            'message' => 'Transaction created successfully',
            'data' => $transaction
        ], 201);
    }

    public function TransactionSalesman(){
        return $this->belongsTo(
            DashboardModel::class,
            'salesman_id',
            'id'
        );
    }

    public function getTransaction(){
        $transactions = Transaction::with('TransactionSalesman')->get();

        $transactions->each(function ($transaction) {
            $transaction->salesman_name =
                $transaction->TransactionSalesman?->salesman_name;
        });

        return response()->json($transactions);
    }

    // public function getTransaction(){
    //     $transaction = Transaction::all();

    //     return response()->json($transaction);
    // }
}