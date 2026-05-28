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

<div class="flex w-full h-[50px] justify-between items-center pl-2 pr-2 no-hover bg-primary">
    <div class="w-full h-full items-center ">
        <x-report-header-title title="Electronic CMF" />
    </div>
</div>
<body class="w-full h-full ">
    <div class="w-full p-5">
        <div class="tabs tabs-lift">
            <input type="radio" name="my_tabs_3" class="tab" aria-label="E-CMF Records" checked/>
            <div class="tab-content bg-base-100 border-base-300 p-6">
                <div class="flex w-full justify-between h-full flex-col">
                    <div class="flex w-full flex-col-reverse sm:flex-row justify-between items-center gap-2 h-full">
                        <div class="flex  items-center h-[40px]  w-full gap-5">
                            <x-dropdown> 
                                    <x-slot:dropdownName>
                                        Others
                                    </x-slot:dropdownName>
                                    <li ><a class="csvBtn">CSV</a></li>
                                    <li ><a class="excelBtn">Excel</a></li>
                                </x-dropdown>
                            <div class="h-[40px] ">
                                <x-datepicker/>
                            </div>
                        </div>
                        <div class="w-[300px]  sm:max-w-[500px]  ">
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
