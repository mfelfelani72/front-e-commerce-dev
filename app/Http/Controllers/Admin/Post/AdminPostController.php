<?php

namespace App\Http\Controllers\Admin\Post;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;


class AdminPostController extends Controller
{
    public function listPosts()
    {
        return Inertia::render('Posts/Containers/PostsList', [
            'post' => 1,
            'message' => "mohammad - post"
        ]);
    }

    public function createPost()
    {
         return Inertia::render('Posts/Containers/CreatePost', [
            'post' => 1,
            'message' => "mohammad - post"
        ]);
    }
}
