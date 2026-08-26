@extends('layout.app')
@section('headerTitle', 'STOCK CHECK REPORT')
@section('content')
@section('title', 'STOCK CHECK REPORT')

    <style>
        .select ,.dropdown{
            width: 100%;
        }
    </style>

    <div class="flex w-full h-full pb-20 pt-5 px-3">
        <div class="card w-full h-full flex flex-col">
            <div class="report_title w-full h-[50px] justify-center items-center rounded-t-xl px-5 py-3 flex ">
                <x-report-header-title title="Stocktake" />
                <div class="sheenFilterBtn border rounded-xl">
                    <button class=" w-fit px-5" onclick="stockTakeFilter.showModal()">Filter</button>
                </div>
            </div>
            <div class="w-full items-center h-full bg-grey-500 flex flex-col px-5">
                <div class="flex flex-col-reverse lg:flex-row gap-3 items-start lg:items-center w-full h-fit py-5">
                    <div class="flex gap-5 w-full">
                        <div>
                            <x-exportDataTable class="sheenFilterBtn" tableId="#stockCheckTable" />
                        </div>
                    </div>
                    <div class=" border items-center justify-center flex px-2 rounded-2xl sm:max-w-[500px]  ">
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <x-searchbar class="w-[250px] " id="customSearch" />
                    </div>
                </div>
                <div class="w-full pb-5 overflow-auto" id="DataTable">
                    <x-datatable id="stockCheckTable" />
                </div>
            </div>
        </div>
    </div>

    <dialog id="stockTakeFilter" class="modal">
    <div class="modal-box overflow-visible p-0"> 
            <form method="dialog">
                <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <h3 class="text-lg font-semibold border-b p-5">Filter StockCheck Report</h3>
            <div class="flex flex-col w-full p-5 gap-3">
                <div class="flex w-full gap-5">
                    <span class="w-[150px]">Date</span>
                    <div class="flex w-full justify-start">
                        <x-datepicker class="w-full" />
                    </div>
                </div>
                <div class="flex w-full gap-5 items-center">
                    <span class="w-[150px]">Salesman</span>
                    <div class="flex w-full justify-start">
                        <x-dropdown direction="dropdown-top" class="w-full z-[50]"
                            buttonClass="border rounded-lg px-3 py-2 text-sm text-gray-500 w-full h-[40px] flex items-center justify-between">
                            <x-slot:dropdownName class="w-full flex items-center justify-between">
                                <span class="w-full" id="update_weekVisited_label">Select</span>
                                <i class="fa-solid fa-chevron-down text-xs text-gray-400"></i>
                            </x-slot:dropdownName>

                            <div class="dropdown_item border w-[300px] rounded-2xl bg-white overflow-hidden flex flex-col">
                                <ul id="salesmanStockCheck"
                                    class="w-[300px] max-h-[300px] overflow-auto bg-white shadow-lg p-3">
                                </ul>
                            </div>
                        </x-dropdown>
                    </div>
                </div>
                <div class="flex w-full gap-5 items-center">
                    <span class="w-[150px]">Customer</span>
                    <div class="w-full">
                        <x-dropdown direction="dropdown-top" class="w-full z-[50]"
                            buttonClass="border rounded-lg px-3 py-2 text-sm text-gray-500 w-full h-[40px] flex items-center justify-between">
                            <x-slot:dropdownName class="w-full flex items-center justify-between">
                                <span class="w-full" id="update_weekVisited_label">Select</span>
                                <i class="fa-solid fa-chevron-down text-xs text-gray-400"></i>
                            </x-slot:dropdownName>

                            <div class="dropdown_item border w-[300px] rounded-2xl bg-white overflow-hidden flex flex-col">
                                <ul id="customerStockCheck"
                                    class="w-[300px] max-h-[300px] overflow-auto bg-white shadow-lg p-0">
                                </ul>

                                <div class="flex items-center justify-end gap-2 border-t px-3 py-2">
                                    <button type="button" id="weekVisited_Cancel"
                                        class="btn btn-ghost btn-xs rounded-full text-[12px]">
                                        Cancel
                                    </button>
                                    <button type="button" id="weekVisited_Confirm"
                                        class="btn btn-xs rounded-full text-[12px] bg-[#e6231e] text-white border-none">
                                        Confirm
                                    </button>
                                </div>
                            </div>
                        </x-dropdown>
                    </div>
                </div>
                <div class="flex w-full justify-end gap-3">
                    <button class="btn btn-neutral">Close</button>
                    <button class="btn btn-primary">Generate Report</button>
                </div>
            </div>
        </div>
    </dialog>


@endsection

<script type="module" src="/app/module/Inventory_Management/stockCheck.js"></script>