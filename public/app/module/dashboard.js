import ComponentHelper from "../helper/ComponentHelper.js";
import TableLoader from "../helper/TableLoader.js";
import Api from "../helper/Api.js";
import DatePicker from "../helper/datePicker.js";

let rows = [];
let array = [];
let map;
let currentSalesman = null;
let latest = [];
let markersById = {};
let currentMarker = null;
let bouncingMarker = null;
let latestInfoWindow = null;
let latestMarker = null;
let infoWindow = null;
let ExpandTable = false;

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

const MinutesDropdown = [
    {
        title: "Off",
        data: "off"
    },
    {
        title: "1 Minute",
        data: "1 min"
    },
    {
        title: "5 Minutes",
        data: "5 mins"
    },
    {
        title: "10 Minutes",
        data: "10 mins"
    },
    {
        title: "15 Minutes",
        data: "15 mins"
    },
    {
        title: "30 Minutes",
        data: "30 mins"
    },
    {
        title: "60 Minutes",
        data: "60 mins"
    }
];

const OperationColumns = [
    {
        title: "Operation Type",
        data: "operation_type",
        className: "text-nowrap",
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
        title: "Sales",
        data: "sales",
        className: "text-nowrap",
    },
];

const sampleOperationData = [
    {
        operation_type: "Booking",
        target_mcp: 45,
        productive: 32,
        unproductive: 13,
        strike_rate: "71.1%",
        sales: "₱125,400.00",
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

        console.log("Clicked row:", rowData);;
        showRowDetails(rowData);

        const entry = markersById[rowData.id];
        if (entry) {
            openInfoWindowFor(entry.salesman, entry.marker);
        } else {
            console.log("No marker found for this row.");
        }
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
    ExpandTable = !ExpandTable;

    console.log("ExpandTable:", ExpandTable);

    $(".HideMap").toggle();
    $(".tableSec").toggleClass("expanded", ExpandTable);
    $("#DataTable").toggleClass("expanded", ExpandTable);

    $("#ExpandBtn").text(
        ExpandTable ? "Collapse" : "Expand"
    );

    const table = $("#dashboardDataTable").DataTable();

    $(".dt-scroll-body").css(
        "max-height",
        ExpandTable ? "600px" : "100px"
    );

    table.page.len(
        ExpandTable ? 15 : 5
    ).draw(false);
});

ComponentHelper.dropdown().LoadDropdownItems({
    id: "#OperationTypeItems",
    items: OperationItems,
});

ComponentHelper.dropdown().LoadDropdownItems({
    id: "#MinDropdown",
    items: MinutesDropdown,
});

$("#MinDropdown").on("click", ".dropdown-item", function () {
    let data = $(this).data("value");

    $("#selectedMinute").text(data);
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
    pageLength: 10,
    scrollY: "500px",
});

TableLoader.loadTable({
    url: "getDashboardTable",
    tableId: "#dashboardDataTable",
    columns: SalesmanColumns,
    scrollY: "200px",
    pageLength: 10,
    searchInput:"#customSearch",
    onSuccess: (data) => {
        console.log("Dashboard data:", data);
        console.log("Dashboard count:", data.length);
        console.log("load table",ExpandTable);
        // IMPORTANT
        array = data;

        getlatestTransaction();
    },
});

