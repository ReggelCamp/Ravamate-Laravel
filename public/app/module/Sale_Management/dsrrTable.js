import TableLoader from "../../helper/TableLoader.js";
import ComponentHelper from "../../helper/ComponentHelper.js";
import DatePicker from "../../helper/datePicker.js";
import "../../helper/ExportTable.js";

let selectedSalesman = sessionStorage.getItem("selectedSalesman_DSRR") || "";
let salesmenData = []; // Store loaded salesmen data
let DropdownLength = 0;

const DsrrColumns = [
    "NO.",
    "CS#",
    "CUSTOMER",
    "ADDRESS",
    "AMOUNT",
    "ADJUSTMENT",
    "CMA",
    "AMOUNT",
    "TOTAL",
];

const sampleData = [
    [
        "CS-10001",
        "Juan Dela Cruz",
        "Cebu City",
        "₱15,000.00",
        "CMA-001",
        "₱1,500.00",
        "₱13,500.00",
    ],
    [
        "CS-10002",
        "Maria Santos",
        "Mandaue City",
        "₱22,500.00",
        "CMA-002",
        "₱2,000.00",
        "₱20,500.00",
    ],
    [
        "CS-10003",
        "Pedro Garcia",
        "Lapu-Lapu City",
        "₱18,750.00",
        "CMA-003",
        "₱750.00",
        "₱18,000.00",
    ],
    [
        "CS-10004",
        "Ana Reyes",
        "Talisay City",
        "₱12,300.00",
        "CMA-004",
        "₱1,300.00",
        "₱11,000.00",
    ],
    [
        "CS-10005",
        "Carlos Mendoza",
        "Consolacion",
        "₱30,000.00",
        "CMA-005",
        "₱3,000.00",
        "₱27,000.00",
    ],
    [
        "CS-10006",
        "Sofia Ramirez",
        "Cebu City",
        "₱9,850.00",
        "CMA-006",
        "₱850.00",
        "₱9,000.00",
    ],
    [
        "CS-10007",
        "Michael Tan",
        "Mandaue City",
        "₱27,400.00",
        "CMA-007",
        "₱2,400.00",
        "₱25,000.00",
    ],
    [
        "CS-10008",
        "Angela Cruz",
        "Lapu-Lapu City",
        "₱16,800.00",
        "CMA-008",
        "₱1,800.00",
        "₱15,000.00",
    ],
    [
        "CS-10009",
        "Robert Lim",
        "Talisay City",
        "₱35,000.00",
        "CMA-009",
        "₱5,000.00",
        "₱30,000.00",
    ],
    [

        "CS-10010",
        "Elena Fernandez",
        "Cebu City",
        "₱14,250.00",
        "CMA-010",
        "₱1,250.00",
        "₱13,000.00",
    ],
    [
        "CS-10001",
        "Juan Dela Cruz",
        "Cebu City",
        "₱15,000.00",
        "CMA-001",
        "₱1,500.00",
        "₱13,500.00",
    ],
    [
        "CS-10002",
        "Maria Santos",
        "Mandaue City",
        "₱22,500.00",
        "CMA-002",
        "₱2,000.00",
        "₱20,500.00",
    ],
    [
        "CS-10003",
        "Pedro Garcia",
        "Lapu-Lapu City",
        "₱18,750.00",
        "CMA-003",
        "₱750.00",
        "₱18,000.00",
    ],
    [
        "CS-10004",
        "Ana Reyes",
        "Talisay City",
        "₱12,300.00",
        "CMA-004",
        "₱1,300.00",
        "₱11,000.00",
    ],
    [
        "CS-10005",
        "Carlos Mendoza",
        "Consolacion",
        "₱30,000.00",
        "CMA-005",
        "₱3,000.00",
        "₱27,000.00",
    ],
    [
        "CS-10006",
        "Sofia Ramirez",
        "Cebu City",
        "₱9,850.00",
        "CMA-006",
        "₱850.00",
        "₱9,000.00",
    ],
    [
        "CS-10007",
        "Michael Tan",
        "Mandaue City",
        "₱27,400.00",
        "CMA-007",
        "₱2,400.00",
        "₱25,000.00",
    ],
    [
        "CS-10008",
        "Angela Cruz",
        "Lapu-Lapu City",
        "₱16,800.00",
        "CMA-008",
        "₱1,800.00",
        "₱15,000.00",
    ],
    [
        "CS-10009",
        "Robert Lim",
        "Talisay City",
        "₱35,000.00",
        "CMA-009",
        "₱5,000.00",
        "₱30,000.00",
    ],
    [

        "CS-10010",
        "Elena Fernandez",
        "Cebu City",
        "₱14,250.00",
        "CMA-010",
        "₱1,250.00",
        "₱13,000.00",
    ],
    [
        "CS-10001",
        "Juan Dela Cruz",
        "Cebu City",
        "₱15,000.00",
        "CMA-001",
        "₱1,500.00",
        "₱13,500.00",
    ],
    [
        "CS-10002",
        "Maria Santos",
        "Mandaue City",
        "₱22,500.00",
        "CMA-002",
        "₱2,000.00",
        "₱20,500.00",
    ],
    [
        "CS-10003",
        "Pedro Garcia",
        "Lapu-Lapu City",
        "₱18,750.00",
        "CMA-003",
        "₱750.00",
        "₱18,000.00",
    ],
    [
        "CS-10004",
        "Ana Reyes",
        "Talisay City",
        "₱12,300.00",
        "CMA-004",
        "₱1,300.00",
        "₱11,000.00",
    ],
    [
        "CS-10005",
        "Carlos Mendoza",
        "Consolacion",
        "₱30,000.00",
        "CMA-005",
        "₱3,000.00",
        "₱27,000.00",
    ],
    [
        "CS-10006",
        "Sofia Ramirez",
        "Cebu City",
        "₱9,850.00",
        "CMA-006",
        "₱850.00",
        "₱9,000.00",
    ],
    [
        "CS-10007",
        "Michael Tan",
        "Mandaue City",
        "₱27,400.00",
        "CMA-007",
        "₱2,400.00",
        "₱25,000.00",
    ],
    [
        "CS-10008",
        "Angela Cruz",
        "Lapu-Lapu City",
        "₱16,800.00",
        "CMA-008",
        "₱1,800.00",
        "₱15,000.00",
    ],
    [
        "CS-10009",
        "Robert Lim",
        "Talisay City",
        "₱35,000.00",
        "CMA-009",
        "₱5,000.00",
        "₱30,000.00",
    ],
    [

        "CS-10010",
        "Elena Fernandez",
        "Cebu City",
        "₱14,250.00",
        "CMA-010",
        "₱1,250.00",
        "₱13,000.00",
    ],
    [
        "CS-10001",
        "Juan Dela Cruz",
        "Cebu City",
        "₱15,000.00",
        "CMA-001",
        "₱1,500.00",
        "₱13,500.00",
    ],
    [
        "CS-10002",
        "Maria Santos",
        "Mandaue City",
        "₱22,500.00",
        "CMA-002",
        "₱2,000.00",
        "₱20,500.00",
    ],
    [
        "CS-10003",
        "Pedro Garcia",
        "Lapu-Lapu City",
        "₱18,750.00",
        "CMA-003",
        "₱750.00",
        "₱18,000.00",
    ],
    [
        "CS-10004",
        "Ana Reyes",
        "Talisay City",
        "₱12,300.00",
        "CMA-004",
        "₱1,300.00",
        "₱11,000.00",
    ],
    [
        "CS-10005",
        "Carlos Mendoza",
        "Consolacion",
        "₱30,000.00",
        "CMA-005",
        "₱3,000.00",
        "₱27,000.00",
    ],
    [
        "CS-10006",
        "Sofia Ramirez",
        "Cebu City",
        "₱9,850.00",
        "CMA-006",
        "₱850.00",
        "₱9,000.00",
    ],
    [
        "CS-10007",
        "Michael Tan",
        "Mandaue City",
        "₱27,400.00",
        "CMA-007",
        "₱2,400.00",
        "₱25,000.00",
    ],
    [
        "CS-10008",
        "Angela Cruz",
        "Lapu-Lapu City",
        "₱16,800.00",
        "CMA-008",
        "₱1,800.00",
        "₱15,000.00",
    ],
    [
        "CS-10009",
        "Robert Lim",
        "Talisay City",
        "₱35,000.00",
        "CMA-009",
        "₱5,000.00",
        "₱30,000.00",
    ],
    [

        "CS-10010",
        "Elena Fernandez",
        "Cebu City",
        "₱14,250.00",
        "CMA-010",
        "₱1,250.00",
        "₱13,000.00",
    ],
    [
        "CS-10001",
        "Juan Dela Cruz",
        "Cebu City",
        "₱15,000.00",
        "CMA-001",
        "₱1,500.00",
        "₱13,500.00",
    ],
    [
        "CS-10002",
        "Maria Santos",
        "Mandaue City",
        "₱22,500.00",
        "CMA-002",
        "₱2,000.00",
        "₱20,500.00",
    ],
    [
        "CS-10003",
        "Pedro Garcia",
        "Lapu-Lapu City",
        "₱18,750.00",
        "CMA-003",
        "₱750.00",
        "₱18,000.00",
    ],
    [
        "CS-10004",
        "Ana Reyes",
        "Talisay City",
        "₱12,300.00",
        "CMA-004",
        "₱1,300.00",
        "₱11,000.00",
    ],
    [
        "CS-10005",
        "Carlos Mendoza",
        "Consolacion",
        "₱30,000.00",
        "CMA-005",
        "₱3,000.00",
        "₱27,000.00",
    ],
    [
        "CS-10006",
        "Sofia Ramirez",
        "Cebu City",
        "₱9,850.00",
        "CMA-006",
        "₱850.00",
        "₱9,000.00",
    ],
    [
        "CS-10007",
        "Michael Tan",
        "Mandaue City",
        "₱27,400.00",
        "CMA-007",
        "₱2,400.00",
        "₱25,000.00",
    ],
    [
        "CS-10008",
        "Angela Cruz",
        "Lapu-Lapu City",
        "₱16,800.00",
        "CMA-008",
        "₱1,800.00",
        "₱15,000.00",
    ],
    [
        "CS-10009",
        "Robert Lim",
        "Talisay City",
        "₱35,000.00",
        "CMA-009",
        "₱5,000.00",
        "₱30,000.00",
    ],
    [

        "CS-10010",
        "Elena Fernandez",
        "Cebu City",
        "₱14,250.00",
        "CMA-010",
        "₱1,250.00",
        "₱13,000.00",
    ],
];

