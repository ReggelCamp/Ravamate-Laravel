@extends('layout.app')
@section('content')

<body class="w-full h-full">
    <div class="flex w-full h-[50px] justify-between items-center pl-5 pr-5 report_title">
        <div class="w-full h-full items-center ">
            <x-report-header-title title="Placement Maintenance" />
        </div>
        <div class="w-fit h-[30px] ">
            <x-datepicker/>
        </div>
    </div>
    <div class="flex flex-col bodyBg w-full h-full p-5">
        <div class="flex w-full max-h-[100px] justify-between flex-col-reverse sm:flex-row gap-5">
             <div class="flex  h-[30px]">
                <x-dropdown> 
                    <x-slot:dropdownName>
                            Export
                        </x-slot:dropdownName>
            
                        <li><a class="printBtn">Print</a></li>
                        <li><a class="csvBtn">CSV</a></li>
                        <li><a class="excelBtn">Excel</a></li>
                        <li><a class="copyBtn">Copy</a></li>
                </x-dropdown>
            </div>
            <div class="flex w-full h-[50px]">
                <x-searchbar/>
            </div>
        </div>
        <x-datatable/>
    </div>

</body>
@endsection