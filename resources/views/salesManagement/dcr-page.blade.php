@extends('layout.app')
@section('headerTitle', 'DAILY COLLECTION REPORT')
@section('content')

    <div class="flex w-full h-screen pt-10 px-3">
        <div class="card w-full min-h-96 max-h-[500px] flex flex-col">
            <div class="report_title w-full h-[100px] justify-center items-center rounded-t-xl px-5 py-3 flex ">
                <x-report-header-title title="DCR" />

                <div class="sheenFilterBtn border rounded-xl">
                    <span class="flex  items-center justify-center px-5 gap-[5px]">
                        <x-datepicker id="dcrDatepicker" drops="up" class="whitespace-nowrap h-[30px] text-[13px]" />
                        <i class=" w-[13px] h-[13px] " data-lucide="calendar-days"></i>
                        <i class="fa-solid fa-caret-down text-xs"></i>
                    </span>
                </div>
            </div>
            <div class="w-full items-center flex-1 bg-grey-500 flex flex-col px-5">
                <div class="flex flex-col-reverse gap-3 md:flex-row items-center w-full min-h-[60px] py-3">
                    <div class="flex gap-5 w-full">
                        <div class="h-[25px]">
                            <x-dropdown>
                                <x-slot:dropdownName class="w-[100px] ">
                                    <span
                                        class="flex items-center sheenFilterBtn w-fit px-5  whitespace-nowrap border rounded-2xl h-[25px]">
                                        <i class="mdi mdi-filter-variant"></i>
                                        Select Salesman
                                    </span>
                                </x-slot:dropdownName>
                                <ul class="dropdown_item border w-[300px] rounded-2xl p-2 bg-white border" id="dcrItems">
                                    {{-- <x-searchbar id="dcrSearch" class="w-[300px]" /> --}}
                                </ul>
                            </x-dropdown>
                        </div>
                        <div>
                            <x-exportDataTable class=" w-fit px-5" />
                        </div>
                    </div>
                    <div class="flex w-full justify-start md:justify-end items-center">
                        <div class="flex items-center border px-2 rounded-2xl w-[280px] sm:w-[550px] md:w-[300px]">
                            <i class="fa-solid fa-magnifying-glass mr-2"></i>
                            <x-searchbar class="w-full font-medium customSearch" id="customSearch" />
                        </div>
                    </div>
                </div>
                <div class="w-full flex flex-col gap-2">
                    <div id="DcrReportname"
                        class="relative  min-w-[200px] max-w-[500px] h-[74px] rounded-tl-2xl rounded-br-2xl overflow-hidden flex items-center justify-center">

                        <img src="https://cdo.sfa-plus.com/SFA/v2/img/tableTitleBG.png"
                            class="absolute top-0 left-0 w-full h-full object-cover" alt="">

                        <span id="salesmanName" class="relative z-10 text-white font-semibold text-sm">
                        </span>

                    </div>
                    <div class="w-full flex-1 overflow-auto pb-5">
                        <x-datatable id="DcrDataTable" />
                    </div>
                </div>
            </div>
        </div>
    </div>

@endsection