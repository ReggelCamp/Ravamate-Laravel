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