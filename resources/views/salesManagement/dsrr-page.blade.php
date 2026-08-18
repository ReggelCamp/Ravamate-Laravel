@extends('layout.app')
@section('headerTitle', 'DAILY SALES REMITTANCE REPORT')
@section('content')

        <style>
            table,
            th,
            td {
                border: 1px solid black;
            }
            
            .daterangepicker td.active{
                background-color: var(--accent) !important;
            }
        </style>

        <div class="flex w-full h-full pb-20 pt-5 px-3">
            <div class="card w-full h-full flex flex-col min-h-96">

                {{-- Header --}}
                <div class="report_title w-full h-[50px] flex items-center justify-center rounded-t-xl px-5 py-3 shrink-0">
                    <x-report-header-title title="DSRR" />

                    <span class="flex items-center justify-center gap-[5px] px-5 border rounded-xl">
                        <x-datepicker :singleDate="true" id="dsrrDatepicker" class="whitespace-nowrap h-[30px] text-[13px]" />
                        {{-- <i class="w-[13px] h-[13px]" data-lucide="calendar-days"></i> --}}
                        <i class="fa-solid fa-caret-down text-xs"></i>
                    </span>
                </div>

                {{-- Content --}}
                <div class="flex-1 min-h-0 flex flex-col px-5">

                    {{-- Filters --}}
                <div class="flex flex-col-reverse md:flex-row lg:items-center items-start gap-3 w-full py-3 shrink-0">

                    <div class="flex gap-5 w-full">
                        <div class="">
                            <x-dropdown>
                                <x-slot:dropdownName>
                                    <span
                                        id="DsrrDropdown"
                                        class="flex items-center sheenFilterBtn h-[30px] px-5 whitespace-nowrap border rounded-2xl gap-2 text-[12px] font-medium">
                                        <i class="mdi mdi-filter-variant"></i>
                                        Filter by Salesman
                                    </span>
                                </x-slot:dropdownName>

                                <ul class="dropdown_item border w-[300px] rounded-2xl p-2 bg-white border max-h-[300px] overflow-auto" id="dsrrItems">
                                    {{-- <x-searchbar
                                        id="dsrSearch"
                                        class="w-[300px] h-[28px] text-[12px] font-medium" /> --}}
                                </ul>
                            </x-dropdown>
                        </div>
                    </div>

                    <div class="flex gap-5">
                        <button id="generateDsrrReport" class="flex w-full px-5 h-[30px] generate_btn border sheenFilterBtn rounded-2xl">
                            Generate
                        </button>
                        <x-exportDataTable 
                            tableId="#DsrrTable"
                            report="DSRR"
                            :hideCsv="true"
                            :hideCopy="true"
                            class="h-[28px] text-[12px] font-medium sheenFilterBtn"
                        />
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

    <dialog id="DsrrModal" class="modal">
        <div class="modal-box">
            <h3 class="text-lg font-medium">No salesman reports on selected date</h3>
        </div>
        <form method="dialog" class="modal-backdrop">
            <button>close</button>
        </form>
    </dialog>

@endsection

<script type="module" src="/app/module/Sale_Management/dsrrTable.js"></script>