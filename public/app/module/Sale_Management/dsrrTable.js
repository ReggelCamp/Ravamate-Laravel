import TableLoader from "../../helper/TableLoader.js";
import ComponentHelper from "../../helper/ComponentHelper.js";
import DatePicker from "../../helper/datePicker.js";
import "../../helper/ExportTable.js";

let selectedSalesman = "";

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

ComponentHelper.dropdown().loadByApi({
    url: "/salesmen",
    dropdownId: "dsrrItems",
    noTextFound: "No Salesman Found",
    displayField: "salesman_name",
    dataField: "salesman_id",
})

$(document).on("click", "#dropdown_Item", function (e) {
    e.preventDefault();
    
    const salesman = $(this).data("value");
    console.log("ge",salesman);

    $("#dsrrSalesmanName").text(salesman || "Select Salesman");
    
    //loadTable(salesman);

    $(this).blur();
    $('.dropdownTrigger [role="button"]').blur();
    console.log("man",salesman);

});

$(document).on("click", "#generateDsrrReport", function () {
    console.log("clicked");

    let html = `
        <table class="w-full border-collapse border border-gray-400 text-[11px]">
            <thead>
                <tr>
                    <th rowspan="2" class="border border-gray-400 px-3 py-2">NO.</th>
                    <th rowspan="2" class="border border-gray-400 px-3 py-2">CS#</th>
                    <th rowspan="3" class="border border-gray-400 px-3 py-2">CUSTOMER</th>
                    <th rowspan="2" class="border border-gray-400 px-3 py-2">ADDRESS</th>
                    <th rowspan="2" class="border border-gray-400 px-3 py-2">AMOUNT</th>

                    <th colspan="3" class="border border-gray-400 px-3 py-2">
                        ADJUSTMENT
                    </th>
                </tr>

                <tr>
                    <th class="border border-gray-400 px-3 py-2">CMA</th>
                    <th class="border border-gray-400 px-3 py-2">AMOUNT</th>
                    <th class="border border-gray-400 px-3 py-2">TOTAL</th>
                </tr>
            </thead>

            <tbody>
        `;
               
    sampleData.forEach((row,index) => {
        html += `
            <tr>
                <td>${index + 1}</td>
                ${row.map(cell => `<td>${cell}</td>`).join("")}
            </tr>
        `;        
    });

    html += `
        </tbody>
        
        <tfoot>

        </tfoot>

        </table>
    `;
       
 

       $("#DsrrTableContainer").html(html);
});

$(document).ready(function () {
    DatePicker.init();
});