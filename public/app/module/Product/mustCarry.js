// import TableLoader from "../../helper/TableLoader.js";

// const MustCarryColumns = [
//     {
//         title: "Customer Type",
//         data: "customer_type"
//     },
//     {
//         title: "Item Number",
//         data: "item_number"
//     },
//     {
//         title: "Description",
//         data: "description"
//     },
//     {
//         title: "IsActive",
//         data: "is_active"
//     },
//     {
//         title: "Date Created",
//         data: "date_created"
//     }
// ];

import TableLoader from "../../helper/TableLoader.js";
import DatePicker from "../../helper/datePicker.js";
import "../../helper/exportDataTable.js";

const MustCarryColumns = [
    {
        title: "Customer Type",
        data: "customer_type"
    },
    {
        title: "Item Number",
        data: "item_number"
    },
    {
        title: "Description",
        data: "description"
    },
    {
        title: "IsActive",
        data: "is_active"
    },
    {
        title: "Date Created",
        data: "date_created"
    }
];

const sampleData = [
    {
        customer_type: "Supermarket",
        item_number: "MC-1001",
        description: "Coca-Cola 1.5L",
        is_active: 'Yes',
        date_created: "2026-08-07"
    },
    {
        customer_type: "Convenience Store",
        item_number: "MC-1002",
        description: "Lay's Classic 150g",
        is_active: 'Yes',
        date_created: "2026-08-06"
    },
    {
        customer_type: "Drugstore",
        item_number: "MC-1003",
        description: "Colgate Toothpaste 150g",
        is_active: 'No',
        date_created: "2026-08-05"
    },
    {
        customer_type: "Wholesale",
        item_number: "MC-1004",
        description: "Nescafé Classic 200g",
        is_active: 'Yes',
        date_created: "2026-08-04"
    },
    {
        customer_type: "Hypermarket",
        item_number: "MC-1005",
        description: "Fresh Milk 1L",
        is_active: 'Yes',
        date_created: "2026-08-03"
    }
];

TableLoader.tableData(
    "#mustCarryTable", // Replace with your actual table ID
    sampleData,
    MustCarryColumns,
    {
        scrollY: "300px"
    }
);

$(document).ready(function () {
    DatePicker.init();
});