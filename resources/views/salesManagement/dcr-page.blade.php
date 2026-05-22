{{-- <x-index title="DCR"/> --}}
@extends('layout.app')
@section('content')
<body class="w-full h-full">
    <div class="flex flex-col w-full h-full">
         <div class="flex w-full h-[50px] justify-between items-center primary_color p-5">
            <div class="w-full h-[50px]">
                <x-report-header-title title="DCR" />
            </div>
            <div class="w-fit h-[30px]">
                <x-datepicker/>
            </div>
        </div>
       <div class="w-full p-5 flex flex-col-reverse gap-4 sm:flex-row sm:justify-between bg-gray-300">
            <div class="flex flex-wrap gap-3">
                <button class="bg-green-500 text-white px-4 py-2 rounded-lg">
                    Filter Salesman
                </button>

                <button class="bg-green-500 text-white px-4 py-2 rounded-lg">
                    Print
                </button>

                <button class="bg-green-500 text-white px-4 py-2 rounded-lg">
                    Excel
                </button>
            </div>

            <div class="relative w-full sm:w-[500px]">
                <input
                    type="text"
                    class="border w-[350px] md:w-full rounded-2xl pl-10 pr-4 py-2"
                    placeholder="Search..."
                >

                <i class="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"></i>
            </div>
        </div>
         <div class="w-full max-h-96 text-white flex flex-col secondary_color overflow-auto ">
                <div class="w-full h-[500px] text-sm p-5">
                    <table id="myTable" class="w-full header_font">
                        <thead>
                            <tr>   
                                <th>Salesman Name</th>
                                <th>Attendance</th>
                                <th>Target MCP</th>
                                <th>Productive</th>
                                <th>Unproductive</th>
                                <th>Strike Rate</th>
                                <th>Selling HRS</th>
                                <th>Sale</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>John</td>
                                <td>80%</td>
                                <td>100</td>
                                <td>50</td>
                                <td>30</td>
                                <td>60%</td>
                                <td>40</td>
                                <td>$5,000</td>
                            </tr>

                            <tr>
                                <td>Jane</td>
                                <td>70%</td>
                                <td>80</td>
                                <td>40</td>
                                <td>20</td>
                                <td>50%</td>
                                <td>30</td>
                                <td>$4,000</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
    </div>
</body>
</html>
@endsection