function displayInfoWindow() {

    if (!array || array.length === 0) {
        console.log("No salesman data.");
        return;
    }
    map = window.dashboardMap;

     // Close both InfoWindows when clicking on the map
    google.maps.event.clearListeners(map, "click");

    map.addListener("click", () => {
        if (latestInfoWindow) {
            latestInfoWindow.close();
        }

        if (infoWindow) {
            infoWindow.close();
        }

        currentMarker = null;
    });

    infoWindow = new google.maps.InfoWindow();

    google.maps.event.addListener(infoWindow, "domready", () => {
        $("#CloseBtn").on("click", () => infoWindow.close());
        $("#LatestCloseBtn").on("click", () => infoWindow.close());

        latestInfoWindow.close();
        
        // Get the Blade DataTable component
        const tableComponent = $("#itemDetailsTable").children().clone();

        // Change the table ID
        tableComponent.find("table").attr("id", "infoWindowTableContent");

        // Insert component into InfoWindow
        $("#infoWindowTableContainer").empty().append(tableComponent);

        TableLoader.tableData(
            "#infoWindowTableContent",
            SampleData,
            ProductColumns,
            {
                searching: false,
                ordering: false,
                lengthChange: false,
                pageLength: 5,
                scrollY: "200px",
                scrollX: false,
            },
        );

        console.log("DataTable component inserted");
    });



    // When the marker info window (shown for a clicked salesman) is closed,
    // re-open the "Latest Transaction" popup again.
    google.maps.event.addListener(infoWindow, "close", () => {
        if ( latestInfoWindow) {
        latestInfoWindow.open(map, latestMarker);
    }
    });

    array.forEach((salesman) => {
        //console.log("latest ter in for each",latest.salesman_name);
        const isLatest = salesman.id == latest.id;

        const marker = new google.maps.Marker({
            position: {
                lat: Number(salesman.latitude),
                lng: Number(salesman.longitude),
            },
            map: window.dashboardMap,
            title: salesman.salesman_name,
            // animation: isLatest ? google.maps.Animation.BOUNCE : null,
        });

        markersById[salesman.id] = { marker, salesman }

        if (isLatest) {
            latestMarker = marker;
            latestInfoWindow = new google.maps.InfoWindow({
                content: `
                    <div id= "latestInfo_Container" class="latest-transaction-popup w-[193px] rounded-3xl overflow-hidden">
                        <div class="bg-red-500 text-white px-4 py-3 relative w-full">
                           
                            <div class="font-bold flex items-center gap-1">
                                <i class="fa-solid fa-location-dot"></i>
                                Latest Transaction
                            </div>
                            <div class="text-xs opacity-90">
                                added ${salesman.time_ago ?? "recently"}
                            </div>
                        </div>
                        <div class="px-4 py-3 pt-1">
                            <div class="font-bold text-base">
                                ${salesman.store_name ?? "Unknown Store"}
                            </div>
                            <div class="text-xs text-gray-500 italic">${salesman.store_address ?? ",,"}</div>
                            <div class="text-xs text-gray-500 mt-2">Salesman Assigned:</div>
                            <div class="text-xs font-semibold">${salesman.salesman_name ?? "-"}</div>
                            <div class="text-xs text-gray-500 mt-2">Transaction Sales:</div>
                            <div class="text-xs font-semibold">${salesman.transaction_sales ?? "₱ 106,392.50 (22 SKU)"}</div>
                        </div>
                    </div>
                `,
                disableAutoPan: false,
            });

            //latestInfoWindow.open(map, marker); // opens immediately, no click required
            google.maps.event.addListener(latestInfoWindow, "domready", () => {
                $("#LatestCloseBtn").on("click", () =>
                    latestInfoWindow.close(),
                );

                $("#latestInfo_Container").on("click", () => {
                    latestInfoWindow.close();
                    currentMarker = marker;
                    infoWindow.setContent(InfoWindowContent(salesman));
                    infoWindow.open(map, marker);
                    console.log("clicked info Window");
                });
            });

            $("#LatestCloseBtn").on("click", (e) => {      // ← added here
                e.stopPropagation();
                latestInfoWindow.close();
                console.log("Latest transaction popup closed");
            });

            latestInfoWindow.open(map, marker);
        }

        marker.addListener("click", () => {

            console.log("Marker clicked:", salesman.salesman_name);

            openInfoWindowFor(salesman, marker);
        });;
    });
}

function DisplayitemTable() {
    $("#itemDetailsTable").removeClass("hidden");
}

$(document).on("click", "#storeImg", function () {
    $("#CloseBtn").toggleClass("hidden");
    $("#addsressContainer").toggleClass("hidden");
    $("#storeImg").toggleClass("brightness-50");
});

// for radio button
$(document).on("click", ".tabs [type='radio'].tab", function () {
    const $tabs = $(this).closest(".tabs");
    if ($tabs.length === 0) return;

    $tabs.children(".tab-content").hide();
    $(this).next(".tab-content").show();

    if ($.fn.DataTable.isDataTable("#infoWindowTableContent")) {
        $("#infoWindowTableContent").DataTable().columns.adjust().draw(false);
    }
});

