@extends('layout.app')
@section('headerTitle', 'Offsite Transaction')
@section('content')

    <div class="flex w-full h-full pb-20 pt-5 px-3">
        <div class="card w-full h-full flex flex-col">
            <div class="report_title w-full h-[50px] justify-center items-center rounded-t-xl px-5 py-3 flex ">
                <x-report-header-title title="Offsite Transaction" />
               <div class="sheenFilterBtn border rounded-xl">
                    <span class="flex  items-center justify-center px-5 gap-[5px]">
                        <x-datepicker id="Off_rDatepicker" drops="up" class="whitespace-nowrap h-[30px] text-[13px]" />
                        {{-- <i class=" w-[35px] " data-lucide="calendar-days"></i> --}}
                        <i class="fa-solid fa-caret-down text-xs"></i>
                    </span>
                </div>
            </div>
            <div class="w-full items-center h-full bg-grey-500 flex flex-col px-5">
                <div class="flex flex-col-reverse gap-3 md:flex-row items-center w-full min-h-[60px] py-3">
                        <div>
                            <x-exportDataTable tableId="#offsiteTransTable" class="px-5 border rounded-2xl sheenFilterBtn"/>
                        </div>
                    <div class="flex w-full h-[30px] justify-start md:justify-end items-center">
                        <div class="flex items-center border px-2 rounded-2xl w-[280px] sm:w-[550px] md:w-[300px]">
                            <i class="fa-solid fa-magnifying-glass mr-2"></i>
                            <x-searchbar class="w-full" id="customSearch" />
                        </div>
                    </div>
                </div>
                <div class="w-full pb-5 overflow-x-auto " id="DataTable">
                    <x-datatable id="offsiteTransTable"/>
                </div>
            </div>
        </div>
    </div>

@endsection

<script type="module" src="/app/module/Sale_Management/offsiteTrans.js"></script>