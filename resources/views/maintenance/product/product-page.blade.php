@extends('layout.app')
@section('content')

<body class="w-full h-full">
    <div class="flex w-full h-[50px] justify-between items-center pl-5 pr-5 report_title">
         <div class="w-full h-full items-center ">
            <x-report-header-title title="Product" />
        </div>
        <div class="w-fit h-[30px]">
            <x-datepicker/>
        </div>
    </div>
    <div class="flex flex-col bodyBg w-full h-full p-5">
        <div class="flex justify-start sm:justify-end">
            <x-searchbar id="customSearch"/>
        </div>
        <div class="overflow-auto pt-5">
            <x-datatable/>
        </div>
    </div>

</body>
@endsection