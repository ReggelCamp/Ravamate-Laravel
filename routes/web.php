<?php

use App\Http\Controllers\SalesmanModelController;
use App\Http\Controllers\ThemeController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/login', function () {
    return view('login-page');
});

Route::get('/dashboard', function () {
    return view('dashboard-page');
})->name('dashboard');

Route::get('/analytics', function () {
    return view('analytics-page');
})->name('analytics');

//Sales Management
Route::get('/dcr', function () {
    return view('salesmanagement.dcr-page');
})->name('dcr');

Route::get('/dsr', function () {
    return view('salesmanagement.dsr-page');
})->name('dsr');

Route::get('/dsrr', function () {
    return view('salesmanagement.dsrr-page');
})->name('dsrr');

Route::get('/ecmf', function () {
    return view('salesmanagement.ecmf-page');
})->name('ecmf');

Route::get('/pendingbo', function () {
    return view('salesmanagement.pendingBO-page');
})->name('pendingbo');

Route::get('/pendingrequest', function () {
    return view('salesManagement.pendingreq-page');
})->name('pendingrequest');

Route::get('/missedcall', function () {
    return view('salesManagement.missedCall-page');
})->name('missedcall');

Route::get('/offsitetransaction', function () {
    return view('salesManagement.offsiteTrans-page');
})->name('offsitetransaction');

Route::get('/pendingorders', function () {
    return view('salesManagement.penOrders-page');
})->name('pendingorders');

Route::get('/salesreport', function () {
    return view('salesManagement.salesReport-page');
})->name('salesreport');

Route::get('/salesreturnBO', function () {
    return view('salesManagement.salesRetBO');
})->name('salesreturnBO');

Route::get('/salesreturnRGS', function () {
    return view('salesManagement.salesRetRGS');
})->name('salesreturnRGS');

Route::get('/salessummary', function () {
    return view('salesManagement.salesSummary');
})->name('salessummary');

//Inventory Management
Route::get('/invValuation', function () {
    return view('inventoryManagement.invValuation');
})->name('invValuation');

Route::get('/stocktake', function () {
    return view('inventoryManagement.placementCheck');
})->name('placementCheck');

Route::get('/stockcheck', function () {
    return view('inventoryManagement.stockcheck');
})->name('stockcheck');

//Audit Trail
Route::get('/syncReport', function () {
    return view('auditTrail.syncReport-page');
})->name('syncReport');

//Others
Route::get('/deliveryMonitoring', function () {
    return view('others.deliveryMonitoring');
})->name('deliveryMonitoring');

Route::get('/prebookingDeliveryMonitoring', function () {
    return view('others.prebookingDeliveryMonitoring');
})->name('prebookingDeliverymonitoring');

//Maintenance
Route::get('/maintenance', function () {
    return view('maintenance.maintenance-page');
})->name('maintenance');

Route::get('/datamaintenance', function () {
    return view('maintenance.dataMaintenance');
})->name('datamaintenance');

Route::get('/sfaqueuing', function () {
    return view('maintenance.sfaQueuing');
})->name('sfaqueuing');

//Maintenance Customer
Route::get('/customer', function () {
    return view('maintenance.customer.customer-page');
})->name('customer');

//Maintenance Customer
Route::get('/cmf', function () {
    return view('maintenance.customer.cmf-page');
})->name('cmf');

//Maintenance Customer
Route::get('/customertagging', function () {
    return view('maintenance.customer.customertagging');
})->name('customertagging');

//Maintenance Customer
Route::get('/mcplayout', function () {
    return view('maintenance.customer.mcpLayout');
})->name('mcplayout');

//Maintenance Customer
Route::get('/channelmapping', function () {
    return view('maintenance.customer.channelMapping');
})->name('channelmapping');

//Maintenance Product
Route::get('/product', function () {
    return view('maintenance.product.product-page');
})->name('product');

//Maintenance Product
Route::get('/placementmaintenance', function () {
    return view('maintenance.product.placement-page');
})->name('placementmaintenance');

//Maintenance Product
Route::get('/mustcarry', function () {
    return view('maintenance.product.mustcarry-page');
})->name('mustcarry');

//Maintenance Others
Route::get('/bankmaintenance', function () {
    return view('maintenance.others.bank-page');
})->name('bankmaintenance');

//Maintenance Others
Route::get('/salesman', function () {
    return view('maintenance.others.salesman');
})->name('salesman');

//Maintenance Others
Route::get('/salesmanobjective', function () {
    return view('maintenance.others.salesmanObjective');
})->name('salesmanobjective');

//Color Theme
Route::get('/customize_theme',[ThemeController::class,'create']);
Route::post('/customize_theme',[ThemeController::class,'store']);

//update toggle
Route::put('/customize_theme/{id}', [ThemeController::class, 'updateActive']);
//update content
Route::put('/customize_theme/update/{id}', [ThemeController::class, 'update']);
//delete content
Route::delete('/customize_theme/delete/{id}', [ThemeController::class, 'destroy']);

//api response
Route::get('/customize_theme/getAll',[ThemeController::class,'getAll']);

//api get active
Route::get('/customize_theme/getActive',[ThemeController::class,'getActive']);

//getsalesman
Route::get('/getSalesman',[SalesmanModelController::class,'getSalesman']);

//for the fonts
Route::get('/fonts',[ThemeController::class,'getFonts']);