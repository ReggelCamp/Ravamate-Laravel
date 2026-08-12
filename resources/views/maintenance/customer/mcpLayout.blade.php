@extends('layout.app')
@section('headerTitle', 'MCP LAYOUT')
@section('content')

    <div class="flex w-full pt-5 px-3">
        <div class="card w-full h-full flex flex-col">
            <div class="report_title w-full h-[50px] justify-center items-center rounded-t-xl px-5 py-3 flex ">
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
                            <div>
                                <x-exportDataTable tableId="#mcpTable" leftIcon="mdi mdi-export"/>
                            </div>
                            <x-button class="">
                                <x-slot:buttonName>
                                    <span class="inline-flex items-center  inline-flex items-center  border rounded-2xl px-2 h-[30px] h-[30px]">
                                        <i class="mdi mdi-file-download-outline"></i>
                                        Download Template
                                    </span>
                                </x-slot:buttonName>
                            </x-button>
                            <x-button>
                                <x-slot:buttonName>
                                    <span class="inline-flex items-center  border rounded-2xl px-2 h-[30px]">
                                        <i class="mdi mdi-upload-outline"></i>
                                        Upload Template
                                    </span>
                                </x-slot:buttonName>
                            </x-button>
                            <x-button>
                                <x-slot:buttonName>
                                    <span class="inline-flex items-center  border rounded-2xl px-2 h-[30px]">
                                        <i class="mdi mdi-filter-cog-outline"></i>
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
                <div class="w-full flex p-5 pt-0 text-[16px] font-medium">
                    <span>
                        Today's Week No: 32 (Even week)
                    </span>
                </div>
                <div class="w-full pb-5 overflow-auto rounded-2xl" id="DataTable">
                    <x-datatable id="mcpTable"/>
                </div>
            </div>
        </div>
    </div>

@endsection

<script type="module" src="/app/module/Maintenance/Customer/mcpLayout.js"></script>