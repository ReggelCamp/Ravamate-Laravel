@extends('layout.app')
@section('headerTitle', 'SALES REPORT')
@section('content')


    <div class="flex w-full h-screen pt-5 px-3">
        <div class="card w-full h-96 flex flex-col">
            <div class="report_title w-full justify-center items-center rounded-t-xl px-5 py-3 flex ">
                <x-report-header-title title="Sales Report" />
                <span class="flex border rounded-xl bg-transparent items-center justify-center px-5 gap-[5px]">
                    <x-datepicker class="whitespace-nowrap h-[30px] text-[13px] " />
                    <i class=" w-[13px] h-[13px] " data-lucide="calendar-days"></i>
                    <i class="fa-solid fa-caret-down text-xs"></i>
                </span>
            </div>
            <div class="flex-col items-end flex sm:flex-row w-full justify-end py-2 px-5 h-[50px] sm:h-[100px]">
                <div class="card card-border h-[50px] bg-base-100 w-full sm:w-96 bg-secondary bodyColor">
                    <div class="card-body  border rounded-xl justify-center flex h-[50px] w-[250px] ">
                        <span>
                            Total Sales:
                        </span>
                    </div>
                </div>
                <div class="flex w-full h-full items-end justify-end">
                <div class=" border h-[30px] items-center justify-center flex px-2 rounded-2xl sm:max-w-[500px]  ">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <x-searchbar class="w-[250px] " id="customSearch" />
                </div>
                </div>
            </div>
            <div class="flex w-full h-[50px] gap-5 pl-5">
                <div class="flex h-[30px]">
                    <x-dropdown>
                        <x-slot:dropdownName>
                            <span class="border px-2 rounded-2xl">
                                Other Reports
                            </span>
                        </x-slot:dropdownName>

                        <x-searchbar id="salesRepSearch" />
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
                            <span class="border px-2 rounded-2xl">
                                Export
                                <i class="fa-solid fa-caret-down"></i>
                            </span>
                        </x-slot:dropdownName>
                        {{-- <x-searchbar /> --}}
                        <ul id="actions">
                            <li><a class="printBtn">Print</a></li>
                            <li><a class="csvBtn">CSV</a></li>
                            <li><a class="excelBtn">Excel</a></li>
                            <li><a class="copyBtn">Copy</a></li>
                        </ul>
                    </x-dropdown>
                </div>
            </div>
            <div class="px-5">
            <div class="w-full h-[250px] overflow-auto rounded-2xl" id="DataTable">
                <x-datatable />
            </div>
            </div>
        </div>
    </div>

@endsection