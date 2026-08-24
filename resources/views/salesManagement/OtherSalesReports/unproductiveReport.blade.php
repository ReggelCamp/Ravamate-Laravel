@extends('layout.app')
@section('headerTitle', 'Unproductive REPORT')
@section('content')
@section('title', 'Unproductive REPORT')

    <style>
        .dataTable-info{
            padding-top: 20px;
        }

        /* Main daterangepicker */
.daterangepicker.dcr-picker {
    width: 900px;
    padding: 10px;
}

/* Date inputs at the top */
.daterangepicker.dcr-picker .custom-date-inputs {
    display: flex;
    gap: 14px;
    width: calc(100% - 210px);
    margin-bottom: 8px;
}

/* Start/end input */
.daterangepicker.dcr-picker .drp-start,
.daterangepicker.dcr-picker .drp-end {
    width: 50%;
    height: 38px;
    border: 1px solid #d1d5db;
    border-radius: 5px;
    padding: 0 10px;
    font-size: 16px;
}

/* Calendar area */
.daterangepicker.dcr-picker .custom-calendars {
    display: flex;
    width: calc(100% - 210px);
}

/* Left/right calendar */
.daterangepicker.dcr-picker .calendar {
    width: 50%;
    max-width: none;
}

/* Right-side preset ranges */
.daterangepicker.dcr-picker .ranges {
    position: absolute;
    right: 10px;
    top: 10px;
    width: 200px;
}

/* Range buttons */
.daterangepicker.dcr-picker .ranges li {
    margin-bottom: 8px;
    padding: 8px 12px;
    border-radius: 4px;
    background: #f3f4f6;
    color: #0077b6;
}

/* Active range */
.daterangepicker.dcr-picker .ranges li.active {
    background: #078ac5;
    color: white;
}

/* Buttons */
.daterangepicker.dcr-picker .drp-buttons {
    margin-top: 8px;
    padding: 0;
    border-top: none;
    text-align: left;
}

/* Hide daterangepicker's selected text */
.daterangepicker.dcr-picker .drp-selected {
    display: none;
}

/* Apply */
.daterangepicker.dcr-picker .applyBtn {
    border-radius: 4px;
}

/* Cancel */
.daterangepicker.dcr-picker .cancelBtn {
    background: transparent;
    border: none;
}
    </style>

    <div class="flex w-full h-full pb-20 pt-5 px-3">
        <div class="card w-full h-full flex flex-col">
            <div class="report_title w-full h-[50px] justify-center items-center rounded-t-xl px-5 py-3 flex ">
                <x-salesReportHeader title="Unproductive Report" />
                <div class="sheenFilterBtn border rounded-xl">
                    <span class="flex  items-center justify-center px-5 gap-[5px]">
                        <x-datepicker label="Pick a Date" id="unproductiveDatePicker" drops="down" opens="left" class="whitespace-nowrap h-[30px] text-[13px]" />
                        {{-- <i class=" w-[35px] " data-lucide="calendar-days"></i> --}}
                        <i class="fa-solid fa-caret-down text-xs"></i>
                    </span>
                </div>
            </div>
            <div class="w-full items-center h-full flex-1 bg-grey-500 flex flex-col px-5">
                <div class="flex flex-col-reverse gap-3 md:flex-row items-center w-full min-h-[60px] py-3">
                    <div class="flex gap-5 w-full">
                        <div>
                            <x-exportDataTable tableId="#unproductiveTable" class=" w-fit px-5 sheenFilterBtn font-medium text-[12px]" />
                        </div>
                    </div>
                    <div class="flex w-full justify-start md:justify-end items-center">
                        <div class="flex items-center border px-2 rounded-2xl w-[280px] sm:w-[550px] md:w-[300px]">
                            <i class="fa-solid fa-magnifying-glass mr-2"></i>
                            <x-searchbar tableId="#unproductiveTable" class="w-full h-[30px] font-medium customSearch" id="unproductivesSearch" />
                        </div>
                    </div>
                </div>
                <div class="w-full flex flex-col gap-2">
                    <div class="w-full whitespace-nowrap flex-1 overflow-auto pb-5">
                        <x-datatable id="unproductiveTable" />
                    </div>
                </div>
            </div>
        </div>
    </div>

@endsection

<script type="module" src="/app/module/Sale_Management/OtherSalesReports/unproductiveReport.js"></script>
