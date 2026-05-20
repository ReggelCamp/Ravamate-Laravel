@extends('layout.app')
@section('content')


<style>
    table.dataTable {
        width: 100% !important;
    }

    table.dataTable th,
    table.dataTable td {
        white-space: nowrap;
    }

    #datepicker{
        color:black !important;
    }
</style>

<div class="flex w-full h-[50px] justify-between items-center pl-2 pr-2 bg-blue-500">
    <div class="w-full h-full items-center ">
        <x-report-header-title title="Electronic CMF" />
    </div>
</div>
<body class="w-full h-full ">
    <div class="w-full p-5">
        <div class="tabs tabs-lift">
            <input type="radio" name="my_tabs_3" class="tab" aria-label="E-CMF Records" checked/>
            <div class="tab-content bg-base-100 border-base-300 p-6">
                <div class="flex w-full justify-between h-full flex-col">
                    <div class="flex w-full justify-between h-full">
                        <div class="flex w-full gap-5">
                            <div class="dropdown">
                                <div tabindex="0" role="button" class="btn m-1">
                                    Others
                                    <div class="flex w-full justify-end">
                                        <i class="fa-solid fa-angle-down"></i>
                                    </div>
                                </div>
                                    <ul tabindex="-1" class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                        <li><a>CSV</a></li>
                                        <li><a>Excel</a></li>
                                    </ul>
                            </div>
                            <div class=" ">
                                <x-datepicker/>
                            </div>
                        </div>
                        <div>
                            <x-searchbar/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>

@endsection