function getlatestTransaction() {
    Api.get({
        url: "/getLatestTransaction",

        onSuccess: (data) => {
            latest = data;
            console.log("latest:", latest);
            displayInfoWindow();
        },
    });
}

function InfoWindowContent(salesman) {
    return `
        <div class="w-[360px] max-w-full max-h-[500px] flex flex-col rounded-lg bg-base-100">

                    <!-- Header image with overlays -->
                    <div class="relative w-full h-[160px]">
                        <img
                            id="storeImg"
                            src="${salesman.customer_image ?? "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"}"
                            alt="Store"
                            class="w-full h-full object-cover brightness-50" />
        
                        <!-- top-left badge -->
                        <span id="" class="absolute top-2 left-2 badge badge-error text-white font-semibold text-xs">
                            ${salesman.transaction_code ?? "32_GP"}
                        </span>

                        <!-- top-right badge -->
                        <span class="absolute top-2 right-2 badge badge-success badge-outline bg-white/80 text-xs">
                            ⏱ ${salesman.status ?? "Visited Customer"}
                        </span>

                        <!-- carousel arrows -->
                        <button type="button" class="carousel-prev absolute left-1 top-1/2 -translate-y-1/2 btn btn-circle btn-xs">
                            ❮
                        </button>
                        <button type="button" class="carousel-next absolute right-1 top-1/2 -translate-y-1/2 btn btn-circle btn-xs">
                            ❯
                        </button>

                        <!-- store name overlay -->
                        <div class="absolute bottom-0 left-0 right-0 p-2 text-white">
                            <div id="addsressContainer" class="flex items-center gap-1">
                                <span class="badge badge-info badge-sm">${salesman.pin_number ?? "-"}</span>
                                <div class = "flex flex-col w-fit">
                                    <span class="font-semibold text-sm whitespace-nowrap leading-tight">${salesman.store_name ?? "Manding Store"}</span>
                                    <span class="font-medium text-[13] leading-tight">${salesman.store_address ?? "Cubacub"}</span>
                                </div>

                                 <!-- prev/next store buttons -->
                                <div class="flex justify-end w-full gap-1 p-2 pb-0">
                                    <button type="button" class="btn btn-xs text-[8px] rounded-full bg-white  btn-outline btn-error">❮ Prev Store</button>
                                    <button type="button" class="btn btn-xs text-[8px] rounded-full bg-white btn-outline btn-error">Next Store ❯</button>
                                </div>

                            </div>
                        </div>
                    </div>

                   
                   
                    <!-- Tabs -->
                    <div class="tabs tabs-border px-5 pb-2">
                        <input type="radio" name="my_tabs_2" class="tab text-[11px]" aria-label="Transaction Details" checked="checked" data-tab-content="tabContent1" />
                        <div class="tab-content flex flex-col gap-1 bg-base-100 pt-3 text-xs" style="display:block">
                            <div>
                                <span class="text-gray-400 block">Salesman Assigned:</span>
                                <span class="font-semibold">${salesman.salesman_name ?? "-"} 🔋 ${salesman.battery ?? "-"}%</span>
                            </div>
                            <div>
                                <span class="text-gray-400 block">Transaction ID:</span>
                                <span class="font-mono bg-gray-100 px-1 rounded">${salesman.transaction_id ?? "-"}</span>
                            </div>
                            <div class="flex justify-between pt-1">
                                <div class="w-full">
                                    <span class="text-gray-400 block">Transaction Date:</span>
                                    <span class="font-semibold">${salesman.transaction_date ?? "-"}</span>
                                </div>
                                <div class="flex flex-col justify-start w-full">
                                    <span class="text-gray-400 block">Sent Date:</span>
                                    <span class="font-semibold">${salesman.sent_date ?? "-"}</span>
                                </div>
                            </div>
                            <div class="flex justify-between">
                                 <div class="w-full">
                                    <span class="text-gray-400 block">Time Spent:</span>
                                    <span class="font-semibold">${salesman.time_spent ?? "-"}</span>
                                </div>
                                <div class="flex flex-col justify-start w-full">
                                    <span class="text-gray-400 block">Distance Travel:</span>
                                    <span class="font-semibold">${salesman.distance_travel ?? "-"}</span>
                                </div>
                            </div>
                            <div class="flex justify-between">
                                 <div class="w-full">
                                    <span class="text-gray-400 block">Remakrs:</span>
                                    <span class="font-semibold">${salesman.remarks ?? "---"}</span>
                                </div>
                                <div class="flex flex-col justify-start w-full">
                                    <span class="text-gray-400 block">Transaction Sales:</span>
                                    <span class="font-semibold">${salesman.transaction_sales ?? "₱ 3,823.74 (3 SKU) "}</span>
                                </div>
                            </div>
                        </div>

                        <input type="radio" name="my_tabs_2" class="tab text-[11px]" aria-label="Item Details" data-tab-content="tabContent2" />
                        <div
                            class="tab-content w-full  flex flex-col border-base-300 bg-base-100 text-xs""
                            data-tab="tabContent2"
                            style="display:none"
                        >
                            <div class = "flex w-full justify-between bg-red-500 text-white items-center h-[25px]">
                                <span>Transaction Items</span>
                                <span>₱ 7,147.93 (14 SKU)</span>
                            </div>
                            <div id="infoWindowTableContainer" class="w-full text-[9px] overflow-hidden"></div>
                        </div>

                        <input type="radio" name="my_tabs_2" class="tab text-[11px]" aria-label="Supporting Docs" data-tab-content="tabContent3" />
                        <div class="tab-content border-base-300 bg-base-100 pt-3 text-xs" style="display:none">
                            ${salesman.supporting_docs ?? "No supporting docs available."}
                        </div>
                    </div>
                </div>
    `;
}