function loadSalesmenByDate(date) {
ComponentHelper.dropdown().loadByApi({
    url: "/getSalesmanNames",
    data: { date },
    dropdownId: "dsrrItems",
    noTextFound: "No Salesman Found",
    displayField: "salesman_name",
    dataField: "salesman_id",

    onSuccess: (data) => {
            salesmenData = data; // Store the data
            
            // Get the length of the dropdown items
            DropdownLength = data.length;
            console.log(`Dropdown has ${DropdownLength} items`);
            console.log(`Loaded ${DropdownLength} salesmen for ${date}`);
            
            // You can also count the rendered DOM elements
            // const renderedItems = $('#dsrItems li').length;
            // console.log(`Rendered items in DOM: ${renderedItems}`);

            if(DropdownLength === 0){
                $("#dsrrItems").append (`
                    <li class = "items-center">
                        Select Date First        
                    </li>   
                `);
            }
        },
        onError: (error) => 
            console.error("Error loading salesmen:", error),
});
}

$(document).on("click", "#dsrrItems #dropdown_Item", function (e) {
    e.preventDefault();
    
    const salesman = $(this).data("value") || "";
    console.log("ge",salesman);

    $("#dsrrSalesmanName").text(salesman || "Select Salesman");
    selectedSalesman = salesman;
    sessionStorage.setItem("selectedSalesman_DSRR", selectedSalesman);
    //loadTable(salesman);

    $(this).blur();
    $('.dropdownTrigger [role="button"]').blur();
    console.log("man",salesman);

});

