// import TableLoader  from "../../helper/TableLoader.js";

// const PendingBoColumns = [
//     {
//         title: "MdCode",
//         data: "md_code"
//     },
//     {
//         title: "Salesman Type",
//         data: "salesman_type"
//     },
//     {
//         title: "Salesman",
//         data: "salesman"
//     },
//     {
//         title: "Transaction ID",
//         data: "transaction_id"
//     },
//     {
//         title: "Customer Code",
//         data: "customer_code"
//     },
//     {
//         title: "Customer Name",
//         data: "customer_name"
//     },
//     {
//         title: "Transaction Date",
//         data: "transaction_date"
//     },
//     {
//         title: "Total Amount",
//         data: "total_amt"
//     },
//     {
//         title: "Total BO Amount",
//         data: "total_bo_amt"
//     },
//     {
//         title: "Allowable BO Amount",
//         data: "allowable_bo"
//     },
//     {
//         title: "Excess BO Amount",
//         data: "excess_bo_amt"
//     },
//     {
//         title: "is Exceed",
//         data: "is_exceed"
//     },
//     {
//         title: "Approval Status",
//         data: "approval_status"
//     },
//     {
//         title: "Approved Date",
//         data: "approved_date"
//     },
//     {
//         title: "Remarks",
//         data: "remarks"
//     },
// ];

// const RejectedBoColumns = [
//      {
//         title: "MdCode",
//         data: "md_code"
//     },
//     {
//         title: "Salesman Type",
//         data: "salesman_type"
//     },
//     {
//         title: "Salesman",
//         data: "salesman"
//     },
//     {
//         title: "Transaction ID",
//         data: "transaction_id"
//     },
//     {
//         title: "Customer Code",
//         data: "customer_code"
//     },
//     {
//         title: "Customer Name",
//         data: "customer_name"
//     },
//     {
//         title: "Transaction Date",
//         data: "transaction_date"
//     },
//     {
//         title: "Total Amount",
//         data: "total_amt"
//     },
//     {
//         title: "Total BO Amount",
//         data: "total_bo_amt"
//     },
//     {
//         title: "Allowable BO Amount",
//         data: "allowable_bo"
//     },
//     {
//         title: "Excess BO Amount",
//         data: "excess_bo_amt"
//     },
//     {
//         title: "is Exceed",
//         data: "is_exceed"
//     },
//     {
//         title: "Approval Status",
//         data: "approval_status"
//     },
//     {
//         title: "Approved Date",
//         data: "approved_date"
//     },
//     {
//         title: "Remarks",
//         data: "remarks"
//     },
// ];

// const ApprovedBoColumns = [
//      {
//         title: "MdCode",
//         data: "md_code"
//     },
//     {
//         title: "Salesman Type",
//         data: "salesman_type"
//     },
//     {
//         title: "Salesman",
//         data: "salesman"
//     },
//     {
//         title: "Transaction ID",
//         data: "transaction_id"
//     },
//     {
//         title: "Customer Code",
//         data: "customer_code"
//     },
//     {
//         title: "Customer Name",
//         data: "customer_name"
//     },
//     {
//         title: "Transaction Date",
//         data: "transaction_date"
//     },
//     {
//         title: "Total Amount",
//         data: "total_amt"
//     },
//     {
//         title: "Total BO Amount",
//         data: "total_bo_amt"
//     },
//     {
//         title: "Allowable BO Amount",
//         data: "allowable_bo"
//     },
//     {
//         title: "Excess BO Amount",
//         data: "excess_bo_amt"
//     },
//     {
//         title: "is Exceed",
//         data: "is_exceed"
//     },
//     {
//         title: "Approval Status",
//         data: "approval_status"
//     },
//     {
//         title: "Approved Date",
//         data: "approved_date"
//     },
//     {
//         title: "Remarks",
//         data: "remarks"
//     },
// ];

// TableLoader.tableData(
//     "#PendingDataTable",
//     [],
//     PendingBoColumns,
// );

// TableLoader.tableData(
//     "#RejectedDataTable",
//     [],
//     RejectedBoColumns,
// );

// TableLoader.tableData(
//     "#ApprovedDataTable",
//     [],
//     ApprovedBoColumns,
// );

import TableLoader from "../../helper/TableLoader.js";
import DatePicker from "../../helper/datePicker.js";
import "../../helper/exportDataTable.js";

