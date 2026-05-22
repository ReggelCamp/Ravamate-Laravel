@extends('layout.app')
@section('content')

<body class="w-full h-full">
    <div class="flex w-full h-full flex-col">
        <div class="flex w-full h-[50px] justify-between p-5 primary_color items-center">
            <div class="flex w-full ">
                <x-report-header-title title="Sync Report"/>
            </div>
            <div class="flex w-full h-[30px] justify-end">
                <x-datepicker/>
            </div>
        </div>
         <div class="flex w-full justify-between p-5 background_color flex-col-reverse sm:flex-row gap-5">
            <div class="w-full h-[30px] gap-5  items-center flex">
                <button class=" w-[80px]  rounded-2xl border">
                    Excel
                </button>
                 <button class=" w-[80px]  rounded-2xl border">
                    Print
                </button>
                 <button class=" w-[80px]  rounded-2xl border">
                    Copy
                </button>
            </div>
            <div class="flex w-full h-[30px]">
                <x-searchbar/>
            </div>
        </div>
        <div class="w-full h-full overflow-auto">
            <x-datatable/>
        </div>
    </div>
</body>
@endsection