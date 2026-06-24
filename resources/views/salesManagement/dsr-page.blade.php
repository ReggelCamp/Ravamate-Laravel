@extends('layout.app')
@section('content')

<body class="bg-gray-300">
    <div class="flex w-full h-[50px] justify-between items-center  report_title ">
        <div class="w-full h-full items-center ">
            <x-report-header-title title="DSR" />
        </div>
        <div class="w-fit h-[30px] ">
            <x-datepicker/>
        </div>
    </div>

    <div class="w-full flex flex-col h-screen carouselBg ">
        
        <div class="flex flex-col-reverse sm:flex-row sm:justify-between items-stretch gap-5 p-5 w-full">

            <div class="w-[220px] lg:w-[250px] h-[30px]">
                <x-dropdown>
                    <x-slot:dropdownName>
                        Filter by Salesman
                    </x-slot:dropdownName>
                    <x-searchbar id="dsrSearch"/>
                    <ul class="dropdown_item" id="dsrItems">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                </x-dropdown>
            </div>

            <div class="flex h-[30px] gap-5 sm:justify-end w-full sm:w-auto">

                {{-- <div class="h-full w-[100px]">
                    <x-button>
                        <x-slot:buttonName>
                            Generate
                        </x-slot:buttonName>
                    </x-button>
                </div> --}}

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
            </div>
        </div>
        <x-datatable/>
    </div>
</body>
@endsection