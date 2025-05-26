<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function login()
    {
        return inertia('Containers/Login', [
            "message" => "mohammad - login"
        ]);
    }
    public function loginUser(Request $request)
    {
        $parameters = $request->all();

        $response = connectToServer("post", config('apiRoutes.user_login'), $parameters, "", "loginUser");

        return response()->json($response);
    }

    public function register()
    {
        return inertia('Containers/Register', [
            "message" => "mohammad - register"
        ]);
    }

    public function registerUser(Request $request)
    {
        $parameters = $request->all();

        $response = connectToServer("post", config('apiRoutes.user_register'), $parameters, "", "registerUser");

        return response()->json($response);
    }
}
