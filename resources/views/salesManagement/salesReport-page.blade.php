@extends('layout.app')
@section('headerTitle', 'SALES REPORT')
@section('content')

    <style>
        .finance_Icon {
            padding: 1px 7px;
            margin-right: 10px;
            margin-left: 10px;
            font-size: 25px;
            border-radius: 50%;
            box-shadow: 2px 2px 10px gray;
            color: rgb(184, 184, 184);
            border: 1px solid;
        }

    </style>


    <div class="flex w-full pt-5 px-3">
        <div class="card w-full h-full flex flex-col">
            <div class="report_title w-full justify-center items-center rounded-t-xl px-5 py-3 flex ">
                <x-report-header-title title="Sales Report" />
                <span class="flex border rounded-xl bg-transparent items-center justify-center px-5 gap-[5px]">
                    <x-datepicker id="salesReportDatepicker" class="whitespace-nowrap h-[30px] text-[13px] " />
                    <i class=" w-[13px] h-[13px] " data-lucide="calendar-days"></i>
                    <i class="fa-solid fa-caret-down text-xs"></i>
                </span>
            </div>
            <div class="flex-col-reverse gap-5 items-end flex sm:flex-row w-full justify-end py-2 px-5 h-[50px] sm:h-[80px]">
                <div class="card card-border h-[50px] bg-secondary w-full sm:w-96 bodyColor">
                    <div class=" border rounded-xl justify-start items-center flex h-full w-[236px] ">
                        <span class="mdi mdi-finance finance_Icon">
                        </span>
                        <span>
                            Total Sales:
                        </span>
                        <span>
                            ₱ 0 (₱ 0)
                        </span>
                    </div>
                </div>

                <div class="flex w-full items-end h-[50px] gap-5 pl-5">
                <div class="flex h-[30px]">
                    <x-dropdown class="">
                        <x-slot:dropdownName class="h-[30px]">
                            <span class="inline-flex h-[30px] items-center border px-3 gap-2 justify-center rounded-2xl">
                                Other Reports
                                <i class="fa-solid fa-caret-down"></i>
                            </span>
                        </x-slot:dropdownName>

                        {{-- <x-searchbar id="salesRepSearch" /> --}}
                        <ul id="otherReports" class="bg-white w-[200px] h-[200px] overflow-y-auto">
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
                <div>
                    <x-exportDataTable tableId="#salesReportTable" />
                </div>
            </div>

                <div class="flex w-full h-full items-end justify-end">
                    <div class=" border h-[30px] items-center justify-center flex px-2 rounded-2xl sm:max-w-[500px]  ">
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <x-searchbar class="w-[250px] " id="customSearch" />
                    </div>
                </div>
            </div>
            
            <div class=" pb-5 p-5">

                    <x-datatable id="salesReportTable"/>
   
            </div>
        </div>
    </div>

@endsection

<script type="module" src="/app/module/Sale_Management/salesReport.js"></script>