@extends('layout.app')
@section('headerTitle', 'SALES SUMMARY')
@section('content')

    <div class="flex w-full h-screen pt-5 px-3">
        <div class="card w-full max-h-[500px] flex flex-col">
            <div class="report_title w-full h-[100px] justify-center items-center rounded-t-xl px-5 py-3 flex ">
                <x-report-header-title title="Sales Audit" />
                <span class="flex border rounded-xl bg-transparent items-center justify-center px-5 gap-[5px]">
                    <x-datepicker class="whitespace-nowrap h-[30px] text-[13px] " />
                    <i class=" w-[13px] h-[13px] " data-lucide="calendar-days"></i>
                    <i class="fa-solid fa-caret-down text-xs"></i>
                </span>
            </div>
            <div class="w-full items-center h-full bg-grey-500 flex flex-col px-5">
                <div class="flex flex-col-reverse gap-3 md:flex-row items-center w-full min-h-[60px] py-3">
                    <div class="flex gap-5 w-full">
                        <div>
                            <x-exportDataTable />
                        </div>
                    </div>
                    <div class="flex w-full justify-start md:justify-end items-center">
                        <div class="flex items-center border px-2 rounded-2xl w-[280px] sm:w-[550px] md:w-[300px]">
                            <i class="fa-solid fa-magnifying-glass mr-2"></i>
                            <x-searchbar class="w-full" id="customSearch" />
                        </div>
                    </div>
                </div>
                <div class="w-full overflow-x-auto rounded-2xl" id="DataTable">
                    <div class="min-w-[550px]">
                        <x-datatable id="saleSummaryTable"/>
                    </div>
                </div>
            </div>
        </div>
    </div>

@endsection

<script type="module" src="/app/module/Sale_Management/saleSummary.js"></script>