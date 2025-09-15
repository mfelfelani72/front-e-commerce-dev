<?php

namespace App\Http\Controllers\Admin\Category;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminCategoryController extends Controller
{
    public function categoriesList()
    {
        return Inertia::render('Category/Containers/CategoriesList', [
            'category' => 1,
            'message' => "mohammad - category"
        ]);
    }

    public function createCategory()
    {
         return Inertia::render('Category/Containers/CreateCategory', [
            'category' => 1,
            'message' => "mohammad - category"
        ]);
    }
}
