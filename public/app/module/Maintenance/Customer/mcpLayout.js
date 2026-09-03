import TableLoader from "../../../helper/TableLoader.js";
import "../../../helper/exportDataTable.js";
import DatePicker from "../../../helper/datePicker.js";
import ComponentHelper from "../../../helper/ComponentHelper.js";


const MCPColumns = [
    {
        title: "Salesman Code",
        data: "salesman_code"
    },
    {
        title: "Frequency",
        data: "frequency"
    },
    {
        title: "Days of Visit",
        data: "days_of_visit"
    },
    {
        title: "Week Visited",
        data: "week_visited"
    },
    {
        title: "Time of Visit",
        data: "time_of_visit"
    },
    {
        title: "CustCode",
        data: "cust_code"
    },
    {
        title: "CustName",
        data: "cust_name"
    },
    {
        title: "Address",
        data: "address"
    },
    {
        title: "Last Updated",
        data: "last_updated"
    },
    {
        title: "MCP Status",
        data: "mcp_status"
    },
    {
        title: "Active Flags",
        data: "active_flags"
    },
];

const MCPSampleData = [
    {
        salesman_code: "SM001",
        frequency: "Weekly",
        days_of_visit: "Monday",
        week_visited: "Every Week",
        time_of_visit: "08:00 AM - 10:00 AM",
        cust_code: "CUST001",
        cust_name: "ABC Trading",
        address: "123 Rizal St., Cebu City",
        last_updated: "Aug 05, 2026",
        mcp_status: "Active",
        active_flags: "Y"
    },
    {
        salesman_code: "SM002",
        frequency: "Bi-Weekly",
        days_of_visit: "Tuesday",
        week_visited: "Week 1 & 3",
        time_of_visit: "09:00 AM - 11:00 AM",
        cust_code: "CUST002",
        cust_name: "XYZ Enterprises",
        address: "45 Mango Ave., Mandaue City",
        last_updated: "Aug 06, 2026",
        mcp_status: "Active",
        active_flags: "Y"
    },
    {
        salesman_code: "SM003",
        frequency: "Weekly",
        days_of_visit: "Wednesday",
        week_visited: "Every Week",
        time_of_visit: "10:00 AM - 12:00 PM",
        cust_code: "CUST003",
        cust_name: "Sunrise Supermarket",
        address: "78 Colon St., Cebu City",
        last_updated: "Aug 06, 2026",
        mcp_status: "Active",
        active_flags: "Y"
    },
    {
        salesman_code: "SM004",
        frequency: "Monthly",
        days_of_visit: "Thursday",
        week_visited: "Week 2",
        time_of_visit: "01:00 PM - 03:00 PM",
        cust_code: "CUST004",
        cust_name: "Metro General Store",
        address: "21 Osmeña Blvd., Cebu City",
        last_updated: "Aug 07, 2026",
        mcp_status: "Inactive",
        active_flags: "N"
    },
    {
        salesman_code: "SM005",
        frequency: "Bi-Weekly",
        days_of_visit: "Friday",
        week_visited: "Week 2 & 4",
        time_of_visit: "02:00 PM - 04:00 PM",
        cust_code: "CUST005",
        cust_name: "Golden Harvest Foods",
        address: "56 Lahug Rd., Cebu City",
        last_updated: "Aug 08, 2026",
        mcp_status: "Active",
        active_flags: "Y"
    },
    {
        salesman_code: "SM006",
        frequency: "Weekly",
        days_of_visit: "Saturday",
        week_visited: "Every Week",
        time_of_visit: "08:30 AM - 10:30 AM",
        cust_code: "CUST006",
        cust_name: "Cebu Prime Mart",
        address: "15 Banilad Rd., Cebu City",
        last_updated: "Aug 08, 2026",
        mcp_status: "Pending",
        active_flags: "N"
    },
    {
        salesman_code: "SM001",
        frequency: "Weekly",
        days_of_visit: "Monday",
        week_visited: "Every Week",
        time_of_visit: "08:00 AM - 10:00 AM",
        cust_code: "CUST001",
        cust_name: "ABC Trading",
        address: "123 Rizal St., Cebu City",
        last_updated: "Aug 05, 2026",
        mcp_status: "Active",
        active_flags: "Y"
    },
    {
        salesman_code: "SM002",
        frequency: "Bi-Weekly",
        days_of_visit: "Tuesday",
        week_visited: "Week 1 & 3",
        time_of_visit: "09:00 AM - 11:00 AM",
        cust_code: "CUST002",
        cust_name: "XYZ Enterprises",
        address: "45 Mango Ave., Mandaue City",
        last_updated: "Aug 06, 2026",
        mcp_status: "Active",
        active_flags: "Y"
    },
    {
        salesman_code: "SM003",
        frequency: "Weekly",
        days_of_visit: "Wednesday",
        week_visited: "Every Week",
        time_of_visit: "10:00 AM - 12:00 PM",
        cust_code: "CUST003",
        cust_name: "Sunrise Supermarket",
        address: "78 Colon St., Cebu City",
        last_updated: "Aug 06, 2026",
        mcp_status: "Active",
        active_flags: "Y"
    },
    {
        salesman_code: "SM004",
        frequency: "Monthly",
        days_of_visit: "Thursday",
        week_visited: "Week 2",
        time_of_visit: "01:00 PM - 03:00 PM",
        cust_code: "CUST004",
        cust_name: "Metro General Store",
        address: "21 Osmeña Blvd., Cebu City",
        last_updated: "Aug 07, 2026",
        mcp_status: "Inactive",
        active_flags: "N"
    },
    {
        salesman_code: "SM005",
        frequency: "Bi-Weekly",
        days_of_visit: "Friday",
        week_visited: "Week 2 & 4",
        time_of_visit: "02:00 PM - 04:00 PM",
        cust_code: "CUST005",
        cust_name: "Golden Harvest Foods",
        address: "56 Lahug Rd., Cebu City",
        last_updated: "Aug 08, 2026",
        mcp_status: "Active",
        active_flags: "Y"
    },
    {
        salesman_code: "SM006",
        frequency: "Weekly",
        days_of_visit: "Saturday",
        week_visited: "Every Week",
        time_of_visit: "08:30 AM - 10:30 AM",
        cust_code: "CUST006",
        cust_name: "Cebu Prime Mart",
        address: "15 Banilad Rd., Cebu City",
        last_updated: "Aug 08, 2026",
        mcp_status: "Pending",
        active_flags: "N"
    },
    {
        salesman_code: "SM001",
        frequency: "Weekly",
        days_of_visit: "Monday",
        week_visited: "Every Week",
        time_of_visit: "08:00 AM - 10:00 AM",
        cust_code: "CUST001",
        cust_name: "ABC Trading",
        address: "123 Rizal St., Cebu City",
        last_updated: "Aug 05, 2026",
        mcp_status: "Active",
        active_flags: "Y"
    },
    {
        salesman_code: "SM002",
        frequency: "Bi-Weekly",
        days_of_visit: "Tuesday",
        week_visited: "Week 1 & 3",
        time_of_visit: "09:00 AM - 11:00 AM",
        cust_code: "CUST002",
        cust_name: "XYZ Enterprises",
        address: "45 Mango Ave., Mandaue City",
        last_updated: "Aug 06, 2026",
        mcp_status: "Active",
        active_flags: "Y"
    },
    {
        salesman_code: "SM003",
        frequency: "Weekly",
        days_of_visit: "Wednesday",
        week_visited: "Every Week",
        time_of_visit: "10:00 AM - 12:00 PM",
        cust_code: "CUST003",
        cust_name: "Sunrise Supermarket",
        address: "78 Colon St., Cebu City",
        last_updated: "Aug 06, 2026",
        mcp_status: "Active",
        active_flags: "Y"
    },
    {
        salesman_code: "SM004",
        frequency: "Monthly",
        days_of_visit: "Thursday",
        week_visited: "Week 2",
        time_of_visit: "01:00 PM - 03:00 PM",
        cust_code: "CUST004",
        cust_name: "Metro General Store",
        address: "21 Osmeña Blvd., Cebu City",
        last_updated: "Aug 07, 2026",
        mcp_status: "Inactive",
        active_flags: "N"
    },
    {
        salesman_code: "SM005",
        frequency: "Bi-Weekly",
        days_of_visit: "Friday",
        week_visited: "Week 2 & 4",
        time_of_visit: "02:00 PM - 04:00 PM",
        cust_code: "CUST005",
        cust_name: "Golden Harvest Foods",
        address: "56 Lahug Rd., Cebu City",
        last_updated: "Aug 08, 2026",
        mcp_status: "Active",
        active_flags: "Y"
    },
    {
        salesman_code: "SM006",
        frequency: "Weekly",
        days_of_visit: "Saturday",
        week_visited: "Every Week",
        time_of_visit: "08:30 AM - 10:30 AM",
        cust_code: "CUST006",
        cust_name: "Cebu Prime Mart",
        address: "15 Banilad Rd., Cebu City",
        last_updated: "Aug 08, 2026",
        mcp_status: "Pending",
        active_flags: "N"
    },
];

