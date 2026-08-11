@extends('layout.app')
@section('headerTitle', 'SFA Queuing')

@section('content')

    <style>

            /* SFA MAINTENANCE */
    .ericPendingVal{
        font-size: 50px !important;
        font-weight: 800 !important;
        color: var(--accent);
        font-weight: bolder !important; /* This will override the numeric if supported */
    }

    .sfaqueuingHeader{
        font-size: 18px !important;
        font-weight: 600 !important;
        color: var(--header-color);
    }
    
    .sfaqueuingSubHeader{
        font-size: 14px !important;
        font-weight: 300 !important;
        color: var(--header-color);
    }

    /* .sfaqueuingBtn{
        color: var(--header-color) !important;
    } */

    .sfaqueuingLogs{
        color: var(--header-color);
    }
    
    .sfaqueuingLogs:hover{
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
            background-color: #a78ca0; /* violet-600 */
        }

        .container_trigger.active:hover {
            background-color: #a78ca0; /* keep the same color on hover */
        }

        .sfaShine_Btn{
            position: relative;
            overflow: hidden;
            background: transparent;
            /* border: 1px solid var(--header-color); */
            color: var(--header-color);
        }
        
        .sfaShine_Btn:hover{
            background: linear-gradient(to right,
                var(--secondary),
                var(--primary));
            /* border: 1px solid var(--header-color); */
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

        .reprocess_btn{
            font-size: 11px;
            font-weight: 500;
        }

        /* .linearbg{
            background: linear-gradient(to top, var(--primary), transparent);
        } */

        .dataTable-info{
            font-size: 15px !important;
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

                    <button class="bg-transparent text-sm rounded-xl h-[30px] sfaShine_Btn px-4 py-2">
                        <i class="fas fa-refresh"></i>
                        Refresh
                    </button>
                </div>

            </div>

            <!-- CARDS -->
            <div class="grid grid-cols-1 md:grid-cols-2">

                <div id="SoToFdis" data-id="#SoFdisContainer"
                    class="bg-transparent container_trigger border-r border-b hover:bg-violet-600 min-h-[130px] cursor-pointer">
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

                            <button class="rounded-xl shine-bgBtn w-fit px-4 py-1">
                                Process
                            </button>
                        </div>


                    </div>
                </div>

                <div data-id="#PaymentFdisTable" id="PaymentToFdis"
                    class="bg-transparent container_trigger hover:bg-violet-600 border-b  min-h-[130px] cursor-pointer">
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
                    class="bg-transparent container_trigger hover:bg-violet-600 border-r min-h-[130px] cursor-pointer">
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
                    class="bg-transparent container_trigger hover:bg-violet-600 min-h-[130px] cursor-pointer">
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
            <div class="flex h-full pb-40">
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
                            <button class="reprocess_btn sfaShine_Btn flex w-fit px-5 h-[30px] hidden items-center justify-center text-white rounded-2xl border">
                                Reprocess SO
                            </button>
                            <div
                                class="h-[30px] text-[11px] sfaShine_Btn w-fit px-5 flex items-center justify-center text-white rounded-2xl border ">
                                <i class="items-center justify-center w-5 h-5 flex" data-lucide="calendar-days"></i>
                                <x-datepicker class="text-[11px]" displayOnly="true" />
                            </div>

                            <div class="h-[30px] border rounded-2xl sfaShine_Btn px-2 text-white flex items-center">
                                <x-exportDataTable class="px-2 text-[11px] font-medium rounded-lg" />
                            </div>

                            <div class="text-white h-[30px] flex items-center">
                                <div class="flex items-center border px-2 rounded-2xl w-[280px] sm:w-[550px] md:w-[300px]">
                                    <i class="fa-solid fa-magnifying-glass text-[13px]"></i>
                                    <x-searchbar class="w-full font-medium " id="customSearch" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="tabs tabs-lift  ">
                        <input type="radio" name="SoFdis" class="tab SfaTab" id="SOPendingLogsTab"
                            aria-label="Pending Logs ()" />
                        <div class="tab-content h-full bg-base-100 border-base-300 ">
                            <div class="w-full flex-1 pb-5">
                                <x-datatable id="SOPendingLogs" />
                            </div>
                        </div>

                        <input type="radio" name="SoFdis" class="tab SfaTab failedlogs_Btn" id="SOFailedLogsTab" aria-label="Failed Logs ()"
                            checked="checked" />
                        <div class="tab-content h-full bg-base-100 border-base-300 ">
                            <div class="w-full flex-1 pb-5">
                                <x-datatable id="SOFailedLogs" />
                            </div>
                        </div>

                        <input type="radio" name="SoFdis" class="tab SfaTab" id="SOSuccessLogsTab"
                            aria-label="Success Logs ()" />
                        <div class="tab-content h-full bg-base-100 border-base-300">
                            <div class="w-full flex-1 pb-5">
                                <x-datatable id="SOSuccessLogs" />
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
                            <button class="reprocess_btn sfaShine_Btn hidden flex w-fit px-5 h-[30px] items-center justify-center text-white rounded-2xl border">
                                Reprocess Payment
                            </button>
                            <div
                                class="h-[30px] sfaShine_Btn w-fit px-5 flex items-center justify-center text-white rounded-2xl border ">
                                <i class="items-center justify-center w-5 h-5 flex" data-lucide="calendar-days"></i>
                                <x-datepicker class="" displayOnly="true" />
                            </div>

                            <div class="h-[30px] border rounded-2xl sfaShine_Btn px-2 text-white flex items-center">
                                <x-exportDataTable class="px-2 text-[11px]" />
                            </div>

                            <div class="text-white h-[30px] flex items-center">
                                <div class="flex items-center border px-2 rounded-2xl w-[280px] sm:w-[550px] md:w-[300px]">
                                    <i class="fa-solid fa-magnifying-glass text-[13px]"></i>
                                    <x-searchbar class="w-full font-medium " id="customSearch" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="tabs tabs-lift ">
                        <input type="radio" name="PaymentFdis" class="tab SfaTab" id="PaymentPendingLogsTab"
                            aria-label="Pending Logs ()" />
                        <div class="tab-content h-full bg-base-100 border-base-300 ">
                            <div class="w-full flex-1 overflow-auto pb-5">
                                <x-datatable id="PaymentPendingLogs" />
                            </div>
                        </div>

                        <input type="radio" name="PaymentFdis" class="tab SfaTab failedlogs_Btn" id="PaymentFailedLogsTab"
                            aria-label="Failed Logs ()" checked="checked" />
                        <div class="tab-content h-full bg-base-100 border-base-300 ">
                            <div class="w-full flex-1 overflow-auto pb-5">
                                <x-datatable id="PaymentFailedLogs" />
                            </div>
                        </div>

                        <input type="radio" name="PaymentFdis" class="tab SfaTab" id="PaymentSuccessLogsTab"
                            aria-label="Success Logs ()" />
                        <div class="tab-content h-full bg-base-100 border-base-300">
                            <div class="w-full flex-1 overflow-auto pb-5">
                                <x-datatable id="PaymentSuccessLogs" />
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
                            <button class="reprocess_btn sfaShine_Btn flex sfaShine_Btn w-fit px-5 hidden h-[30px] items-center justify-center text-white rounded-2xl border">
                                Reprocess Returns
                            </button>
                            <div
                                class="h-[30px] sfaShine_Btn w-fit px-5 flex items-center justify-center text-white rounded-2xl border ">
                                <i class="items-center justify-center w-5 h-5 flex" data-lucide="calendar-days"></i>
                                <x-datepicker id="return_DatePicker" class="" displayOnly="true" />
                            </div>

                            <div class="h-[30px] border rounded-2xl sfaShine_Btn px-2 text-white flex items-center">
                                <x-exportDataTable class="px-2 text-[11px]"
                                itemClass="border border-gray-300 bg-red-400 rounded-lg"
                                />
                            </div>

                            <div class="text-white h-[30px] flex items-center">
                                <div class="flex items-center border px-2 rounded-2xl w-[280px] sm:w-[550px] md:w-[300px]">
                                    <i class="fa-solid fa-magnifying-glass text-[13px]"></i>
                                    <x-searchbar class="w-full font-medium " id="customSearch" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="tabs tabs-lift ">
                        <input type="radio" name="ReturnFdis" class="tab SfaTab" id="ReturnPendingLogsTab"
                            aria-label="Pending Logs ()" />
                        <div class="tab-content h-full bg-base-100 border-base-300 ">
                            <div class="w-full flex-1 overflow-auto pb-5">
                                <x-datatable id="ReturnPendingLogs" />
                            </div>
                        </div>

                        <input type="radio" name="ReturnFdis" class="tab SfaTab failedlogs_Btn" id="ReturnFailedLogsTab"
                            aria-label="Failed Logs ()" checked="checked" />
                        <div class="tab-content h-full bg-base-100 border-base-300 ">
                            <div class="w-full flex-1 overflow-auto pb-5">
                                <x-datatable id="ReturnFailedLogs" />
                            </div>
                        </div>

                        <input type="radio" name="ReturnFdis" class="tab SfaTab" id="ReturnSuccessLogsTab"
                            aria-label="Success Logs ()" />
                        <div class="tab-content h-full bg-base-100 border-base-300">
                            <div class="w-full flex-1 overflow-auto pb-5">
                                <x-datatable id="ReturnSuccessLogs" />
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
                            <button class="flex reprocess_btn sfaShine_Btn hidden w-fit px-5 h-[30px] items-center justify-center text-white rounded-2xl border">
                                Reprocess Transfer
                            </button>
                            <div
                                class="h-[30px] sfaShine_Btn w-fit px-5 flex items-center justify-center text-white rounded-2xl border ">
                                <i class="items-center justify-center w-5 h-5 flex" data-lucide="calendar-days"></i>
                                <x-datepicker class="" displayOnly="true" />
                            </div>

                            <div class="h-[30px] border rounded-2xl sfaShine_Btn px-2 text-white flex items-center">
                                <x-exportDataTable class="px-2 text-[11px] " />
                            </div>

                            <div class="text-white h-[30px] flex items-center">
                                <div class="flex items-center border px-2 rounded-2xl w-[280px] sm:w-[550px] md:w-[300px]">
                                    <i class="fa-solid fa-magnifying-glass text-[13px]"></i>
                                    <x-searchbar class="w-full font-medium " id="customSearch" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="tabs tabs-lift ">
                        <input type="radio" name="AutoStockFdis" class="tab SfaTab" id="AutoStockPendingLogsTab"
                            aria-label="Pending Logs ()" />
                        <div class="tab-content h-full bg-base-100 border-base-300 ">
                            <div class="w-full flex-1 overflow-auto pb-5">
                                <x-datatable id="AutoStockPendingLogs" />
                            </div>
                        </div>

                        <input type="radio" name="AutoStockFdis" class="tab SfaTab failedlogs_Btn" id="AutoStockFailedLogsTab"
                            aria-label="Failed Logs ()" checked="checked" />
                        <div class="tab-content h-full bg-base-100 border-base-300 ">
                            <div class="w-full flex-1 overflow-auto pb-5">
                                <x-datatable id="AutoStockFailedLogs" />
                            </div>
                        </div>

                        <input type="radio" name="AutoStockFdis" class="tab SfaTab" id="AutoStockSuccessLogsTab"
                            aria-label="Success Logs ()" />
                        <div class="tab-content h-full bg-base-100 border-base-300">
                            <div class="w-full flex-1 overflow-auto pb-5">
                                <x-datatable id="AutoStockSuccessLogs" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>

@endsection

<script type="module" src="/app/module/Maintenance/SFA_Queuing/sfaQueuingTable.js"></script>