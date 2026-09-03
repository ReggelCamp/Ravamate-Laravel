// import TableLoader from "../../helper/TableLoader.js";

// const SalesReturnColumns = [
//     {
//         title: "Mdcode",
//         data: "mdcode"
//     },
//     {
//         title: "Transaction ID",
//         data: "transaction_id"
//     },
//     {
//         title: "Ref No.",
//         data: "ref_no"
//     },
//     {
//         title: "Customer Code",
//         data: "customer_code"
//     },
//     {
//         title: "Delivery Date",
//         data: "delivery_date"
//     },
//     {
//         title: "Stock Code",
//         data: "stock_code"
//     },
//     {
//         title: "Description",
//         data: "description"
//     },
//     {
//         title: "UOM",
//         data: "uom"
//     },
//     {
//         title: "Qty",
//         data: "qty"
//     },
//     {
//         title: "Piece Price",
//         data: "piece_price"
//     },
//     {
//         title: "ReasonCode",
//         data: "reason_code"
//     },
//     {
//         title: "BO Reason",
//         data: "bo_reason"
//     }
// ];

// TableLoader.tableData(
//     "#salesRetBoTable",
//     [],
//     SalesReturnColumns
// );


import TableLoader from "../../helper/TableLoader.js";
import DatePicker from "../../helper/datePicker.js";
import "../../helper/exportDataTable.js";

const SalesReturnColumns = [
    {
        title: "Mdcode",
        data: "mdcode"
    },
    {
        title: "Transaction ID",
        data: "transaction_id"
    },
    {
        title: "Ref No.",
        data: "ref_no"
    },
    {
        title: "Customer Code",
        data: "customer_code"
    },
    {
        title: "Delivery Date",
        data: "delivery_date"
    },
    {
        title: "Stock Code",
        data: "stock_code"
    },
    {
        title: "Description",
        data: "description"
    },
    {
        title: "UOM",
        data: "uom"
    },
    {
        title: "Qty",
        data: "qty"
    },
    {
        title: "Piece Price",
        data: "piece_price"
    },
    {
        title: "ReasonCode",
        data: "reason_code"
    },
    {
        title: "BO Reason",
        data: "bo_reason"
    }
];

