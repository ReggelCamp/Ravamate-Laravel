// import TableLoader  from "../../helper/TableLoader.js";

// const offSiteTransColumns = [
//     {
//         title: "Transaction ID",
//         data: "trans_id"
//     },
//     {
//         title: "Salesman",
//         data: "salesman"
//     },
//     {
//         title: "Customer",
//         data: "customer"
//     },
//     {
//         title: "Total Amount",
//         data: "total_amt"
//     },
//     {
//         title: "Geo Location",
//         data: "geo_location"
//     },
//     {
//         title: "Geo Locking",
//         data: "geo_locking"
//     },
//     {
//         title: "Notation",
//         data: "notation"
//     },
//     {
//         title: "Transaction Date",
//         data: "trans_date"
//     },
// ];

// TableLoader.tableData(
//     "#offsiteTransTable",
//     [],
//     offSiteTransColumns
// );


import TableLoader from "../../helper/TableLoader.js";
import DatePicker from "../../helper/datePicker.js";
import "../../helper/exportDataTable.js";

const offSiteTransColumns = [
    {
        title: "Transaction ID",
        data: "trans_id"
    },
    {
        title: "Salesman",
        data: "salesman"
    },
    {
        title: "Customer",
        data: "customer"
    },
    {
        title: "Total Amount",
        data: "total_amt"
    },
    {
        title: "Geo Location",
        data: "geo_location"
    },
    {
        title: "Geo Locking",
        data: "geo_locking"
    },
    {
        title: "Notation",
        data: "notation"
    },
    {
        title: "Transaction Date",
        data: "trans_date"
    },
];

