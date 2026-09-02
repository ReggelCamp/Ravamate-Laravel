@extends('layout.app')
@section('headerTitle', 'Must Carry Maintenance')
@section('content')
@section('title', 'MUST CARRY MAINTENANCE')

    <style>
        .dropdown {
            width: 100%;
        }
    </style>

    <div class="flex w-full h-full pb-20 pt-5 px-3">
        <div class="card w-full h-full flex flex-col">
            <div class="report_title w-full h-[50px] justify-center items-center rounded-t-xl px-5 py-3 flex ">
                <x-report-header-title title="Must Carry Maintenance" />
            </div>
            <div class="w-full items-center h-full bg-grey-500 flex flex-col px-5">
                <div class="flex flex-col-reverse lg:flex-row gap-3 items-start lg:items-center w-full h-fit py-5">
                    <div class="flex items-center gap-5 w-full">
                        <div>
                            <x-exportDataTable class="sheenFilterBtn" tableId="#mustCarryTable" />
                        </div>
                        <div>
                            <button class="btn border sheenFilterBtn rounded-2xl w-fit px-5 text-[12px] h-[30px]" onclick="MustCarry.showModal()">
                                <i class="mdi mdi-printer-outline"></i>
                                Add MustCarry</button>
                        </div>
                    </div>
                    <div class=" border items-center justify-center flex px-2 rounded-2xl sm:max-w-[500px]  ">
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <x-searchbar class="w-[250px] " id="customSearch" />
                    </div>
                </div>
                <div class="w-full pb-5 overflow-auto max-h-[calc(100vh_-_250px)]" id="DataTable">
                    <x-datatable id="mustCarryTable"/>
                </div>
            </div>
        </div>
    </div>

      <dialog id="MustCarry" class="modal">
        <div class="modal-box p-0 overflow-visible">
            <form method="dialog">
                <button class=" btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>

            <h3 class="text-lg font-bold p-5">New Must Carry</h3>

            <div class="flex w-full border-t-1 text-gray-400"></div>

            <div class="flex w-full flex-col p-5">
                
                <div class="flex justify-between items-center ">
                    <span class="flex whitespace-nowrap "> Customer Class </span>
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


                <div class="flex justify-between w-full items-center gap-5">
                    <span class="flex whitespace-nowrap "> Select Product </span>
                    <div class="w-[350px]">
                        <x-dropdown class="w-[350px]"
                            buttonClass="border  px-3 py-2 text-sm text-gray-500 w-full h-[40px] flex items-center justify-between">
                            <x-slot:dropdownName class="w-full flex items-center justify-between">
                                <span class="w-full" id="update_weekVisited_label">Select</span>
                                <i class="fa-solid fa-chevron-down text-xs text-gray-400"></i>
                            </x-slot:dropdownName>

                            <ul id="addMustCarry"
                                class="border w-fit px-1 max-h-[300px] overflow-auto rounded-lg z-[9999] bg-white shadow-lg p-0">

                            </ul>
                        </x-dropdown>
                    </div>
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

    <dialog id="MustCarryModal" class="modal">
    <div class="modal-box max-w-2xl p-0 rounded-xl overflow-hidden">

        {{-- Header --}}
        <div class="flex items-center justify-between px-6 py-5 border-b">
            <h3 class="text-xl font-bold">Must Carry Details</h3>
            <form method="dialog">
                <button class="btn btn-sm btn-circle btn-ghost text-gray-400 hover:text-gray-600">
                    <i class="fa-solid fa-xmark text-lg"></i>
                </button>
            </form>
        </div>

        {{-- Detail rows --}}
        <div class="flex flex-col text-sm" id="mustCarryModalBody">

            <div class="flex items-center px-6 py-3 border-b gap-5">
                <label class="font-bold w-40 shrink-0">Customer Type</label>
                <div class="bg-gray-100 rounded-md w-full px-4 py-2 text-gray-700"
                     data-field="customer_type">—</div>
            </div>

            <div class="flex items-center px-6 py-3 border-b gap-5">
                <label class="font-bold w-40 shrink-0">Must Carry Item</label>
                <div class="bg-gray-100 rounded-md w-full px-4 py-2 text-gray-700"
                     data-field="must_carry_item">—</div>
            </div>

        </div>

        {{-- Footer --}}
        <div class="flex justify-end gap-2 px-6 py-4">
            <form method="dialog">
                <button class="btn bg-gray-500 hover:bg-gray-600 text-white border-none rounded-md px-6">
                    Close
                </button>
            </form>
            <button type="button" id="deleteMustCarryBtn"
                    class="btn bg-red-600 hover:bg-red-700 text-white border-none rounded-md px-6">
                Delete
            </button>
        </div>

    </div>

    <form method="dialog" class="modal-backdrop">
        <button>close</button>
    </form>
</dialog>

@endsection

<script type="module" src="/app/module/Product/mustCarry.js"></script>