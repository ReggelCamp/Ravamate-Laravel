// import TableLoader from "../../helper/TableLoader.js";

// const PlacementCheckColumns = [
//     {
//         title: "STK Date",
//         data: "stk_date"
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
//         title: "Customer Channel",
//         data: "customer_channel"
//     },
//     {
//         title: "Stake No.",
//         data: "stake_no"
//     },
//     {
//         title: "STK Required",
//         data: "stk_required"
//     },
//     {
//         title: "STK Available",
//         data: "stk_available"
//     },
//     {
//         title: "STK Out of Stock",
//         data: "stk_out_of_stock"
//     }
// ];

// TableLoader.tableData(
//     "#placementCheckTable",
//     [],
//     PlacementCheckColumns
// );

import TableLoader from "../../helper/TableLoader.js";
import DatePicker from "../../helper/datePicker.js";
import "../../helper/exportDataTable.js";
import ComponentHelper from "../../helper/ComponentHelper.js";

const PlacementCheckColumns = [
    {
        title: "STK Date",
        data: "stk_date"
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
        title: "Customer Channel",
        data: "customer_channel"
    },
    {
        title: "Stake No.",
        data: "stake_no"
    },
    {
        title: "STK Required",
        data: "stk_required"
    },
    {
        title: "STK Available",
        data: "stk_available"
    },
    {
        title: "STK Out of Stock",
        data: "stk_out_of_stock"
    }
];

