<?php

namespace App\Http\Controllers\Routes;

use App\Http\Controllers\Controller;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\SalesmanModelController;
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
            Route::post('/createSalesman',[SalesmanModelController::class, 'CreateSalesman']);
        });
        
        Route::prefix('store')->group(function () {
            Route::post('/createStore',[StoreController::class, 'createStore']);
        });
        
        Route::prefix('transaction')->group(function () {
            Route::get('/getTransactionDetails',[TransactionDetailsController::class, 'getTransactionDetails']);
            Route::get('/getTransaction',[TransactionController::class, 'getTransaction']);
            Route::post('/createTransaction',[TransactionController::class, 'createTransaction']);
            Route::post('/createTransactionDetails',[TransactionDetailsController::class, 'createTransactionDetails']);
        });
        
        Route::prefix('product')->group(function () {
            Route::get('/getProduct',[ProductController::class, 'getAllProduct']);
            Route::get('/getProductDetails',[ProductController::class, 'getProductDetails']);
        });
        
    }
}
