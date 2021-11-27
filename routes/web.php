<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

/* TraidingView Get Data */
Route::get('/getTraidingView/{id}', 'App\Http\Controllers\IndexController@getTraidingView');

/* Stock Check */
Route::get('/stockUpdate', 'App\Http\Controllers\IndexController@stockUpdate');

/* Get Company Overview */
Route::get('/companyoverview', 'App\Http\Controllers\IndexController@companyOverview');

/* Test Function */
Route::get('/test', 'App\Http\Controllers\IndexController@test');

/* Update Description, currency, exchange, country, sector, industry, address */
Route::get('/descriptionUpdate', 'App\Http\Controllers\IndexController@descriptionUpdate');

/* HomePage */
Route::get('/', 'App\Http\Controllers\HomeController@index');
Route::get('/getList', 'App\Http\Controllers\HomeController@ajax_stock_POST');

/* Stock Detail */
Route::get('/stock/{symbol}', 'App\Http\Controllers\StockController@specificStock');
Route::get('/stock/socket/{symbol}', 'App\Http\Controllers\StockController@specificStockSocket');
