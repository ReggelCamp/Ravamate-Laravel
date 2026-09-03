// import TableLoader  from "../../helper/TableLoader.js";

// const SoColumns = [
//     {
//         title: "Trans Type",
//         data: "trans_type"
//     },
//     {
//         title: "Trans Date",
//         data: "trans_date"
//     },
//     {
//         title: "MdCode",
//         data: "md_code"
//     },
//     {
//         title: "No. of SKU",
//         data: "no_sku"
//     },
//     {
//         title: "Volume Qty.",
//         data: "volume_qty"
//     },
//     {
//         title: "Amount",
//         data: "amount"
//     },
//     {
//         title: "Status",
//         data: "status"
//     },
//     {
//         title: "Remarks",
//         data: "remarks"
//     },
//     {
//         title: "Last Updated",
//         data: "last_updated"
//     },
// ];

// const sampleData = [
//     {

//     }
// ]

// TableLoader.tableData(
//     "#PendingRequestTable",
//     [],
//     SoColumns
// );

import TableLoader from "../../helper/TableLoader.js";
import DatePicker from "../../helper/datePicker.js";
import "../../helper/exportDataTable.js";

const SoColumns = [
    {
        title: "Trans Type",
        data: "trans_type"
    },
    {
        title: "Trans Date",
        data: "trans_date"
    },
    {
        title: "MdCode",
        data: "md_code"
    },
    {
        title: "No. of SKU",
        data: "no_sku"
    },
    {
        title: "Volume Qty.",
        data: "volume_qty"
    },
    {
        title: "Amount",
        data: "amount"
    },
    {
        title: "Status",
        data: "status"
    },
    {
        title: "Remarks",
        data: "remarks"
    },
    {
        title: "Last Updated",
        data: "last_updated"
    },
];

