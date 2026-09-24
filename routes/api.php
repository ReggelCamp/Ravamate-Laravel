<?php

use App\Http\Controllers\BankController;
use App\Http\Controllers\EcmfController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\productPlacementController;
use App\Http\Controllers\SalesmanModelController;
use App\Http\Controllers\SalesmanNamesController;
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
Route::post('/createBank',[BankController::class, 'createBank']);
Route::post('/updateSalesman',[SalesmanModelController::class, 'updateSalesman']);
Route::post('/createSalesmanName',[SalesmanNamesController::class, 'createSalesmanName']);
Route::post('/createPlacement',[productPlacementController::class, 'createPlacement']);
Route::post('/updateProductPlacement',[productPlacementController::class, 'updateProductPlacement']);
Route::post('/updateEcmf',[EcmfController::class, 'updateEcmftable']);