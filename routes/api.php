<?php

use App\Http\Controllers\StoreController;
use App\Http\Controllers\TransactionController;
use App\Http\Controllers\TransactionDetailsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/createTransaction',[TransactionController::class, 'createTransaction']);

Route::post('/createStore',[StoreController::class, 'createStore']);

Route::post('/createTransactionDetails',[TransactionDetailsController::class, 'createTransactionDetails']);

Route::post('/syncSo', function (Request $request) {
    return response()->json([
        'success' => true,
        'message' =>
            'Transaction received successfully',
        'data' =>
            $request->all()
    ], 200);
});

Route::post('/retryTransaction',[TransactionController::class, 'retryTransaction']);