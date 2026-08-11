@extends('layout.app')
@section('headerTitle', 'DAILY SALES REPORT')
@section('content')

    <style>
        table, th, td {
            border:1px solid black;
        }   
    </style>

    <div class="flex w-full h-full pb-20 pt-5 px-3">
    <div class="card w-full min-h-96 max-h-[500px] flex flex-col min-h-0">

        {{-- Header --}}
        <div class="report_title h-[50px] flex items-center justify-center rounded-t-xl px-5 py-3 shrink-0">
            <x-report-header-title title="DSR" />

            <span class="flex items-center justify-center gap-[5px] px-5 border rounded-xl">
                <x-datepicker id="dsrDatepicker" class="whitespace-nowrap h-[30px] text-[13px]" />
                <i class="w-[13px] h-[13px]" data-lucide="calendar-days"></i>
                <i class="fa-solid fa-caret-down text-xs"></i>
            </span>
        </div>

        {{-- Content --}}
        <div class="flex-1 min-h-0 flex flex-col px-5">

            {{-- Filters --}}
            <div class="flex flex-col-reverse md:flex-row items-center gap-3 w-full py-3 shrink-0">

                <div class="flex gap-5 w-full">
                    <div class="h-[28px]">
                        <x-dropdown>
                            <x-slot:dropdownName>
                                <span
                                    class="flex items-center h-[28px] px-5 whitespace-nowrap border rounded-2xl text-[12px] font-medium">
                                    <i class="mdi mdi-filter-variant"></i>
                                    Filter by Salesman
                                </span>
                            </x-slot:dropdownName>

                            <ul class="dropdown_item w-[300px] border bg-white" id="dsrItems">
                                {{-- <x-searchbar
                                    id="dsrSearch"
                                    class="w-[300px] h-[28px] text-[12px] font-medium" /> --}}
                            </ul>
                        </x-dropdown>
                    </div>

                    <x-exportDataTable class="h-[28px] text-[12px] font-medium" />
                </div>

                <div>
                    <button id="generateDsrReport" class="flex w-full px-5 h-[30px] border rounded-2xl">
                        Generate
                    </button>
                </div>

            </div>

            {{-- Table Section --}}
            <div class="flex-1 min-h-0 flex flex-col gap-2">

                {{-- Table Title --}}
                <div id="DsrReportname"
                    class="relative  min-w-[200px] max-w-[500px] h-[74px] rounded-tl-2xl rounded-br-2xl overflow-hidden flex items-center justify-center">

                    <img src="https://cdo.sfa-plus.com/SFA/v2/img/tableTitleBG.png"
                            class="absolute top-0 left-0 w-full h-full object-cover" alt="">

                    <span id="DsrSalesmanName"
                        class="relative z-10 text-white font-semibold text-sm">
                    </span>

                </div>
                <div id="DsrTableContainer" class="">
                    
                </div>
            </div>

        </div>

    </div>
</div>

@endsection

<script type="module" src="/app/module/Sale_Management/dsrTable.js"></script>