$(document).on("click", "#generateDsrrReport", function () {
    console.log("clicked");

    let html = `
    <table id="DsrrTable" class="w-full border-collapse text-[11px]">

        <thead>
            <tr class="print-report-header">
                <th colspan="4" class="report-print-title report-left">
                    ${selectedSalesman || "All Salesmen"}
                </th>
                <th colspan="5" class="report-print-title report-center">
                    DAILY SALES RETURN REPORT
                </th>
            </tr>

            <tr>
                <th rowspan="2" class="border border-black px-3 py-2 text-center font-semibold">NO.</th>
                <th rowspan="2" class="border border-black px-3 py-2 text-center font-semibold">CS#</th>
                <th rowspan="3" class="border border-black px-3 py-2 text-center font-semibold">CUSTOMER</th>
                <th rowspan="2" class="border border-black px-3 py-2 text-center font-semibold">ADDRESS</th>
                <th rowspan="2" class="border border-black px-3 py-2 text-center font-semibold">AMOUNT</th>

                <th colspan="3" class="border border-black px-3 py-2 text-center font-semibold">
                    ADJUSTMENT
                </th>
            </tr>

            <tr>
                <th class="border border-black px-3 py-2 text-center font-semibold">CMA</th>
                <th class="border border-black px-3 py-2 text-center font-semibold">AMOUNT</th>
                <th class="border border-black px-3 py-2 text-center font-semibold">TOTAL</th>
            </tr>
        </thead>

        <tbody>
`;

// Add data rows
if (salesmenData && salesmenData.length > 0) {
    salesmenData.forEach((salesman, index) => {
        html += `
            <tr>
                <td class="border border-black px-3 py-2 text-center">${index + 1}</td>
                <td class="border border-black px-3 py-2 text-center">${salesman.cs_no || ''}</td>
                <td class="border border-black px-3 py-2 text-left">${salesman.customer || ''}</td>
                <td class="border border-black px-3 py-2 text-left">${salesman.address || ''}</td>
                <td class="border border-black px-3 py-2 text-right">${salesman.amount || '0.00'}</td>
                <td class="border border-black px-3 py-2 text-center">${salesman.cma || ''}</td>
                <td class="border border-black px-3 py-2 text-right">${salesman.adjustment_amount || '0.00'}</td>
                <td class="border border-black px-3 py-2 text-right">${salesman.total || '0.00'}</td>
            </tr>
        `;
    });
} else {
    html += `
        <tr>
            <td colspan="8" class="border border-black px-3 py-4 text-center text-gray-500">
                No data available
            </td>
        </tr>
    `;
}

html += `
        </tbody>
        <tfoot>
            <!-- Total Row -->
            <tr>
                <td colspan="4" class="border border-black px-3 py-2 text-right font-semibold">
                    TOTAL
                </td>
                <td class="border border-black px-3 py-2 text-right font-semibold">
                    ₱0.00
                </td>
                <td class="border border-black px-3 py-2 text-center">
                    
                </td>
                <td class="border border-black px-3 py-2 text-right font-semibold">
                    ₱0.00
                </td>
                <td class="border border-black px-3 py-2 text-right font-semibold">
                    ₱0.00
                </td>
            </tr>

            <!-- Ave. Range -->
            <tr>
                <td colspan="2" class="border border-black px-3 py-2 text-left">
                    Ave. Range >>
                </td>
                <td colspan="2" class="border border-black px-3 py-2"></td>
                <td class="border border-black px-3 py-2 text-center">
                    72,233.48
                </td>
                <td colspan="2" class="border border-black px-3 py-2 text-right">
                    << Today's Sales
                </td>
                <td class="border border-black px-3 py-2 text-center">
                    58,575.10
                </td>
            </tr>

            <!-- Total Actual Performance -->
            <tr>
                <td colspan="5" class="border border-black px-3 py-2"></td>
                <td colspan="3" class="border border-black px-3 py-2 text-right">
                    Total Actual Perf >>
                </td>
            </tr>

            <!-- Today's % Sales Achievement -->
            <tr>
                <td colspan="2" class="border border-black px-3 py-2 text-right">
                    Infinity%
                </td>
                <td colspan="4" class="border border-black px-3 py-2 text-left">
                    << Today's % Sales Ach
                </td>
                <td colspan="2" class="border border-black px-3 py-2 text-right">
                    Today % Ach >>
                </td>
            </tr>

            <!-- Month Sales Target -->
            <tr>
                <td colspan="2" class="border border-black px-3 py-2"></td>
                <td colspan="4" class="border border-black px-3 py-2 text-left">
                    << Month Sales Target
                </td>
                <td colspan="2" class="border border-black px-3 py-2 text-right">
                    Month Target >>
                </td>
            </tr>

            <!-- MTD Actual Sales -->
            <tr>
                <td colspan="2" class="border border-black px-3 py-2"></td>
                <td colspan="4" class="border border-black px-3 py-2 text-left">
                    << MTD Actual Sales
                </td>
                <td colspan="2" class="border border-black px-3 py-2 text-right">
                    MTD Performance >>
                </td>
            </tr>

            <!-- MTD % Sales -->
            <tr>
                <td colspan="2" class="border border-black px-3 py-2"></td>
                <td colspan="4" class="border border-black px-3 py-2 text-left">
                    << MTD % Sales
                </td>
                <td colspan="2" class="border border-black px-3 py-2 text-right">
                    Ach MTD % Perf >>
                </td>
            </tr>

            <!-- Balance to Sell -->
            <tr>
                <td colspan="2" class="border border-black px-3 py-2"></td>
                <td colspan="4" class="border border-black px-3 py-2 text-left">
                    << Balance to Sell
                </td>
                <td colspan="2" class="border border-black px-3 py-2 text-right">
                    Balances >>
                </td>
            </tr>

            <!-- Daily Sales Target -->
            <tr>
                <td colspan="2" class="border border-black px-3 py-2"></td>
                <td colspan="4" class="border border-black px-3 py-2 text-left">
                    << Daily Sales Target
                </td>
                <td colspan="2" class="border border-black px-3 py-2"></td>
            </tr>

            <!-- Productive Calls Summary -->
            <tr>
                <td colspan="3" class="border border-black px-3 py-2 font-semibold text-center">
                    Today's Productive Calls
                </td>
                <td colspan="4" class="border border-black px-3 py-2 font-semibold text-center">
                    Month-To-Date Productive Calls
                </td>
                <td class="border border-black px-3 py-2 font-semibold">
                    Prepared by:
                </td>
            </tr>

            <!-- Values -->
            <tr>
                <td class="border border-black px-3 py-2 font-semibold text-center">
                    Target
                </td>
                <td colspan="2" class="border border-black px-3 py-2 font-semibold text-center">
                    Actual
                </td>
                <td class="border border-black px-3 py-2 font-semibold text-center">
                    % Prod.
                </td>
                <td class="border border-black px-3 py-2 font-semibold text-center">
                    Target
                </td>
                <td colspan="2" class="border border-black px-3 py-2 font-semibold text-center">
                    Active
                </td>
                <td class="border border-black px-3 py-2 font-semibold text-center">
                    % Prod.
                </td>
            </tr>

            <!-- Actual Data -->
            <tr>
                <td class="border border-black px-3 py-2 text-center">
                    10
                </td>
                <td colspan="2" class="border border-black px-3 py-2 text-center">
                    9
                </td>
                <td class="border border-black px-3 py-2 text-center">
                    90.00%
                </td>
                <td class="border border-black px-3 py-2 text-center">
                    150
                </td>
                <td colspan="2" class="border border-black px-3 py-2 text-center">
                    130
                </td>
                <td class="border border-black px-3 py-2 text-center">
                    86.67%
                </td>
            </tr>

            <!-- Signatures -->
            <tr>
                <td colspan="4" class="border border-black px-3 py-2 text-center align-bottom">
                    Salesman Signature/Date
                </td>
                <td colspan="4" class="border border-black px-3 py-2 text-center align-bottom">
                    GTM Signature/Date
                </td>
            </tr>
        </tfoot>
    </table>
`;
       
       $("#DsrrTableContainer").html(html);
});

$(document).ready(function () {
    DatePicker.init();

    const $datepicker = $("#dsrrDatepicker");
    const picker = $datepicker.data("daterangepicker");

    // Use today's date on first load, then refresh the names whenever the
    // report date changes.
    const loadSelectedDate = (selectedPicker) => {
        const date = selectedPicker.startDate.format("YYYY-MM-DD");

        selectedSalesman = "";
        sessionStorage.removeItem("selectedSalesman_DSR");
        $("#DsrrSalesmanName").text("Select Salesman");
        loadSalesmenByDate(date);
    };

    if (picker) {
        $datepicker.text(`${picker.startDate.format("ddd").toUpperCase()} | ${picker.startDate.format("YYYY-MM-DD")}`);
        loadSelectedDate(picker);
    }

    $datepicker.on("apply.daterangepicker", function (event, selectedPicker) {
        loadSelectedDate(selectedPicker);
    });
});

$(function () {
    if (selectedSalesman) {
        $("#dsrrSalesmanName").text(selectedSalesman);
    }
});

$(document).on("click","#DsrrDropdown", function(){
    if (DropdownLength === 0) {
        $("#DsrrModal")[0].showModal();
    }
})