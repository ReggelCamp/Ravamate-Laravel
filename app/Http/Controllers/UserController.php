<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Helpers\ActivityLogHelper;
use App\Models\ActivityLog;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $user)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, User $user)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        //
    }

    public function Login(Request $request){
    $request->validate([
        'contact_number' => 'required|digits_between:10,11',
    ]);

    $user = User::where('contact_number', $request->contact_number)->first();

    if (!$user) {
        return response()->json(['message' => 'Contact Number not found'], 404);
    }

    Auth::login($user);
    $request->session()->regenerate();

    ActivityLogHelper::create($request,[
            'action' => 'login',
            'description' => 'User Logged in',
    ]);

    // dd($user);
    return response()->json(['message' => 'Logged in successfully', 'user' => $user]);
}

public function logout(Request $request)
{
    ActivityLogHelper::create($request,[
        'action' => 'logout',
        'description' => 'User Logged out',
    ]);

    Auth::logout();

    $request->session()->invalidate();
    $request->session()->regenerateToken();

    return response()->json([
        'message' => 'Logged out successfully'
    ]);
}

}
