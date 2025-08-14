<?php

namespace App\Http\Controllers\User\Post;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PostController extends Controller
{
    public function viewPost(Request $request)
    {
        $params = $request->all();

        return Inertia::render('Post/Containers/Post', [
            'post' => $params,
            'message' => "mohammad - post"
        ]);
    }
}
