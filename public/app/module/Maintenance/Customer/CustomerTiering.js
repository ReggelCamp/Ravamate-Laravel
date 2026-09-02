// import TableLoader from "../../../helper/TableLoader.js";

// const CustomerTieringColumns = [
//     {
//         title: "Type",
//         data: "type"
//     },
//     {
//         title: "description",
//         data: "description"
//     },
//     {
//         title: "Tiering",
//         data: "tiering"
//     },
//     {
//         title: "Last Updated",
//         data: "last_updated"
//     },
// ]

// TableLoader.tableData(
//     "#CustomerTieringDataTable",
//     [],
//     CustomerTieringColumns,
// );

import TableLoader from "../../../helper/TableLoader.js";
import DatePicker from "../../../helper/datePicker.js";
import "../../../helper/exportDataTable.js"

const CustomerTieringColumns = [
    {
        title: "Type",
        data: "type"
    },
    {
        title: "Description",
        data: "description"
    },
    {
        title: "Tiering",
        data: "tiering"
    },
    {
        title: "Last Updated",
        data: "last_updated"
    },
];

const sampleData = [
    {
        type: "General Trade",
        description: "Small neighborhood retail stores",
        tiering: "Tier 1",
        last_updated: "2026-08-05 09:15 AM"
    },
    {
        type: "Modern Trade",
        description: "Supermarkets and hypermarkets",
        tiering: "Tier 2",
        last_updated: "2026-08-04 02:30 PM"
    },
    {
        type: "Convenience Store",
        description: "24/7 convenience stores",
        tiering: "Tier 1",
        last_updated: "2026-08-03 10:45 AM"
    },
    {
        type: "Wholesale",
        description: "Bulk purchase distributors",
        tiering: "Tier 3",
        last_updated: "2026-08-02 04:20 PM"
    },
    {
        type: "Institutional",
        description: "Hotels, restaurants, and cafés",
        tiering: "Tier 2",
        last_updated: "2026-08-01 11:00 AM"
    }
];

TableLoader.tableData(
    "#CustomerTieringDataTable",
    sampleData,
    CustomerTieringColumns,
    {
        scrollY: "50vh",
        pageLength:25
    }
);

$(document).ready(function () {
    DatePicker.init();
});

$(document)
    .off("click.CustomerTieringRow", "#CustomerTieringDataTable tbody tr")
    .on("click.CustomerTieringRow", "#CustomerTieringDataTable tbody tr", function () {
        // salesman.js loads the data asynchronously; ensure DataTable is ready
        if (!$.fn.DataTable.isDataTable("#CustomerTieringDataTable")) return;

        const CustomerTieringTable = $("#CustomerTieringDataTable").DataTable();
        const rowData = CustomerTieringTable.row(this).data();

        if (!rowData) return;

        console.log("Clicked row:", rowData);

        DisplayCustomerTiering(rowData);
    });

    function DisplayCustomerTiering(){
        $("#customerTieringModal")[0].showModal();
    }