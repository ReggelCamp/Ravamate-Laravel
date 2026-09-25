<?php

namespace App\Http\Controllers\Routes;

use App\Http\Controllers\BankController;
use App\Http\Controllers\Controller;
use App\Http\Controllers\DashboardController;
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

class ApiRoute extends Controller
{
    public function __construct()
    {
        Route::prefix('dashboard')->group(function () {
            Route::get('/getSalesman', [DashboardController::class, 'getSalesman']);
            Route::get('/getSalesmanInfo', [DashboardController::class, 'getSalesmanInfo']);
            Route::get('/getDashboardTable',[DashboardController::class,'getSalesmanTable']);
            Route::get('/getLatestTransaction',[DashboardController::class,'getLatest']);
            Route::get('/getSalesmanSummary', [DashboardController::class, 'getSalesmanSummary']);
        });

        Route::prefix('salesman')->group(function () {
            Route::get('/getSalesman',[SalesmanModelController::class, 'getSalesman']);
            Route::get('/getSalesmanWithTransaction',[SalesmanModelController::class, 'getSalesmanWithTransaction']);
            Route::post('/createSalesman',[SalesmanModelController::class, 'CreateSalesman']);
            Route::post('/updateSalesman',[SalesmanModelController::class, 'updateSalesman']);

            Route::get('/getSalesmanNames',[SalesmanNamesController::class, 'getSalesmanNames']);

        });
        
        Route::prefix('store')->group(function () {
            Route::post('/createStore',[StoreController::class, 'createStore']);
            Route::post('/updateEcmftable', [EcmfController::class, 'updateEcmftable']);
            Route::get('/getStore',[StoreController::class, 'getStore']);
        });
        
        Route::prefix('transaction')->group(function () {
            Route::get('/getFdisTransaction',[TransactionController::class, 'getFdisTransaction']);
            Route::get('/getTransactionDetails',[TransactionDetailsController::class, 'getTransactionDetails']);

            Route::get('/getSalesmanTransaction',[TransactionController::class, 'getSalesmanTransaction']);
            
            Route::get('/getFitScreenData',[TransactionController::class, 'getFitScreenData']);

            Route::get('/getStoreTransaction',[TransactionController::class, 'getStoreTransaction']);
            Route::get('/DisplayTransactionDetailsById',[TransactionController::class, 'TransactionDetails']);

            Route::get('/getSoPendingTransaction',[TransactionController::class, 'getSoPendingTransaction']);
            Route::get('/getSoPendingSalesman',[TransactionController::class, 'getSoPendingSalesman']);
            Route::get('/getSoFailedTransaction',[TransactionController::class, 'getSoFailedTransaction']);
            Route::get('/getSoSuccessTransaction',[TransactionController::class, 'getSoSuccessTransaction']);
            
            Route::get('/getReturnPendingTransaction',[TransactionController::class, 'getReturnPendingTransaction']);
            Route::get('/getReturnFailedTransaction',[TransactionController::class, 'getReturnFailedTransaction']);
            Route::get('/getReturnSuccessTransaction',[TransactionController::class, 'getReturnSuccessTransaction']);

            Route::get('/getPaymentPendingTransaction',[TransactionController::class, 'getPaymentPendingTransaction']);
            Route::get('/getPaymentFailedTransaction',[TransactionController::class, 'getPaymentFailedTransaction']);
            Route::get('/getPaymentSuccessTransaction',[TransactionController::class, 'getPaymentSuccessTransaction']);

            Route::get('/getAutoStockPendingTransaction',[TransactionController::class, 'getAutoStockPendingTransaction']);
            Route::get('/getAutoStockFailedTransaction',[TransactionController::class, 'getAutoStockFailedTransaction']);
            Route::get('/getAutoStockSuccessTransaction',[TransactionController::class, 'getAutoStockSuccessTransaction']);

            Route::get('/syncTransaction',[TransactionController::class, 'syncTransaction']);
            
            Route::post('/createTransaction',[TransactionController::class, 'createTransaction']);
            Route::post('/createTransactionDetails',[TransactionDetailsController::class, 'createTransactionDetails']);

            Route::post('/retryAllFailed',[TransactionController::class, 'retryAllFailed']);
        });
        
        Route::prefix('product')->group(function () {
            Route::get('/getProduct',[ProductController::class, 'getAllProduct']);
            Route::get('/getProductDetails',[ProductController::class, 'getProductDetails']);
            Route::get('/getProductTable',[ProductController::class, 'getProductsTable']);

            Route::post('/createPlacement',[productPlacementController::class, 'createPlacement']);
            Route::post('/updateProductPlacement',[productPlacementController::class, 'updateProductPlacement']);
            Route::get('/getAllProductPlacement',[productPlacementController::class, 'getAllProductPlacement']);
        });

        Route::prefix('bank')->group(function () {
            Route::post('/createBank',[BankController::class, 'createBank']);
        });
        
    }
}
