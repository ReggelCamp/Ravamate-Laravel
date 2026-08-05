// import TableLoader from "../../helper/TableLoader.js";

// const SaleSummaryColumns = [
//     {
//         title: "Salesman",
//         data: "salesman"
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
//         title: "Ref No.",
//         data: "ref_no"
//     },
//     {
//         title: "Sent Date",
//         data: "sent_date"
//     },
//     {
//         title: "Delivery Date",
//         data: "delivery_date"
//     },
//     {
//         title: "Total Amount",
//         data: "total_amount"
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
//         title: "Version No.",
//         data: "version_no"
//     },
//     {
//         title: "Battery Status",
//         data: "battery_status"
//     },
//     {
//         title: "Uptime",
//         data: "uptime"
//     },
//     {
//         title: "Source",
//         data: "source"
//     },
//     {
//         title: "Document No.",
//         data: "document_no"
//     }
// ];

// TableLoader.tableData(
//     "#saleSummaryTable",
//     [],
//     SaleSummaryColumns
// );

import TableLoader from "../../helper/TableLoader.js";

const SaleSummaryColumns = [
    {
        title: "Salesman",
        data: "salesman"
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
        title: "Ref No.",
        data: "ref_no"
    },
    {
        title: "Sent Date",
        data: "sent_date"
    },
    {
        title: "Delivery Date",
        data: "delivery_date"
    },
    {
        title: "Total Amount",
        data: "total_amount"
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
        title: "Version No.",
        data: "version_no"
    },
    {
        title: "Battery Status",
        data: "battery_status"
    },
    {
        title: "Uptime",
        data: "uptime"
    },
    {
        title: "Source",
        data: "source"
    },
    {
        title: "Document No.",
        data: "document_no"
    }
];

const sampleData = [
    {
        salesman: "Juan Dela Cruz",
        custcode: "CUST001",
        customer: "ABC Store",
        ref_no: "REF-70001",
        sent_date: "2026-08-05 08:15 AM",
        delivery_date: "2026-08-05",
        total_amount: "₱12,500.00",
        longitude: "123.8854",
        latitude: "10.3157",
        version_no: "v2.1.0",
        battery_status: "92%",
        uptime: "06:45:18",
        source: "Mobile App",
        document_no: "DOC-10001"
    },
    {
        salesman: "Maria Santos",
        custcode: "CUST002",
        customer: "XYZ Mart",
        ref_no: "REF-70002",
        sent_date: "2026-08-05 09:30 AM",
        delivery_date: "2026-08-05",
        total_amount: "₱8,750.00",
        longitude: "123.9226",
        latitude: "10.3231",
        version_no: "v2.1.0",
        battery_status: "78%",
        uptime: "05:21:40",
        source: "Mobile App",
        document_no: "DOC-10002"
    },
    {
        salesman: "Pedro Reyes",
        custcode: "CUST003",
        customer: "LMN Grocery",
        ref_no: "REF-70003",
        sent_date: "2026-08-04 03:10 PM",
        delivery_date: "2026-08-04",
        total_amount: "₱15,300.00",
        longitude: "123.9498",
        latitude: "10.3102",
        version_no: "v2.0.9",
        battery_status: "65%",
        uptime: "04:18:55",
        source: "Tablet",
        document_no: "DOC-10003"
    },
    {
        salesman: "Ana Garcia",
        custcode: "CUST004",
        customer: "Fresh Market",
        ref_no: "REF-70004",
        sent_date: "2026-08-03 11:45 AM",
        delivery_date: "2026-08-03",
        total_amount: "₱20,100.00",
        longitude: "123.9021",
        latitude: "10.2915",
        version_no: "v2.1.1",
        battery_status: "54%",
        uptime: "07:02:13",
        source: "Mobile App",
        document_no: "DOC-10004"
    },
    {
        salesman: "Jose Lim",
        custcode: "CUST005",
        customer: "Corner Shop",
        ref_no: "REF-70005",
        sent_date: "2026-08-02 01:25 PM",
        delivery_date: "2026-08-02",
        total_amount: "₱6,950.00",
        longitude: "123.9412",
        latitude: "10.3378",
        version_no: "v2.0.8",
        battery_status: "39%",
        uptime: "03:56:42",
        source: "Web Portal",
        document_no: "DOC-10005"
    }
];

TableLoader.tableData(
    "#saleSummaryTable",
    sampleData,
    SaleSummaryColumns
);