const sampleData = [
    {
        mdcode: "MD001",
        transaction_id: "SR-10001",
        ref_no: "REF-50001",
        customer_code: "CUST001",
        delivery_date: "2026-08-05",
        stock_code: "STK1001",
        description: "Coca-Cola 1.5L",
        uom: "Case",
        qty: 5,
        piece_price: "₱250.00",
        reason_code: "RC01",
        bo_reason: "Damaged Packaging"
    },
    {
        mdcode: "MD002",
        transaction_id: "SR-10002",
        ref_no: "REF-50002",
        customer_code: "CUST002",
        delivery_date: "2026-08-04",
        stock_code: "STK1002",
        description: "Sprite 1.5L",
        uom: "Case",
        qty: 3,
        piece_price: "₱245.00",
        reason_code: "RC02",
        bo_reason: "Expired Product"
    },
    {
        mdcode: "MD003",
        transaction_id: "SR-10003",
        ref_no: "REF-50003",
        customer_code: "CUST003",
        delivery_date: "2026-08-03",
        stock_code: "STK1003",
        description: "Royal 1.5L",
        uom: "Case",
        qty: 2,
        piece_price: "₱240.00",
        reason_code: "RC03",
        bo_reason: "Wrong Item Delivered"
    },
    {
        mdcode: "MD004",
        transaction_id: "SR-10004",
        ref_no: "REF-50004",
        customer_code: "CUST004",
        delivery_date: "2026-08-02",
        stock_code: "STK1004",
        description: "Minute Maid Orange",
        uom: "Bottle",
        qty: 10,
        piece_price: "₱65.00",
        reason_code: "RC04",
        bo_reason: "Customer Rejected"
    },
    {
        mdcode: "MD005",
        transaction_id: "SR-10005",
        ref_no: "REF-50005",
        customer_code: "CUST005",
        delivery_date: "2026-08-01",
        stock_code: "STK1005",
        description: "Wilkins Pure 500ml",
        uom: "Pack",
        qty: 8,
        piece_price: "₱120.00",
        reason_code: "RC05",
        bo_reason: "Leaking Product"
    },
    {
        mdcode: "MD001",
        transaction_id: "SR-10001",
        ref_no: "REF-50001",
        customer_code: "CUST001",
        delivery_date: "2026-08-05",
        stock_code: "STK1001",
        description: "Coca-Cola 1.5L",
        uom: "Case",
        qty: 5,
        piece_price: "₱250.00",
        reason_code: "RC01",
        bo_reason: "Damaged Packaging"
    },
    {
        mdcode: "MD002",
        transaction_id: "SR-10002",
        ref_no: "REF-50002",
        customer_code: "CUST002",
        delivery_date: "2026-08-04",
        stock_code: "STK1002",
        description: "Sprite 1.5L",
        uom: "Case",
        qty: 3,
        piece_price: "₱245.00",
        reason_code: "RC02",
        bo_reason: "Expired Product"
    },
    {
        mdcode: "MD003",
        transaction_id: "SR-10003",
        ref_no: "REF-50003",
        customer_code: "CUST003",
        delivery_date: "2026-08-03",
        stock_code: "STK1003",
        description: "Royal 1.5L",
        uom: "Case",
        qty: 2,
        piece_price: "₱240.00",
        reason_code: "RC03",
        bo_reason: "Wrong Item Delivered"
    },
    {
        mdcode: "MD004",
        transaction_id: "SR-10004",
        ref_no: "REF-50004",
        customer_code: "CUST004",
        delivery_date: "2026-08-02",
        stock_code: "STK1004",
        description: "Minute Maid Orange",
        uom: "Bottle",
        qty: 10,
        piece_price: "₱65.00",
        reason_code: "RC04",
        bo_reason: "Customer Rejected"
    },
    {
        mdcode: "MD005",
        transaction_id: "SR-10005",
        ref_no: "REF-50005",
        customer_code: "CUST005",
        delivery_date: "2026-08-01",
        stock_code: "STK1005",
        description: "Wilkins Pure 500ml",
        uom: "Pack",
        qty: 8,
        piece_price: "₱120.00",
        reason_code: "RC05",
        bo_reason: "Leaking Product"
    },
    {
        mdcode: "MD001",
        transaction_id: "SR-10001",
        ref_no: "REF-50001",
        customer_code: "CUST001",
        delivery_date: "2026-08-05",
        stock_code: "STK1001",
        description: "Coca-Cola 1.5L",
        uom: "Case",
        qty: 5,
        piece_price: "₱250.00",
        reason_code: "RC01",
        bo_reason: "Damaged Packaging"
    },
    {
        mdcode: "MD002",
        transaction_id: "SR-10002",
        ref_no: "REF-50002",
        customer_code: "CUST002",
        delivery_date: "2026-08-04",
        stock_code: "STK1002",
        description: "Sprite 1.5L",
        uom: "Case",
        qty: 3,
        piece_price: "₱245.00",
        reason_code: "RC02",
        bo_reason: "Expired Product"
    },
    {
        mdcode: "MD003",
        transaction_id: "SR-10003",
        ref_no: "REF-50003",
        customer_code: "CUST003",
        delivery_date: "2026-08-03",
        stock_code: "STK1003",
        description: "Royal 1.5L",
        uom: "Case",
        qty: 2,
        piece_price: "₱240.00",
        reason_code: "RC03",
        bo_reason: "Wrong Item Delivered"
    },
    {
        mdcode: "MD004",
        transaction_id: "SR-10004",
        ref_no: "REF-50004",
        customer_code: "CUST004",
        delivery_date: "2026-08-02",
        stock_code: "STK1004",
        description: "Minute Maid Orange",
        uom: "Bottle",
        qty: 10,
        piece_price: "₱65.00",
        reason_code: "RC04",
        bo_reason: "Customer Rejected"
    },
    {
        mdcode: "MD005",
        transaction_id: "SR-10005",
        ref_no: "REF-50005",
        customer_code: "CUST005",
        delivery_date: "2026-08-01",
        stock_code: "STK1005",
        description: "Wilkins Pure 500ml",
        uom: "Pack",
        qty: 8,
        piece_price: "₱120.00",
        reason_code: "RC05",
        bo_reason: "Leaking Product"
    },
    {
        mdcode: "MD001",
        transaction_id: "SR-10001",
        ref_no: "REF-50001",
        customer_code: "CUST001",
        delivery_date: "2026-08-05",
        stock_code: "STK1001",
        description: "Coca-Cola 1.5L",
        uom: "Case",
        qty: 5,
        piece_price: "₱250.00",
        reason_code: "RC01",
        bo_reason: "Damaged Packaging"
    },
    {
        mdcode: "MD002",
        transaction_id: "SR-10002",
        ref_no: "REF-50002",
        customer_code: "CUST002",
        delivery_date: "2026-08-04",
        stock_code: "STK1002",
        description: "Sprite 1.5L",
        uom: "Case",
        qty: 3,
        piece_price: "₱245.00",
        reason_code: "RC02",
        bo_reason: "Expired Product"
    },
    {
        mdcode: "MD003",
        transaction_id: "SR-10003",
        ref_no: "REF-50003",
        customer_code: "CUST003",
        delivery_date: "2026-08-03",
        stock_code: "STK1003",
        description: "Royal 1.5L",
        uom: "Case",
        qty: 2,
        piece_price: "₱240.00",
        reason_code: "RC03",
        bo_reason: "Wrong Item Delivered"
    },
    {
        mdcode: "MD004",
        transaction_id: "SR-10004",
        ref_no: "REF-50004",
        customer_code: "CUST004",
        delivery_date: "2026-08-02",
        stock_code: "STK1004",
        description: "Minute Maid Orange",
        uom: "Bottle",
        qty: 10,
        piece_price: "₱65.00",
        reason_code: "RC04",
        bo_reason: "Customer Rejected"
    },
    {
        mdcode: "MD005",
        transaction_id: "SR-10005",
        ref_no: "REF-50005",
        customer_code: "CUST005",
        delivery_date: "2026-08-01",
        stock_code: "STK1005",
        description: "Wilkins Pure 500ml",
        uom: "Pack",
        qty: 8,
        piece_price: "₱120.00",
        reason_code: "RC05",
        bo_reason: "Leaking Product"
    },
    {
        mdcode: "MD001",
        transaction_id: "SR-10001",
        ref_no: "REF-50001",
        customer_code: "CUST001",
        delivery_date: "2026-08-05",
        stock_code: "STK1001",
        description: "Coca-Cola 1.5L",
        uom: "Case",
        qty: 5,
        piece_price: "₱250.00",
        reason_code: "RC01",
        bo_reason: "Damaged Packaging"
    },
    {
        mdcode: "MD002",
        transaction_id: "SR-10002",
        ref_no: "REF-50002",
        customer_code: "CUST002",
        delivery_date: "2026-08-04",
        stock_code: "STK1002",
        description: "Sprite 1.5L",
        uom: "Case",
        qty: 3,
        piece_price: "₱245.00",
        reason_code: "RC02",
        bo_reason: "Expired Product"
    },
    {
        mdcode: "MD003",
        transaction_id: "SR-10003",
        ref_no: "REF-50003",
        customer_code: "CUST003",
        delivery_date: "2026-08-03",
        stock_code: "STK1003",
        description: "Royal 1.5L",
        uom: "Case",
        qty: 2,
        piece_price: "₱240.00",
        reason_code: "RC03",
        bo_reason: "Wrong Item Delivered"
    },
    {
        mdcode: "MD004",
        transaction_id: "SR-10004",
        ref_no: "REF-50004",
        customer_code: "CUST004",
        delivery_date: "2026-08-02",
        stock_code: "STK1004",
        description: "Minute Maid Orange",
        uom: "Bottle",
        qty: 10,
        piece_price: "₱65.00",
        reason_code: "RC04",
        bo_reason: "Customer Rejected"
    },
    {
        mdcode: "MD005",
        transaction_id: "SR-10005",
        ref_no: "REF-50005",
        customer_code: "CUST005",
        delivery_date: "2026-08-01",
        stock_code: "STK1005",
        description: "Wilkins Pure 500ml",
        uom: "Pack",
        qty: 8,
        piece_price: "₱120.00",
        reason_code: "RC05",
        bo_reason: "Leaking Product"
    },
    {
        mdcode: "MD001",
        transaction_id: "SR-10001",
        ref_no: "REF-50001",
        customer_code: "CUST001",
        delivery_date: "2026-08-05",
        stock_code: "STK1001",
        description: "Coca-Cola 1.5L",
        uom: "Case",
        qty: 5,
        piece_price: "₱250.00",
        reason_code: "RC01",
        bo_reason: "Damaged Packaging"
    },
    {
        mdcode: "MD002",
        transaction_id: "SR-10002",
        ref_no: "REF-50002",
        customer_code: "CUST002",
        delivery_date: "2026-08-04",
        stock_code: "STK1002",
        description: "Sprite 1.5L",
        uom: "Case",
        qty: 3,
        piece_price: "₱245.00",
        reason_code: "RC02",
        bo_reason: "Expired Product"
    },
    {
        mdcode: "MD003",
        transaction_id: "SR-10003",
        ref_no: "REF-50003",
        customer_code: "CUST003",
        delivery_date: "2026-08-03",
        stock_code: "STK1003",
        description: "Royal 1.5L",
        uom: "Case",
        qty: 2,
        piece_price: "₱240.00",
        reason_code: "RC03",
        bo_reason: "Wrong Item Delivered"
    },
    {
        mdcode: "MD004",
        transaction_id: "SR-10004",
        ref_no: "REF-50004",
        customer_code: "CUST004",
        delivery_date: "2026-08-02",
        stock_code: "STK1004",
        description: "Minute Maid Orange",
        uom: "Bottle",
        qty: 10,
        piece_price: "₱65.00",
        reason_code: "RC04",
        bo_reason: "Customer Rejected"
    },
    {
        mdcode: "MD005",
        transaction_id: "SR-10005",
        ref_no: "REF-50005",
        customer_code: "CUST005",
        delivery_date: "2026-08-01",
        stock_code: "STK1005",
        description: "Wilkins Pure 500ml",
        uom: "Pack",
        qty: 8,
        piece_price: "₱120.00",
        reason_code: "RC05",
        bo_reason: "Leaking Product"
    },
];

TableLoader.tableData(
    "#salesRetBoTable",
    sampleData,
    SalesReturnColumns,
    {
        // scrollY:'50vh',
        // pageLength: 25
    }
);

$(document).ready(function () {
    DatePicker.init();
});