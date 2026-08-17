<?php

namespace App\Http\Controllers;

class Digital_mapController extends Controller{
    public function getGoogleMapsData()
    {
        $apiUrl = config('services.google_maps.api_url');
        $apiKey = config('services.google_maps.api_key');

        // Call Google Maps API here
        dd($apiKey);
        return response()->json([
            'success' => true,
        ]);
    }
}
