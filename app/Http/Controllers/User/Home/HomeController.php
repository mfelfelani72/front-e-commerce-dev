<?php

namespace App\Http\Controllers\USer\home;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        // $response = Http::get('https://dog.ceo/api/breed/hound/list');
        // dd($response->json()["message"]);
        // try {
        //     // استفاده از HTTP کلاینت خود Laravel (ترجیح‌داده شده)
        //     $response = Http::timeout(30)->get('https://cat-fact.herokuapp.com/facts/random');

        //     // اگر پاسخ موفقیت‌آمیز بود
        //     if ($response->successful()) {
        //         $data = $response->json();
        //         return response()->json([
        //             'status' => 'success',
        //             'data' => $data
        //         ]);
        //     } else {
        //         return response()->json([
        //             'status' => 'error',
        //             'message' => 'API request failed!'
        //         ], 500);
        //     }
        // } catch (\Exception $e) {
        //     // لاگ خطا (اختیاری)
        //     dd('API Error: ' . $e->getMessage());

        //     return response()->json([
        //         'status' => 'error',
        //         'message' => 'Internal server error!'
        //     ], 500);
        // }
        return Inertia::render('Home/HomeLanding', [
            // 'message' => $response->json()["message"]
            'message' => "message"
        ]);
    }
    public function test()
    {
        return Inertia::render('Home/Test', [
            'message' => "mohammad - test"
        ]);
    }
}
