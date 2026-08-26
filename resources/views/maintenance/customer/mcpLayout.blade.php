@extends('layout.app')
@section('headerTitle', 'MCP LAYOUT')
@section('content')
@section('title', 'MCP LAYOUT')

        <style>
            input[type="time"]::-webkit-calendar-picker-indicator {
                background-color: red !important;
                border-radius: 5px;
                padding: 3px;
            }

            .dropdown {
                width: 100%;
            }
        </style>

        <div class="flex w-full h-full pb-20 pt-5 px-3">
            <div class="card w-full h-full flex flex-col">
                <div class="report_title w-full h-[50px] justify-center items-center rounded-t-xl px-5 py-3 flex ">
                    <x-report-header-title title="MCP Layout" />
                    <div class="h-[25px]">
                        <x-dropdown direction="dropdown-end dropdown-bottom">
                            <x-slot:dropdownName class="w-[100px] ">
                                <span
                                    class="flex font-medium text-[12px] gap-2 items-center sheenFilterBtn w-fit px-5 whitespace-nowrap border rounded-2xl h-[30px]">
                                    <i class="mdi mdi-filter-variant"></i>
                                    Select Salesman
                                </span>
                            </x-slot:dropdownName>
                            <ul class="dropdown_item dropdown dropdown-left border w-[300px] max-h-[300px] overflow-auto rounded-2xl p-2 bg-white border "
                                id="mcpItems">
                                {{-- <x-searchbar id="dcrSearch" class="w-[300px]" /> --}}
                            </ul>
                        </x-dropdown>
                    </div>
                </div>
                <div class="w-full items-center h-full bg-grey-500 flex flex-col px-5">
                    <div class="flex flex-col-reverse lg:flex-row gap-3 items-start lg:items-center w-full h-fit py-3">
                        <div class="flex gap-5 w-full">
                            <div class="flex rounded-2xl whitespace-nowrap h-fit gap-3">
                                <div class="flex flex-col gap-3 lg:flex-row ">
                                    <div class="flex gap-3">
                                        <div>
                                            <x-exportDataTable class="sheenFilterBtn" tableId="#mcpTable"
                                                leftIcon="mdi mdi-export" />
                                        </div>

                                        <x-button class="">
                                            <x-slot:buttonName>
                                                <span
                                                    class="inline-flex items-center sheenFilterBtn  inline-flex items-center text-[12px] border rounded-2xl px-2 h-[30px] h-[30px]">
                                                    <i class="mdi mdi-file-download-outline"></i>
                                                    Download Template
                                                </span>
                                            </x-slot:buttonName>
                                        </x-button>
                                    </div>
                                    <div class="flex gap-3">
                                        <x-button>
                                            <x-slot:buttonName>
                                                <span
                                                    class="inline-flex items-center sheenFilterBtn text-[12px] border rounded-2xl px-2 h-[30px]">
                                                    <i class="mdi mdi-upload-outline"></i>
                                                    Upload Template
                                                </span>
                                            </x-slot:buttonName>
                                        </x-button>
                                        <x-button>
                                            <x-slot:buttonName>
                                                <span onclick="mcpFilterModal.showModal()"
                                                    class="inline-flex items-center sheenFilterBtn text-[12px] border rounded-2xl px-2 h-[30px]">
                                                    <i class="mdi mdi-filter-cog-outline"></i>
                                                    Filter Result
                                                </span>
                                            </x-slot:buttonName>
                                        </x-button>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class=" border items-center justify-center flex px-2 rounded-2xl sm:max-w-[500px]  ">
                            <i class="fa-solid fa-magnifying-glass"></i>
                            <x-searchbar class="w-[250px] " id="customSearch" />
                        </div>
                    </div>
                    <div class="w-full flex p-5 pt-0 text-[16px] font-medium">
                        <span>
                            Today's Week No: 32 (Even week)
                        </span>
                    </div>
                    <div class="w-full pb-5 overflow-auto whitespace-nowrap" id="DataTable">
                        <x-datatable id="mcpTable" />
                    </div>
                </div>
            </div>
        </div>


        <dialog id="mcpFilterModal" class="modal">
            <div class="modal-box p-0 overflow-visible">
                <div class="flex items-center justify-between p-5 border-b">
                    <h3 class="text-xl font-bold">Filter Table Row Results</h3>
                    <form method="dialog">
                        <button class="btn btn-sm btn-circle btn-ghost">
                            <i class="fa-solid fa-xmark text-lg"></i>
                        </button>
                    </form>
                </div>

                <div class="flex flex-col gap-5 p-5">
                    <div class="flex items-center justify-between gap-5">
                        <label for="filter_daysOfVisit" class="font-bold text-sm whitespace-nowrap w-[150px]">Days of Visist:</label>
                        <div class="w-full">
                            <x-dropdown class="w-full"
                                buttonClass="border rounded-lg px-3 py-2 text-sm text-gray-500 w-full h-[40px] flex items-center justify-between">
                                <x-slot:dropdownName class="w-full flex items-center justify-between">
                                    <span class="w-full" id="update_weekVisited_label">Select</span>
                                    <i class="fa-solid fa-chevron-down text-xs text-gray-400"></i>
                                </x-slot:dropdownName>
                                <div class="dropdown_item border w-[300px] rounded-2xl bg-white overflow-hidden flex flex-col">
                                    <ul id="dayOfWeek"
                                        class="w-[300px] max-h-[300px] overflow-auto bg-white shadow-lg p-0">
                                    </ul>

                                    <div class="flex items-center justify-end gap-2 border-t px-3 py-2">
                                        <button type="button" id="SalesmanCheckbox_Cancel"
                                            class="btn btn-ghost btn-xs rounded-full text-[12px]">
                                            Cancel
                                        </button>
                                        <button type="button" id="SalesmanCheckbox_Confirm"
                                            class="btn btn-xs rounded-full text-[12px] bg-[#e6231e] text-white border-none">
                                            Confirm
                                        </button>
                                    </div>
                                </div>
                            </x-dropdown>
                        </div>
                    </div>

                    <div class="flex items-center justify-between gap-5">
                        <label for="filter_weekVisited" class="font-bold text-sm whitespace-nowrap w-[150px]">Week Visited:</label>
                        <div class="w-full">
                            <x-dropdown class="w-full"
                                buttonClass="border rounded-lg px-3 py-2 text-sm text-gray-500 w-full h-[40px] flex items-center justify-between">
                                <x-slot:dropdownName class="w-full flex items-center justify-between">
                                    <span class="w-full" id="update_weekVisited_label">Select</span>
                                    <i class="fa-solid fa-chevron-down text-xs text-gray-400"></i>
                                </x-slot:dropdownName>

                                <div class="dropdown_item border w-[300px] rounded-2xl bg-white overflow-hidden flex flex-col">
                                    <ul id="weekVisitedDropdown"
                                        class="w-[300px] max-h-[300px] overflow-auto bg-white shadow-lg p-0">
                                    </ul>

                                    <div class="flex items-center justify-end gap-2 border-t px-3 py-2">
                                        <button type="button" id="SalesmanCheckbox_Cancel"
                                            class="btn btn-ghost btn-xs rounded-full text-[12px]">
                                            Cancel
                                        </button>
                                        <button type="button" id="SalesmanCheckbox_Confirm"
                                            class="btn btn-xs rounded-full text-[12px] bg-[#e6231e] text-white border-none">
                                            Confirm
                                        </button>
                                    </div>
                                </div>
                            </x-dropdown>
                        </div>
                    </div>

                    <div class="flex items-center justify-between gap-5">
                        <label for="filter_mcpStatus" class="font-bold text-sm whitespace-nowrap w-[150px]">MCP Status:</label>
                        <div class="w-full">
                            <x-dropdown class="w-full"
                                buttonClass="border rounded-lg px-3 py-2 text-sm text-gray-500 w-full h-[40px] flex items-center justify-between">
                                <x-slot:dropdownName class="w-full flex items-center justify-between">
                                    <span class="w-full" id="update_weekVisited_label">Select</span>
                                    <i class="fa-solid fa-chevron-down text-xs text-gray-400"></i>
                                </x-slot:dropdownName>

                                <ul id="weekVisitedDropdown"
                                    class="border w-full max-h-[300px] overflow-auto rounded-lg bg-white shadow-lg p-0">
                                    <li><a>Item 1</a></li>
                                    <li><a>Item 2</a></li>
                                </ul>
                            </x-dropdown>
                        </div>
                    </div>

                    <div class="flex items-center justify-between gap-5">
                        <label for="filter_activeFlag" class="font-bold text-sm whitespace-nowrap w-[150px]">Active Flag:</label>
                        <div class="w-full">
                            <x-dropdown class="w-full"
                                buttonClass="border rounded-lg px-3 py-2 text-sm text-gray-500 w-full h-[40px] flex items-center justify-between">
                                <x-slot:dropdownName class="w-full flex items-center justify-between">
                                    <span class="w-full" id="update_weekVisited_label">Select</span>
                                    <i class="fa-solid fa-chevron-down text-xs text-gray-400"></i>
                                </x-slot:dropdownName>

                                <ul id="weekVisitedDropdown"
                                    class="border w-full max-h-[300px] overflow-auto rounded-lg bg-white shadow-lg p-0">
                                    <li><a>Item 1</a></li>
                                    <li><a>Item 2</a></li>
                                </ul>
                            </x-dropdown>
                        </div>
                    </div>
                </div>

                <div class="flex w-full justify-end p-5 gap-3 border-t">
                    <button type="button" class="btn bg-red-900 hover:bg-red-800 text-white border-none">Filter Results</button>
                    <button type="button" class="btn bg-gray-500 hover:bg-gray-600 text-white border-none">Close</button>
                </div>
            </div>
        </dialog>

    <dialog id="mcpLayoutModal" class="modal">
        <div class="modal-box p-0 max-w-2xl overflow-y-auto">
            <div class="flex items-center justify-between p-5 border-b">
                <h3 class="text-2xl font-bold">MCP Layout</h3>
                <form method="dialog">
                    <button class="btn btn-sm btn-circle btn-ghost">
                        <i class="fa-solid fa-xmark text-lg"></i>
                    </button>
                </form>
            </div>

            <div class="flex flex-col px-5">
                <div class="flex items-center border-b py-3">
                    <span class="font-bold flex-1 text-sm w-full">Salesman</span>
                    <span class="text-sm w-full flex-2">{{ $mcp->salesman_code ?? 'GP_2' }}</span>
                </div>
                <div class="flex items-center justify-between border-b py-3">
                    <span class="font-bold text-sm flex-1">CustCode</span>
                    <span class="text-sm flex-2">{{ $mcp->cust_code ?? '16_GP' }}</span>
                </div>
                <div class="flex items-center justify-between border-b py-3">
                    <span class="font-bold text-sm flex-1">Customer</span>
                    <span class="text-sm flex-2">{{ $mcp->cust_name ?? 'SEVEN BROTHERS' }}</span>
                </div>
                <div class="flex items-center justify-between border-b py-3">
                    <span class="font-bold text-sm flex-1">Address</span>
                    <span class="text-sm flex-2">{{ $mcp->address ?? 'null' }}</span>
                </div>
                <div class="flex items-center justify-between border-b py-3">
                    <span class="font-bold text-sm flex-1">Last Updated</span>
                    <span class="text-sm flex-2">{{ $mcp->last_updated ?? '2026-07-13 14:07:28.260' }}</span>
                </div>
                <div class="flex items-center justify-between border-b py-3">
                    <span class="font-bold text-sm flex-1">Status</span>
                    <span class="text-sm flex-2 font-bold text-red-600">{{ $mcp->status ?? 'No Schedule' }}</span>
                </div>
                <div class="flex items-center justify-between border-b py-3">
                    <span class="font-bold text-sm flex-1">Frequency</span>
                    <span class="text-sm flex-2 text-gray-400">{{ $mcp->frequency ?? '---' }}</span>
                </div>
                <div class="flex items-center justify-between border-b py-3">
                    <span class="font-bold text-sm flex-1">Days of Visit</span>
                    <span class="text-sm flex-2 text-gray-400">{{ $mcp->days_of_visit ?? '---' }}</span>
                </div>
                <div class="flex items-center justify-between border-b py-3">
                    <span class="font-bold text-sm flex-1">Week Visited</span>
                    <span class="text-sm flex-2 text-gray-400">{{ $mcp->week_visited ?? '---' }}</span>
                </div>
                <div class="flex items-center justify-between py-3 border-b">
                    <span class="font-bold text-sm flex-1">Time of Visit</span>
                    <span class="text-sm flex-2 text-gray-400">{{ $mcp->time_of_visit ?? '---' }}</span>
                </div>
            </div>

            <div class="px-5 pt-5 ">
                <h3 class="text-lg border-t font-bold">Update MCP Layout</h3>
                <span class="text-xs text-gray-400">Note: Today's Week No: {{ $weekNo ?? 35 }} ({{ $weekParity ?? 'Odd' }}
                    week)</span>
            </div>

            <div class="flex flex-col gap-4 p-5">
                <div class="flex items-center justify-between">
                    <label for="update_frequency_label" class="font-bold text-sm w-fit">Frequency</label>

                    <div class="w-full max-w-sm">
                        <x-dropdown class="w-full z-[9999]"
                            buttonClass="border rounded-lg px-3 py-2 text-sm text-gray-500 w-full h-[40px] flex items-center justify-between">
                            <x-slot:dropdownName class="w-full flex items-center justify-between">
                                <span class="w-full" id="update_frequency_label">Select</span>
                                <i class="fa-solid fa-chevron-down text-xs text-gray-400"></i>
                            </x-slot:dropdownName>

                            <div class="dropdown_item border w-[300px] rounded-2xl bg-white overflow-hidden flex flex-col">
                                <ul id="freqDropdown"
                                    class="w-[300px] max-h-[300px] px-3 z-[9999] w-full overflow-auto bg-white shadow-lg p-0">
                                </ul>

                                <div class="flex items-center justify-end gap-2 border-t px-3 py-2">
                                    <button type="button" id="freq_Cancel"
                                        class="btn btn-ghost btn-xs rounded-full text-[12px]">
                                        Cancel
                                    </button>
                                    <button type="button" id="freq_Confirm"
                                        class="btn btn-xs rounded-full text-[12px] bg-[#e6231e] text-white border-none">
                                        Confirm
                                    </button>
                                </div>
                            </div>
                        </x-dropdown>
                    </div>
                </div>

                <div class="flex items-center justify-between">
                    <label for="update_daysOfVisit_label" class="font-bold text-sm w-32">Days of Visit</label>

                    <div class="w-full max-w-sm">
                        <x-dropdown direction="dropdown-top" class="w-full z-[9999]"
                            buttonClass="border rounded-lg px-3 py-2 text-sm text-gray-500 w-full h-[40px] flex items-center justify-between">
                            <x-slot:dropdownName class="w-full flex items-center justify-between">
                                <span class="w-full" id="update_daysOfVisit_label">Select</span>
                                <i class="fa-solid fa-chevron-down text-xs text-gray-400"></i>
                            </x-slot:dropdownName>

                            <div class="dropdown_item border w-[300px] rounded-2xl bg-white overflow-hidden flex flex-col">
                                <ul id="dayOfWeekTable"
                                    class="w-[300px] max-h-[300px] px-3 w-full z-[9999] overflow-auto bg-white shadow-lg p-0">
                                </ul>

                                <div class="flex items-center justify-end gap-2 border-t px-3 py-2">
                                    <button type="button" id="daysOfVisit_Cancel"
                                        class="btn btn-ghost btn-xs rounded-full text-[12px]">
                                        Cancel
                                    </button>
                                    <button type="button" id="daysOfVisit_Confirm"
                                        class="btn btn-xs rounded-full text-[12px] bg-[#e6231e] text-white border-none">
                                        Confirm
                                    </button>
                                </div>
                            </div>
                        </x-dropdown>
                    </div>
                </div>

                <div class="flex items-center justify-between">
                    <label for="update_weekVisited_label" class="font-bold text-sm w-32">Week Visited</label>

                    <div class="w-full max-w-sm">
                        <x-dropdown direction="dropdown-top" class="w-full z-[50]"
                            buttonClass="border rounded-lg px-3 py-2 text-sm text-gray-500 w-full h-[40px] flex items-center justify-between">
                            <x-slot:dropdownName class="w-full flex items-center justify-between">
                                <span class="w-full" id="update_weekVisited_label">Select</span>
                                <i class="fa-solid fa-chevron-down text-xs text-gray-400"></i>
                            </x-slot:dropdownName>

                            <div class="dropdown_item border w-[300px] rounded-2xl bg-white overflow-hidden flex flex-col">
                                <ul id="weekVisitedTable"
                                    class="w-[300px] max-h-[300px] overflow-auto bg-white shadow-lg p-0">
                                </ul>

                                <div class="flex items-center justify-end gap-2 border-t px-3 py-2">
                                    <button type="button" id="weekVisited_Cancel"
                                        class="btn btn-ghost btn-xs rounded-full text-[12px]">
                                        Cancel
                                    </button>
                                    <button type="button" id="weekVisited_Confirm"
                                        class="btn btn-xs rounded-full text-[12px] bg-[#e6231e] text-white border-none">
                                        Confirm
                                    </button>
                                </div>
                            </div>
                        </x-dropdown>
                    </div>
                </div>

                <div class="flex items-center justify-between">
                    <label for="update_timeOfVisit" class="font-bold text-sm w-32">
                        Time of Visit
                    </label>

                    <input type="time" id="update_timeOfVisit"
                        class="border input rounded-lg px-3 py-2 text-sm w-full max-w-sm cursor-pointer" />
                </div>
            </div>

            <div class="flex w-full justify-end p-5 gap-3 border-t">
                <button type="button" class="btn bg-red-900 hover:bg-red-800 text-white border-none">Update</button>
                <form method="dialog">
                    <button type="submit" class="btn btn-outline">Close</button>
                </form>
            </div>
        </div>
    </dialog>

@endsection

<script type="module" src="/app/module/Maintenance/Customer/mcpLayout.js"></script>