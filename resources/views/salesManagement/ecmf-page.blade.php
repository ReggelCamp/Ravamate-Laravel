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
           color: black;
       }
    </style>

    <div class="flex w-full pt-5 px-3 ">
        <div class="card w-full h-full flex flex-col">
            <div class=" report_title w-full h-[50px] justify-center items-center rounded-t-xl px-5 py-3 flex ">
                <x-report-header-title title="Electronic CMF" />
            </div>
            <div class="w-full carouselBg h-full">
                <div class="tabs tabs-lift p-5">
                    <input type="radio" name="my_tabs_3" class="tab" aria-label="E-CMF Records" checked />
                    <div class="tab-content bg-base-100 border-base-300 p-5">
                        <div class="flex w-full justify-between h-full flex-col">
                            <div
                                class="flex w-full flex-col-reverse md:flex-row justify-between pb-5 gap-3 items-center h-full">
                                <div class="flex  items-center h-[30px]  w-full gap-5">
                                    <div>
                                        <x-exportDataTable tableId="#EcmfTable"
                                            class="sheenFilterBtn font-medium border rounded-xl px-5 text-[12px] h-[30px]" />
                                    </div>
                                    <div
                                        class="flex rounded-xl sheenFilterBtn  px-5 whitespace-nowrap gap-1 font-medium text-[12px] h-[30px] items-center border justify-end">
                                        <i class="items-center justify-center w-5 h-5 flex" data-lucide="calendar-days"></i>
                                        <x-datepicker class="sheenFilterBtn" />
                                    </div>
                                    <div>
                                        <button onclick="ExportEcmfRecords.showModal()"
                                            class="text-[12px] font-medium sheenFilterBtn h-[30px] border rounded-xl px-5">
                                            Export Salesman CMF Records
                                        </button>
                                    </div>
                                </div>
                                <div class="flex w-full justify-start md:justify-end items-center">
                                    <div
                                        class="flex items-center border px-2 rounded-2xl w-[280px] sm:w-[550px] md:w-[300px]">
                                        <i class="fa-solid fa-magnifying-glass mr-2"></i>
                                        <x-searchbar tableId="#EcmfTable" class="w-full h-[28px] font-medium customSearch"
                                            id="customSearch" />
                                    </div>
                                </div>
                            </div>
                            <div class="min-w-[550px] whitespace-nowrap">
                                <x-datatable class="font-medium rounded-t-2xl pt-5 text-[10px]" id="EcmfTable" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <dialog id="ExportEcmfRecords" class="modal">
        <div class="modal-box p-0">
            <form method="dialog">
                <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <h3 class="text-lg font-bold p-5">Generate Salesman Registered CMF Records:</h3>
            <div class="border-t-1 w-full text-gray-500"></div>
            <div class="flex w-full p-5 flex-col gap-5">
                <div class="flex w-full justify-between items-center">
                    <span>
                        Salesman Name:
                    </span>
                    <select id="select_items" class="select">
                        <option disabled selected>Choose Here</option>
                    </select>
                </div>
                <div class="flex w-full justify-between items-center">
                    <span class="w-[225px]">
                        Date:
                    </span>
                    <div class="w-full items-start flex gap-2">
                        <x-datepicker />
                        <span>
                            <i class="mdi mdi-calendar-month-outline"></i>
                        </span>
                    </div>
                </div>
                <div class="w-full flex items-end justify-end text-white">
                    <button class="btn bg-blue-500 rounded-lg flex">Generate Records</button>
                </div>
            </div>
        </div>
    </dialog>

@endsection

<script type="module" src="/app/module/Sale_Management/ecmfTable.js"></script>