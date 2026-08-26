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
import DatePicker from "../../helper/datePicker.js";
import "../../helper/exportDataTable.js";
import ComponentHelper from "../../helper/ComponentHelper.js";

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

const CustClassOptions = [
    { data: "CONVENIENCE", title: "CONVENIENCE STORE" },
    { data: "GROCERY", title: "GROCERY" },
    { data: "OTHERS", title: "OTHERS" },
    { data: "SUPERMARKET", title: "SUPERMARKET" },
    { data: "MARKET", title: "MARKET STALL  DRY" },
    { data: "DRUGSTORE", title: "DRUGSTORE" },
    { data: "SARISARI", title: "SARISARI STORE" },
    { data: "FOODSERVICE", title: "FOODSERVICE" },
    { data: "MARKET", title: "MARKET STALL  WET" },
];

const ProductOptions = [
    { data: "ITM-1001", title: "Coca-Cola 1.5L" },
    { data: "ITM-1002", title: "Pepsi 1.5L" },
    { data: "ITM-1003", title: "Nescafe 3-in-1 Original" },
    { data: "ITM-1004", title: "Lucky Me Pancit Canton" },
    { data: "ITM-1005", title: "Milo Chocolate Drink 300g" },
    { data: "ITM-1006", title: "Colgate Toothpaste 150g" },
    { data: "ITM-1007", title: "Palmolive Shampoo 350ml" },
    { data: "ITM-1008", title: "Century Tuna Flakes 155g" },
    { data: "ITM-1009", title: "Piattos Cheese 85g" },
    { data: "ITM-1010", title: "Bear Brand Powdered Milk 300g" },
];

const PlacementType = [
    {
        data: "core" , title: "CORE"
    },
    {
        data: "non_core" , title: "NON-CORE"
    },
];

const Placement = [
    {
        data: "core" , title: "Core"
    },
    {
        data: "opportunity" , title: "Opportunity"
    },
    {
        data: "dev_core" , title: "Dev Core"
    },
];

TableLoader.tableData(
    "#productPlacementTable", // Replace with your actual table ID
    sampleData,
    PlacementProductColumns,
    {
        scrollY: "500px"
    }
);

ComponentHelper.select().LoadSelectItems({
    id: "custClass",
    items: CustClassOptions
});

ComponentHelper.dropdown().load({
    json: ProductOptions,
    dropdownId: "productPlacement",
    noDataText: "No SalesMan Found",
    displayField: "title",
    dataField: "data",
});

ComponentHelper.dropdown().load({
    json: ProductOptions,
    dropdownId: "addProductPlacement",
    noDataText: "No SalesMan Found",
    displayField: "title",
    dataField: "data",
});

ComponentHelper.select().LoadSelectItems({
    id: "placementType",
    items: PlacementType
});

ComponentHelper.select().LoadSelectItems({
    id: "placement",
    items: Placement
});

$(document).ready(function () {
    DatePicker.init();
});

$(document)
    .off("click.productPlacementTableRow", "#productPlacementTable tbody tr")
    .on("click.productPlacementTableRow", "#productPlacementTable tbody tr", function () {
        // salesman.js loads the data asynchronously; ensure DataTable is ready
        if (!$.fn.DataTable.isDataTable("#productPlacementTable")) return;

        const productPlacementTable = $("#productPlacementTable").DataTable();
        const rowData = productPlacementTable.row(this).data();

        if (!rowData) return;

        console.log("Clicked row:", rowData);

        DisplayPlacementInfo(rowData);
    });

    function DisplayPlacementInfo(rowData) {
    if (!rowData) return;

    $("#placementType").val(rowData.type ?? "");
    $("#placementCustomerClass").val(rowData.customer_class ?? "");
    $("#placementValue").val(rowData.placement ?? "");

    // Store the current record for update/delete actions
    $("#PlacementModal").data("record", rowData);

    // Select Product — now driven by item_description
    if ($("#placementProduct")[0]?.tomselect) {
        $("#placementProduct")[0].tomselect.setValue(rowData.item_description);
    } else {
        $("#placementProduct").val(rowData.item_description ?? "");
    }

    document.getElementById("PlacementModal").showModal();
}

$(document).on("click", "#deletePlacementBtn", function () {
    const record = $("#PlacementModal").data("record");
    if (!record) return;
    if (!confirm(`Delete placement for ${record.item_description}?`)) return;

    // Api.delete({ url: `/placements/${record.item_number}`, ... })
    console.log("Deleting placement:", record);
});

$(document).on("click", "#updatePlacementBtn", function () {
    const record = $("#PlacementModal").data("record");
    const payload = {
        item_number: record?.item_number,
        type: $("#placementType").val(),
        customer_class: $("#placementCustomerClass").val(),
        item_description: $("#placementProduct").val(),
        placement: $("#placementValue").val(),
    };

    // Api.put({ url: `/placements/${record.item_number}`, data: payload, ... })
    console.log("Updating placement:", payload);
});