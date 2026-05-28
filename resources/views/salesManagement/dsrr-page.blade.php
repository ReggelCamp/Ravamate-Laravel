@extends('layout.app')
@section('content')

<body class="bg-gray-300">
    <div class="flex w-full h-[50px] justify-between items-center pl-2 pr-2 no-hover bg-primary">
        <div class="w-full h-full items-center ">
            <x-report-header-title title="DSRR" />
        </div>
        <div class="w-fit h-[30px] text-accent">
            <x-datepicker/>
        </div>
    </div>
    <div class="w-full flex flex-col h-full">       
        <div class="flex justify-between p-5 w-full h-full">  
            <div class="w-full h-[50px] flex">
                <x-dropdown>
                    <x-slot:dropdownName>
                        Filter by Salesman
                    </x-slot:dropdownName>
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                </x-dropdown>
            </div>
            <div class="flex justify-end w-[100px] h-[50px] gap-5">
                <x-button>
                    <x-slot:buttonName>
                        Generate
                    </x-slot:buttonName>
                </x-button>
                <x-button class="printBtn">
                    <x-slot:buttonName>
                        Print
                    </x-slot:buttonName>
                </x-button>
            </div>
        </div>
    </div>
</body>
@endsection