function openInfoWindowFor(salesman, marker) {

    console.log("Opening InfoWindow for:", salesman.salesman_name);

    currentMarker = marker;

    // if (currentMarker && latestInfoWindow) {
    //     latestInfoWindow.close();
    // }

    // Close latest transaction popup
    if (latestInfoWindow) {
        latestInfoWindow.close();
    }

    // Bounce marker
    marker.setAnimation(google.maps.Animation.BOUNCE);

    bouncingMarker = marker;

    setTimeout(() => {
        marker.setAnimation(null);

        if (bouncingMarker === marker) {
            bouncingMarker = null;
        }
    }, 2400);

    // Center map
    map.panTo(marker.getPosition());
    map.setZoom(17);

    // Set content
    infoWindow.setContent(
        InfoWindowContent(salesman)
    );

    // Open InfoWindow
    infoWindow.open(map, marker);
}

$(document).ready(function () {
    DatePicker.init();
});

function updateLiveDateTime() {
    const now = moment();
    const formatted = now.format('ddd').toUpperCase() + ' | ' +
                       now.format('YYYY-MM-DD') + ' | ' +
                       now.format('hh:mm:ss A');
    $('#liveDateTimeText').text(formatted);
}

updateLiveDateTime();
setInterval(updateLiveDateTime, 1000);

$("#liveDateFilter").on("click",function(){
   $("#dashboardDatePicker").data("daterangepicker").show();
});

$(document).on("click", "#fitToScreen", function () {
    if (!document.fullscreenElement) {
        mapContainer.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
});

document.addEventListener("fullscreenchange", function () {
    $("#fitScreenInfo").toggleClass(
        "hidden",
        !document.fullscreenElement
    );
});

TableLoader.tableData(
    "#fitScreenTable",
    sampleOperationData,
    OperationColumns,
    {
        scrollY: "400px",
        pageLength: 10,
    },
);

// $(document).on("click", "#fitScreenTable ", function () {
//     $
// });

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

// $(document).ready(function () {
//     Promise.all([
//         fetchSalesmanData(),
//         fetchLatestTransaction(),
//     ]).then(([salesmanData, latestData]) => {
//         displayInfoWindow(salesmanData, latestData);
//     });
// });