const sampleData = [
    {
        trans_type: "Sales Order",
        trans_date: "2026-08-05",
        md_code: "MD001",
        no_sku: 12,
        volume_qty: 150,
        amount: "₱25,500.00",
        status: "Pending",
        remarks: "Awaiting approval",
        last_updated: "2026-08-05 10:30 AM"
    },
    {
        trans_type: "Sales Order",
        trans_date: "2026-08-04",
        md_code: "MD002",
        no_sku: 8,
        volume_qty: 95,
        amount: "₱18,750.00",
        status: "Approved",
        remarks: "Ready for delivery",
        last_updated: "2026-08-04 4:15 PM"
    },
    {
        trans_type: "Return",
        trans_date: "2026-08-03",
        md_code: "MD003",
        no_sku: 5,
        volume_qty: 40,
        amount: "₱6,200.00",
        status: "Rejected",
        remarks: "Invalid request",
        last_updated: "2026-08-03 1:20 PM"
    },
    {
        trans_type: "Sales Order",
        trans_date: "2026-08-02",
        md_code: "MD004",
        no_sku: 20,
        volume_qty: 300,
        amount: "₱48,900.00",
        status: "Completed",
        remarks: "Delivered",
        last_updated: "2026-08-02 5:45 PM"
    },
    {
        trans_type: "Transfer",
        trans_date: "2026-08-01",
        md_code: "MD005",
        no_sku: 10,
        volume_qty: 120,
        amount: "₱15,800.00",
        status: "In Progress",
        remarks: "Processing",
        last_updated: "2026-08-01 9:10 AM"
    },
     {
        trans_type: "Sales Order",
        trans_date: "2026-08-05",
        md_code: "MD001",
        no_sku: 12,
        volume_qty: 150,
        amount: "₱25,500.00",
        status: "Pending",
        remarks: "Awaiting approval",
        last_updated: "2026-08-05 10:30 AM"
    },
    {
        trans_type: "Sales Order",
        trans_date: "2026-08-04",
        md_code: "MD002",
        no_sku: 8,
        volume_qty: 95,
        amount: "₱18,750.00",
        status: "Approved",
        remarks: "Ready for delivery",
        last_updated: "2026-08-04 4:15 PM"
    },
    {
        trans_type: "Return",
        trans_date: "2026-08-03",
        md_code: "MD003",
        no_sku: 5,
        volume_qty: 40,
        amount: "₱6,200.00",
        status: "Rejected",
        remarks: "Invalid request",
        last_updated: "2026-08-03 1:20 PM"
    },
    {
        trans_type: "Sales Order",
        trans_date: "2026-08-02",
        md_code: "MD004",
        no_sku: 20,
        volume_qty: 300,
        amount: "₱48,900.00",
        status: "Completed",
        remarks: "Delivered",
        last_updated: "2026-08-02 5:45 PM"
    },
    {
        trans_type: "Transfer",
        trans_date: "2026-08-01",
        md_code: "MD005",
        no_sku: 10,
        volume_qty: 120,
        amount: "₱15,800.00",
        status: "In Progress",
        remarks: "Processing",
        last_updated: "2026-08-01 9:10 AM"
    },
     {
        trans_type: "Sales Order",
        trans_date: "2026-08-05",
        md_code: "MD001",
        no_sku: 12,
        volume_qty: 150,
        amount: "₱25,500.00",
        status: "Pending",
        remarks: "Awaiting approval",
        last_updated: "2026-08-05 10:30 AM"
    },
    {
        trans_type: "Sales Order",
        trans_date: "2026-08-04",
        md_code: "MD002",
        no_sku: 8,
        volume_qty: 95,
        amount: "₱18,750.00",
        status: "Approved",
        remarks: "Ready for delivery",
        last_updated: "2026-08-04 4:15 PM"
    },
    {
        trans_type: "Return",
        trans_date: "2026-08-03",
        md_code: "MD003",
        no_sku: 5,
        volume_qty: 40,
        amount: "₱6,200.00",
        status: "Rejected",
        remarks: "Invalid request",
        last_updated: "2026-08-03 1:20 PM"
    },
    {
        trans_type: "Sales Order",
        trans_date: "2026-08-02",
        md_code: "MD004",
        no_sku: 20,
        volume_qty: 300,
        amount: "₱48,900.00",
        status: "Completed",
        remarks: "Delivered",
        last_updated: "2026-08-02 5:45 PM"
    },
    {
        trans_type: "Transfer",
        trans_date: "2026-08-01",
        md_code: "MD005",
        no_sku: 10,
        volume_qty: 120,
        amount: "₱15,800.00",
        status: "In Progress",
        remarks: "Processing",
        last_updated: "2026-08-01 9:10 AM"
    },
     {
        trans_type: "Sales Order",
        trans_date: "2026-08-05",
        md_code: "MD001",
        no_sku: 12,
        volume_qty: 150,
        amount: "₱25,500.00",
        status: "Pending",
        remarks: "Awaiting approval",
        last_updated: "2026-08-05 10:30 AM"
    },
    {
        trans_type: "Sales Order",
        trans_date: "2026-08-04",
        md_code: "MD002",
        no_sku: 8,
        volume_qty: 95,
        amount: "₱18,750.00",
        status: "Approved",
        remarks: "Ready for delivery",
        last_updated: "2026-08-04 4:15 PM"
    },
    {
        trans_type: "Return",
        trans_date: "2026-08-03",
        md_code: "MD003",
        no_sku: 5,
        volume_qty: 40,
        amount: "₱6,200.00",
        status: "Rejected",
        remarks: "Invalid request",
        last_updated: "2026-08-03 1:20 PM"
    },
    {
        trans_type: "Sales Order",
        trans_date: "2026-08-02",
        md_code: "MD004",
        no_sku: 20,
        volume_qty: 300,
        amount: "₱48,900.00",
        status: "Completed",
        remarks: "Delivered",
        last_updated: "2026-08-02 5:45 PM"
    },
    {
        trans_type: "Transfer",
        trans_date: "2026-08-01",
        md_code: "MD005",
        no_sku: 10,
        volume_qty: 120,
        amount: "₱15,800.00",
        status: "In Progress",
        remarks: "Processing",
        last_updated: "2026-08-01 9:10 AM"
    }
];

TableLoader.tableData(
    "#PendingRequestTable",
    sampleData,
    SoColumns,
    {

    }
);

$(document).ready(function () {
    DatePicker.init();
});