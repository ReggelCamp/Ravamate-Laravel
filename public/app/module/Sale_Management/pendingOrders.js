// import TableLoader from "../../helper/TableLoader.js";
// import ComponentHelper from "../../helper/ComponentHelper.js";

// const PendingOrdersColumns = [
//     {
//         title: "Transaction ID",
//         data: "transaction_id"
//     },
//     {
//         title: "Date",
//         data: "date"
//     },
//     {
//         title: "Salesman",
//         data: "salesman"
//     },
//     {
//         title: "TNX #",
//         data: "tnx"
//     },
//     {
//         title: "Custcode",
//         data: "cust_code"
//     },
//     {
//         title: "Product Code",
//         data: "product_code"
//     },
//     {
//         title: "Description",
//         data: "description"
//     },
//     {
//         title: "Amount",
//         data: "amount"
//     },
//     {
//         title: "Remarks",
//         data: "remarks"
//     },
// ];

// TableLoader.tableData(
//     "#pendingOrdersTable",
//     [],
//     PendingOrdersColumns
// );

// ComponentHelper.dropdown().loadByApi({
//     url: "/salesmen",
//     dropdownId: "pendingOrderItems",
// })

import TableLoader from "../../helper/TableLoader.js";
import ComponentHelper from "../../helper/ComponentHelper.js";
import DatePicker from "../../helper/datePicker.js";
import "../../helper/exportDataTable.js";

const PendingOrdersColumns = [
    {
        title: "Transaction ID",
        data: "transaction_id"
    },
    {
        title: "Date",
        data: "date"
    },
    {
        title: "Salesman",
        data: "salesman"
    },
    {
        title: "TNX #",
        data: "tnx"
    },
    {
        title: "Custcode",
        data: "cust_code"
    },
    {
        title: "Product Code",
        data: "product_code"
    },
    {
        title: "Description",
        data: "description"
    },
    {
        title: "Amount",
        data: "amount"
    },
    {
        title: "Remarks",
        data: "remarks"
    },
];

