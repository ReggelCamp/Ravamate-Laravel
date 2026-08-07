@extends('layout.app')
@section('headerTitle', 'Hold Bad Orders')
@section('content')

    <head>
        <style>
            .datepicker {
                color: black !important;
            }
        </style>
    </head>



    <div class="flex w-full h-screen pt-5 px-3 ">
        <div class="card w-full h-[500px] flex flex-col">
            <div class=" report_title w-full h-[50px] justify-center items-center rounded-t-xl px-5 py-3 flex ">
                <x-report-header-title title="Pending BO" />
            </div>
<div class="w-full carouselBg flex-1 p-5 overflow-hidden">
                    <div class="tabs tabs-lift">
                    <input type="radio" name="my_tabs_3" class="tab" aria-label="Pending BO" />
                    <div class="tab-content bg-base-100 border-base-300 p-2 ">
                        <div class="w-full flex md:justify-end gap-5 items-center">
                            <div
                                class="flex sm:items-center sm:flex-row gap-2 flex-col-reverse justify-start sm:justify-end w-full h-full py-5">
                                <div class="flex w-full items-center sm:flex-row gap-2 justify-between sm:justify-end">
                                    <div
                                        class="flex rounded-2xl px-5 whitespace-nowrap gap-1 items-center font-medium border justify-end">
                                        <i class="items-center justify-center w-5 h-5 flex" data-lucide="calendar-days"></i>
                                        <x-datepicker class="!text-black" />
                                    </div>
                                    <div>
                                        <x-exportDataTable />
                                    </div>
                                </div>
                                <div class=" border items-center justify-center flex px-2 rounded-2xl sm:max-w-[500px]  ">
                                    <i class="fa-solid fa-magnifying-glass"></i>
                                    <x-searchbar class="w-[250px] " id="customSearch" />
                                </div>
                            </div>
                        </div>
                        <div class="w-full overflow-x-auto">
                            <div class="min-w-max">
                                <x-datatable id="PendingDataTable" />
                            </div>
                        </div>
                    </div>

                    <input type="radio" name="my_tabs_3" class="tab" aria-label="Rejected Bo" checked="checked" />
                    <div class="tab-content bg-base-100 border-base-300 p-2 ">
                        <div class="w-full flex h-full md:justify-end gap-5 items-center">
                            <div
                                class="flex sm:items-center sm:flex-row gap-2 flex-col-reverse justify-start sm:justify-end w-full h-full py-5">
                                <div class="flex w-full items-center sm:flex-row gap-2 justify-between sm:justify-end">
                                    <div
                                        class="flex rounded-2xl px-5 whitespace-nowrap gap-1 items-center font-medium border justify-end">
                                        <i class="items-center justify-center w-5 h-5 flex" data-lucide="calendar-days"></i>
                                        <x-datepicker class="!text-black" />
                                    </div>
                                    <div>
                                        <x-exportDataTable />
                                    </div>
                                </div>
                                <div class=" border items-center justify-center flex px-2 rounded-2xl sm:max-w-[500px]  ">
                                    <i class="fa-solid fa-magnifying-glass"></i>
                                    <x-searchbar class="w-[250px] " id="customSearch" />
                                </div>
                            </div>
                        </div>
                        <div class="w-full overflow-x-auto">
                            <div class="min-w-max">
                                <x-datatable id="RejectedDataTable" />
                            </div>
                        </div>
                    </div>

                    <input type="radio" name="my_tabs_3" class="tab" aria-label="Approved BO" />
                    <div class="tab-content bg-base-100 border-base-300 p-2 ">
                        <div class="w-full flex h-full md:justify-end gap-5 items-center">
                            <div
                                class="flex sm:items-center sm:flex-row gap-2 flex-col-reverse justify-start sm:justify-end  w-full h-full py-5">
                                <div class="flex w-full items-center sm:flex-row gap-2 justify-between sm:justify-end">
                                    <div
                                        class="flex rounded-2xl px-5 whitespace-nowrap gap-1 items-center font-medium border justify-end">
                                        <i class="items-center justify-center w-5 h-5 flex" data-lucide="calendar-days"></i>
                                        <x-datepicker class="!text-black" />
                                    </div>
                                    <div>
                                        <x-exportDataTable />
                                    </div>
                                </div>
                                <div class=" border items-center justify-center flex px-2 rounded-2xl sm:max-w-[500px]  ">
                                    <i class="fa-solid fa-magnifying-glass"></i>
                                    <x-searchbar class="w-[250px] " id="customSearch" />
                                </div>
                            </div>
                        </div>
                        <div class="w-full overflow-x-auto">
                            <div class="min-w-max">
                                <x-datatable id="ApprovedDataTable" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

<script type="module" src="/app/module/Sale_Management/pendingBo.js"></script>