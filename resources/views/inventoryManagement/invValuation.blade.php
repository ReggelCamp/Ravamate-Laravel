@extends('layout.app')
@section('headerTitle', 'INVENTORY VALUATION')
@section('content')
@section('title', 'INVENTORY VALUATION')

    <div class="flex w-full h-full pb-20 pt-5 px-3">
        <div class="card w-full h-full flex flex-col">
            <div class="report_title w-full h-[50px] justify-center items-center rounded-t-xl px-5 py-3 flex ">
                <x-report-header-title title="INVENTORY VALUATION" />
               <div class="shine-bgBtn datePicker_header border rounded-xl">
                    <span class="flex  items-center justify-center px-5 gap-[5px]">
                        <x-datepicker id="innVal_rDatepicker" drops="down" class="whitespace-nowrap h-[30px] text-[13px]" />
                        {{-- <i class=" w-[35px] " data-lucide="calendar-days"></i> --}}
                        <i class="fa-solid fa-caret-down text-xs"></i>
                    </span>
                </div>
            </div>
            <div class="w-full items-center h-full bg-grey-500 flex flex-col px-5">
                <div class="flex flex-col-reverse gap-3 md:flex-row items-center w-full min-h-[60px] py-3">
                    <div class="flex gap-5 w-full">
                        <div class="h-[25px]">
                            <x-dropdown>
                                <x-slot:dropdownName>
                                    <span
                                        class="flex sheenFilterBtn items-center justify-center w-fit px-5 gap-2 text-[12px] h-[30px] whitespace-nowrap border rounded-2xl h-[25px]">
                                        <i class="mdi mdi-filter-variant"></i>
                                        Filter by Salesman
                                        <i class="fa-solid fa-caret-down"></i>
                                    </span>
                                </x-slot:dropdownName>
                                <ul class="dropdown_item border w-[300px] max-h-[300px] overflow-auto rounded-2xl p-2 bg-white border " id="innValuationItems">

                                </ul>
                            </x-dropdown>
                        </div>
                        <div>
                            <x-exportDataTable class="sheenFilterBtn" tableId="#innValuationTable" />
                        </div>
                    </div>
                    <div class="flex w-full justify-start md:justify-end items-center">
                        <div class="flex items-center border px-2 rounded-2xl w-[280px] sm:w-[550px] md:w-[300px]">
                            <i class="fa-solid fa-magnifying-glass mr-2"></i>
                            <x-searchbar class="w-full" tableId="#innValuationTable" />
                        </div>
                    </div>
                </div>
                <div class="w-full flex flex-col gap-2">
                    <div id="inValReportname"
                        class="relative  min-w-[200px] max-w-[500px] h-[74px] rounded-tl-2xl rounded-br-2xl overflow-hidden flex items-center justify-center">

                        <img src="https://cdo.sfa-plus.com/SFA/v2/img/tableTitleBG.png"
                            class="absolute top-0 left-0 w-full h-full object-cover" alt="">

                        <span id="salesmanName" class="relative z-10 text-white font-semibold text-[20px]">
                        </span>

                    </div>
                    <div class="w-full pb-5 overflow-x-auto max-h-[calc(100vh_-_250px)]" id="DataTable">
                        <x-datatable id="innValuationTable" />
                    </div>
                </div>
            </div>
        </div>
    </div>

@endsection

<script type="module" src="/app/module/Inventory_Management/innValuation.js"></script>