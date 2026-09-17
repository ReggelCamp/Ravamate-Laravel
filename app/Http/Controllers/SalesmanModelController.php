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

    public function CreateSalesman(Request $request){
        $salesmanData = [
            'salesman_name'      => $request->salesman_name,
            'password'           => Hash::make($request->password),
            'call_time'          => $request->call_time ?? null,
            'default_ord_type'   => $request->default_ord_type ?? null,
            'loading_capacity'   => $request->loading_capacity ?? null,
            'color'              => $request->color ?? null,
            'contact_no'         => $request->contact_no ?? null,
            'cashier_no'         => $request->cashier_no ?? null,
            'supervisor_name'    => $request->supervisor_name ?? null,
            'supervisor_no'      => $request->supervisor_no ?? null,

            'attendance'    => '0',
            'target_mcp'    => '0',
            'productive'    => '0',
            'unproductive'  => '0',
            'strike_rate'   => '0',
            'selling_hrs'   => '0',
            'sale'          => '0',
        ];

        foreach (['or_no', 'customer', 'si_no', 'si_amount', 'check_date', 'bank_code', 'check_no', 'amount'] as $column) {
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

public function updateSalesman(Request $request){
    $salesman = SalesmanModel::updateOrCreate(
        ['salesman_name' => $request->salesman_name],
        [
            'call_time'         => $request->call_time,
            'default_ord_type'  => $request->default_ord_type,
            'loading_capacity'  => $request->loading_capacity,
            'color'             => $request->color,
            'contact_no'        => $request->contact_no,
            'cashier_no'        => $request->cashier_no,
            'supervisor_name'   => $request->supervisor_name,
            'supervisor_no'     => $request->supervisor_no,
            'geolocking'        => $request->geolocking,
            'price_code'        => $request->price_code,
            'bo_warehouse'      => $request->bo_warehouse,
            'gs_warehouse'      => $request->gs_warehouse,
            'osa_checking'      => $request->osa_checking,
            'eod'               => $request->eod,
            'is_hybrid'         => $request->is_hybrid,
            'restrict_customer' => $request->restrict_customer,
            'disable_otp'       => $request->disable_otp,
        ]
    );

    return response()->json([
        'message' => 'Salesman saved successfully',
        'salesman' => $salesman,
    ], 200);
}
}