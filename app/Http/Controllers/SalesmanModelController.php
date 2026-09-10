<?php

namespace App\Http\Controllers;

use App\Models\SalesmanModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Schema;

class SalesmanModelController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
       
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
    public function show(SalesmanModel $salesmanModel)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(SalesmanModel $salesmanModel)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, SalesmanModel $salesmanModel)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(SalesmanModel $salesmanModel)
    {
        //
    }

    public function getSalesman(){
        $salesman = SalesmanModel::all();
        return response()->json($salesman);

        // $salesman = SalesmanModel::with("stores")->get();
        // return response()->json($salesman);
    }

    public function CreateSalesman(Request $request)
    {
        $validated = $request->validate([
            'salesman_name' => ['required', 'string', 'max:255'],
            'password' => ['required', 'string', 'min:8', 'max:255'],
            'call_time' => ['nullable', 'date_format:H:i'],
            'default_ord_type' => ['nullable', 'string', 'max:100'],
            'loading_capacity' => ['nullable', 'numeric', 'min:0'],
            'color' => ['nullable', 'regex:/^#[0-9A-Fa-f]{6}$/'],
            'contact_no' => ['nullable', 'string', 'max:25'],
            'cashier_no' => ['nullable', 'string', 'max:25'],
            'supervisor_name' => ['nullable', 'string', 'max:255'],
            'supervisor_no' => ['nullable', 'string', 'max:25'],
        ]);

        $salesmanData = [
            ...$validated,
            'password' => Hash::make($validated['password']),
            // These legacy columns are required by the existing salesman table.
            'attendance' => '0',
            'target_mcp' => '0',
            'productive' => '0',
            'unproductive' => '0',
            'strike_rate' => '0',
            'selling_hrs' => '0',
            'sale' => '0',
        ];

        // Some existing installations have these accounting columns although
        // they are not part of the original salesman migration. They are NOT
        // NULL, so initialize them for a newly created salesman when present.
        foreach ([
            'or_no',
            'customer',
            'si_no',
            'si_amount',
            'check_date',
            'bank_code',
            'check_no',
            'amount',
        ] as $column) {
            if (Schema::hasColumn('salesman', $column)) {
                $salesmanData[$column] = '';
            }
        }

        $salesman = SalesmanModel::create($salesmanData);

        return response()->json([
            'message' => 'Salesman created successfully.',
            'salesman' => $salesman,
        ], 201);
    }
}
