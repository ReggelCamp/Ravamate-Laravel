@extends('layout.app')
@section('headerTitle', 'Customer Tiering')
@section('content')
@section('title', 'CUSTOMER TIERING')

    <div class="flex w-full h-full pb-20 pt-10 px-3">
        <div class="card w-full h-full flex flex-col">
            <div class="report_title w-full h-[63px] justify-center items-center rounded-t-xl px-5 py-3 flex ">
                <x-report-header-title title="Customer Tiering" />
            </div>
            <div class="w-full items-center flex-1 bg-grey-500 flex flex-col px-5">
                <div class="flex flex-col-reverse gap-3 md:flex-row items-center w-full min-h-[60px] py-3">
                    <div class="flex gap-5 w-full">
                        <div>
                            <x-exportDataTable class="sheenFilterBtn" tableId="#CustomerTieringDataTable"/>
                        </div>
                    </div>
                    <div class="flex w-full justify-start md:justify-end items-center">
                        <div class="flex items-center border px-2 rounded-2xl w-[280px] sm:w-[550px] md:w-[300px]">
                            <i class="fa-solid fa-magnifying-glass mr-2"></i>
                            <x-searchbar class="w-full font-medium customSearch" id="customSearch" />
                        </div>
                    </div>
                </div>

                <div class="w-full flex-1 overflow-auto pb-5 whitespace-nowrap">
                    <x-datatable id="CustomerTieringDataTable" />
                </div>

            </div>
        </div>
    </div>



<dialog id="customerTieringModal" class="modal">
    <div class="modal-box p-0 max-w-lg">
        <div class="flex items-center justify-between p-5 border-b border-gray-300">
            <h3 class="text-lg font-bold">Customer Tier Details</h3>
            <form method="dialog">
                <button class="btn btn-sm btn-circle btn-ghost">✕</button>
            </form>
        </div>

        <div class="flex flex-col">
            <div class="flex flex-col w-full px-5 pt-3">
                <div class="flex items-center border-b py-3 border-gray-300">
                    <span class="w-32 font-semibold text-sm">Type</span>
                    <span class="font-bold text-sm">{{ $tier->type ?? 'BKY' }}</span>
                </div>
                <div class="flex items-center border-b py-3 border-gray-300">
                    <span class="w-32 font-semibold text-sm">Description</span>
                    <span class="font-bold text-sm">{{ $tier->description ?? 'BAKERY' }}</span>
                </div>
                <div class="flex items-center py-3 border-gray-300">
                    <span class="w-32 font-semibold text-sm">Tiering</span>
                    <input
                        type="text"
                        class="border rounded px-3 py-1.5 text-sm text-gray-500 w-48"
                        value="{{ $tier->tiering ?? 'OTHERS' }}"
                    />
                </div>
            </div>

            <div class="flex w-full justify-end p-5 gap-3 border-t border-gray-300">
                <button type="button" class="btn bg-gray-500 hover:bg-gray-600 text-white border-none">Close</button>
                <button type="button" class="btn btn-primary">Update</button>
            </div>
        </div>
    </div>
</dialog>

@endsection

<script type="module" src="/app/module/Maintenance/Customer/CustomerTiering.js"></script>