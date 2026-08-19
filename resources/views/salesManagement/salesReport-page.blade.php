@extends('layout.app')
@section('headerTitle', 'SALES REPORT')
@section('content')
@section('title', 'SALES REPORT')

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


    <div class="flex w-full h-full pb-20 pt-5 px-3">
        <div class="card w-full h-full flex flex-col">
            <div class="report_title w-full justify-center items-center rounded-t-xl px-5 py-3 flex ">
                <x-report-header-title title="Sales Report" />
                <div class="sheenFilterBtn border rounded-xl">
                    <span class="flex  items-center justify-center px-5 gap-[5px]">
                        <x-datepicker id="report_Datepicker" drops="down" class="whitespace-nowrap h-[30px] text-[13px]" />
                        {{-- <i class=" w-[35px] " data-lucide="calendar-days"></i> --}}
                        <i class="fa-solid fa-caret-down text-xs"></i>
                    </span>
                </div>
            </div>

            <div class="flex flex-col gap-3 sm:flex-row sm:items-end pt-5 w-full px-3 sm:px-5 ">

                {{-- TOTAL SALES --}}
                <div class="card card-border h-[50px] bg-secondary w-full sm:w-auto bodyColor">
                    <div
                        class="border rounded-xl justify-start items-center flex h-full w-full px-3 gap-2 sheenFilterBtn whitespace-nowrap">
                        <span class="mdi mdi-finance finance_Icon"></span>

                        <span>
                            Total Sales:
                        </span>

                        <span>
                            ₱ 0 (₱ 0)
                        </span>
                    </div>
                </div>

                <div class="flex flex-col-reverse gap-3 sm:flex-row">
                    {{-- OTHER REPORTS + EXPORT --}}
                    <div class="flex w-full sm:w-auto items-end gap-3">

                        {{-- OTHER REPORTS --}}
                        <div class="h-[30px] flex shrink-0">
                            <x-dropdown>
                                <x-slot:dropdownName class="h-[30px]">
                                    <span
                                        class="inline-flex sheenFilterBtn h-[30px] items-center border px-3 gap-2 text-[12px] justify-center rounded-2xl whitespace-nowrap">
                                        Other Reports
                                        <i class="fa-solid fa-caret-down"></i>
                                    </span>
                                </x-slot:dropdownName>

                                <ul id="salesReports" class="bg-white w-[200px] max-h-[200px] overflow-y-auto">
                                </ul>
                            </x-dropdown>
                        </div>

                        {{-- EXPORT --}}
                        <div class="h-[30px] shrink-0">
                            <x-exportDataTable class="sheenFilterBtn" tableId="#salesReportTable" />
                        </div>

                    </div>

                    {{-- SEARCH --}}
                    <div class="flex w-full sm:w-auto items-end justify-end">
                        <div
                            class="border h-[30px] w-full sm:w-auto max-w-full items-center justify-center flex px-2 rounded-2xl">

                            <i class="fa-solid fa-magnifying-glass shrink-0"></i>

                            <x-searchbar class="w-full sm:w-[250px]" id="customSearch" />

                        </div>
                    </div>
                </div>
            </div>

            <div class=" pb-5 p-5">

                <x-datatable id="salesReportTable" />

            </div>
        </div>
    </div>

@endsection

<script type="module" src="/app/module/Sale_Management/salesReport.js"></script>