@extends('layout.app')
@section('headerTitle', 'SFA Queuing')
@section('content')
@section('title', 'SFA QUEUING')

    <style>
        #processModal {
            align-items: flex-start;
            justify-content: center;
            padding-top: 100px;
        }

        #datepicker {
            color: var(--header-color);
            font-weight: 500;
        }

        .SfaTab:checked {
            background-color: #a78ca0 !important;
        }

        .dt-paging {
            background-color: #a78ca0 !important;
        }

        /* SFA MAINTENANCE */
        .ericPendingVal {
            font-size: 50px !important;
            font-weight: 800 !important;
            color: var(--accent);
            font-weight: bolder !important;
            /* This will override the numeric if supported */
        }

        .sfaqueuingHeader {
            font-size: 18px !important;
            font-weight: 600 !important;
            color: var(--header-color);
        }

        .sfaqueuingSubHeader {
            font-size: 14px !important;
            font-weight: 300 !important;
            color: var(--header-color);
        }

        /* .sfaqueuingBtn{
            color: var(--header-color) !important;
        } */

        .sfaqueuingLogs {
            color: var(--header-color);
        }

        .sfaqueuingLogs:hover {
            /* color: var(--body-color); */
            /* background-color: var(--background); */
            border: 1px solid var(--background);
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
        }

        #PendingLogs_wrapper .dt-scroll-head th,
        #FailedLogs_wrapper .dt-scroll-head th,
        #SuccessLogs_wrapper .dt-scroll-head th {
            color: var(--header-color) !important;
            font-size: 10px !important;
            font-weight: 600;
            text-align: left !important;
            padding-left: 12px !important;
            white-space: nowrap !important;
        }

        .SfaTab {
            color: var(--header-color) !important;
            /* transition: all 0.2s ease; */
        }

        .SfaTab:hover {
            color: var(--header-color) !important;

        }

        .tabs .tab.SfaTab:hover {
            border-color: var(--header-color) !important;
        }

        .SfaTab:checked {
            background-color: var(--header-color) !important;
            color: var(--body-color) !important;
            border-color: var(--header-color) !important;
        }

        .container_trigger.active {
            background-color: #a78ca0;
            /* violet-600 */
        }

        .container_trigger.active:hover {
            background-color: #a78ca0;
            /* keep the same color on hover */
        }

        .sfaShine_Btn {
            position: relative;
            overflow: hidden;
            background: transparent;
            border: 1px solid var(--header-color);
            color: var(--header-color);
        }

        .sfaShine_Btn:hover {
            background: linear-gradient(to right,
                    var(--secondary),
                    var(--primary));
            border: 1px solid var(--header-color);
            color: var(--header-color);
        }

        .sfaShine_Btn::after {
            content: "";
            position: absolute;
            top: 0;
            left: -150%;
            width: 50%;
            height: 100%;
            z-index: 1;

            background: linear-gradient(120deg,
                    transparent 0%,
                    rgba(255, 255, 255, 0.25) 50%,
                    transparent 100%);

            transform: skewX(-20deg);
            pointer-events: none;
        }

        .sfaShine_Btn:hover::after {
            animation: sheen 0.8s ease-in-out forwards;
        }

        .reprocess_btn {
            font-size: 11px;
            font-weight: 500;
        }

        /* .linearbg{
                background: linear-gradient(to top, var(--primary), transparent);
            } */

        .dataTable-info {
            font-size: 15px !important;
        }

        .table_container .dt-scroll-body tbody tr:nth-child(even) {
            background-color: transparent !important;
        }

        #TransactionTable_wrapper .dt-scroll-body table tbody td{
            font-size: 10px !important;
        }
        
        #TransactionTable_wrapper .dt-scroll-head table thead th{
            font-size: 10px !important;
        }

        .Fdis_btn{
                box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.08),
                inset 10px 10px 9px #d1d5db,
                inset -10px -10px 9px #ffffff;
        }

    </style>

    <div class="Linear_BG bodyFont overflow-y-auto h-full p-25 pt-10 mb-40">
        <div class="flex flex-col h-full gap-10 pb-25">

            <!-- HEADER -->
            <div class="flex justify-between flex-row-reverse sm:flex-row">


                <a href="{{ route('dynamic-route-list') }}"
                    class=" text-sm rounded-lg sfaShine_Btn h-[30px] px-4 items-center gap-2 inline-flex">
                    <i class="fas fa-truck"></i>
                    Dynamic Load Planning
                </a>

                <div class="flex flex-col sm:flex-row gap-3">
                    <a href="{{ route('adm-sync-logs') }}"
                        class="text-sm rounded-lg sfaShine_Btn h-[30px] px-4 inline-flex items-center gap-2">
                        <i class="fas fa-truck"></i>
                        Admin Sync Logs
                    </a>

                    <button
                        id="sfaRefresh"
                        class="bg-transparent text-sm rounded-xl h-[30px] items-center inline-flex gap-2 sfaShine_Btn px-4 py-2">
                        <i class="fas fa-refresh"></i>
                        Refresh
                    </button>
                </div>

            </div>

            <!-- CARDS -->
            <div class="grid grid-cols-1 md:grid-cols-2">

                <div id="SoToFdis" data-id="#SoFdisContainer"
                    class="bg-transparent container_trigger border-r border-b hover:bg-[#a991a5] min-h-[130px] cursor-pointer">
                    <div class="flex justify-between h-full p-5">

                        <div class="flex flex-col justify-between">
                            <h1 class="sfaqueuingHeader">Sync SO to FDIS</h1>

                            <div class="">
                                <h1 class="ericPendingVal">105</h1>
                                <h1 class="sfaqueuingSubHeader">Pending Records</h1>
                            </div>
                        </div>

                        <div class="flex flex-col gap-2 justify-between items-end h-full">
                            <img class="w-[60px] h-[60px] object-contain"
                                src="https://cdo.sfa-plus.com/SFA/v2/img/SFAQueuing_SO.svg">

                            <button class="rounded-xl shine-bgBtn w-fit px-4 py-1" onclick="processModal.showModal()">
                                Process
                            </button>
                        </div>


                    </div>
                </div>

                <div data-id="#PaymentFdisTable" id="PaymentToFdis"
                    class="bg-transparent container_trigger hover:bg-[#a991a5] border-b  min-h-[130px] cursor-pointer">
                    <div class="flex justify-between h-full p-5">

                        <div class="flex flex-col justify-between">
                            <h1 class="sfaqueuingHeader">Sync Payment to FDIS</h1>

                            <div class="">
                                <h1 class="ericPendingVal">105</h1>
                                <h1 class="sfaqueuingSubHeader">Pending Records</h1>
                            </div>
                        </div>

                        <div class="flex flex-col justify-between items-end h-full">
                            <img class="w-[60px] h-[60px] object-contain"
                                src="https://cdo.sfa-plus.com/SFA/v2/img/SFAQueuing_Payment.svg">

                            {{-- <button class="rounded-xl shine-bgBtn px-4 py-2">
                                Process
                            </button> --}}
                        </div>


                    </div>
                </div>

                <div id="ReturnToFdis" data-id="#ReturnFdisTable"
                    class="bg-transparent container_trigger hover:bg-[#a991a5] border-r min-h-[130px] cursor-pointer">
                    <div class="flex justify-between h-full p-5">

                        <div class="flex flex-col justify-between">
                            <h1 class="sfaqueuingHeader">Sync Return to FDIS</h1>

                            <div class="">
                                <h1 class="ericPendingVal">105</h1>
                                <h1 class="sfaqueuingSubHeader">Pending Records</h1>
                            </div>
                        </div>

                        <div class="flex flex-col justify-between items-end h-full">
                            <img class="w-[60px] h-[60px] object-contain"
                                src="https://cdo.sfa-plus.com/SFA/v2/img/SFAQueuing_Return.svg">

                            {{-- <button class="rounded-xl shine-bgBtn px-4 py-2">
                                Process
                            </button> --}}
                        </div>


                    </div>
                </div>

                <div id="TransferFdis" data-id="#AutoStockFdisTable"
                    class="bg-transparent container_trigger hover:bg-[#a991a5] min-h-[130px] cursor-pointer">
                    <div class="flex justify-between h-full p-5">

                        <div class="flex flex-col justify-between">
                            <h1 class="sfaqueuingHeader">Sync Auto Stock Transfer to FDIS</h1>

                            <div class="">
                                <h1 class="ericPendingVal">105</h1>
                                <h1 class="sfaqueuingSubHeader">Pending Records</h1>
                            </div>
                        </div>

                        <div class="flex flex-col justify-between items-end h-full">
                            <img class="w-[60px] h-[60px] object-contain"
                                src="https://cdo.sfa-plus.com/SFA/v2/img/SFAQueuing_Transfer.svg">

                            {{-- <button class="rounded-xl shine-bgBtn px-4 py-2">
                                Process
                            </button> --}}
                        </div>


                    </div>
                </div>

            </div>

            <!-- TABLE So To FDIS -->
            <div class="flex h-full pb-20">
                <div id="SoFdisContainer" class="table_container hidden w-full flex flex-col bg-[#a991a5] rounded-2xl">

                    <div class="flex w-full items-center justify-between px-5 py-3">
                        <div class="flex items-center gap-2">
                            <img class="w-[30px] h-[30px]" src="https://cdo.sfa-plus.com/SFA/v2/img/SFAQueuing_SO.svg"
                                alt="Sales Orders to FDIS">
                            <span class="text-[18px] font-bold text-white">
                                Sales Order to FDIS Logs
                            </span>
                        </div>
                        <div class="flex items-center gap-3">
                            <button
                                class="reprocess_btn sfaShine_Btn flex w-fit px-5 h-[30px] hidden items-center justify-center text-white rounded-2xl border">
                                Reprocess SO
                            </button>
                            <div
                                class="h-[30px] text-[11px] sfaShine_Btn w-fit px-5 gap-2 flex items-center justify-center text-white rounded-2xl border ">
                                <x-datepicker class="text-[11px] shine-bgBtn datePicker_header " />
                            </div>

                            <div class="h-[30px]  px-2 text-white flex items-center">
                                <x-exportDataTable class="px-2 text-[11px] font-medium roun sfaShine_Btn" />
                            </div>

                            <div class="text-white h-[30px] flex items-center">
                                <div class="flex items-center border px-2 rounded-2xl w-[280px] sm:w-[550px] md:w-[300px]">
                                    <i class="fa-solid fa-magnifying-glass text-[13px]"></i>
                                    <x-searchbar
                                        class="w-full font-medium"
                                        data-tables="
                                            #SOPendingLogs,
                                            #SOFailedLogs,
                                            #SOSuccessLogs,"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="tabs tabs-lift h-full ">
                        <input type="radio" name="SoFdis" class="tab SfaTab" id="SOPendingLogsTab" class="#a78ca0"
                            aria-label="Pending Logs ()" />
                        <div class="tab-content h-full bg-[#a991a5] text-white border-base-300 ">
                            <div class="w-full flex-1 pb-20 max-h-[calc(100vh_-_250px)]">
                                <x-datatable :defaultClasses="false" id="SOPendingLogs" onclick="SOpending.showModal()" class="bg-[#a991a5] text-white" />
                            </div>
                        </div>

                        <input type="radio" name="SoFdis" class="tab SfaTab failedlogs_Btn" id="SOFailedLogsTab"
                            aria-label="Failed Logs ()" checked="checked" />
                        <div class="tab-content h-full bg-[#a991a5] text-white border-base-300 ">
                            <div class="w-full flex-1 pb-20 max-h-[calc(100vh_-_250px)]">
                                <x-datatable :defaultClasses="false" id="SOFailedLogs" class="bg-[#a991a5] text-white" />
                            </div>
                        </div>

                        <input type="radio" name="SoFdis" class="tab SfaTab" id="SOSuccessLogsTab"
                            aria-label="Success Logs ()" />
                        <div class="tab-content h-full bg-[#a991a5] text-white border-base-300">
                            <div class="w-full flex-1 pb-20 max-h-[calc(100vh_-_250px)]">
                                <x-datatable :defaultClasses="false" id="SOSuccessLogs" class="bg-[#a991a5] text-white" />
                            </div>
                        </div>
                    </div>

                </div>

                <!-- TABLE payment To FDIS-->
                <div id="PaymentFdisTable" class="table_container hidden w-full flex flex-col bg-[#a991a5] rounded-2xl">

                    <div class="flex w-full items-center justify-between px-5 py-3">
                        <div class="flex items-center gap-2">
                            <img class="w-[30px] h-[30px]" src="https://cdo.sfa-plus.com/SFA/v2/img/SFAQueuing_Payment.svg"
                                alt="Payments to FDIS">
                            <span class="text-[18px] font-bold text-white">
                                Payments to FDIS Logs
                            </span>
                        </div>
                        <div class="flex items-center gap-3">
                            <button
                                class="reprocess_btn sfaShine_Btn hidden flex w-fit px-5 h-[30px] items-center justify-center text-white rounded-2xl border">
                                Reprocess Payment
                            </button>
                            <div
                                class="h-[30px] text-[11px] sfaShine_Btn w-fit px-5 gap-2 flex items-center justify-center text-white rounded-2xl border ">
                                <x-datepicker class="text-[11px] shine-bgBtn datePicker_header " />
                            </div>

                            <div class="h-[30px]  px-2 text-white flex items-center">
                                <x-exportDataTable class="px-2 text-[11px] sfaShine_Btn" />
                            </div>

                            <div class="text-white h-[30px] flex items-center">
                                <div class="flex items-center border px-2 rounded-2xl w-[280px] sm:w-[550px] md:w-[300px]">
                                    <i class="fa-solid fa-magnifying-glass text-[13px]"></i>
                                    <x-searchbar class="w-full font-medium " data-tables="
                                            #PaymentPendingLogs,
                                            #PaymentFailedLogs,
                                            #PaymentSuccessLogs," 
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="tabs tabs-lift h-full">
                        <input type="radio" name="PaymentFdis" class="tab SfaTab" id="PaymentPendingLogsTab"
                            aria-label="Pending Logs ()" />
                        <div class="tab-content h-full bg-[#a991a5] text-white border-base-300 ">
                            <div class="w-full flex-1 overflow-auto pb-20 max-h-[calc(100vh_-_250px)]">
                                <x-datatable :defaultClasses="false" id="PaymentPendingLogs" class="bg-[#a991a5] text-white text-white" />
                            </div>
                        </div>

                        <input type="radio" name="PaymentFdis" class="tab SfaTab failedlogs_Btn" id="PaymentFailedLogsTab"
                            aria-label="Failed Logs ()" checked="checked" />
                        <div class="tab-content h-full bg-[#a991a5] text-white border-base-300 ">
                            <div class="w-full flex-1 overflow-auto pb-20 max-h-[calc(100vh_-_250px)]">
                                <x-datatable :defaultClasses="false" id="PaymentFailedLogs" class="bg-[#a991a5] text-white text-white" />
                            </div>
                        </div>

                        <input type="radio" name="PaymentFdis" class="tab SfaTab" id="PaymentSuccessLogsTab"
                            aria-label="Success Logs ()" />
                        <div class="tab-content h-full bg-[#a991a5] text-white border-base-300">
                            <div class="w-full flex-1 overflow-auto pb-20 max-h-[calc(100vh_-_250px)]">
                                <x-datatable :defaultClasses="false" id="PaymentSuccessLogs" class="bg-[#a991a5] text-white text-white" />
                            </div>
                        </div>
                    </div>
                </div>

                <!-- TABLE Return To FDIS-->
                <div id="ReturnFdisTable" class="table_container hidden w-full flex flex-col bg-[#a991a5] rounded-2xl">

                    <div class="flex w-full items-center justify-between px-5 py-3">
                        <div class="flex items-center gap-2">
                            <img class="w-[30px] h-[30px]" src="https://cdo.sfa-plus.com/SFA/v2/img/SFAQueuing_Return.svg"
                                alt="Return to FDIS">
                            <span class="text-[18px] font-bold text-white">
                                Returns to FDIS Logs
                            </span>
                        </div>
                        <div class="flex items-center gap-3">
                            <button
                                class="reprocess_btn sfaShine_Btn flex sfaShine_Btn w-fit px-5 hidden h-[30px] items-center justify-center text-white rounded-2xl border">
                                Reprocess Returns
                            </button>
                            <div
                                class="h-[30px] text-[11px] sfaShine_Btn w-fit px-5 gap-2 flex items-center justify-center text-white rounded-2xl border ">
                                <x-datepicker class="text-[11px] shine-bgBtn datePicker_header " />
                            </div>

                            <div class="h-[30px] px-2 text-white flex items-center">
                                <x-exportDataTable class="px-2 text-[11px] sfaShine_Btn" />
                            </div>

                            <div class="text-white h-[30px] flex items-center">
                                <div class="flex items-center border px-2 rounded-2xl w-[280px] sm:w-[550px] md:w-[300px]">
                                    <i class="fa-solid fa-magnifying-glass text-[13px]"></i>
                                    <x-searchbar class="w-full font-medium " data-tables="
                                            #ReturnPendingLogs,
                                            #ReturnFailedLogs,
                                            #ReturnSuccessLogs,"
                                     />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="tabs tabs-lift h-full">
                        <input type="radio" name="ReturnFdis" class="tab SfaTab" id="ReturnPendingLogsTab"
                            aria-label="Pending Logs ()" />
                        <div class="tab-content h-full bg-[#a991a5] text-white border-base-300 ">
                            <div class="w-full flex-1 overflow-auto pb-20 max-h-[calc(100vh_-_250px)]">
                                <x-datatable :defaultClasses="false" id="ReturnPendingLogs" class="bg-[#a991a5] text-white text-white text-white" />
                            </div>
                        </div>

                        <input type="radio" name="ReturnFdis" class="tab SfaTab failedlogs_Btn" id="ReturnFailedLogsTab"
                            aria-label="Failed Logs ()" checked="checked" />
                        <div class="tab-content h-full bg-[#a991a5] text-white border-base-300 ">
                            <div class="w-full flex-1 overflow-auto pb-20 max-h-[calc(100vh_-_250px)]">
                                <x-datatable :defaultClasses="false" id="ReturnFailedLogs" class="bg-[#a991a5] text-white text-white text-white" />
                            </div>
                        </div>

                        <input type="radio" name="ReturnFdis" class="tab SfaTab" id="ReturnSuccessLogsTab"
                            aria-label="Success Logs ()" />
                        <div class="tab-content h-full bg-[#a991a5] text-white border-base-300">
                            <div class="w-full flex-1 overflow-auto pb-20 max-h-[calc(100vh_-_250px)]">
                                <x-datatable :defaultClasses="false" id="ReturnSuccessLogs" class="bg-[#a991a5] text-white text-white text-white" />
                            </div>
                        </div>
                    </div>

                </div>

                <!-- TABLE Auto Stock Transfer To FDIS-->
                <div id="AutoStockFdisTable" class="table_container hidden w-full flex flex-col bg-[#a991a5] rounded-2xl">

                    <div class="flex w-full items-center justify-between px-5 py-3">
                        <div class="flex items-center gap-2">
                            <img class="w-[30px] h-[30px]" src="https://cdo.sfa-plus.com/SFA/v2/img/SFAQueuing_Transfer.svg"
                                alt="Auto Transfer to FDIS">
                            <span class="text-[18px] font-bold text-white">
                                Auto Transfer to FDIS Logs
                            </span>
                        </div>
                        <div class="flex items-center gap-3">
                            <button
                                class="flex reprocess_btn sfaShine_Btn hidden w-fit px-5 h-[30px] items-center justify-center text-white rounded-2xl border">
                                Reprocess Transfer
                            </button>
                            <div
                                class="h-[30px] text-[11px] sfaShine_Btn w-fit px-5 gap-2 flex items-center justify-center text-white rounded-2xl border ">
                                <x-datepicker class="text-[11px] shine-bgBtn datePicker_header " />
                            </div>

                            <div class="h-[30px] px-2 text-white flex items-center">
                                <x-exportDataTable class="px-2 text-[11px] sfaShine_Btn" />
                            </div>

                            <div class="text-white h-[30px] flex items-center">
                                <div class="flex items-center border px-2 rounded-2xl w-[280px] sm:w-[550px] md:w-[300px]">
                                    <i class="fa-solid fa-magnifying-glass text-[13px]"></i>
                                    <x-searchbar class="w-full font-medium " data-tables="
                                            #AutoStockPendingLogs,
                                            #AutoStockFailedLogs,
                                            #AutoStockSuccessLogs"
                                     />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="tabs tabs-lift h-full">
                        <input type="radio" name="AutoStockFdis" class="tab SfaTab" id="AutoStockPendingLogsTab"
                            aria-label="Pending Logs ()" />
                        <div class="tab-content h-full bg-[#a991a5] text-white border-base-300 ">
                            <div class="w-full flex-1 overflow-auto pb-20 max-h-[calc(100vh_-_250px)]">
                                <x-datatable :defaultClasses="false" id="AutoStockPendingLogs"
                                    class="bg-[#a991a5]  text-white text-white text-white" />
                            </div>
                        </div>

                        <input type="radio" name="AutoStockFdis" class="tab SfaTab failedlogs_Btn"
                            id="AutoStockFailedLogsTab" aria-label="Failed Logs ()" checked="checked" />
                        <div class="tab-content h-full bg-[#a991a5] text-white  border-base-300 ">
                            <div class="w-full flex-1 overflow-auto pb-20 max-h-[calc(100vh_-_250px)]">
                                <x-datatable :defaultClasses="false" id="AutoStockFailedLogs" class="bg-[#a991a5] text-white" />
                            </div>
                        </div>

                        <input type="radio" name="AutoStockFdis" class="tab SfaTab" id="AutoStockSuccessLogsTab"
                            aria-label="Success Logs ()" />
                        <div class="tab-content h-full bg-[#a991a5] text-white border-base-300">
                            <div class="w-full flex-1 overflow-auto pb-20 max-h-[calc(100vh_-_250px)]">
                                <x-datatable :defaultClasses="false" id="AutoStockSuccessLogs" class="bg-[#a991a5] text-white" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>

    <x-sfaQueuingModal id="sfaQueueDetailModal" />

        <dialog id="processModal" class="modal">
            <div class="modal-box p-0 w-[500px] max-w-[1000px]">
                <form method="dialog">
                    <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <h3 class="text-lg font-medium text-[20px] p-5">SO Sync Method</h3>
                <span class="w-full border-t border-gray-300 flex"></span>
                <div class="flex p-10 px-15 gap-5 justify-between">
                    <div
                        id="SpecificTransaction"
                        onclick="processModal.close(); TransactionModal.showModal()"
                        class="border w-[160px] h-[147px]  items-center sheenFilterBtn rounded-[20px] justify-center flex flex-col cursor-pointer hover:bg-gray-100 transition-colors">
                        <i class="fas fa-file text-[48px]"></i>
                        <span class="font-medium text-center w-full px-2 whitespace-normal break-words">Sync Specific Transaction</span>
                    </div>
                    <div
                        onclick="processModal.close(); SalesmanModal.showModal()"
                        id="SyncSalesman"
                        class="border w-[160px] h-[147px] items-center sheenFilterBtn rounded-[20px] justify-center flex flex-col cursor-pointer hover:bg-gray-100 transition-colors">
                        <i class="fas fa-user text-[48px]"></i>
                        <span class="flex font-medium">Sync Per Salesman</span>
                    </div>
                </div>
            </div>
        </dialog>

        <dialog id="TransactionModal" class="modal">
            <div class="modal-box w-11/12 max-w-6xl p-0">
                <!-- Header -->
                <div class="flex items-center justify-between p-5">
                    <span class="text-[20px] font-semibold">Sync Transactions to FDIS</span>
                    <form method="dialog">
                        <button class="btn btn-sm btn-square btn-outline">
                            <i class="fas fa-times"></i>
                        </button>
                    </form>
                </div>
                <span class="w-full border-t border-gray-300 flex"></span>

                <!-- Toolbar -->
                <div class="flex items-center justify-between p-5">
                    <button class="p-1 border rounded-lg text-[12px] Fdis_Btn" onclick="processToFDIS()">
                        Process to FDIS
                    </button>
                    <!-- DataTables' built-in search box will auto-render here if dom option includes 'f' -->
                </div>

                <!-- Table -->
                <div class="px-5">
                    <x-datatable id="TransactionTable" class="w-full"/>
                </div>

                <!-- Footer -->
                <span class="w-full border-t border-gray-300 flex mt-5"></span>
                <div class="flex justify-end p-5">
                    <form method="dialog">
                        <button class="btn btn-outline">Cancel</button>
                    </form>
                </div>
            </div>
        </dialog>
  
        <dialog id="SalesmanModal" class="modal">
    <div class="modal-box p-0 w-[500px]">
        <!-- Header -->
        <div class="flex items-center justify-between px-6 py-4">
            <span class="text-[22px] font-bold">Sync Transactions to FDIS</span>
            <form method="dialog">
                <button class="btn btn-sm btn-circle btn-ghost text-xl">✕</button>
            </form>
        </div>
        <span class="w-full border-t border-gray-200 flex"></span>

        <!-- Salesman selector row -->
        <div class="flex items-center gap-4 px-6 py-6">
            <span class="font-bold whitespace-nowrap">SALESMAN:</span>
            <select id="salesmanSelect" multiple placeholder="Select Salesman" class="w-full border">
                <!-- options populated via JS / Tom Select -->
            </select>
        </div>

        <span class="w-full border-t border-gray-200 flex"></span>

        <!-- Footer buttons -->
        <div class="flex justify-end items-center gap-6 px-6 py-4">
            <form method="dialog">
                <button class="btn btn-ghost font-medium">Cancel</button>
            </form>
            <button class="btn bg-blue-500 hover:bg-blue-600 text-white border-none px-6" onclick="executeSalesmanSync()">
                Execute
            </button>
        </div>
    </div>
        </dialog>

@endsection

<script type="module" src="/app/module/Maintenance/SFA_Queuing/sfaQueuingTable.js"></script>