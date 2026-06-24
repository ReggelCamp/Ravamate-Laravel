@extends('layout.app')
@section('content')

<body class="bg-gray-300">
    <div class="flex w-full h-[50px] justify-between items-center  report_title ">
        <div class="w-full h-full items-center ">
            <x-report-header-title title="DCR" />
        </div>
        <div class="w-[100px] h-[30px] flex text-nowrap ">
            <x-datepicker/>
        </div>
    </div>

    <div class="w-full flex flex-col h-screen carouselBg ">
        
        <div class="flex flex-col-reverse sm:flex-row sm:justify-between items-stretch gap-5 p-5 w-full">
            <div class="flex gap-5 sm:flex-row flex-col-reverse w-full items-center justify-between">
                <div class="w-full flex sm:flex-row flex-row justify-between sm:w-[300px] h-[30px]">
                    <x-dropdown>
                        <x-slot:dropdownName>
                            Filter by Salesman
                        </x-slot:dropdownName>
                        <x-searchbar id="dcrSearch"/>
                        <ul class="dropdown_item" id="dcrItems">
                            <li><a>Salesman 1</a></li>
                            <li><a>Salesman 2</a></li>
                        </ul>
                    </x-dropdown> 
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
                <div class=" justify-start w-full sm:w-auto">
                    <x-searchbar id="customSearch"/>
                </div>
            </div>
        </div>
        <x-datatable/>
    </div>
</body>
@endsection