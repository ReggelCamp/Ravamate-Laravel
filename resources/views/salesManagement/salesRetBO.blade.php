@extends('layout.app')
@section('content')

<body class="w-full h-full">
    <div class="flex w-full h-full flex-col">
        <div class="flex w-full h-[50px] justify-between p-5 primary_color items-center">
            <div class="flex w-full ">
                <x-report-header-title title="Sales Report"/>
            </div>
            <div class="flex w-full h-[30px]">
                <x-datepicker/>
            </div>
        </div>
        <div class="flex flex-col-reverse sm:flex-row w-full justify-between max-h-[150px] p-5 gap-5">
            <div class="flex w-full sm:max-h-[35px] gap-5">
                <button class="bg-green-500 w-[150px] h-[30px] rounded-xl">
                    Copy
                </button>
                <button class="bg-green-500 w-[150px] h-[30px] rounded-xl">
                    Excel
                </button>
                <button class="bg-green-500 w-[150px] h-[30px] rounded-xl">
                    Print
                </button>
            </div>
            <div class="w-full h-[50px] flex  sm:pt-0">
                <x-searchbar/>
            </div>
        </div>
        <div class="flex p-5 w-full overflow-auto">
            <x-datatable/>
        </div>
    </div>
</body>
@endsection