@extends('layout.app')
@section('headerTitle', 'PRODUCT')
@section('content')
@section('title', 'PRODUCT')

    <div class="flex w-full h-full pb-20 pt-5 px-3">
        <div class="card w-full h-full flex flex-col">
            <div class="report_title w-full h-[50px] justify-center items-center rounded-t-xl px-5 py-3 flex ">
                <x-report-header-title title="Product List" />
               <div class="sheenFilterBtn border rounded-xl">
                    <span class="flex  items-center justify-center px-5 gap-[5px]">
                        <x-datepicker id="product_Datepicker" drops="down" class="whitespace-nowrap h-[30px] text-[13px]" />
                        {{-- <i class=" w-[35px] " data-lucide="calendar-days"></i> --}}
                        <i class="fa-solid fa-caret-down text-xs"></i>
                    </span>
                </div>
            </div>
            <div class="w-full items-center h-full bg-grey-500 flex flex-col px-5">
                <div class="flex flex-col-reverse lg:flex-row gap-3 items-start lg:items-center w-full h-fit py-5">
                    <div class="flex gap-5 w-full">
                        <x-exportDataTable class="sheenFilterBtn" tableId="#producListTable"
                        leftIcon="fa-solid fa-download"/>
                    </div>
                    <div class=" border items-center justify-center flex px-2 rounded-2xl sm:max-w-[500px]  ">
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <x-searchbar class="w-[250px] " id="customSearch" />
                    </div>
                </div>
                <div class="w-full pb-5 overflow-auto max-h-[calc(100vh_-_250px)]" id="DataTable">
                    <x-datatable id="producListTable"/>
                </div>
            </div>
        </div>
    </div>

<dialog id="ProductModal" class="modal">
    <div class="modal-box max-w-2xl p-0 rounded-xl overflow-hidden">

        {{-- Header --}}
        <div class="flex items-center justify-between px-6 py-5 bg-gradient-to-r from-red-900 to-red-600">
            <h3 class="text-xl font-bold tracking-wide text-white/90">
                Product #: <span data-field="stock_code">—</span>
            </h3>
            <form method="dialog">
                <button class="btn btn-sm btn-circle btn-ghost text-red-950 hover:text-red-800">
                    <i class="fa-solid fa-xmark text-lg"></i>
                </button>
            </form>
        </div>

        {{-- Image preview + upload --}}
        <div class="flex flex-col items-center py-8 border-b">
            <div class="w-48 h-48 flex items-center justify-center mb-4 flex-col">
                <img id="productModalImage"
                     src=""
                     alt="Product image"
                     class="max-w-full max-h-full object-contain"
                     onerror="this.style.display='none'" />
                <input type="button" style="font-size: 12px; margin-top: 10px;" class="btn btn-sm" value="Browse Image" id="but_upload">
            </div>
        </div>

        {{-- Detail rows --}}
        <div class="flex flex-col text-sm" id="productModalBody">
            <div class="flex justify-between px-6 py-3 border-b">
                <span class="font-bold">STOCK CODE:</span>
                <span class="text-gray-700 font-semibold" data-field="stock_code">—</span>
            </div>
            <div class="flex justify-between px-6 py-3 border-b">
                <span class="font-bold">DESCRIPTION:</span>
                <span class="text-gray-700 font-semibold text-right" data-field="description">—</span>
            </div>
            <div class="flex justify-between px-6 py-3 border-b">
                <span class="font-bold">SKU STATUS:</span>
                <span class="font-bold" data-field="sku_status" data-status-label>—</span>
            </div>
            <div class="px-6 py-3 border-b">
                <p class="text-gray-500 italic text-sm">
                    *prio sku value is either <span class="font-semibold">ENABLED</span> or <span class="font-semibold">DISABLED</span>
                </p>
            </div>
        </div>

        {{-- Footer --}}
        <div class="flex justify-end gap-2 px-6 py-4">
            <button type="button"
                    id="saveProductChangesBtn"
                    class="btn bg-blue-600 hover:bg-blue-700 text-white border-none rounded-md px-6">
                Save Changes
            </button>
            <form method="dialog">
                <button class="btn bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 rounded-md px-6">
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

<script type="module" src="/app/module/Product/productList.js"></script>