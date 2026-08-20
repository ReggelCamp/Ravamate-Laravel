@extends('layout.app')

@section('headerTitle', 'CUSTOMER')
@section('title', 'CUSTOMER')

@section('content')

    <div class="flex w-full h-full pb-20 pt-5 px-3">
        <div class="card w-full h-full flex flex-col">
            <div class="report_title w-full h-[50px] justify-center items-center rounded-t-xl px-5 py-3 flex ">
                <x-report-header-title title="Customer" />
               <div class="sheenFilterBtn border rounded-xl">
                    <span class="flex  items-center justify-center px-5 gap-[5px]">
                        <x-datepicker id="customer_Datepicker" drops="down" class="whitespace-nowrap h-[30px] text-[13px]" />
                        {{-- <i class=" w-[35px] " data-lucide="calendar-days"></i> --}}
                        <i class="fa-solid fa-caret-down text-xs"></i>
                    </span>
                </div>
            </div>
            <div class="w-full items-center h-full bg-grey-500 flex flex-col px-5">
                <div class="flex flex-col-reverse lg:flex-row gap-3 items-start lg:items-center w-full h-fit py-5">
                    <div class="flex gap-5 w-full">
                        <div>
                            <x-exportDataTable class="sheenFilterBtn" tableId="#customerMaintenance"
                            leftIcon="fa-solid fa-download"/>
                        </div>
                        <div class="h-[30px] rounded-2xl">
                            <a href="{{ route('customertiering') }}" class="btn h-[30px] rounded-2xl text-[12px] sheenFilterBtn">
                                Customer Tiering
                            </a>
                        </div>
                    </div>
                    <div class=" border items-center justify-center flex px-2 rounded-2xl sm:max-w-[500px]  ">
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <x-searchbar class="w-[250px] " id="customSearch" />
                    </div>
                </div>
                <div class="w-full pb-5 whitespace-nowrap" id="DataTable">
                    <x-datatable class="whitespace-nowrap" id="customerMaintenance"/>
                </div>
            </div>
        </div>
    </div>

<dialog id="customerModal" class="modal">
    <div class="modal-box max-w-2xl p-0 rounded-xl">

        {{-- Header --}}
        <div class="flex items-center justify-between px-6 py-5 border-b">
            <h3 class="text-xl font-bold tracking-wide">CUSTOMER DETAILS</h3>
            <form method="dialog">
                <button class="btn btn-sm btn-circle btn-ghost text-gray-400 hover:text-gray-600">
                    <i class="fa-solid fa-xmark text-lg"></i>
                </button>
            </form>
        </div>

        {{-- Detail rows --}}
        <div class="flex flex-col text-sm" id="customerModalBody">
            <div class="flex justify-between px-6 py-3 border-b">
                <span class="font-bold">SALES PERSON:</span>
                <span class="text-gray-500 font-semibold" data-field="salesman_name">—</span>
            </div>
            <div class="flex justify-between px-6 py-3 border-b">
                <span class="font-bold">CUSTOMER NAME:</span>
                <span class="text-gray-500 font-semibold" data-field="customer_name">—</span>
            </div>
            <div class="flex justify-between px-6 py-3 border-b">
                <span class="font-bold">MOBILE:</span>
                <span class="text-gray-500 font-semibold" data-field="contact">—</span>
            </div>
            <div class="flex justify-between px-6 py-3 border-b">
                <span class="font-bold">LANDLINE:</span>
                <span class="text-gray-500 font-semibold" data-field="landline">N/A</span>
            </div>
            <div class="flex justify-between px-6 py-3 border-b">
                <span class="font-bold">CONTACT PERSON:</span>
                <span class="text-gray-500 font-semibold" data-field="contact_person">N/A</span>
            </div>
            <div class="flex justify-between px-6 py-3 border-b">
                <span class="font-bold">ADDRESS:</span>
                <span class="text-gray-500 font-semibold" data-field="address"></span>
            </div>
            <div class="flex justify-between px-6 py-3 border-b">
                <span class="font-bold">CUST TYPE:</span>
                <span class="text-gray-500 font-semibold" data-field="customer_type">—</span>
            </div>
            <div class="flex justify-between px-6 py-3 border-b">
                <span class="font-bold">MCP DAY:</span>
                <span class="text-gray-500 font-semibold" data-field="mcp_day">—</span>
            </div>
            <div class="flex justify-between px-6 py-3 border-b">
                <span class="font-bold">FREQUENCY CATEGORY:</span>
                <span class="text-gray-500 font-semibold" data-field="freq_cat">—</span>
            </div>
            <div class="flex justify-between px-6 py-3 border-b">
                <span class="font-bold">MCP SCHEDULE:</span>
                <span class="text-gray-500 font-semibold" data-field="mcp_schedule"></span>
            </div>
            <div class="flex justify-between px-6 py-3 bg-gray-100">
                <span class="font-bold">PRICE CODE:</span>
                <span class="text-gray-500 font-semibold" data-field="price_code">—</span>
            </div>
        </div>

        {{-- Footer --}}
        <div class="px-6 py-4">
            <form method="dialog">
                <button class="btn bg-gray-500 hover:bg-gray-600 text-white border-none rounded-md px-6">
                    Close
                </button>
            </form>
        </div>

    </div>

    <form method="dialog" class="modal-backdrop">
        <button>close</button>
    </form>
</dialog>

@endsection

<script type="module" src="/app/module/maintenance/Customer/customerMaintenance.js"></script>