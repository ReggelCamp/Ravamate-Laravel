@extends('layout.app')
@section('headerTitle', 'ELECTRONIC CMF')
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
        <div class="card w-full h-96 flex flex-col">
            <div class=" report_title w-full h-[100px] justify-center items-center rounded-t-xl px-5 py-3 flex ">
                <x-report-header-title title="Electronic CMF" />
            </div>
            <div class="w-full carouselBg h-screen p-5">
                <div class="tabs tabs-lift">
                    <input type="radio" name="my_tabs_3" class="tab" aria-label="E-CMF Records" checked />
                    <div class="tab-content bg-base-100 border-base-300 p-6">
                        <div class="flex w-full justify-between h-full flex-col">
                            <div class="flex w-full flex-col-reverse md:flex-row justify-between pb-5 gap-3 items-center h-full">
                                <div class="flex  items-center h-[30px]  w-full gap-5">
                                    <div>
                                        <x-exportDataTable />
                                    </div>
                                    <div
                                        class="flex rounded-2xl px-5 whitespace-nowrap gap-1 items-center font-medium border justify-end">
                                        <i class="items-center justify-center w-5 h-5 flex" data-lucide="calendar-days"></i>
                                        <x-datepicker class="!text-black" />
                                    </div>
                                </div>
                                <div class="flex w-full justify-start md:justify-end items-center">
                                    <div class="flex items-center border px-2 rounded-2xl w-[280px] sm:w-[550px] md:w-[300px]">
                                        <i class="fa-solid fa-magnifying-glass mr-2"></i>
                                        <x-searchbar class="w-full" id="customSearch" />
                                    </div>
                                </div>
                            </div>
                            <div class="w-full overflow-auto rounded-t-2xl">
                                <x-datatable id="PendingTable" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

@endsection