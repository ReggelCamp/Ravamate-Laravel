// import TableLoader from "../../helper/TableLoader.js";

// const StockRequestColumns = [
//     {
//         title: "Status",
//         data: "status"
//     },
//     {
//         title: "Salesman",
//         data: "salesman"
//     },
//     {
//         title: "Date",
//         data: "date"
//     },
//     {
//         title: "Custcode",
//         data: "custcode"
//     },
//     {
//         title: "Customer",
//         data: "customer"
//     },
//     {
//         title: "Document No.",
//         data: "document_no"
//     },
//     {
//         title: "Range",
//         data: "range"
//     },
//     {
//         title: "Time Travel (Min.)",
//         data: "time_travel"
//     },
//     {
//         title: "Time Spent (Min.)",
//         data: "time_spent"
//     },
//     {
//         title: "Geo Difference",
//         data: "geo_difference"
//     },
//     {
//         title: "Longitude",
//         data: "longitude"
//     },
//     {
//         title: "Latitude",
//         data: "latitude"
//     },
//     {
//         title: "Remarks",
//         data: "remarks"
//     },
//     {
//         title: "Payment Type",
//         data: "payment_type"
//     },
//     {
//         title: "Sales",
//         data: "sales"
//     }
// ];

// TableLoader.tableData(
//     "#salesReportTable",
//     [],
//     StockRequestColumns
// );

import ComponentHelper from "../../helper/ComponentHelper.js";
import TableLoader from "../../helper/TableLoader.js";
import DatePicker from "../../helper/datePicker.js";
import "../../helper/exportDataTable.js";

const StockRequestColumns = [
    {
        title: "Status",
        data: "status"
    },
    {
        title: "Salesman",
        data: "salesman"
    },
    {
        title: "Date",
        data: "date"
    },
    {
        title: "Custcode",
        data: "custcode"
    },
    {
        title: "Customer",
        data: "customer"
    },
    {
        title: "Document No.",
        data: "document_no"
    },
    {
        title: "Range",
        data: "range"
    },
    {
        title: "Time Travel (Min.)",
        data: "time_travel"
    },
    {
        title: "Time Spent (Min.)",
        data: "time_spent"
    },
    {
        title: "Geo Difference",
        data: "geo_difference"
    },
    {
        title: "Longitude",
        data: "longitude"
    },
    {
        title: "Latitude",
        data: "latitude"
    },
    {
        title: "Remarks",
        data: "remarks"
    },
    {
        title: "Payment Type",
        data: "payment_type"
    },
    {
        title: "Sales",
        data: "sales"
    }
];

