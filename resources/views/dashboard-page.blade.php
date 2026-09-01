@extends('layout.app')
@section('content')
@section('showLogo', false)

    <style>
        #fitScreenInfo .dataTable-info {
            padding-top: 0 !important;
            font-size: 13px !important;
        }

        #mapContainer:fullscreen {
            width: 100vw !important;
            height: 100vh !important;
            min-height: 100vh !important;
        }

        #dashboardDataTable_wrapper .dt-scroll-body {
            height: 100px !important;
        }

        @media (min-width: 640px) {
            #dashboardDataTable_wrapper .dt-scroll-body {
                height: 250px !important;
            }
        }

        @media (min-width: 1024px) {
            #dashboardDataTable_wrapper .dt-scroll-body {
                height: 400px !important;
            }
        }

        @media (min-width: 1920px) {
            #dashboardDataTable_wrapper .dt-scroll-body {
                height: 700px !important;
            }
        }

        .dashboard-datatable .dt-scroll-head,
        .dashboard-datatable .dt-scroll-headInner,
        .dashboard-datatable .dt-scroll-head table {
            overflow: hidden;
            border-radius: 1rem 1rem 0 0;
        }

        .dashboard-datatable .dt-scroll-head th:first-child {
            border-top-left-radius: 1rem;
        }

        .dashboard-datatable .dt-scroll-head th:last-child {
            border-top-right-radius: 1rem;
        }

        #Flip_Container {
            position: relative;
            transform-style: preserve-3d;
            transition: transform 0.6s ease;
            width: 100%;
            min-height: 600px;
            /* tall enough to fit your taller face (MTD, 6 cards) */
        }

        .flip-face {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            backface-visibility: hidden;
            -webkit-backface-visibility: hidden;

        }

        .flip-back {
            transform: rotateY(180deg);
            visibility: hidden;
            /* back face hidden by default */
        }

        #Flip_Container.flip_div {
            transform: rotateY(180deg);
        }

        /* When flipped: hide front, show back */
        #Flip_Container.flip_div #Current_Day_Face {
            visibility: hidden;
        }

        #Flip_Container.flip_div #Mtd_Overview_Face {
            visibility: visible;
        }

        #sfaQueuingModalTable_wrapper .dt-scroll-head {
            background-color: transparent;
        }

        #sfaQueuingModalTable_wrapper .dt-scroll-head table thead th {
            color: black !important;
        }

        #sfaQueuingModalTable_wrapper .dataTable-info {
            font-size: 10px;
        }

        #sfaQueuingModalTable_wrapper .dt-scroll-body {
            max-height: 500px;
        }

        #infoWindowTableContent_info {
            font-size: 12px;
        }

        #infoWindowTableContent_wrapper .dataTable-info {
            padding-top: 0 !important;
        }

        #infoWindowTableContent_wrapper .dt-scroll-head table thead th {
            font-size: 9px !important;
        }

        #infoWindowTableContent_wrapper .dt-scroll-head {
            width: 100% !important;
        }



        /* .daterangepicker td.disabled {
        visibility: visible !important;
        opacity: 0.4;
        pointer-events: none;
    } */
    </style>

    <div class="w-full h-full flex flex-col bg-transparent pb-10 overflow-auto">

        <div class="w-full h-full flex flex-col lg:flex-row">
            {{-- Left Side --}}
            <div id="dashboardSidePanel" class="order-2 lg:order-1 lg:w-[400px]">

                {{-- Salesman Info --}}
                <div id="Salesman_Container"
                    class="hidden overflow-auto w-full h-full flex flex-col p-3 gap-2 bg-transparent rounded-2xl">

                    <div class="flex gap-10 w-full">
                        <div>
                            <button id="Display_Carousel"
                                class="w-fit whitespace-nowrap h-[17px] rounded-2xl px-3 border gap-1 flex items-center text-[10px] text-white border-white/60">
                                <i class="fa-solid fa-arrow-left"></i>
                                Display Carousel
                            </button>
                        </div>
                        <div class="flex w-full gap-5">
                            <button
                                class="w-fit h-[17px] rounded-2xl px-5 border gap-2 flex items-center text-[10px] text-white border-white/60">
                                <i class="mdi mdi-refresh"></i>
                                Refresh
                            </button>
                            <div class="dropdown gap-2">
                                <div tabindex="0" role="button"
                                    class="w-fit whitespace-nowrap h-[17px] rounded-2xl px-5 border gap-2 flex items-center text-[10px] text-white border-white/60">
                                    Other Actions
                                </div>

                                <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-50 w-52 p-2 shadow">
                                    <li><a>Refresh</a></li>
                                    <li><a>View Details</a></li>
                                    <li><a>Delete</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {{-- Header: salesman info --}}
                    <div class="flex gap-3 w-full">
                        <div class="flex rounded-full w-[64px] h-[64px] bg-amber-200 bg-cover bg-center shrink-0"
                            style="background-image: url('{{ $salesman->photo_url ?? '' }}')"></div>

                        <div class="flex w-full flex-col justify-center leading-4 text-white">
                            <div class="flex justify-between items-start">
                                <div>
                                    <span
                                        class="font-bold text-sm block">{{ $salesman->name ?? 'OB07_NICOLAS RAMBOYONG' }}</span>
                                    <span
                                        class="text-[10px] font-semibold tracking-wide opacity-90">{{ $salesman->type ?? 'BOOKING' }}</span>
                                </div>
                                <span
                                    class="badge badge-sm bg-white/20 border-white/40 text-white text-[10px] gap-1 rounded-full px-3">
                                    <i class="fa-regular fa-face-frown"></i>
                                    {{ $salesman->status ?? 'LATE' }}
                                </span>
                            </div>

                            <div class="flex text-[11px] w-full gap-10 mt-1">
                                <span>
                                    <i class="fa-solid fa-mobile-screen-button mr-1"></i>
                                    {{ $salesman->contact ?? '09296225456' }}
                                </span>
                                <span>
                                    <i class="fa-solid fa-phone mr-1"></i>
                                    {{ $salesman->time_in ?? '07:00:00' }}
                                </span>
                            </div>

                            <div class="flex text-[11px] w-full gap-10">
                                <span>
                                    <i class="fa-solid fa-calendar-days mr-1"></i>
                                    {{ $salesman->date ?? 'Aug 19, 2026' }}
                                </span>
                                <span class="bg-white/15 rounded px-1">
                                    <i class="fa-regular fa-clock mr-1"></i>
                                    {{ $salesman->current_time ?? '13:00:18' }}
                                </span>
                            </div>
                        </div>
                    </div>

                    {{-- Store card --}}
                    <div class="bg-white rounded-2xl p-2 flex flex-col gap-1 text-[11px]">
                        <div class="flex items-center gap-2">
                            <div class="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                                <i class="fa-solid fa-store text-gray-500 text-xs"></i>
                            </div>
                            <div class="flex flex-col leading-3">
                                <span
                                    class="text-blue-700 font-bold text-[12px]">{{ $store->name ?? 'MALDITAS PRIDE' }}</span>
                                <span class="text-gray-400 text-[10px]">,,</span>
                            </div>
                        </div>

                        <div class="flex justify-between items-center">
                            <div class="flex gap-2 text-gray-600">
                                <span>
                                    <i class="fa-solid fa-calendar-days mr-1"></i>
                                    {{ $store->visit_date ?? 'Aug 19, 2026' }}
                                </span>
                                <span>
                                    <i class="fa-solid fa-location-dot mr-1"></i>
                                    {{ $store->distance ?? '0 km in 0 min' }}
                                </span>
                            </div>

                            <button
                                class="btn btn-xs bg-red-600 hover:bg-red-700 text-white rounded-full border-none gap-1 relative">
                                Locate Store
                                <span
                                    class="absolute -right-2 -top-2 bg-white text-red-600 rounded-full w-4 h-4 flex items-center justify-center text-[9px] font-bold border border-red-600">1</span>
                            </button>
                        </div>

                        <div class="flex items-center w-full gap-8 text-gray-600 text-[9px] whitespace-nowrap">
                            <span>
                                <i class="fa-regular fa-clock mr-1"></i>
                                {{ $store->time ?? '13:00:18' }}
                            </span>
                            <span class="text-green-600 text-[9px]">
                                <i class="fa-solid fa-bolt mr-1"></i>
                                {{ $store->battery ?? '70' }}% battery usage
                            </span>

                            <div class="flex justify-between items-center">
                                <div class="flex gap-1 ">
                                    <button
                                        class="btn btn-xs bg-red-600 text-[8px] hover:bg-red-700 text-white rounded-full border-none text-[9px] px-3">
                                        &lt; Prev Store
                                    </button>
                                    <button
                                        class="btn btn-xs bg-red-600 text-[8px] hover:bg-red-700 text-white rounded-full border-none text-[9px] px-3">
                                        Next Store &gt;
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {{-- Sales row --}}

                    <div class="w-full max-w-4xl mx-auto">
                        <div
                            class="collapse collapse-arrow bg-white border rounded-full border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
                            <input type="checkbox" class="peer" id="salesCollapse" />
                            <div class="collapse-title flex rounded-full items-center gap-2 p-2 min-h-[30px] peer-checked:bg-gray-50 cursor-pointer"
                                onclick="document.getElementById('salesCollapse').click()">
                                <div
                                    class="w-8 h-8 rounded-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center text-white flex-shrink-0 shadow-md">
                                    <i class="fa-solid fa-peso-sign text-sm"></i>
                                </div>
                                <div class="flex flex-col">
                                    <span class="font-bold text-base">
                                        ₱ {{ number_format($sales->amount ?? 252.50, 2) }}
                                        <span class="font-normal text-sm text-gray-500">
                                            ({{ $sales->sku_count ?? 1 }} SKU)
                                        </span>
                                    </span>
                                    <span class="text-gray-400 text-xs">Sales</span>
                                </div>
                            </div>
                            <div class="collapse-content px-4">
                                <div class="border-t border-gray-200 pt-3 h-fit ">
                                    <x-datatable id="sfaQueuingModalTable" class="" />
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="flex w-full whitespace-nowrap  ">
                        <button id="Current_Day_Btn"
                            class="flex rounded-s-2xl gap-2 text-center items-center justify-center w-full h-[30px] font-medium text-white text-[11px] bg-red-500">
                            <i class="mdi mdi-flip-horizontal"></i>
                            Current Day Overview
                        </button>

                        <button id="Mtd_Overview_Btn"
                            class="hidden flex rounded-s-2xl text-center items-center justify-center w-full h-[30px] font-medium text-white text-[11px] bg-red-500">
                            MTD Overview
                        </button>
                        <span class="flex rounded-e-2xl items-center text-center justify-center bg-white w-full h-[30px] font-medium text-[11px]">
                            REMAINING SELLING DAYS 9
                        </span>
                    </div>

                    <div id="Flip_Container" class="relative w-full" style="perspective: 1000px;">

                        {{-- Stat cards --}}
                        <div id="Current_Day_Face" class="flip-face flex flex-col gap-2 w-full">

                            {{-- Sales for the Day --}}
                            <div
                                class="bg-white rounded-2xl p-2 flex items-center gap-3 text-[11px] w-full justify-between">
                                <div class="w-full gap-3 flex">
                                    {{-- left side --}}
                                    <div
                                        class="flex flex-col items-center justify-center w-12 h-12 rounded-lg bg-gray-100 shrink-0">
                                        <i class="fa-solid fa-calendar-week text-gray-500 text-xs"></i>
                                        <span class="text-[9px] font-semibold text-gray-500">Week No.</span>
                                        <span class="text-xs font-bold">{{ $stats->week_no ?? 4 }}</span>
                                    </div>
                                    <div class="flex flex-col leading-5 w-full">
                                        <span class="text-gray-500">Sales for the Day</span>
                                        <span class="font-bold text-sm">{{ $stats->sales_pct ?? 0 }}%</span>
                                        <span class="text-gray-400 text-[10px]">Target
                                            {{ $stats->sales_target ?? 0 }}</span>
                                    </div>
                                </div>
                                {{-- right side --}}
                                <div class="flex flex-col leading-5 border-l  w-full text-gray-600">
                                    <div class="flex justify-between border-b">
                                        <span class="pl-2">Sales</span>
                                        <span class="font-semibold ">₱{{ number_format($stats->sales ?? 165143.86, 2) }}
                                        </span>
                                    </div>
                                    <div class="flex justify-between">
                                        <span class="pl-2">Balance</span>
                                        <span
                                            class="text-red-600 font-semibold">₱{{ number_format($stats->balance ?? 0, 2) }}</span>
                                    </div>
                                </div>
                            </div>

                            {{-- Average Range --}}
                            <div
                                class="bg-white rounded-2xl p-2 flex items-center gap-3 text-[11px] w-full justify-between">
                                <div class="w-full gap-3 flex">
                                    <div class="flex items-center justify-center w-12 h-12 rounded-lg bg-gray-100 shrink-0">
                                        <i class="fa-solid fa-chart-line text-blue-500 text-lg"></i>
                                    </div>
                                    <div class="flex flex-col leading-4 w-full">
                                        <span class="text-gray-500">Average Range</span>
                                        <span class="font-bold text-sm">{{ $stats->avg_pct ?? 0 }}%</span>
                                    </div>
                                </div>
                                <div class="flex flex-col leading-5 border-l  w-full text-gray-600">
                                    <div class="flex justify-between border-b">
                                        <span class="pl-2">Item (No. of SKU)</span>
                                        <span class="font-semibold">{{ $stats->item_count ?? 10 }}</span>
                                    </div>
                                    <div class="flex justify-between border-b">
                                        <span class="pl-2">Value (₱)</span>
                                        <span
                                            class="font-semibold">₱{{ number_format($stats->value ?? 20642.98, 2) }}</span>
                                    </div>
                                    <div class="flex justify-between">
                                        <div class="flex pl-2 whitespace-nowrap gap-1">
                                            <span>Time Spent</span>
                                            <span class="text-[8px]">(Minutes)</span>
                                        </div>
                                        <span class="font-semibold">{{ $stats->time_spent ?? 2.47 }}</span>
                                    </div>
                                </div>
                            </div>

                            {{-- Productivity --}}
                            <div
                                class="bg-white rounded-2xl p-2 flex items-center gap-3 text-[11px] w-full justify-between">
                                <div class="w-full gap-3 flex">
                                    <div
                                        class="flex items-center justify-center w-12 h-12 rounded-lg bg-gray-100 shrink-0 relative">
                                        <i class="fa-solid fa-warehouse text-gray-600 text-lg"></i>
                                        <i
                                            class="fa-solid fa-circle-check text-blue-500 text-[10px] absolute top-0 right-0"></i>
                                    </div>
                                    <div class="flex flex-col leading-4 w-full">
                                        <span class="text-gray-500">Productivity</span>
                                        <span class="font-bold text-sm">{{ $stats->productivity_pct ?? 0 }}%</span>
                                        <span class="text-gray-400 text-[10px]">Target MCP
                                            {{ $stats->productivity_target ?? 6 }}</span>
                                    </div>
                                </div>
                                <div class="flex flex-col leading-5 border-l  w-full text-gray-600">
                                    <div class="flex justify-between border-b">
                                        <span class="pl-2">Visited</span>
                                        <span class="font-semibold">{{ $stats->visited ?? 0 }}</span>
                                    </div>
                                    <div class="flex justify-between">
                                        <span class="pl-2">Balance</span>
                                        <span
                                            class="text-red-600 font-semibold">{{ $stats->productivity_balance ?? 6 }}</span>
                                    </div>
                                </div>
                            </div>

                            {{-- Geo Call Rate --}}
                            <div
                                class="bg-white rounded-2xl p-2 flex items-center gap-3 text-[11px] w-full justify-between">
                                <div class="w-full gap-3 flex">
                                    <div class="flex items-center justify-center w-12 h-12 rounded-lg bg-gray-100 shrink-0">
                                        <i class="fa-solid fa-earth-americas text-gray-500 text-lg"></i>
                                    </div>
                                    <div class="flex flex-col leading-4 w-full">
                                        <span class="text-gray-500">Geo Call Rate</span>
                                        <span class="font-bold text-sm">{{ $stats->geo_pct ?? 0 }}%</span>
                                        <span class="text-gray-400 text-[10px]">Target Calls
                                            {{ $stats->geo_target ?? 6 }}</span>
                                    </div>
                                </div>
                                <div class="flex flex-col leading-5 border-l w-full text-gray-600">
                                    <div class="flex justify-between border-b">
                                        <span class="pl-2">Onsite</span>
                                        <span class="font-semibold">{{ $stats->onsite ?? 0 }}</span>
                                    </div>
                                    <div class="flex justify-between border-b">
                                        <span class="pl-2">Offsite</span>
                                        <span class="font-semibold">{{ $stats->offsite ?? 0 }}</span>
                                    </div>
                                    <div class="flex justify-between">
                                        <span class="pl-2">Unproductive</span>
                                        <span class="text-red-600 font-semibold">{{ $stats->unproductive ?? 6 }}</span>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {{-- MTD Overview stat cards --}}
                        <div id="Mtd_Overview_Face" class="flip-face flip-back flex flex-col gap-2 w-full">

                            {{-- MTD Achievement --}}
                            <div
                                class="bg-white rounded-2xl p-2 flex items-center gap-3 text-[11px] w-full justify-between">
                                <div class="w-full gap-3 flex">
                                    <div
                                        class="flex flex-col items-center justify-center w-12 h-12 rounded-lg bg-gray-100 shrink-0">
                                        <i class="fa-solid fa-calendar-week text-gray-500 text-xs"></i>
                                        <span class="text-[9px] font-semibold text-gray-500">Week No.</span>
                                        <span class="text-xs font-bold text-red-600">{{ $mtd->week_no ?? 4 }}</span>
                                    </div>
                                    <div class="flex flex-col leading-4 w-full">
                                        <span class="text-gray-500">MTD Achievement</span>
                                        <span class="font-bold text-sm">{{ $mtd->achievement_pct ?? 0 }}%</span>
                                        <span class="text-gray-400 text-[10px]">Target
                                            ₱{{ $mtd->achievement_target ?? 0 }}</span>
                                    </div>
                                </div>
                                <div class="flex flex-col leading-5 border-l w-full text-gray-600">
                                    <div class="flex justify-between border-b">
                                        <span class="pl-2">Sales</span>
                                        <span class="font-semibold">₱
                                            {{ number_format($mtd->sales ?? 95218225.80, 2) }}</span>
                                    </div>
                                    <div class="flex justify-between">
                                        <span class="pl-2">Balance</span>
                                        <span class="text-red-600 font-semibold">₱
                                            {{ number_format($mtd->balance ?? 0, 2) }}</span>
                                    </div>
                                </div>
                            </div>

                            {{-- Buying Accounts --}}
                            <div
                                class="bg-white rounded-2xl p-2 flex items-center gap-3 text-[11px] w-full justify-between">
                                <div class="w-full gap-3 flex">
                                    <div class="flex items-center justify-center w-12 h-12 rounded-lg bg-gray-100 shrink-0">
                                        <i class="fa-solid fa-store text-blue-500 text-lg"></i>
                                    </div>
                                    <div class="flex flex-col leading-4 w-full">
                                        <span class="text-gray-500">Buying Accounts</span>
                                        <span class="font-bold text-sm">{{ $mtd->buying_pct ?? 0 }}%</span>
                                        <span class="text-gray-400 text-[10px]">Target Accounts
                                            {{ $mtd->buying_target ?? 24 }}</span>
                                    </div>
                                </div>
                                <div class="flex flex-col leading-5 border-l w-full text-gray-600">
                                    <div class="flex justify-between border-b">
                                        <span class="pl-2">Active Buying</span>
                                        <span class="font-semibold">{{ $mtd->active_buying ?? 0 }}</span>
                                    </div>
                                    <div class="flex justify-between">
                                        <span class="pl-2">Unique Buying</span>
                                        <span class="font-semibold">{{ $mtd->unique_buying ?? 0 }}</span>
                                    </div>
                                </div>
                            </div>

                            {{-- MCP Productivity --}}
                            <div
                                class="bg-white rounded-2xl p-2 flex items-center gap-3 text-[11px] w-full justify-between">
                                <div class="w-full gap-3 flex">
                                    <div
                                        class="flex items-center justify-center w-12 h-12 rounded-lg bg-gray-100 shrink-0 relative">
                                        <i class="fa-solid fa-warehouse text-gray-600 text-lg"></i>
                                        <i
                                            class="fa-solid fa-circle-check text-blue-500 text-[10px] absolute top-0 right-0"></i>
                                    </div>
                                    <div class="flex flex-col leading-4 w-full">
                                        <span class="text-gray-500">MCP Productivity</span>
                                        <span class="font-bold text-sm flex items-center gap-1">
                                            {{ $mtd->mcp_pct ?? 0 }}%
                                            @if(($mtd->mcp_trend ?? 'down') === 'down')
                                                <i class="fa-solid fa-arrow-down text-red-500 text-[10px]"></i>
                                            @else
                                                <i class="fa-solid fa-arrow-up text-green-500 text-[10px]"></i>
                                            @endif
                                        </span>
                                        <span class="text-gray-400 text-[10px]">Total MCP
                                            {{ $mtd->mcp_total ?? 208 }}</span>
                                    </div>
                                </div>
                                <div class="flex flex-col leading-5 border-l  w-full text-gray-600">
                                    <div class="flex justify-between border-b">
                                        <span class="pl-2">Productive Call</span>
                                        <span class="font-semibold">{{ $mtd->productive_call ?? 0 }}</span>
                                    </div>
                                    <div class="flex justify-between">
                                        <span class="pl-2">Balance</span>
                                        <span class="text-red-600 font-semibold">{{ $mtd->mcp_balance ?? 208 }}</span>
                                    </div>
                                </div>
                            </div>

                            {{-- Geo Call Rate --}}
                            <div
                                class="bg-white rounded-2xl p-2 flex items-center gap-3 text-[11px] w-full justify-between">
                                <div class="w-full gap-3 flex">
                                    <div class="flex items-center justify-center w-12 h-12 rounded-lg bg-gray-100 shrink-0">
                                        <i class="fa-solid fa-earth-americas text-gray-500 text-lg"></i>
                                    </div>
                                    <div class="flex flex-col leading-4 w-full">
                                        <span class="text-gray-500">Geo Call Rate</span>
                                        <span class="font-bold text-sm flex items-center gap-1">
                                            {{ $mtd->geo_pct ?? 0 }}%
                                            @if(($mtd->geo_trend ?? 'down') === 'down')
                                                <i class="fa-solid fa-arrow-down text-red-500 text-[10px]"></i>
                                            @else
                                                <i class="fa-solid fa-arrow-up text-green-500 text-[10px]"></i>
                                            @endif
                                        </span>
                                        <span class="text-gray-400 text-[10px]">Target Calls
                                            {{ $mtd->geo_target ?? 208 }}</span>
                                    </div>
                                </div>
                                <div class="flex flex-col leading-5 border-l  w-full text-gray-600">
                                    <div class="flex justify-between border-b">
                                        <span class="pl-2">Onsite</span>
                                        <span class="font-semibold">{{ $mtd->onsite ?? 1 }}</span>
                                    </div>
                                    <div class="flex justify-between border-b">
                                        <span class="pl-2">Offsite</span>
                                        <span class="font-semibold">{{ $mtd->offsite ?? 118 }}</span>
                                    </div>
                                    <div class="flex justify-between">
                                        <span class="pl-2">Unproductive</span>
                                        <span class="text-red-600 font-semibold">{{ $mtd->unproductive ?? 11 }}</span>
                                    </div>
                                </div>
                            </div>

                            {{-- Average Range --}}
                            <div
                                class="bg-white rounded-2xl p-2 flex items-center gap-3 text-[11px] w-full justify-between">
                                <div class="w-full gap-3 flex">
                                    <div class="flex items-center justify-center w-12 h-12 rounded-lg bg-gray-100 shrink-0">
                                        <i class="fa-solid fa-chart-line text-blue-500 text-lg"></i>
                                    </div>
                                    <div class="flex flex-col leading-4 w-full">
                                        <span class="text-gray-500">Average Range</span>
                                    </div>
                                </div>
                                <div class="flex flex-col leading-5 border-l  w-full text-gray-600">
                                    <div class="flex justify-between border-b">
                                        <span class="pl-2">Item</span>
                                        <span class="font-semibold">{{ $mtd->item_count ?? 13 }}</span>
                                    </div>
                                    <div class="flex justify-between border-b">
                                        <span class="pl-2">Value</span>
                                        <span class="font-semibold">₱{{ number_format($mtd->value ?? 44207.87, 2) }}</span>
                                    </div>
                                    <div class="flex justify-between">
                                        <span class="pl-2">Time Spent</span>
                                        <span class="font-semibold">{{ $mtd->time_spent ?? 5.89 }}</span>
                                    </div>
                                </div>
                            </div>

                            {{-- eB2B KPIs --}}
                            <div
                                class="bg-white rounded-2xl p-2 flex items-center gap-3 text-[11px] w-full justify-between">
                                <div class="w-full gap-3 flex">
                                    <div
                                        class="flex flex-col items-center justify-center w-12 h-12 rounded-lg bg-gray-100 shrink-0 relative">
                                        <i class="fa-solid fa-shop text-gray-500 text-sm"></i>
                                        <i class="fa-solid fa-right-left text-blue-500 text-[10px] mt-0.5"></i>
                                    </div>

                                    <div class="flex flex-col text-[10px] leading-4 shrink-0">
                                        <span class="text-gray-500">eB2B KPIs</span>
                                        <span class="font-bold whitespace-nowrap">Active MCP
                                            {{ $mtd->eb2b_active_mcp ?? 208 }}</span>
                                    </div>
                                </div>

                                <div class="flex flex-col leading-5 border-l ml-[30px] w-full h-fit text-gray-600">

                                    <div class="flex gap-2 ">
                                        <div class="flex flex-col items-center justify-center gap-1 flex-1 leading-3.5">
                                            <span
                                                class="font-bold text-gray-700">₱{{ number_format($mtd->eb2b_ravamate ?? 208, 2) }}</span>
                                            <span class="text-[9px] whitespace-nowrap">CDO Sphere</span>
                                        </div>
                                        <div
                                            class="flex border-l pl-2 flex-col items-center justify-center gap-1 flex-1 leading-3.5">
                                            <span class="font-bold text-gray-700">---</span>
                                            <span class="text-[9px]">eB2B Sales</span>
                                        </div>
                                    </div>

                                    <div class="flex gap-2 ">
                                        <div class="flex flex-col items-center justify-center flex-1 pl-2 leading-3.5">
                                            <span class="font-bold text-gray-700">---</span>
                                            <span class="text-[9px]">Registered</span>
                                        </div>
                                        <div
                                            class="flex border-l pl-2 flex-col items-center justify-center gap-1 flex-1 leading-3.5">
                                            <span class="font-bold text-gray-700">---</span>
                                            <span class="text-[9px]">Productive</span>
                                        </div>
                                        <div
                                            class="flex border-l whitespace-nowrap pl-2 flex-col items-center justify-center gap-1 flex-1 leading-3.5">
                                            <span class="font-bold text-gray-700">---</span>
                                            <span class="text-[9px]">Hybrid Freq</span>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>

                </div>

                {{-- Carousel Container --}}
                <div id="Carousel_Container"
                    class=" order-last DarkMode lg:order-first flex flex-col w-full lg:w-[400px] h-auto py-8 sm:py-0 sm:h-screen justify-center gap-5 lg:gap-20 items-center lg:sticky lg:top-0 lg:self-start">
                    {{-- Logo --}}
                    <div class="flex w-full justify-center items-center">
                        <div
                            class="w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] flex items-center justify-center pt-[30px] lg:pt-[80px]">
                            <img src="}" class="object-cover themeLogo" />
                            {{-- <img src="/${item.logo[0]?.url}" class="object-cover themeLogo" /> --}}
                        </div>
                    </div>

                    {{-- Carousel --}}
                    <div class="w-full max-w-[500px] lg:max-w-[2000px] mx-auto">
                        <div class="owl-carousel" id="carouselContainer"></div>
                    </div>
                </div>

            </div>

            {{-- Main div --}}
            <div class="order-1 lg:order-2 flex flex-col w-full flex-1 lg:h-screen lg:overflow-y-auto pb-10">
                <div class="w-full flex flex-col md:h-[350px] lg:flex-1 lg:h-auto">
                    {{-- Map Header --}}
                    <div
                        class="!bg-transparent w-full h-[50px] flex-shrink-0 flex font-medium justify-between items-center ">
                        <div class="w-full  items-center ">
                            <x-report-header-title class="font-[16px]" title="Dashboard" />
                        </div>

                        <div id="liveDateFilter"
                            class="relative flex items-center gap-2 px-3 h-[30px] rounded-md text-white text-[13px] font-medium whitespace-nowrap cursor-pointer">
                            <i class="w-4 h-4 flex items-center justify-center" data-lucide="calendar-days"></i>
                            <span id="liveDateTimeText"></span>

                            <x-datepicker singleDate="true" id="dashboardDatePicker"
                                class="absolute inset-5 opacity-0 pointer-events-none" />
                        </div>
                    </div>
                    {{-- Map Body --}}
                    <div id="mapContainer" class="w-full flex-1 min-h-[500px] bg-white relative HideMap">
                        
                        <button id="fitToScreen" class="absolute top-2 left-1/2 -translate-x-1/2 z-10 bg-gray-300/70 items-center text-center text-gray-600 rounded-full text-[13px] w-fit h-fit px-2">
                            Fit to Screen
                        </button>

                        {{-- fit to screen section --}}
                        <div id="fitScreenInfo" class="hidden flex flex-col h-fit w-[550px] absolute top-2 left-2 z-10 rounded-3xl overflow-hidden gap-5">
                            <div class=" pb-2 bg-white rounded-b-3xl">
                                <div class="flex w-full bg-red-500 p-2">

                                    <div class="flex w-full gap-2">
                                        <div class="w-fit sm:text-[10px]  rounded-2xl whitespace-nowrap sm:w-fit">
                                            <x-dropdown direction="dropdown-top" class="w-fit px-5"
                                                buttonClass="rounded-2xl gap-5  w-fit px-5 items-center  flex justify-center h-[30px] shine-bgBtn">
                                                <x-slot:dropdownName>
                                                    <span
                                                        class="flex items-center gap-2 text-[11.2px] justify-evenly w-full h-full font-semibold">
                                                        <i class="fa-regular fa-clock"></i>
                                                        <span id="selectedMinute">OFF</span>
                                                        <i class="fa-solid fa-angle-down text-[8px]"></i>
                                                    </span>
                                                </x-slot:dropdownName>

                                                <ul id="MinDropdown"
                                                    class="dropdown_item  w-fit min-w-[150px] px-2 py-1 text-[13px] rounded-lg bg-white whitespace-nowrap">

                                                </ul>
                                            </x-dropdown>
                                        </div>

                                        <div class="w-fit px-2 h-[30px] shine-bgBtn rounded-full flex justify-center items-center ">
                                            <i class="fa-solid fa-arrow-rotate-right text-[13px] "></i>
                                        </div>
                                    </div>
                                    <div class="w-full h-[30px] sm:w-auto">
                                        <x-searchbar id="customSearch" placeholder="Search Salesman"
                                            class="h-[30px] w-[250px] headerColor text-[13px] rounded-4xl bg-transparent border focus:outline-none border-white" />
                                    </div>
                                </div>
                                <div id="fitScreenTableContainer" class="flex w-full">
                                    <x-datatable id="fitScreenTable" class="overflow-auto" />
                                </div>
                            </div>

                            <div class="bg-white/70 flex justify-between rounded-3xl">
                                {{-- MTD SALES --}}
                                <div class="flex w-[267px] bg-white rounded-3xl">
                                    <div class="flex flex-col w-[142px] px-2">
                                        <span class="font-bold">MTD Sales</span>
                                        <div class="flex items-center gap-1">
                                            <span class="font-bold text-sm">₱{{ number_format($stats->sales ?? 165143.86, 2) }}</span>
                                            <span class="rounded-full bg-amber-200 w-10 h-10"></span>
                                        </div>
                                        <span class="text-[10px]">Target</span>
                                        <span>0.00</span>

                                        <span class="text-[10px]">Previous Month MTD Sales</span>
                                        <span>
                                            50,000.00
                                        </span>
                                    </div>
                                    <div class="flex flex-col w-[142px] px-2">
                                        <span class="text-[11px] font-bold">NUMBER OF SALESMAN THIS MONTH</span>
                                        <div class="flex gap-5">
                                            <img class="w-10 h-10" src="https://cdo.sfa-plus.com/SFA/v2/img/salesmanPic6.svg"/>
                                            <div class="flex flex-col">
                                                <span class="text-[10px]">Total</span>
                                                <span>11</span>
                                            </div>
                                        </div>
                                        <span class="text-[10px]">Previous Month Salesman</span>
                                        <span>50,000.00</span>
                                    </div>
                                </div>
                                {{-- DAILY SALES --}}
                                <div class="flex w-[267px] bg-white rounded-3xl">
                                    <div class="flex flex-col w-[142px] px-2">
                                        <span class="font-bold">DAILY Sales</span>
                                        <div class="flex items-center gap-1">
                                            <span class="font-bold text-sm">₱{{ number_format($stats->sales ?? 165143.86, 2) }}</span>
                                            <span class="rounded-full bg-amber-200 w-10 h-10"></span>
                                        </div>
                                        <span class="text-[10px]">Target</span>
                                        <span>0.00</span>

                                        <span class="text-[10px]">Previous Day Sales</span>
                                        <span>
                                            50,000.00
                                        </span>
                                    </div>
                                    <div class="flex flex-col w-[142px] px-2">
                                        <span class="text-[11px] font-bold">NUMBER OF SALESMAN TODAY</span>
                                        <div class="flex gap-5">
                                            <img class="w-10 h-10" src="https://cdo.sfa-plus.com/SFA/v2/img/salesmanPic6.svg"/>
                                            <div class="flex flex-col">
                                                <span class="text-[10px]">Total</span>
                                                <span>11</span>
                                            </div>
                                        </div>
                                        <span class="text-[10px]">Previous Day Salesman</span>
                                        <span>50,000.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <x-DigitalMap />

                        <div class="absolute inset-0 w-full h-full flex justify-center p-2 items-end pointer-events-none">
                            <div
                                class="flex w-fit px-5 gap-5 justify-center items-center rounded-full h-[35px] bg-gray-200/70 pointer-events-auto">
                                {{-- avatar --}}
                                <div class="flex h-full items-center gap-2">
                                    <div class="avatar">
                                        <div class="w-[25px] h-[25px] rounded-2xl">
                                            <img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" />
                                        </div>
                                    </div>
                                    <div class="avatar">
                                        <div class="w-[25px] h-[25px] rounded-2xl">
                                            <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
                                        </div>
                                    </div>
                                    <div class="avatar">
                                        <div class="w-[25px] h-[25px] rounded-2xl">
                                            <img src="https://img.daisyui.com/images/profile/demo/averagebulk@192.webp" />
                                        </div>
                                    </div>
                                </div>
                                {{-- end --}}
                            </div>
                        </div>
                    </div>
                </div>

                {{-- Table --}}
                <div class="w-full bodyFont flex flex-col tableSec pr-2 h-[200px] lg:h-[350px] pb-20">

                    {{-- Toolbar --}}
                    <div class="w-full h-fit py-2 flex-shrink-0 flex sm:flex-row justify-between gap-5 ">

                        <div
                            class="flex justify-start flex-col h-full flex-1 lg:items-center sm:flex-row gap-2 w-full md:w-auto ">

                            <div class="sm:text-[10px] whitespace-nowrap sm:w-fit">
                                <x-dropdown id="OperationTypeDropdown" class="w-full"
                                    buttonClass="h-[30px] w-fit px-5 items-center  flex justify-center rounded-2xl px-3 shine-bgBtn">
                                    <x-slot:dropdownName>
                                        <span class="text-[11.2px]  font-semibold gap-5">
                                            Operation Type
                                            <i class="fa-solid fa-angle-down text-[8px]"></i>
                                        </span>
                                    </x-slot:dropdownName>

                                    <ul id="OperationTypeItems"
                                        class="dropdown_item  w-fit min-w-[150px] px-2 py-1 text-[13px] rounded-lg bg-white whitespace-nowrap">
                                    </ul>
                                </x-dropdown>
                            </div>

                            <div class="  flex w-full sm:w-auto">
                                <x-button id="ExpandBtn"
                                    class="h-[30px] text-[11.2px] font-semibold w-fit px-5 rounded-2xl shine-bgBtn items-center justify-center flex">
                                    <x-slot:buttonName>
                                        <span class="bodyFont  ">
                                            Expand
                                        </span>
                                    </x-slot:buttonName>
                                </x-button>
                            </div>

                            <div class="flex w-full gap-2">

                                <div class="w-fit sm:text-[10px]  rounded-2xl whitespace-nowrap sm:w-fit">
                                    <x-dropdown direction="dropdown-top" class="w-fit px-5"
                                        buttonClass="rounded-2xl gap-5  w-fit px-5 items-center  flex justify-center h-[30px] shine-bgBtn">
                                        <x-slot:dropdownName>
                                            <span
                                                class="flex items-center gap-2 text-[11.2px] justify-evenly w-full h-full font-semibold">
                                                <i class="fa-regular fa-clock"></i>
                                                <span id="selectedMinute">OFF</span>
                                                <i class="fa-solid fa-angle-down text-[8px]"></i>
                                            </span>
                                        </x-slot:dropdownName>

                                        <ul id="MinDropdown"
                                            class="dropdown_item  w-fit min-w-[150px] px-2 py-1 text-[13px] rounded-lg bg-white whitespace-nowrap">

                                        </ul>
                                    </x-dropdown>
                                </div>

                                <div class="w-fit px-2 h-[30px] shine-bgBtn rounded-full flex justify-center items-center ">
                                    <i class="fa-solid fa-arrow-rotate-right text-[13px] "></i>
                                </div>
                            </div>
                        </div>

                        <div
                            class="flex flex-1 justify-end items-end flex-col-reverse sm:flex-row gap-2 w-full lg:items-center h-full md:w-auto">

                            <span
                                class="text-black border bg-white h-[30px] text-[12px] w-fit items-center px-5 flex rounded-2xl">
                                Total (6) : ₱455,064.59
                            </span>

                            <div class="w-full h-[30px] sm:w-auto">
                                <x-searchbar id="customSearch" placeholder="Search Salesman"
                                    class="h-[30px] w-[250px] headerColor text-[13px] rounded-4xl bg-transparent border focus:outline-none border-white" />
                            </div>

                        </div>

                    </div>

                    {{-- DataTable --}}
                    {{-- <div id="dashboardDataTable" class="dashboard-datatable h-[100px] rounded-2xl">
                        <x-datatable />
                    </div> --}}

                    <div class="dashboard-datatable h-[500px] rounded-2xl">
                        <x-datatable id="dashboardDataTable" class="overflow-auto" />
                    </div>
                </div>

            </div>

        </div>

        <div id="itemDetailsTable" class="hidden ">
            <x-datatable id="infoWindowTable" class="" />
        </div>

    </div>

@endsection


<script type="module" src="/app/module/dashboard.js"></script>