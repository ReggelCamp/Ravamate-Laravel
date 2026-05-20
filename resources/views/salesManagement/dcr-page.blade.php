{{-- <x-index title="DCR"/> --}}
@extends('layout.app')
@section('content')
<body class="w-full h-full">
    <div class="flex flex-col w-full h-full">
         <div class="flex w-full h-[full] justify-between items-center primary_color">
            <div class="w-full h-[50px] pl-5">
                <x-report-header-title title="DCR" />
            </div>
            <div class="w-fit h-[30px]">
                <x-datepicker/>
            </div>
        </div>
        <div class="w-full p-5 justify-between flex bg-gray-300 max-h-[100px]">
            <div class="flex w-full h-[40px] gap-5 ">
                <button class="bg-green-500 text-white px-4 py-2 rounded-lg">Filter Salesman</button>
                <button class="bg-green-500 text-white px-4 py-2 rounded-lg">Print</button>
                <button class="bg-green-500 text-white px-4 py-2 rounded-lg">Excel</button>
            </div>
           
            <div class="relative h-[40px] w-full  justify-end flex">
                <input type="text"
                    class="border w-[500px] rounded-2xl pl-10 pr-10 py-2"
                    placeholder="Search...">
                    <i class="fa-solid fa-magnifying-glass absolute left-115 top-1/2 -translate-y-1/2 text-gray-500"></i>
            </div>
        </div>
         <div class="w-full max-h-96 text-white flex flex-col secondary_color">
                <div class="w-full h-[500px] text-sm p-5">
                    <table id="myTable" class="w-full">
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

