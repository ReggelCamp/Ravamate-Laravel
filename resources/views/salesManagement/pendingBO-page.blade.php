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
                <div class="flex w-full h-full justify-between items-center primary_color">
                    <div class="w-full h-[50px] pl-5">
                        <x-report-header-title title="Offsite Transaction" />
                    </div>
                </div> 
            </div>

            <div class="tabs tabs-lift p-5">
                <input type="radio" name="my_tabs_3" class="tab" aria-label="Pending BO" />
                <div class="tab-content bg-base-100 border-base-300 p-6 ">
                    <div class="w-full flex h-full md:justify-end gap-5 items-center">
                        <div class="flex sm:items-center sm:flex-row flex-col-reverse justify-start sm:justify-end  w-full h-full p-2">
                            <div class="flex w-full items-center sm:flex-row justify-between sm:justify-end">
                                <div class="h-[30px]  datepicker">
                                    <x-datepicker/>
                                </div>
                                <div class="">
                                    <details class="dropdown">
                                    <summary class="btn m-1">Export
                                        <i class="fa-solid fa-angle-down"></i>
                                    </summary>
                                    <ul class="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                        <li><a>Export to Excel</a></li>
                                        <li><a>Export to CSV</a></li>
                                        <li><a>Print Records</a></li>
                                        <li><a>Copy Content</a></li>
                                    </ul>
                                    </details>
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
                        <div class="flex sm:items-center sm:flex-row flex-col-reverse justify-start sm:justify-end w-full h-full p-2">
                            <div class="flex w-full items-center sm:flex-row justify-between sm:justify-end">
                                <div class="h-[30px]  datepicker">
                                    <x-datepicker/>
                                </div>
                                <div class="">
                                    <details class="dropdown">
                                    <summary class="btn m-1">Export
                                        <i class="fa-solid fa-angle-down"></i>
                                    </summary>
                                    <ul class="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                        <li><a>Export to Excel</a></li>
                                        <li><a>Export to CSV</a></li>
                                        <li><a>Print Records</a></li>
                                        <li><a>Copy Content</a></li>
                                    </ul>
                                    </details>
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
                        <div class="flex sm:items-center sm:flex-row flex-col-reverse justify-start sm:justify-end  w-full h-full p-2">
                            <div class="flex w-full items-center sm:flex-row justify-between sm:justify-end">
                                <div class="h-[30px]  datepicker">
                                    <x-datepicker/>
                                </div>
                                <div class="">
                                    <details class="dropdown">
                                    <summary class="btn m-1">Export
                                        <i class="fa-solid fa-angle-down"></i>
                                    </summary>
                                    <ul class="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                        <li><a>Export to Excel</a></li>
                                        <li><a>Export to CSV</a></li>
                                        <li><a>Print Records</a></li>
                                        <li><a>Copy Content</a></li>
                                    </ul>
                                    </details>
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