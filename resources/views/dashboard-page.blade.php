@extends('layout.app')
@section('content')
<!DOCTYPE html>
<html lang="en">
<head>


</head>

<body class="w-full h-screen">
  
    <script>
        $(document).ready(function () {
            $('#myTable').DataTable({
                searching: false,
                ordering:  false,
                lengthChange: false,
            });
        });
    </script>

    <script>
        $(document).ready(function(){
        $(".owl-carousel").owlCarousel({
            loop: true,
            margin: 0,
            center: true,
            nav: true,
            autoplay: true,
            autoplayTimeout: 3000,
            responsive: {
                0: { items: 1 },
                768: { items: 2 },
                1024: { items: 3 }
            }
        });

        $('#dateButton').text(moment().format('LLL'));
        });

        
    </script>

    

    
    <div class="w-full h-full flex">
        <div class="hidden md:flex flex-col w-[500px] p-5 h-screen justify-center gap-20 items-center primary_color ">
            {{-- RAVAMATE LOGO --}}
            <div class="w-[200px] h-[150px] ">
                {{-- <img src="/static/images/ravamatedashboard.png" class="object-cover"/> --}}
                <img src="/${item.logo[0]?.url}" class="object-cover" id="themeLogo"/>
            </div>
            
            {{-- Carousel --}}
            <div class="w-full sm:max-w-[900px]">
               <div class="owl-carousel ">
                    <div class="item active">
                        <img src="/static/images/MCP Screen.png" class="w-[650px] h-[300px] object-cover"/>
                    </div>
                    <div class="item active">
                        <img src="/static/images/Product List.png" class="w-[650px] h-[300px] object-cover"/>
                    </div>
                    <div class="item active">
                        <img src="/static/images/MTD Overview.png" class="w-[650px] h-[300px] object-cover"/>
                    </div>
                </div>
            </div>

        </div>


        <div class="flex flex-col w-full h-full flex-1 border-l-1">

            {{-- MAP --}}
            <div class="w-full h-full">
                <div class="w-full h-[50px] flex justify-between items-center bg-blue-500 p-2 border-1">
                    <div class="w-full h-[30px] items-center">
                        <x-report-header-title title="Dashboard"/>
                    </div>
                    <div class="flex w-fit h-[30px]  whitespace-nowrap gap-2 ">
                        <x-datepicker displayOnly="true"/>
                    </div>
                </div>
            </div>

            {{-- TABLE --}}
            <div class="w-full h-full flex flex-col bg-yellow-500">
                <div class="w-full flex flex-col-reverse sm:flex-row justify-between p-5">
                    <div class="gap-5 flex ">
                        <el-dropdown class="inline-block">
                            <button class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-gray-600 text-white px-3 py-2 text-sm font-semibold shadow-sm 0">
                                Operation type
                                <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" class="-mr-1 size-5 text-gray-400">
                                <path d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" fill-rule="evenodd" />
                                </svg>
                            </button>
    
                            <el-menu anchor="bottom end" popover class="w-56 origin-top-right divide-y divide-white/10 rounded-md bg-gray-800 outline-1 -outline-offset-1 outline-white/10 transition transition-discrete [--anchor-gap:--spacing(2)] data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in">
                                <div class="py-1">
                                    <a href="#" class="block px-4 py-2 text-sm text-gray-300 focus:bg-white/5 focus:text-white focus:outline-hidden">Edit</a>
                                    <a href="#" class="block px-4 py-2 text-sm text-gray-300 focus:bg-white/5 focus:text-white focus:outline-hidden">Duplicate</a>
                                </div>
                                <div class="py-1">
                                    <a href="#" class="block px-4 py-2 text-sm text-gray-300 focus:bg-white/5 focus:text-white focus:outline-hidden">Archive</a>
                                    <a href="#" class="block px-4 py-2 text-sm text-gray-300 focus:bg-white/5 focus:text-white focus:outline-hidden">Move</a>
                                </div>
                            </el-menu>
                        </el-dropdown>
    
                        <el-dropdown class="inline-block">
                            <button class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-gray-600 text-white px-3 py-2 text-sm font-semibold shadow-sm 0">
                                Icon
                                <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" class="-mr-1 size-5 text-gray-400">
                                <path d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" fill-rule="evenodd" />
                                </svg>
                            </button>
    
                            <el-menu anchor="bottom end" popover class="w-56 origin-top-right divide-y divide-white/10 rounded-md bg-gray-800 outline-1 -outline-offset-1 outline-white/10 transition transition-discrete [--anchor-gap:--spacing(2)] data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in">
                                <div class="py-1">
                                    <a href="#" class="block px-4 py-2 text-sm text-gray-300 focus:bg-white/5 focus:text-white focus:outline-hidden">Edit</a>
                                    <a href="#" class="block px-4 py-2 text-sm text-gray-300 focus:bg-white/5 focus:text-white focus:outline-hidden">Duplicate</a>
                                </div>
                                <div class="py-1">
                                    <a href="#" class="block px-4 py-2 text-sm text-gray-300 focus:bg-white/5 focus:text-white focus:outline-hidden">Archive</a>
                                    <a href="#" class="block px-4 py-2 text-sm text-gray-300 focus:bg-white/5 focus:text-white focus:outline-hidden">Move</a>
                                </div>
                            </el-menu>
                        </el-dropdown>
                    </div>

                    <div class="gap-5 pb-2 flex flex-col-reverse sm:flex-row">
                        <button class="w-[100px] bg-blue-500 h-[40px] rounded-md px-4 py-2 text-white"> Expand </button>
                        <input type="text" class="border rounded p-2 h-[40px]" placeholder="Search...">
                    </div>
                </div>

                {{-- <div class="w-full text-sm p-5">
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
                </div> --}}
                <div class="overflow-auto">
                    <x-datatable/>
                </div>
            </div>
        </div>
    </div>

   

</body>
</html>
@endsection