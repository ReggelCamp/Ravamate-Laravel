import ComponentHelper from "../helper/ComponentHelper.js";
import TableLoader from "../helper/TableLoader.js";
import Api from "../helper/Api.js";

let rows = [];
let array = [];
let map;

const SalesmanColumns = [
    {
        title: "Salesman Name",
        data: "salesman_name",
    },
    {
        title: "Attendance",
        data: "attendance",
        className: "text-center",
    },
    {
        title: "Target MCP",
        data: "target_mcp",
        className: "text-center dt-type-numeric",
    },
    {
        title: "Productive",
        data: "productive",
        className: "text-center dt-type-numeric",
    },
    {
        title: "Unproductive",
        data: "unproductive",
        className: "text-center dt-type-numeric",
    },
    {
        title: "Strike Rate",
        data: "strike_rate",
        className: "text-center dt-type-numeric",
    },
    {
        title: "Selling Hrs",
        data: "selling_hrs",
        className: "text-nowrap",
    },
    {
        title: "Sales",
        data: "sales",
        className: "text-end",
    },
];

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
];

// Sample data based on the table
const SampleData = [
    {
        stock_code: "FG05241",
        description: "BT Cheese 160g",
        quantity: "2/0/0",
        amount: "₱1,564.92",
    },
    {
        stock_code: "FG05242",
        description: "BT Cheese 430g",
        quantity: "2/0/0",
        amount: "₱2,233.98",
    },
    {
        stock_code: "FG03798",
        description: "SMCCT 100G",
        quantity: "5/0/0",
        amount: "₱6,804.00",
    },
    {
        stock_code: "FG03798",
        description: "SMCCT 100G",
        quantity: "5/0/0",
        amount: "₱6,804.00",
    },
    {
        stock_code: "FG03798",
        description: "SMCCT 100G",
        quantity: "5/0/0",
        amount: "₱6,804.00",
    },
    {
        stock_code: "FG03798",
        description: "SMCCT 100G",
        quantity: "5/0/0",
        amount: "₱6,804.00",
    },
    {
        stock_code: "FG03798",
        description: "SMCCT 100G",
        quantity: "5/0/0",
        amount: "₱6,804.00",
    },
    {
        stock_code: "FG03798",
        description: "SMCCT 100G",
        quantity: "5/0/0",
        amount: "₱6,804.00",
    },
    {
        stock_code: "FG03798",
        description: "SMCCT 100G",
        quantity: "5/0/0",
        amount: "₱6,804.00",
    },
    {
        stock_code: "FG03798",
        description: "SMCCT 100G",
        quantity: "5/0/0",
        amount: "₱6,804.00",
    },
    {
        stock_code: "FG03798",
        description: "SMCCT 100G",
        quantity: "5/0/0",
        amount: "₱6,804.00",
    },
];

// Total amount
const TotalAmount = "₱79,209.90";

$(document)
    .off("click.dashboardRow", "#dashboardDataTable tbody tr")
    .on("click.dashboardRow", "#dashboardDataTable tbody tr", function () {
        // salesman.js loads the data asynchronously; ensure DataTable is ready
        if (!$.fn.DataTable.isDataTable("#dashboardDataTable")) return;

        const dashboardTable = $("#dashboardDataTable").DataTable();
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

    let table = $("#dashboardDataTable").DataTable();
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

function DisplayCarousel() {
    $("#Carousel_Container").removeClass("hidden");
    $("#Salesman_Container").addClass("hidden");
}

$(document).on("click", "#Display_Carousel", function () {
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

TableLoader.tableData("#sfaQueuingModalTable", SampleData, ProductColumns, {
    scrollY: "500px",
});

TableLoader.loadTable({
    url: "getDashboardTable",
    tableId: "#dashboardDataTable",
    columns: SalesmanColumns,
    scrollY: "100px",
    pageLength: 10,

    onSuccess: (data) => {
        console.log(data.length);
        console.log("dashboard");
    },
});

$(document).ready(function () {
    getSalesmanInfo();
});

function getSalesmanInfo() {
    Api.get({
        url: "/getDashboardTable",

        onSuccess: (data) => {
            const array = data;

            console.log("array:", array);

            displayInfoWindow(array);
        },
    });
}

function displayInfoWindow(array) {
    if (!array || array.length === 0) {
        console.log("No salesman data.");
        return;
    }

    array.forEach((salesman) => {
        console.log(
            salesman.salesman_name,
            salesman.latitude,
            salesman.longitude,
        );

        const infoWindow = new google.maps.InfoWindow();

        const marker = new google.maps.Marker({
            position: {
                lat: Number(salesman.latitude),
                lng: Number(salesman.longitude),
            },
            map: window.dashboardMap,
            title: salesman.salesman_name,
        });

        marker.addListener("click", () => {
            infoWindow.setContent(`
               
            `);

            infoWindow.open(map, marker);
        });
    });
}

function getSalesmanInfoWindow(salesman) {

    const template = $("#salesmanInfoWindowTemplate")
        .find(".salesman-info-window")
        .clone();

    template.find(".salesman-name")
        .text(salesman.salesman_name ?? "-");

    template.find(".transaction-id")
        .text(salesman.transaction_id ?? "-");

    template.find(".attendance")
        .text(salesman.attendance ?? "-");

    template.find(".sales")
        .text(`₱${salesman.sales ?? "-"}`);

    return template[0];
}

// Create the InfoWindow once (reuse it for all markers)
// const infoWindow = new google.maps.InfoWindow();

// // When creating a marker
// const marker = new google.maps.Marker({
//     position: { lat: 10.7202, lng: 122.5621 }, // e.g. Iloilo City
//     map: map,
//     title: "Iloilo City"
// });

// // Show InfoWindow on marker click
// marker.addListener("click", () => {
//     infoWindow.setContent(`
//         <div class="p-2">
//             <h3 class="font-bold">${marker.getTitle()}</h3>
//             <p>Some details here</p>
//         </div>
//     `);
//     infoWindow.open(map, marker);
// });

// $(document).ready(function () {
//     DisplaySalesmanTable();
// });

// function DisplaySalesmanTable() {

//     Api.post({
//         url: "/DisplaySalesman",

//         onSuccess: (response) => {

//             rows = response.data ?? response;

//             console.log("rows:", rows);
//             console.log("count:", rows.length);

//             TableLoader.tableData(
//                 "#dashboardDataTable",
//                 rows,
//                 SalesmanColumns,
//                 {
//                     scrollY: "500px",
//                     pageLength: 5
//                 }
//             );
//         }
//     });
// }
