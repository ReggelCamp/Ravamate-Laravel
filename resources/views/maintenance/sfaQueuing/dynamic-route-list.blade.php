@extends('layout.app')
@section('headerTitle', 'Dynamic Route List')
@section('content')
@section('title', 'DYNAMIC ROUTE LIST')
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
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
                    <button onclick="Refresh.showModal()" class="border p-1 rounded-xl sheenFilterBtn text-[12px] gap-2 px-2 h-[30px] items-center flex">
                        <i class="mdi mdi-refresh"></i>
                        Refresh
                    </button>
                    <button onclick="StockReqModal.showModal()" class="border p-1 rounded-xl sheenFilterBtn text-[12px] gap-2 px-2 h-[30px] items-center flex">
                        <i class="mdi mdi-file-document-refresh"></i>
                        Confirm Stock Request
                    </button>
                    <a href ="{{ route('dynamicMap') }}" 
                        id="useMapBtn"
                        class="btn border p-1 rounded-xl sheenFilterBtn !text-white text-[12px] gap-2 px-2 h-[30px] items-center flex">
                        <i class="mdi mdi-map-legend"></i>
                        Use Map
                    </a>
                </div>
            </div>
            <div class="w-full carouselBg p-5">
                <div class="tabs tabs-lift">

                    <input type="radio" name="my_tabs_3" class="tab" aria-label="Route List" checked />
                    <div class="tab-content bg-base-100 border-base-300 p-6">
                        <div class="flex w-full justify-between h-full flex-col">
                            <div class="flex w-full justify-start md:justify-end items-center">
                                <div class="flex w-full flex-col-reverse md:flex-row justify-between pb-5 gap-3 items-start lg:items-center h-full">
                                    <div
                                        class="flex sheenFilterBtn rounded-2xl px-5 whitespace-nowrap gap-1 items-center font-medium border justify-end">
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

                            <div class=" ">
                                <x-datatable class="" id="DynamicRouteList_Table" />
                            </div>
                        </div>
                    </div>

                    <input type="radio" name="my_tabs_3" class="tab" aria-label="Transaction List"  />
                    <div class="tab-content bg-base-100 border-base-300 p-6">
                        <div class="flex w-full justify-between h-full flex-col">
                            <div class="flex w-full justify-start md:justify-end items-center">
                                <div class="flex w-full flex-col-reverse md:flex-row justify-between pb-5 gap-3 items-start lg:items-center h-full">
                                    <div class="flex rounded-2xl whitespace-nowrap gap-2 items-center font-medium justify-end">
                                      <button id="groupTransaction" class="btn h-[30px] sheenFilterBtn rounded-2xl text-[12px]">Group Transaction</button>
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

                            <div class=" ">
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
            <div class="flex w-full box-shadow bg-base-200 rounded-xl p-2 items-center">
                <p class="flex-1 w-fit px-5 whitespace-nowrap">Operation Type</p>
                <select class="border p-2 rounded-xl flex w-full justify-start">
                    <option disabled selected>Choose Operation Type</option>
                    <option>BTDT</option>
                    <option>BOOKING</option>
                </select>
            </div>
            <div class="flex w-full box-shadow bg-base-200 rounded-xl gap-[80px] p-2 items-center">
                <p class="flex w-fit px-5">Date</p>
                <x-datepicker id="TransactionDatePicker" class="flex w-full whitespace-nowrap justify-start text-black " label="Click Here To Filter Date"/>
            </div>
        </div>
        <div class="w-full justify-end items-end w-full pb-5 px-5">
            <form method="dialog ">
                <div class="flex gap-2 w-full justify-end">
                    <button class="btn">Close</button>
                    <button class="btn">Proceed</button>
                </div>
            </form>
        </div>
    </div>

<dialog id="StockReqModal" class="modal">
    <div class="modal-box p-0 max-w-lg">
        <div class="flex items-center justify-between p-5 border-b">
            <h3 class="text-2xl font-bold">Confirm Stock Request</h3>
            <form method="dialog">
                <button class="btn btn-sm btn-circle btn-outline">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </form>
        </div>

        <div class="flex flex-col">
            <div class="flex items-center w-full justify-between px-5 py-4 border-b">
                <label for="stockRequest_salesman" class="font-bold text-xs w-full uppercase">Salesman</label>
                <select id="stockRequest_salesman" class="border justify-start rounded-lg px-3 py-2 text-sm text-gray-500 w-full">
                    <option value="">Select Salesman</option>
                </select>
            </div>

            <div class="flex items-center w-full justify-between px-5 py-4">
                <label class="font-bold text-xs w-full uppercase ">Date</label>
                <div class="flex w-full justify-start border rounded-lg px-3">
                    <x-datepicker/>
                </div>
            </div>
        </div>

        <div class="flex w-full justify-end p-5 gap-3 border-t">
            <button type="button" onclick="stockRequestModal.close()" class="btn btn-outline">Cancel</button>
            <button type="button" id="stockRequest_executeBtn" class="btn bg-red-900 hover:bg-red-800 text-white border-none">Execute</button>
        </div>
    </div>
</dialog>

<dialog id="Refresh" class="modal">
  <div class="modal-box p-0">
    <form method="dialog">
      <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 class="text-lg font-semibold p-5 border-b">Select Booking Date to Refresh</h3>
    <div class="flex w-full flex-col">
        <div class="flex w-full p-5 whitespace-nowrap">
            <span class="flex w-full">Booking Date:</span>
            <div  class="flex w-full justify-start">
                <x-datepicker label="Pick a date Here" />
            </div>
        </div>
        <div class="flex w-full gap-5 p-5 justify-end border-t">
            <button class="btn">Close</button>
            <button class="btn">Execute</button>
        </div>
    </div>
  </div>
</dialog>

@endsection

<script type="module" src="/app/module/Maintenance/SFA_Queuing/DynamicRouteList.js"></script>