const sampleData = [
    {
        status: "Completed",
        salesman: "Juan Dela Cruz",
        date: "2026-08-05",
        custcode: "CUST001",
        customer: "ABC Store",
        document_no: "DOC-10001",
        range: "120 m",
        time_travel: 15,
        time_spent: 35,
        geo_difference: "5 m",
        longitude: "123.8854",
        latitude: "10.3157",
        remarks: "Successful visit",
        payment_type: "Cash",
        sales: "₱12,500.00"
    },
    {
        status: "Completed",
        salesman: "Maria Santos",
        date: "2026-08-05",
        custcode: "CUST002",
        customer: "XYZ Mart",
        document_no: "DOC-10002",
        range: "250 m",
        time_travel: 20,
        time_spent: 40,
        geo_difference: "10 m",
        longitude: "123.9226",
        latitude: "10.3231",
        remarks: "Collected payment",
        payment_type: "Credit",
        sales: "₱8,750.00"
    },
    {
        status: "Pending",
        salesman: "Pedro Reyes",
        date: "2026-08-04",
        custcode: "CUST003",
        customer: "LMN Grocery",
        document_no: "DOC-10003",
        range: "90 m",
        time_travel: 10,
        time_spent: 25,
        geo_difference: "3 m",
        longitude: "123.9498",
        latitude: "10.3102",
        remarks: "Awaiting payment",
        payment_type: "Charge",
        sales: "₱15,300.00"
    },
    {
        status: "Cancelled",
        salesman: "Ana Garcia",
        date: "2026-08-03",
        custcode: "CUST004",
        customer: "Fresh Market",
        document_no: "DOC-10004",
        range: "180 m",
        time_travel: 18,
        time_spent: 15,
        geo_difference: "20 m",
        longitude: "123.9021",
        latitude: "10.2915",
        remarks: "Customer unavailable",
        payment_type: "N/A",
        sales: "₱0.00"
    },
    {
        status: "Completed",
        salesman: "Jose Lim",
        date: "2026-08-02",
        custcode: "CUST005",
        customer: "Corner Shop",
        document_no: "DOC-10005",
        range: "75 m",
        time_travel: 8,
        time_spent: 30,
        geo_difference: "2 m",
        longitude: "123.9412",
        latitude: "10.3378",
        remarks: "Delivered successfully",
        payment_type: "GCash",
        sales: "₱20,100.00"
    },
    {
        status: "Completed",
        salesman: "Juan Dela Cruz",
        date: "2026-08-05",
        custcode: "CUST001",
        customer: "ABC Store",
        document_no: "DOC-10001",
        range: "120 m",
        time_travel: 15,
        time_spent: 35,
        geo_difference: "5 m",
        longitude: "123.8854",
        latitude: "10.3157",
        remarks: "Successful visit",
        payment_type: "Cash",
        sales: "₱12,500.00"
    },
    {
        status: "Completed",
        salesman: "Maria Santos",
        date: "2026-08-05",
        custcode: "CUST002",
        customer: "XYZ Mart",
        document_no: "DOC-10002",
        range: "250 m",
        time_travel: 20,
        time_spent: 40,
        geo_difference: "10 m",
        longitude: "123.9226",
        latitude: "10.3231",
        remarks: "Collected payment",
        payment_type: "Credit",
        sales: "₱8,750.00"
    },
    {
        status: "Pending",
        salesman: "Pedro Reyes",
        date: "2026-08-04",
        custcode: "CUST003",
        customer: "LMN Grocery",
        document_no: "DOC-10003",
        range: "90 m",
        time_travel: 10,
        time_spent: 25,
        geo_difference: "3 m",
        longitude: "123.9498",
        latitude: "10.3102",
        remarks: "Awaiting payment",
        payment_type: "Charge",
        sales: "₱15,300.00"
    },
    {
        status: "Cancelled",
        salesman: "Ana Garcia",
        date: "2026-08-03",
        custcode: "CUST004",
        customer: "Fresh Market",
        document_no: "DOC-10004",
        range: "180 m",
        time_travel: 18,
        time_spent: 15,
        geo_difference: "20 m",
        longitude: "123.9021",
        latitude: "10.2915",
        remarks: "Customer unavailable",
        payment_type: "N/A",
        sales: "₱0.00"
    },
    {
        status: "Completed",
        salesman: "Jose Lim",
        date: "2026-08-02",
        custcode: "CUST005",
        customer: "Corner Shop",
        document_no: "DOC-10005",
        range: "75 m",
        time_travel: 8,
        time_spent: 30,
        geo_difference: "2 m",
        longitude: "123.9412",
        latitude: "10.3378",
        remarks: "Delivered successfully",
        payment_type: "GCash",
        sales: "₱20,100.00"
    },
    {
        status: "Completed",
        salesman: "Juan Dela Cruz",
        date: "2026-08-05",
        custcode: "CUST001",
        customer: "ABC Store",
        document_no: "DOC-10001",
        range: "120 m",
        time_travel: 15,
        time_spent: 35,
        geo_difference: "5 m",
        longitude: "123.8854",
        latitude: "10.3157",
        remarks: "Successful visit",
        payment_type: "Cash",
        sales: "₱12,500.00"
    },
    {
        status: "Completed",
        salesman: "Maria Santos",
        date: "2026-08-05",
        custcode: "CUST002",
        customer: "XYZ Mart",
        document_no: "DOC-10002",
        range: "250 m",
        time_travel: 20,
        time_spent: 40,
        geo_difference: "10 m",
        longitude: "123.9226",
        latitude: "10.3231",
        remarks: "Collected payment",
        payment_type: "Credit",
        sales: "₱8,750.00"
    },
    {
        status: "Pending",
        salesman: "Pedro Reyes",
        date: "2026-08-04",
        custcode: "CUST003",
        customer: "LMN Grocery",
        document_no: "DOC-10003",
        range: "90 m",
        time_travel: 10,
        time_spent: 25,
        geo_difference: "3 m",
        longitude: "123.9498",
        latitude: "10.3102",
        remarks: "Awaiting payment",
        payment_type: "Charge",
        sales: "₱15,300.00"
    },
    {
        status: "Cancelled",
        salesman: "Ana Garcia",
        date: "2026-08-03",
        custcode: "CUST004",
        customer: "Fresh Market",
        document_no: "DOC-10004",
        range: "180 m",
        time_travel: 18,
        time_spent: 15,
        geo_difference: "20 m",
        longitude: "123.9021",
        latitude: "10.2915",
        remarks: "Customer unavailable",
        payment_type: "N/A",
        sales: "₱0.00"
    },
    {
        status: "Completed",
        salesman: "Jose Lim",
        date: "2026-08-02",
        custcode: "CUST005",
        customer: "Corner Shop",
        document_no: "DOC-10005",
        range: "75 m",
        time_travel: 8,
        time_spent: 30,
        geo_difference: "2 m",
        longitude: "123.9412",
        latitude: "10.3378",
        remarks: "Delivered successfully",
        payment_type: "GCash",
        sales: "₱20,100.00"
    },
    {
        status: "Completed",
        salesman: "Juan Dela Cruz",
        date: "2026-08-05",
        custcode: "CUST001",
        customer: "ABC Store",
        document_no: "DOC-10001",
        range: "120 m",
        time_travel: 15,
        time_spent: 35,
        geo_difference: "5 m",
        longitude: "123.8854",
        latitude: "10.3157",
        remarks: "Successful visit",
        payment_type: "Cash",
        sales: "₱12,500.00"
    },
    {
        status: "Completed",
        salesman: "Maria Santos",
        date: "2026-08-05",
        custcode: "CUST002",
        customer: "XYZ Mart",
        document_no: "DOC-10002",
        range: "250 m",
        time_travel: 20,
        time_spent: 40,
        geo_difference: "10 m",
        longitude: "123.9226",
        latitude: "10.3231",
        remarks: "Collected payment",
        payment_type: "Credit",
        sales: "₱8,750.00"
    },
    {
        status: "Pending",
        salesman: "Pedro Reyes",
        date: "2026-08-04",
        custcode: "CUST003",
        customer: "LMN Grocery",
        document_no: "DOC-10003",
        range: "90 m",
        time_travel: 10,
        time_spent: 25,
        geo_difference: "3 m",
        longitude: "123.9498",
        latitude: "10.3102",
        remarks: "Awaiting payment",
        payment_type: "Charge",
        sales: "₱15,300.00"
    },
    {
        status: "Cancelled",
        salesman: "Ana Garcia",
        date: "2026-08-03",
        custcode: "CUST004",
        customer: "Fresh Market",
        document_no: "DOC-10004",
        range: "180 m",
        time_travel: 18,
        time_spent: 15,
        geo_difference: "20 m",
        longitude: "123.9021",
        latitude: "10.2915",
        remarks: "Customer unavailable",
        payment_type: "N/A",
        sales: "₱0.00"
    },
    {
        status: "Completed",
        salesman: "Jose Lim",
        date: "2026-08-02",
        custcode: "CUST005",
        customer: "Corner Shop",
        document_no: "DOC-10005",
        range: "75 m",
        time_travel: 8,
        time_spent: 30,
        geo_difference: "2 m",
        longitude: "123.9412",
        latitude: "10.3378",
        remarks: "Delivered successfully",
        payment_type: "GCash",
        sales: "₱20,100.00"
    },
    {
        status: "Completed",
        salesman: "Juan Dela Cruz",
        date: "2026-08-05",
        custcode: "CUST001",
        customer: "ABC Store",
        document_no: "DOC-10001",
        range: "120 m",
        time_travel: 15,
        time_spent: 35,
        geo_difference: "5 m",
        longitude: "123.8854",
        latitude: "10.3157",
        remarks: "Successful visit",
        payment_type: "Cash",
        sales: "₱12,500.00"
    },
    {
        status: "Completed",
        salesman: "Maria Santos",
        date: "2026-08-05",
        custcode: "CUST002",
        customer: "XYZ Mart",
        document_no: "DOC-10002",
        range: "250 m",
        time_travel: 20,
        time_spent: 40,
        geo_difference: "10 m",
        longitude: "123.9226",
        latitude: "10.3231",
        remarks: "Collected payment",
        payment_type: "Credit",
        sales: "₱8,750.00"
    },
    {
        status: "Pending",
        salesman: "Pedro Reyes",
        date: "2026-08-04",
        custcode: "CUST003",
        customer: "LMN Grocery",
        document_no: "DOC-10003",
        range: "90 m",
        time_travel: 10,
        time_spent: 25,
        geo_difference: "3 m",
        longitude: "123.9498",
        latitude: "10.3102",
        remarks: "Awaiting payment",
        payment_type: "Charge",
        sales: "₱15,300.00"
    },
    {
        status: "Cancelled",
        salesman: "Ana Garcia",
        date: "2026-08-03",
        custcode: "CUST004",
        customer: "Fresh Market",
        document_no: "DOC-10004",
        range: "180 m",
        time_travel: 18,
        time_spent: 15,
        geo_difference: "20 m",
        longitude: "123.9021",
        latitude: "10.2915",
        remarks: "Customer unavailable",
        payment_type: "N/A",
        sales: "₱0.00"
    },
    {
        status: "Completed",
        salesman: "Jose Lim",
        date: "2026-08-02",
        custcode: "CUST005",
        customer: "Corner Shop",
        document_no: "DOC-10005",
        range: "75 m",
        time_travel: 8,
        time_spent: 30,
        geo_difference: "2 m",
        longitude: "123.9412",
        latitude: "10.3378",
        remarks: "Delivered successfully",
        payment_type: "GCash",
        sales: "₱20,100.00"
    },
];

