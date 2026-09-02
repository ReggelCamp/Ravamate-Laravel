@extends('layout.app')
@section('headerTitle', 'SALESMAN')
@section('content')
@section('title', 'SALESMAN')

    <div class="flex w-full h-full pb-20 pt-5 px-3">
        <div class="card w-full h-full flex flex-col">
            <div class="report_title w-full h-[50px] justify-center items-center rounded-t-xl px-5 py-3 flex ">
                <x-report-header-title title="Salesman Maintenance" />
                <div class="sheenFilterBtn border rounded-xl">
                    <span class="flex  items-center justify-center px-5 gap-[5px]">
                        <x-datepicker id="bank_Datepicker" drops="down" class="whitespace-nowrap h-[30px] text-[13px]" />
                        {{-- <i class=" w-[35px] " data-lucide="calendar-days"></i> --}}
                        <i class="fa-solid fa-caret-down text-xs"></i>
                    </span>
                </div>
            </div>
            <div class="w-full items-center h-full bg-grey-500 flex flex-col px-5">
                <div class="flex md:items-center items-start w-full h-fit py-3 md:flex-row flex-col-reverse my-5 md:my-0 gap-3">
                    <div class="flex gap-5 w-full">
                        <div class="flex rounded-2xl gap-3 h-[25px]">
                            <button class="btn border sheenFilterBtn rounded-xl w-fit px-5 text-[12px] h-[30px]"
                                onclick="AddSalesman.showModal()">
                                <i class="mdi mdi-plus-circle-outline"></i>
                                New Salesman
                            </button>
                            <div>
                                <x-exportDataTable class="sheenFilterBtn" tableId="#salesmanMaintenanceTable" />
                            </div>
                        </div>
                    </div>
                    <div class=" border items-center justify-center flex px-2 rounded-2xl sm:max-w-[500px]  ">
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <x-searchbar class="w-[250px] " id="customSearch" />
                    </div>
                </div>
                <div class="w-full pb-5 overflow-auto whitespace-nowrap max-h-[calc(100vh_-_250px)]" id="DataTable">
                    <x-datatable id="salesmanMaintenanceTable" />
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
                    <input type="time" value="07:00 AM" placeholder="Type here" class="input input-bordered w-[350px]" />
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

    <dialog id="SalesmanInfo_Modal" class="modal">
    <div class="modal-box w-full max-w-none h-[calc(100vh-80px)] md:h-[calc(100vh-140px)] mt-[80px] md:mt-[140px] rounded-none p-0 pb-10 overflow-y-auto">

        <form method="dialog"
            class="flex font-bold bg-gradient-to-br from-[#3a0a12] via-[#6d0f1f] to-[#8f1a2b] text-white h-[50px]">
            <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </form>

        <div class="flex flex-col w-full">
            <div class="flex flex-col sm:flex-row w-full p-5 gap-3 text-center">
                <div class="flex flex-1 flex-wrap gap-3 sm:gap-5 justify-center sm:justify-start">
                    <button type="button" id="salesmanInfo_HoldAccount"
                        class="btn rounded-full border sheenFilterBtn text-[13px] font-bold h-[38px]">
                        <i class="fa-solid fa-user-lock"></i> Hold Account
                    </button>

                    <button type="button" id="salesmanInfo_ResetAccount"
                        class="btn rounded-full border sheenFilterBtn text-[13px] font-bold h-[38px]">
                        <i class="fa-solid fa-rotate"></i> Reset Account
                    </button>
                </div>
                <div class="flex flex-1 justify-center sm:justify-end">
                    <button type="button" id="salesmanInfo_SaveChanges"
                        class="btn rounded-full border border-red-200 text-[#e6231e] text-[13px] font-bold h-[38px] w-full sm:w-auto">
                        <i class="fa-solid fa-floppy-disk"></i> Save Changes
                    </button>
                </div>
            </div>

            <div class="flex flex-col lg:flex-row w-full justify-center items-stretch gap-4 px-4">

                <!-- ID Card -->
                <div class="rounded-2xl overflow-auto shadow-sm w-full lg:w-[400px] lg:shrink-0 border">
                    <div class="flex-1 bg-white rounded-2xl overflow-hidden shadow-[2px_2px_10px]">
                        <div class="bg-gradient-to-br from-red-800 to-red-900 relative pb-5">
                            <div class="flex flex-col items-center w-full">
                                <div class="absolute inset-0 overflow-hidden opacity-20">
                                    <div class="w-24 h-24 rounded-full bg-white absolute -top-5 right-10"></div>
                                    <div class="w-16 h-16 rounded-full bg-white absolute top-10 right-0"></div>
                                </div>
                                <h3 class="text-white font-bold text-lg relative">Sales Report</h3>

                                <div class="flex items-center gap-3 mt-4 relative">
                                    <div
                                        class="w-16 h-16 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center overflow-hidden shrink-0">
                                        <i class="fa-solid fa-user text-gray-400 text-2xl"></i>
                                    </div>
                                    <div class="text-white leading-tight">
                                        <span class="text-[10px] opacity-80 block">Salesman</span>
                                        <span class="font-bold">{{ $report->salesman_name ?? 'ALEJANDRO CRUZ' }}</span>
                                    </div>
                                </div>
                            </div>

                            <div class="flex justify-end">
                                <div class="bg-white rounded-tl-xl px-5 py-1 -mb-5 text-center w-[150px]">
                                    <span class="text-[10px] text-gray-500 block">Md Code</span>
                                    <span class="font-bold text-sm ">
                                        CD00020
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div class="flex flex-col gap-3 px-4 pt-7 pb-4">
                            <label class="form-control">
                                <span class="label-text text-xs font-semibold text-gray-500 mb-1">Contact No.</span>
                                <input type="text" id="salesmanInfo_ContactNo" value="09295980904"
                                    class="input input-bordered input-sm rounded-full w-full text-[13px] font-semibold" />
                            </label>

                            <label class="form-control">
                                <span class="label-text text-xs font-semibold text-gray-500 mb-1">Md Password</span>
                                <div class="join w-full">
                                    <input type="password" id="salesmanInfo_MdPassword" value="password123"
                                        class="input input-bordered input-sm join-item w-full rounded-full text-[13px] font-semibold" />
                                    <button type="button" onclick="toggleSalesmanPassword(this)"
                                        class="btn btn-sm btn-ghost join-item -ml-10 z-10">
                                        <i class="fa-solid fa-eye-slash text-xs"></i>
                                    </button>
                                </div>
                            </label>

                            <label class="form-control">
                                <span class="label-text text-xs font-semibold text-gray-500 mb-1">Call Time</span>
                                <input type="text" id="salesmanInfo_CallTime" value="07:00:00"
                                    class="input input-bordered input-sm rounded-full text-[13px] w-full font-semibold" />
                            </label>

                            <label class="form-control">
                                <span class="label-text text-xs font-semibold text-gray-500 mb-1">Cashier No.</span>
                                <input type="text" id="salesmanInfo_CashierNo" value="09"
                                    class="input input-bordered input-sm rounded-full text-[13px] w-full font-semibold" />
                            </label>

                            <label class="form-control">
                                <span class="label-text text-xs font-semibold text-gray-500 mb-1">Supervisor Name</span>
                                <input type="text" id="salesmanInfo_SupervisorName" value="Ronald Boleche"
                                    class="input input-bordered input-sm rounded-full text-[13px] w-full font-semibold" />
                            </label>

                            <label class="form-control">
                                <span class="label-text text-xs font-semibold text-gray-500 mb-1">Supervisor No.</span>
                                <input type="text" id="salesmanInfo_SupervisorNo" value="09918334860"
                                    class="input input-bordered input-sm rounded-full text-[13px] w-full font-semibold" />
                            </label>

                            <label class="form-control">
                                <span class="label-text text-xs font-semibold text-gray-500 mb-1">Geolocking</span>
                                <input type="text" id="salesmanInfo_Geolocking" value="50"
                                    class="input input-bordered input-sm rounded-full text-[13px] w-full font-semibold" />
                            </label>

                            <label class="form-control">
                                <span class="label-text text-xs font-semibold text-gray-500 mb-1">Price Code</span>
                                <input type="text" id="salesmanInfo_Geolocking" value="50"
                                    class="input input-bordered input-sm rounded-full text-[13px] w-full font-semibold" />
                            </label>

                            <label class="form-control">
                                <span class="label-text text-xs font-semibold text-gray-500 mb-1">Loading
                                    Capacity</span>
                                <input type="text" id="salesmanInfo_Geolocking" value="50"
                                    class="input input-bordered input-sm rounded-full text-[13px] w-full font-semibold" />
                            </label>
                        </div>
                    </div>
                </div>

                {{-- Setting --}}
                <div class="rounded-2xl border w-full lg:w-[400px] lg:shrink-0 shadow-sm p-5 h-fit gap-2 flex flex-col">
                    <div class="flex items-center justify-between py-2 border rounded-full px-2">
                        <span class="text-[11px] font-semibold text-gray-500 w-full">Default ORD Type</span>
                        <select id="salesmanInfo_DefaultOrdType"
                            class="select select-bordered select-sm rounded-full w-full text-[13px] font-bold ">
                            <option>BOOKING</option>
                            <option>VAN SELLING</option>
                            <option>PRE BOOKING</option>
                            <option>LOGISTICS</option>
                            <option>HYBRID</option>
                        </select>
                    </div>

                    <div class="flex items-center justify-between py-2 border rounded-full px-2">
                        <span class="text-[13px] font-semibold text-gray-500 w-full">Warehouse Code</span>
                        <select id="salesmanInfo_WarehouseCode"
                            class="select select-bordered select-sm rounded-full text-[13px] w-full font-bold">
                            <option value="">Select</option>
                        </select>
                    </div>
                    <div class="flex items-center justify-between py-2 border rounded-full px-2">
                        <span class="text-[13px] font-semibold text-gray-500 w-full">Bad Order Warehouse</span>
                        <span id="salesmanInfo_BadOrderWarehouse"
                            class="select select-bordered select-sm rounded-full text-[13px] font-bold w-full ">
                            BO
                        </span>
                    </div>
                    <div class="flex items-center justify-between py-2 rounded-full border px-2">
                        <span class="text-[13px] font-semibold text-gray-500 w-full">Good Stock Return Warehouse</span>
                        <span id="salesmanInfo_GoodStockReturnWarehouse"
                            class="select select-bordered select-sm rounded-full text-[13px] font-bold w-full ">
                            HO
                        </span>
                    </div>

                    <div class="flex items-center justify-between py-2 rounded-full border px-2">
                        <span class="text-[13px] font-semibold text-gray-500 max-w-[55%]">OSA Checking</span>
                        <div class="flex items-center gap-2">
                            <span id="salesmanInfo_OsaChecking_state"
                                class="text-[12px] font-extrabold text-[#e6231e]">NO</span>
                            <input type="checkbox" id="salesmanInfo_OsaChecking" data-off-text="NO" data-on-text="YES"
                                class="toggle toggle-error salesman-toggle" />
                        </div>
                    </div>

                    <div class="flex items-center justify-between py-2 rounded-full border px-2">
                        <span class="text-[13px] font-semibold text-gray-500 max-w-[55%]">EOD</span>
                        <div class="flex items-center gap-2">
                            <span id="salesmanInfo_Eod_state"
                                class="text-[12px] font-extrabold text-[#e6231e]">DISABLED</span>
                            <input type="checkbox" id="salesmanInfo_Eod" data-off-text="DISABLED" data-on-text="ENABLED"
                                class="toggle toggle-error salesman-toggle" />
                        </div>
                    </div>

                    <div class="flex items-center justify-between py-2 rounded-full border px-2">
                        <span class="text-[13px] font-semibold text-gray-500 max-w-[55%]">Is Hybrid</span>
                        <div class="flex items-center gap-2">
                            <span id="salesmanInfo_IsHybrid_state"
                                class="text-[12px] font-extrabold text-[#e6231e]">DISABLED</span>
                            <input type="checkbox" id="salesmanInfo_IsHybrid" data-off-text="DISABLED"
                                data-on-text="ENABLED" class="toggle toggle-error salesman-toggle" />
                        </div>
                    </div>

                    <div class="flex items-center justify-between py-2 rounded-full border px-2">
                        <span class="text-[13px] font-semibold text-gray-500 max-w-[55%]">Restrict New Customer</span>
                        <div class="flex items-center gap-2">
                            <span id="salesmanInfo_RestrictNewCustomer_state"
                                class="text-[12px] font-extrabold text-[#e6231e]">DISABLED</span>
                            <input type="checkbox" id="salesmanInfo_RestrictNewCustomer" data-off-text="DISABLED"
                                data-on-text="ENABLED" class="toggle toggle-error salesman-toggle" />
                        </div>
                    </div>

                    <div class="flex items-center justify-between py-2 rounded-full border px-2">
                        <span class="text-[13px] font-semibold text-gray-500 max-w-[55%]">Disable OTP</span>
                        <div class="flex items-center gap-2">
                            <span id="salesmanInfo_DisableOtp_state"
                                class="text-[12px] font-extrabold text-[#e6231e]">NO</span>
                            <input type="checkbox" id="salesmanInfo_DisableOtp" data-off-text="NO" data-on-text="YES"
                                class="toggle toggle-error salesman-toggle" />
                        </div>
                    </div>
                </div>

                <!-- Color code panel -->
                <div class="rounded-2xl border shadow-sm overflow-hidden w-full lg:w-[631px] lg:shrink-0 h-fit">
                    <div
                        class="bg-gradient-to-br from-[#3a0a12] to-[#8f1a2b] text-white text-center py-7 text-lg font-extrabold tracking-wide">
                        SALESMAN COLOR CODE
                    </div>
                    <div class="p-6 text-center">
                        <p class="text-[13px] font-bold text-gray-700 mb-4">Click here to change color</p>

                        <input type="color" id="salesmanInfo_ColorPicker" value="#ff0000" class="hidden"
                            onchange="document.getElementById('salesmanInfo_Swatch').style.background = this.value" />

                        <div id="salesmanInfo_Swatch"
                            class="w-full max-w-[220px] aspect-square mx-auto rounded border cursor-pointer"
                            style="background:#ff0000"
                            onclick="document.getElementById('salesmanInfo_ColorPicker').click()">
                        </div>
                    </div>

                    <div class="flex flex-col w-full items-center px-4 pb-4 text-center">
                        <span class="text-red-500 font-bold">
                            NOTE
                        </span>
                        <p class="flex items-center justify-center w-full text-center">
                            Hold accounts continue to incur charges. If you want to stop charges,
                             Please email us to permanently disabled the account.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    </div>
</dialog>

@endsection

<script type="module" src="/app/module/Maintenance/Others/SalesmanMaintenance.js"></script>
