// import TableLoader from "../../helper/TableLoader.js";

// const PlacementProductColumns = [
//     {
//         title: "Type",
//         data: "type"
//     },
//     {
//         title: "Customer Class",
//         data: "customer_class"
//     },
//     {
//         title: "Item Number",
//         data: "item_number"
//     },
//     {
//         title: "Item Description",
//         data: "item_description"
//     },
//     {
//         title: "Placement",
//         data: "placement"
//     },
//     {
//         title: "Last Updated",
//         data: "last_updated"
//     }
// ];

// TableLoader.loadTable

import TableLoader from "../../helper/TableLoader.js";

const PlacementProductColumns = [
    {
        title: "Type",
        data: "type"
    },
    {
        title: "Customer Class",
        data: "customer_class"
    },
    {
        title: "Item Number",
        data: "item_number"
    },
    {
        title: "Item Description",
        data: "item_description"
    },
    {
        title: "Placement",
        data: "placement"
    },
    {
        title: "Last Updated",
        data: "last_updated"
    }
];

const sampleData = [
    {
        type: "Beverage",
        customer_class: "Supermarket",
        item_number: "ITM-1001",
        item_description: "Coca-Cola 1.5L",
        placement: "Aisle 1 - Top Shelf",
        last_updated: "2026-08-07"
    },
    {
        type: "Snack",
        customer_class: "Convenience Store",
        item_number: "ITM-1002",
        item_description: "Lay's Classic 150g",
        placement: "Checkout Counter",
        last_updated: "2026-08-06"
    },
    {
        type: "Dairy",
        customer_class: "Hypermarket",
        item_number: "ITM-1003",
        item_description: "Fresh Milk 1L",
        placement: "Refrigerated Section",
        last_updated: "2026-08-05"
    },
    {
        type: "Personal Care",
        customer_class: "Drugstore",
        item_number: "ITM-1004",
        item_description: "Shampoo 340ml",
        placement: "Aisle 5 - Middle Shelf",
        last_updated: "2026-08-04"
    },
    {
        type: "Household",
        customer_class: "Wholesale",
        item_number: "ITM-1005",
        item_description: "Dishwashing Liquid 500ml",
        placement: "Cleaning Supplies Section",
        last_updated: "2026-08-03"
    }
];

TableLoader.tableData(
    "#productPlacementTable", // Replace with your actual table ID
    sampleData,
    PlacementProductColumns
);