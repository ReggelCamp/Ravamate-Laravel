console.log("DSR TABLE JS LOADED");

import TableLoader from "../../helper/TableLoader.js";
import ComponentHelper from "../../helper/ComponentHelper.js";
import DatePicker from "../../helper/datePicker.js";
import "../../helper/ExportTable.js";

let selectedSalesman = sessionStorage.getItem("selectedSalesman_DSR") || "";
let salesmenData = []; // Store loaded salesmen data
let DropdownLength = 0;
// DSR TABLE COLUMNS

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


// DSR SAMPLE DATA

// const DsrSampleData = [
//     [
//         "DSI-0001",
//         "08:00 AM - 09:00 AM",
//         "₱12,500.00",
//         "ABC Trading / 45 sec",
//         "₱15,000.00",
//         "Yes",
//         "Yes",
//         "No",
//         "Yes",
//         "Complete",
//         "Cash",
//         "Good customer engagement",
//     ],
//     [
//         "DSI-0002",
//         "09:00 AM - 10:00 AM",
//         "₱8,750.00",
//         "XYZ Store / 38 sec",
//         "₱10,000.00",
//         "Yes",
//         "Yes",
//         "Yes",
//         "No",
//         "Partial",
//         "Credit",
//         "Needs additional products",
//     ],
//     [
//         "DSI-0003",
//         "10:00 AM - 11:00 AM",
//         "₱21,300.00",
//         "Juan's Grocery / 52 sec",
//         "₱20,000.00",
//         "Yes",
//         "Yes",
//         "Yes",
//         "Yes",
//         "Complete",
//         "Cash",
//         "Above sales target",
//     ],
//     [
//         "DSI-0004",
//         "11:00 AM - 12:00 PM",
//         "₱6,450.00",
//         "Metro Retail / 31 sec",
//         "₱12,000.00",
//         "No",
//         "Yes",
//         "No",
//         "No",
//         "Partial",
//         "Credit",
//         "Low customer activity",
//     ],
//     [
//         "DSI-0005",
//         "01:00 PM - 02:00 PM",
//         "₱15,800.00",
//         "Corner Mart / 47 sec",
//         "₱15,000.00",
//         "Yes",
//         "Yes",
//         "Yes",
//         "Yes",
//         "Complete",
//         "Cash",
//         "Target achieved",
//     ],
//     [
//         "DSI-0006",
//         "02:00 PM - 03:00 PM",
//         "₱9,200.00",
//         "Family Store / 41 sec",
//         "₱11,000.00",
//         "Yes",
//         "No",
//         "Yes",
//         "No",
//         "Partial",
//         "Cash",
//         "Some items unavailable",
//     ],
//     [
//         "DSI-0001",
//         "08:00 AM - 09:00 AM",
//         "₱12,500.00",
//         "ABC Trading / 45 sec",
//         "₱15,000.00",
//         "Yes",
//         "Yes",
//         "No",
//         "Yes",
//         "Complete",
//         "Cash",
//         "Good customer engagement",
//     ],
//     [
//         "DSI-0002",
//         "09:00 AM - 10:00 AM",
//         "₱8,750.00",
//         "XYZ Store / 38 sec",
//         "₱10,000.00",
//         "Yes",
//         "Yes",
//         "Yes",
//         "No",
//         "Partial",
//         "Credit",
//         "Needs additional products",
//     ],
//     [
//         "DSI-0003",
//         "10:00 AM - 11:00 AM",
//         "₱21,300.00",
//         "Juan's Grocery / 52 sec",
//         "₱20,000.00",
//         "Yes",
//         "Yes",
//         "Yes",
//         "Yes",
//         "Complete",
//         "Cash",
//         "Above sales target",
//     ],
//     [
//         "DSI-0004",
//         "11:00 AM - 12:00 PM",
//         "₱6,450.00",
//         "Metro Retail / 31 sec",
//         "₱12,000.00",
//         "No",
//         "Yes",
//         "No",
//         "No",
//         "Partial",
//         "Credit",
//         "Low customer activity",
//     ],
//     [
//         "DSI-0005",
//         "01:00 PM - 02:00 PM",
//         "₱15,800.00",
//         "Corner Mart / 47 sec",
//         "₱15,000.00",
//         "Yes",
//         "Yes",
//         "Yes",
//         "Yes",
//         "Complete",
//         "Cash",
//         "Target achieved",
//     ],
//     [
//         "DSI-0006",
//         "02:00 PM - 03:00 PM",
//         "₱9,200.00",
//         "Family Store / 41 sec",
//         "₱11,000.00",
//         "Yes",
//         "No",
//         "Yes",
//         "No",
//         "Partial",
//         "Cash",
//         "Some items unavailable",
//     ],
//     [
//         "DSI-0001",
//         "08:00 AM - 09:00 AM",
//         "₱12,500.00",
//         "ABC Trading / 45 sec",
//         "₱15,000.00",
//         "Yes",
//         "Yes",
//         "No",
//         "Yes",
//         "Complete",
//         "Cash",
//         "Good customer engagement",
//     ],
//     [
//         "DSI-0002",
//         "09:00 AM - 10:00 AM",
//         "₱8,750.00",
//         "XYZ Store / 38 sec",
//         "₱10,000.00",
//         "Yes",
//         "Yes",
//         "Yes",
//         "No",
//         "Partial",
//         "Credit",
//         "Needs additional products",
//     ],
//     [
//         "DSI-0003",
//         "10:00 AM - 11:00 AM",
//         "₱21,300.00",
//         "Juan's Grocery / 52 sec",
//         "₱20,000.00",
//         "Yes",
//         "Yes",
//         "Yes",
//         "Yes",
//         "Complete",
//         "Cash",
//         "Above sales target",
//     ],
//     [
//         "DSI-0004",
//         "11:00 AM - 12:00 PM",
//         "₱6,450.00",
//         "Metro Retail / 31 sec",
//         "₱12,000.00",
//         "No",
//         "Yes",
//         "No",
//         "No",
//         "Partial",
//         "Credit",
//         "Low customer activity",
//     ],
//     [
//         "DSI-0005",
//         "01:00 PM - 02:00 PM",
//         "₱15,800.00",
//         "Corner Mart / 47 sec",
//         "₱15,000.00",
//         "Yes",
//         "Yes",
//         "Yes",
//         "Yes",
//         "Complete",
//         "Cash",
//         "Target achieved",
//     ],
//     [
//         "DSI-0006",
//         "02:00 PM - 03:00 PM",
//         "₱9,200.00",
//         "Family Store / 41 sec",
//         "₱11,000.00",
//         "Yes",
//         "No",
//         "Yes",
//         "No",
//         "Partial",
//         "Cash",
//         "Some items unavailable",
//     ],
//     [
//         "DSI-0001",
//         "08:00 AM - 09:00 AM",
//         "₱12,500.00",
//         "ABC Trading / 45 sec",
//         "₱15,000.00",
//         "Yes",
//         "Yes",
//         "No",
//         "Yes",
//         "Complete",
//         "Cash",
//         "Good customer engagement",
//     ],
//     [
//         "DSI-0002",
//         "09:00 AM - 10:00 AM",
//         "₱8,750.00",
//         "XYZ Store / 38 sec",
//         "₱10,000.00",
//         "Yes",
//         "Yes",
//         "Yes",
//         "No",
//         "Partial",
//         "Credit",
//         "Needs additional products",
//     ],
//     [
//         "DSI-0003",
//         "10:00 AM - 11:00 AM",
//         "₱21,300.00",
//         "Juan's Grocery / 52 sec",
//         "₱20,000.00",
//         "Yes",
//         "Yes",
//         "Yes",
//         "Yes",
//         "Complete",
//         "Cash",
//         "Above sales target",
//     ],
//     [
//         "DSI-0004",
//         "11:00 AM - 12:00 PM",
//         "₱6,450.00",
//         "Metro Retail / 31 sec",
//         "₱12,000.00",
//         "No",
//         "Yes",
//         "No",
//         "No",
//         "Partial",
//         "Credit",
//         "Low customer activity",
//     ],
//     [
//         "DSI-0005",
//         "01:00 PM - 02:00 PM",
//         "₱15,800.00",
//         "Corner Mart / 47 sec",
//         "₱15,000.00",
//         "Yes",
//         "Yes",
//         "Yes",
//         "Yes",
//         "Complete",
//         "Cash",
//         "Target achieved",
//     ],
//     [
//         "DSI-0006",
//         "02:00 PM - 03:00 PM",
//         "₱9,200.00",
//         "Family Store / 41 sec",
//         "₱11,000.00",
//         "Yes",
//         "No",
//         "Yes",
//         "No",
//         "Partial",
//         "Cash",
//         "Some items unavailable",
//     ],
//     [
//         "DSI-0001",
//         "08:00 AM - 09:00 AM",
//         "₱12,500.00",
//         "ABC Trading / 45 sec",
//         "₱15,000.00",
//         "Yes",
//         "Yes",
//         "No",
//         "Yes",
//         "Complete",
//         "Cash",
//         "Good customer engagement",
//     ],
//     [
//         "DSI-0002",
//         "09:00 AM - 10:00 AM",
//         "₱8,750.00",
//         "XYZ Store / 38 sec",
//         "₱10,000.00",
//         "Yes",
//         "Yes",
//         "Yes",
//         "No",
//         "Partial",
//         "Credit",
//         "Needs additional products",
//     ],
//     [
//         "DSI-0003",
//         "10:00 AM - 11:00 AM",
//         "₱21,300.00",
//         "Juan's Grocery / 52 sec",
//         "₱20,000.00",
//         "Yes",
//         "Yes",
//         "Yes",
//         "Yes",
//         "Complete",
//         "Cash",
//         "Above sales target",
//     ],
//     [
//         "DSI-0004",
//         "11:00 AM - 12:00 PM",
//         "₱6,450.00",
//         "Metro Retail / 31 sec",
//         "₱12,000.00",
//         "No",
//         "Yes",
//         "No",
//         "No",
//         "Partial",
//         "Credit",
//         "Low customer activity",
//     ],
//     [
//         "DSI-0005",
//         "01:00 PM - 02:00 PM",
//         "₱15,800.00",
//         "Corner Mart / 47 sec",
//         "₱15,000.00",
//         "Yes",
//         "Yes",
//         "Yes",
//         "Yes",
//         "Complete",
//         "Cash",
//         "Target achieved",
//     ],
//     [
//         "DSI-0006",
//         "02:00 PM - 03:00 PM",
//         "₱9,200.00",
//         "Family Store / 41 sec",
//         "₱11,000.00",
//         "Yes",
//         "No",
//         "Yes",
//         "No",
//         "Partial",
//         "Cash",
//         "Some items unavailable",
//     ],
//     [
//         "DSI-0001",
//         "08:00 AM - 09:00 AM",
//         "₱12,500.00",
//         "ABC Trading / 45 sec",
//         "₱15,000.00",
//         "Yes",
//         "Yes",
//         "No",
//         "Yes",
//         "Complete",
//         "Cash",
//         "Good customer engagement",
//     ],
//     [
//         "DSI-0002",
//         "09:00 AM - 10:00 AM",
//         "₱8,750.00",
//         "XYZ Store / 38 sec",
//         "₱10,000.00",
//         "Yes",
//         "Yes",
//         "Yes",
//         "No",
//         "Partial",
//         "Credit",
//         "Needs additional products",
//     ],
//     [
//         "DSI-0003",
//         "10:00 AM - 11:00 AM",
//         "₱21,300.00",
//         "Juan's Grocery / 52 sec",
//         "₱20,000.00",
//         "Yes",
//         "Yes",
//         "Yes",
//         "Yes",
//         "Complete",
//         "Cash",
//         "Above sales target",
//     ],
//     [
//         "DSI-0004",
//         "11:00 AM - 12:00 PM",
//         "₱6,450.00",
//         "Metro Retail / 31 sec",
//         "₱12,000.00",
//         "No",
//         "Yes",
//         "No",
//         "No",
//         "Partial",
//         "Credit",
//         "Low customer activity",
//     ],
//     [
//         "DSI-0005",
//         "01:00 PM - 02:00 PM",
//         "₱15,800.00",
//         "Corner Mart / 47 sec",
//         "₱15,000.00",
//         "Yes",
//         "Yes",
//         "Yes",
//         "Yes",
//         "Complete",
//         "Cash",
//         "Target achieved",
//     ],
//     [
//         "DSI-0006",
//         "02:00 PM - 03:00 PM",
//         "₱9,200.00",
//         "Family Store / 41 sec",
//         "₱11,000.00",
//         "Yes",
//         "No",
//         "Yes",
//         "No",
//         "Partial",
//         "Cash",
//         "Some items unavailable",
//     ],
//     [
//         "DSI-0001",
//         "08:00 AM - 09:00 AM",
//         "₱12,500.00",
//         "ABC Trading / 45 sec",
//         "₱15,000.00",
//         "Yes",
//         "Yes",
//         "No",
//         "Yes",
//         "Complete",
//         "Cash",
//         "Good customer engagement",
//     ],
//     [
//         "DSI-0002",
//         "09:00 AM - 10:00 AM",
//         "₱8,750.00",
//         "XYZ Store / 38 sec",
//         "₱10,000.00",
//         "Yes",
//         "Yes",
//         "Yes",
//         "No",
//         "Partial",
//         "Credit",
//         "Needs additional products",
//     ],
//     [
//         "DSI-0003",
//         "10:00 AM - 11:00 AM",
//         "₱21,300.00",
//         "Juan's Grocery / 52 sec",
//         "₱20,000.00",
//         "Yes",
//         "Yes",
//         "Yes",
//         "Yes",
//         "Complete",
//         "Cash",
//         "Above sales target",
//     ],
//     [
//         "DSI-0004",
//         "11:00 AM - 12:00 PM",
//         "₱6,450.00",
//         "Metro Retail / 31 sec",
//         "₱12,000.00",
//         "No",
//         "Yes",
//         "No",
//         "No",
//         "Partial",
//         "Credit",
//         "Low customer activity",
//     ],
//     [
//         "DSI-0005",
//         "01:00 PM - 02:00 PM",
//         "₱15,800.00",
//         "Corner Mart / 47 sec",
//         "₱15,000.00",
//         "Yes",
//         "Yes",
//         "Yes",
//         "Yes",
//         "Complete",
//         "Cash",
//         "Target achieved",
//     ],
//     [
//         "DSI-0006",
//         "02:00 PM - 03:00 PM",
//         "₱9,200.00",
//         "Family Store / 41 sec",
//         "₱11,000.00",
//         "Yes",
//         "No",
//         "Yes",
//         "No",
//         "Partial",
//         "Cash",
//         "Some items unavailable",
//     ],
//     [
//         "DSI-0001",
//         "08:00 AM - 09:00 AM",
//         "₱12,500.00",
//         "ABC Trading / 45 sec",
//         "₱15,000.00",
//         "Yes",
//         "Yes",
//         "No",
//         "Yes",
//         "Complete",
//         "Cash",
//         "Good customer engagement",
//     ],
//     [
//         "DSI-0002",
//         "09:00 AM - 10:00 AM",
//         "₱8,750.00",
//         "XYZ Store / 38 sec",
//         "₱10,000.00",
//         "Yes",
//         "Yes",
//         "Yes",
//         "No",
//         "Partial",
//         "Credit",
//         "Needs additional products",
//     ],
//     [
//         "DSI-0003",
//         "10:00 AM - 11:00 AM",
//         "₱21,300.00",
//         "Juan's Grocery / 52 sec",
//         "₱20,000.00",
//         "Yes",
//         "Yes",
//         "Yes",
//         "Yes",
//         "Complete",
//         "Cash",
//         "Above sales target",
//     ],
//     [
//         "DSI-0004",
//         "11:00 AM - 12:00 PM",
//         "₱6,450.00",
//         "Metro Retail / 31 sec",
//         "₱12,000.00",
//         "No",
//         "Yes",
//         "No",
//         "No",
//         "Partial",
//         "Credit",
//         "Low customer activity",
//     ],
//     [
//         "DSI-0005",
//         "01:00 PM - 02:00 PM",
//         "₱15,800.00",
//         "Corner Mart / 47 sec",
//         "₱15,000.00",
//         "Yes",
//         "Yes",
//         "Yes",
//         "Yes",
//         "Complete",
//         "Cash",
//         "Target achieved",
//     ],
//     [
//         "DSI-0006",
//         "02:00 PM - 03:00 PM",
//         "₱9,200.00",
//         "Family Store / 41 sec",
//         "₱11,000.00",
//         "Yes",
//         "No",
//         "Yes",
//         "No",
//         "Partial",
//         "Cash",
//         "Some items unavailable",
//     ],
//     [
//         "DSI-0001",
//         "08:00 AM - 09:00 AM",
//         "₱12,500.00",
//         "ABC Trading / 45 sec",
//         "₱15,000.00",
//         "Yes",
//         "Yes",
//         "No",
//         "Yes",
//         "Complete",
//         "Cash",
//         "Good customer engagement",
//     ],
//     [
//         "DSI-0001",
//         "08:00 AM - 09:00 AM",
//         "₱12,500.00",
//         "ABC Trading / 45 sec",
//         "₱15,000.00",
//         "Yes",
//         "Yes",
//         "No",
//         "Yes",
//         "Complete",
//         "Cash",
//         "Good customer engagement",
//     ],
// ];



