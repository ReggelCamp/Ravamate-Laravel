@extends('layout.app')
@section('content')

<body class="w-full h-full">
    <div class="flex w-full h-full flex-col">
        <div class="flex w-full h-[50px] justify-between p-5 bg-primary items-center">
            <div class="flex w-full ">
                <x-report-header-title title="Inventory Valuation"/>
            </div>
            <div class="flex w-full h-[30px] justify-end text-accent">
                <x-datepicker/>
            </div>
        </div>
        <div class="flex flex-col-reverse sm:flex-row w-full justify-between p-5 background_color">
            <div class="w-full h-full gap-2 items-center flex ">
                <div class="flex w-[150px] h-[40px]">
                    <x-dropdown> 
                        <x-slot:dropdownName>
                             Other Reports
                        </x-slot:dropdownName>
                        <li><a>Sales Summary</a></li>
                        <li><a>Range Summary</a></li>
                        <li><a>Range Monitoring</a></li>
                        <li><a>Geocall Rate</a></li>
                        <li><a>Strike Rate</a></li>
                        <li><a>Salesrep SKU Details</a></li>
                        <li><a>Unproductive</a></li>
                        <li><a>Sosyo Transaction</a></li>
                        <li><a>Voucher History</a></li>
                    </x-dropdown>
                </div>
                <div class="flex w-[100px] h-[40px]">
                    <x-button class="excelBtn">
                        <x-slot:buttonName>
                            Excel
                        </x-slot:buttonName>
                    </x-button>
                </div>
            </div>
            <div class="flex w-full h-[40px]">
                <x-searchbar/>
            </div>
        </div>
        <div class="flex w-full overflow-auto">
            <x-datatable/>
        </div>
    </div>
</body>
@endsection