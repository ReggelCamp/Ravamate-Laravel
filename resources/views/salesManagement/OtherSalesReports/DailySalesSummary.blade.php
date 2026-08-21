@extends('layout.app')
@section('headerTitle', 'Daily Summary Report')
@section('content')
@section('title', 'Daliy Summary Report')

    <style>
        .dataTable-info {
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

        .sales-summary-table {
            width: 100%;
            border-collapse: collapse;
            font-family: Arial, sans-serif;
            font-size: 14px;
            table-layout: fixed;
        }

        .sales-summary-table th,
        .sales-summary-table td {
            border: 1px solid #222;
            padding: 5px 8px;
            text-align: center;
            white-space: nowrap;
        }

        .sales-summary-table thead th {
            font-weight: bold;
            background: #ffffff;
        }

        .sales-summary-table tbody tr:nth-child(even) {
            background-color: #e1e8eb;
        }

        .sales-summary-table tbody tr:nth-child(odd) {
            background-color: #ffffff;
        }

        .sales-summary-table .text-left {
            text-align: left;
        }

        .sales-summary-table .amount {
            text-align: right;
            padding-right: 15px;
        }

        .sales-summary-table tfoot td {
            text-align: right;
            font-weight: bold;
            padding: 7px 10px;
            background: #ffffff;
        }
    </style>

    <div class="flex w-full h-full pb-20 pt-5 px-3">
        <div class="card w-full h-full flex flex-col">
            <div class="report_title w-full h-[50px] justify-center items-center rounded-t-xl px-5 py-3 flex ">
                <x-salesReportHeader title="Daily Summary Report" />

                <div class="sheenFilterBtn border rounded-xl">
                    <span class="flex  items-center justify-center px-5 gap-[5px]">
                        <x-datepicker id="dcrDatepicker" drops="down" opens="left"
                            class="whitespace-nowrap h-[30px] text-[13px]" />
                        {{-- <i class=" w-[35px] " data-lucide="calendar-days"></i> --}}
                        <i class="fa-solid fa-caret-down text-xs"></i>
                    </span>
                </div>
            </div>

            <div class="p-5">
                <x-exportDataTable tableId="#DcrDataTable" class=" w-fit px-5 sheenFilterBtn font-medium text-[12px]" />
            </div>

            <div class="w-full flex flex-col gap-2">
                <div class="w-full whitespace-nowrap flex-1 overflow-auto pb-5">
                    <table id="salesSummaryTable" class="sales-summary-table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>SALESMAN</th>
                                <th>TARGET</th>
                                <th>PROD.</th>
                                <th>UNPROD.</th>
                                <th>MISS</th>
                                <th>FIRST</th>
                                <th>LAST</th>
                                <th># HOURS</th>
                                <th>AMOUNT</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>1</td>
                                <td class="text-left">FPM_2_JAYSON ANDAYA</td>
                                <td>8</td>
                                <td>9</td>
                                <td>0</td>
                                <td>-</td>
                                <td>8:11AM</td>
                                <td>3:35PM</td>
                                <td>7h 24min</td>
                                <td class="amount">₱ 405,787.40</td>
                            </tr>

                            <tr>
                                <td>2</td>
                                <td class="text-left">FPM_4_NINO LAURENTE</td>
                                <td>15</td>
                                <td>9</td>
                                <td>0</td>
                                <td>(18)</td>
                                <td>8:51AM</td>
                                <td>1:32PM</td>
                                <td>4h 41min</td>
                                <td class="amount">₱ 128,356.47</td>
                            </tr>

                            <tr>
                                <td>3</td>
                                <td class="text-left">FPM_7_GERARD MUNDALA</td>
                                <td>22</td>
                                <td>12</td>
                                <td>0</td>
                                <td>(34)</td>
                                <td>9:22AM</td>
                                <td>4:56PM</td>
                                <td>7h 34min</td>
                                <td class="amount">₱ 111,256.47</td>
                            </tr>

                            <tr>
                                <td>4</td>
                                <td class="text-left">FPM_8_NICOLAS RAMBOYONG</td>
                                <td>6</td>
                                <td>15</td>
                                <td>7</td>
                                <td>-</td>
                                <td>6:18AM</td>
                                <td>4:45PM</td>
                                <td>10h 27min</td>
                                <td class="amount">₱ 203,564.99</td>
                            </tr>

                            <tr>
                                <td>5</td>
                                <td class="text-left">GP_2_OBS2-DUCUT, NESCAR DE LA CRUZ</td>
                                <td>0</td>
                                <td>1</td>
                                <td>0</td>
                                <td>-</td>
                                <td>7:51AM</td>
                                <td>7:52AM</td>
                                <td>0h 1min</td>
                                <td class="amount">₱ 12,961.62</td>
                            </tr>

                            <tr>
                                <td>6</td>
                                <td class="text-left">GP_11_DSP JOHN MARK DELA CRUZ</td>
                                <td>0</td>
                                <td>7</td>
                                <td>0</td>
                                <td>-</td>
                                <td>10:16PM</td>
                                <td>10:45PM</td>
                                <td>0h 29min</td>
                                <td class="amount">₱ 11,669.18</td>
                            </tr>

                            <tr>
                                <td>7</td>
                                <td class="text-left">GP_12_DSP6 - CHARITO JABONILLO</td>
                                <td>0</td>
                                <td>24</td>
                                <td>19</td>
                                <td>-</td>
                                <td>8:14AM</td>
                                <td>2:39PM</td>
                                <td>6h 25min</td>
                                <td class="amount">₱ 28,310.29</td>
                            </tr>

                            <tr>
                                <td>8</td>
                                <td class="text-left">GP_13_DSP5- JONNIE ENGRACIAL</td>
                                <td>0</td>
                                <td>25</td>
                                <td>19</td>
                                <td>-</td>
                                <td>8:22AM</td>
                                <td>4:59PM</td>
                                <td>8h 37min</td>
                                <td class="amount">₱ 37,748.03</td>
                            </tr>

                            <tr>
                                <td>9</td>
                                <td class="text-left">FPM_13_CARLOS ORBINES</td>
                                <td>7</td>
                                <td>11</td>
                                <td>0</td>
                                <td>(18)</td>
                                <td>2:44PM</td>
                                <td>3:30PM</td>
                                <td>0h 46min</td>
                                <td class="amount">₱ 78,984.50</td>
                            </tr>

                            <tr>
                                <td>10</td>
                                <td class="text-left">FPM_15_ALEJANDRO CRUZ</td>
                                <td>7</td>
                                <td>8</td>
                                <td>0</td>
                                <td>-</td>
                                <td>7:44AM</td>
                                <td>3:17PM</td>
                                <td>7h 33min</td>
                                <td class="amount">₱ 227,714.67</td>
                            </tr>
                        </tbody>

                        <tfoot>
                            <tr>
                                <td colspan="10">
                                    <b>TOTAL: 1,246,353.635</b>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    </div>
    </div>

@endsection

{{--
<script type="module" src="/app/module/Sale_Management/dcrTable.js"></script> --}}