// import TableLoader from "../../helper/TableLoader.js";

// const DeliveryMonitoringColumns = [
//     {
//         title: "SALESMAN",
//         data: "salesman"
//     },
//     {
//         title: "CUSTCODE",
//         data: "custcode"
//     },
//     {
//         title: "CUSTOMERo.",
//         data: "customer"
//     },
//     {
//         title: "REFNO",
//         data: "refno"
//     },
//     {
//         title: "TRANSACTION DATE",
//         data: "transaction_date"
//     },
//     {
//         title: "TOTAL AMOUNT",
//         data: "total_amount"
//     },
//     {
//         title: "DISPATCH DATE",
//         data: "dispatch_date"
//     },
//     {
//         title: "DELIVERY DATE",
//         data: "delivery_date"
//     },
//     {
//         title: "DURATION",
//         data: "duration"
//     },
//     {
//         title: "TURN AROUND TIME",
//         data: "turn_around_time"
//     }
// ];

// TableLoader.tableData(
//     "#deliveryMonitoringTable",
//     [],
//     DeliveryMonitoringColumns
// );

import TableLoader from "../../helper/TableLoader.js";
import DatePicker from "../../helper/datePicker.js";
import "../../helper/exportDataTable.js"

const DeliveryMonitoringColumns = [
    {
        title: "SALESMAN",
        data: "salesman"
    },
    {
        title: "CUSTCODE",
        data: "custcode"
    },
    {
        title: "CUSTOMER",
        data: "customer"
    },
    {
        title: "REFNO",
        data: "refno"
    },
    {
        title: "TRANSACTION DATE",
        data: "transaction_date"
    },
    {
        title: "TOTAL AMOUNT",
        data: "total_amount"
    },
    {
        title: "DISPATCH DATE",
        data: "dispatch_date"
    },
    {
        title: "DELIVERY DATE",
        data: "delivery_date"
    },
    {
        title: "DURATION",
        data: "duration"
    },
    {
        title: "TURN AROUND TIME",
        data: "turn_around_time"
    }
];

