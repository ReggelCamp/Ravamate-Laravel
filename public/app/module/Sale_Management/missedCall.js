// import TableLoader  from "../../helper/TableLoader.js";

// const MissedCallColumns = [
//     {
//         title: "MDCode",
//         date: "md_code"
//     },
//     {
//         title: "Salesman",
//         date: "salesman"
//     },
//     {
//         title: "CustCode",
//         date: "cust_code"
//     },
//     {
//         title: "Customer Name",
//         date: "customer_name"
//     },
//     {
//         title: "Reason",
//         date: "reason"
//     },
//     {
//         title: "Date",
//         date: "date"
//     },
// ];

// TableLoader.tableData(
//     "#missedCallTable",
//     [],
//     MissedCallColumns
// );

import TableLoader from "../../helper/TableLoader.js";

const MissedCallColumns = [
    {
        title: "MDCode",
        data: "md_code"
    },
    {
        title: "Salesman",
        data: "salesman"
    },
    {
        title: "CustCode",
        data: "cust_code"
    },
    {
        title: "Customer Name",
        data: "customer_name"
    },
    {
        title: "Reason",
        data: "reason"
    },
    {
        title: "Date",
        data: "date"
    },
];

// Static sample data for local testing / UI preview
const MissedCallSampleData = [
    {
        md_code: "MD-1001",
        salesman: "Juan Dela Cruz",
        cust_code: "CUST-00123",
        customer_name: "ABC Trading Corp.",
        reason: "Store Closed",
        date: "2026-07-15",
    },
    {
        md_code: "MD-1002",
        salesman: "Ana Reyes",
        cust_code: "CUST-00456",
        customer_name: "XYZ Mini Mart",
        reason: "Customer Not Available",
        date: "2026-07-16",
    },
    {
        md_code: "MD-1003",
        salesman: "Mark Villanueva",
        cust_code: "CUST-00789",
        customer_name: "Golden Harvest Store",
        reason: "No Stock Requirement",
        date: "2026-07-17",
    },
    {
        md_code: "MD-1004",
        salesman: "Grace Tan",
        cust_code: "CUST-01011",
        customer_name: "Sunrise Grocery",
        reason: "Wrong Address",
        date: "2026-07-18",
    },
    {
        md_code: "MD-1005",
        salesman: "Ryan Gutierrez",
        cust_code: "CUST-01312",
        customer_name: "Family Convenience Store",
        reason: "Store Closed",
        date: "2026-07-19",
    },
    {
        md_code: "MD-1001",
        salesman: "Juan Dela Cruz",
        cust_code: "CUST-00123",
        customer_name: "ABC Trading Corp.",
        reason: "Store Closed",
        date: "2026-07-15",
    },
    {
        md_code: "MD-1002",
        salesman: "Ana Reyes",
        cust_code: "CUST-00456",
        customer_name: "XYZ Mini Mart",
        reason: "Customer Not Available",
        date: "2026-07-16",
    },
    {
        md_code: "MD-1003",
        salesman: "Mark Villanueva",
        cust_code: "CUST-00789",
        customer_name: "Golden Harvest Store",
        reason: "No Stock Requirement",
        date: "2026-07-17",
    },
    {
        md_code: "MD-1004",
        salesman: "Grace Tan",
        cust_code: "CUST-01011",
        customer_name: "Sunrise Grocery",
        reason: "Wrong Address",
        date: "2026-07-18",
    },
    {
        md_code: "MD-1005",
        salesman: "Ryan Gutierrez",
        cust_code: "CUST-01312",
        customer_name: "Family Convenience Store",
        reason: "Store Closed",
        date: "2026-07-19",
    },
    {
        md_code: "MD-1001",
        salesman: "Juan Dela Cruz",
        cust_code: "CUST-00123",
        customer_name: "ABC Trading Corp.",
        reason: "Store Closed",
        date: "2026-07-15",
    },
    {
        md_code: "MD-1002",
        salesman: "Ana Reyes",
        cust_code: "CUST-00456",
        customer_name: "XYZ Mini Mart",
        reason: "Customer Not Available",
        date: "2026-07-16",
    },
    {
        md_code: "MD-1003",
        salesman: "Mark Villanueva",
        cust_code: "CUST-00789",
        customer_name: "Golden Harvest Store",
        reason: "No Stock Requirement",
        date: "2026-07-17",
    },
    {
        md_code: "MD-1004",
        salesman: "Grace Tan",
        cust_code: "CUST-01011",
        customer_name: "Sunrise Grocery",
        reason: "Wrong Address",
        date: "2026-07-18",
    },
    {
        md_code: "MD-1005",
        salesman: "Ryan Gutierrez",
        cust_code: "CUST-01312",
        customer_name: "Family Convenience Store",
        reason: "Store Closed",
        date: "2026-07-19",
    },
];

TableLoader.tableData(
    "#missedCallTable",
    MissedCallSampleData,
    MissedCallColumns,
    {
        scrollY : "300px"
    }
);