const sampleData = [
    {
        transaction_id: "PO-10001",
        date: "2026-08-05",
        salesman: "Juan Dela Cruz",
        tnx: "TNX-50001",
        cust_code: "CUST001",
        product_code: "PRD1001",
        description: "Coca-Cola 1.5L",
        amount: "₱1,250.00",
        remarks: "Pending Approval"
    },
    {
        transaction_id: "PO-10002",
        date: "2026-08-05",
        salesman: "Maria Santos",
        tnx: "TNX-50002",
        cust_code: "CUST002",
        product_code: "PRD1002",
        description: "Sprite 1.5L",
        amount: "₱980.00",
        remarks: "Waiting for Stock"
    },
    {
        transaction_id: "PO-10003",
        date: "2026-08-04",
        salesman: "Pedro Reyes",
        tnx: "TNX-50003",
        cust_code: "CUST003",
        product_code: "PRD1003",
        description: "Royal 1.5L",
        amount: "₱1,750.00",
        remarks: "Pending Approval"
    },
    {
        transaction_id: "PO-10004",
        date: "2026-08-03",
        salesman: "Ana Garcia",
        tnx: "TNX-50004",
        cust_code: "CUST004",
        product_code: "PRD1004",
        description: "Minute Maid Orange",
        amount: "₱2,150.00",
        remarks: "Awaiting Confirmation"
    },
    {
        transaction_id: "PO-10005",
        date: "2026-08-02",
        salesman: "Jose Lim",
        tnx: "TNX-50005",
        cust_code: "CUST005",
        product_code: "PRD1005",
        description: "Wilkins Pure 500ml",
        amount: "₱650.00",
        remarks: "Pending Payment"
    },
    {
        transaction_id: "PO-10001",
        date: "2026-08-05",
        salesman: "Juan Dela Cruz",
        tnx: "TNX-50001",
        cust_code: "CUST001",
        product_code: "PRD1001",
        description: "Coca-Cola 1.5L",
        amount: "₱1,250.00",
        remarks: "Pending Approval"
    },
    {
        transaction_id: "PO-10002",
        date: "2026-08-05",
        salesman: "Maria Santos",
        tnx: "TNX-50002",
        cust_code: "CUST002",
        product_code: "PRD1002",
        description: "Sprite 1.5L",
        amount: "₱980.00",
        remarks: "Waiting for Stock"
    },
    {
        transaction_id: "PO-10003",
        date: "2026-08-04",
        salesman: "Pedro Reyes",
        tnx: "TNX-50003",
        cust_code: "CUST003",
        product_code: "PRD1003",
        description: "Royal 1.5L",
        amount: "₱1,750.00",
        remarks: "Pending Approval"
    },
    {
        transaction_id: "PO-10004",
        date: "2026-08-03",
        salesman: "Ana Garcia",
        tnx: "TNX-50004",
        cust_code: "CUST004",
        product_code: "PRD1004",
        description: "Minute Maid Orange",
        amount: "₱2,150.00",
        remarks: "Awaiting Confirmation"
    },
    {
        transaction_id: "PO-10005",
        date: "2026-08-02",
        salesman: "Jose Lim",
        tnx: "TNX-50005",
        cust_code: "CUST005",
        product_code: "PRD1005",
        description: "Wilkins Pure 500ml",
        amount: "₱650.00",
        remarks: "Pending Payment"
    },
    {
        transaction_id: "PO-10001",
        date: "2026-08-05",
        salesman: "Juan Dela Cruz",
        tnx: "TNX-50001",
        cust_code: "CUST001",
        product_code: "PRD1001",
        description: "Coca-Cola 1.5L",
        amount: "₱1,250.00",
        remarks: "Pending Approval"
    },
    {
        transaction_id: "PO-10002",
        date: "2026-08-05",
        salesman: "Maria Santos",
        tnx: "TNX-50002",
        cust_code: "CUST002",
        product_code: "PRD1002",
        description: "Sprite 1.5L",
        amount: "₱980.00",
        remarks: "Waiting for Stock"
    },
    {
        transaction_id: "PO-10003",
        date: "2026-08-04",
        salesman: "Pedro Reyes",
        tnx: "TNX-50003",
        cust_code: "CUST003",
        product_code: "PRD1003",
        description: "Royal 1.5L",
        amount: "₱1,750.00",
        remarks: "Pending Approval"
    },
    {
        transaction_id: "PO-10004",
        date: "2026-08-03",
        salesman: "Ana Garcia",
        tnx: "TNX-50004",
        cust_code: "CUST004",
        product_code: "PRD1004",
        description: "Minute Maid Orange",
        amount: "₱2,150.00",
        remarks: "Awaiting Confirmation"
    },
    {
        transaction_id: "PO-10005",
        date: "2026-08-02",
        salesman: "Jose Lim",
        tnx: "TNX-50005",
        cust_code: "CUST005",
        product_code: "PRD1005",
        description: "Wilkins Pure 500ml",
        amount: "₱650.00",
        remarks: "Pending Payment"
    },
    {
        transaction_id: "PO-10001",
        date: "2026-08-05",
        salesman: "Juan Dela Cruz",
        tnx: "TNX-50001",
        cust_code: "CUST001",
        product_code: "PRD1001",
        description: "Coca-Cola 1.5L",
        amount: "₱1,250.00",
        remarks: "Pending Approval"
    },
    {
        transaction_id: "PO-10002",
        date: "2026-08-05",
        salesman: "Maria Santos",
        tnx: "TNX-50002",
        cust_code: "CUST002",
        product_code: "PRD1002",
        description: "Sprite 1.5L",
        amount: "₱980.00",
        remarks: "Waiting for Stock"
    },
    {
        transaction_id: "PO-10003",
        date: "2026-08-04",
        salesman: "Pedro Reyes",
        tnx: "TNX-50003",
        cust_code: "CUST003",
        product_code: "PRD1003",
        description: "Royal 1.5L",
        amount: "₱1,750.00",
        remarks: "Pending Approval"
    },
    {
        transaction_id: "PO-10004",
        date: "2026-08-03",
        salesman: "Ana Garcia",
        tnx: "TNX-50004",
        cust_code: "CUST004",
        product_code: "PRD1004",
        description: "Minute Maid Orange",
        amount: "₱2,150.00",
        remarks: "Awaiting Confirmation"
    },
    {
        transaction_id: "PO-10005",
        date: "2026-08-02",
        salesman: "Jose Lim",
        tnx: "TNX-50005",
        cust_code: "CUST005",
        product_code: "PRD1005",
        description: "Wilkins Pure 500ml",
        amount: "₱650.00",
        remarks: "Pending Payment"
    },
];

TableLoader.tableData(
    "#pendingOrdersTable",
    sampleData,
    PendingOrdersColumns,
    {
        scrollY: "300px"
    }
);

$(document).ready(function () {
    DatePicker.init();
});