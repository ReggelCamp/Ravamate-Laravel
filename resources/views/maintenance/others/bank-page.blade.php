@extends('layout.app')
@section('headerTitle', 'BANK MAINTENANCE')
@section('content')

    <div class="flex w-full h-full pb-20 pt-5 px-3">
        <div class="card w-full flex flex-col">
            <div class="report_title w-full h-[50px] justify-center items-center rounded-t-xl px-5 py-3 flex ">
                <x-report-header-title title="Bank Maintenance" />
                <div class="sheenFilterBtn border rounded-xl">
                    <span class="flex  items-center justify-center px-5 gap-[5px]">
                        <x-datepicker id="bank_Datepicker" drops="up" class="whitespace-nowrap h-[30px] text-[13px]" />
                        <i class=" w-[35px] " data-lucide="calendar-days"></i>
                        <i class="fa-solid fa-caret-down text-xs"></i>
                    </span>
                </div>
            </div>
            <div class="w-full items-center h-full bg-grey-500 flex flex-col px-5">
                <div class="flex items-center w-full h-[60px] py-3">
                    <div class="flex gap-5 w-full">
                        <div>
                            <x-exportDataTable class="sheenFilterBtn" tableId="#BankDataTable"/>
                        </div>
                        <div>
                            <button class="btn border sheenFilterBtn rounded-2xl w-fit px-5 h-[30px] text-[12px]" onclick="AddBank.showModal()">
                                <i class="mdi mdi-bank-plus"></i>
                                Add Bank
                            </button>
                        </div>
                    </div>
                    <div class=" border items-center justify-center flex px-2 rounded-2xl sm:max-w-[500px]  ">
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <x-searchbar class="w-[250px] " id="customSearch" />
                    </div>
                </div>
                <div class="w-full pb-5 overflow-auto" id="DataTable">
                    <x-datatable id="BankDataTable" />
                </div>
            </div>
        </div>
    </div>

    <dialog id="AddBank" class="modal">
        <div class="modal-box p-0 ">
            <form method="dialog">
                <button class=" btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>

            <h3 class="text-lg font-bold p-5">New Bank</h3>

            <div class="flex w-full border-t-1 text-gray-400"></div>

            <div class="flex w-full flex-col p-5">
                <div class="flex justify-between items-center">
                    <span> Bank Code </span>
                    <input type="text" placeholder="Type here" class="input input-bordered w-[350px]" />
                </div>
                <div class="divider my-0"></div>
                <div class="flex justify-between items-center">
                    <span> Bank Name </span>
                    <input type="text" placeholder="Type here" class="input input-bordered w-[350px]" />
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

<script type="module" src="/app/module/Maintenance/Others/BankTable.js"></script>