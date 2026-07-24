@extends('layout.app')
@section('headerTitle', 'MCP LAYOUT')
@section('content')

    <div class="flex w-full h-screen pt-5 px-3">
        <div class="card w-full h-96 flex flex-col">
            <div class="report_title w-full h-[100px] justify-center items-center rounded-t-xl px-5 py-3 flex ">
                <x-report-header-title title="MCP Layout" />
                <span class="flex border rounded-xl bg-transparent items-center justify-center px-5 gap-[5px]">
                    <x-datepicker class="whitespace-nowrap h-[30px] text-[13px] " />
                    <i class=" w-[13px] h-[13px] " data-lucide="calendar-days"></i>
                    <i class="fa-solid fa-caret-down text-xs"></i>
                </span>
            </div>
            <div class="w-full items-center h-full bg-grey-500 flex flex-col px-5">
                <div class="flex items-center w-full h-[60px] py-3">
                    <div class="flex gap-5 w-full">
                        <div class="flex rounded-2xl whitespace-nowrap h-[25px] gap-5">
                            <x-dropdown>
                                <x-slot:dropdownName>
                                    <span class="border px-2 rounded-2xl">
                                        Export
                                        <i class="fa-solid fa-caret-down"></i>
                                    </span>
                                </x-slot:dropdownName>
                                <div class="w-full text-[13px] bg-white">
                                    <li><a class="printBtn">Print</a></li>
                                    <li><a class="csvBtn">CSV</a></li>
                                    <li><a class="excelBtn">Excel</a></li>
                                    <li><a class="copyBtn">Copy</a></li>
                                </div>
                            </x-dropdown>
                            <x-button>
                                <x-slot:buttonName>
                                    <span class="border rounded-2xl px-2">
                                        Download Template
                                    </span>
                                </x-slot:buttonName>
                            </x-button>
                            <x-button>
                                <x-slot:buttonName>
                                    <span class="border rounded-2xl px-2">
                                        Upload Template
                                    </span>
                                </x-slot:buttonName>
                            </x-button>
                            <x-button>
                                <x-slot:buttonName>
                                    <span class="border rounded-2xl px-2">
                                        Filter Result
                                    </span>
                                </x-slot:buttonName>
                            </x-button>
                        </div>
                        
                    </div>
                    <div class=" border items-center justify-center flex px-2 rounded-2xl sm:max-w-[500px]  ">
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <x-searchbar class="w-[250px] " id="customSearch" />
                    </div>
                </div>
                <div class="w-full h-[250px] overflow-auto rounded-2xl" id="DataTable">
                    <x-datatable />
                </div>
            </div>
        </div>
    </div>

@endsection