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
                                class="flex font-medium text-[12px] gap-2 items-center sheenFilterBtn w-fit px-5 whitespace-nowrap border rounded-2xl h-[30px]">
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
                        <x-searchbar class="w-[250px] " id="customSearch" />
                    </div>
                </div>
                <div class="w-full pb-5 overflow-auto whitespace-nowrap max-h-[calc(100vh_-_250px)]" id="DataTable">
                    <x-datatable id="SalesTargetDataTable" />
                </div>
            </div>
        </div>
    </div>

@endsection

<script type="module" src="/app/module/Maintenance/Others/SalesTarget.js"></script>