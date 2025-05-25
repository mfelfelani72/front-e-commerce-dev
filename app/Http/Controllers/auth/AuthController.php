<?php

namespace App\Http\Controllers\auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function login()
    {
        return inertia('containers/Login', [
            "message" => "mohammad - login"
        ]);
    }
    public function loginUser(Request $request)
    {




        $method = 'post';
        $endPoint =  config('apiRoutes.user_login');
        $parameters = [
            'email' => 'value',
            'password' => 'value',
        ];
        $headers = [
            "Accept-Version" => 1,
            "Accept" => "application/json",
            "Access-Control-Allow-Origin" => "*",
            "Content-Type" => "application/json; charset=utf-8",
        ];
        $route = 'some-route-name';

        $response = connectToServer($method, $endPoint, $parameters, $headers, $route);
        dd($response);
    }

    public function register()
    {
        return inertia('containers/Register', [
            "message" => "mohammad - register"
        ]);
    }
}
