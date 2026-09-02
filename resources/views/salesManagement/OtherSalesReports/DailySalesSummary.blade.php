@extends('layout.app')
@section('headerTitle', 'Daily Summary Report')
@section('content')
@section('title', 'Daliy Summary Report')

    <div class="flex w-full h-full pb-20 pt-5 px-5">
        <div class="card w-full h-full flex flex-col">
            <div class="report_title w-full h-[50px] justify-between items-center rounded-t-xl px-5 py-3 flex ">
                <x-salesReportHeader title="Daily Summary Report" />

                <div class="sheenFilterBtn border rounded-xl">
                    <span class="flex  items-center justify-center px-5 gap-[5px]">
                        <x-datepicker id="dcrDatepicker" drops="down" opens="left"
                            class="whitespace-nowrap h-[30px] text-[13px]" />
                        {{-- <i class=" w-[35px] " data-lucide="calendar-days"></i> --}}
                        <i class="fa-solid fa-caret-down text-xs"></i>
                    </span>
                </div>
            </div>

            <div class="p-5 flex flex-col gap-5">
                <div class="self-start">
                    <x-exportDataTable tableId="#DailySummaryTable" class=" w-fit px-5 sheenFilterBtn font-medium text-[12px]" />
                </div>
                <div class="w-full h-full">
                    <x-datatable id="DailySummaryTable"/>
                </div>
            </div>
            
        </div>
    </div>


@endsection


<script type="module" src="/app/module/Sale_Management/OtherSalesReports/dailySalesSummary.js"></script>