const PendingBoColumns = [
    { title: "MdCode", data: "md_code" },
    { title: "Salesman Type", data: "salesman_type" },
    { title: "Salesman", data: "salesman" },
    { title: "Transaction ID", data: "transaction_id" },
    { title: "Customer Code", data: "customer_code" },
    { title: "Customer Name", data: "customer_name" },
    { title: "Transaction Date", data: "transaction_date" },
    { title: "Total Amount", data: "total_amt" },
    { title: "Total BO Amount", data: "total_bo_amt" },
    { title: "Allowable BO Amount", data: "allowable_bo" },
    { title: "Excess BO Amount", data: "excess_bo_amt" },
    { title: "is Exceed", data: "is_exceed" },
    { title: "Approval Status", data: "approval_status" },
    { title: "Approved Date", data: "approved_date" },
    { title: "Remarks", data: "remarks" },
];

// Since all columns are identical, reuse the same array.
const RejectedBoColumns = PendingBoColumns;
const ApprovedBoColumns = PendingBoColumns;

const sampleData = [
    {
        md_code: "MD001",
        salesman_type: "Van Sales",
        salesman: "Juan Dela Cruz",
        transaction_id: "TXN-10001",
        customer_code: "CUST001",
        customer_name: "ABC Store",
        transaction_date: "2026-08-05",
        total_amt: "₱12,500.00",
        total_bo_amt: "₱1,200.00",
        allowable_bo: "₱1,000.00",
        excess_bo_amt: "₱200.00",
        is_exceed: "Yes",
        approval_status: "Pending",
        approved_date: "-",
        remarks: "For approval"
    },
    {
        md_code: "MD002",
        salesman_type: "Pre-Sales",
        salesman: "Maria Santos",
        transaction_id: "TXN-10002",
        customer_code: "CUST002",
        customer_name: "XYZ Mart",
        transaction_date: "2026-08-04",
        total_amt: "₱8,700.00",
        total_bo_amt: "₱500.00",
        allowable_bo: "₱1,000.00",
        excess_bo_amt: "₱0.00",
        is_exceed: "No",
        approval_status: "Approved",
        approved_date: "2026-08-05",
        remarks: "Approved by Manager"
    },
    {
        md_code: "MD003",
        salesman_type: "Van Sales",
        salesman: "Pedro Reyes",
        transaction_id: "TXN-10003",
        customer_code: "CUST003",
        customer_name: "LMN Grocery",
        transaction_date: "2026-08-03",
        total_amt: "₱15,000.00",
        total_bo_amt: "₱2,000.00",
        allowable_bo: "₱1,500.00",
        excess_bo_amt: "₱500.00",
        is_exceed: "Yes",
        approval_status: "Rejected",
        approved_date: "2026-08-04",
        remarks: "BO limit exceeded"
    },
    {
        md_code: "MD004",
        salesman_type: "Distributor",
        salesman: "Ana Garcia",
        transaction_id: "TXN-10004",
        customer_code: "CUST004",
        customer_name: "Fresh Market",
        transaction_date: "2026-08-02",
        total_amt: "₱20,300.00",
        total_bo_amt: "₱800.00",
        allowable_bo: "₱1,000.00",
        excess_bo_amt: "₱0.00",
        is_exceed: "No",
        approval_status: "Approved",
        approved_date: "2026-08-03",
        remarks: "Within limit"
    },
    {
        md_code: "MD005",
        salesman_type: "Van Sales",
        salesman: "Jose Lim",
        transaction_id: "TXN-10005",
        customer_code: "CUST005",
        customer_name: "Corner Shop",
        transaction_date: "2026-08-01",
        total_amt: "₱5,400.00",
        total_bo_amt: "₱900.00",
        allowable_bo: "₱700.00",
        excess_bo_amt: "₱200.00",
        is_exceed: "Yes",
        approval_status: "Pending",
        approved_date: "-",
        remarks: "Waiting for supervisor"
    },
    {
        md_code: "MD001",
        salesman_type: "Van Sales",
        salesman: "Juan Dela Cruz",
        transaction_id: "TXN-10001",
        customer_code: "CUST001",
        customer_name: "ABC Store",
        transaction_date: "2026-08-05",
        total_amt: "₱12,500.00",
        total_bo_amt: "₱1,200.00",
        allowable_bo: "₱1,000.00",
        excess_bo_amt: "₱200.00",
        is_exceed: "Yes",
        approval_status: "Pending",
        approved_date: "-",
        remarks: "For approval"
    },
    {
        md_code: "MD002",
        salesman_type: "Pre-Sales",
        salesman: "Maria Santos",
        transaction_id: "TXN-10002",
        customer_code: "CUST002",
        customer_name: "XYZ Mart",
        transaction_date: "2026-08-04",
        total_amt: "₱8,700.00",
        total_bo_amt: "₱500.00",
        allowable_bo: "₱1,000.00",
        excess_bo_amt: "₱0.00",
        is_exceed: "No",
        approval_status: "Approved",
        approved_date: "2026-08-05",
        remarks: "Approved by Manager"
    },
    {
        md_code: "MD003",
        salesman_type: "Van Sales",
        salesman: "Pedro Reyes",
        transaction_id: "TXN-10003",
        customer_code: "CUST003",
        customer_name: "LMN Grocery",
        transaction_date: "2026-08-03",
        total_amt: "₱15,000.00",
        total_bo_amt: "₱2,000.00",
        allowable_bo: "₱1,500.00",
        excess_bo_amt: "₱500.00",
        is_exceed: "Yes",
        approval_status: "Rejected",
        approved_date: "2026-08-04",
        remarks: "BO limit exceeded"
    },
    {
        md_code: "MD004",
        salesman_type: "Distributor",
        salesman: "Ana Garcia",
        transaction_id: "TXN-10004",
        customer_code: "CUST004",
        customer_name: "Fresh Market",
        transaction_date: "2026-08-02",
        total_amt: "₱20,300.00",
        total_bo_amt: "₱800.00",
        allowable_bo: "₱1,000.00",
        excess_bo_amt: "₱0.00",
        is_exceed: "No",
        approval_status: "Approved",
        approved_date: "2026-08-03",
        remarks: "Within limit"
    },
    {
        md_code: "MD005",
        salesman_type: "Van Sales",
        salesman: "Jose Lim",
        transaction_id: "TXN-10005",
        customer_code: "CUST005",
        customer_name: "Corner Shop",
        transaction_date: "2026-08-01",
        total_amt: "₱5,400.00",
        total_bo_amt: "₱900.00",
        allowable_bo: "₱700.00",
        excess_bo_amt: "₱200.00",
        is_exceed: "Yes",
        approval_status: "Pending",
        approved_date: "-",
        remarks: "Waiting for supervisor"
    },
    {
        md_code: "MD001",
        salesman_type: "Van Sales",
        salesman: "Juan Dela Cruz",
        transaction_id: "TXN-10001",
        customer_code: "CUST001",
        customer_name: "ABC Store",
        transaction_date: "2026-08-05",
        total_amt: "₱12,500.00",
        total_bo_amt: "₱1,200.00",
        allowable_bo: "₱1,000.00",
        excess_bo_amt: "₱200.00",
        is_exceed: "Yes",
        approval_status: "Pending",
        approved_date: "-",
        remarks: "For approval"
    },
    {
        md_code: "MD002",
        salesman_type: "Pre-Sales",
        salesman: "Maria Santos",
        transaction_id: "TXN-10002",
        customer_code: "CUST002",
        customer_name: "XYZ Mart",
        transaction_date: "2026-08-04",
        total_amt: "₱8,700.00",
        total_bo_amt: "₱500.00",
        allowable_bo: "₱1,000.00",
        excess_bo_amt: "₱0.00",
        is_exceed: "No",
        approval_status: "Approved",
        approved_date: "2026-08-05",
        remarks: "Approved by Manager"
    },
    {
        md_code: "MD003",
        salesman_type: "Van Sales",
        salesman: "Pedro Reyes",
        transaction_id: "TXN-10003",
        customer_code: "CUST003",
        customer_name: "LMN Grocery",
        transaction_date: "2026-08-03",
        total_amt: "₱15,000.00",
        total_bo_amt: "₱2,000.00",
        allowable_bo: "₱1,500.00",
        excess_bo_amt: "₱500.00",
        is_exceed: "Yes",
        approval_status: "Rejected",
        approved_date: "2026-08-04",
        remarks: "BO limit exceeded"
    },
    {
        md_code: "MD004",
        salesman_type: "Distributor",
        salesman: "Ana Garcia",
        transaction_id: "TXN-10004",
        customer_code: "CUST004",
        customer_name: "Fresh Market",
        transaction_date: "2026-08-02",
        total_amt: "₱20,300.00",
        total_bo_amt: "₱800.00",
        allowable_bo: "₱1,000.00",
        excess_bo_amt: "₱0.00",
        is_exceed: "No",
        approval_status: "Approved",
        approved_date: "2026-08-03",
        remarks: "Within limit"
    },
    {
        md_code: "MD005",
        salesman_type: "Van Sales",
        salesman: "Jose Lim",
        transaction_id: "TXN-10005",
        customer_code: "CUST005",
        customer_name: "Corner Shop",
        transaction_date: "2026-08-01",
        total_amt: "₱5,400.00",
        total_bo_amt: "₱900.00",
        allowable_bo: "₱700.00",
        excess_bo_amt: "₱200.00",
        is_exceed: "Yes",
        approval_status: "Pending",
        approved_date: "-",
        remarks: "Waiting for supervisor"
    },{
        md_code: "MD001",
        salesman_type: "Van Sales",
        salesman: "Juan Dela Cruz",
        transaction_id: "TXN-10001",
        customer_code: "CUST001",
        customer_name: "ABC Store",
        transaction_date: "2026-08-05",
        total_amt: "₱12,500.00",
        total_bo_amt: "₱1,200.00",
        allowable_bo: "₱1,000.00",
        excess_bo_amt: "₱200.00",
        is_exceed: "Yes",
        approval_status: "Pending",
        approved_date: "-",
        remarks: "For approval"
    },
    {
        md_code: "MD002",
        salesman_type: "Pre-Sales",
        salesman: "Maria Santos",
        transaction_id: "TXN-10002",
        customer_code: "CUST002",
        customer_name: "XYZ Mart",
        transaction_date: "2026-08-04",
        total_amt: "₱8,700.00",
        total_bo_amt: "₱500.00",
        allowable_bo: "₱1,000.00",
        excess_bo_amt: "₱0.00",
        is_exceed: "No",
        approval_status: "Approved",
        approved_date: "2026-08-05",
        remarks: "Approved by Manager"
    },
    {
        md_code: "MD003",
        salesman_type: "Van Sales",
        salesman: "Pedro Reyes",
        transaction_id: "TXN-10003",
        customer_code: "CUST003",
        customer_name: "LMN Grocery",
        transaction_date: "2026-08-03",
        total_amt: "₱15,000.00",
        total_bo_amt: "₱2,000.00",
        allowable_bo: "₱1,500.00",
        excess_bo_amt: "₱500.00",
        is_exceed: "Yes",
        approval_status: "Rejected",
        approved_date: "2026-08-04",
        remarks: "BO limit exceeded"
    },
    {
        md_code: "MD004",
        salesman_type: "Distributor",
        salesman: "Ana Garcia",
        transaction_id: "TXN-10004",
        customer_code: "CUST004",
        customer_name: "Fresh Market",
        transaction_date: "2026-08-02",
        total_amt: "₱20,300.00",
        total_bo_amt: "₱800.00",
        allowable_bo: "₱1,000.00",
        excess_bo_amt: "₱0.00",
        is_exceed: "No",
        approval_status: "Approved",
        approved_date: "2026-08-03",
        remarks: "Within limit"
    },
    {
        md_code: "MD005",
        salesman_type: "Van Sales",
        salesman: "Jose Lim",
        transaction_id: "TXN-10005",
        customer_code: "CUST005",
        customer_name: "Corner Shop",
        transaction_date: "2026-08-01",
        total_amt: "₱5,400.00",
        total_bo_amt: "₱900.00",
        allowable_bo: "₱700.00",
        excess_bo_amt: "₱200.00",
        is_exceed: "Yes",
        approval_status: "Pending",
        approved_date: "-",
        remarks: "Waiting for supervisor"
    }
];

TableLoader.tableData(
    "#PendingDataTable",
    sampleData,
    PendingBoColumns,
    {   
        pageLength: 25,
        scrollY: "45vh"
    }
);

TableLoader.tableData(
    "#RejectedDataTable",
    sampleData,
    RejectedBoColumns,
    {
        pageLength: 25,
        scrollY: "45vh",
        
    }
);

TableLoader.tableData(
    "#ApprovedDataTable",
    sampleData,
    ApprovedBoColumns,
    {
        pageLength: 25,
        scrollY: "45vh"
    }
);

$(document).ready(function () {
    DatePicker.init();
});