<?php

use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Home\HomeController;
use Illuminate\Support\Facades\Route;


Route::resource('/admin', HomeController::class);

Route::controller(HomeController::class)->group(function () {

    Route::get('/home', 'index');
    Route::get('/home2', 'index2');
});

// auth
Route::controller(AuthController::class)->group(function () {

    Route::get('/auth/login', 'login')->name("login");
    Route::post('/auth/loginUser', 'loginUser')->name('loginUser');
    Route::get('/auth/register', 'register')->name("register");
    Route::post('/auth/registerUser', 'registerUser')->name('registerUser');
});