const sampleData = [
    {
        stk_date: "2026-08-05",
        salesman: "Juan Dela Cruz",
        customer: "ABC Store",
        customer_channel: "General Trade",
        stake_no: "STK-10001",
        stk_required: 20,
        stk_available: 18,
        stk_out_of_stock: 2
    },
    {
        stk_date: "2026-08-05",
        salesman: "Maria Santos",
        customer: "XYZ Mart",
        customer_channel: "Modern Trade",
        stake_no: "STK-10002",
        stk_required: 15,
        stk_available: 15,
        stk_out_of_stock: 0
    },
    {
        stk_date: "2026-08-04",
        salesman: "Pedro Reyes",
        customer: "LMN Grocery",
        customer_channel: "General Trade",
        stake_no: "STK-10003",
        stk_required: 30,
        stk_available: 25,
        stk_out_of_stock: 5
    },
    {
        stk_date: "2026-08-03",
        salesman: "Ana Garcia",
        customer: "Fresh Market",
        customer_channel: "Supermarket",
        stake_no: "STK-10004",
        stk_required: 18,
        stk_available: 12,
        stk_out_of_stock: 6
    },
    {
        stk_date: "2026-08-02",
        salesman: "Jose Lim",
        customer: "Corner Shop",
        customer_channel: "Convenience Store",
        stake_no: "STK-10005",
        stk_required: 25,
        stk_available: 25,
        stk_out_of_stock: 0
    },
    {
        stk_date: "2026-08-05",
        salesman: "Juan Dela Cruz",
        customer: "ABC Store",
        customer_channel: "General Trade",
        stake_no: "STK-10001",
        stk_required: 20,
        stk_available: 18,
        stk_out_of_stock: 2
    },
    {
        stk_date: "2026-08-05",
        salesman: "Maria Santos",
        customer: "XYZ Mart",
        customer_channel: "Modern Trade",
        stake_no: "STK-10002",
        stk_required: 15,
        stk_available: 15,
        stk_out_of_stock: 0
    },
    {
        stk_date: "2026-08-04",
        salesman: "Pedro Reyes",
        customer: "LMN Grocery",
        customer_channel: "General Trade",
        stake_no: "STK-10003",
        stk_required: 30,
        stk_available: 25,
        stk_out_of_stock: 5
    },
    {
        stk_date: "2026-08-03",
        salesman: "Ana Garcia",
        customer: "Fresh Market",
        customer_channel: "Supermarket",
        stake_no: "STK-10004",
        stk_required: 18,
        stk_available: 12,
        stk_out_of_stock: 6
    },
    {
        stk_date: "2026-08-02",
        salesman: "Jose Lim",
        customer: "Corner Shop",
        customer_channel: "Convenience Store",
        stake_no: "STK-10005",
        stk_required: 25,
        stk_available: 25,
        stk_out_of_stock: 0
    },
    {
        stk_date: "2026-08-05",
        salesman: "Juan Dela Cruz",
        customer: "ABC Store",
        customer_channel: "General Trade",
        stake_no: "STK-10001",
        stk_required: 20,
        stk_available: 18,
        stk_out_of_stock: 2
    },
    {
        stk_date: "2026-08-05",
        salesman: "Maria Santos",
        customer: "XYZ Mart",
        customer_channel: "Modern Trade",
        stake_no: "STK-10002",
        stk_required: 15,
        stk_available: 15,
        stk_out_of_stock: 0
    },
    {
        stk_date: "2026-08-04",
        salesman: "Pedro Reyes",
        customer: "LMN Grocery",
        customer_channel: "General Trade",
        stake_no: "STK-10003",
        stk_required: 30,
        stk_available: 25,
        stk_out_of_stock: 5
    },
    {
        stk_date: "2026-08-03",
        salesman: "Ana Garcia",
        customer: "Fresh Market",
        customer_channel: "Supermarket",
        stake_no: "STK-10004",
        stk_required: 18,
        stk_available: 12,
        stk_out_of_stock: 6
    },
    {
        stk_date: "2026-08-02",
        salesman: "Jose Lim",
        customer: "Corner Shop",
        customer_channel: "Convenience Store",
        stake_no: "STK-10005",
        stk_required: 25,
        stk_available: 25,
        stk_out_of_stock: 0
    },
    {
        stk_date: "2026-08-05",
        salesman: "Juan Dela Cruz",
        customer: "ABC Store",
        customer_channel: "General Trade",
        stake_no: "STK-10001",
        stk_required: 20,
        stk_available: 18,
        stk_out_of_stock: 2
    },
    {
        stk_date: "2026-08-05",
        salesman: "Maria Santos",
        customer: "XYZ Mart",
        customer_channel: "Modern Trade",
        stake_no: "STK-10002",
        stk_required: 15,
        stk_available: 15,
        stk_out_of_stock: 0
    },
    {
        stk_date: "2026-08-04",
        salesman: "Pedro Reyes",
        customer: "LMN Grocery",
        customer_channel: "General Trade",
        stake_no: "STK-10003",
        stk_required: 30,
        stk_available: 25,
        stk_out_of_stock: 5
    },
    {
        stk_date: "2026-08-03",
        salesman: "Ana Garcia",
        customer: "Fresh Market",
        customer_channel: "Supermarket",
        stake_no: "STK-10004",
        stk_required: 18,
        stk_available: 12,
        stk_out_of_stock: 6
    },
    {
        stk_date: "2026-08-02",
        salesman: "Jose Lim",
        customer: "Corner Shop",
        customer_channel: "Convenience Store",
        stake_no: "STK-10005",
        stk_required: 25,
        stk_available: 25,
        stk_out_of_stock: 0
    },
    {
        stk_date: "2026-08-05",
        salesman: "Juan Dela Cruz",
        customer: "ABC Store",
        customer_channel: "General Trade",
        stake_no: "STK-10001",
        stk_required: 20,
        stk_available: 18,
        stk_out_of_stock: 2
    },
    {
        stk_date: "2026-08-05",
        salesman: "Maria Santos",
        customer: "XYZ Mart",
        customer_channel: "Modern Trade",
        stake_no: "STK-10002",
        stk_required: 15,
        stk_available: 15,
        stk_out_of_stock: 0
    },
    {
        stk_date: "2026-08-04",
        salesman: "Pedro Reyes",
        customer: "LMN Grocery",
        customer_channel: "General Trade",
        stake_no: "STK-10003",
        stk_required: 30,
        stk_available: 25,
        stk_out_of_stock: 5
    },
    {
        stk_date: "2026-08-03",
        salesman: "Ana Garcia",
        customer: "Fresh Market",
        customer_channel: "Supermarket",
        stake_no: "STK-10004",
        stk_required: 18,
        stk_available: 12,
        stk_out_of_stock: 6
    },
    {
        stk_date: "2026-08-02",
        salesman: "Jose Lim",
        customer: "Corner Shop",
        customer_channel: "Convenience Store",
        stake_no: "STK-10005",
        stk_required: 25,
        stk_available: 25,
        stk_out_of_stock: 0
    },
];



TableLoader.tableData(
    "#placementCheckTable",
    sampleData,
    PlacementCheckColumns,
    {
        scrollY: "500px"
    }
);

$(document).ready(function () {
    DatePicker.init();
});

