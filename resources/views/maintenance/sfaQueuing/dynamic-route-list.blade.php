@extends('layout.app')
@section('headerTitle', 'Dynamic Route List')
@section('content')


    <style>
        .FilterBtn{
            background-color: var(--primary);
            color: var(--header-color);
        }
        .FilterBtn:hover{
            background: linear-gradient(90deg, var(--primary), var(--secondary), var(--accent), var(--primary));
            color: var(--header-color);
        }
    </style>

    <div class="flex w-full h-full pb-20 pt-5 px-3 ">
        <div class="card w-full h-full flex flex-col">
            <div class=" report_title w-full h-[50px] justify-center items-center rounded-t-xl px-5 py-3 flex ">
                <x-report-header-title title="Dynamic Route List" />
               <div class="flex gap-2 w-full justify-end">
                    <button class="border p-1 rounded-xl sheenFilterBtn text-[12px] gap-2 px-2 h-[30px] items-center flex">
                        <i class="mdi mdi-refresh"></i>
                        Refresh
                    </button>
                    <button class="border p-1 rounded-xl sheenFilterBtn text-[12px] gap-2 px-2 h-[30px] items-center flex">
                        <i class="mdi mdi-file-document-refresh"></i>
                        Confirm Stock Request
                    </button>
                    <button class="border p-1 rounded-xl sheenFilterBtn text-[12px] gap-2 px-2 h-[30px] items-center flex">
                        <i class="mdi mdi-map-legend"></i>
                        Use Map
                    </button>
                </div>
            </div>
            <div class="w-full carouselBg p-5">
                <div class="tabs tabs-lift">

                    <input type="radio" name="my_tabs_3" class="tab" aria-label="Route List" checked />
                    <div class="tab-content bg-base-100 border-base-300 p-6">
                        <div class="flex w-full justify-between h-full flex-col">
                            <div class="flex w-full justify-start md:justify-end items-center">
                                <div
                                    class="flex w-full flex-col-reverse md:flex-row justify-between pb-5 gap-3 items-center h-full">

                                    <div
                                        class="flex sheenFilterBtn rounded-2xl px-5 whitespace-nowrap gap-1 items-center font-medium border justify-end">
                                        <i class="items-center justify-center w-5 h-5 flex" data-lucide="calendar-days"></i>
                                        <x-datepicker class="!text-black" />
                                    </div>
                                    <div class="flex w-full justify-start md:justify-end items-center">
                                        <div
                                            class="flex items-center border px-2 rounded-2xl w-[280px] sm:w-[550px] md:w-[300px]">
                                            <i class="fa-solid fa-magnifying-glass mr-2"></i>
                                            <x-searchbar class="w-full" id="customSearch" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="min-w-[550px] ">
                                <x-datatable class="" id="DynamicRouteList_Table" />
                            </div>
                        </div>
                    </div>

                    <input type="radio" name="my_tabs_3" class="tab" aria-label="Transaction List"  />
                    <div class="tab-content bg-base-100 border-base-300 p-6">
                        <div class="flex w-full justify-between h-full flex-col">
                            <div class="flex w-full justify-start md:justify-end items-center">
                                <div class="flex w-full flex-col-reverse md:flex-row justify-between pb-5 gap-3 items-center h-full">
                                    <div class="flex rounded-2xl whitespace-nowrap gap-2 items-center font-medium justify-end">
                                      <button onclick="group_transaction.showModal()" class="btn h-[30px] sheenFilterBtn rounded-2xl text-[12px]">Group Transaction</button>
                                      <button class="btn rounded-2xl text-[12px] h-[30px] sheenFilterBtn" onclick="filter.showModal()">Filter</button>
                                    </div>
                                    <div class="flex w-full justify-start md:justify-end items-center">
                                        <div
                                            class="flex items-center border px-2 rounded-2xl w-[280px] sm:w-[550px] md:w-[300px]">
                                            <i class="fa-solid fa-magnifying-glass mr-2"></i>
                                            <x-searchbar class="w-full" id="customSearch" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="min-w-[550px] ">
                                <x-datatable class="" id="DynamicTransactionList_Table" />
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    </div>

<dialog id="group_transaction" class="modal">
  <div class="modal-box">
    <h3 class="text-lg font-bold">Hello!</h3>
    <p class="py-4">Press ESC key or click the button below to close</p>
    <div class="modal-action">
      <form method="dialog">
        <!-- if there is a button in form, it will close the modal -->
        <button class="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>

<dialog id="filter" class="modal">
  <div class="modal-box p-0">
    <h3 class="text-lg font-bold p-5">Filter Data</h3>
    <div class="w-full border-t-1 text-gray-400"></div>
        <div class="flex flex-col gap-2 p-5">
            <div class="flex w-full box-shadow bg-base-200 rounded-xl p-2 gap-2 items-center">
                <p>Operation Type</p>
                <select class="border p-2 rounded-xl w-full max-w-xs">
                    <option disabled selected>Choose Operation Type</option>
                    <option>BTDT</option>
                    <option>BOOKING</option>
                </select>
            </div>
            <div class="flex justify-between w-full bg-base-200 rounded-xl p-2 gap-2 items-center justify-start">
                <p class="w-[150px]">Date</p>
                <x-datepicker id="TransactionDatePicker" class="whitespace-normal text-black " label="Click Here To Filter Date"/>
            </div>
        </div>
        <div class="w-full justify-end items-end w-full pb-5 px-5">
            <form method="dialog ">
                <div class="flex gap-2 w-full justify-end">
                    <button class="btn">Close</button>
                    <button class="btn FilterBtn">Proceed</button>
                </div>
            </form>
        </div>
    </div>

@endsection

<script type="module" src="/app/module/Maintenance/SFA_Queuing/DynamicRouteList.js"></script>