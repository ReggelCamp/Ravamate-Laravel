@extends('layout.app')
@section('headerTitle', 'SFA Queuing')

@section('content')

    <style>
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
    </style>

    <div class="mainBg bodyFont min-h-screen p-25">
        <div class="flex flex-col h-full gap-10">

            <!-- HEADER -->
            <div class="flex justify-between flex-row-reverse sm:flex-row">

                <button class=" text-sm rounded-lg h-12 sfaqueuingBtn px-4">
                    Dynamic Load Planning
                </button>

                <div class="flex flex-col sm:flex-row gap-3">
                    <button class="bg-blue-500 text-sm rounded-xl text-white px-4 py-2">
                        Admin Sync Logs
                    </button>

                    <button class="bg-blue-500 text-sm rounded-xl text-white px-4 py-2">
                        Refresh
                    </button>
                </div>

            </div>

            <!-- CARDS -->
            <div class="grid grid-cols-1 md:grid-cols-2">

                <div id="SoToFdis"
                    data-id="#SoFdisContainer"
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

                <div data-id="#PaymentFdisTable" id="PaymentToFdis" class="bg-transparent container_trigger hover:bg-violet-600 border-b  min-h-[130px] cursor-pointer">
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

                <div id="ReturnToFdis" class="bg-transparent hover:bg-violet-600 border-r min-h-[130px] cursor-pointer">
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

                <div id="TransferFdis" class="bg-transparent hover:bg-violet-600 min-h-[130px] cursor-pointer">
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
            <div id="SoFdisContainer" class="table_container hidden w-full flex flex-col bg-[#a991a5] rounded-2xl">

                <div class="flex w-full items-center justify-between px-5 py-3">
                    <div class="flex items-center gap-2">
                        <img class="w-[30px] h-[30px]" src="https://cdo.sfa-plus.com/SFA/v2/img/SFAQueuing_Return.svg"
                            alt="Returns to FDIS">
                        <span class="text-[18px] font-bold text-white">
                            Returns to FDIS Logs
                        </span>
                    </div>
                    <div class="flex items-center gap-3">
                        <div
                            class="h-[30px] w-fit px-5 flex gap-2 items-center justify-center text-white rounded-2xl border ">
                            <i class="items-center justify-center w-5 h-5 flex" data-lucide="calendar-days"></i>
                            <x-datepicker class="" displayOnly="true" />
                        </div>

                        <div class="h-[30px] text-white flex items-center">
                            <x-exportDataTable class="px-2" />
                        </div>

                        <div class="text-white h-[30px] flex items-center">
                            <div class="flex items-center border px-2 rounded-2xl w-[280px] sm:w-[550px] md:w-[300px]">
                                <i class="fa-solid fa-magnifying-glass text-[13px]"></i>
                                <x-searchbar class="w-full font-medium " id="customSearch" />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="tabs tabs-lift">
                    <input type="radio" name="my_tabs_3" class="tab SfaTab" id="PendingLogsTab"
                        aria-label="Pending Logs ()" />
                    <div class="tab-content bg-base-100 border-base-300 ">
                        <div class="w-full flex-1 overflow-auto pb-5">
                            <x-datatable id="PendingLogs" />
                        </div>
                    </div>

                    <input type="radio" name="my_tabs_3" class="tab SfaTab" id="FailedLogsTab" aria-label="Failed Logs ()"
                        checked="checked" />
                    <div class="tab-content bg-base-100 border-base-300 ">
                        <div class="w-full flex-1 overflow-auto pb-5">
                            <x-datatable id="FailedLogs" />
                        </div>
                    </div>

                    <input type="radio" name="my_tabs_3" class="tab SfaTab" id="SuccessLogsTab"
                        aria-label="Success Logs ()" />
                    <div class="tab-content bg-base-100 border-base-300">
                        <div class="w-full flex-1 overflow-auto pb-5">
                            <x-datatable id="SuccessLogs" />
                        </div>
                    </div>
                </div>

            </div>
            
             <!-- TABLE payment To FDIS-->
            <div id="PaymentFdisTable" class="table_container hidden w-full flex flex-col bg-[#a991a5] rounded-2xl">

                <div class="flex w-full items-center justify-between px-5 py-3">
                    <div class="flex items-center gap-2">
                        <img class="w-[30px] h-[30px]" src="https://cdo.sfa-plus.com/SFA/v2/img/SFAQueuing_Return.svg"
                            alt="Returns to FDIS">
                        <span class="text-[18px] font-bold text-white">
                            Returns to FDIS Logs
                        </span>
                    </div>
                    <div class="flex items-center gap-3">
                        <div
                            class="h-[30px] w-fit px-5 flex gap-2 items-center justify-center text-white rounded-2xl border ">
                            <i class="items-center justify-center w-5 h-5 flex" data-lucide="calendar-days"></i>
                            <x-datepicker class="" displayOnly="true" />
                        </div>

                        <div class="h-[30px] text-white flex items-center">
                            <x-exportDataTable class="px-2" />
                        </div>

                        <div class="text-white h-[30px] flex items-center">
                            <div class="flex items-center border px-2 rounded-2xl w-[280px] sm:w-[550px] md:w-[300px]">
                                <i class="fa-solid fa-magnifying-glass text-[13px]"></i>
                                <x-searchbar class="w-full font-medium " id="customSearch" />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="tabs tabs-lift">
                    <input type="radio" name="my_tabs_3" class="tab SfaTab" id="PendingLogsTab"
                        aria-label="Pending Logs ()" />
                    <div class="tab-content bg-base-100 border-base-300 ">
                        <div class="w-full flex-1 overflow-auto pb-5">
                            <x-datatable id="PendingLogs" />
                        </div>
                    </div>

                    <input type="radio" name="my_tabs_3" class="tab SfaTab" id="FailedLogsTab" aria-label="Failed Logs ()"
                        checked="checked" />
                    <div class="tab-content bg-base-100 border-base-300 ">
                        <div class="w-full flex-1 overflow-auto pb-5">
                            <x-datatable id="FailedLogs" />
                        </div>
                    </div>

                    <input type="radio" name="my_tabs_3" class="tab SfaTab" id="SuccessLogsTab"
                        aria-label="Success Logs ()" />
                    <div class="tab-content bg-base-100 border-base-300">
                        <div class="w-full flex-1 overflow-auto pb-5">
                            <x-datatable id="SuccessLogs" />
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </div>

@endsection