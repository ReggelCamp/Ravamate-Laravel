@extends('layout.app')
@section('content')

<body class="w-full h-full">
    <div class="flex w-full h-full flex-col">
        <div class="flex w-full h-[50px] justify-between p-5 primary_color items-center">
            <div class="flex w-full ">
                <x-report-header-title title="RGS Report"/>
            </div>
            <div class="flex w-full h-[30px] justify-end">
                <x-datepicker/>
            </div>
        </div>
        <div class="flex flex-col-reverse sm:flex-row w-full justify-between max-h-[150px] p-5 gap-5">
            <div class="w-full h-full gap-2 items-center flex">
                <div class="w-[100px] h-[40px] flex ">
                    <x-button class="excelBtn">
                        <x-slot:buttonName>
                        Excel
                        </x-slot:buttonName>
                    </x-button>
                </div>
                <div class="w-[100px] h-[40px] flex">
                    <x-button class="printBtn">
                        <x-slot:buttonName>
                        Print
                        </x-slot:buttonName>
                    </x-button>
                </div>
                <div class="w-[100px] h-[40px] flex">
                    <x-button class="copyBtn">
                        <x-slot:buttonName>
                        Copy
                        </x-slot:buttonName>
                    </x-button>
                </div>
            </div>
            <div class="w-full h-[40px] flex  sm:pt-0">
                <x-searchbar/>
            </div>
        </div>
        <div class="flex p-5 w-full overflow-auto">
            <x-datatable/>
        </div>
    </div>
</body>
@endsection