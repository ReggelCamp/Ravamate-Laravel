<?php

namespace App\Http\Controllers;

use App\Models\SalesmanModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
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
        $salesman = SalesmanModel::with("salesmanTransactionDetails")->get();
        return response()->json($salesman);

        // $salesman = SalesmanModel::with("stores")->get();
        // return response()->json($salesman);
    }

    public function CreateSalesman(Request $request){
        $mdCode = $this->generateMdCode();

        $salesmanData = [
            'md_code'            => $mdCode,
            'salesman_name'      => $request->salesman_name,
            'geo_locking'        => $request->geo_locking ?? 50 ,
            'password'           => Hash::make($request->password),
            'call_time'          => $request->call_time ?? null,
            'default_ord_type'   => $request->default_ord_type ?? null,
            'loading_capacity'   => $request->loading_capacity ?? null,
            'color'              => $request->color ?? null,
            'contact_no'         => $request->contact_no ?? null,
            'cashier_no'         => $request->cashier_no ?? null,
            'supervisor_name'    => $request->supervisor_name ?? null,
            'supervisor_no'      => $request->supervisor_no ?? null,

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

    private function generateMdCode(): string
    {
        return DB::transaction(function () {
            $lastCode = SalesmanModel::lockForUpdate()
                ->orderByRaw("CAST(SUBSTRING(md_code, 4) AS UNSIGNED) DESC")
                ->value('md_code');

            $nextNumber = 1001; // starting point matching MD-1001

            if ($lastCode) {
                $lastNumber = (int) substr($lastCode, 3); // strip "MD-"
                $nextNumber = $lastNumber + 1;
            }

            return 'MD-' . $nextNumber;
        });
    }

    public function updateSalesman(Request $request){
        $salesman = SalesmanModel::find($request->id);

        if (!$salesman) {
            return response()->json([
                'message' => 'Salesman not found.'
            ], 404);
        }

        $salesman->update([
            'salesman_name'      => $request->salesman_name,
            'call_time'          => $request->call_time,
            'default_ord_type'   => $request->default_ord_type,
            'loading_capacity'   => $request->loading_capacity,
            'color'              => $request->color,
            'contact_no'         => $request->contact_no,
            'cashier_no'         => $request->cashier_no,
            'supervisor_name'    => $request->supervisor_name,
            'supervisor_no'      => $request->supervisor_no,
            'geolocking'         => $request->geolocking,
            'price_code'         => $request->price_code,
            'bo_warehouse'       => $request->bo_warehouse,
            'gs_warehouse'       => $request->gs_warehouse,
            'osa_checking'       => $request->osa_checking,
            'eod'                => $request->eod,
            'is_hybrid'          => $request->is_hybrid,
            'restrict_customer'  => $request->restrict_customer,
            'disable_otp'        => $request->disable_otp,
        ]);

        return response()->json([
            'message' => 'Salesman saved successfully.',
            'salesman' => $salesman->fresh(),
        ], 200);
    }

public function getSalesmanWithTransaction(Request $request){
    $date = $request->input('date');

    $query = SalesmanModel::with([
        'salesmanTransaction' => function ($q) use ($date) {
            if ($date) {
                $q->whereDate('transaction_date', $date);
            }
        },
        'salesmanTransaction.transactionDetails.productDetails',
        'salesmanTransaction.TransactionStore',
    ]);

    if ($date) {
        $query->whereHas('salesmanTransaction', function ($q) use ($date) {
            $q->whereDate('transaction_date', $date);
        });
    }

    $salesman = $query->get();

    return response()->json($salesman);
}

}