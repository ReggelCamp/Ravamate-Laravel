@extends('layout.app')
@section('content')

<body class="w-full h-full">
    <div class="flex w-full h-[50px] justify-between items-center pl-5 pr-5 bg-primary no-hover">
        <div class="w-full h-full items-center ">
            <x-report-header-title title="Placement Maintenance" />
        </div>
        <div class="w-fit h-[30px] text-accent">
            <x-datepicker/>
        </div>
    </div>
    <div class="flex flex-col w-full h-full p-5">
        <div class="flex w-full max-h-[100px] justify-between flex-col-reverse sm:flex-row gap-5">
             <div class="flex w-full gap-5 h-[50px]">  
                <button class="btn-format bg-secondary">
                    Excel
                </button>
                <button class="btn-format bg-secondary">
                    Print
                </button>
                <button class="btn-format bg-secondary">
                    Add Placement
                </button>
            </div>
            <div class="flex w-full h-[50px]">
                <x-searchbar/>
            </div>
        </div>
        <x-datatable/>
    </div>

</body>
@endsection