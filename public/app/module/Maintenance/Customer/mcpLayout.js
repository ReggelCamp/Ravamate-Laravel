import TableLoader from "../../../helper/TableLoader.js";
import "../../../helper/exportDataTable.js";
import DatePicker from "../../../helper/datePicker.js";
import ComponentHelper from "../../../helper/ComponentHelper.js";

let getsalesmanId = null;

const MCPColumns = [
    {
        title: "Salesman Code",
        data: "salesman_id",
        render: function (data) {
            if (!data) {
                return "---";
            }

            return data;
        },
    },
    {
        title: "Frequency",
        data: "frequency",
        render: function (data) {
            if (!data) {
                return "---";
            }

            return data;
        },
    },
    {
        title: "Days of Visit",
        data: "days_of_visit",
        render: function (data) {
            if (!data) {
                return "---";
            }

            return data;
        },
    },
    {
        title: "Week Visited",
        data: "week_visited",
        render: function (data) {
            if (!data) {
                return "---";
            }

            return data;
        },
    },
    {
        title: "Time of Visit",
        data: "time_of_visit",
        render: function (data) {
            if (!data) {
                return "---";
            }

            return data;
        },
    },
    {
        title: "CustCode",
        data: "customercode",
        render: function (data) {
            if (!data) {
                return "---";
            }

            return data;
        },
    },
    {
        title: "CustName",
        data: "store_name",
        render: function (data) {
            if (!data) {
                return "---";
            }

            return data;
        },
    },
    {
        title: "Address",
        data: "address",
        render: function (data) {
            if (!data) {
                return "---";
            }

            return data;
        },
    },
    {
        title: "Last Updated",
        data: "updated_at",
        render: function (data) {
            if (!data) {
                return "---";
            }

            return moment(data).format("MMM DD, YYYY");
        },
    },
    {
        title: "MCP Status",
        data: "mcp_status",
        render: function (data) {
            if (!data) {
                return "---";
            }

            return data;
        },
    },
    {
        title: "Active Flags",
        data: "active_flags",
        render: function (data) {
            if (!data) {
                return "---";
            }

            return data;
        },
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

function DisplayMcpTable(salesmanId = null) {
    console.log("Loading MCP table for:", salesmanId);

    if ($.fn.DataTable.isDataTable("#mcpTable")) {
        $("#mcpTable").DataTable().destroy();
    }

    TableLoader.loadTable({
        url: "mcp/getSalesmanMcp",

        filters: salesmanId
            ? { salesman_id: salesmanId }
            : {},

        tableId: "#mcpTable",
        columns: MCPColumns,

        onSuccess: (data) => {
            console.log("MCP data:", data);
        },
    });
}

ComponentHelper.dropdown().loadByApi({
    url: "salesman/getSalesmanStore",
    dropdownId: "mcpItems",
    noDataText: "No SalesMan Found",
    displayField: "salesman_name",
    dataField: "id",
});

DisplayMcpTable();

$(document).on("click", "#mcpItems .dropdown-item", function (e) {
    e.preventDefault();

    getsalesmanId = $(this).data("id");

    console.log("Selected salesman ID:", getsalesmanId);

    
    DisplayMcpTable(getsalesmanId);

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

$(document).ready(function () {
    DatePicker.init();
});

$("#UpdateMcpBtn").on("click",function(){
    // freqDropdown
});