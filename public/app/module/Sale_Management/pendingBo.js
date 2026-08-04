import TableLoader  from "../../helper/TableLoader.js";

const PendingBoColumns = [
    {
        title: "MdCode",
        data: "md_code"
    },
    {
        title: "Salesman Type",
        data: "salesman_type"
    },
    {
        title: "Salesman",
        data: "salesman"
    },
    {
        title: "Transaction ID",
        data: "transaction_id"
    },
    {
        title: "Customer Code",
        data: "customer_code"
    },
    {
        title: "Customer Name",
        data: "customer_name"
    },
    {
        title: "Transaction Date",
        data: "transaction_date"
    },
    {
        title: "Total Amount",
        data: "total_amt"
    },
    {
        title: "Total BO Amount",
        data: "total_bo_amt"
    },
    {
        title: "Allowable BO Amount",
        data: "allowable_bo"
    },
    {
        title: "Excess BO Amount",
        data: "excess_bo_amt"
    },
    {
        title: "is Exceed",
        data: "is_exceed"
    },
    {
        title: "Approval Status",
        data: "approval_status"
    },
    {
        title: "Approved Date",
        data: "approved_date"
    },
    {
        title: "Remarks",
        data: "remarks"
    },
];

const RejectedBoColumns = [
     {
        title: "MdCode",
        data: "md_code"
    },
    {
        title: "Salesman Type",
        data: "salesman_type"
    },
    {
        title: "Salesman",
        data: "salesman"
    },
    {
        title: "Transaction ID",
        data: "transaction_id"
    },
    {
        title: "Customer Code",
        data: "customer_code"
    },
    {
        title: "Customer Name",
        data: "customer_name"
    },
    {
        title: "Transaction Date",
        data: "transaction_date"
    },
    {
        title: "Total Amount",
        data: "total_amt"
    },
    {
        title: "Total BO Amount",
        data: "total_bo_amt"
    },
    {
        title: "Allowable BO Amount",
        data: "allowable_bo"
    },
    {
        title: "Excess BO Amount",
        data: "excess_bo_amt"
    },
    {
        title: "is Exceed",
        data: "is_exceed"
    },
    {
        title: "Approval Status",
        data: "approval_status"
    },
    {
        title: "Approved Date",
        data: "approved_date"
    },
    {
        title: "Remarks",
        data: "remarks"
    },
];

const ApprovedBoColumns = [
     {
        title: "MdCode",
        data: "md_code"
    },
    {
        title: "Salesman Type",
        data: "salesman_type"
    },
    {
        title: "Salesman",
        data: "salesman"
    },
    {
        title: "Transaction ID",
        data: "transaction_id"
    },
    {
        title: "Customer Code",
        data: "customer_code"
    },
    {
        title: "Customer Name",
        data: "customer_name"
    },
    {
        title: "Transaction Date",
        data: "transaction_date"
    },
    {
        title: "Total Amount",
        data: "total_amt"
    },
    {
        title: "Total BO Amount",
        data: "total_bo_amt"
    },
    {
        title: "Allowable BO Amount",
        data: "allowable_bo"
    },
    {
        title: "Excess BO Amount",
        data: "excess_bo_amt"
    },
    {
        title: "is Exceed",
        data: "is_exceed"
    },
    {
        title: "Approval Status",
        data: "approval_status"
    },
    {
        title: "Approved Date",
        data: "approved_date"
    },
    {
        title: "Remarks",
        data: "remarks"
    },
];

TableLoader.tableData(
    "#PendingDataTable",
    [],
    PendingBoColumns,
);

TableLoader.tableData(
    "#RejectedDataTable",
    [],
    RejectedBoColumns,
);

TableLoader.tableData(
    "#ApprovedDataTable",
    [],
    ApprovedBoColumns,
);