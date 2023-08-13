<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;

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
    return view('newcard');
});

Route::resource('posts',PostController::class);

Route::get('query',[PostController::class, 'queryBuilder']);

Route::get('/test', function () {
    return view('test', ['name'=> 'Kelvin']);
});

Route::get('view-blade', [PostController::class, 'queryBuilder2']);

