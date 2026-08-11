@extends('layout.app')
@section('headerTitle', 'PLACEMENT MAINTENANCE')
@section('content')

        <div class="flex w-full pt-5 px-3">
            <div class="card w-full h-full flex flex-col">
                <div class="report_title w-full h-[50px] justify-center items-center rounded-t-xl px-5 py-3 flex ">
                    <x-report-header-title title="Placement Maintenance" />
                    <span class="flex border rounded-xl bg-transparent items-center justify-center px-5 gap-[5px]">
                        <x-datepicker class="whitespace-nowrap h-[30px] text-[13px] " />
                        <i class=" w-[13px] h-[13px] " data-lucide="calendar-days"></i>
                        <i class="fa-solid fa-caret-down text-xs"></i>
                    </span>
                </div>
                <div class="w-full items-center h-full bg-grey-500 flex flex-col px-5">
                    <div class="flex items-center w-full h-[60px] py-3">
                        <div class="flex gap-5 w-full">
                            <div class="items-center justify-center flex">
                                <x-exportDataTable />
                            </div>
                            <div>
                                <button class="btn border rounded-xl w-[150px] h-[30px]" onclick="AddPlacement.showModal()">
                                    <i class="mdi mdi-printer-outline"></i>Add Placement</button>
                            </div>
                        </div>
                        <div class=" border items-center justify-center flex px-2 rounded-2xl sm:max-w-[500px]  ">
                            <i class="fa-solid fa-magnifying-glass"></i>
                            <x-searchbar class="w-[250px] " id="customSearch" />
                        </div>
                    </div>
                    <div class="w-full pb-5 overflow-auto rounded-2xl" id="DataTable">
                        <x-datatable id="productPlacementTable"/>
                    </div>
                </div>
            </div>
        </div>

    <dialog id="AddPlacement" class="modal">
        <div class="modal-box p-0 w-11/12 max-w-2xl">
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
                        <option value="MARKET" stall="" dry="">MARKET STALL  DRY</option>
                        <option value="DRUGSTORE">DRUGSTORE</option>
                        <option value="SARISARI" store="">SARISARI STORE</option>
                        <option value="MARKET" stall="" wet="">MARKET STALL  WET</option>
                    </select>
                </div>
                <div class="divider my-0"></div>


                <div class="flex justify-between items-center">
                    <span> Select Product </span>
                    <select class="select w-[350px]">
                        <option disabled selected>Select Product</option>
                        <option>CORE</option>
                        <option>NON-CORE</option>
                    </select>
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

@endsection

<script type="module" src="/app/module/Product/productPlacement.js"></script>