const salesReportsItems = [
    {
        title: "Sales Summary",
        data: "sales_summary",
        modal: "#sales_summary",
    },
    {
        title: "Range Summary",
        data: "range_summary",
    },
    {
        title: "Range Monitoring",
        data: "range_monitoring",
        url: "/rangemon"
    },
    {
        title: "Geocall Rate",
        data: "geocall_rate",
        url: "/geocallrate"
    },
    {
        title: "Strike Rate",
        data: "strike_rate",
        url: "/strikerate"
    },
    {
        title: "Salesrep SKU Details",
        data: "salesrep_sku_details",
        url: "/skureport"
    },
    {
        title: "Unproductive",
        data: "unproductive",
        url: "/unproductivereport"
    },
    {
        title: "Sosyo Transaction",
        data: "sosyo_transaction",
        url: "/sosyotransaction"
    },
    {
        title: "Voucher History",
        data: "voucher_history",
        url: "/voucherhistory"
    },
];

TableLoader.tableData(
    "#salesReportTable",
    sampleData,
    StockRequestColumns,
    {
        scrollY:'500px'
    }
);

$(document).ready(function () {
    DatePicker.init();
});

ComponentHelper.dropdown().LoadDropdownItems({
    id: "#salesReports",
    items: salesReportsItems
});

// Handle clicks on dropdown items that have a data-modal attribute
$(document).on("click", "#salesReports li a[data-modal]", function (e) {
    e.preventDefault();
    const modalSelector = $(this).data("modal");
    if (modalSelector) {
        $(modalSelector)[0].showModal();
    }
});

$(document)
    .off("click.SalesReportRow", "#salesReportTable tbody tr")
    .on("click.SalesReportRow", "#salesReportTable tbody tr", function () {
        // salesman.js loads the data asynchronously; ensure DataTable is ready
        if (!$.fn.DataTable.isDataTable("#salesReportTable")) return;

        const SalesReportTable = $("#salesReportTable").DataTable();
        const rowData = SalesReportTable.row(this).data();

        if (!rowData) return;

        console.log("Clicked row:", rowData);

        DisplayReport(rowData);
    });

function DisplayReport(rowData) {
    // Open modal
    $("#reportModal")[0].showModal();
}
