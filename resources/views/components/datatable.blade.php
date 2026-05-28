{{-- <script src="https://cdn.datatables.net/2.3.1/js/dataTables.min.js"></script> --}}

{{-- <script>
    $(document).ready(function () {
        $('#salesmanTable').DataTable({
            searching: false,
            ordering: false,
            lengthChange: false,
            responsive: true
        });
    });
</script> --}}

<style>
    /* center everything by default */
    #salesmanTable th,
    #salesmanTable td {
        text-align: center !important;
        vertical-align: middle;
    }

    /* first column (name) stays left */
    #salesmanTable th:first-child,
    #salesmanTable td:first-child {
        text-align: left !important;
    }
</style>

<div class="w-full text-sm ">
    <table id="salesmanTable" class="w-full bg-gray-400 bodyColor">

        {{-- <thead>
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
        </thead> --}}

        {{-- <tbody id="tableBody">

        </tbody> --}}

    </table>
</div>