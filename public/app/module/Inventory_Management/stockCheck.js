import TableLoader from "../../helper/TableLoader.js";
import DatePicker from "../../helper/datePicker.js";
import "../../helper/exportDataTable.js";
import ComponentHelper from "../../helper/ComponentHelper.js";

const StockCheckColumns = [
    {
        title: "Transaction ID",
        data: "transaction_id",
    },
    {
        title: "Stock Code",
        data: null,
        render:function(row,data){
            const product = row.transaction_details;
            let getProductDetails = null;
            product.forEach(details => {
                getProductDetails = details.product_details;
            });
            return getProductDetails? getProductDetails.StockCode : "---";
        }
    },
    {
        title: "Item Description",
        data: null,
        render:function(row,data){
            const product = row.transaction_details;
            let getProductDetails = null;
            product.forEach(details => {
                getProductDetails = details.product_details;
            });
            return getProductDetails? getProductDetails.description : "---";
        }
    },
    {
        title: "CustCode",
        data: "customercode",
        render: function(data){
            return data? data : "---";
        }
    },
    {
        title: "Customer Name",
        data: null,
        render:function(row){
            const store = row.transaction_store;
            return store.store_name;
        }
    },
    {
        title: "Quantity",
        data: null,
        render:function(row,data){
            const product = row.transaction_details;
            let getQuantity = null;
            product.forEach(details => {
                getQuantity = details.quantity;
            });
        return getQuantity ?? "---";        }
    },
    {
        title: "MdCode",
        data: null,
        render:function(row){
            const salesman = row.transaction_salesman;
            return salesman.md_code ?? "---";
        }
    },
    {
        title: "Transaction Date",
        data: "transaction_date"
    }
];

