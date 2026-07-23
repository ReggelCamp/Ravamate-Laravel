@extends('layout.app')
@section('headerTitle', 'DAILY COLLECTION REPORT')
@section('content')

    <div class="flex w-full h-screen pt-5 px-3">
        <div class="card w-full h-96 flex flex-col">
            <div class="report_title w-full h-[100px] justify-center items-center rounded-t-xl px-5 py-3 flex ">
                <x-report-header-title title="DSR" />
                <span class="flex border rounded-xl bg-transparent items-center justify-center px-5 gap-[5px]">
                    <x-datepicker class="whitespace-nowrap h-[30px] text-[13px] " />
                    <i class=" w-[13px] h-[13px] " data-lucide="calendar-days"></i>
                    <i class="fa-solid fa-caret-down text-xs"></i>
                </span>
            </div>
            <div class="w-full items-center h-full bg-grey-500 flex flex-col px-5">
                <div class="flex items-center w-full h-[60px] py-3">
                    <div class="flex w-full">
                        <div class="w-[220px] lg:w-[250px] h-[25px]">
                            <x-dropdown>
                                <x-slot:dropdownName>
                                    <span
                                        class="flex items-center w-[220px] px-5 whitespace-nowrap border rounded-2xl h-[25px]">
                                        Filter by Salesman
                                    </span>
                                </x-slot:dropdownName>
                                <ul class="dropdown_item border bg-white" id="dsrItems">
                                    <x-searchbar id="dsrSearch" />
                                    <li><a>Item 1</a></li>
                                    <li><a>Item 2</a></li>
                                </ul>
                            </x-dropdown>
                        </div>
                        <div class="flex rounded-2xl px-5 h-[25px]">
                            <x-dropdown>
                                <x-slot:dropdownName>
                                    Export
                                </x-slot:dropdownName>
                                <div class="w-full text-[13px] bg-white">
                                    <li><a class="printBtn">Print</a></li>
                                    <li><a class="csvBtn">CSV</a></li>
                                    <li><a class="excelBtn">Excel</a></li>
                                    <li><a class="copyBtn">Copy</a></li>
                                </div>
                            </x-dropdown>
                        </div>
                    </div>
                    <div class=" h-[25px] w-[500px] justify-end">
                        <x-searchbar class="border h-[25px] w-[300px] rounded-2xl" />
                    </div>
                </div>
                <div class="w-full h-[250px] overflow-auto rounded-2xl" id="DataTable">
                        <x-datatable />
                </div>
            </div>
        </div>
    </div>

@endsection