const FrequencyItems = [
    {
        title: "F2",
        data: "f2"   
    },
    {
        title: "F4",
        data: "f4"   
    }
]

const DaysOfVisit = [
    {
        title: "MONDAY",
        data: "monday"
    },
    {
        title: "TUESDAY",
        data: "tuesday"
    },
    {
        title: "WEDNESDAY",
        data: "wednesday"
    },
    {
        title: "THURSDAY",
        data: "thursday"
    },
    {
        title: "FRIDAY",
        data: "friday"
    },
    {
        title: "SATURDAY",
        data: "saturday"
    },
    {
        title: "SUNDAY",
        data: "sunday"
    },
]

TableLoader.tableData(
    "#mcpTable",
    MCPSampleData,
    MCPColumns,
    {
        // scrollY: "calc(100vh - 400px)",

        // pageLength:25
    }
);

$(document).ready(function () {
    DatePicker.init();
});

ComponentHelper.dropdown().loadByApi({
    url: "/salesmen",
    dropdownId: "mcpItems",
    noDataText: "No SalesMan Found",
    displayField: "salesman_name",
    dataField: "salesman_id",
});

ComponentHelper.dropdown().load({
    json: FrequencyItems,
    dropdownId: "freqDropdown",
    displayField: "title",   // whatever key on each FrequencyItems object holds the label
    dataField: "data",        // whatever key holds the value to use as data-id
    noDataText: "No Frequency Found"
});

