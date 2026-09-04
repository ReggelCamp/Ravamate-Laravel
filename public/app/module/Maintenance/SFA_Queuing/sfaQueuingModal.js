import TableLoader from "../../../helper/TableLoader.js";

const SalesDetailsColumns = [
    {
        title: "STOCKCODE",
        data: "stockcode",
    },
    {
        title: "DESCRIPTION",
        data: "description",
    },
    {
        title: "QUANTITY",
        data: "quantity",
    },
    {
        title: "AMOUNT",
        data: "amount",
    },
];

const SalesDetailsData = [
    {
        stockcode: "FG05241",
        description: "BT Cheese 160g",
        quantity: 10,
        amount: "₱ 360.00",
    },
    {
        stockcode: "FG07892",
        description: "Classic Ham 200g",
        quantity: 5,
        amount: "₱ 275.00",
    },
    {
        stockcode: "FG09123",
        description: "Chocolate Spread 150g",
        quantity: 8,
        amount: "₱ 240.00",
    },
    {
        stockcode: "FG10456",
        description: "Creamy Butter 250g",
        quantity: 3,
        amount: "₱ 195.00",
    },
    {
        stockcode: "FG11234",
        description: "Strawberry Jam 180g",
        quantity: 6,
        amount: "₱ 210.00",
    },
];

$(document).ready(function () {

    const modal = document.getElementById("sfaQueueDetailModal");

    modal.addEventListener("toggle", function () {

        if (modal.open) {

            // Initialize only when modal is visible
            if (!$.fn.DataTable.isDataTable("#sfqQueuingModal")) {

                TableLoader.tableData(
                    "#sfqQueuingModal",
                    SalesDetailsData,
                    SalesDetailsColumns,
                    {
                        pageLength: 20,
                        scrollY:'30vh'
                    }
                );

            } else {

                // Recalculate DataTable width
                $("#sfqQueuingModal")
                    .DataTable()
                    .columns.adjust();
            }
        }
    });

});