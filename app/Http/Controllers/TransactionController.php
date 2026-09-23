<?php

namespace App\Http\Controllers;

use App\Models\DashboardModel;
use App\Models\SalesmanModel;
use App\Models\StoreModel;
use App\Models\SyncData;
use App\Models\Transaction;
use App\Models\transactionDetails;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class TransactionController extends Controller
{
    public function getSalesmanTransaction(){
        $salesmanTransaction = Transaction::with([
            'TransactionSalesman',
            'transactionDetails.productDetails',
            'TransactionStore',
        ])->get();

        return response()->json($salesmanTransaction);
    }
    public function getStoreTransaction(){
        $storeTransaction = Transaction::with('TransactionStore')->get();
        return response()->json($storeTransaction);
    }

    // public function createTransaction(Request $request){
    //     $transaction = Transaction::create([
    //         'transaction_date' => $request->transaction_date,
    //         'salesman_id'      => $request->salesman_id,
    //         'store_id'         => $request->store_id,
    //         // 'sales'            => $request->sales ?? null,

    //         'longitude'        => $request->longitude,
    //         'latitude'         => $request->latitude,

    //         'document_no'      => $request->document_no,
    //         // 'customercode'     => 'CC0' . $request->store_id,
    //         'invoice_no'       => $request->invoice_no,
    //         'site'             => $request->site,
    //         'item_no'          => $request->item_no,
    //         'um'               => $request->um,
    //         // 'quantity'         => $request->quantity ?? null,
    //         'reason_code'      => $request->reason_code,
            
    //         'remarks'          => $request->remarks,
    //         'payment_type'     => $request->payment_type,

    //         'api_status'       => $request->api_status ?? "PENDING",
    //         'api_response'     => $request->api_response ?? null,

    //         'created_at'     => $request->created_at ?? now(),
    //         'updated_at'     => $request->updated_at ?? now(),

    //         //'api_status' => $request->api_status ?? 'PENDING',
    //     ]);

    //     return response()->json([
    //         'message' => 'Transaction created successfully',
    //         'data' => $transaction
    //     ], 201);
    // }

    
    public function createTransaction(Request $request){

    $salesman = SalesmanModel::find($request->salesman_id);
    $store = StoreModel::find($request->store_id);

    if (!$salesman) {
        return response()->json([
            'message' => 'Salesman not found.'
        ], 404);
    }

    if (!$store) {
        return response()->json([
            'message' => 'Store not found.'
        ], 404);
    }

    if ($salesman->default_ord_type !== $store->order_type) {
        return response()->json([
            'message' => 'Order type mismatch: salesman is assigned to ' . $salesman->default_ord_type .
                          ' but store ' . $store->store_id . ' is ' . $store->order_type . '.'
        ], 422);
    }

    $transaction = Transaction::create([
        'transaction_date' => $request->transaction_date,
        'salesman_id'      => $request->salesman_id,
        'store_id'         => $request->store_id,

        'longitude'        => $request->longitude,
        'latitude'         => $request->latitude,

        'document_no'      => $request->document_no,
        'invoice_no'       => $request->invoice_no,
        'site'             => $request->site,
        'item_no'          => $request->item_no,
        'um'               => $request->um,
        'reason_code'      => $request->reason_code,

        'remarks'          => $request->remarks,
        'order_type'       => $salesman->default_ord_type,
        'payment_type'     => $request->payment_type,

        'api_status'       => $request->api_status ?? "PENDING",
        'api_response'     => $request->api_response ?? null,

        'created_at'       => $request->created_at ?? now(),
        'updated_at'       => $request->updated_at ?? now(),
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

    public function TransactionDetails(Request $request){
        $details = transactionDetails::with('productDetails')
            ->where('transaction_id', $request->transaction_id)
            ->get();

        return response()->json($details);
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

    public function getSoPendingSalesman(){
        
    $salesmen = Transaction::with('TransactionSalesman')
        ->where('api_status', 'PENDING')
        ->get()
        ->groupBy('salesman_id')
        ->map(function ($transactions) {
            return [
                'salesman_id' => $transactions->first()->salesman_id,
                'salesman_name' =>
                    $transactions->first()->TransactionSalesman?->salesman_name,
                'transaction_ids' =>
                    $transactions->pluck('transaction_id')->values()->all(),
            ];
        })
        ->values();

    return response()->json([
        'data' => $salesmen,
    ]);
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

    public function syncTransaction(Request $request){
    try {

        // "Sync Specific Transaction" sends transaction_ids,
        // "Sync Per Salesman" sends salesman_ids.
        $transactionIds = array_filter((array) $request->input('transaction_ids', []));
        $salesmanIds = array_filter((array) $request->input('salesman_ids', []));

        if (empty($transactionIds) && empty($salesmanIds)) {
            return response()->json([
                'success' => false,
                'message' => 'No transaction or salesman selected.',
            ], 422);
        }

        // Expand the selected salesmen into their pending transactions
        if (!empty($salesmanIds)) {
            $transactionIds = array_merge(
                $transactionIds,
                Transaction::where('api_status', 'PENDING')
                    ->whereIn('salesman_id', $salesmanIds)
                    ->pluck('transaction_id')
                    ->all()
            );
        }

        $transactionIds = array_values(array_unique($transactionIds));

        if (empty($transactionIds)) {
            return response()->json([
                'success' => false,
                'message' => 'No pending transaction found for the selected salesman.',
            ], 422);
        }

        $processed = 0;

        foreach ($transactionIds as $transactionId) {

            $transaction = Transaction::with('TransactionDetails', 'TransactionSalesman')
                ->where('transaction_id', $transactionId)
                ->where('api_status', 'PENDING')
                ->first();

            // Skip transactions that don't exist
            // or have already been processed
            if (!$transaction) {
                continue;
            }

            try {

                // Save transaction to SyncData
                $syncTransaction = SyncData::create([
                    'order_type'   => $transaction->TransactionSalesman?->default_ord_type,
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
                    'api_response' =>
                        'Sale order processed successfully. Transaction No: '
                        . $transaction->document_no
                        . ' | SO Number: '
                        . $transaction->invoice_no,
                ]);

                $processed++;

            } catch (\Throwable $e) {

                // Mark this transaction as failed
                $transaction->update([
                    'api_status' => 'FAILED',
                    'api_response' => $e->getMessage(),
                    // 'api_response' => 'Sync Failed',
                ]);

                continue;
            }
        }

        // Return only after ALL selected transactions have been processed
        return response()->json([
            'success' => true,
            'message' => 'Selected transactions processed successfully.',
            'count' => $processed,
        ], 200);

    } catch (\Throwable $e) {

        return response()->json([
            'success' => false,
            'message' => 'Unable to process transactions.',
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