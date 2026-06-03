@extends('layout.app')
@section('content')

<body class="w-full h-full">
    <div class="flex w-full h-full flex-col carouselBg">
        <div class="flex w-full h-[50px] justify-between p-5 report_title items-center">
            <div class="flex w-full ">
                <x-report-header-title title="Sales Audit"/>
            </div>
            <div class="flex w-full h-[30px] justify-end ">
                <x-datepicker/>
            </div>
        </div>
        <div class="flex flex-col-reverse sm:flex-row w-full justify-between max-h-[150px] p-5 gap-5">
            <div class="flex h-[30px]">
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
            <div class="w-full h-[40px] flex  sm:pt-0">
                <x-searchbar id="customSearch"/>
            </div>
        </div>
        <div class="flex pt-5 w-full overflow-auto">
            <x-datatable/>
        </div>
    </div>
</body>
@endsection