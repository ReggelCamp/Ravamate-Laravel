@extends('layout.app')
@section('headerTitle', 'SALES RETURN(BO)')
@section('content')

    <div class="flex w-full h-screen pt-5 px-3">
        <div class="card w-full h-96 flex flex-col">
            <div class="report_title w-full h-[100px] justify-center items-center rounded-t-xl px-5 py-3 flex ">
                <x-report-header-title title="BO Report" />
                <span class="flex border rounded-xl bg-transparent items-center justify-center px-5 gap-[5px]">
                    <x-datepicker class="whitespace-nowrap h-[30px] text-[13px] " />
                    <i class=" w-[13px] h-[13px] " data-lucide="calendar-days"></i>
                    <i class="fa-solid fa-caret-down text-xs"></i>
                </span>
            </div>
            <div class="w-full items-center h-full bg-grey-500 flex flex-col px-5">
                <div class="flex items-center w-full h-[60px] py-3">
                    <div class="flex gap-5 w-full">
                        {{-- <div class="h-[25px]">
                            <x-dropdown>
                                <x-slot:dropdownName>
                                    <span
                                        class="flex items-center w-[180px] px-5 whitespace-nowrap border rounded-2xl h-[25px]">
                                        Filter by Salesman
                                    </span>
                                </x-slot:dropdownName>
                                <ul class="dropdown_item border bg-white" id="dsrItems">
                                    <x-searchbar id="dsrSearch" />
                                    <li><a>Item 1</a></li>
                                    <li><a>Item 2</a></li>
                                </ul>
                            </x-dropdown>
                        </div> --}}
                        <div>
                            <x-exportDataTable />
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