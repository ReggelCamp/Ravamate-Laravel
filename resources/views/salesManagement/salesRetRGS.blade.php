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
        <div class="flex w-full flex-col-reverse sm:flex-row gap-5 justify-between border items-center max-h-[150px] p-5">
            <div class="flex w-full max-h-[35px] gap-5 ">
                <button class="bg-green-500 w-20 h-7 sm:w-[150px] sm:h-[30px] rounded-xl">
                    Copy
                </button>
                <button class="bg-green-500 w-20 h-7 sm:w-[150px] sm:h-[30px] rounded-xl">
                    Excel
                </button>
                <button class="bg-green-500 w-20 h-7 sm:w-[150px] sm:h-[30px] rounded-xl">
                   Print
                </button>
            </div>
            <div class="w-full h-[30px] flex ">
                <x-searchbar/>
            </div>
        </div>
        <div class="flex p-5 w-full overflow-auto">
            <x-datatable/>
        </div>
    </div>
</body>
@endsection