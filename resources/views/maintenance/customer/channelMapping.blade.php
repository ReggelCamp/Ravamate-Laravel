@extends('layout.app')
@section('content')
<div class="flex w-full h-[50px] justify-between items-center pl-2 pr-2 no-hover bg-primary">
    <div class="w-full h-full items-center ">
        <x-report-header-title title="Channel Mapping" />
    </div>
    <div class="w-fit h-[30px] text-accent">
        <x-datepicker/>
    </div>
</div>

<body class="w-full h-full">
    <div class="flex flex-col w-full h-full p-5">
        <div class="flex w-full max-h-[100px] justify-between flex-col-reverse sm:flex-row gap-5">
             <div class="flex w-full gap-5 h-[50px]">  
                <button class="btn-format">
                    Export
                </button>
                <button class="btn-format">
                    Print
                </button>
                <button class="btn-format">
                    Add
                </button>
            </div>
            <x-searchbar/>
        </div>
        <div class="overflow-auto">
            <x-datatable/>
        </div>
    </div>
</body>
@endsection