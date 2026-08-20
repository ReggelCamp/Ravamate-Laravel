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
        scrollY: "500px"
    }
);

$(document).ready(function () {
    DatePicker.init();
});

$(document)
    .off("click.mustCarryTableRow", "#mustCarryTable tbody tr")
    .on("click.mustCarryTableRow", "#mustCarryTable tbody tr", function () {
        // salesman.js loads the data asynchronously; ensure DataTable is ready
        if (!$.fn.DataTable.isDataTable("#mustCarryTable")) return;

        const mustCarryTable = $("#mustCarryTable").DataTable();
        const rowData = mustCarryTable.row(this).data();

        if (!rowData) return;

        console.log("Clicked row:", rowData);

        DisplayMustCarryInfo(rowData);
    });

function DisplayMustCarryInfo(rowData) {
    if (!rowData) return;

    $('#mustCarryModalBody [data-field="customer_type"]').text(rowData.customer_type ?? "—");

    const itemLabel = rowData.item_number && rowData.item_description
        ? `${rowData.item_number} - ${rowData.item_description}`
        : (rowData.must_carry_item ?? "—");

    $('#mustCarryModalBody [data-field="must_carry_item"]').text(itemLabel);

    $("#MustCarryModal").data("record", rowData);

    document.getElementById("MustCarryModal").showModal();
}

$(document).on("click", "#deleteMustCarryBtn", function () {
    const record = $("#MustCarryModal").data("record");
    if (!record) return;
    if (!confirm(`Delete must carry item for ${record.customer_type}?`)) return;

    // Api.delete({ url: `/mustCarry/${record.id}`, ... })
    console.log("Deleting must carry item:", record);
});