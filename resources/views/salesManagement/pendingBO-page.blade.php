<x-index title="PendingBo"/>
     <script src="https://cdn.datatables.net/2.3.1/js/dataTables.min.js"></script> 

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
window.onload = function () {

    if (window.location.pathname === "/pendingbo") {

        $("#datepicker").remove();
    }
}
</script>

<div class="flex w-full h-[50px] justify-between items-center pl-2 pr-2 bg-blue-500">
    <div class="w-full h-full items-center ">
        <x-report-header-title title="Bad orders for approval" />
    </div>
    <div class="w-fit h-[30px]">
        <x-datepicker/>
    </div>
</div>
<body class="w-full h-full">
    <div class="w-full p-5">

    <!-- Tabs -->
    <div class="flex gap-2 border-b">

        <button 
            data-id="#pendingbo"
            class="tab_btn px-4 py-2 bg-blue-500 text-white rounded-t-lg">
            Pending BO
        </button>

        <button 
            data-id="#rejectbo"
            class="tab_btn px-4 py-2 bg-gray-200 rounded-t-lg">
            Reject BO
        </button>

        <button 
            data-id="#approvedbo"
            class="tab_btn px-4 py-2 bg-gray-200 rounded-t-lg">
            Approved BO
        </button>

    </div>

    <!-- Tab Contents -->
    <div class="p-5 border bt-none">

        <div id="pendingbo" class="tab-content">
           <div class="flex flex-col w-full h-full ">

                <div class="flex w-full  h-full gap-3 justify-end">

                     <div id="dateppick" class=" flex h-[30px] ">
                        <button class="border  flex w-[150px] h-full  rounded-2xl items-center justify-center" id="dateButton"> Filter by date </button>
                        <script>
                    
                        $(function () {
                            $('#dateButton').daterangepicker({
                                showWeekNumbers: false,
                                alwaysShowCalendars: true,
                                autoUpdateInput: false,
                                opens: 'left',

                                locale: {
                                    format: 'MMM DD, YYYY',
                                    cancelLabel: 'Clear'
                                },

                                ranges: {
                                    'Today': [moment(), moment()],
                                    'Last 7 Days': [moment().subtract(6, 'days'), moment()],
                                    'This Month': [moment().startOf('month'), moment().endOf('month')]
                                }

                            }, function(start, end) {

                                // Change button text
                                if (start.format('L') == end.format('L')) {
                                    $('#dateButton').text(start.format('ll'));
                                } else {
                                    $('#dateButton').text(
                                        `${start.format('ll')} -> ${end.format('ll')}`
                                    );
                                }

                            });

                        });
                        </script>
                    </div>

                    <div class=" h-full flex">
                         <el-dropdown class="inline-block">
                            <button class="inline-flex w-full h-[30px] items-center justify-center gap-x-1.5 rounded-md bg-gray-600 text-white px-3 py-2 text-sm font-semibold shadow-sm 0">
                                Export
                                <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" class="-mr-1 size-5 text-gray-400">
                                <path d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" fill-rule="evenodd" />
                                </svg>
                            </button>
                            <el-menu anchor="bottom end" popover class="w-56 origin-top-right divide-y divide-white/10 rounded-md bg-gray-800 outline-1 -outline-offset-1 outline-white/10 transition transition-discrete [--anchor-gap:--spacing(2)] data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in">
                                <div class="py-1">
                                    <a href="#" class="block px-4 py-2 text-sm text-gray-300 focus:bg-white/5 focus:text-white focus:outline-hidden">Edit</a>
                                    <a href="#" class="block px-4 py-2 text-sm text-gray-300 focus:bg-white/5 focus:text-white focus:outline-hidden">Duplicate</a>
                                </div>
                            </el-menu>
                        </el-dropdown>
                    </div>

                        <div class=" h-full ">
                             <input type="text" class="border rounded p-2 h-[30px]" placeholder="Search...">
                        </div>
                </div>
                <div class="w-full text-sm p-5">
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

        <div id="rejectbo" class="tab-content hidden">
            <div class="flex flex-col w-full h-full ">

                <div class="flex w-full  h-full gap-3 justify-end">

                     <div id="dateppick" class=" flex h-[30px] ">
                        <button class="border  flex w-[150px] h-full  rounded-2xl items-center justify-center" id="dateButton"> Filter by date </button>
                        <script>
                    
                        $(function () {
                            $('#dateButton').daterangepicker({
                                showWeekNumbers: false,
                                alwaysShowCalendars: true,
                                autoUpdateInput: false,
                                opens: 'left',

                                locale: {
                                    format: 'MMM DD, YYYY',
                                    cancelLabel: 'Clear'
                                },

                                ranges: {
                                    'Today': [moment(), moment()],
                                    'Last 7 Days': [moment().subtract(6, 'days'), moment()],
                                    'This Month': [moment().startOf('month'), moment().endOf('month')]
                                }

                            }, function(start, end) {

                                // Change button text
                                if (start.format('L') == end.format('L')) {
                                    $('#dateButton').text(start.format('ll'));
                                } else {
                                    $('#dateButton').text(
                                        `${start.format('ll')} -> ${end.format('ll')}`
                                    );
                                }

                            });

                        });
                        </script>
                    </div>

                    <div class=" h-full flex">
                         <el-dropdown class="inline-block">
                            <button class="inline-flex w-full h-[30px] items-center justify-center gap-x-1.5 rounded-md bg-gray-600 text-white px-3 py-2 text-sm font-semibold shadow-sm 0">
                                Export
                                <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" class="-mr-1 size-5 text-gray-400">
                                <path d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" fill-rule="evenodd" />
                                </svg>
                            </button>
                            <el-menu anchor="bottom end" popover class="w-56 origin-top-right divide-y divide-white/10 rounded-md bg-gray-800 outline-1 -outline-offset-1 outline-white/10 transition transition-discrete [--anchor-gap:--spacing(2)] data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in">
                                <div class="py-1">
                                    <a href="#" class="block px-4 py-2 text-sm text-gray-300 focus:bg-white/5 focus:text-white focus:outline-hidden">Edit</a>
                                    <a href="#" class="block px-4 py-2 text-sm text-gray-300 focus:bg-white/5 focus:text-white focus:outline-hidden">Duplicate</a>
                                </div>
                            </el-menu>
                        </el-dropdown>
                    </div>

                        <div class=" h-full ">
                             <input type="text" class="border rounded p-2 h-[30px]" placeholder="Search...">
                        </div>
                </div>
                <div class="w-full text-sm p-5">
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

        <div id="approvedbo" class="tab-content hidden">
            <div class="flex flex-col w-full h-full ">

                <div class="flex w-full  h-full gap-3 justify-end">

                     <div id="dateppick" class=" flex h-[30px] ">
                        <button class="border  flex w-[150px] h-full  rounded-2xl items-center justify-center" id="dateButton"> Filter by date </button>
                        <script>
                    
                        $(function () {
                            $('#dateButton').daterangepicker({
                                showWeekNumbers: false,
                                alwaysShowCalendars: true,
                                autoUpdateInput: false,
                                opens: 'left',

                                locale: {
                                    format: 'MMM DD, YYYY',
                                    cancelLabel: 'Clear'
                                },

                                ranges: {
                                    'Today': [moment(), moment()],
                                    'Last 7 Days': [moment().subtract(6, 'days'), moment()],
                                    'This Month': [moment().startOf('month'), moment().endOf('month')]
                                }

                            }, function(start, end) {

                                // Change button text
                                if (start.format('L') == end.format('L')) {
                                    $('#dateButton').text(start.format('ll'));
                                } else {
                                    $('#dateButton').text(
                                        `${start.format('ll')} -> ${end.format('ll')}`
                                    );
                                }

                            });

                        });
                        </script>
                    </div>

                    <div class=" h-full flex">
                         <el-dropdown class="inline-block">
                            <button class="inline-flex w-full h-[30px] items-center justify-center gap-x-1.5 rounded-md bg-gray-600 text-white px-3 py-2 text-sm font-semibold shadow-sm 0">
                                Export
                                <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" class="-mr-1 size-5 text-gray-400">
                                <path d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" fill-rule="evenodd" />
                                </svg>
                            </button>
                            <el-menu anchor="bottom end" popover class="w-56 origin-top-right divide-y divide-white/10 rounded-md bg-gray-800 outline-1 -outline-offset-1 outline-white/10 transition transition-discrete [--anchor-gap:--spacing(2)] data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in">
                                <div class="py-1">
                                    <a href="#" class="block px-4 py-2 text-sm text-gray-300 focus:bg-white/5 focus:text-white focus:outline-hidden">Edit</a>
                                    <a href="#" class="block px-4 py-2 text-sm text-gray-300 focus:bg-white/5 focus:text-white focus:outline-hidden">Duplicate</a>
                                </div>
                            </el-menu>
                        </el-dropdown>
                    </div>

                        <div class=" h-full ">
                             <input type="text" class="border rounded p-2 h-[30px]" placeholder="Search...">
                        </div>
                </div>
                <div class="w-full text-sm p-5">
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

    </div>

</div>

<script>
    $(document).ready(() => {
        $('.tab_btn').on('click', function(){
            $('.tab_btn').addClass('bg-gray-200');
            $('.tab_btn').removeClass('text-white');

            $('.tab-content').addClass('hidden');
            $($(this).data().id).removeClass('hidden');

            $(this).removeClass('bg-gray-200');
            $(this).addClass('bg-blue-500 text-white');
        });
    });
</script>
</body>