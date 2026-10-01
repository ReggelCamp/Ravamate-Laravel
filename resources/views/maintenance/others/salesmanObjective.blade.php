@extends('layout.app')
@section('headerTitle', 'SALES TARGET')
@section('content')
@section('title', 'SALES TARGET')

    <div class="flex w-full h-full pb-20 pt-5 px-3">
        <div class="card w-full h-full flex flex-col">
            <div class="report_title w-full h-[50px] justify-center items-center rounded-t-xl px-5 py-3 flex ">
                <x-report-header-title title="Sales Target" />
                <div class="h-[25px]">
                    <x-dropdown direction="dropdown-end dropdown-bottom">
                        <x-slot:dropdownName class="w-[100px]">
                            <span
                                class="flex font-medium text-[12px] gap-2 items-center shine-bgBtn !bg-transparent !text-white w-fit px-5 whitespace-nowrap border rounded-2xl h-[30px]">
                                <i class="mdi mdi-filter-variant"></i>
                                Select Salesman
                            </span>
                        </x-slot:dropdownName>

                        <div class="dropdown_item border w-[300px] rounded-2xl bg-white overflow-hidden flex flex-col">
                            <ul class="max-h-[220px] overflow-auto p-2" id="SalesmanCheckbox">
                                {{-- <x-searchbar id="dcrSearch" class="w-[300px]" /> --}}
                                {{-- checkboxes injected via JS --}}
                            </ul>

                            <div class="flex items-center justify-end gap-2 border-t px-3 py-2">
                                <button type="button" id="SalesmanCheckbox_Cancel"
                                    class="btn btn-ghost btn-xs rounded-full text-[12px]">
                                    Cancel
                                </button>
                                <button type="button" id="SalesmanCheckbox_Confirm"
                                    class="btn btn-xs rounded-full text-[12px] bg-[#e6231e] text-white border-none">
                                    Confirm
                                </button>
                            </div>
                        </div>
                    </x-dropdown>
                </div>
            </div>
            <div class="w-full items-center h-full bg-grey-500 flex flex-col px-5">
                <div class="flex items-center w-full h-[60px] py-3">
                    <div class="flex gap-5 w-full">
                        <div>
                            <x-exportDataTable class="sheenFilterBtn" tableId="#SalesTargetDataTable" />
                        </div>
                    </div>
                    <div class=" border items-center justify-center flex px-2 rounded-2xl sm:max-w-[500px]  ">
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <x-searchbar class="w-[250px] " tableId="#SalesTargetDataTable" />
                    </div>
                </div>
                <div class="w-full pb-5 overflow-auto whitespace-nowrap max-h-[calc(100vh_-_250px)]" id="DataTable">
                    <x-datatable id="SalesTargetDataTable" />
                </div>
            </div>
        </div>
    </div>

<dialog id="SalesTargetModal" class="modal">
    <div class="modal-box p-0 w-11/12 max-w-3xl rounded-lg">

        {{-- Header --}}
        <div class="flex items-center justify-between px-6 py-4 border-b border-base-300">
            <h3 class="text-2xl font-medium">Sales Target</h3>
            <button type="button" class="btn btn-sm btn-circle btn-ghost text-xl"
                onclick="SalesTargetModal.close()">✕</button>
        </div>

        {{-- Body --}}
        <form id="SalesTargetForm" novalidate class="px-6 py-2">
            <input type="hidden" id="salesTarget_Id" name="id" />

            <div class="grid grid-cols-[200px_1fr] items-center py-3 border-b border-base-300">
                <span class="font-semibold">Salesman</span>
                <span id="salesTarget_Salesman" class="font-semibold"></span>
            </div>

            <div class="grid grid-cols-[200px_1fr] items-center py-3 border-b border-base-300">
                <span class="font-semibold">Year</span>
                <span id="salesTarget_Year" class="font-semibold"></span>
            </div>

            <div class="grid grid-cols-[200px_1fr] items-center py-3 border-b border-base-300">
                <span class="font-semibold">Month</span>
                <span id="salesTarget_Month" class="font-semibold"></span>
            </div>

            <div class="grid grid-cols-[200px_1fr] items-center py-3 border-b border-base-300">
                <label for="salesTarget_Amount" class="font-semibold">Sales Target</label>
                <input type="number" id="salesTarget_Amount" name="sales_target"
                    min="0" step="0.0001" class="input input-bordered w-full" />
            </div>

            <div class="grid grid-cols-[200px_1fr] items-center py-3 border-b border-base-300">
                <label for="salesTarget_Markup" class="font-semibold">Markup (%)</label>
                <input type="number" id="salesTarget_Markup" name="markup"
                    min="0" step="0.01" class="input input-bordered w-full" />
            </div>
        </form>

        {{-- Footer --}}
        <div class="flex items-center justify-end gap-3 px-6 py-4 border-t border-base-300">
            <button id="updateSalesTarget" type="submit" form="SalesTargetForm" class="btn btn-primary">Update</button>
            <button type="button" class="btn btn-ghost" onclick="SalesTargetModal.close()">Close</button>
        </div>
    </div>

    {{-- click on backdrop closes the modal --}}
    <form method="dialog" class="modal-backdrop"><button>close</button></form>
</dialog>

@endsection

<script type="module" src="/app/module/Maintenance/Others/SalesTarget.js"></script>