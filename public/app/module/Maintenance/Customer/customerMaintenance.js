import TableLoader from "../../../helper/TableLoader.js";
import DatePicker from "../../../helper/datePicker.js";
import "../../../helper/exportDataTable.js";

const CustomerListColumns = [
    {
        title: "Salesman",
        data: null,
        render(row) {
            const salesman = row?.salesman_details;
            return salesman?.id ?? "-";
        }
    },
    {
        title: "Salesman Name",
        data: null,
        render(row){
            const salesman = row?.salesman_details;
            // console.log("fg",row);
            return salesman?.salesman_name ?? "-";
        }
    },
    {
        title: "Customer Code",
        data: null,
        render(row){
            console.log("ggg",row);
            const store = row?.store_details

            return store?.customercode ?? "-";
        }
    },
    {
        title: "Customer Name",
        data: null,
        render(row){
            console.log("ggg",row);
            const store = row?.store_details

            return store?.store_name ?? "-";
        }
    },
    {
        title: "Address",
        data: null,
        render(row){
            console.log("ggg",row);
            const store = row?.store_details

            // return store?.customercode ?? "-";
            return "-";
        }
    },
    {
        title: "Contact Person",
        data: null,
        render(row){
            console.log("ggg",row);
            const store = row?.store_details

            return store?.contact_person ?? "-";
        }
    },
    {
        title: "Contact #",
        data: null,
        render(row){
            console.log("ggg",row);
            const store = row?.store_details

            return store?.mobile_no ?? "-";
        }
    },
    {
        title: "Landline",
        data: null,
        render(row){
            console.log("ggg",row);
            const store = row?.store_details

            return store?.landline_no ?? "-";
        }
    },
    {
        title: "Customer Type",
        data: null,
        render(row){
            console.log("ggg",row);
            const store = row?.store_details

            return store?.order_type ?? "-";
        }
    },
    {
        title: "Freq. Cat.",
        data: "call_frequency"
    },
    {
        title: "MCP Day",
        data: "days"
    },
    {
        title: "MCP Schedule",
        data: "week"
    },
    {
        title: "Price Code",
        data: "price_code"
    },
];


function Displaysalesman(){
    TableLoader.loadTable({
        url: "mcp/getSalesmanMcp",
        tableId: "#customerMaintenance",
        columns:CustomerListColumns,
    });
}

Displaysalesman();

$(document).ready(function () {
    DatePicker.init();
});

$(document)
    .off("click.customerMaintenanceRow", "#customerMaintenance tbody tr")
    .on("click.customerMaintenanceRow", "#customerMaintenance tbody tr", function () {
        // salesman.js loads the data asynchronously; ensure DataTable is ready
        if (!$.fn.DataTable.isDataTable("#customerMaintenance")) return;

        const customerMaintenance = $("#customerMaintenance").DataTable();
        const rowData = customerMaintenance.row(this).data();

        if (!rowData) return;

        console.log("Clicked row:", rowData);

        DisplayCustomerInfo(rowData);
    });

function DisplayCustomerInfo(rowData) {
    const fields = [
        "salesman_name", "customer_name", "contact", "landline",
        "contact_person", "address", "customer_type", "mcp_day",
        "freq_cat", "mcp_schedule", "price_code"
    ];

    fields.forEach((field) => {
        const value = rowData[field];
        $(`#customerModalBody [data-field="${field}"]`).text(
            value !== undefined && value !== null && value !== "" ? value : "—"
        );
    });

    $("#customerModal")[0].showModal();
}