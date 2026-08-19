import ComponentHelper from "../helper/ComponentHelper.js";

const OperationItems = [
    {
        title: "All",
        data: "all_type",
    },
    {
        title: "Van Sales",
        data: "van_sales",
    },
    {
        title: "Booking",
        data: "booking",
    },
];

// The dashboard table is rendered by x-datatable as <table id="salesmanTable">
// and initialized by salesman.js via TableLoader (loaded globally in layout/app.blade.php).
// We attach the row-click handler to #salesmanTable, not the wrapper #dashboardDataTable div.

$(document)
    .off("click.dashboardRow", "#salesmanTable tbody tr")
    .on("click.dashboardRow", "#salesmanTable tbody tr", function () {
        // salesman.js loads the data asynchronously; ensure DataTable is ready
        if (!$.fn.DataTable.isDataTable("#salesmanTable")) return;

        const dashboardTable = $("#salesmanTable").DataTable();
        const rowData = dashboardTable.row(this).data();

        if (!rowData) return;

        console.log("Clicked row:", rowData);

        showRowDetails(rowData);
    });

// Date BTN
$(document).ready(function () {
    function updateClock() {
        $("#dateButton").html(`
            <strong>${moment().format("ddd")}</strong>
            <span class="mx-2">|</span>
            <span>${moment().format("YYYY-DD-MM")}</span>
            <span class="mx-2">|</span>
            <span>${moment().format("h:mm:ss A")}</span>
        `);
    }

    updateClock(); // run immediately so there's no 1s blank delay
    setInterval(updateClock, 1000); // then run every 1000ms (1 second)
});

// Expand collapse
$("#ExpandBtn").click(function () {
    const isExpanding = $(".HideMap").is(":visible");
    $("#ExpandBtn").text;
    $(".HideMap").toggle();
    $(".tableSec").toggleClass("expanded");
    $("#DataTable").toggleClass("expanded");

    $("#ExpandBtn").text(
        $("#DataTable").hasClass("expanded") ? "Collapse" : "Expand",
    );

    let table = $("#salesmanTable").DataTable();
    if (isExpanding) {
        table.page.len(10).draw(false);
    } else {
        table.page.len(5).draw(false);
    }
});

ComponentHelper.dropdown().LoadDropdownItems({
    id: "#OperationTypeItems",
    items: OperationItems,
});

function showRowDetails(rowData) {

    console.log("Received row:", rowData);

    $("#dashboardSidePanel").html(`
        <div class="w-full h-full flex flex-col items-center justify-center p-5">

            <button
                id="backToDashboard"
                class="px-4 py-2 rounded-full bg-gray-200 mb-5">
                ← Back
            </button>

            <h2 class="text-xl font-bold">
                ${rowData.salesman_name}
            </h2>

            <p class="mt-2">
                O.R: ${rowData.or_no}
            </p>

            <p>
                Customer: ${rowData.customer}
            </p>

            <p>
                Amount: ₱${rowData.amount}
            </p>

        </div>
    `);
}