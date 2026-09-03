@extends('layout.app')
@section('headerTitle', 'PLACEMENT MAINTENANCE')
@section('content')
@section('title', 'PLACEMENT MAINTENANCE')

    <style>
        .dropdown {
            width: 100%;
        }
    </style>

    <div class="flex w-full h-full pb-20 pt-5 px-3">
        <div class="card w-full h-full flex flex-col">
            <div class="report_title w-full h-[50px] justify-center items-center rounded-t-xl px-5 py-3 flex ">
                <x-report-header-title title="Placement Maintenance" />
                <div class="shine-bgBtn datePicker_header border rounded-xl">
                    <span class="flex  items-center justify-center px-5 gap-[5px]">
                        <x-datepicker id="placement_Datepicker" drops="down"
                            class="whitespace-nowrap h-[30px] text-[13px]" />
                        {{-- <i class=" w-[35px] " data-lucide="calendar-days"></i> --}}
                        <i class="fa-solid fa-caret-down text-xs"></i>
                    </span>
                </div>
            </div>
            <div class="w-full items-center h-full bg-grey-500 flex flex-col px-5">
                <div class="flex flex-col-reverse lg:flex-row gap-3 items-start lg:items-center w-full h-fit py-5">
                    <div class="flex gap-5 w-full">
                        <div class="items-center justify-center flex">
                            <x-exportDataTable class="sheenFilterBtn" tableId="#productPlacementTable" />
                        </div>
                        <div>
                            <button class="btn border sheenFilterBtn rounded-xl text-[12px] w-fit px-5 h-[30px]"
                                onclick="AddPlacement.showModal()">
                                <i class="mdi mdi-printer-outline"></i>Add Placement</button>
                        </div>
                    </div>
                    <div class=" border items-center justify-center flex px-2 rounded-2xl sm:max-w-[500px]  ">
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <x-searchbar class="w-[250px] " tableId="#productPlacementTable" />
                    </div>
                </div>
                <div class="w-full pb-5 overflow-auto max-h-[calc(100vh_-_250px)]" id="DataTable">
                    <x-datatable id="productPlacementTable" />
                </div>
            </div>
        </div>
    </div>

    <dialog id="AddPlacement" class="modal">
        <div class="modal-box p-0 overflow-visible">
            <form method="dialog">
                <button class=" btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>

            <h3 class="text-lg font-bold p-5">New Product Placement</h3>

            <div class="flex w-full border-t-1 text-gray-400"></div>

            <div class="flex w-full flex-col p-5">

                <div class="flex justify-between items-center">
                    <span> Type </span>
                    <select class="select w-[350px]">
                        <option disabled selected>Choose Type</option>
                        <option>CORE</option>
                        <option>NON-CORE</option>
                    </select>
                </div>
                <div class="divider my-0"></div>

                <div class="flex justify-between items-center ">
                    <span> Customer Class </span>
                    <select class="select w-[350px]">
                        <option disabled selected>Choose Class</option>
                        <option value="CONVENIENCE" store="">CONVENIENCE STORE</option>
                        <option value="GROCERY">GROCERY</option>
                        <option value="OTHERS">OTHERS</option>
                        <option value="SUPERMARKET">SUPERMARKET</option>
                        <option value="MARKET" stall="" dry="">MARKET STALL DRY</option>
                        <option value="DRUGSTORE">DRUGSTORE</option>
                        <option value="SARISARI" store="">SARISARI STORE</option>
                        <option value="MARKET" stall="" wet="">MARKET STALL WET</option>
                    </select>
                </div>
                <div class="divider my-0"></div>


                <div class="flex justify-between w-full items-center gap-5">
                    <span class="flex whitespace-nowrap "> Select Product </span>
                    <div class="w-full ">
                        <x-dropdown class="w-full"
                            buttonClass="border  px-3 py-2 text-sm text-gray-500 w-full h-[40px] flex items-center justify-between">
                            <x-slot:dropdownName class="w-full flex items-center justify-between">
                                <span class="w-full" id="update_weekVisited_label">Select</span>
                                <i class="fa-solid fa-chevron-down text-xs text-gray-400"></i>
                            </x-slot:dropdownName>

                            <ul id="addProductPlacement"
                                class="border w-fit px-1 max-h-[300px] overflow-auto rounded-lg z-[9999] bg-white shadow-lg p-0">

                            </ul>
                        </x-dropdown>
                    </div>
                </div>
                <div class="divider my-0"></div>

                <div class="flex justify-between items-center ">
                    <span> Placement </span>
                    <select class="select w-[350px]">
                        <option disabled selected>Choose Here</option>
                        <option>CORE</option>
                        <option>Oppurtunity</option>
                        <option>Dev Core</option>
                    </select>
                </div>
                <div class="divider my-0"></div>

                <div class="justify-end flex w-full gap-3">
                    <form method="dialog">
                        <button class="btn btn-default">Close</button>
                    </form>
                    <button class="btn btn-primary">Add</button>
                </div>
            </div>

        </div>
    </dialog>

    <dialog id="PlacementModal" class="modal">
        <div class="modal-box max-w-2xl p-0 rounded-xl overflow-visible">

            {{-- Header --}}
            <div class="flex items-center justify-between px-6 py-5 border-b border-gray-300">
                <h3 class="text-xl font-bold">Placement Details</h3>
                <form method="dialog">
                    <button class="btn btn-sm btn-circle btn-ghost text-gray-400 hover:text-gray-600">
                        <i class="fa-solid fa-xmark text-lg"></i>
                    </button>
                </form>
            </div>

            {{-- Form rows --}}
            <div class="flex flex-col text-sm px-5" id="placementModalBody">

                <div class="flex items-center px-6 py-3 border-b border-gray-300 gap-5">
                    <label for="placementType" class="font-bold w-40 shrink-0">Type</label>
                    <div class="relative w-full ">
                        <select id="placementType" name="product_id" class="w-full border h-[40px] rounded-md px-5">
                        </select>
                    </div>
                </div>

                <div class="flex items-center px-6 py-3 border-b border-gray-300 gap-5">
                    <label for="placementCustomerClass" class="font-bold w-40 shrink-0">Customer Class</label>
                    <div class="relative w-full ">
                        <select id="custClass" name="product_id" class="w-full border h-[40px] rounded-md px-5">
                        </select>
                    </div>
                </div>

                <div class="flex items-center px-6 py-3 border-b border-gray-300 gap-5">
                    <label for="placementProduct" class="font-bold w-40 shrink-0">Select Product</label>
                    <div class="w-full">
                        <x-dropdown class="w-full"
                            buttonClass="border rounded-lg px-3 py-2 text-sm text-gray-500 w-full h-[40px] flex items-center justify-between">
                            <x-slot:dropdownName class="w-full flex items-center justify-between">
                                <span class="w-full" id="update_weekVisited_label">Select</span>
                                <i class="fa-solid fa-chevron-down text-xs text-gray-400"></i>
                            </x-slot:dropdownName>

                            <ul id="productPlacement"
                                class="border w-full max-h-[300px] overflow-auto rounded-lg z-[9999] bg-white shadow-lg p-0">

                            </ul>
                        </x-dropdown>
                    </div>
                </div>

                <div class="flex items-center px-6 py-3 border-b border-gray-300 gap-5">
                    <label for="placementValue" class="font-bold w-40 shrink-0">Placement</label>
                    <div class="relative w-full ">
                        <select id="placement" name="product_id" class="w-full border h-[40px] rounded-md px-5">
                        </select>
                    </div>
                </div>

            </div>

            {{-- Footer --}}
            <div class="flex justify-between items-center px-6 py-4">
                <button type="button" id="deletePlacementBtn"
                    class="btn bg-red-600 hover:bg-red-700 text-white border-none rounded-md px-6">
                    Delete
                </button>

                <div class="flex gap-2">
                    <form method="dialog">
                        <button class="btn bg-gray-500 hover:bg-gray-600 text-white border-none rounded-md px-6">
                            Close
                        </button>
                    </form>
                    <button type="button" id="updatePlacementBtn"
                        class="btn bg-blue-600 hover:bg-blue-700 text-white border-none rounded-md px-6">
                        Update
                    </button>
                </div>
            </div>

        </div>

        <form method="dialog" class="modal-backdrop">
            <button>close</button>
        </form>
    </dialog>

@endsection

<script type="module" src="/app/module/product/productPlacement.js"></script>