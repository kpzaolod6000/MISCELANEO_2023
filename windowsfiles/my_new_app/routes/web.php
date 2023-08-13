<?php

use App\Http\Controllers\ApiController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\TestController;
use Illuminate\Http\Request;
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

Route::view('/view-direct','view', ['name' => 'kelvin']);

Route::get('/new', function () {
    return "hello wordl";
});

Route::get('/new2', function (Request $request) {
    return "hello wordl" . $request->get('variable');
});
//using controllers
Route::get('/controllers', [TestController::class, 'prints']);

Route::get('/parameters/{id}', [TestController::class, 'parameter']);

Route::get('/blog/{id}/{slug?}', [TestController::class, 'blog']);

/* establecer el nombre */
/* se llama la ruta por el nombre */

Route::get('/blog-detail/{id}/{slug?}', [TestController::class, 'blog'])->name('blogs');

/* establece la ruta con  un prefijo */

Route::prefix('dashboard')->group(function(){

    /* set name of route  for calling from a particular view*/
    Route::name('dashboard.')->group(function(){

        Route::get('/users', function(){
          return view('view');
        })->name('users');

        Route::get('/users/show', [TestController::class, 'prints'])->name('users.show');
        Route::get('/users/edit', [TestController::class, 'prints'])->name('users.edit');
    });
});

Route::prefix('public')->group(function(){
    Route::get('/blog', [TestController::class, 'prints']);
    Route::get('/blog/show', [TestController::class, 'prints']);
    Route::get('/blog/edit', function () {
        return "hello world";
    });
});

/* use the middleware of product_token */

Route::get('products', [TestController::class, 'printsProducts'])->middleware('product_token');

Route::get('sin_token', [TestController::class, 'sinToken'])->name('sin_token');

//router category
// Route::get('/categories', [CategoryController::class, 'index'])->name('categories');

// automatically associates the methods
Route::resource('categories',CategoryController::class);
// Route::apiResource('products',ApiController::class); is in the api.php file

//
Route::resource('post',PostController::class);