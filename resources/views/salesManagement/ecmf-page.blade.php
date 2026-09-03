@extends('layout.app')
@section('headerTitle', 'ELECTRONIC CMF')
@section('content')
@section('title', 'ECMF')


    <style>
        table.dataTable {
            width: 100% !important;
        }

        table.dataTable th,
        table.dataTable td {
            white-space: nowrap;
        }

        /* #datepicker {
            color: black;
        } */
    </style>

    <div class="flex w-full h-full pb-20 pt-5 px-3 ">
        <div class="card w-full h-full flex flex-col">
            <div class=" report_title w-full h-[50px] justify-center items-center rounded-t-xl px-5 py-3 flex ">
                <x-report-header-title title="Electronic CMF" />
            </div>
            <div class="w-full carouselBg h-full">
                <div class="tabs tabs-lift p-5">
                    <input type="radio" name="my_tabs_3" class="tab" aria-label="E-CMF Records" checked />
                    <div class="tab-content bg-base-100 border-base-300 p-5">
                        <div class="flex w-full justify-between h-full flex-col">
                            <div
                                class="flex w-full flex-col-reverse md:flex-row justify-between pb-5 gap-3 items-center h-full">
                                <div class="flex  items-center h-[30px]  w-full gap-5">
                                    <div>
                                        <x-exportDataTable tableId="#EcmfTable"
                                            class="sheenFilterBtn font-medium border rounded-xl px-5 text-[12px] h-[30px]" />
                                    </div>
                                    <div
                                        class="flex rounded-xl sheenFilterBtn  px-5 whitespace-nowrap h-[30px] items-center justify-end">
                                        {{-- <i class="items-center justify-center w-5 h-5 flex font-medium"
                                            data-lucide="calendar-days"></i> --}}
                                        <x-datepicker opens="right" class=" text-[12px] font-medium" />
                                    </div>
                                    <div>
                                        <button onclick="ExportEcmfRecords.showModal()"
                                            class="text-[12px] custom-shadow font-medium sheenFilterBtn h-[30px] border rounded-xl px-5">
                                            Export Salesman CMF Records
                                        </button>
                                    </div>
                                </div>
                                <div class="flex w-full justify-start md:justify-end items-center">
                                    <div
                                        class="flex items-center border px-2 rounded-2xl w-[280px] sm:w-[550px] md:w-[300px]">
                                        <i class="fa-solid fa-magnifying-glass mr-2"></i>
                                        <x-searchbar tableId="#EcmfTable" class="w-full h-[28px] font-medium customSearch"
                                            id="customSearch" />
                                    </div>
                                </div>
                            </div>
                            <div class=" whitespace-nowrap max-h-[calc(100vh-250px)] ">
                                <x-datatable class="font-medium rounded-t-2xl pt-5 text-[10px]" id="EcmfTable" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <dialog id="ExportEcmfRecords" class="modal">
        <div class="modal-box p-0">
            <form method="dialog">
                <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <h3 class="text-lg font-bold p-5">Generate Salesman Registered CMF Records:</h3>
            <div class="border-t-1 w-full text-gray-500"></div>
            <div class="flex w-full p-5 flex-col gap-5">
                <div class="flex w-full justify-between items-center">
                    <span>
                        Salesman Name:
                    </span>
                    <select id="select_items" class="select">
                        <option disabled selected>Choose Here</option>
                    </select>
                </div>
                <div class="flex w-full  items-center">
                    <span class="w-fit pr-[117px]">
                        Date:
                    </span>
                    <div class="w-fit px-5 rounded-lg border justify-start item flex gap-2">
                        <x-datepicker />
                    </div>
                </div>
                <div class="w-full flex items-end justify-end text-white">
                    <button class="btn bg-blue-500 rounded-lg flex">Generate Records</button>
                </div>
            </div>
        </div>
    </dialog>

    <dialog id="EcmfModal" class="modal">
        <div class="modal-box w-full max-w-2xl p-0 overflow-hidden">

            <!-- Header -->
            <div class="relative px-6 pt-5 pb-4 border-b border-gray-300">
                <form method="dialog">
                    <button class="btn btn-sm btn-square absolute right-4 top-4 ">✕</button>
                </form>

                <div class="flex items-center gap-3">
                    <h3 class="text-xl font-bold text-gray-900">CMF Details</h3>
                    <span id="ecmfModal_StatusBadge"
                        class="badge bg-green-100 text-green-700 font-bold border-none px-3 py-3">
                        APPROVED
                    </span>
                </div>

                <p class="text-[13px] text-gray-700 mt-1">
                    <span class="font-semibold">ID:</span>
                    <span id="ecmfModal_Id" class="font-bold">CD0004920260803153654FPM</span>
                    <span class="mx-1">|</span>
                    <span class="font-semibold">Requested on:</span>
                    <span id="ecmfModal_RequestedOn" class="font-bold">2026-08-03 15:36:54.947</span>
                </p>
            </div>

            <!-- Scrollable body -->
            <div class="max-h-[70vh] overflow-y-auto px-6 py-5">

                <!-- General Information -->
                <div class="flex items-center gap-2 mb-4">
                    <i class="fa-solid fa-circle-user text-blue-600 text-lg"></i>
                    <h4 class="font-bold text-gray-900 tracking-wide text-[15px]">GENERAL INFORMATION</h4>
                </div>

                {{-- <div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mb-6 "> --}}
                <div class="flex w-full flex-col mb-6">
                    <label class="form-control flex flex-col md:w-[302px] ">
                        <span class="label-text text-[11px] font-bold text-gray-500 mb-1">SOLD TO NAME</span>
                        <input type="text" id="ecmfModal_SoldToName" value="FJ STORE"
                            class="input input-bordered text-[15px] font-semibold" />
                    </label>

                    <div class="flex flex-col md:flex-row w-full justify-between gap-5">
                        <label class="form-control w-full">
                            <span class="label-text text-[11px] font-bold text-gray-500 mb-1">CUSTOMER CODE</span>
                            <input type="text" id="ecmfModal_CustomerCode" value="---" disabled
                                class="input input-bordered text-[15px] font-semibold bg-gray-100 pointer-events-none" />
                        </label>

                        <label class="form-control w-full">
                            <span class="label-text text-[11px] font-bold text-gray-500 mb-1">SALES PERSON</span>
                            <input type="text" id="ecmfModal_SalesPerson" value="FPM_13_CARLOS ORBINES" disabled
                                class="input input-bordered text-[15px] font-semibold bg-gray-100" />
                        </label>
                    </div>

                    <div class="flex flex-col md:flex-row w-full justify-between gap-5">
                        <label class="form-control w-full">
                            <span class="label-text text-[11px] font-bold text-gray-500 mb-1">TRADE CHANNEL</span>
                            <select id="ecmfModal_TradeChannel"
                                class="select select-bordered text-[15px] font-medium text-gray-400">
                                <option>Choose here</option>
                            </select>
                        </label>

                        <label class="form-control w-full">
                            <span class="label-text text-[11px] font-bold text-gray-500 mb-1">CUSTOMER GROUP</span>
                            <select id="ecmfModal_CustomerGroup"
                                class="select select-bordered text-[15px] font-medium text-gray-400">
                                <option>Choose here</option>
                            </select>
                        </label>
                    </div>
                </div>

                <div class="divider my-0"></div>

                <!-- Contact Details -->
                <div class="flex items-center gap-2 mt-5 mb-4">
                    <i class="fa-solid fa-address-card text-blue-600 text-lg"></i>
                    <h4 class="font-bold text-gray-900 tracking-wide text-[15px]">CONTACT DETAILS</h4>
                </div>

                <div class="flex w-full flex-col mb-6 ">
                    <label class="form-control flex flex-col md:w-[302px] ">
                        <span class="label-text text-[11px] font-bold text-gray-500 mb-1">CONTACT PERSON</span>
                        <input type="text" id="ecmfModal_ContactPerson" value="JEENA C. FRIAS"
                            class="input input-bordered text-[15px] font-semibold" />
                    </label>

                    <div class="flex flex-col md:flex-row w-full justify-between gap-5">
                        <label class="form-control w-full">
                            <span class="label-text text-[11px] font-bold text-gray-500 mb-1">MOBILE NUMBER</span>
                            <input type="text" id="ecmfModal_MobileNumber" value="09462750792"
                                class="input input-bordered text-[15px] font-semibold" />
                        </label>

                        <label class="form-control w-full">
                            <span class="label-text text-[11px] font-bold text-gray-500 mb-1">EMAIL ADDRESS</span>
                            <input type="text" id="ecmfModal_EmailAddress" value=""
                                class="input input-bordered text-[15px] font-semibold" />
                        </label>
                    </div>
                </div>

                <div class="divider my-0"></div>

                <!-- Location & Address -->
                <div class="flex items-center gap-2 mt-5 mb-4">
                    <i class="fa-solid fa-location-dot text-blue-600 text-lg"></i>
                    <h4 class="font-bold text-gray-900 tracking-wide text-[15px]">LOCATION &amp; ADDRESS</h4>
                </div>

                <div class="flex w-full flex-col mb-6">
                    <label class="form-control flex flex-col md:w-[302px] ">
                        <span class="label-text text-[11px] font-bold text-gray-500 mb-1">
                            CUSTOMER ADDRESS (ENTERED BY SALESMAN &ndash; REFERENCE)
                        </span>
                        <input type="text" id="ecmfModal_CustomerAddressRef" readonly
                            class="input input-bordered text-[15px] font-semibold bg-gray-100" />
                    </label>
                    <div class="flex flex-col md:flex-row w-full justify-between gap-5">
                        <label class="form-control w-full">
                            <span class="label-text text-[11px] font-bold text-gray-500 mb-1">PROVINCE</span>
                            <select id="ecmfModal_Province" class="select select-bordered text-[15px] font-semibold">
                                <option>Choose here</option>
                            </select>
                        </label>

                        <label class="form-control w-full">
                            <span class="label-text text-[11px] font-bold text-gray-500 mb-1">MUNICIPALITY</span>
                            <select id="ecmfModal_Municipality"
                                class="select select-bordered text-[15px] font-medium ">
                                <option>Choose here</option>
                            </select>
                        </label>
                    </div>

                    <div class="flex flex-col md:flex-row w-full justify-between gap-5">
                        <label class="form-control w-full">
                            <span class="label-text text-[11px] font-bold text-gray-500 mb-1">BARANGAY</span>
                            <select id="ecmfModal_Barangay"
                                class="select select-bordered text-[15px] font-medium ">
                                <option>Choose here</option>
                            </select>
                        </label>

                        <label class="form-control w-full">
                            <span class="label-text text-[11px] font-bold text-gray-500 mb-1">POSTAL CODE</span>
                            <input type="text" id="ecmfModal_PostalCode"
                                class="input input-bordered text-[15px] font-semibold" />
                        </label>
                    </div>

                    <div class="flex flex-col md:flex-row w-full justify-between gap-5">
                        <label class="form-control w-full">
                            <span class="label-text text-[11px] font-bold text-gray-500 mb-1">OTHER ADDRESS</span>
                            <input type="text" id="ecmfModal_OtherAddress"
                                class="input input-bordered text-[15px] font-semibold" />
                        </label>

                        <label class="form-control w-full">
                            <span class="label-text text-[11px] font-bold text-gray-500 mb-1">OTHER INFO (SHIP TO)</span>
                            <input type="text" id="ecmfModal_OtherInfoShip"
                                class="input input-bordered text-[15px] font-semibold" />
                        </label>
                    </div>

                    <label class="form-control flex flex-col md:w-[302px] ">
                        <span class="label-text text-[11px] font-bold text-gray-500 mb-1">OTHER INFO (SOLD TO)</span>
                        <input type="text" id="ecmfModal_OtherInfoSold"
                            class="input input-bordered text-[15px] font-semibold" />
                    </label>
                </div>

                <div class="divider my-0"></div>

                <!-- Business Details -->
                <div class="flex items-center gap-2 mt-5 mb-4">
                    <i class="fa-solid fa-address-card text-blue-600 text-lg"></i>
                    <h4 class="font-bold text-gray-900 tracking-wide text-[15px]">BUSINESS DETAILS</h4>
                </div>

                <div class="flex w-full flex-col mb-6">
                    <div class="flex flex-col md:flex-row w-full justify-between gap-5">
                        <label class="form-control w-full">
                            <span class="label-text text-[11px] font-bold text-gray-500 mb-1">GEOAREA</span>
                            <input type="text" id="ecmfModal_GeoArea" class="input input-bordered text-[15px] font-semibold" />
                        </label>

                        <label class="form-control w-full">
                            <span class="label-text text-[11px] font-bold text-gray-500 mb-1">CHAIN</span>
                            <input type="text" id="ecmfModal_Chain" class="input input-bordered text-[15px] font-semibold" />
                        </label>
                    </div>

                    <div class="flex flex-col md:flex-row w-full justify-between gap-5">
                        <label class="form-control w-full">
                            <span class="label-text text-[11px] font-bold text-gray-500 mb-1">COVERAGE</span>
                            <input type="text" id="ecmfModal_CoverageDay"
                                class="input input-bordered text-[15px] font-semibold" />
                        </label>

                        <label class="form-control w-full">
                            <span class="label-text text-[11px] font-bold text-gray-500 mb-1">FREQUENCY</span>
                            <input type="number" id="ecmfModal_Frequency"
                                class="input input-bordered text-[15px] font-semibold" />
                        </label>
                    </div>

                    <label class="form-control flex flex-col md:w-[302px] ">
                        <span class="label-text text-[11px] font-bold text-gray-500 mb-1">TIN</span>
                        <input type="number" id="ecmfModal_Tin" class="input input-bordered text-[15px] font-semibold" />
                    </label>

                </div>

                <div class="flex w-full pt-5 justify-between">
                    <div class="flex gap-5">
                        <button class="btn bg-amber-500 rounded-lg">Update</button>
                        <button class="bg-blue-500  btn rounded-lg">Print</button>
                    </div>
                    <div class="flex gap-5">
                        <button class="btn bg-blue-500 rounded-lg">Approved</button>
                        <button class="btn bg-red-500 rounded-lg">Disapproved</button>
                    </div>
                </div>

            </div>
        </div>

        <form method="dialog" class="modal-backdrop">
            <button>close</button>
        </form>
    </dialog>

@endsection

<script type="module" src="/app/module/Sale_Management/ecmfTable.js"></script>