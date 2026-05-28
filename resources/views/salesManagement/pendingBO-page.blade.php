@extends('layout.app')
@section('content')

<head>
    <style>
        .datepicker{
            color: black !important;
        }
    </style>
</head>

    <body class="w-full h-full">
    
            <div class="flex w-full justify-between">
                <div class="flex w-full h-full justify-between items-center no-hover bg-primary">
                    <div class="w-full h-[50px] pl-5">
                        <x-report-header-title title="Offsite Transaction" />
                    </div>
                </div> 
            </div>

            <div class="tabs tabs-lift p-5">
                <input type="radio" name="my_tabs_3" class="tab" aria-label="Pending BO" />
                <div class="tab-content bg-base-100 border-base-300 p-6 ">
                    <div class="w-full flex h-full md:justify-end gap-5 items-center">
                        <div class="flex gap-2 sm:items-center sm:flex-row flex-col-reverse justify-start sm:justify-end  w-full h-full p-2">
                            <div class="flex w-full gap-2 items-center sm:flex-row justify-between sm:justify-end">
                                <div class="h-[40px]  datepicker">
                                    <x-datepicker/>
                                </div>
                                <div class="w-[150px] h-[40px]">
                                    <x-dropdown> 
                                        <x-slot:dropdownName>
                                            Export
                                        </x-slot:dropdownName>
                                            <li><a>Export to Excel</a></li>
                                            <li><a>Export to CSV</a></li>
                                            <li><a>Print Records</a></li>
                                            <li><a>Copy Content</a></li>
                                    </x-dropdown>
                                </div>
                            </div>
                            <div >
                                <x-searchbar/>
                            </div>
                        </div>
                    </div>
                    <div class="overflow-auto">
                        <x-datatable/>
                    </div>
                </div>

                <input type="radio" name="my_tabs_3" class="tab" aria-label="Rejected Bo" checked="checked" />
               <div class="tab-content bg-base-100 border-base-300 p-6 ">
                    <div class="w-full flex h-full md:justify-end gap-5 items-center">
                        <div class="flex sm:items-center sm:flex-row gap-2 flex-col-reverse justify-start sm:justify-end w-full h-full p-2">
                            <div class="flex w-full items-center sm:flex-row gap-2 justify-between sm:justify-end">
                                <div class="h-[40px]  datepicker">
                                    <x-datepicker/>
                                </div>
                                <div class="w-[150px] h-[40px]">
                                    <x-dropdown> 
                                        <x-slot:dropdownName>
                                            Export
                                        </x-slot:dropdownName>
                                            <li><a>Export to Excel</a></li>
                                            <li><a>Export to CSV</a></li>
                                            <li><a>Print Records</a></li>
                                            <li><a>Copy Content</a></li>
                                    </x-dropdown>
                                </div>
                            </div>
                            <div >
                                <x-searchbar/>
                            </div>
                        </div>
                    </div>
                    <div class="overflow-auto">
                        <x-datatable/>
                    </div>
                </div>

                <input type="radio" name="my_tabs_3" class="tab" aria-label="Approved BO" />
                <div class="tab-content bg-base-100 border-base-300 p-6 ">
                    <div class="w-full flex h-full md:justify-end gap-5 items-center">
                        <div class="flex sm:items-center sm:flex-row gap-2 flex-col-reverse justify-start sm:justify-end  w-full h-full p-2">
                            <div class="flex w-full items-center sm:flex-row gap-2 justify-between sm:justify-end">
                                <div class="h-[40px]  datepicker">
                                    <x-datepicker/>
                                </div>
                               <div class="w-[150px] h-[40px]">
                                    <x-dropdown> 
                                        <x-slot:dropdownName>
                                            Export
                                        </x-slot:dropdownName>
                                            <li class="excelBtn"><a >Export to Excel</a></li>
                                            <li class="csvBtn"><a>Export to CSV</a></li>
                                            <li class="printBtn"><a>Print Records</a></li>
                                            <li class="copyBtn"><a>Copy Content</a></li>
                                    </x-dropdown>
                                </div>
                            </div>
                            <div >
                                <x-searchbar/>
                            </div>
                        </div>
                    </div>
                    <div class="overflow-auto">
                        <x-datatable/>
                    </div>
                </div>
            </div>

    </body>
@endsection