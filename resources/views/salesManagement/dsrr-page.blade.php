@extends('layout.app')
@section('content')

<body class="bg-gray-300">
    <div class="flex w-full h-[50px] justify-between items-center pl-2 pr-2 no-hover bg-primary">
        <div class="w-full h-full items-center ">
            <x-report-header-title title="DSRR" />
        </div>
        <div class="w-fit h-[30px] ">
            <x-datepicker/>
        </div>
    </div>
    <div class="w-full flex flex-col h-screen bg-background">       
        <div class="flex justify-between p-5 w-full max-h-[100px]">  
            <div class="w-full h-[30px] flex">
                <x-dropdown>
                    <x-slot:dropdownName>
                        Filter by Salesman
                    </x-slot:dropdownName>
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                </x-dropdown>
            </div>
            <div class="flex justify-end w-[100px] h-[30px] gap-5">
                <x-button>
                    <x-slot:buttonName>
                        Generate
                    </x-slot:buttonName>
                </x-button>
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