// SALESMAN DROPDOWN

function loadSalesmenByDate(date) {
    ComponentHelper.dropdown().loadByApi({
        url: "/getSalesmanNames",
        data: { date },
        dropdownId: "dsrItems",
        noDataText: "No Salesman Found",
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
                $("#dsrItems").append (`
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

$(document).on("click", "#dropdown_Item", function (e) {
    e.preventDefault();

    selectedSalesman = $(this).data("value") || "";

    $("#DsrSalesmanName").text(selectedSalesman || "Select Salesman");

    sessionStorage.setItem("selectedSalesman_DSR", selectedSalesman);

    $(this).blur();
    $('.dropdownTrigger [role="button"]').blur();

    console.log("man", selectedSalesman);
});

$(document).on("click","#DsrDropdown", function(){
    if (DropdownLength === 0) {
        $("#DsrModal")[0].showModal();
    }
})

// GENERATE DSR REPORT

$(document).on("click", "#generateDsrReport", function () {

    console.log("DSR REPORT GENERATED");
    console.log("DSR REPORT GENERATED",selectedSalesman);

    let html = `
        <table id="DsrTable" class="w-full border-collapse text-[11px] ">

            <thead>
           
                    <tr class="print-report-header">
                        <th colspan="4" class="report-print-title report-left">
                            ${selectedSalesman || "All Salesmen"}
                        </th>

                        <th colspan="5" class="report-print-title report-center">
                            DAILY SALES REPORT
                        </th>

                    </tr>
            

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


    
    // ADD SAMPLE DATA
    
salesmenData.forEach((salesman, index) => {

     html += `
                <tr>
                    <td class="text-center">${index + 1}</td>
                    <td class="text-center">${salesman.salesman_name || ''}</td>
                    <td class="text-center">${salesman.or_no || ''}</td>
                    <td class="text-center">${salesman.customer || ''}</td>
                    <td class="text-center">${salesman.si_no || ''}</td>
                    <td class="text-center">${salesman.si_amount || ''}</td>
                    <td class="text-center">${salesman.check_date || ''}</td>
                    <td class="text-center">${salesman.bank_code || ''}</td>
                    <td class="text-center">${salesman.check_no || ''}</td>
                    <td class="text-center">${salesman.amount || ''}</td>
                    <td class="text-center">-</td>
                    <td class="text-center">-</td>
                    <td class="text-center">-</td>
                </tr>
            `;
});


    html += `
            </tbody>
            <tfoot>

                  <tr>
                <td colspan="2" class="text-left">
                    Ave. Range >>
                </td>

                <td colspan="2"></td>

                <td colspan="1" class="text-center">
                    72,233.48
                </td>

                <td colspan="2" class="text-right">
                    << Today's Sales
                </td>

                <td colspan="2" class="text-right">
                    Today's Target >>
                </td>

                <td class="text-center">
                    58,575.10
                </td>

                <td colspan="3" class="text-center">
                    -11,813.88
                </td>
            </tr>

            <!-- Total Actual Performance -->
            <tr>
                <td colspan="5"></td>

                <td colspan="4" class="text-right">
                    Total Actual Perf >>
                </td>

                <td colspan="4"></td>
            </tr>

            <!-- Today's % Sales Achievement -->
            <tr>
                <td colspan="2" class="text-right">
                    Infinity%
                </td>

                <td colspan="4" class="text-left">
                    << Today's % Sales Ach
                </td>

                <td colspan="4" class="text-right">
                    Today % Ach >>
                </td>

                <td colspan="3"></td>
            </tr>

            <!-- Month Sales Target -->
            <tr>
                <td colspan="2"></td>

                <td colspan="4" class="text-left">
                    << Month Sales Target
                </td>

                <td colspan="4" class="text-right">
                    Month Target >>
                </td>

                <td colspan="3"></td>
            </tr>

            <!-- MTD Actual Sales -->
            <tr>
                <td colspan="2"></td>

                <td colspan="4" class="text-left">
                    << MTD Actual Sales
                </td>

                <td colspan="4" class="text-right">
                    MTD Performance >>
                </td>

                <td colspan="3"></td>
            </tr>

            <!-- MTD % Sales -->
            <tr>
                <td colspan="2"></td>

                <td colspan="4" class="text-left">
                    << MTD % Sales
                </td>

                <td colspan="4" class="text-right">
                    Ach MTD % Perf >>
                </td>

                <td colspan="3"></td>
            </tr>

            <!-- Balance to Sell -->
            <tr>
                <td colspan="2"></td>

                <td colspan="4" class="text-left">
                    << Balance to Sell
                </td>

                <td colspan="4" class="text-right">
                    Balances >>
                </td>

                <td colspan="3"></td>
            </tr>

            <!-- Daily Sales Target -->
            <tr>
                <td colspan="2"></td>

                <td colspan="4" class="text-left">
                    << Daily Sales Target
                </td>

                <td colspan="4"></td>

                <td colspan="3"></td>
            </tr>

                <!-- Productive Calls Summary -->
                <tr>
                    <td colspan="4" class="font-semibold text-center">
                        Today's Productive Calls
                    </td>

                    <td colspan="5" class="font-semibold text-center">
                        Month-To-Date Productive Calls
                    </td>

                    <td colspan="2" class="font-semibold">
                        Prepared by:
                    </td>

                    <td colspan="3" class="font-semibold">
                        Received by:
                    </td>
                </tr>

                <!-- Values -->
                <tr>
                    <td class="font-semibold text-center">
                        Target
                    </td>

                    <td class="font-semibold text-center">
                        Actual
                    </td>

                    <td colspan="2" class="font-semibold text-center">
                        % Prod.
                    </td>

                    <td class="font-semibold text-center">
                        Target
                    </td>

                    <td colspan="2" class="font-semibold text-center">
                        Active
                    </td>

                    <td class="font-semibold text-center">
                        % Prod.
                    </td>

                    <td class="font-semibold text-center">
                        Balance
                    </td>

                    <td colspan="2" class="h-[50px]">
                    </td>

                    <td colspan="3" class="h-[50px]">
                    </td>
                </tr>

                <!-- Actual Data -->
                <tr>
                    <td class="text-center">
                        10
                    </td>

                    <td class="text-center">
                        9
                    </td>

                    <td colspan="2" class="text-center">
                        90.00%
                    </td>

                    <td class="text-center">
                        150
                    </td>

                    <td colspan="2" class="text-center">
                        130
                    </td>

                    <td class="text-center">
                        86.67%
                    </td>

                    <td class="text-center">
                        20
                    </td>

                    <td colspan="2" class="text-center align-bottom">
                        Salesman Signature/Date
                    </td>

                    <td colspan="3" class="text-center align-bottom">
                        GTM Signature/Date
                    </td>
                </tr>

        </tfoot>
        </table>
    `;


    
    // APPEND TO CONTAINER
    
    $("#DsrTableContainer").html(html);

});

$(document).ready(function () {
    DatePicker.init();

    const $datepicker = $("#dsrDatepicker");
    const picker = $datepicker.data("daterangepicker");

    // Use today's date on first load, then refresh the names whenever the
    // report date changes.
    const loadSelectedDate = (selectedPicker) => {
        const date = selectedPicker.startDate.format("YYYY-MM-DD");

        selectedSalesman = "";
        sessionStorage.removeItem("selectedSalesman_DSR");
        $("#DsrSalesmanName").text("Select Salesman");
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
