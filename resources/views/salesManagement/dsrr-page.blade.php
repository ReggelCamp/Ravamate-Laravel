@extends('layout.app')
@section('headerTitle', 'DAILY SALES REMITTANCE REPORT')
@section('content')

    <div class="flex w-full h-screen pt-5 px-3">
        <div class="card w-full min-h-96 max-h-[500px] flex flex-col">
            <div class="report_title w-full h-[50px] justify-center items-center rounded-t-xl px-5 py-3 flex ">
                <x-report-header-title title="DSRR" />
                <span class="flex border rounded-xl bg-transparent items-center justify-center px-5 gap-[5px]">
                    <x-datepicker class="whitespace-nowrap h-[30px] text-[13px] " />
                    <i class=" w-[13px] h-[13px] " data-lucide="calendar-days"></i>
                    <i class="fa-solid fa-caret-down text-xs"></i>
                </span>
            </div>
            <div class="w-full items-center h-full bg-grey-500 flex flex-col px-5">
                <div class="flex flex-col-reverse gap-3 md:flex-row items-center w-full min-h-[60px] py-3">
                    <div class="flex justify-between w-full">
                        <div class="h-[25px]">
                            <x-dropdown>
                                <x-slot:dropdownName class="w-[100px] ">
                                    <span
                                        class="flex font-medium text-[12px] items-center sheenFilterBtn w-fit px-5 whitespace-nowrap border rounded-2xl h-[28px]">
                                        <i class="mdi mdi-filter-variant"></i>
                                        Select Salesman
                                    </span>
                                </x-slot:dropdownName>
                                <ul class="dropdown_item border w-[300px] rounded-2xl p-2 bg-white border" id="dsrrItems">
                                    {{-- <x-searchbar id="dcrSearch" class="w-[300px]" /> --}}
                                </ul>
                            </x-dropdown>
                        </div>
                        <div>
                            <x-exportDataTable class="font-medium h-[28px] text-[12px]"/>
                        </div>
                    </div>
                </div>
                <div class="w-full flex-1 pb-5 rounded-r-2xl full">
                    <div id="DsrrReportname"
                        class="relative min-w-[200px] max-w-[500px] h-[74px] rounded-tl-3xl rounded-br-3xl overflow-hidden flex items-center justify-center">

                        <img src="https://cdo.sfa-plus.com/SFA/v2/img/tableTitleBG.png"
                            class="absolute top-0 left-0 w-full h-full object-cover" alt="">

                        <span id="dsrrSalesmanName" class="relative z-10 text-white font-semibold text-[18px]">
                        </span>
                    </div>
                </div>
                <div class="flex justify-center items-center py-4">
                    <i class="mdi mdi-calendar-month-outline text-[#7d7d7d] text-[100px]"></i>
                </div>
                <x-datatable id="DsrrTable" />
            </div>
        </div>
    </div>

@endsection

<script type="module" src="/app/module/Sale_Management/dsrrTable.js
"></script>