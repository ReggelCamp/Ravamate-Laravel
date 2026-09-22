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
            // return row.transaction_salesman.salesman_name;
            return row.salesman_name;
        }
    },
    {
        title: "Attendance",
        data: null,
        className: "text-center",

        render: function(data, type, row) {
            console.log("kkk",row);
            // Attendance must use the salesman's own transaction for the
            // selected business day — the API does not order/guarantee
            // that index 0 is that transaction.
            const filterDay = moment(selectedDashboardDate, "YYYY-MM-DD");

            const dailyTransactions = (row.salesman_transaction ?? [])
                .filter(daily => moment(
                    daily.transaction_date,
                    "YYYY-MM-DD HH:mm:ss"
                ).isSame(filterDay, "day"))
                .sort((a, b) => moment(a.transaction_date, "YYYY-MM-DD HH:mm:ss")
                    .diff(moment(b.transaction_date, "YYYY-MM-DD HH:mm:ss")));

            const transaction = dailyTransactions[0];

            if (!transaction?.transaction_date || !row.call_time) {
                return "N/A";
            }

            const transactionTime = moment(transaction.transaction_date).format("HH:mm:ss");
            const callTime = row.call_time;

            return transactionTime > callTime ? "Late" : "On Time";
        }
    },
    {
        title: "Target MCP",
        data: null,
        className: "text-center dt-type-numeric",
        render: function(row) {
            return row.target_mcp
        }
    },
    {
        title: "Productive",
        data: null,
        className: "text-center dt-type-numeric",
        render: function(row) {
            return row.productive
        }
    },
    {
        title: "Unproductive",
       data: null,
        className: "text-center dt-type-numeric",
        render: function(row) {
            return row.unproductive
        }
    },
    {
        title: "Strike Rate",
        data: null,
        className: "text-center dt-type-numeric",
        render: function(row) {
            return row.strike_rate
        }
    },
    {
        title: "Selling Hrs",
        data: null,
        className: "text-center dt-type-numeric",
        render: function(row) {
            return row.selling_hrs
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

            // salesman/getSalesmanWithTransaction returns the salesman's own
            // transactions at row.salesman_transaction — there is no row.stores
            // in that payload.
            row.salesman_transaction?.forEach(transaction => {

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
        data: "StockCode",
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
// let _mm = [];

$(document)
    .off("click.dashboardRow", "#dashboardDataTable tbody tr")
    .on("click.dashboardRow", "#dashboardDataTable tbody tr", function () {

        if (!$.fn.DataTable.isDataTable("#dashboardDataTable")) return;

        const dashboardTable = $("#dashboardDataTable").DataTable();
        rowData = dashboardTable.row(this).data(); // this is now a SALESMAN object

        if (!rowData) return;

        storeIndex = 0;

        const firstTransaction = rowData.salesman_transaction?.[0];

        if (!firstTransaction) {
            console.log("This salesman has no transaction on the selected date.");
            showRowDetails(rowData);
            getSku(null, "#sfaQueuingModalTable");
            getSidePanelContent(rowData);
            return;
        }

        showRowDetails(rowData);

        console.log("Transaction ID:", firstTransaction.transaction_id);

        const entry = markersById[String(firstTransaction.transaction_id)];

        if (entry) {
            openInfoWindowFor(rowData, entry.marker, 0);
            console.log("Marker transaction:", entry.transaction);
        } else {
            console.log("No marker found for transaction:", firstTransaction.transaction_id);
        }

        getSidePanelContent(rowData);
        getSku(firstTransaction, "#sfaQueuingModalTable");
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

        Swal.fire({
        title: "Fetching data",
        text: "Please wait",
        allowOutsideClick: false,
        allowEscapeKey: false,
        didOpen: () => {
            Swal.showLoading();
        }
    });


    TableLoader.loadTable({
        url: "salesman/getSalesmanWithTransaction",
        filters: { date: selectedDashboardDate }, // always send a real date, never undefined
        tableId: "#dashboardDataTable",
        columns: SalesmanColumns,
        scrollY: "200px",
        pageLength: 5,
        searchInput: "#customSearch",
        isCurrent: () => loadVersion === dashboardLoadVersion,

        filterRows: (rows) => rows,

        onSuccess: (data) => {
            swal.close();
            if (loadVersion !== dashboardLoadVersion) return;

            console.log("Dashboard data (salesman with filtered transactions):", data);

            if (!Array.isArray(data) || data.length === 0) {
                console.log("no data");
                Swal.fire("No data available on selected date");
                array = [];
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

    google.maps.event.clearListeners(map, "click");

    map.addListener("click", () => {
        if (latestInfoWindow) latestInfoWindow.close();
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
            if (infoWindowWrapper) infoWindowWrapper.addClass("Info-Window");
        }

        if (latestInfoWindow) latestInfoWindow.close();

        const tableComponent = $("#itemDetailsTable").children().clone();
        tableComponent.find("table").attr("id", "infoWindowTableContent");
        $("#infoWindowTableContainer").empty().append(tableComponent);
    });

    google.maps.event.addListener(infoWindow, "close", () => {
        if (latestInfoWindow) latestInfoWindow.open(map, latestMarker);
    });

    const salesmanTransactionCount = {};

    // Outer loop: each item is a SALESMAN
    array.forEach((salesman) => {
        const transactions = salesman.salesman_transaction ?? [];

        // Inner loop: each salesman can have multiple transactions/stores
        transactions.forEach((transaction, transactionIndex) => {
            const store = transaction.transaction_store;

            if (!salesman || !store) {
                console.log("Missing salesman or store:", salesman, transaction);
                return;
            }

            salesmanTransactionCount[salesman.id] =
                (salesmanTransactionCount[salesman.id] || 0) + 1;

            const markerNumber = salesmanTransactionCount[salesman.id];

            const isLatestTransaction =
                String(transaction.transaction_id) === String(latest?.transaction_id);

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
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="60" viewBox="0 0 50 60">
                                <path
                                    d="M25 58 C25 58 5 36 5 23 C5 10 14 2 25 2 C36 2 45 10 45 23 C45 36 25 58 25 58Z"
                                    fill="#ef4444" stroke="white" stroke-width="3" />
                                <text x="25" y="29" text-anchor="middle" font-family="Arial"
                                    font-size="16" font-weight="bold" fill="white">
                                    ${markerNumber}
                                </text>
                            </svg>
                        `),
                    scaledSize: new google.maps.Size(40, 48),
                    anchor: new google.maps.Point(20, 48),
                },
            });

            if (!markersById[salesman.id]) {
                markersById[salesman.id] = [];
            }

            markersById[String(transaction.transaction_id)] = {
                marker,
                salesman,
                store,
                transaction,
                storeIndex: 0,
            };

            marker.addListener("click", () => {
                if (!isLatestTransaction && latestMarker) {
                    latestMarker.setAnimation(null);
                }

                currentMarker = marker;
                currentInfoSalesman = salesman;
                rowData = salesman; // keep the salesman as rowData (matches getSidePanelContent's expected shape)

                storeIndex = transactionIndex;
                window.storeIndex = storeIndex;

                openInfoWindowFor(salesman, marker, transactionIndex); // pass salesman, not transaction — see note below

                showRowDetails(salesman);
                getSidePanelContent(salesman);
                getSku(transaction, "#sfaQueuingModalTable"); // getSku still needs the specific transaction
            });

            if (isLatestTransaction) {
                const transactionSales = (transaction.transaction_details ?? []).reduce(
                    (total, detail) =>
                        total + Number(detail.quantity ?? 0) * Number(detail.current_price ?? 0),
                    0
                );

                latestMarker = marker;

                latestInfoWindow = new google.maps.InfoWindow({
                    content: `
                        <div id="latestInfo_Container" class="latest-transaction-popup min-w-[193px] rounded-3xl">
                            <div class="salemanInfoCard px-4 py-3 relative w-full">
                                <div class="flex gap-1">
                                    <span class="items-center justify-center flex">
                                        <i class="fa-solid fa-location-dot" style="font-size: 20px;"></i>
                                    </span>
                                    <div class="flex flex-col items-center">
                                        <span class="font-bold w-full text-[16px]">Latest Transaction</span>
                                        <span class="w-full text-xs opacity-90">${transaction.transaction_date ?? "N/A"}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="px-4 py-3 pt-1">
                                <div class="font-medium text-[16px]">${store.store_name ?? "N/A"}</div>
                                <div class="text-[9px] text-[#b8babc] mt-2">Salesman Assigned:</div>
                                <div class="text-[11px] font-medium whitespace-nowrap">${salesman.salesman_name ?? "N/A"}</div>
                                <div class="text-[9px] text-[#b8babc] mt-2">Transaction Sales:</div>
                                <div class="text-[11px] font-medium">
                                    ₱${transactionSales.toLocaleString("en-PH", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                </div>
                            </div>
                        </div>
                    `,
                    disableAutoPan: false,
                });

                google.maps.event.addListener(latestInfoWindow, "domready", () => {
                    $("#latestInfo_Container")
                        .off("click.latest")
                        .on("click.latest", () => {
                            map.panTo(marker.getPosition());
                            map.setZoom(17);
                            latestInfoWindow.close();

                            currentMarker = marker;
                            currentInfoSalesman = salesman;

                            storeIndex = transactionIndex;
                            window.storeIndex = storeIndex;

                            showRowDetails(salesman);
                            getSidePanelContent(salesman);
                            getSku(transaction, "#sfaQueuingModalTable");

                            infoWindow.setContent(InfoWindowContent(salesman, storeIndex));

                            marker.setAnimation(google.maps.Animation.BOUNCE);
                            infoWindow.open(map, marker);
                        });
                });
                
                latestInfoWindow.open(map, marker);
            }
        });
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
        url: "dashboard/getLatestTransaction",
        data: date ? { date } : undefined,

        // onSuccess: (data) => {
        //     if (loadVersion !== dashboardLoadVersion) return;

        //     console.log("Latest transaction response:", data);

        //     latest = Array.isArray(data)
        //         ? data[0]
        //         : data?.data ?? data;

        //     console.log("Latest normalized:", latest);

        //     displayInfoWindow();
        // },

        onSuccess: (data) => {
            if (loadVersion !== dashboardLoadVersion) return;

            console.log("RAW latest transaction response:", data); // <-- add this, log the untouched payload

            latest = Array.isArray(data) ? data[0] : data?.data ?? data;

            console.log("latest normalized:", latest);
            console.log("latest keys:", latest ? Object.keys(latest) : "null/undefined");

            displayInfoWindow();
        },

    });
}

// function InfoWindowContent(salesman) {
function InfoWindowContent(salesman, targetIndex = 0) {
    const transaction = salesman.salesman_transaction?.[targetIndex] ?? {};

    console.log("salesman infoWindow", salesman);
    console.log("transaction infoWindow", transaction);
    console.log("transaction storeIndex", storeIndex);

    let TotalSalesOnStore = 0;

    const selectedStore = transaction.transaction_store;

    transaction.transaction_details?.forEach(detail => {
        const quantity = Number(detail.quantity ?? 0);
        const price = Number(detail.current_price ?? 0);
        TotalSalesOnStore += quantity * price;
    });

    const transactionDate = transaction?.transaction_date;

    const formattedDate = transactionDate
        ? DateFormatter(transactionDate)
        : "N/A";

    return `
        <div id="Info_Tab" class="w-[360px] max-w-full max-h-[500px] flex flex-col rounded-lg bg-base-100 Info_Tab">

                    <div class="relative w-full h-[160px]">
                        <img
                            id="storeImg"
                            src="${transaction.customer_image ?? "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"}"
                            alt="Store"
                            class="w-full h-full object-cover brightness-50" />

                        <span id="Store_GP" class="absolute top-2 left-2 salemanInfoCard p-2 rounded-2xl font-semibold text-xs">
                            ${transaction.transaction_code ?? "32_GP"}
                        </span>

                        <span id="isVisited" class="absolute top-2 right-2 badge text-green-600 badge-outline bg-green-200 text-xs">
                            ⏱ ${transaction.status ?? "Visited Customer"}
                        </span>

                        <button type="button" class="carousel-prev absolute left-1 top-1/2 -translate-y-1/2 btn btn-circle btn-xs">❮</button>
                        <button type="button" class="carousel-next absolute right-1 top-1/2 -translate-y-1/2 btn btn-circle btn-xs">❯</button>

                        <div class="absolute bottom-0 left-0 right-0 p-2 text-white">
                            <div id="addsressContainer" class="flex items-center gap-1">

                                <div class="relative flex items-center justify-center shrink-0">
                                    <i class="fa-solid fa-location-pin text-2xl"></i>
                                    <span class="absolute top-[3.5px] left-1/2 -translate-x-1/2 flex items-center justify-center text-black font-bold text-[11px] leading-none">
                                        ${selectedStore?.store_id ?? transaction.store_id}
                                    </span>
                                </div>

                                <div class="flex flex-col w-fit">
                                    <span id="InfoStoreName" class="font-semibold text-sm whitespace-nowrap leading-tight">
                                        ${selectedStore?.store_name ?? "N/A"}
                                    </span>
                                    <span class="font-medium text-[9px] text-white leading-tight">
                                        ${transaction.store_address ?? "Cubacub"}
                                    </span>
                                </div>

                                <div class="flex items-center justify-end w-full gap-1 p-2 pb-0">
                                    <button type="button" id="infoPrev" class="btn py-1.5 h-fit side_Prev font-medium w-fit p-1.5 salemanInfoCard text-[8px] rounded-full border-none">❮ Prev Store</button>
                                    <button type="button" id="infoNext" class="btn py-1.5 h-fit side_Next font-medium w-fit p-1.5 salemanInfoCard text-[8px] rounded-full border-none">Next Store ❯</button>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div class="tabs tabs-border items-cemter justify-center px-0 pb-2">

                        <input type="radio" name="my_tabs_2" class="tab text-[11px] Info_Window_Tab" aria-label="Transaction Details" checked="checked" data-tab-content="tabContent1" />

                        <div class="tab-content flex flex-col gap-3 bg-base-100 py-3 px-5 text-xs" style="display:block">

                            <div class="">
                                <span class="text-gray-400 block">Salesman Assigned:</span>
                                <span class="font-semibold">
                                    ${salesman.salesman_name ?? ""}
                                    🔋 ${transaction.battery ?? "-"}%
                                </span>
                            </div>

                            <div class="pt-3">
                                <span class="text-gray-400 block">Transaction ID:</span>
                                <span class="font-mono px-1 rounded font-normal text-[11px]">${transaction.transaction_id ?? "N/A"}</span>
                            </div>

                            <div class="flex justify-between pt-3">
                                <div class="w-full">
                                    <span class="text-gray-400 block">Transaction Date:</span>
                                    <span class="font-normal text-[11px]">${formattedDate}</span>
                                </div>
                                <div class="flex flex-col justify-start w-full">
                                    <span class="text-gray-400 block">Sent Date:</span>
                                    <span class="font-normal text-[11px]">${formattedDate}</span>
                                </div>
                            </div>

                            <div class="flex justify-between pt-3">
                                <div class="w-full">
                                    <span class="text-gray-400 block">Time Spent:</span>
                                    <span class="font-normal text-[11px]">${transaction.time_spent ?? "N/A"}</span>
                                </div>
                                <div class="flex flex-col justify-start w-full">
                                    <span class="text-gray-400 block">Distance Travel:</span>
                                    <span class="font-normal text-[11px]">${transaction.distance_travel ?? "6.95 km in 5 hrs 11 mins"}</span>
                                </div>
                            </div>

                            <div class="flex justify-between pt-3">
                                <div class="w-full">
                                    <span class="text-gray-400 block">Remakrs:</span>
                                    <span class="font-normal text-[11px]">${transaction.remarks ?? "---"}</span>
                                </div>
                                <div class="flex flex-col justify-start w-full">
                                    <span class="text-gray-400 block">Transaction Sales:</span>
                                    <span id="totalStoreDetails" class="font-normal text-[11px]">${TotalSalesOnStore.toFixed(2)}</span>
                                </div>
                            </div>

                        </div>

                        <input type="radio" name="my_tabs_2" class="tab text-[11px] Info_Window_Tab" aria-label="Item Details" data-tab-content="tabContent2" />

                        <div class="tab-content w-full flex flex-col border-base-300 bg-base-100 text-xs" data-tab="tabContent2" style="display:none">
                            <div id="InfoTableContainer" data-table="infoWindowTableContent" class="flex w-full justify-between salemanInfoCard Transaction_Container border items-center h-[25px] py-5 px-2 rounded-t-2xl toggle-item-table cursor-pointer">
                                <div class="flex gap-1 items-center">
                                    <img class="h-[25px] w-[25px]" src="https://cdo.sfa-plus.com/SFA/v2/img/PesoSign.svg"/>
                                    <span class="text-[13px]">Transaction Items</span>
                                </div>
                                <div class="flex gap-1 items-center">
                                    <span id="TotalSku"></span>
                                    <span class="Sku_Num"></span>
                                    <i class="fa-solid fa-chevron-down text-[10px] transition-transform toggle-icon rotate-180"></i>
                                </div>
                            </div>
                            <div class="flex p-2 ViewTable_Container">
                                <i class="text-[#86888a] mdi mdi-arrow-up-left"></i>
                                <span class="text-[#86888a] text-[10px] pb-[20px]">Click to view Items</span>
                            </div>
                            <div id="infoWindowTableContainer" class="w-full text-[9px] overflow-hidden" style="display:none"></div>
                        </div>

                        <input type="radio" name="my_tabs_2" class="tab text-[11px] Info_Window_Tab" aria-label="Supporting Docs" data-tab-content="tabContent3" />

                        <div class="tab-content px-5 pb-2 border-base-300 bg-base-100 px-0 pt-3 text-xs" style="display:none">
                            <div class="flex w-full">
                                <div class="flex w-full"><div class="w-[125px] h-[125px] rounded-full border"></div></div>
                                <div class="flex flex-col w-full justify-center items-center px-2 gap-2">
                                    <span class="flex text-[11px] text-[##505664]">Reference Number:</span>
                                    <span class="flex text-[11px] text-black">FPM_4202609041642023</span>
                                    <span class="flex text-[11px] text-[##505664]">Remarks:</span>
                                    <span class="flex text-[11px] text-[##505664]">---</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
    `;
}

function openInfoWindowFor(salesman, marker, targetIndex = 0) {

    currentInfoSalesman = salesman;
    rowData = salesman;
    storeIndex = targetIndex;

    updateStoreNavButtons();

    console.log(
        "Opening InfoWindow for:",
        salesman.salesman_name,
        "Store index:",
        storeIndex
    );

    currentMarker = marker;

    if (latestInfoWindow) {
        latestInfoWindow.close();
    }

    marker.setAnimation(google.maps.Animation.BOUNCE);
    bouncingMarker = marker;

    setTimeout(() => {
        marker.setAnimation(null);
        if (bouncingMarker === marker) {
            bouncingMarker = null;
        }
    }, 2400);

    map.panTo(marker.getPosition());
    map.setZoom(17);

    infoWindow.setContent(InfoWindowContent(salesman, targetIndex));
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
            DisplayCarousel();
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
        url: "salesman/getSalesmanWithTransaction",
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

        const activeSalesman = currentInfoSalesman;
        if (!activeSalesman) return;

        const salesmanRecord = array.find(s => s.id === activeSalesman.id);
        const transactions = salesmanRecord?.salesman_transaction ?? [];
        const lastIndex = transactions.length - 1;

        if (storeIndex < lastIndex) {
            storeIndex++;

            const newTransaction = transactions[storeIndex];
            const newStore = newTransaction.transaction_store;

            const entry = markersById[String(newTransaction.transaction_id)];

            infoWindow.setContent(InfoWindowContent(salesmanRecord, storeIndex));

            if (entry) {
                currentMarker = entry.marker;
                map.panTo(entry.marker.getPosition());
                map.setZoom(17);
                infoWindow.open(map, entry.marker);
            }

            $("#InfoStoreName").text(newStore?.store_name ?? "No Store");
            $("#storeName").text(newStore?.store_name ?? "No Store");

            updateStoreNavButtons();
            getSku(newTransaction, "#sfaQueuingModalTable");
        }
    });

$(document)
    .off("click.storeNav", ".side_Prev")
    .on("click.storeNav", ".side_Prev", function (e) {
        e.stopPropagation();

        if (storeIndex > 0) {
            storeIndex--;

            const activeSalesman = currentInfoSalesman;
            if (!activeSalesman) return;

            const salesmanRecord = array.find(s => s.id === activeSalesman.id);
            const transactions = salesmanRecord?.salesman_transaction ?? [];

            const newTransaction = transactions[storeIndex];
            const newStore = newTransaction.transaction_store;

            const entry = markersById[String(newTransaction.transaction_id)];

            infoWindow.setContent(InfoWindowContent(salesmanRecord, storeIndex));

            if (entry) {
                currentMarker = entry.marker;
                map.panTo(entry.marker.getPosition());
                map.setZoom(17);
                infoWindow.open(map, entry.marker);
            }

            $("#InfoStoreName").text(newStore?.store_name ?? "No Store");
            $("#storeName").text(newStore?.store_name ?? "No Store");

            updateStoreNavButtons();
            getSku(newTransaction, "#sfaQueuingModalTable");
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
    const activeSalesman = currentInfoSalesman;
    if (!activeSalesman) return;

    const salesmanRecord = array.find(s => s.id === activeSalesman.id);
    const transactions = salesmanRecord?.salesman_transaction ?? [];
    const lastIndex = transactions.length - 1;

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
        const activeSalesman = currentInfoSalesman ?? rowData;
        const transactions = activeSalesman?.salesman_transaction ?? [];
        const transaction = transactions[storeIndex];

        getSku(transaction, "#infoWindowTableContent");
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
    
    console.log("sdd", transaction);
    if (!transaction) return;

    rowData = transaction;
    //const countSku = rowData.salesman_transaction.length
    const salesman = transaction;

    // Callers (marker click / latest-transaction popup) set storeIndex to the
    // transaction that was actually opened, so show that one and fall back to
    // the first transaction only when the index is missing/out of range.
    const transactions = transaction.salesman_transaction ?? [];
    const selectedTransaction = transactions[storeIndex] ?? transactions[0];
    const store = selectedTransaction?.transaction_store; // keep as object, not string

    console.log("selected trans", selectedTransaction, "storeIndex", storeIndex);

    // Transaction date
    const transactionDate = selectedTransaction?.transaction_date;

    const formattedDate = transactionDate
        ? moment(transactionDate, "YYYY-MM-DD HH:mm:ss").format("MMM DD, YYYY")
        : "N/A";

    // Transaction time
    const transTimeMoment = transactionDate
        ? moment(transactionDate, "YYYY-MM-DD HH:mm:ss")
        : null;

    const TransactionTime = transTimeMoment
        ? transTimeMoment.format("h:mm:ss A")
        : "----";

    const timeIn = transTimeMoment
        ? transTimeMoment.format("h:mm:ss A")
        : "----";

    // Attendance
    if (transTimeMoment) {
        const cutoff = moment(transTimeMoment).set({ hour: 8, minute: 0, second: 0 });

        $("#Attendance").text(
            transTimeMoment.isBefore(cutoff) ? "Early" : "Late"
        );
    } else {
        $("#Attendance").text("No Transaction");
    }

    // Salesman
    $("#Salesman_Name").text(salesman?.salesman_name ?? "No Salesman");

    // Visited Store
    $("#VisitedStore").text(store?.store_name ? 1 : 0);

    // Call time
    $("#call_time").text(salesman.call_time ?? "NULL");

    // Store
    $("#storeName").text(store?.store_name ?? "No Store");

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
    // if (!rowData?.id || !selectedDashboardDate) return;
    console.log("hhh",globalSkuCount);
    if (!rowData?.id || !selectedDashboardDate) return;
    const requestVersion = ++summaryRequestVersion;

    Api.get({
        // url: "dashboard/getSalesmanInfo",
        url: "salesman/getSalesmanWithTransaction",
        data: {
            salesman_id: rowData.id,
            date: selectedDashboardDate,
            period: overviewPeriod,
        },
        onSuccess: (summary) => {

            console.log("summary",summary);
            if (requestVersion !== summaryRequestVersion) return;

            console.log("few", globalTotalSku);
            console.log("fewqw", summary);

            const sales = formatCurrency(globalTotalSku);
            const skuCount = Number(globalSkuCount ?? 0);

            if (overviewPeriod === "mtd") {
                let MonthtotalSales = 0;
                let MonthSkuCount = 0;

                const filterMonth = moment(
                    selectedDashboardDate,
                    "YYYY-MM-DD"
                );

                summary?.forEach(salesman => {

                    if (String(salesman.id) !== String(rowData.id)) {
                        return;
                    }

                    const transactions = salesman.salesman_transaction ?? [];

                    transactions.forEach(transaction => {

                        const transactionMonth = moment(
                            transaction.transaction_date,
                            "YYYY-MM-DD HH:mm:ss"
                        );

                        if (!transactionMonth.isSame(filterMonth, "month")) {
                            return;
                        }

                        const details = transaction.transaction_details ?? [];

                        MonthSkuCount += details.length;

                        details.forEach(detail => {

                            const quantity = Number(detail.quantity ?? 0);
                            const price = Number(detail.current_price ?? 0);

                            MonthtotalSales += quantity * price;
                        });
                    });
                });

                const formattedTotal = formatCurrency(MonthtotalSales);

                $("#MtdSalesmanTotal_Sales").text(formattedTotal);
                $("#MtdSku").text(MonthSkuCount);
                $("#MtdValue").text(formattedTotal);

                return;
            }

            console.log("llpa",skuCount);

            $("#SalesmanTotal_Sales").text(sales);
            $("#SkuCount").text(`(${skuCount} SKU)`);
            $("#SideSku").text(skuCount);
            $("#CurrentDayValue").text(sales);
            $("#sku_sales").text(sales ?? 0);

            //$('#salesCollapse')
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
