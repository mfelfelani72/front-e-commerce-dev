<?php

use App\Http\Controllers\auth\AuthController;
use App\Http\Controllers\home\HomeController;
use Illuminate\Support\Facades\Route;


Route::resource('/admin', HomeController::class);
Route::resource('/', HomeController::class);

Route::controller(AuthController::class)->group(function () {
   
    Route::get('/login', 'login');
});