const sampleData = [
    {
        salesman: "Juan Dela Cruz",
        custcode: "CUST001",
        customer: "ABC Store",
        refno: "REF-10001",
        transaction_date: "2026-08-05 08:30 AM",
        total_amount: "₱12,500.00",
        dispatch_date: "2026-08-05 10:00 AM",
        delivery_date: "2026-08-05 11:15 AM",
        duration: "1 hr 15 min",
        turn_around_time: "2 hrs 45 min"
    },
    {
        salesman: "Maria Santos",
        custcode: "CUST002",
        customer: "XYZ Mart",
        refno: "REF-10002",
        transaction_date: "2026-08-05 09:10 AM",
        total_amount: "₱8,750.00",
        dispatch_date: "2026-08-05 11:00 AM",
        delivery_date: "2026-08-05 12:20 PM",
        duration: "1 hr 20 min",
        turn_around_time: "3 hrs 10 min"
    },
    {
        salesman: "Pedro Reyes",
        custcode: "CUST003",
        customer: "LMN Grocery",
        refno: "REF-10003",
        transaction_date: "2026-08-04 01:45 PM",
        total_amount: "₱15,300.00",
        dispatch_date: "2026-08-04 02:30 PM",
        delivery_date: "2026-08-04 04:00 PM",
        duration: "1 hr 30 min",
        turn_around_time: "2 hrs 15 min"
    },
    {
        salesman: "Ana Garcia",
        custcode: "CUST004",
        customer: "Fresh Market",
        refno: "REF-10004",
        transaction_date: "2026-08-03 10:20 AM",
        total_amount: "₱20,100.00",
        dispatch_date: "2026-08-03 12:00 PM",
        delivery_date: "2026-08-03 01:45 PM",
        duration: "1 hr 45 min",
        turn_around_time: "3 hrs 25 min"
    },
    {
        salesman: "Jose Lim",
        custcode: "CUST005",
        customer: "Corner Shop",
        refno: "REF-10005",
        transaction_date: "2026-08-02 02:15 PM",
        total_amount: "₱6,950.00",
        dispatch_date: "2026-08-02 03:00 PM",
        delivery_date: "2026-08-02 04:10 PM",
        duration: "1 hr 10 min",
        turn_around_time: "1 hr 55 min"
    },
    {
        salesman: "Juan Dela Cruz",
        custcode: "CUST001",
        customer: "ABC Store",
        refno: "REF-10001",
        transaction_date: "2026-08-05 08:30 AM",
        total_amount: "₱12,500.00",
        dispatch_date: "2026-08-05 10:00 AM",
        delivery_date: "2026-08-05 11:15 AM",
        duration: "1 hr 15 min",
        turn_around_time: "2 hrs 45 min"
    },
    {
        salesman: "Maria Santos",
        custcode: "CUST002",
        customer: "XYZ Mart",
        refno: "REF-10002",
        transaction_date: "2026-08-05 09:10 AM",
        total_amount: "₱8,750.00",
        dispatch_date: "2026-08-05 11:00 AM",
        delivery_date: "2026-08-05 12:20 PM",
        duration: "1 hr 20 min",
        turn_around_time: "3 hrs 10 min"
    },
    {
        salesman: "Pedro Reyes",
        custcode: "CUST003",
        customer: "LMN Grocery",
        refno: "REF-10003",
        transaction_date: "2026-08-04 01:45 PM",
        total_amount: "₱15,300.00",
        dispatch_date: "2026-08-04 02:30 PM",
        delivery_date: "2026-08-04 04:00 PM",
        duration: "1 hr 30 min",
        turn_around_time: "2 hrs 15 min"
    },
    {
        salesman: "Ana Garcia",
        custcode: "CUST004",
        customer: "Fresh Market",
        refno: "REF-10004",
        transaction_date: "2026-08-03 10:20 AM",
        total_amount: "₱20,100.00",
        dispatch_date: "2026-08-03 12:00 PM",
        delivery_date: "2026-08-03 01:45 PM",
        duration: "1 hr 45 min",
        turn_around_time: "3 hrs 25 min"
    },
    {
        salesman: "Jose Lim",
        custcode: "CUST005",
        customer: "Corner Shop",
        refno: "REF-10005",
        transaction_date: "2026-08-02 02:15 PM",
        total_amount: "₱6,950.00",
        dispatch_date: "2026-08-02 03:00 PM",
        delivery_date: "2026-08-02 04:10 PM",
        duration: "1 hr 10 min",
        turn_around_time: "1 hr 55 min"
    },
    {
        salesman: "Juan Dela Cruz",
        custcode: "CUST001",
        customer: "ABC Store",
        refno: "REF-10001",
        transaction_date: "2026-08-05 08:30 AM",
        total_amount: "₱12,500.00",
        dispatch_date: "2026-08-05 10:00 AM",
        delivery_date: "2026-08-05 11:15 AM",
        duration: "1 hr 15 min",
        turn_around_time: "2 hrs 45 min"
    },
    {
        salesman: "Maria Santos",
        custcode: "CUST002",
        customer: "XYZ Mart",
        refno: "REF-10002",
        transaction_date: "2026-08-05 09:10 AM",
        total_amount: "₱8,750.00",
        dispatch_date: "2026-08-05 11:00 AM",
        delivery_date: "2026-08-05 12:20 PM",
        duration: "1 hr 20 min",
        turn_around_time: "3 hrs 10 min"
    },
    {
        salesman: "Pedro Reyes",
        custcode: "CUST003",
        customer: "LMN Grocery",
        refno: "REF-10003",
        transaction_date: "2026-08-04 01:45 PM",
        total_amount: "₱15,300.00",
        dispatch_date: "2026-08-04 02:30 PM",
        delivery_date: "2026-08-04 04:00 PM",
        duration: "1 hr 30 min",
        turn_around_time: "2 hrs 15 min"
    },
    {
        salesman: "Ana Garcia",
        custcode: "CUST004",
        customer: "Fresh Market",
        refno: "REF-10004",
        transaction_date: "2026-08-03 10:20 AM",
        total_amount: "₱20,100.00",
        dispatch_date: "2026-08-03 12:00 PM",
        delivery_date: "2026-08-03 01:45 PM",
        duration: "1 hr 45 min",
        turn_around_time: "3 hrs 25 min"
    },
    {
        salesman: "Jose Lim",
        custcode: "CUST005",
        customer: "Corner Shop",
        refno: "REF-10005",
        transaction_date: "2026-08-02 02:15 PM",
        total_amount: "₱6,950.00",
        dispatch_date: "2026-08-02 03:00 PM",
        delivery_date: "2026-08-02 04:10 PM",
        duration: "1 hr 10 min",
        turn_around_time: "1 hr 55 min"
    },
    {
        salesman: "Juan Dela Cruz",
        custcode: "CUST001",
        customer: "ABC Store",
        refno: "REF-10001",
        transaction_date: "2026-08-05 08:30 AM",
        total_amount: "₱12,500.00",
        dispatch_date: "2026-08-05 10:00 AM",
        delivery_date: "2026-08-05 11:15 AM",
        duration: "1 hr 15 min",
        turn_around_time: "2 hrs 45 min"
    },
    {
        salesman: "Maria Santos",
        custcode: "CUST002",
        customer: "XYZ Mart",
        refno: "REF-10002",
        transaction_date: "2026-08-05 09:10 AM",
        total_amount: "₱8,750.00",
        dispatch_date: "2026-08-05 11:00 AM",
        delivery_date: "2026-08-05 12:20 PM",
        duration: "1 hr 20 min",
        turn_around_time: "3 hrs 10 min"
    },
    {
        salesman: "Pedro Reyes",
        custcode: "CUST003",
        customer: "LMN Grocery",
        refno: "REF-10003",
        transaction_date: "2026-08-04 01:45 PM",
        total_amount: "₱15,300.00",
        dispatch_date: "2026-08-04 02:30 PM",
        delivery_date: "2026-08-04 04:00 PM",
        duration: "1 hr 30 min",
        turn_around_time: "2 hrs 15 min"
    },
    {
        salesman: "Ana Garcia",
        custcode: "CUST004",
        customer: "Fresh Market",
        refno: "REF-10004",
        transaction_date: "2026-08-03 10:20 AM",
        total_amount: "₱20,100.00",
        dispatch_date: "2026-08-03 12:00 PM",
        delivery_date: "2026-08-03 01:45 PM",
        duration: "1 hr 45 min",
        turn_around_time: "3 hrs 25 min"
    },
    {
        salesman: "Jose Lim",
        custcode: "CUST005",
        customer: "Corner Shop",
        refno: "REF-10005",
        transaction_date: "2026-08-02 02:15 PM",
        total_amount: "₱6,950.00",
        dispatch_date: "2026-08-02 03:00 PM",
        delivery_date: "2026-08-02 04:10 PM",
        duration: "1 hr 10 min",
        turn_around_time: "1 hr 55 min"
    },
    {
        salesman: "Juan Dela Cruz",
        custcode: "CUST001",
        customer: "ABC Store",
        refno: "REF-10001",
        transaction_date: "2026-08-05 08:30 AM",
        total_amount: "₱12,500.00",
        dispatch_date: "2026-08-05 10:00 AM",
        delivery_date: "2026-08-05 11:15 AM",
        duration: "1 hr 15 min",
        turn_around_time: "2 hrs 45 min"
    },
    {
        salesman: "Maria Santos",
        custcode: "CUST002",
        customer: "XYZ Mart",
        refno: "REF-10002",
        transaction_date: "2026-08-05 09:10 AM",
        total_amount: "₱8,750.00",
        dispatch_date: "2026-08-05 11:00 AM",
        delivery_date: "2026-08-05 12:20 PM",
        duration: "1 hr 20 min",
        turn_around_time: "3 hrs 10 min"
    },
    {
        salesman: "Pedro Reyes",
        custcode: "CUST003",
        customer: "LMN Grocery",
        refno: "REF-10003",
        transaction_date: "2026-08-04 01:45 PM",
        total_amount: "₱15,300.00",
        dispatch_date: "2026-08-04 02:30 PM",
        delivery_date: "2026-08-04 04:00 PM",
        duration: "1 hr 30 min",
        turn_around_time: "2 hrs 15 min"
    },
    {
        salesman: "Ana Garcia",
        custcode: "CUST004",
        customer: "Fresh Market",
        refno: "REF-10004",
        transaction_date: "2026-08-03 10:20 AM",
        total_amount: "₱20,100.00",
        dispatch_date: "2026-08-03 12:00 PM",
        delivery_date: "2026-08-03 01:45 PM",
        duration: "1 hr 45 min",
        turn_around_time: "3 hrs 25 min"
    },
    {
        salesman: "Jose Lim",
        custcode: "CUST005",
        customer: "Corner Shop",
        refno: "REF-10005",
        transaction_date: "2026-08-02 02:15 PM",
        total_amount: "₱6,950.00",
        dispatch_date: "2026-08-02 03:00 PM",
        delivery_date: "2026-08-02 04:10 PM",
        duration: "1 hr 10 min",
        turn_around_time: "1 hr 55 min"
    },
    {
        salesman: "Juan Dela Cruz",
        custcode: "CUST001",
        customer: "ABC Store",
        refno: "REF-10001",
        transaction_date: "2026-08-05 08:30 AM",
        total_amount: "₱12,500.00",
        dispatch_date: "2026-08-05 10:00 AM",
        delivery_date: "2026-08-05 11:15 AM",
        duration: "1 hr 15 min",
        turn_around_time: "2 hrs 45 min"
    },
    {
        salesman: "Maria Santos",
        custcode: "CUST002",
        customer: "XYZ Mart",
        refno: "REF-10002",
        transaction_date: "2026-08-05 09:10 AM",
        total_amount: "₱8,750.00",
        dispatch_date: "2026-08-05 11:00 AM",
        delivery_date: "2026-08-05 12:20 PM",
        duration: "1 hr 20 min",
        turn_around_time: "3 hrs 10 min"
    },
    {
        salesman: "Pedro Reyes",
        custcode: "CUST003",
        customer: "LMN Grocery",
        refno: "REF-10003",
        transaction_date: "2026-08-04 01:45 PM",
        total_amount: "₱15,300.00",
        dispatch_date: "2026-08-04 02:30 PM",
        delivery_date: "2026-08-04 04:00 PM",
        duration: "1 hr 30 min",
        turn_around_time: "2 hrs 15 min"
    },
    {
        salesman: "Ana Garcia",
        custcode: "CUST004",
        customer: "Fresh Market",
        refno: "REF-10004",
        transaction_date: "2026-08-03 10:20 AM",
        total_amount: "₱20,100.00",
        dispatch_date: "2026-08-03 12:00 PM",
        delivery_date: "2026-08-03 01:45 PM",
        duration: "1 hr 45 min",
        turn_around_time: "3 hrs 25 min"
    },
    {
        salesman: "Jose Lim",
        custcode: "CUST005",
        customer: "Corner Shop",
        refno: "REF-10005",
        transaction_date: "2026-08-02 02:15 PM",
        total_amount: "₱6,950.00",
        dispatch_date: "2026-08-02 03:00 PM",
        delivery_date: "2026-08-02 04:10 PM",
        duration: "1 hr 10 min",
        turn_around_time: "1 hr 55 min"
    },
    {
        salesman: "Juan Dela Cruz",
        custcode: "CUST001",
        customer: "ABC Store",
        refno: "REF-10001",
        transaction_date: "2026-08-05 08:30 AM",
        total_amount: "₱12,500.00",
        dispatch_date: "2026-08-05 10:00 AM",
        delivery_date: "2026-08-05 11:15 AM",
        duration: "1 hr 15 min",
        turn_around_time: "2 hrs 45 min"
    },
    {
        salesman: "Maria Santos",
        custcode: "CUST002",
        customer: "XYZ Mart",
        refno: "REF-10002",
        transaction_date: "2026-08-05 09:10 AM",
        total_amount: "₱8,750.00",
        dispatch_date: "2026-08-05 11:00 AM",
        delivery_date: "2026-08-05 12:20 PM",
        duration: "1 hr 20 min",
        turn_around_time: "3 hrs 10 min"
    },
    {
        salesman: "Pedro Reyes",
        custcode: "CUST003",
        customer: "LMN Grocery",
        refno: "REF-10003",
        transaction_date: "2026-08-04 01:45 PM",
        total_amount: "₱15,300.00",
        dispatch_date: "2026-08-04 02:30 PM",
        delivery_date: "2026-08-04 04:00 PM",
        duration: "1 hr 30 min",
        turn_around_time: "2 hrs 15 min"
    },
    {
        salesman: "Ana Garcia",
        custcode: "CUST004",
        customer: "Fresh Market",
        refno: "REF-10004",
        transaction_date: "2026-08-03 10:20 AM",
        total_amount: "₱20,100.00",
        dispatch_date: "2026-08-03 12:00 PM",
        delivery_date: "2026-08-03 01:45 PM",
        duration: "1 hr 45 min",
        turn_around_time: "3 hrs 25 min"
    },
    {
        salesman: "Jose Lim",
        custcode: "CUST005",
        customer: "Corner Shop",
        refno: "REF-10005",
        transaction_date: "2026-08-02 02:15 PM",
        total_amount: "₱6,950.00",
        dispatch_date: "2026-08-02 03:00 PM",
        delivery_date: "2026-08-02 04:10 PM",
        duration: "1 hr 10 min",
        turn_around_time: "1 hr 55 min"
    },
];

TableLoader.tableData(
    "#deliveryMonitoringTable",
    sampleData,
    DeliveryMonitoringColumns,
    {
        scrollY: "300px"
    }
);

$(document).ready(function () {
    DatePicker.init();
});