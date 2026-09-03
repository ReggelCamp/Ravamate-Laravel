// import TableLoader from "../../helper/TableLoader.js";

// const SalesRetRgsColumns = [
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
//     "#salesRetRgsTable",
//     [],
//     SalesRetRgsColumns
// );

import TableLoader from "../../helper/TableLoader.js";
import DatePicker from "../../helper/datePicker.js";
import "../../helper/exportDataTable.js";

const SalesRetRgsColumns = [
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
        transaction_id: "RGS-10001",
        ref_no: "REF-60001",
        customer_code: "CUST001",
        delivery_date: "2026-08-05",
        stock_code: "STK1001",
        description: "Coca-Cola 1.5L",
        uom: "Case",
        qty: 4,
        piece_price: "₱250.00",
        reason_code: "RGS01",
        bo_reason: "Broken Bottle"
    },
    {
        mdcode: "MD002",
        transaction_id: "RGS-10002",
        ref_no: "REF-60002",
        customer_code: "CUST002",
        delivery_date: "2026-08-04",
        stock_code: "STK1002",
        description: "Sprite 1.5L",
        uom: "Case",
        qty: 6,
        piece_price: "₱245.00",
        reason_code: "RGS02",
        bo_reason: "Near Expiry"
    },
    {
        mdcode: "MD003",
        transaction_id: "RGS-10003",
        ref_no: "REF-60003",
        customer_code: "CUST003",
        delivery_date: "2026-08-03",
        stock_code: "STK1003",
        description: "Royal 1.5L",
        uom: "Case",
        qty: 3,
        piece_price: "₱240.00",
        reason_code: "RGS03",
        bo_reason: "Incorrect Delivery"
    },
    {
        mdcode: "MD004",
        transaction_id: "RGS-10004",
        ref_no: "REF-60004",
        customer_code: "CUST004",
        delivery_date: "2026-08-02",
        stock_code: "STK1004",
        description: "Minute Maid Orange",
        uom: "Bottle",
        qty: 12,
        piece_price: "₱65.00",
        reason_code: "RGS04",
        bo_reason: "Customer Return"
    },
    {
        mdcode: "MD005",
        transaction_id: "RGS-10005",
        ref_no: "REF-60005",
        customer_code: "CUST005",
        delivery_date: "2026-08-01",
        stock_code: "STK1005",
        description: "Wilkins Pure 500ml",
        uom: "Pack",
        qty: 10,
        piece_price: "₱120.00",
        reason_code: "RGS05",
        bo_reason: "Packaging Defect"
    },
    {
        mdcode: "MD001",
        transaction_id: "RGS-10001",
        ref_no: "REF-60001",
        customer_code: "CUST001",
        delivery_date: "2026-08-05",
        stock_code: "STK1001",
        description: "Coca-Cola 1.5L",
        uom: "Case",
        qty: 4,
        piece_price: "₱250.00",
        reason_code: "RGS01",
        bo_reason: "Broken Bottle"
    },
    {
        mdcode: "MD002",
        transaction_id: "RGS-10002",
        ref_no: "REF-60002",
        customer_code: "CUST002",
        delivery_date: "2026-08-04",
        stock_code: "STK1002",
        description: "Sprite 1.5L",
        uom: "Case",
        qty: 6,
        piece_price: "₱245.00",
        reason_code: "RGS02",
        bo_reason: "Near Expiry"
    },
    {
        mdcode: "MD003",
        transaction_id: "RGS-10003",
        ref_no: "REF-60003",
        customer_code: "CUST003",
        delivery_date: "2026-08-03",
        stock_code: "STK1003",
        description: "Royal 1.5L",
        uom: "Case",
        qty: 3,
        piece_price: "₱240.00",
        reason_code: "RGS03",
        bo_reason: "Incorrect Delivery"
    },
    {
        mdcode: "MD004",
        transaction_id: "RGS-10004",
        ref_no: "REF-60004",
        customer_code: "CUST004",
        delivery_date: "2026-08-02",
        stock_code: "STK1004",
        description: "Minute Maid Orange",
        uom: "Bottle",
        qty: 12,
        piece_price: "₱65.00",
        reason_code: "RGS04",
        bo_reason: "Customer Return"
    },
    {
        mdcode: "MD005",
        transaction_id: "RGS-10005",
        ref_no: "REF-60005",
        customer_code: "CUST005",
        delivery_date: "2026-08-01",
        stock_code: "STK1005",
        description: "Wilkins Pure 500ml",
        uom: "Pack",
        qty: 10,
        piece_price: "₱120.00",
        reason_code: "RGS05",
        bo_reason: "Packaging Defect"
    },
    {
        mdcode: "MD001",
        transaction_id: "RGS-10001",
        ref_no: "REF-60001",
        customer_code: "CUST001",
        delivery_date: "2026-08-05",
        stock_code: "STK1001",
        description: "Coca-Cola 1.5L",
        uom: "Case",
        qty: 4,
        piece_price: "₱250.00",
        reason_code: "RGS01",
        bo_reason: "Broken Bottle"
    },
    {
        mdcode: "MD002",
        transaction_id: "RGS-10002",
        ref_no: "REF-60002",
        customer_code: "CUST002",
        delivery_date: "2026-08-04",
        stock_code: "STK1002",
        description: "Sprite 1.5L",
        uom: "Case",
        qty: 6,
        piece_price: "₱245.00",
        reason_code: "RGS02",
        bo_reason: "Near Expiry"
    },
    {
        mdcode: "MD003",
        transaction_id: "RGS-10003",
        ref_no: "REF-60003",
        customer_code: "CUST003",
        delivery_date: "2026-08-03",
        stock_code: "STK1003",
        description: "Royal 1.5L",
        uom: "Case",
        qty: 3,
        piece_price: "₱240.00",
        reason_code: "RGS03",
        bo_reason: "Incorrect Delivery"
    },
    {
        mdcode: "MD004",
        transaction_id: "RGS-10004",
        ref_no: "REF-60004",
        customer_code: "CUST004",
        delivery_date: "2026-08-02",
        stock_code: "STK1004",
        description: "Minute Maid Orange",
        uom: "Bottle",
        qty: 12,
        piece_price: "₱65.00",
        reason_code: "RGS04",
        bo_reason: "Customer Return"
    },
    {
        mdcode: "MD005",
        transaction_id: "RGS-10005",
        ref_no: "REF-60005",
        customer_code: "CUST005",
        delivery_date: "2026-08-01",
        stock_code: "STK1005",
        description: "Wilkins Pure 500ml",
        uom: "Pack",
        qty: 10,
        piece_price: "₱120.00",
        reason_code: "RGS05",
        bo_reason: "Packaging Defect"
    },
    {
        mdcode: "MD001",
        transaction_id: "RGS-10001",
        ref_no: "REF-60001",
        customer_code: "CUST001",
        delivery_date: "2026-08-05",
        stock_code: "STK1001",
        description: "Coca-Cola 1.5L",
        uom: "Case",
        qty: 4,
        piece_price: "₱250.00",
        reason_code: "RGS01",
        bo_reason: "Broken Bottle"
    },
    {
        mdcode: "MD002",
        transaction_id: "RGS-10002",
        ref_no: "REF-60002",
        customer_code: "CUST002",
        delivery_date: "2026-08-04",
        stock_code: "STK1002",
        description: "Sprite 1.5L",
        uom: "Case",
        qty: 6,
        piece_price: "₱245.00",
        reason_code: "RGS02",
        bo_reason: "Near Expiry"
    },
    {
        mdcode: "MD003",
        transaction_id: "RGS-10003",
        ref_no: "REF-60003",
        customer_code: "CUST003",
        delivery_date: "2026-08-03",
        stock_code: "STK1003",
        description: "Royal 1.5L",
        uom: "Case",
        qty: 3,
        piece_price: "₱240.00",
        reason_code: "RGS03",
        bo_reason: "Incorrect Delivery"
    },
    {
        mdcode: "MD004",
        transaction_id: "RGS-10004",
        ref_no: "REF-60004",
        customer_code: "CUST004",
        delivery_date: "2026-08-02",
        stock_code: "STK1004",
        description: "Minute Maid Orange",
        uom: "Bottle",
        qty: 12,
        piece_price: "₱65.00",
        reason_code: "RGS04",
        bo_reason: "Customer Return"
    },
    {
        mdcode: "MD005",
        transaction_id: "RGS-10005",
        ref_no: "REF-60005",
        customer_code: "CUST005",
        delivery_date: "2026-08-01",
        stock_code: "STK1005",
        description: "Wilkins Pure 500ml",
        uom: "Pack",
        qty: 10,
        piece_price: "₱120.00",
        reason_code: "RGS05",
        bo_reason: "Packaging Defect"
    },
    {
        mdcode: "MD001",
        transaction_id: "RGS-10001",
        ref_no: "REF-60001",
        customer_code: "CUST001",
        delivery_date: "2026-08-05",
        stock_code: "STK1001",
        description: "Coca-Cola 1.5L",
        uom: "Case",
        qty: 4,
        piece_price: "₱250.00",
        reason_code: "RGS01",
        bo_reason: "Broken Bottle"
    },
    {
        mdcode: "MD002",
        transaction_id: "RGS-10002",
        ref_no: "REF-60002",
        customer_code: "CUST002",
        delivery_date: "2026-08-04",
        stock_code: "STK1002",
        description: "Sprite 1.5L",
        uom: "Case",
        qty: 6,
        piece_price: "₱245.00",
        reason_code: "RGS02",
        bo_reason: "Near Expiry"
    },
    {
        mdcode: "MD003",
        transaction_id: "RGS-10003",
        ref_no: "REF-60003",
        customer_code: "CUST003",
        delivery_date: "2026-08-03",
        stock_code: "STK1003",
        description: "Royal 1.5L",
        uom: "Case",
        qty: 3,
        piece_price: "₱240.00",
        reason_code: "RGS03",
        bo_reason: "Incorrect Delivery"
    },
    {
        mdcode: "MD004",
        transaction_id: "RGS-10004",
        ref_no: "REF-60004",
        customer_code: "CUST004",
        delivery_date: "2026-08-02",
        stock_code: "STK1004",
        description: "Minute Maid Orange",
        uom: "Bottle",
        qty: 12,
        piece_price: "₱65.00",
        reason_code: "RGS04",
        bo_reason: "Customer Return"
    },
    {
        mdcode: "MD005",
        transaction_id: "RGS-10005",
        ref_no: "REF-60005",
        customer_code: "CUST005",
        delivery_date: "2026-08-01",
        stock_code: "STK1005",
        description: "Wilkins Pure 500ml",
        uom: "Pack",
        qty: 10,
        piece_price: "₱120.00",
        reason_code: "RGS05",
        bo_reason: "Packaging Defect"
    },
    {
        mdcode: "MD001",
        transaction_id: "RGS-10001",
        ref_no: "REF-60001",
        customer_code: "CUST001",
        delivery_date: "2026-08-05",
        stock_code: "STK1001",
        description: "Coca-Cola 1.5L",
        uom: "Case",
        qty: 4,
        piece_price: "₱250.00",
        reason_code: "RGS01",
        bo_reason: "Broken Bottle"
    },
    {
        mdcode: "MD002",
        transaction_id: "RGS-10002",
        ref_no: "REF-60002",
        customer_code: "CUST002",
        delivery_date: "2026-08-04",
        stock_code: "STK1002",
        description: "Sprite 1.5L",
        uom: "Case",
        qty: 6,
        piece_price: "₱245.00",
        reason_code: "RGS02",
        bo_reason: "Near Expiry"
    },
    {
        mdcode: "MD003",
        transaction_id: "RGS-10003",
        ref_no: "REF-60003",
        customer_code: "CUST003",
        delivery_date: "2026-08-03",
        stock_code: "STK1003",
        description: "Royal 1.5L",
        uom: "Case",
        qty: 3,
        piece_price: "₱240.00",
        reason_code: "RGS03",
        bo_reason: "Incorrect Delivery"
    },
    {
        mdcode: "MD004",
        transaction_id: "RGS-10004",
        ref_no: "REF-60004",
        customer_code: "CUST004",
        delivery_date: "2026-08-02",
        stock_code: "STK1004",
        description: "Minute Maid Orange",
        uom: "Bottle",
        qty: 12,
        piece_price: "₱65.00",
        reason_code: "RGS04",
        bo_reason: "Customer Return"
    },
    {
        mdcode: "MD005",
        transaction_id: "RGS-10005",
        ref_no: "REF-60005",
        customer_code: "CUST005",
        delivery_date: "2026-08-01",
        stock_code: "STK1005",
        description: "Wilkins Pure 500ml",
        uom: "Pack",
        qty: 10,
        piece_price: "₱120.00",
        reason_code: "RGS05",
        bo_reason: "Packaging Defect"
    },
];

TableLoader.tableData(
    "#salesRetRgsTable",
    sampleData,
    SalesRetRgsColumns,
    {
        // scrollY: "50vh",
        // pageLength: 25
    }
);

$(document).ready(function () {
    DatePicker.init();
});