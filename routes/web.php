<?php

use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\User\Home\HomeController;
use App\Http\Controllers\User\Post\PostController;
use App\Http\Controllers\Admin\Post\AdminPostController;
use App\Http\Controllers\Admin\Category\AdminCategoryController;
use Illuminate\Support\Facades\Route;

// admin
Route::resource('/admin', HomeController::class);

// post
Route::controller(AdminPostController::class)->group(function () {
   
    Route::get('/admin/posts/posts-list', 'listPosts');
    Route::get('/admin/posts/create-post', 'CreatePost');
});

// category
Route::controller(AdminCategoryController::class)->group(function () {
   
    Route::get('/admin/category/categories-list', 'CategoriesList');
    Route::get('/admin/category/create-category', 'CreateCategory');
});

// user
Route::controller(HomeController::class)->group(function () {
    // test
    Route::get('/mohammad/test', 'test');

    Route::get('/', 'index');
});

Route::controller(PostController::class)->group(function () {
   
    Route::get('/posts/view-post', 'viewPost');
});

// auth
Route::controller(AuthController::class)->group(function () {

    Route::get('/auth/login', 'login')->name("login");
    Route::post('/auth/loginUser', 'loginUser')->name('loginUser');
    Route::get('/auth/register', 'register')->name("register");
    Route::post('/auth/registerUser', 'registerUser')->name('registerUser');
});
