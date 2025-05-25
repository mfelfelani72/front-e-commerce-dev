<?php

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

if (!function_exists('connectToServer')) {
    function connectToServer($method, $endPoint, $parameters = [], $headers = [], $route = '')
    {
        try {
            $http = Http::withHeaders($headers);

            if ($method === 'post') {
                $response = $http->post(env('API_BASE_URL') . $endPoint, $parameters);
            } elseif ($method === 'get') {
                $response = $http->get(env('API_BASE_URL') . $endPoint, $parameters);
            } else {
                throw new \InvalidArgumentException("Method not supported. Only 'get' and 'post' are allowed.");
            }

            return $response->json();
        } catch (\Exception $e) {
            Log::error("Connection to server failed, this route is: --> {$route} <--", [
                'error' => $e->getMessage()
            ]);

            return false;
        }
    }
}
