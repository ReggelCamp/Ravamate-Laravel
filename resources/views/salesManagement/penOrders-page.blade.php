@extends('layout.app')
@section('headerTitle', 'PENDING ORDERS')
@section('content')

    <style>
        .transacBtnIcon {
            border: 5px solid #203499;
            border-radius: 50%;
            background-image: linear-gradient(#031844, #0E40F2);
            color: var(--header-color);
            font-size: 15px;
            padding: 5px;
        }

        .dropdown_container:hover{
            box-shadow: 0 0 8px 2px rgba(14, 64, 242, 0.5);
            transition: box-shadow 0.2s ease;
        }

    </style>

    <div class="flex w-full h-full pb-20 pt-5 px-3">
        <div class="card w-full h-full flex flex-col">
            <div class="report_title w-full h-[50px] justify-center items-center rounded-t-xl px-5 py-3 flex ">
                <x-report-header-title title="Unprocessed Order" />
                <div class="sheenFilterBtn border rounded-xl">
                    <span class="flex  items-center justify-center px-5 gap-[5px]">
                        <x-datepicker id="pending_Datepicker" drops="up" class="whitespace-nowrap h-[30px] text-[13px]" />
                        {{-- <i class=" w-[35px] " data-lucide="calendar-days"></i> --}}
                        <i class="fa-solid fa-caret-down text-xs"></i>
                    </span>
                </div>
            </div>
            <div class="w-full h-full bg-grey-500 flex flex-col px-5">
                <div class="flex items-center w-full h-[60px] py-3">
                    <div class="flex gap-5 w-full">
                        <div class="h-[30px]">
                            <x-dropdown>
                                <x-slot:dropdownName>
                                    <span
                                        class="flex sheenFilterBtn items-center px-5 whitespace-nowrap text-[12px] gap-2 justify-center border rounded-2xl h-[30px]">
                                        <i class="mdi mdi-filter-variant"></i>
                                        Filter Transaction
                                    </span>
                                </x-slot:dropdownName>
                                <ul class="dropdown_item w-[200px] gap-5" id="pendingOrderItems">
                                    <li class="mb-2 ">
                                        <button class="bg-white dropdown_container rounded-2xl w-[246] border flex whitespace-nowrap">
                                            <span class="transacBtnIcon mdi mdi-book-open"></span>
                                            Booking Transaction
                                        </button>
                                    </li>
                                    <li class="mb-2">
                                        <button class="bg-white dropdown_container rounded-2xl w-[246] border flex whitespace-nowrap">
                                            <span class="transacBtnIcon mdi mdi-book-open"></span>
                                            Extract Transaction
                                        </button>
                                    </li>
                                    <li class="">
                                        <button class="bg-white dropdown_container rounded-2xl w-[246] border flex whitespace-nowrap">
                                            <span class="transacBtnIcon mdi mdi-book-open"></span>
                                            BTDT Transaction
                                        </button>
                                    </li>
                                </ul>
                            </x-dropdown>
                        </div>
                        <div>
                            <x-exportDataTable tableId="#pendingOrdersTable" class="rounded-2xl border px-5 sheenFilterBtn"/>
                        </div>
                    </div>
                    <div class=" border items-center justify-center flex px-2 rounded-2xl sm:max-w-[500px] h-[30px] ">
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <x-searchbar class="w-[250px] " id="customSearch" />
                    </div>
                </div>
                <div id="DcrReportname"
                    class="relative justify-start min-w-[200px] max-w-[500px] h-[74px] rounded-tl-3xl rounded-br-3xl overflow-hidden flex items-center justify-center">

                    <img src="https://cdo.sfa-plus.com/SFA/v2/img/tableTitleBG.png"
                        class="absolute top-0 left-0 w-full h-full object-cover" alt="">

                    <span id="salesmanName" class="relative z-10 text-white font-semibold text-[20px]">
                    </span>

                </div>
                <div class="w-full pb-5 overflow-auto pt-1" id="DataTable">
                    <x-datatable id="pendingOrdersTable" />
                </div>
            </div>
        </div>
    </div>

@endsection

<script type="module" src="/app/module/Sale_Management/pendingOrders.js"></script>