const sampleData = [
    {
        trans_id: "OST-10001",
        salesman: "Juan Dela Cruz",
        customer: "ABC Store",
        total_amt: "₱12,500.00",
        geo_location: "10.3157, 123.8854",
        geo_locking: "Inside Radius",
        notation: "Valid Location",
        trans_date: "2026-08-05 09:15 AM"
    },
    {
        trans_id: "OST-10002",
        salesman: "Maria Santos",
        customer: "XYZ Mart",
        total_amt: "₱8,750.00",
        geo_location: "10.3231, 123.9226",
        geo_locking: "Outside Radius",
        notation: "Requires Approval",
        trans_date: "2026-08-05 10:40 AM"
    },
    {
        trans_id: "OST-10003",
        salesman: "Pedro Reyes",
        customer: "LMN Grocery",
        total_amt: "₱15,300.00",
        geo_location: "10.3102, 123.9498",
        geo_locking: "Inside Radius",
        notation: "Valid Location",
        trans_date: "2026-08-04 03:20 PM"
    },
    {
        trans_id: "OST-10004",
        salesman: "Ana Garcia",
        customer: "Fresh Market",
        total_amt: "₱6,950.00",
        geo_location: "10.2915, 123.9021",
        geo_locking: "GPS Unavailable",
        notation: "Manual Verification",
        trans_date: "2026-08-03 11:05 AM"
    },
    {
        trans_id: "OST-10005",
        salesman: "Jose Lim",
        customer: "Corner Shop",
        total_amt: "₱21,100.00",
        geo_location: "10.3378, 123.9412",
        geo_locking: "Inside Radius",
        notation: "Valid Location",
        trans_date: "2026-08-02 04:50 PM"
    },
    {
        trans_id: "OST-10001",
        salesman: "Juan Dela Cruz",
        customer: "ABC Store",
        total_amt: "₱12,500.00",
        geo_location: "10.3157, 123.8854",
        geo_locking: "Inside Radius",
        notation: "Valid Location",
        trans_date: "2026-08-05 09:15 AM"
    },
    {
        trans_id: "OST-10002",
        salesman: "Maria Santos",
        customer: "XYZ Mart",
        total_amt: "₱8,750.00",
        geo_location: "10.3231, 123.9226",
        geo_locking: "Outside Radius",
        notation: "Requires Approval",
        trans_date: "2026-08-05 10:40 AM"
    },
    {
        trans_id: "OST-10003",
        salesman: "Pedro Reyes",
        customer: "LMN Grocery",
        total_amt: "₱15,300.00",
        geo_location: "10.3102, 123.9498",
        geo_locking: "Inside Radius",
        notation: "Valid Location",
        trans_date: "2026-08-04 03:20 PM"
    },
    {
        trans_id: "OST-10004",
        salesman: "Ana Garcia",
        customer: "Fresh Market",
        total_amt: "₱6,950.00",
        geo_location: "10.2915, 123.9021",
        geo_locking: "GPS Unavailable",
        notation: "Manual Verification",
        trans_date: "2026-08-03 11:05 AM"
    },
    {
        trans_id: "OST-10005",
        salesman: "Jose Lim",
        customer: "Corner Shop",
        total_amt: "₱21,100.00",
        geo_location: "10.3378, 123.9412",
        geo_locking: "Inside Radius",
        notation: "Valid Location",
        trans_date: "2026-08-02 04:50 PM"
    },
    {
        trans_id: "OST-10001",
        salesman: "Juan Dela Cruz",
        customer: "ABC Store",
        total_amt: "₱12,500.00",
        geo_location: "10.3157, 123.8854",
        geo_locking: "Inside Radius",
        notation: "Valid Location",
        trans_date: "2026-08-05 09:15 AM"
    },
    {
        trans_id: "OST-10002",
        salesman: "Maria Santos",
        customer: "XYZ Mart",
        total_amt: "₱8,750.00",
        geo_location: "10.3231, 123.9226",
        geo_locking: "Outside Radius",
        notation: "Requires Approval",
        trans_date: "2026-08-05 10:40 AM"
    },
    {
        trans_id: "OST-10003",
        salesman: "Pedro Reyes",
        customer: "LMN Grocery",
        total_amt: "₱15,300.00",
        geo_location: "10.3102, 123.9498",
        geo_locking: "Inside Radius",
        notation: "Valid Location",
        trans_date: "2026-08-04 03:20 PM"
    },
    {
        trans_id: "OST-10004",
        salesman: "Ana Garcia",
        customer: "Fresh Market",
        total_amt: "₱6,950.00",
        geo_location: "10.2915, 123.9021",
        geo_locking: "GPS Unavailable",
        notation: "Manual Verification",
        trans_date: "2026-08-03 11:05 AM"
    },
    {
        trans_id: "OST-10005",
        salesman: "Jose Lim",
        customer: "Corner Shop",
        total_amt: "₱21,100.00",
        geo_location: "10.3378, 123.9412",
        geo_locking: "Inside Radius",
        notation: "Valid Location",
        trans_date: "2026-08-02 04:50 PM"
    },
    {
        trans_id: "OST-10001",
        salesman: "Juan Dela Cruz",
        customer: "ABC Store",
        total_amt: "₱12,500.00",
        geo_location: "10.3157, 123.8854",
        geo_locking: "Inside Radius",
        notation: "Valid Location",
        trans_date: "2026-08-05 09:15 AM"
    },
    {
        trans_id: "OST-10002",
        salesman: "Maria Santos",
        customer: "XYZ Mart",
        total_amt: "₱8,750.00",
        geo_location: "10.3231, 123.9226",
        geo_locking: "Outside Radius",
        notation: "Requires Approval",
        trans_date: "2026-08-05 10:40 AM"
    },
    {
        trans_id: "OST-10003",
        salesman: "Pedro Reyes",
        customer: "LMN Grocery",
        total_amt: "₱15,300.00",
        geo_location: "10.3102, 123.9498",
        geo_locking: "Inside Radius",
        notation: "Valid Location",
        trans_date: "2026-08-04 03:20 PM"
    },
    {
        trans_id: "OST-10004",
        salesman: "Ana Garcia",
        customer: "Fresh Market",
        total_amt: "₱6,950.00",
        geo_location: "10.2915, 123.9021",
        geo_locking: "GPS Unavailable",
        notation: "Manual Verification",
        trans_date: "2026-08-03 11:05 AM"
    },
    {
        trans_id: "OST-10005",
        salesman: "Jose Lim",
        customer: "Corner Shop",
        total_amt: "₱21,100.00",
        geo_location: "10.3378, 123.9412",
        geo_locking: "Inside Radius",
        notation: "Valid Location",
        trans_date: "2026-08-02 04:50 PM"
    },
    {
        trans_id: "OST-10001",
        salesman: "Juan Dela Cruz",
        customer: "ABC Store",
        total_amt: "₱12,500.00",
        geo_location: "10.3157, 123.8854",
        geo_locking: "Inside Radius",
        notation: "Valid Location",
        trans_date: "2026-08-05 09:15 AM"
    },
    {
        trans_id: "OST-10002",
        salesman: "Maria Santos",
        customer: "XYZ Mart",
        total_amt: "₱8,750.00",
        geo_location: "10.3231, 123.9226",
        geo_locking: "Outside Radius",
        notation: "Requires Approval",
        trans_date: "2026-08-05 10:40 AM"
    },
    {
        trans_id: "OST-10003",
        salesman: "Pedro Reyes",
        customer: "LMN Grocery",
        total_amt: "₱15,300.00",
        geo_location: "10.3102, 123.9498",
        geo_locking: "Inside Radius",
        notation: "Valid Location",
        trans_date: "2026-08-04 03:20 PM"
    },
    {
        trans_id: "OST-10004",
        salesman: "Ana Garcia",
        customer: "Fresh Market",
        total_amt: "₱6,950.00",
        geo_location: "10.2915, 123.9021",
        geo_locking: "GPS Unavailable",
        notation: "Manual Verification",
        trans_date: "2026-08-03 11:05 AM"
    },
    {
        trans_id: "OST-10005",
        salesman: "Jose Lim",
        customer: "Corner Shop",
        total_amt: "₱21,100.00",
        geo_location: "10.3378, 123.9412",
        geo_locking: "Inside Radius",
        notation: "Valid Location",
        trans_date: "2026-08-02 04:50 PM"
    },
];

TableLoader.tableData(
    "#offsiteTransTable",
    sampleData,
    offSiteTransColumns,
    {
        scrollY: "50vh",
        pageLength: 25
    }
);

$(document).ready(function () {
    DatePicker.init();
});