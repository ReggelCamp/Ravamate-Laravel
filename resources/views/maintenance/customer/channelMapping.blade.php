@extends('layout.app')
@section('content')
    <div class="flex w-full h-[50px] justify-between items-center pl-2 pr-2 report_title">
        <div class="w-full h-full items-center ">
            <x-report-header-title title="Channel Mapping" />
        </div>
        <div class="w-fit h-[30px]">
            <x-datepicker />
        </div>
    </div>

    <body class="w-full h-full">
        <div class="flex flex-col w-full h-full p-5 bodyBg">
            <div class="flex w-full max-h-[100px] justify-between flex-col-reverse sm:flex-row gap-5">
                <div>
                    <x-exportDataTable />
                </div>
                <x-searchbar id="customSearch" />
            </div>
            <div class="overflow-auto pt-5">
                <x-datatable class="whitespace-nowrap" />
            </div>
        </div>
    </body>
@endsection