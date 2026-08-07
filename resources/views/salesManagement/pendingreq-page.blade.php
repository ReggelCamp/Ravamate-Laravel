@extends('layout.app')
@section('headerTitle', 'HOLD ORDERS')
@section('content')


    <style>
        table.dataTable {
            width: 100% !important;
        }

        table.dataTable th,
        table.dataTable td {
            white-space: nowrap;
        }

        #datepicker {
            color: black !important;
        }
    </style>

    <div class="flex w-full h-screen pt-5 px-3 ">
        <div class="card w-full flex flex-col max-h-[500px]">
            <div class=" report_title w-full h-[50px] justify-center items-center rounded-t-xl px-5 py-5 flex ">
                <x-report-header-title title="Pending Request" />
            </div>
            <div class="w-full carouselBg h-screen p-5">
                <div class="tabs tabs-lift">
                    <input type="radio" name="my_tabs_3" class="tab" aria-label="SO Transactions" checked />
                    <div class="tab-content bg-base-100 border-base-300 p-2">
                        <div class="w-full flex md:justify-end gap-5 items-center">
                            <div
                                class="flex sm:items-center sm:flex-row gap-2 flex-col-reverse justify-start sm:justify-end w-full h-full py-5">
                                <div class="flex w-full items-center sm:flex-row gap-2 sm:justify-start">
                                    <div
                                        class="flex rounded-2xl max-h-[30px] px-5 whitespace-nowrap gap-1 items-center font-medium border justify-end">
                                        <i class="items-center justify-center w-5 h-5 flex" data-lucide="calendar-days"></i>
                                        <x-datepicker class="!text-black h-[30px]" />
                                    </div>
                                  
                                        <x-exportDataTable />
                                   
                                </div>
                                <div class="h-[30px] border items-center justify-center flex px-2 rounded-2xl sm:max-w-[500px]  ">
                                    <i class="fa-solid fa-magnifying-glass"></i>
                                    <x-searchbar class="w-[250px] " id="customSearch" />
                                </div>
                            </div>
                        </div>
                        <div class="min-w-[550px] ">
                            <x-datatable class=" rounded-t-2xl pt-5 " id="PendingRequestTable" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>

@endsection

<script type="module" src="/app/module/Sale_Management/pendingRequest.js"></script>