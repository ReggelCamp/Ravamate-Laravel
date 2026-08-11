console.log("DSR TABLE JS LOADED");

import TableLoader from "../../helper/TableLoader.js";
import ComponentHelper from "../../helper/ComponentHelper.js";


// ==============================
// DSR TABLE COLUMNS
// ==============================

const DsrColumns = [
    "#",
    "DSI No.",
    "Actual Range",
    "Actual/Booked Sales",
    "Customer Name / TimeSpent(Sec)",
    "Sales Target",
    "BTS",
    "Core",
    "Dev.",
    "Opt.",
    "Assortment",
    "Payment Type",
    "Remarks",
];


// ==============================
// DSR SAMPLE DATA
// ==============================

const DsrSampleData = [
    [
        1,
        "DSI-0001",
        "08:00 AM - 09:00 AM",
        "₱12,500.00",
        "ABC Trading / 45 sec",
        "₱15,000.00",
        "Yes",
        "Yes",
        "No",
        "Yes",
        "Complete",
        "Cash",
        "Good customer engagement",
    ],
    [
        2,
        "DSI-0002",
        "09:00 AM - 10:00 AM",
        "₱8,750.00",
        "XYZ Store / 38 sec",
        "₱10,000.00",
        "Yes",
        "Yes",
        "Yes",
        "No",
        "Partial",
        "Credit",
        "Needs additional products",
    ],
    [
        3,
        "DSI-0003",
        "10:00 AM - 11:00 AM",
        "₱21,300.00",
        "Juan's Grocery / 52 sec",
        "₱20,000.00",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
        "Complete",
        "Cash",
        "Above sales target",
    ],
    [
        4,
        "DSI-0004",
        "11:00 AM - 12:00 PM",
        "₱6,450.00",
        "Metro Retail / 31 sec",
        "₱12,000.00",
        "No",
        "Yes",
        "No",
        "No",
        "Partial",
        "Credit",
        "Low customer activity",
    ],
    [
        5,
        "DSI-0005",
        "01:00 PM - 02:00 PM",
        "₱15,800.00",
        "Corner Mart / 47 sec",
        "₱15,000.00",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
        "Complete",
        "Cash",
        "Target achieved",
    ],
    [
        6,
        "DSI-0006",
        "02:00 PM - 03:00 PM",
        "₱9,200.00",
        "Family Store / 41 sec",
        "₱11,000.00",
        "Yes",
        "No",
        "Yes",
        "No",
        "Partial",
        "Cash",
        "Some items unavailable",
    ],
];


// ==============================
// SALESMAN DROPDOWN
// ==============================

$(document).on("click", "#dropdown_Item", function (e) {
    e.preventDefault();

    const salesman = $(this).data("value");

    $("#DsrSalesmanName").text(salesman || "Select Salesman");

    $(this).blur();
    $('.dropdownTrigger [role="button"]').blur();

    console.log("man", salesman);
});


// ==============================
// GENERATE DSR REPORT
// ==============================

$(document).on("click", "#generateDsrReport", function () {

    console.log("DSR REPORT GENERATED");

    let html = `
        <table class="w-full border-collapse text-[11px]">

            <thead>
                <tr>
                    <th rowspan="2">#</th>
                    <th rowspan="2">DSI No.</th>
                    <th rowspan="2">Actual Range</th>
                    <th rowspan="2">Actual/Booked Sales</th>
                    <th rowspan="2">Customer Name / TimeSpent(Sec)</th>
                    <th rowspan="2">Sales Target</th>
                    <th rowspan="2">BTS</th>

                    <th colspan="3">Placement</th>

                    <th rowspan="2">Assortment</th>
                    <th rowspan="2">Payment Type</th>
                    <th rowspan="2">Remarks</th>
                </tr>

                <tr>
                    <th>Core</th>
                    <th>Dev.</th>
                    <th>Opt.</th>
                </tr>
            </thead>

            <tbody>
    `;


    // ==============================
    // ADD SAMPLE DATA
    // ==============================

    DsrSampleData.forEach(row => {

        html += `
            <tr>
                ${row.map(cell => `<td>${cell}</td>`).join("")}
            </tr>
        `;

    });


    html += `
            </tbody>
        </table>
    `;


    // ==============================
    // APPEND TO CONTAINER
    // ==============================

    $("#DsrTableContainer").html(html);

});