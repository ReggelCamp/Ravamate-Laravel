import ComponentHelper from "../helper/ComponentHelper.js";
import TableLoader  from "../helper/TableLoader.js";

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

const ProductColumns = [
    {
        title: "StockCode",
        data: "stock_code",
    },
    {
        title: "Description",
        data: "description",
    },
    {
        title: "Quantity",
        data: "quantity",
    },
    {
        title: "Amount",
        data: "amount",
    },
]

// Sample data based on the table
const SampleData = [
    {
        stock_code: "FG05241",
        description: "BT Cheese 160g",
        quantity: "2/0/0",
        amount: "₱1,564.92"
    },
    {
        stock_code: "FG05242",
        description: "BT Cheese 430g",
        quantity: "2/0/0",
        amount: "₱2,233.98"
    },
    {
        stock_code: "FG03798",
        description: "SMCCT 100G",
        quantity: "5/0/0",
        amount: "₱6,804.00"
    },
    {
        stock_code: "FG03798",
        description: "SMCCT 100G",
        quantity: "5/0/0",
        amount: "₱6,804.00"
    },
    {
        stock_code: "FG03798",
        description: "SMCCT 100G",
        quantity: "5/0/0",
        amount: "₱6,804.00"
    },
    {
        stock_code: "FG03798",
        description: "SMCCT 100G",
        quantity: "5/0/0",
        amount: "₱6,804.00"
    },
    {
        stock_code: "FG03798",
        description: "SMCCT 100G",
        quantity: "5/0/0",
        amount: "₱6,804.00"
    },
    {
        stock_code: "FG03798",
        description: "SMCCT 100G",
        quantity: "5/0/0",
        amount: "₱6,804.00"
    },
    {
        stock_code: "FG03798",
        description: "SMCCT 100G",
        quantity: "5/0/0",
        amount: "₱6,804.00"
    },
    {
        stock_code: "FG03798",
        description: "SMCCT 100G",
        quantity: "5/0/0",
        amount: "₱6,804.00"
    },
    {
        stock_code: "FG03798",
        description: "SMCCT 100G",
        quantity: "5/0/0",
        amount: "₱6,804.00"
    }
]

// Total amount
const TotalAmount = "₱79,209.90"

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
    $("#Salesman_Container").removeClass("hidden");
    $("#Carousel_Container").addClass("hidden");
}

function DisplayCarousel(){
    $("#Carousel_Container").removeClass("hidden");
    $("#Salesman_Container").addClass("hidden");
}

$(document).on("click","#Display_Carousel", function(){
    DisplayCarousel();
    console.log("clicked");
});

$(document).on("click", "#Current_Day_Btn", function () {

    $("#Flip_Container").addClass("flip_div");

    $("#Current_Day_Btn").addClass("hidden");
    $("#Mtd_Overview_Btn").removeClass("hidden");
});


$(document).on("click", "#Mtd_Overview_Btn", function () {

    $("#Flip_Container").removeClass("flip_div");

    $("#Mtd_Overview_Btn").addClass("hidden");
    $("#Current_Day_Btn").removeClass("hidden");
});

TableLoader.tableData(
    "#sfaQueuingModalTable",
    SampleData,
    ProductColumns,
    {
        scrollY : "500px"
    }
);