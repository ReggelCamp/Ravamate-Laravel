<?php

namespace App\Http\Controllers\Routes;

use App\Http\Controllers\Controller;
use App\Http\Controllers\DashboardController;
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
        });
    }
}
