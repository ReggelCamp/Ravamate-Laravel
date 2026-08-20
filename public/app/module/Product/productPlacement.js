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
    PlacementProductColumns,
    {
        scrollY: "500px"
    }
);

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