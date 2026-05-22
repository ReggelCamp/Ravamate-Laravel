@extends('layout.app')
@section('content')

<body class="w-full h-full">
    <div class="flex w-full h-full flex-col">
        <div class="flex w-full h-[50px] justify-between p-5 primary_color items-center">
            <div class="flex w-full ">
                <x-report-header-title title="Inventory Valuation"/>
            </div>
            <div class="flex w-full h-[30px] justify-end">
                <x-datepicker/>
            </div>
        </div>
        <div class="flex w-full items-center  sm:justify-between h-[100px] p-5 flex-col-reverse sm:flex-row ">
            <div class="flex w-full items-center gap-10 h-full ">
                <details class="dropdown flex w-full sm:w-auto justify-between">
                    <summary class="btn m-1">Other Reports
                        <i class="fa-solid fa-angle-down"></i>
                    </summary>
                    <ul class="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><a>Sales Summary</a></li>
                        <li><a>Range Summary</a></li>
                        <li><a>Range Monitoring</a></li>
                        <li><a>Geocall Rate</a></li>
                        <li><a>strike Rate</a></li>
                        <li><a>Salesrep SKU Details</a></li>
                        <li><a>Unproductive</a></li>
                        <li><a>Sosyo Transaction</a></li>
                        <li><a>Voucher History</a></li>
                    </ul>
                </details>
                <div class="w-full h-[30px] flex justify-end sm:justify-start sm:items-center">
                    <button class="flex border justify-center  w-[80px] rounded-2xl">
                        Excel
                    </button>
                </div>
            </div>
            <div class="w-full h-[30px] flex justify-end">
                <x-searchbar/>
            </div>
        </div>
        <div class="flex w-full overflow-auto">
            <x-datatable/>
        </div>
    </div>
</body>
@endsection