ComponentHelper.dropdown().load({
    json: DaysOfVisit,
    dropdownId: "dayOfWeek",
    displayField: "title",   // whatever key on each FrequencyItems object holds the label
    dataField: "data",        // whatever key holds the value to use as data-id
    noDataText: "No Days Found"
});

ComponentHelper.dropdown().load({
    json: DaysOfVisit,
    dropdownId: "dayOfWeekTable",
    displayField: "title",   // whatever key on each FrequencyItems object holds the label
    dataField: "data",        // whatever key holds the value to use as data-id
    noDataText: "No Days Found"
});

ComponentHelper.dropdown().LoadCheckbox({
    json: DaysOfVisit,
    dropdownId: "weekVisitedDropdown",
    displayField: "title",   // whatever key on each FrequencyItems object holds the label
    dataField: "data",        // whatever key holds the value to use as data-id
    noDataText: "No Days Found"
});

ComponentHelper.dropdown().LoadCheckbox({
    json: DaysOfVisit,
    dropdownId: "weekVisitedTable",
    displayField: "title",   // whatever key on each FrequencyItems object holds the label
    dataField: "data",        // whatever key holds the value to use as data-id
    noDataText: "No Days Found"
});

$(document)
    .off("click.mcpLayoutRow", "#mcpTable tbody tr")
    .on("click.mcpLayoutRow", "#mcpTable tbody tr", function () {
        // salesman.js loads the data asynchronously; ensure DataTable is ready
        if (!$.fn.DataTable.isDataTable("#mcpTable")) return;

        const mcpLayoutTable = $("#mcpTable").DataTable();
        const rowData = mcpLayoutTable.row(this).data();

        if (!rowData) return;

        console.log("Clicked row:", rowData);

        DisplayMcpLayout(rowData);
    });

function DisplayMcpLayout(rowData) {
    // Open modal
    $("#mcpLayoutModal")[0].showModal();
}

$('#update_timeOfVisit').on('click', function () {
    this.showPicker();
});