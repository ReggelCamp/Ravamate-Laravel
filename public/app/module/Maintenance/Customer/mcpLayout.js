import TableLoader from "../../../helper/TableLoader.js";
import "../../../helper/exportDataTable.js";
import DatePicker from "../../../helper/datePicker.js";
import ComponentHelper from "../../../helper/ComponentHelper.js";
import Api from "../../../helper/Api.js";

let getsalesmanId = null;
let store_id = null;

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
        data: null,
        render: function (row) {
            const frequency = row.mcp_layout;

            return frequency?.call_frequency ?? "---";
        },
    },
    {
        title: "Days of Visit",
        data: null,
        render: function (row) {
            const DaysOfVisit = row.mcp_layout;

            return DaysOfVisit?.days ?? "---";
        },
    },
    {
        title: "Week Visited",
        data: null,
        render: function (row) {
            const WeekOfVisit = row.mcp_layout;

            return WeekOfVisit?.week ?? "---";
        },
    },
    {
        title: "Time of Visit",
        data: null,
        render: function (row) {
            const timeOfVisit = row.mcp_layout;

            return timeOfVisit?.call_time ?? "---";
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
        url: "store/getStoreSalesman",

        filters: salesmanId
            ? { salesman_id: salesmanId }
            : {},

        tableId: "#mcpTable",
        columns: MCPColumns,

        onSuccess: (data) => {
            console.log("MCP data:", data);
        },
        clickable: true,

        onRowClick: (rowData) => {
            DisplayMcpLayout(rowData);
        }
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

        store_id = rowData.store_id;

        if (!rowData) return;

        console.log("Clicked row:", store_id);

        // DisplayMcpLayout(rowData);

    });

function DisplayMcpLayout(rowData) {
    const mcp = rowData.mcp_layout ?? {};   // null when the store has no layout row yet

    // state
    selectedFrequency = mcp.call_frequency ?? null;
    selectedDayOfWeek = mcp.days ?? null;
    weekVisited = mcp.week ? mcp.week.split(",") : [];
    timeOfVisit = mcp.call_time ? mcp.call_time.substring(0, 5) : null;

    // labels
    $("#update_frequency_label").text(selectedFrequency ? selectedFrequency.toUpperCase() : "Select");
    $("#update_daysOfVisit_label").text(selectedDayOfWeek ? selectedDayOfWeek.toUpperCase() : "Select");
    $("#update_weekVisited_label").text(weekVisited.length ? weekVisited.join(", ").toUpperCase() : "Select");
    $("#update_timeOfVisit").val(timeOfVisit ?? "");

    // tick the saved week checkboxes
    $("#weekVisitedTable input[type='checkbox']").each(function () {
        const val = $(this).data("id") || $(this).val();
        $(this).prop("checked", weekVisited.includes(val));
    });

    // info fields (unchanged)
    $("#salesmanCode").text(`GP0_${rowData.salesman_id}`);
    $("#CustCode").text(`${rowData.store_id}_GP`);
    $("#CustomerName").text(rowData.store_name);
    $("#Address").text(rowData.address);
    $("#lastUpdated").text(rowData.updated_at);

    $("#mcpLayoutModal")[0].showModal();
}

$('#update_timeOfVisit').on('click', function () {
    this.showPicker();
});

$(document).ready(function () {
    DatePicker.init();
});

let selectedFrequency = null;
let timeOfVisit = null;
let weekVisited = [];
let selectedDayOfWeek = null;

$(document).on("click", "#freqDropdown .dropdown-item", function (e) {
    e.preventDefault();
    selectedFrequency = $(this).data("id");
    $("#update_frequency_label").text($(this).text().trim());
    document.activeElement.blur(); // closes the DaisyUI dropdown
});

$(document).on("click", "#dayOfWeekTable .dropdown-item", function (e) {
    e.preventDefault();
    selectedDayOfWeek = $(this).data("id");  
    console.log("gvb",selectedDayOfWeek);
    $("#update_daysOfVisit_label").text($(this).text().trim());
    document.activeElement.blur(); // closes the DaisyUI dropdown 
});

$(document).on("change","#weekVisitedTable input[type='checkbox']",function () {

        weekVisited = $("#weekVisitedTable input[type='checkbox']:checked")
            .map(function () {
                return $(this).data("id") || $(this).val();
            })
            .get();
            
            $("#update_weekVisited_label").text(
            weekVisited.length
                ? weekVisited.join(", ").toUpperCase()
                : "---"
        );
        console.log("Week Visited:", weekVisited);
        // $("#update_weekVisited_label").text($(this).text().trim());
        // document.activeElement.blur(); // closes the DaisyUI dropdown 
    }
);

$("#update_timeOfVisit").on("change", function () {
    timeOfVisit = $(this).val();

    console.log("Selected time:", timeOfVisit);
});

$("#UpdateMcpBtn").on("click", function () {
    $("#mcpLayoutModal")[0].close();
    if (!selectedFrequency) {
        alert("Please select a frequency first.");
        return;
    }

    Swal.fire({
        title: 'Syncing…',
        text: 'Syncing transactions, please wait.',
        allowOutsideClick: false,
        didOpen: () => Swal.showLoading(),
    });

    Api.post({
        url: "mcp/updateMcpTable",
        data: {
            store_id: store_id,
            call_frequency: selectedFrequency,
            week: weekVisited.join(","),
            days: selectedDayOfWeek ,
            call_time: timeOfVisit
        },
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        onSuccess: (response) => {
            
            DisplayMcpTable(getsalesmanId);
            Swal.close();
        },
    });
});
