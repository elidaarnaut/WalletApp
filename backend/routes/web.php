<?php

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
//Auth::routes();
Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::resource('/budget',\App\Http\Controllers\BudgetController::class);
Route::resource('/user',\App\Http\Controllers\UserController::class);
Route::resource('/category',\App\Http\Controllers\CategoryController::class);
Route::resource('/subcategory',\App\Http\Controllers\SubCategoryController::class);
Route::resource('/plannedpayment',\App\Http\Controllers\PlannedPaymentController::class);
Route::resource('/record',\App\Http\Controllers\RecordController::class);

Route::post('/currencyconverter',[\App\Http\Controllers\CurrencyConverterController::class,'convert']);