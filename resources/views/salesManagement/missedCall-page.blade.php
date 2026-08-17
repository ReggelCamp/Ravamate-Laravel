@extends('layout.app')
@section('headerTitle', 'Missed Call')
@section('content')

    <div class="flex w-full h-full pb-20 pt-5 px-3">
        <div class="card w-full h-full flex flex-col">
            <div class="report_title w-full h-[50px] justify-center items-center rounded-t-xl px-5 py-3 flex ">
                <x-report-header-title title="Miss Call" />
               <div class="sheenFilterBtn border rounded-xl">
                    <span class="flex  items-center justify-center px-5 gap-[5px]">
                        <x-datepicker id="Miss_Datepicker" drops="up" class="whitespace-nowrap h-[30px] text-[13px]" />
                        {{-- <i class=" w-[35px] " data-lucide="calendar-days"></i> --}}
                        <i class="fa-solid fa-caret-down text-xs"></i>
                    </span>
                </div>
            </div>
            <div class="w-full items-center h-full bg-grey-500 flex flex-col px-5">
                <div class="flex items-center w-full h-[60px] py-3">
                    <div class="flex w-full">
                         <div>
                            <x-exportDataTable tableId="#missedCallTable" class="border sheenFilterBtn rounded-2xl px-5"/>
                        </div>
                    </div>
                    <div class=" border h-[30px] items-center justify-center flex px-2 rounded-2xl sm:max-w-[500px]  ">
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <x-searchbar class="w-[250px]" id="customSearch" />
                    </div>
                </div>
              <div class="w-full pb-5 overflow-x-auto rounded-2xl " id="DataTable">
                        <x-datatable class="font-medium text-[10px]" id="missedCallTable"/>

                </div>
            </div>
        </div>
    </div>

@endsection

<script type="module" src="/app/module/Sale_Management/missedCall.js"></script>