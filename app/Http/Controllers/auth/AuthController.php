<?php

namespace App\Http\Controllers\auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function login()
    {
        return inertia('containers/Login', [
            "message" => "mohammad"
        ]);
    }
}
