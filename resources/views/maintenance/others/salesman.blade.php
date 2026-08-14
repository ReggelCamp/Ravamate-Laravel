@extends('layout.app')
@section('headerTitle', 'SALESMAN')
@section('content')

    <div class="flex w-full pt-5 px-3">
        <div class="card w-full h-full flex flex-col">
            <div class="report_title w-full h-[50px] justify-center items-center rounded-t-xl px-5 py-3 flex ">
                <x-report-header-title title="Salesman Maintenance" />
                <span class="flex sheenFilterBtn border rounded-xl bg-transparent items-center justify-center px-5 gap-[5px]">
                    <x-datepicker class="whitespace-nowrap h-[30px] text-[13px] " />
                    <i class=" w-[13px] h-[13px] " data-lucide="calendar-days"></i>
                    <i class="fa-solid fa-caret-down text-xs"></i>
                </span>
            </div>
            <div class="w-full items-center h-full bg-grey-500 flex flex-col px-5">
                <div class="flex items-center w-full h-[60px] py-3">
                    <div class="flex gap-5 w-full">
                        <div class="flex rounded-2xl gap-3 h-[25px]">
                             <button class="btn border sheenFilterBtn rounded-xl w-fit px-5 text-[12px] h-[30px]" onclick="AddSalesman.showModal()">
                                <i class="mdi mdi-plus-circle-outline"></i>
                                New Salesman
                            </button>
                            <div>
                                <x-exportDataTable class="sheenFilterBtn" tableId="#salesmanMaintenanceTable"/>
                            </div>
                        </div>
                    </div>
                    <div class=" border items-center justify-center flex px-2 rounded-2xl sm:max-w-[500px]  ">
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <x-searchbar class="w-[250px] " id="customSearch" />
                    </div>
                </div>
                <div class="w-full pb-5 overflow-auto whitespace-nowrap" id="DataTable">
                    <x-datatable id="salesmanMaintenanceTable"/>
                </div>
            </div>
        </div>
    </div>

    <dialog id="AddSalesman" class="modal">
        <div class="modal-box p-0 w-11/12 max-w-3xl">
            <form method="dialog">
                <button class=" btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>

            <h3 class="text-lg font-bold p-5">New Salesman</h3>

            <div class="flex w-full border-t-1 text-gray-400"></div>

            <div class="flex w-full flex-col p-5">

                <div class="flex justify-between items-center">
                    <span> Name </span>
                    <input type="text" placeholder="Type here" class="input input-bordered w-[350px]" />
                </div>
                <div class="divider my-0"></div>
                
                <div class="flex justify-between items-center">
                    <span> Password </span>
                    <input type="password" placeholder="Type here" class="input input-bordered w-[350px]" />
                </div>
                <div class="divider my-0"></div>
                
                <div class="flex justify-between items-center">
                    <span> Call Time </span>
                    <input type="time"  value="07:00 AM" placeholder="Type here" class="input input-bordered w-[350px]" />
                </div>
                <div class="divider my-0"></div>
                
                <div class="flex justify-between items-center">
                    <span> Default Ord. Type </span>
                    <input type="text" placeholder="Type here" class="input input-bordered w-[350px]" />
                </div>
                <div class="divider my-0"></div>
                
                <div class="flex justify-between items-center">
                    <span> Loading Capacity (₱) </span>
                    <input type="text" value="0" placeholder="Type here" class="input input-bordered w-[350px]" />
                </div>
                <div class="divider my-0"></div>
                
                <div class="flex justify-between items-center">
                    <span> Color </span>
                    <input type="color" placeholder="Type here" class="input input-bordered w-[350px]" />
                </div>
                <div class="divider my-0"></div>
                
                <div class="flex justify-between items-center">
                    <span> Contact No. </span>
                    <input type="text" placeholder="11 digit number format" class="input input-bordered w-[350px]" />
                </div>
                <div class="divider my-0"></div>
                
                <div class="flex justify-between items-center">
                    <span> Cashier(Mobile #) </span>
                    <input type="text" placeholder="11 digit number format" class="input input-bordered w-[350px]" />
                </div>
                <div class="divider my-0"></div>
                
                <div class="flex justify-between items-center">
                    <span> Supervisor Name </span>
                    <input type="text" placeholder="supervisor name" class="input input-bordered w-[350px]" />
                </div>
                <div class="divider my-0"></div>
                
                <div class="flex justify-between items-center">
                    <span> Supervisor (Mobile #) </span>
                    <input type="text" placeholder="11 digit number format" class="input input-bordered w-[350px]" />
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

<script type="module" src="/app/module/Maintenance/Others/SalesmanMaintenance.js"></script>