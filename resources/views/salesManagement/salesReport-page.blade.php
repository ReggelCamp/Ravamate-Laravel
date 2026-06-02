@extends('layout.app')
@section('content')

<body class="w-full h-full">
    <div class="flex w-full h-full flex-col carouselBg">
        <div class="flex w-full h-[50px] justify-between p-5 report_title items-center">
            <div class="flex w-full h-full">
                <x-report-header-title title="Sales Report"/>
            </div>
            <div class="flex w-full h-[30px]">
                <x-datepicker/>
            </div>
        </div>
        <div class="flex-col flex sm:flex-row w-full justify-between full sm:h-[100px] p-5 gap-5">
            <div class="card card-border bg-base-100 w-full sm:w-96 bg-secondary bodyColor">
                <div class="card-body w-full ">
                  <h1>
                    Total Sales:
                  </h1>
                </div>
            </div>
            <div class="w-full sm:h-[40px] flex justify-end ">
                <x-searchbar/>
            </div>
        </div>
        <div class="flex w-full h-[50px] gap-5 pl-5">
            <div class="flex h-[30px]">
                <x-dropdown> 
                    <x-slot:dropdownName >
                        Other Reports
                    </x-slot:dropdownName>
                        
                        <x-searchbar/>
                        <ul id="otherReports">
                            <li><a>Sales Summary</a></li>
                            <li><a>Range Summary</a></li>
                            <li><a>Range Monitoring</a></li>
                            <li><a>Geocall Rate</a></li>
                            <li><a>Strike Rate</a></li>
                            <li><a>Salesrep SKU Details</a></li>
                            <li><a>Unproductive</a></li>
                            <li><a>Sosyo Transaction</a></li>
                            <li><a>Voucher History</a></li>
                        </ul>
                </x-dropdown>
            </div>
            <div class="flex  h-[30px]">
                <x-dropdown> 
                    <x-slot:dropdownName>
                            Export
                        </x-slot:dropdownName>
                        {{-- <x-searchbar/> --}}
                        <ul id="actions">
                            <li><a class="printBtn">Print</a></li>
                            <li><a class="csvBtn">CSV</a></li>
                            <li><a class="excelBtn">Excel</a></li>
                            <li><a class="copyBtn">Copy</a></li>
                        </ul>
                </x-dropdown>
            </div>
        </div>
        <div class="flex p-5 w-full overflow-auto">
            <x-datatable/>
        </div>
    </div>
</body>
@endsection