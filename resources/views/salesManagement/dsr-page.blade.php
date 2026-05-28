@extends('layout.app')
@section('content')

<body class="bg-gray-300">
    <div class="flex w-full h-[50px] justify-between items-center pl-2 pr-2 bg-primary no-hover text-background">
        <div class="w-full h-full text-background items-center ">
            <x-report-header-title title="DSR" />
        </div>
        <div class="w-fit h-[30px]">
            <x-datepicker/>
        </div>
    </div>

    <div class="w-full flex flex-col h-full">
        
        <div class="flex flex-col-reverse sm:flex-row sm:justify-between items-stretch gap-5 p-5 w-full">

            <div class="w-full sm:w-[200px] h-[50px]">
                <x-dropdown>
                    <x-slot:dropdownName>
                        Filter by Salesman
                    </x-slot:dropdownName>

                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                </x-dropdown>
            </div>

            <div class="flex gap-5 sm:justify-end h-[50px] w-full sm:w-auto">

                <div class="h-full w-[100px]">
                    <x-button>
                        <x-slot:buttonName>
                            Generate
                        </x-slot:buttonName>
                    </x-button>
                </div>

                <div class="h-full w-[100px]">
                    <x-button class="printBtn">
                        <x-slot:buttonName>
                            Print
                        </x-slot:buttonName>
                    </x-button>
                </div>
            </div>
        </div>
    </div>
</body>
@endsection