// const sampleData = [
//     {
//         transaction_id: "SC-10001",
//         stock_code: "STK1001",
//         item_description: "Coca-Cola 1.5L",
//         custcode: "CUST001",
//         customer_name: "ABC Store",
//         quantity: 48,
//         mdcode: "MD001",
//         transaction_date: "2026-08-05 09:15 AM"
//     },
//     {
//         transaction_id: "SC-10002",
//         stock_code: "STK1002",
//         item_description: "Sprite 1.5L",
//         custcode: "CUST002",
//         customer_name: "XYZ Mart",
//         quantity: 36,
//         mdcode: "MD002",
//         transaction_date: "2026-08-05 10:40 AM"
//     },
//     {
//         transaction_id: "SC-10003",
//         stock_code: "STK1003",
//         item_description: "Royal 1.5L",
//         custcode: "CUST003",
//         customer_name: "LMN Grocery",
//         quantity: 24,
//         mdcode: "MD003",
//         transaction_date: "2026-08-04 02:30 PM"
//     },
//     {
//         transaction_id: "SC-10004",
//         stock_code: "STK1004",
//         item_description: "Minute Maid Orange",
//         custcode: "CUST004",
//         customer_name: "Fresh Market",
//         quantity: 18,
//         mdcode: "MD004",
//         transaction_date: "2026-08-03 01:20 PM"
//     },
//     {
//         transaction_id: "SC-10005",
//         stock_code: "STK1005",
//         item_description: "Wilkins Pure 500ml",
//         custcode: "CUST005",
//         customer_name: "Corner Shop",
//         quantity: 60,
//         mdcode: "MD005",
//         transaction_date: "2026-08-02 04:45 PM"
//     },
//     {
//         transaction_id: "SC-10001",
//         stock_code: "STK1001",
//         item_description: "Coca-Cola 1.5L",
//         custcode: "CUST001",
//         customer_name: "ABC Store",
//         quantity: 48,
//         mdcode: "MD001",
//         transaction_date: "2026-08-05 09:15 AM"
//     },
//     {
//         transaction_id: "SC-10002",
//         stock_code: "STK1002",
//         item_description: "Sprite 1.5L",
//         custcode: "CUST002",
//         customer_name: "XYZ Mart",
//         quantity: 36,
//         mdcode: "MD002",
//         transaction_date: "2026-08-05 10:40 AM"
//     },
//     {
//         transaction_id: "SC-10003",
//         stock_code: "STK1003",
//         item_description: "Royal 1.5L",
//         custcode: "CUST003",
//         customer_name: "LMN Grocery",
//         quantity: 24,
//         mdcode: "MD003",
//         transaction_date: "2026-08-04 02:30 PM"
//     },
//     {
//         transaction_id: "SC-10004",
//         stock_code: "STK1004",
//         item_description: "Minute Maid Orange",
//         custcode: "CUST004",
//         customer_name: "Fresh Market",
//         quantity: 18,
//         mdcode: "MD004",
//         transaction_date: "2026-08-03 01:20 PM"
//     },
//     {
//         transaction_id: "SC-10005",
//         stock_code: "STK1005",
//         item_description: "Wilkins Pure 500ml",
//         custcode: "CUST005",
//         customer_name: "Corner Shop",
//         quantity: 60,
//         mdcode: "MD005",
//         transaction_date: "2026-08-02 04:45 PM"
//     },
//     {
//         transaction_id: "SC-10001",
//         stock_code: "STK1001",
//         item_description: "Coca-Cola 1.5L",
//         custcode: "CUST001",
//         customer_name: "ABC Store",
//         quantity: 48,
//         mdcode: "MD001",
//         transaction_date: "2026-08-05 09:15 AM"
//     },
//     {
//         transaction_id: "SC-10002",
//         stock_code: "STK1002",
//         item_description: "Sprite 1.5L",
//         custcode: "CUST002",
//         customer_name: "XYZ Mart",
//         quantity: 36,
//         mdcode: "MD002",
//         transaction_date: "2026-08-05 10:40 AM"
//     },
//     {
//         transaction_id: "SC-10003",
//         stock_code: "STK1003",
//         item_description: "Royal 1.5L",
//         custcode: "CUST003",
//         customer_name: "LMN Grocery",
//         quantity: 24,
//         mdcode: "MD003",
//         transaction_date: "2026-08-04 02:30 PM"
//     },
//     {
//         transaction_id: "SC-10004",
//         stock_code: "STK1004",
//         item_description: "Minute Maid Orange",
//         custcode: "CUST004",
//         customer_name: "Fresh Market",
//         quantity: 18,
//         mdcode: "MD004",
//         transaction_date: "2026-08-03 01:20 PM"
//     },
//     {
//         transaction_id: "SC-10005",
//         stock_code: "STK1005",
//         item_description: "Wilkins Pure 500ml",
//         custcode: "CUST005",
//         customer_name: "Corner Shop",
//         quantity: 60,
//         mdcode: "MD005",
//         transaction_date: "2026-08-02 04:45 PM"
//     },
//     {
//         transaction_id: "SC-10001",
//         stock_code: "STK1001",
//         item_description: "Coca-Cola 1.5L",
//         custcode: "CUST001",
//         customer_name: "ABC Store",
//         quantity: 48,
//         mdcode: "MD001",
//         transaction_date: "2026-08-05 09:15 AM"
//     },
//     {
//         transaction_id: "SC-10002",
//         stock_code: "STK1002",
//         item_description: "Sprite 1.5L",
//         custcode: "CUST002",
//         customer_name: "XYZ Mart",
//         quantity: 36,
//         mdcode: "MD002",
//         transaction_date: "2026-08-05 10:40 AM"
//     },
//     {
//         transaction_id: "SC-10003",
//         stock_code: "STK1003",
//         item_description: "Royal 1.5L",
//         custcode: "CUST003",
//         customer_name: "LMN Grocery",
//         quantity: 24,
//         mdcode: "MD003",
//         transaction_date: "2026-08-04 02:30 PM"
//     },
//     {
//         transaction_id: "SC-10004",
//         stock_code: "STK1004",
//         item_description: "Minute Maid Orange",
//         custcode: "CUST004",
//         customer_name: "Fresh Market",
//         quantity: 18,
//         mdcode: "MD004",
//         transaction_date: "2026-08-03 01:20 PM"
//     },
//     {
//         transaction_id: "SC-10005",
//         stock_code: "STK1005",
//         item_description: "Wilkins Pure 500ml",
//         custcode: "CUST005",
//         customer_name: "Corner Shop",
//         quantity: 60,
//         mdcode: "MD005",
//         transaction_date: "2026-08-02 04:45 PM"
//     },
//     {
//         transaction_id: "SC-10001",
//         stock_code: "STK1001",
//         item_description: "Coca-Cola 1.5L",
//         custcode: "CUST001",
//         customer_name: "ABC Store",
//         quantity: 48,
//         mdcode: "MD001",
//         transaction_date: "2026-08-05 09:15 AM"
//     },
//     {
//         transaction_id: "SC-10002",
//         stock_code: "STK1002",
//         item_description: "Sprite 1.5L",
//         custcode: "CUST002",
//         customer_name: "XYZ Mart",
//         quantity: 36,
//         mdcode: "MD002",
//         transaction_date: "2026-08-05 10:40 AM"
//     },
//     {
//         transaction_id: "SC-10003",
//         stock_code: "STK1003",
//         item_description: "Royal 1.5L",
//         custcode: "CUST003",
//         customer_name: "LMN Grocery",
//         quantity: 24,
//         mdcode: "MD003",
//         transaction_date: "2026-08-04 02:30 PM"
//     },
//     {
//         transaction_id: "SC-10004",
//         stock_code: "STK1004",
//         item_description: "Minute Maid Orange",
//         custcode: "CUST004",
//         customer_name: "Fresh Market",
//         quantity: 18,
//         mdcode: "MD004",
//         transaction_date: "2026-08-03 01:20 PM"
//     },
//     {
//         transaction_id: "SC-10005",
//         stock_code: "STK1005",
//         item_description: "Wilkins Pure 500ml",
//         custcode: "CUST005",
//         customer_name: "Corner Shop",
//         quantity: 60,
//         mdcode: "MD005",
//         transaction_date: "2026-08-02 04:45 PM"
//     },
// ];

TableLoader.loadTable({
    url:"/transaction/getStoreTransaction",
    tableId: "#stockCheckTable",
    columns:StockCheckColumns,

});

$(document).ready(function () {
    DatePicker.init();
});

ComponentHelper.select().loadByApi({
    url: "/salesmen",
    selectID: "salesmanStockCheck"
});

ComponentHelper.dropdown().LoadCheckBoxByApi({
    url: "/salesmen",
    dropdownId: "customerStockCheck",
    noDataText: "No SalesMan Found",
    displayField: "salesman_name",
    dataField: "salesman_id",
});