<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AdminRouter extends Controller
{
    public function index()
    {
        return view('login-page');
    }
}
