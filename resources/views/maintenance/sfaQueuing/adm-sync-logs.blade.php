@extends('layout.app')
@section('headerTitle', 'Admin Sync Logs')
@section('content')

    <div class="flex w-full h-screen pt-10 px-3">
        <div class="card w-full min-h-96 max-h-[500px] flex flex-col">
            <div class="report_title w-full h-[63px] justify-center items-center rounded-t-xl px-3 py-3 flex ">
                <x-report-header-title title="Admin Sync Logs" />

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
                        <div>
                            <x-exportDataTable tableId="#AdminSyncLogsDataTable" class=" w-fit px-5" />
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
                    <div class="w-full flex-1 overflow-auto pb-5">
                        <x-datatable id="AdminSyncLogsDataTable" />
                    </div>
                </div>
            </div>
        </div>
    </div>

@endsection

<script type="module" src="/app/module/Maintenance/SFA_Queuing/DynamicSyncLogs.js"></script>