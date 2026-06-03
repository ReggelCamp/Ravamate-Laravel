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

<div class="flex w-full h-[50px] justify-between items-center pl-2 pr-2 no-hover report_title ">
    <div class="w-full h-full items-center ">
        <x-report-header-title title="Electronic CMF" />
    </div>
</div>
<body class="w-full h-full ">
    <div class="w-full carouselBg h-screen p-5">
        <div class="tabs tabs-lift">
            <input type="radio" name="my_tabs_3" class="tab" aria-label="E-CMF Records" checked/>
            <div class="tab-content bg-base-100 border-base-300 p-6">
                <div class="flex w-full justify-between h-full flex-col">
                    <div class="flex w-full flex-col-reverse sm:flex-row justify-between items-center h-full">
                        <div class="flex  items-center h-[30px]  w-full gap-5">
                            <div class="flex  h-[30px]">
                                <x-dropdown> 
                                    <x-slot:dropdownName>
                                            Export
                                        </x-slot:dropdownName>
                            
                                        <li><a class="printBtn">Print</a></li>
                                        <li><a class="csvBtn">CSV</a></li>
                                        <li><a class="excelBtn">Excel</a></li>
                                        <li><a class="copyBtn">Copy</a></li>
                                </x-dropdown>
                            </div>
                            <div class="h-[30px]">
                                <x-datepicker/>
                            </div>
                        </div>
                        <div class="w-[300px]  sm:max-w-[500px]  ">
                            <x-searchbar id="customSearch"/>
                        </div>
                    </div>
                    <div class="overflow-auto pt-5">
                        <x-datatable/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>

@endsection
