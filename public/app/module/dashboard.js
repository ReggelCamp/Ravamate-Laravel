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
let rowData;
let storeNames = [];

let storeIndex;
let storeLength = 0;
let InfoStoreLength = 0;
let currentInfoSalesman = null; 

let tableLength;
let dashboardLoadVersion = 0;

let globalSkuCount = 0;
let globalTotalSku = 0;

let TableTotalSku = 0;

let selectedDashboardDate;
let overviewPeriod = "day";
let summaryRequestVersion = 0;

// The dashboard opens with the last completed business day selected.
// Clone before subtracting so the current moment is never mutated.
const defaultDashboardDate = moment()
    .subtract(1, "day")
    .format("YYYY-MM-DD");


const SalesmanColumns = [
    {
        title: "Salesman Name",
        data: null,
        render: function(row){
            return row.transaction_salesman.salesman_name;
        }
    },
    {
        title: "Attendance",
        data: null,
        className: "text-center",

        render: function(data, type, row) {

            if (!row.transaction_date || !row.transaction_salesman?.call_time) {
                return "N/A";
            }

            const transactionTime = moment(row.transaction_date).format("HH:mm:ss");
            const callTime = row.transaction_salesman.call_time; // assumed "HH:mm:ss"

            return transactionTime > callTime ? "Late" : "On Time";
        }
    },
    {
        title: "Target MCP",
        data: null,
        className: "text-center dt-type-numeric",
        render: function(row) {
            return row.transaction_salesman.target_mcp
        }
    },
    {
        title: "Productive",
        data: null,
        className: "text-center dt-type-numeric",
        render: function(row) {
            return row.transaction_salesman.productive
        }
    },
    {
        title: "Unproductive",
       data: null,
        className: "text-center dt-type-numeric",
        render: function(row) {
            return row.transaction_salesman.unproductive
        }
    },
    {
        title: "Strike Rate",
        data: null,
        className: "text-center dt-type-numeric",
        render: function(row) {
            return row.transaction_salesman.strike_rate
        }
    },
    {
        title: "Selling Hrs",
        data: null,
        className: "text-center dt-type-numeric",
        render: function(row) {
            return row.transaction_salesman.selling_hrs
        }
    },
    {
        title: "Sales",
        data: null,
        className: "text-end",

        render: function (data, type, row) {
            let totalSales = 0;

            console.log("fq", row);

            const filterDay = moment(selectedDashboardDate, "YYYY-MM-DD");

            row.stores?.forEach(store => {

                store.transactions?.forEach(transaction => {

                    const dailyTransaction = moment(
                        transaction.transaction_date,
                        "YYYY-MM-DD HH:mm:ss"
                    );

                    if (!dailyTransaction.isSame(filterDay, "day")) {
                        return;
                    }

                    transaction.transaction_details?.forEach(detail => {

                        const quantity = Number(detail.quantity ?? 0);

                        const price = Number(
                            detail.current_price ?? 0
                        );

                        totalSales += quantity * price;
                    });

                });

            });

            return totalSales.toLocaleString();
        }
    }
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
        data: null,
        render: function(row) {
            return row.product_details?.StockCode ?? "";
        }
    },
    {
        title: "Description",
        data: "description",
        className: "text-left truncate max-w-[100px]"
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

// Total amount
const TotalAmount = "₱79,209.90";
let _mm = [];

$(document)
    .off("click.dashboardRow", "#dashboardDataTable tbody tr")
    .on("click.dashboardRow", "#dashboardDataTable tbody tr", function () {
        if (!$.fn.DataTable.isDataTable("#dashboardDataTable")) return;
        
        const dashboardTable = $("#dashboardDataTable").DataTable();
        rowData = dashboardTable.row(this).data();

        if (!rowData) return;

        // A table-row selection always starts on that salesman's first store.
        // Without this, SKU lookup can reuse the store index from a previously
        // opened map info window.
        storeIndex = 0;

        showRowDetails(rowData);
        //console.log("fer",rowData);
        const entries = markersById[rowData.id];

        if (entries && entries.length) {
            const entry = entries[0]; // same salesman object regardless of which store entry
            openInfoWindowFor(entry.salesman, entry.marker, 0);
        } else {
            console.log("No marker found for this row.");
        }

        console.log(rowData);

        const _m = _mm.find(m => m.trid == rowData.transaction_details[0].id);

        if (_m) {
            google.maps.event.trigger(_m, "click");
        } else {
            console.log("No marker found for transaction:");
        }

        console.log("data",rowData.id);
        getSidePanelContent(rowData);
        // getSku(rowData);
        getSku(rowData,"#sfaQueuingModalTable");

        //$("#SideSku").text(length);

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

    updateClock();
    setInterval(updateClock, 1000);

    const today = moment().format("YYYY-MM-DD");

    const dashboardDatePicker =
        $("#dashboardDatePicker").data("daterangepicker");

    if (dashboardDatePicker) {
        dashboardDatePicker.setStartDate(today);
        dashboardDatePicker.setEndDate(today);
    }

    loadDashboardData(today);

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
    id: "#OperationTypefitScreen",
    items: OperationItems,
});

ComponentHelper.dropdown().LoadDropdownItems({
    id: "#MinDropdown",
    items: MinutesDropdown,
});

ComponentHelper.dropdown().LoadDropdownItems({
    id: "#MinDropdownMainScreen",
    items: MinutesDropdown,
});
ComponentHelper.dropdown().LoadDropdownItems({
    id: "#MinDropdownFitScreen",
    items: MinutesDropdown,
});
ComponentHelper.dropdown().LoadDropdownItems({
    id: "#MinDropdownInfoTable",
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
    overviewPeriod = "mtd";
    refreshSelectedSalesmanSummary();
});

$(document).on("click", "#Mtd_Overview_Btn", function () {
    $("#Flip_Container").removeClass("flip_div");

    $("#Mtd_Overview_Btn").addClass("hidden");
    $("#Current_Day_Btn").removeClass("hidden");
    overviewPeriod = "day";
    refreshSelectedSalesmanSummary();
});

TableLoader.tableData("#sfaQueuingModalTable", [], ProductColumns, {
    pageLength: 10,
    scrollY: "500px",
});

function clearDashboardMarkers() {
    Object.values(markersById).flat().forEach(({ marker }) => marker.setMap(null));
    markersById = {};

    latestInfoWindow?.close();
    infoWindow?.close();
    latestInfoWindow = null;
    latestMarker = null;
    currentMarker = null;
}

function loadDashboardData(date = null) {
    const loadVersion = ++dashboardLoadVersion;
    selectedDashboardDate = date ?? moment().format("YYYY-MM-DD");

    clearDashboardMarkers();
    array = [];

    if ($.fn.DataTable.isDataTable("#dashboardDataTable")) {
        $("#dashboardDataTable").DataTable().destroy();
    }

    TableLoader.loadTable({
        url: "transaction/getSalesmanTransaction",
        filters: date ? { date } : undefined,
        tableId: "#dashboardDataTable",
        columns: SalesmanColumns,
        scrollY: "200px",
        pageLength: 5,
        searchInput: "#customSearch",
        isCurrent: () => loadVersion === dashboardLoadVersion,

        onSuccess: (data) => {
            if (loadVersion !== dashboardLoadVersion) return;

            console.log("Dashboard data:", data);

            if (!Array.isArray(data) || data.length === 0) {
                console.log("no data");
                Swal.fire("No data available on selected date");
                return;
            }

            array = data;

            getlatestTransaction(date, loadVersion);
        },
    });
}



function displayInfoWindow() {
    if (!array || array.length === 0) {
        console.log("No salesman data.");
        return;
    }

    console.log("row data from display info window", array);

    map = window.dashboardMap;

    // Close both InfoWindows when clicking on the map
    google.maps.event.clearListeners(map, "click");

    map.addListener("click", () => {
        if (latestInfoWindow) {
            latestInfoWindow.close();
        }

        if (infoWindow) {
            infoWindow.close();
            DisplayCarousel();
        }

        currentMarker = null;
    });

    infoWindow = new google.maps.InfoWindow();

    google.maps.event.addListener(infoWindow, "domready", () => {
        updateStoreNavButtons();

        const InfoContainer = $("#Info_Tab");

        if (InfoContainer) {
            const infoWindowWrapper = InfoContainer.closest(".gm-style-iw-c");

            if (infoWindowWrapper) {
                infoWindowWrapper.addClass("Info-Window");
            }
        }

        if (latestInfoWindow) {
            latestInfoWindow.close();
        }

        // Get the Blade DataTable component
        const tableComponent = $("#itemDetailsTable").children().clone();

        // Change the table ID
        tableComponent.find("table").attr("id", "infoWindowTableContent");

        // Insert component into InfoWindow
        $("#infoWindowTableContainer")
            .empty()
            .append(tableComponent);

        console.log("DataTable component inserted");
    });

    // When the marker info window is closed,
    // re-open the "Latest Transaction" popup again.
    google.maps.event.addListener(infoWindow, "close", () => {
        if (latestInfoWindow) {
            latestInfoWindow.open(map, latestMarker);
        }
    });

    // API now returns transactions directly
    array.forEach((transaction, index) => {

        const salesman = transaction.transaction_salesman;
        const store = transaction.transaction_store;

        console.log("Transaction:", transaction);
        console.log("Salesman:", salesman);
        console.log("Store:", store);

        if (!salesman || !store) {
            console.log("Missing salesman or store:", transaction);
            return;
        }

        const isLatestTransaction =
            transaction.transaction_id == latest?.transaction_id;

        const marker = new google.maps.Marker({
            position: {
                lat: Number(store.latitude),
                lng: Number(store.longitude),
            },
            map: window.dashboardMap,
            title: salesman.salesman_name,

            icon: {
                url:
                    "data:image/svg+xml;charset=UTF-8," +
                    encodeURIComponent(`
                        <svg xmlns="http://www.w3.org/2000/svg"
                             width="50"
                             height="60"
                             viewBox="0 0 50 60">

                            <path
                                d="M25 58
                                   C25 58 5 36 5 23
                                   C5 10 14 2 25 2
                                   C36 2 45 10 45 23
                                   C45 36 25 58 25 58Z"
                                fill="#ef4444"
                                stroke="white"
                                stroke-width="3"
                            />

                            <text
                                x="25"
                                y="29"
                                text-anchor="middle"
                                font-family="Arial"
                                font-size="16"
                                font-weight="bold"
                                fill="white">
                                ${index + 1}
                            </text>

                        </svg>
                    `),

                scaledSize: new google.maps.Size(40, 48),
                anchor: new google.maps.Point(20, 48),
            },
        });

        marker.trid = transaction.transaction_id;

        console.log(transaction.transaction_id)

        _mm.push(marker);

        // Store marker under salesman
        if (!markersById[salesman.id]) {
            markersById[salesman.id] = [];
        }

        markersById[salesman.id].push({
            marker,
            salesman,
            store,
            transaction,
            storeIndex: 0
        });

        // Marker click
        marker.addListener("click", () => {

            console.log("Marker clicked:", salesman.salesman_name);
            console.log("Store clicked:", store.store_name);
            console.log("Transaction ID:", transaction.transaction_id);

            if (!isLatestTransaction && latestMarker) {
                latestMarker.setAnimation(null);
            }

            currentMarker = marker;
            currentInfoSalesman = salesman;

            // Keep the transaction as row data
            rowData = transaction;

            // Each transaction now represents one store
            storeIndex = 0;
            window.storeIndex = storeIndex;

            openInfoWindowFor(transaction, marker, 0);

            // Pass transaction instead of salesman
            showRowDetails(transaction);
            getSidePanelContent(transaction);
            getSku(transaction, "#sfaQueuingModalTable");
        });

        // Latest transaction
        const latestStore = latest?.transaction_store;

        const isLatestStore =
            isLatestTransaction &&
            store.store_id == latestStore?.store_id;

        if (isLatestStore) {

            console.log("latest info", latestStore);

            latestMarker = marker;

            latestInfoWindow = new google.maps.InfoWindow({

                content: `
                    <div id="latestInfo_Container"
                         class="latest-transaction-popup min-w-[193px] rounded-3xl">

                        <div class="salemanInfoCard px-4 py-3 relative w-full">

                            <div class="flex gap-1">

                                <span class="items-center justify-center flex">
                                    <i class="fa-solid fa-location-dot"
                                       style="font-size: 20px;"></i>
                                </span>

                                <div class="flex flex-col items-center">

                                    <span class="font-bold w-full text-[16px]">
                                        Latest Transaction
                                    </span>

                                    <span class="w-full text-xs opacity-90">
                                        added ${transaction.time_ago ?? "recently"}
                                    </span>

                                </div>

                            </div>

                        </div>

                        <div class="px-4 py-3 pt-1">

                            <div class="font-medium text-[16px]">
                                ${store.store_name ?? "N/A"}
                            </div>

                            <div class="text-xs text-gray-500 italic">
                                ${transaction.store_address ?? "N/A"}
                            </div>

                            <div class="text-[9px] text-[#b8babc] mt-2">
                                Salesman Assigned:
                            </div>

                            <div class="text-[11px] font-medium whitespace-nowrap">
                                ${salesman.salesman_name ?? "N/A"}
                            </div>

                            <div class="text-[9px] text-[#b8babc] mt-2">
                                Transaction Sales:
                            </div>

                            <div class="text-[11px] font-medium">
                                ${store.transaction_sales ?? "N/A"}
                            </div>

                        </div>

                    </div>
                `,

                disableAutoPan: false,
            });

            google.maps.event.addListener(
                latestInfoWindow,
                "domready",
                () => {

                    $("#latestInfo_Container")
                        .off("click.latest")
                        .on("click.latest", () => {

                            map.panTo(marker.getPosition());
                            map.setZoom(17);

                            latestInfoWindow.close();

                            currentMarker = marker;
                            currentInfoSalesman = salesman;

                            console.log(
                                "Current salesman:",
                                currentInfoSalesman
                            );

                            // One transaction = one store
                            storeIndex = 0;
                            window.storeIndex = storeIndex;

                            // Pass transaction data
                            showRowDetails(transaction);
                            getSidePanelContent(transaction);
                            getSku(
                                transaction,
                                "#sfaQueuingModalTable"
                            );

                            infoWindow.setContent(
                                InfoWindowContent(transaction)
                            );

                            marker.setAnimation(
                                google.maps.Animation.BOUNCE
                            );

                            infoWindow.open(map, marker);

                            console.log(
                                "Latest store index:",
                                storeIndex
                            );
                        });
                }
            );

            latestInfoWindow.open(map, marker);
        }
    });
}



function DisplayitemTable() {
    $("#itemDetailsTable").removeClass("hidden");
}

$(document).on("click", "#storeImg", function () {
    $("#CloseBtn").toggleClass("hidden");
    $("#addsressContainer").toggleClass("hidden");
    $("#Store_GP").toggleClass("hidden");
    $("#isVisited").toggleClass("hidden");
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

function getlatestTransaction(date = null, loadVersion = dashboardLoadVersion) {
    Api.get({
        // url: "dashboard/getLatestTransaction",
        url: "dashboard/getLatestTransaction",
        data: date ? { date } : undefined,

        onSuccess: (data) => {
            if (loadVersion !== dashboardLoadVersion || !data) return;

            latest = data;
            console.log("latest:", latest);
            displayInfoWindow();    
        },
    });
}

// function InfoWindowContent(salesman) {
function InfoWindowContent(transaction) {
    console.log("transaction infoWindow", transaction);
    console.log("transaction storeIndex", storeIndex);

    let TotalSalesOnStore = 0;
    const InfoTableSKU = getTableLength();

    // New API structure
    const selectedStore = transaction.transaction_store;

    // The transaction itself is now the selected transaction
    const dayTransaction = transaction;

    // Calculate total sales from transaction details
    transaction.transaction_details?.forEach(detail => {
        const quantity = Number(detail.quantity ?? 0);
        const price = Number(detail.current_price ?? 0);

        TotalSalesOnStore += quantity * price;
    });

    const transactionDate = dayTransaction?.transaction_date;

    const formattedDate = transactionDate
        ? DateFormatter(transactionDate)
        : "N/A";

    console.log("selected store", selectedStore);
    console.log("selected trans", dayTransaction);
    console.log("selected date", formattedDate);
    console.log("Total sales", TotalSalesOnStore);

    return `
        <div id="Info_Tab" class="w-[360px] max-w-full max-h-[500px] flex flex-col rounded-lg bg-base-100 Info_Tab">

                    <!-- Header image with overlays -->
                    <div class="relative w-full h-[160px]">
                        <img
                            id="storeImg"
                            src="${transaction.customer_image ?? "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"}"
                            alt="Store"
                            class="w-full h-full object-cover brightness-50" />

                        <!-- top-left badge -->
                        <span id="Store_GP" class="absolute top-2 left-2 salemanInfoCard p-2 rounded-2xl font-semibold text-xs">
                            ${transaction.transaction_code ?? "32_GP"}
                        </span>

                        <!-- top-right badge -->
                        <span id="isVisited" class="absolute top-2 right-2 badge text-green-600 badge-outline bg-green-200 text-xs">
                            ⏱ ${transaction.status ?? "Visited Customer"}
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

                                <div class="relative flex items-center justify-center shrink-0">
                                    <i class="fa-solid fa-location-pin text-2xl"></i>

                                    <span class="absolute top-[3.5px] left-1/2 -translate-x-1/2
                                        flex items-center justify-center
                                        text-black font-bold text-[11px] leading-none">
                                        ${selectedStore?.store_id ?? transaction.store_id}
                                    </span>
                                </div>

                                <div class="flex flex-col w-fit">
                                    <span
                                        id="InfoStoreName"
                                        class="font-semibold text-sm whitespace-nowrap leading-tight">
                                        ${selectedStore?.store_name ?? "N/A"}
                                    </span>

                                    <span class="font-medium text-[9px] text-white leading-tight">
                                        ${transaction.store_address ?? "Cubacub"}
                                    </span>
                                </div>

                                <!-- prev/next store buttons -->
                                <div class="flex items-center justify-end w-full gap-1 p-2 pb-0">

                                    <button
                                        type="button"
                                        id="infoPrev"
                                        class="btn py-1.5 h-fit side_Prev font-medium w-fit p-1.5 salemanInfoCard text-[8px] rounded-full border-none">
                                        ❮ Prev Store
                                    </button>

                                    <button
                                        type="button"
                                        id="infoNext"
                                        class="btn py-1.5 h-fit side_Next font-medium w-fit p-1.5 salemanInfoCard text-[8px] rounded-full border-none">
                                        Next Store ❯
                                    </button>

                                </div>

                            </div>
                        </div>
                    </div>

                    <!-- Tabs -->
                    <div class="tabs tabs-border items-cemter justify-center px-0 pb-2">

                        <input
                            type="radio"
                            name="my_tabs_2"
                            class="tab text-[11px] Info_Window_Tab"
                            aria-label="Transaction Details"
                            checked="checked"
                            data-tab-content="tabContent1" />

                        <div
                            class="tab-content flex flex-col gap-3 bg-base-100 py-3 px-5 text-xs"
                            style="display:block">

                            <div class="">
                                <span class="text-gray-400 block">
                                    Salesman Assigned:
                                </span>

                                <span class="font-semibold">
                                    ${transaction.transaction_salesman?.salesman_name ?? ""}
                                    🔋 ${transaction.battery ?? "-"}%
                                </span>
                            </div>

                            <div class="pt-3">
                                <span class="text-gray-400 block">
                                    Transaction ID:
                                </span>

                                <span class="font-mono px-1 rounded font-normal text-[11px]">
                                    ${transaction.transaction_id ?? "N/A"}
                                </span>
                            </div>

                            <div class="flex justify-between pt-3">

                                <div class="w-full">
                                    <span class="text-gray-400 block">
                                        Transaction Date:
                                    </span>

                                    <span class="font-normal text-[11px]">
                                        ${formattedDate}
                                    </span>
                                </div>

                                <div class="flex flex-col justify-start w-full">
                                    <span class="text-gray-400 block">
                                        Sent Date:
                                    </span>

                                    <span class="font-normal text-[11px]">
                                        ${formattedDate}
                                    </span>
                                </div>

                            </div>

                            <div class="flex justify-between pt-3">

                                <div class="w-full">
                                    <span class="text-gray-400 block">
                                        Time Spent:
                                    </span>

                                    <span class="font-normal text-[11px]">
                                        ${transaction.time_spent ?? "N/A"}
                                    </span>
                                </div>

                                <div class="flex flex-col justify-start w-full">
                                    <span class="text-gray-400 block">
                                        Distance Travel:
                                    </span>

                                    <span class="font-normal text-[11px]">
                                        ${transaction.distance_travel ?? "6.95 km in 5 hrs 11 mins"}
                                    </span>
                                </div>

                            </div>

                            <div class="flex justify-between pt-3">

                                <div class="w-full">
                                    <span class="text-gray-400 block">
                                        Remakrs:
                                    </span>

                                    <span class="font-normal text-[11px]">
                                        ${transaction.remarks ?? "---"}
                                    </span>
                                </div>

                                <div class="flex flex-col justify-start w-full">
                                    <span class="text-gray-400 block">
                                        Transaction Sales:
                                    </span>

                                    <span
                                        id="totalStoreDetails"
                                        class="font-normal text-[11px]">
                                        ${TotalSalesOnStore.toFixed(2)}
                                    </span>
                                </div>

                            </div>

                        </div>

                        <input
                            type="radio"
                            name="my_tabs_2"
                            class="tab text-[11px] Info_Window_Tab"
                            aria-label="Item Details"
                            data-tab-content="tabContent2" />

                        <div
                            class="tab-content w-full flex flex-col border-base-300 bg-base-100 text-xs"
                            data-tab="tabContent2"
                            style="display:none">

                            <div
                                id="InfoTableContainer"
                                data-table="infoWindowTableContent"
                                class="flex w-full justify-between salemanInfoCard Transaction_Container border items-center h-[25px] py-5 px-2 rounded-t-2xl toggle-item-table cursor-pointer">

                                <div class="flex gap-1 items-center">

                                    <img
                                        class="h-[25px] w-[25px]"
                                        src="https://cdo.sfa-plus.com/SFA/v2/img/PesoSign.svg"/>

                                    <span class="text-[13px]">
                                        Transaction Items
                                    </span>

                                </div>

                                <div class="flex gap-1 items-center">

                                    <span id="TotalSku">
                                    </span>

                                    <span class="Sku_Num">
                                    </span>

                                    <i class="fa-solid fa-chevron-down text-[10px] transition-transform toggle-icon rotate-180"></i>

                                </div>

                            </div>

                            <div class="flex p-2 ViewTable_Container">
                                <i class="text-[#86888a] mdi mdi-arrow-up-left"></i>

                                <span class="text-[#86888a] text-[10px] pb-[20px]">
                                    Click to view Items
                                </span>
                            </div>

                            <div
                                id="infoWindowTableContainer"
                                class="w-full text-[9px] overflow-hidden"
                                style="display:none">
                            </div>

                        </div>

                        <input
                            type="radio"
                            name="my_tabs_2"
                            class="tab text-[11px] Info_Window_Tab"
                            aria-label="Supporting Docs"
                            data-tab-content="tabContent3" />

                        <div
                            class="tab-content px-5 pb-2 border-base-300 bg-base-100 px-0 pt-3 text-xs"
                            style="display:none">

                            <div class="flex w-full">

                                <div class="flex w-full">
                                    <div class="w-[125px] h-[125px] rounded-full border"></div>
                                </div>

                                <div class="flex flex-col w-full justify-center items-center px-2 gap-2">

                                    <span class="flex text-[11px] text-[##505664]">
                                        Reference Number:
                                    </span>

                                    <span class="flex text-[11px] text-black">
                                        FPM_4202609041642023
                                    </span>

                                    <span class="flex text-[11px] text-[##505664]">
                                        Remarks:
                                    </span>

                                    <span class="flex text-[11px] text-[##505664]">
                                        ---
                                    </span>

                                </div>

                            </div>

                        </div>

                    </div>
                </div>
    `;
}

function openInfoWindowFor(transaction, marker, targetIndex = 0) {

    currentInfoSalesman = transaction.transaction_salesman;
    rowData = transaction;
    storeIndex = targetIndex;

    updateStoreNavButtons();

    console.log(
        "Opening InfoWindow for:",
        transaction.transaction_salesman?.salesman_name,
        "Store index:",
        storeIndex
    );

    currentMarker = marker;

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

    // Set InfoWindow content
    infoWindow.setContent(
        InfoWindowContent(transaction)
    );

    // Open InfoWindow
    infoWindow.open(map, marker);
}

$(document).ready(function () {
    DatePicker.init();

    // The picker starts at today even though the initial dashboard data uses
    // the last completed business day.
    const dashboardDatePicker = $("#dashboardDatePicker").data("daterangepicker");
    if (dashboardDatePicker) {
        const today = moment();
        dashboardDatePicker.setStartDate(today);
        dashboardDatePicker.setEndDate(today);
        loadDashboardData(today.format("YYYY-MM-DD"));
    }

    $("#dashboardDatePicker")
        .off("apply.daterangepicker.dashboard")
        .on("apply.daterangepicker.dashboard", function (event, picker) {
            loadDashboardData(picker.startDate.format("YYYY-MM-DD"));
        });

    $("#dashboardDatePicker")
        .off("cancel.daterangepicker.dashboard")
        .on("cancel.daterangepicker.dashboard", function () {
            const today = moment();

            dashboardDatePicker?.setStartDate(today);
            dashboardDatePicker?.setEndDate(today);
            loadDashboardData(today.format("YYYY-MM-DD"));
        });
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
    [],
    OperationColumns,
    {
        scrollY: "400px",
        pageLength: 10,
    },
);

// Loads the real dashboard (salesman) data into the fit-to-screen table so it
// reflects the same data as the main dashboard table for the selected date.
function loadFitScreenTable(date = null) {
    $("#fitScreenSalesmanToolbar").removeClass("hidden");
    $("#fitScreenHeader").addClass("hidden");

    if ($.fn.DataTable.isDataTable("#fitScreenTable")) {
        $("#fitScreenTable").DataTable().destroy();
    }

    TableLoader.loadTable({
        url: "dashboard/getDashboardTable",
        filters: date ? { date } : undefined,
        tableId: "#fitScreenTable",
        columns: SalesmanColumns,
        scrollY: "400px",
        scrollX: true,
        pageLength: 10,
        searchInput: "#customSearch",

        onSuccess: () => {
            // Force DataTables to recalculate widths once the data has rendered.
            setTimeout(() => {
                if ($.fn.DataTable.isDataTable("#fitScreenTable")) {
                    $("#fitScreenTable").DataTable().columns.adjust().draw(false);
                }
            }, 300);
        },
    });
}

// fit to screen table: clicking the fit-screen table switches to the salesman
// view and (re)loads the real dashboard data.
$(document).on("click", "#fitScreenTable", function () {
    loadFitScreenTable(selectedDashboardDate);
});

$("#displayTable").on("click", function () {

    $("#fitScreenSalesmanToolbar").addClass("hidden");
    $("#fitScreenHeader").removeClass("hidden");

    if ($.fn.DataTable.isDataTable("#fitScreenTable")) {
        $("#fitScreenTable").DataTable().destroy();
    }

    // Remove old DataTable content
    $("#fitScreenTable").empty();

    // Rebuild the operation-type view (no fake data; the salesman data is
    // (re)loaded when the fit-screen table is clicked).
    TableLoader.tableData(
        "#fitScreenTable",
        [],
        OperationColumns,
        {
            scrollY: "400px",
            pageLength: 10,
            autoWidth: false,
            scrollX: true,
        }
    );
});


document.addEventListener("fullscreenchange", function () {
    const isFull = !!document.fullscreenElement;
    $("#fitScreenInfo").toggleClass("hidden", !isFull);

    if (isFull) {
        // Reflect the dashboard data as soon as the fit-screen is shown.
        loadFitScreenTable(selectedDashboardDate);
    }

    if (isFull && $.fn.DataTable.isDataTable("#fitScreenTable")) {
        // wait one frame so the container has its real width first
        requestAnimationFrame(() => {
            $("#fitScreenTable").DataTable().columns.adjust().draw(false);
            $("#fitScreenTable_wrapper .dt-scroll-body").scrollLeft(0); // reset horizontal scroll
        });
    }
});


$(document)
    .off("click.storeNav", ".side_Next")
    .on("click.storeNav", ".side_Next", function (e) {
        e.stopPropagation();

        const activeSalesman = currentInfoSalesman ?? rowData;
        const lastIndex = (activeSalesman?.stores?.length ?? 1) - 1;

        if (storeIndex < lastIndex) {
            storeIndex++;
            console.log("store index val plus", storeIndex);
            const newStore = activeSalesman.stores[storeIndex];

            infoWindow.setContent(
                InfoWindowContent(activeSalesman)
            );

            $("#InfoStoreName").text(newStore?.store_name ?? "No Store");
            $("#storeName").text(newStore?.store_name ?? "No Store");

            if (newStore && currentMarker) {
                const newPos = {
                    lat: Number(newStore.latitude),
                    lng: Number(newStore.longitude),
                };

                currentMarker.setPosition(newPos);
                map.panTo(newPos);
            }
            updateStoreNavButtons();
            getSku(activeSalesman, "#sfaQueuingModalTable");
        }
    });

$(document)
    .off("click.storeNav", ".side_Prev")
    .on("click.storeNav", ".side_Prev", function (e) {
        e.stopPropagation();

        if (storeIndex > 0) {
            storeIndex--;
            console.log("store index val minus", storeIndex);
            const activeSalesman = currentInfoSalesman ?? rowData;
            const newStore = activeSalesman.stores[storeIndex];

            infoWindow.setContent(
                InfoWindowContent(activeSalesman)
            );

            $("#InfoStoreName").text(newStore?.store_name ?? "No Store");
            $("#storeName").text(newStore?.store_name ?? "No Store");

            if (newStore && currentMarker) {
                const newPos = {
                    lat: Number(newStore.latitude),
                    lng: Number(newStore.longitude),
                };

                currentMarker.setPosition(newPos);
                map.panTo(newPos);
            }
            updateStoreNavButtons();
            getSku(activeSalesman, "#sfaQueuingModalTable");
        }
    });


$(document).on('click', '.toggle-item-table', function () {
    const $container = $(this).siblings('#infoWindowTableContainer');
    const $icon = $(this).find('.toggle-icon');
    //tableLength = getTableLength();
    $container.slideToggle(200);
    $icon.toggleClass('rotate-180');

    $(".ViewTable_Container").toggleClass("hidden");
    // $(".Sku_Num").text(tableLength,"SKU");
    // console.log("length of table",tableLength);
});

$(document).on("mouseenter", ".Transaction_Container", function(){
    $(this).addClass("font-bold");
});

$(document).on("mouseleave", ".Transaction_Container", function(){
    $(this).removeClass("font-bold");
});

function updateStoreNavButtons() {
    const activeSalesman = currentInfoSalesman ?? rowData;
    if (!activeSalesman) return;

    const lastIndex = (activeSalesman.transactions?.length ?? 1) - 1;

    $(".side_Prev, #infoPrev")
        .prop("disabled", storeIndex <= 0)
        .toggleClass("nav-disabled", storeIndex <= 0);

    $(".side_Next, #infoNext")
        .prop("disabled", storeIndex >= lastIndex)
        .toggleClass("nav-disabled", storeIndex >= lastIndex);

    refreshSelectedSalesmanSummary();
}

function getTableLength(tableId) {

    if (!$.fn.DataTable.isDataTable("#" + tableId)) {
        console.log("DataTable not initialized:", tableId);
        return 0;
    }

    const table = $("#" + tableId).DataTable();

    const length = table.rows().count();

    return length;
}


$(document)
    .off("click.table", "#InfoTableContainer")
    .on("click.table", "#InfoTableContainer", function () {
        getSku(currentInfoSalesman ?? rowData, "#infoWindowTableContent");
    });

function DateFormatter(transactionDate, type = "datetime") {
    const date = new Date(transactionDate);
    console.log("bed",date);
    if (type === "time") {
        return date.toLocaleTimeString("en-PH", {
            hour: "numeric",
            minute: "2-digit",
            second: "2-digit"
        });
    }

    return date.toLocaleString("en-PH", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit"
    });
}

function getSku(data, tableId) {

    const transaction = data;

    if (!transaction) {
        globalSkuCount = 0;
        globalTotalSku = 0;

        renderProductTable(tableId, []);
        $(".Sku_Num").text("(0 SKU)");
        $("#TotalSku").text("₱ 0");
        $("#totalStoreDetails").text("₱ 0");

        return;
    }

    const productRows = (transaction.transaction_details ?? [])
        .map((detail) => {

            const quantity = Number(detail.quantity ?? 0);
            const price = Number(detail.current_price ?? 0);

            return {
                ...detail,

                transaction_id: transaction.transaction_id,
                store_id: transaction.store_id,

                StockCode: detail.product_details?.StockCode ?? null,
                description: detail.product_details?.description ?? null,
                brand: detail.product_details?.brand ?? null,
                supplier: detail.product_details?.supplier ?? null,

                price: price,
                quantity: quantity,
                amount: quantity * price,
            };
        });

    globalSkuCount = productRows.length;

    globalTotalSku = productRows.reduce(
        (sum, item) => sum + item.amount,
        0
    );

    renderProductTable(tableId, productRows);

    $(".Sku_Num").text(`(${globalSkuCount} SKU)`);
    $("#TotalSku").text(formatCurrency(globalTotalSku));
    $("#totalStoreDetails").text(formatCurrency(globalTotalSku));
}

function getSidePanelContent(transaction) {

    if (!transaction) return;

    rowData = transaction;

    const salesman = transaction.transaction_salesman;
    const store = transaction.transaction_store;

    // Transaction date
    const transactionDate = transaction.transaction_date;

    const formattedDate = transactionDate
        ? moment(
            transactionDate,
            "YYYY-MM-DD HH:mm:ss"
        ).format("MMM DD, YYYY")
        : "N/A";

    // Transaction time
    const transTimeMoment = transactionDate
        ? moment(
            transactionDate,
            "YYYY-MM-DD HH:mm:ss"
        )
        : null;

    const TransactionTime = transTimeMoment
        ? transTimeMoment.format("h:mm:ss A")
        : "----";

    // Time in
    // Since the current API response represents one transaction,
    // use its transaction time as the available time.
    const timeIn = transTimeMoment
        ? transTimeMoment.format("h:mm:ss A")
        : "----";

    // Attendance
    // Same 8:00 AM cutoff used in SalesmanColumns.
    if (transTimeMoment) {

        const cutoff = moment(transTimeMoment).set({
            hour: 8,
            minute: 0,
            second: 0
        });

        $("#Attendance").text(
            transTimeMoment.isBefore(cutoff)
                ? "Early"
                : "Late"
        );

    } else {

        $("#Attendance").text("No Transaction");

    }

    // Salesman
    $("#Salesman_Name").text(
        salesman?.salesman_name ?? "No Salesman"
    );

    // Visited Store
    // New API represents one transaction/store at a time.
    $("#VisitedStore").text(
        store?.store_name ? 1 : 0
    );

    // Call time
    $("#call_time").text(
        salesman?.call_time ?? "NULL"
    );

    // Store
    $("#storeName").text(
        store?.store_name ?? "No Store"
    );

    // Time in
    $("#time_in").text(timeIn);

    // Transaction time
    $("#transaction_time").text(TransactionTime);

    // Transaction date
    $(".TransactionDate").text(formattedDate);

    refreshSelectedSalesmanSummary();
}

function formatCurrency(value) {
    return `₱ ${Number(value ?? 0).toLocaleString("en-PH", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    })}`;
}

function refreshSelectedSalesmanSummary() {
    if (!rowData?.id || !selectedDashboardDate) return;

    const requestVersion = ++summaryRequestVersion;

    Api.get({
        url: "dashboard/getSalesmanInfo",
        data: {
            salesman_id: rowData.id,
            date: selectedDashboardDate,
            period: overviewPeriod,
        },
        onSuccess: (summary) => {
            if (requestVersion !== summaryRequestVersion) return;

            console.log("few", globalTotalSku);
            console.log("fewqw", summary);

            const sales = formatCurrency(globalTotalSku);
            const skuCount = Number(globalSkuCount ?? 0);

            if (overviewPeriod === "mtd") {
                let MonthtotalSales = 0;

                const filterMonth = moment(
                    selectedDashboardDate,
                    "YYYY-MM-DD"
                );

                // New API returns transactions directly
                summary?.forEach(transaction => {
                    const transactionMonth = moment(
                        transaction.transaction_date,
                        "YYYY-MM-DD HH:mm:ss"
                    );

                    if (!transactionMonth.isSame(filterMonth, "month")) {
                        return;
                    }

                    transaction.transaction_details?.forEach(detail => {
                        const quantity = Number(detail.quantity ?? 0);
                        const price = Number(detail.current_price ?? 0);

                        MonthtotalSales += quantity * price;
                    });
                });

                const formattedTotal = formatCurrency(MonthtotalSales);

                $("#MtdSalesmanTotal_Sales").text(formattedTotal);
                $("#MtdSku").text(skuCount);
                $("#MtdValue").text(MonthtotalSales);

                return;
            }

            $("#SalesmanTotal_Sales").text(sales);
            $("#SkuCount").text(`(${skuCount} SKU)`);
            $("#SideSku").text(skuCount);
            $("#CurrentDayValue").text(sales);
            $("#sku_sales").text(sales ?? 0);
        },
    });
}

function renderProductTable(tableId, products) {
    if (!$(tableId).length) return;

    if ($.fn.DataTable.isDataTable(tableId)) {
        $(tableId).DataTable().destroy();
    }

    TableLoader.tableData(tableId, products, ProductColumns, {
        searching: false,
        ordering: false,
        lengthChange: false,
        pageLength: 5,
        scrollY: "200px",
        scrollX: false,
    });
}
