@extends('layout.app')
@section('headerTitle', 'CUSTOMER MAINTENANCE FORM')
@section('content')
@section('title', 'CMF')

    <div class="flex w-full h-full pb-20 pt-5 px-3">
        <div class="card w-full h-full flex flex-col">
            <div class="report_title w-full h-[50px] justify-center items-center rounded-t-xl px-5 py-3 flex ">
                <x-report-header-title title="Customer Maintenance Form" />
                <div class="sheenFilterBtn border rounded-xl">
                    <span class="flex  items-center justify-center px-5 gap-[5px]">
                        <x-datepicker id="mcp_Datepicker" drops="down" class="whitespace-nowrap h-[30px] text-[13px]" />
                        {{-- <i class=" w-[35px] " data-lucide="calendar-days"></i> --}}
                        <i class="fa-solid fa-caret-down text-xs"></i>
                    </span>
                </div>
            </div>
            <div class="w-full items-center h-full bg-grey-500 flex flex-col px-5">
                <div class="flex flex-col-reverse lg:flex-row gap-3 items-start lg:items-center w-full h-fit py-5">
                    <div class="flex gap-5 w-full">
            
                        <button class="btn rounded-2xl w-fit px-5 h-[30px] sheenFilterBtn shadow-[2px_2px_10px]">
                            <i class="mdi mdi-refresh"></i>
                        </button>    
                        <x-exportDataTable class="sheenFilterBtn" tableId="#cmfTable"/>
                        
                    </div>
                    <div class=" border items-center justify-center flex px-2 rounded-2xl sm:max-w-[500px]  ">
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <x-searchbar class="w-[250px] " tableId="#cmfTable" />
                    </div>
                </div>
                <div class="w-full pb-5 overflow-auto whitespace-nowrap max-h-[calc(100vh_-_250px)]" id="DataTable">
                    <x-datatable id="cmfTable" class="whitespace-nowrap"/>
                </div>
            </div>
        </div>
    </div>

@endsection

<script type="module" src="/app/module/Maintenance/Customer/customerCmf.js"></script>