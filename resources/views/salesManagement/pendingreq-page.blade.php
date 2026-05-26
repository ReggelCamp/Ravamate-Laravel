@extends('layout.app')
@section('content')


<style>
    table.dataTable {
        width: 100% !important;
    }

    table.dataTable th,
    table.dataTable td {
        white-space: nowrap;
    }

    #datepicker{
        color:black !important;
    }
</style>

<div class="flex w-full h-[50px] justify-between items-center pl-2 pr-2 bg-blue-500">
    <div class="w-full h-full items-center ">
        <x-report-header-title title="Pending Request" />
    </div>
</div>
<body class="w-full h-full ">
    <div class="w-full p-5 background_color">
        <div class="tabs tabs-lift ">
            <input type="radio" name="my_tabs_3" class="tab" aria-label="E-CMF Records" checked/>
            <div class="tab-content bg-base-100 border-base-300 p-6">
                <div class="flex w-full justify-between h-full flex-col">
                    <div class="flex sm:flex-row gap-2 flex-col-reverse w-full justify-between h-full ">
                        <div class="flex w-full items-center gap-5">
                           <div class="w-[150px] h-[40px]">
                                    <x-dropdown> 
                                        <x-slot:dropdownName>
                                            Export
                                        </x-slot:dropdownName>
                                            <li><a class="excelBtn">Export to Excel</a></li>
                                            <li><a class="csvBtn">Export to CSV</a></li>
                                            <li><a class="printBtn">Print Records</a></li>
                                            <li><a class="copyBtn">Copy Content</a></li>
                                    </x-dropdown>
                                </div>
                            <div class="h-[40px]">
                                <x-datepicker/>
                            </div>
                        </div>
                        <div>
                            <x-searchbar/>
                        </div>
                    </div>
                    <div class="overflow-auto">
                        <x-datatable/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>

@endsection
