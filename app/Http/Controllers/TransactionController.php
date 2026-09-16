<?php

namespace App\Http\Controllers;

use App\Models\DashboardModel;
use App\Models\SyncData;
use App\Models\Transaction;
use App\Models\transactionDetails;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

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

            'longitude'           => $request->longitude,
            'latitude'            => $request->latitude,
            
            'customercode'     => $request->customercode,
            'invoice_no'       => $request->invoice_no,
            'site'             => $request->site,
            'item_no'          => $request->item_no,
            'um'               => $request->um,
            'quantity'         => $request->quantity ?? null,
            'reason_code'      => $request->reason_code,

            'api_status'       => $request->api_status ?? "PENDING",
            'api_response'     => $request->api_response ?? null,

            'created_at'     => $request->created_at ?? now(),
            'updated_at'     => $request->updated_at ?? now(),

            //'api_status' => $request->api_status ?? 'PENDING',
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

    public function TransactionDetails(){
            return $this->hasMany(
                transactionDetails::class,
                'transaction_id',
                'id'
            );
    }

    public function getFdisTransaction(){
        $transactions = Transaction::with('TransactionSalesman')
        ->get();

        $transactions->each(function ($transaction) {
            $transaction->salesman_name =
                $transaction->TransactionSalesman?->salesman_name;
        });

        return response()->json($transactions);
    }

    public function getSoPendingTransaction(){
        $transactions = Transaction::with('TransactionSalesman','TransactionDetails')
            ->where('api_status', 'PENDING')
            ->get();

        $transactions->each(function ($transaction) {
            $transaction->salesman_name =
                $transaction->TransactionSalesman?->salesman_name;
        });

        return response()->json([
            'data' => $transactions,
            'count' => $transactions->count()
        ]);
        //return response()->json($transactions);
    }

    public function getSoFailedTransaction(){
        $transaction = Transaction::with('TransactionSalesman','TransactionDetails')
        ->where('api_status', 'FAILED')
        ->get();

        $transaction->each(function ($transaction) {
            $transaction->salesman_name =
                $transaction->TransactionSalesman?->salesman_name;
        });

        return response()->json([
            'data' => $transaction,
            'count' => $transaction->count()
        ]);
    }
    
    public function getSoSuccessTransaction(){
        $transaction = Transaction::with('TransactionSalesman','TransactionDetails')
        ->where('api_status', 'SYNCED')
        ->get();

        $transaction->each(function ($transaction) {
            $transaction->salesman_name =
                $transaction->TransactionSalesman?->salesman_name;
        });

        return response()->json([
            'data' => $transaction,
            'count' => $transaction->count()
        ]);
    }

    public function getReturnPendingTransaction(){
    }
    public function syncSo(Request $request){
        $syncTransaction = SyncData::create([
            'customercode'     => $request->customercode,
            'invoice_no'       => $request->invoice_no,
            'site'             => $request->site,
            'item_no'          => $request->item_no,
            'um'               => $request->um,
            'quantity'         => $request->quantity ?? null,
            'reason_code'      => $request->reason_code,
        ]);
        
        return response()->json([
            'message' => 'Sync successfully',
            'data' => $syncTransaction
        ], 200);
    }

    // public function syncTransaction(){
    //     try{

    //     }
    //     catch (\Throwable $e) {
    //         return response()->json([
    //             'message' => 'Transaction sync failed',
    //             'error'   => $e->getMessage(),
    //         ], 500);
    //     }
    // }


    public function syncTransaction(Request $request){
        try {

            $transaction = Transaction::with('TransactionDetails')
                ->where('transaction_id', $request->transaction_id)
                ->where('api_status', 'PENDING')
                ->first();

            if (!$transaction) {
                return response()->json([
                    'success' => false,
                    'message' => 'Transaction not found or already processed.'
                ], 404);
            }

            try {

                // Save transaction to SyncData
                $syncTransaction = SyncData::create([
                    'customercode' => $transaction->customercode,
                    'invoice_no'   => $transaction->invoice_no,
                    'site'         => $transaction->site,
                    'item_no'      => $transaction->item_no,
                    'um'           => $transaction->um,
                    'quantity'     => $transaction->quantity,
                    'reason_code'  => $transaction->reason_code,
                ]);

                // Mark original transaction as synced
                $transaction->update([
                    'api_status' => 'SYNCED',
                    'api_response' => json_encode([
                        'success' => true,
                        'message' => 'Transaction synced successfully',
                        'data' => $syncTransaction
                    ]),
                ]);

                return response()->json([
                    'success' => true,
                    'message' => 'Transaction synced successfully',
                    'status' => 'SYNCED',
                    'transaction_id' => $transaction->transaction_id,
                    'data' => $syncTransaction
                ], 200);

            } catch (\Throwable $e) {

                // Something failed while saving
                $transaction->update([
                    'api_status' => 'FAILED',
                    //'api_response' => $e->getMessage(),
                    'api_response' => 'Sync Failed',
                ]);

                return response()->json([
                    'success' => false,
                    'message' => 'Transaction sync failed',
                    'status' => 'FAILED',
                    'transaction_id' => $transaction->transaction_id,
                    'error' => "Failes Sync" 
                    //'error' => $e->getMessage()
                ], 500);
            }

        } catch (\Throwable $e) {

            return response()->json([
                'success' => false,
                'message' => 'Unable to process transaction.',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    public function retryAllFailed(){
    try {

        $transactions = Transaction::where('api_status', 'FAILED')
            ->get();

        if ($transactions->isEmpty()) {
            return response()->json([
                'success' => false,
                'message' => 'No failed transactions found.'
            ], 404);
        }

        foreach ($transactions as $transaction) {

            $transaction->update([
                'api_status' => 'PENDING'
            ]);
        }

        return response()->json([
            'success' => true,
            'message' => 'All failed transactions moved back to pending.',
            'count' => $transactions->count()
        ]);

    } catch (\Throwable $e) {

        return response()->json([
            'success' => false,
            'message' => 'Failed to reprocess transactions.',
            'error' => $e->getMessage()
        ], 500);
    }
    }

}