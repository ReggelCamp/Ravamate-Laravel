<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserModelController extends Controller
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
    public function show(User $userModel)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $userModel)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, User $userModel)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $userModel)
    {
        //
    }

    public function getUser(){
        $user = User::first();

        return response()->json($user);
        
    }
}
