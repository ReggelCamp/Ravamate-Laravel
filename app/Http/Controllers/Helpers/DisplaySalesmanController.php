<?php

namespace App\Http\Controllers\Helpers;

use App\Models\ActivityLog;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;

class DisplaySalesmanController extends Controller
{
    public function getSalesman()
    {
        $response = Http::post(
            'https://php-7.4.ravamate.com/SFA_CDO/cdo/connectionString/applicationipAPI.php'
        );
        
        //dd($response->status(), $response->body(), $response->json());

        return response()->json($response->json());
    }
}