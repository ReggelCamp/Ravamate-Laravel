@extends('layout.app')
@section('content')

<body class="w-full h-full">
    <div class="flex w-full h-full flex-col carouselBg">
        <div class="flex w-full h-[50px] justify-between p-5 report_title items-center">
            <div class="flex w-full ">
                <x-report-header-title title="Inventory Valuation"/>
            </div>
            <div class="flex w-full h-[30px] justify-end ">
                <x-datepicker/>
            </div>
        </div>
        <div class="flex flex-col-reverse sm:flex-row w-full justify-between p-5 background_color">
            <div class="w-full h-full gap-2 items-center flex ">
                <div class="flex w-[150px] h-[30px]">
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
                <div class="flex h-[30px]">
                <x-dropdown> 
                    <x-slot:dropdownName>
                            Export
                        </x-slot:dropdownName>
            
                        <li><a class="printBtn">Print</a></li>
                        <li><a class="csvBtn">CSV</a></li>
                        <li><a class="excelBtn">Excel</a></li>
                        <li><a class="copyBtn">Copy</a></li>
                </x-dropdown>
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