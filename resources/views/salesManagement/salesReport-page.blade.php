@extends('layout.app')
@section('headerTitle', 'SALES REPORT')
@section('content')
@section('title', 'SALES REPORT')

    <style>
        .finance_Icon {
            padding: 1px 7px;
            margin-right: 10px;
            margin-left: 10px;
            font-size: 25px;
            border-radius: 50%;
            box-shadow: 2px 2px 10px gray;
            color: rgb(184, 184, 184);
            border: 1px solid;
        }

        #StockReqModalTable_wrapper  .dataTable-info{
            /* padding-top: 20px !important;
            padding-bottom: 20px !important; */
            padding:20px !important;
        }


    </style>


    <div class="flex w-full h-full pb-20 pt-5 px-3">
        <div class="card w-full h-full flex flex-col">
            <div class="report_title w-full justify-center items-center rounded-t-xl px-5 py-3 flex ">
                <x-report-header-title title="Sales Report" />
                <div class="shine-bgBtn datePicker_header border rounded-xl">
                    <span class="flex  items-center justify-center px-5 gap-[5px]">
                        <x-datepicker id="report_Datepicker" drops="down" class="whitespace-nowrap h-[30px] text-[13px]" />
                        {{-- <i class=" w-[35px] " data-lucide="calendar-days"></i> --}}
                        <i class="fa-solid fa-caret-down text-xs"></i>
                    </span>
                </div>
            </div>

            <div class="flex flex-col gap-3 lg:flex-row sm:items-end pt-5 w-full lg:justify-between px-3 sm:px-5 ">

                {{-- TOTAL SALES --}}
                <div class="card card-border h-[50px] bg-secondary w-full sm:w-auto bodyColor">
                    <div
                        class="border rounded-xl justify-start items-center flex h-full w-full px-3 gap-2 whitespace-nowrap">
                        <span class="mdi mdi-finance finance_Icon"></span>

                        <span>
                            Total Sales:
                        </span>

                        <span>
                            ₱ 0 (₱ 0)
                        </span>
                    </div>
                </div>

                <div class="flex flex-col-reverse text-center gap-3 sm:flex-row">
                    {{-- OTHER REPORTS + EXPORT --}}
                    <div class="flex w-full sm:w-auto items-end gap-3">

                        {{-- OTHER REPORTS --}}
                        <div class="h-[30px] flex shrink-0">
                            <x-dropdown>
                                <x-slot:dropdownName class="h-[30px]">
                                    <span
                                        class="inline-flex sheenFilterBtn h-[30px] items-center border px-3 gap-2 text-[12px]  rounded-2xl whitespace-nowrap">
                                        Other Reports
                                        <i class="fa-solid fa-caret-down"></i>
                                    </span>
                                </x-slot:dropdownName>

                                <ul id="salesReports" class="dropdown_item border w-fit min-w-[150px] px-2 py-1 text-[13px] rounded-lg bg-white whitespace-nowrap">
                                </ul>
                            </x-dropdown>
                        </div>

                        {{-- EXPORT --}}
                        <div class="h-[30px] shrink-0">
                            <x-exportDataTable class="sheenFilterBtn" tableId="#salesReportTable" />
                        </div>

                    </div>

                    {{-- SEARCH --}}
                    <div class="flex w-full sm:w-auto items-end justify-end">
                        <div
                            class="border h-[30px] w-full sm:w-auto max-w-full items-center justify-center flex px-2 rounded-2xl">

                            <i class="fa-solid fa-magnifying-glass shrink-0"></i>

                            <x-searchbar class="w-full sm:w-[250px]" tabindex="#salesReportTable" />

                        </div>
                    </div>
                </div>
            </div>

            <div class=" pb-5 p-5 max-h-[calc(100vh-250px)] ">
                <x-datatable id="salesReportTable" />
            </div>
        </div>
    </div>


    <dialog id="reportModal" class="modal w-screen">
    <div class="modal-box
                w-full
                max-w-none
                h-[calc(100vh-205px)]
                mt-[205px]
                rounded-none
                p-0">
            <div class="w-full report_title
                        flex items-center justify-between
                        px-5 py-3
                        sticky top-0 z-10">

                <button class="btn btn-sm rounded-lg
                               border-2 border-white
                               text-white bg-transparent
                               hover:bg-white/10">
                    PRINT REPORT
                </button>

                <form method="dialog">
                    <button class="btn btn-circle btn-sm
                                   bg-white text-red-600
                                   border-2 border-red-600
                                   hover:bg-red-50">
                        <i class="fa-solid fa-xmark"></i>
                    </button>
                </form>

            </div>

            {{-- Report content --}}
            <div class="p-5 flex flex-col lg:flex-row gap-5 overflow-auto">

                {{-- Sales Report card --}}
                <div class="flex-1 bg-white rounded-2xl overflow-hidden shadow-[2px_2px_10px]">
                    <div class="report_title relative pb-5">
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
                            <div class="bg-white rounded-tl-xl px-5 py-1 -mb-5 text-center">
                                <span class="text-[10px] text-gray-500 block">Status</span>
                                <span class="font-medium text-[12px] flex items-center gap-1 text-black">
                                    {{ $report->status ?? 'VALID' }}
                                    <i class="fa-solid fa-circle-check text-green-500 text-xs"></i>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div class="p-4 flex flex-col gap-3 text-center">
                        <div class="bg-gray-50 rounded-xl py-3 px-4 shadow-[2px_2px_10px]">
                            <span class="text-[14px] text-gray-500 block">Document No.</span>
                            <span class="font-bold text-[16px]">{{ $report->document_no ?? 'FPM_15SO260820-2608203' }}</span>
                        </div>
                        <div class="bg-gray-50 rounded-xl py-3 px-4 shadow-[2px_2px_10px]">
                            <span class="text-[14px] text-gray-500 block">Time Travel (Min.)</span>
                            <span class="font-bold text-[16px]">{{ $report->time_travel ?? 26 }}</span>
                        </div>
                        <div class="bg-gray-50 rounded-xl py-3 px-4 shadow-[2px_2px_10px]">
                            <span class="text-[14px] text-gray-500 block">Geo Difference</span>
                            <span class="font-bold text-[16px]">{{ $report->geo_difference ?? 15065 }}</span>
                        </div>
                        <div class="bg-gray-50 rounded-xl py-3 px-4 shadow-[2px_2px_10px]">
                            <span class="text-[14px] text-gray-500 block">Longitude</span>
                            <span class="font-bold text-[16px]">{{ $report->longitude ?? '—' }}</span>
                        </div>
                        <div class="bg-gray-50 rounded-xl py-3 px-4 shadow-[2px_2px_10px]">
                            <span class="text-[14px] text-gray-500 block">Latitude</span>
                            <span class="font-bold text-[16px]">{{ $report->latitude ?? '—' }}</span>
                        </div>
                        <div class="bg-gray-50 rounded-xl py-3 px-4 shadow-[2px_2px_10px]">
                            <span class="text-[14px] text-gray-500 block">Source</span>
                            <span class="font-bold text-[16px]">{{ $report->source ?? '—' }}</span>
                        </div>
                    </div>
                </div>

                {{-- Sales Details card --}}
                <div class="flex-1 bg-white rounded-2xl overflow-hidden shadow-[2px_2px_10px]">
                    <div class="report_title relative pb-5">
                        <div class="items-center flex flex-col w-full">
                            <div class="absolute inset-0 overflow-hidden opacity-20">
                                <div class="w-24 h-24 rounded-full bg-white absolute -top-5 right-10"></div>
                                <div class="w-16 h-16 rounded-full bg-white absolute top-10 right-0"></div>
                            </div>
                            <h3 class="text-white font-bold text-lg relative">Sales Details</h3>

                            <div class="flex items-center gap-3 mt-4 relative">
                                <div
                                    class="w-16 h-16 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center overflow-hidden shrink-0">
                                    <i class="fa-solid fa-store text-gray-400 text-2xl"></i>
                                </div>
                                <div class="text-white leading-tight">
                                    <span class="text-[10px] opacity-80 block">Customer</span>
                                    <span class="font-bold">{{ $report->customer_name ?? 'ARGEL JOSEPH E. GARCIA' }}</span>
                                    <span class="text-[11px] opacity-80 block">{{ $report->customer_code ?? '42_FPM' }}</span>
                                </div>
                            </div>
                        </div>
                        <div class="flex justify-end ">
                            <div class="bg-white rounded-tl-xl px-4 py-1 -mb-5 text-center">
                                <span class="text-[10px] text-gray-500 block">Reference No.</span>
                                <span class="font-medium text-black text-[12px]">{{ $report->reference_no ?? '3-2608203' }}</span>
                            </div>
                        </div>
                    </div>

                    <div class=" flex flex-col gap-3 pt-5">
                        
                        <div class="px-5">
                            <div class="bg-gray-50 rounded-xl py-3 px-5 shadow-[2px_2px_10px]">
                                <span class="text-[11px] text-gray-500 flex items-center gap-1">
                                    <i class="fa-solid fa-location-dot text-red-600"></i>
                                    Address
                                </span>
                                <span class="font-bold text-sm">{{ $report->address ?? ', ,' }}</span>
                            </div>
                        </div>

                        <div class="flex gap-3 px-5 w-full h-fit">
                           
                            <div class=" text-gray-600 rounded-4xl flex flex-col w-full gap-2 items-center shadow-[2px_2px_10px]">
                                <span class=" block">Delivery Date</span>
                                
                                <div class="flex w-full gap-3 items-center justify-center ">
                                    <div class="flex items-center justify-center border salemanInfoCard w-[50px] h-[50px] rounded-2xl">
                                        <i class="mdi mdi-calendar-month-outline salesDetailsIcon text-4xl"></i>
                                    </div>
                                    <div class="flex flex-col gap-1">
                                        <span class="opacity-70 block text-[9px]">Date</span>
                                        <span class="font-bold text-[12px]">{{ $report->delivery_date ?? '08/20/2026' }}</span>
                                        <span class="opacity-50 block text-[9px]">MM/DD/YYYY</span>
                                    </div>
                                </div>
                                <div class="flex w-full gap-3 items-center justify-center pb-2 ">
                                    <div class="flex items-center justify-center border salemanInfoCard w-[50px] h-[50px] rounded-2xl">
                                        <i class="mdi mdi-clock-time-five-outline salesDetailsIcon text-4xl"></i>
                                    </div>
                                    <div class="flex flex-col gap-1">
                                        <span class="opacity-70 block text-[9px]">Time</span>
                                        <span class="font-bold text-[12px]">{{ $report->delivery_time ?? '10:36:09.843' }}</span>
                                        <span class="opacity-50 block text-[9px]">H/M/S/MS</span>
                                    </div>
                                </div>
                            </div>

                            <div class="flex w-full">
                                <div
                                    class="salemanInfoCard rounded-4xl p-3 flex flex-col items-center justify-center gap-1 w-full shrink-0 shadow-[2px_2px_10px]">
                                    <span class="text-[15px] opacity-80 pb-3">Battery Status</span>
                                    <div class="radial-progress text-green-400 text-sm font-bold border-4 border-white/20"
                                        style="--value:{{ $report->battery ?? 80 }}; --size: 82px;" role="progressbar">
                                        {{ $report->battery ?? 80 }}%
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div class="pl-5 py-0 px-4 rounded-3xl flex w-full h-fit">
                            <div class="bg-gray-50 rounded-4xl w-full px-4 pr-0 flex h-fit items-center justify-between shadow-[2px_2px_10px]">
                                <span class="text-3xl rounded-2xl salemanInfoCard border min-h-[50px] w-fit px-1 flex items-center">
                                    <i class="mx-3 mdi mdi-arrange-send-to-back salesDetailsIcon"></i>
                                </span>
                                <span class="flex items-center justify-center text-[12px] w-full text-gray-500">
                                    Total Range
                                </span>
                                <span class="salemanInfoCard flex font-medium min-h-[50px] min-w-[100px] items-center justify-center  rounded-r-3xl">
                                    {{ $report->total_range ?? 8 }}
                                </span>
                            </div>
                        </div>

                         <div class="pl-5 py-0 px-4 rounded-3xl flex w-full h-fit">
                            <div class="bg-gray-50 rounded-4xl w-full px-4 pr-0 flex h-fit items-center justify-between shadow-[2px_2px_10px]">
                                <span class="text-3xl rounded-2xl salemanInfoCard border min-h-[50px] w-fit px-1 flex items-center">
                                    <i class="mx-3 mdi mdi-timer-sand-complete salesDetailsIcon"></i>
                                </span>
                                <span class="flex items-center justify-center text-[12px] w-full text-gray-500">
                                    Time Spent (Min.)
                                </span>
                                <span class="salemanInfoCard text-[12px] flex font-medium whitespace-nowrap min-w-[100px] min-h-[50px] items-center justify-center  rounded-r-3xl">
                                    {{ $report->time_range ?? "7min 34sec" }}
                                </span>
                            </div>
                        </div>

                        <div class="px-5">
                            <div class="bg-gray-50 rounded-xl py-2 px-4 flex flex-col items-center border justify-between shadow-[2px_2px_10px]">
                                <span>
                                    Remarks
                                </span>
                                <span>
                                    Account order outside day of coverage15.07km away
                                </span>
                            </div>
                        </div>

                        <div class="">
                            <div class="report_title rounded-b-xl py-5 px-4 flex items-center text-white justify-between shadow-[2px_2px_10px]">
                            <div class="flex gap-2">
                                    <i class="mdi mdi-sigma"></i>
                                    <span>
                                        Total Amount
                                    </span>
                            </div>
                            <div>
                                    <span class="font-bold">
                                        ₱22,109.65
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {{-- Item Code table --}}
                <div class="flex-[1.4]  bg-white rounded-2xl overflow-hidden shadow-sm h-fit shadow-[2px_2px_10px]">
                    <div class="report_title relative p-5 py-9 text-center">
                        <div class="absolute inset-0 overflow-hidden opacity-20">
                            <div class="w-24 h-24 rounded-full bg-white absolute -top-5 left-10"></div>
                            <div class="w-16 h-16 rounded-full bg-white absolute top-8 right-5"></div>
                        </div>
                        <h3 class="text-white font-bold text-xl relative">ITEM CODE</h3>
                        <div class="relative mt-2 text-white">
                            <span class="text-[11px] opacity-80 block">Date</span>
                            <span class="font-bold">{{ $report->date ?? 'August 20, 2026' }}</span>
                        </div>
                    </div>

                    <div class="overflow-x-auto border w-full">
                        <x-datatable id="StockReqModalTable"/>
                    </div>
                    <div class="report_title rounded-b-xl py-5 px-4 flex items-center text-white justify-between shadow-[2px_2px_10px]">
                        <span > Payment Type: TERMS</span>
                    </div>
                </div>

            </div>
        </div>
    </dialog>

    <dialog id="sales_summary" class="modal">
    <div class="modal-box p-0">
        <form method="dialog">
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 p-5">✕</button>
        </form>
        <h3 class="text-lg font-bold border-b p-5">DAILY SALES SUMMARY(DSS)</h3>
        <div class="w-full p-5 flex gap-20">
            <span >Date:</span>
            <x-datepicker label="Pick Date" singleDate="true"/>
        </div>
        <div class="flex w-full gap-5 p-5 border-t justify-end">
            <a href="/dailysalessum" class="btn btn-primary">
                View
            </a>
            <button class=" btn bg-gray-300 text-white">Close</button>
        </div>
    </div>
    </dialog>

@endsection

<script type="module" src="/app/module/Sale_Management/salesReport.js"></script>
