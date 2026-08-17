@extends('layout.app')
@section('headerTitle', 'DAILY SALES REMITTANCE REPORT')
@section('content')

    <style>
        table,
        th,
        td {
            border: 1px solid black;
        }
    </style>

    <div class="flex w-full h-full pb-20 pt-5 px-3">
        <div class="card w-full h-full flex flex-col min-h-96">

            {{-- Header --}}
            <div class="report_title w-full h-[50px] flex items-center justify-center rounded-t-xl px-5 py-3 shrink-0">
                <x-report-header-title title="DSRR" />

                <span class="flex items-center justify-center gap-[5px] px-5 border rounded-xl">
                    <x-datepicker :singleDate="true" id="dsrDatepicker" class="whitespace-nowrap h-[30px] text-[13px]" />
                    {{-- <i class="w-[13px] h-[13px]" data-lucide="calendar-days"></i> --}}
                    <i class="fa-solid fa-caret-down text-xs"></i>
                </span>
            </div>

            {{-- Content --}}
            <div class="flex-1 min-h-0 flex flex-col px-5">

                {{-- Filters --}}
                <div class="flex flex-col-reverse gap-3 md:flex-row items-center w-full min-h-[60px] py-3 shrink-0">

                    <div class="flex justify-between w-full">

                        <div class="h-[30px]">
                            <x-dropdown>
                                <x-slot:dropdownName>
                                    <span
                                        class="flex font-medium text-[12px] items-center gap-2 sheenFilterBtn w-fit px-5 whitespace-nowrap border rounded-2xl h-[30px]">
                                        <i class="mdi mdi-filter-variant"></i>
                                        Select Salesman
                                    </span>
                                </x-slot:dropdownName>

                                <ul class="dropdown_item border w-[300px] rounded-2xl p-2 bg-white" id="dsrrItems">
                                </ul>
                            </x-dropdown>
                        </div>

                        <div class="flex gap-5">

                            <button id="generateDsrrReport"
                                class="flex w-full px-5 h-[30px] border generate_btn rounded-2xl sheenFilterBtn">
                                Generate
                            </button>

                            <x-exportDataTable tableId="#DsrrTable" report="DSRR" :hideCsv="true" :hideCopy="true"
                                class="h-[28px] text-[12px] font-medium sheenFilterBtn" />

                        </div>

                    </div>

                </div>

                {{-- Table Section --}}
                <div class="flex-1 min-h-0 flex flex-col gap-2">

                    {{-- Table Title --}}
                    <div id="DsrrReportname"
                        class="relative min-w-[200px] max-w-[500px] h-[74px] shrink-0 rounded-tl-3xl rounded-br-3xl overflow-hidden flex items-center justify-center">

                        <img src="https://cdo.sfa-plus.com/SFA/v2/img/tableTitleBG.png"
                            class="absolute inset-0 w-full h-full object-contain" alt="">

                        <span id="dsrrSalesmanName" class="relative z-10 text-white font-semibold text-[18px]">
                        </span>

                    </div>

                    {{-- Table --}}
                    <div id="DsrrTableContainer" class="flex-1 min-h-0 min-w-0 overflow-auto mb-5"></div>

                </div>

            </div>

        </div>
    </div>

@endsection

<script type="module" src="/app/module/Sale_Management/dsrrTable.js"></script>