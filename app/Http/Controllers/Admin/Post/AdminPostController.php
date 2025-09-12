<?php

namespace App\Http\Controllers\Admin\Post;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;


class AdminPostController extends Controller
{
    public function listPost()
    {
        return Inertia::render('posts/containers/PostLists', [
            'post' => 1,
            'message' => "mohammad - post"
        ]);
    }

    public function createPost()
    {
         return Inertia::render('posts/containers/CreatePost', [
            'post' => 1,
            'message' => "mohammad - post"
        ]);
    }
}
