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

    public function createCategoryData(Request $request)
    {
        $parameters = $request->all();
        // dd("dsfdsfsd");

        // dd($parameters);

        // $response = connectToServer("post", config('apiRoutes.user_login'), $parameters, "", "loginUser");

        return response()->json($parameters);
    }
}
