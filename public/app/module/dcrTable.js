import TableLoader  from "../helper/TableLoader.js";
import DropDownLoader  from "../helper/DropDownLoader.js";

const DcrColumns = [

            {
                title: "Salesman",
                data: "salesman_name",
            },
            {
                title: "O.R",
                data: "or_no",
            },
            {
                title: "CUSTOMER",
                data: "customer",
            },
            {
                title: "S.I NO.",
                data: "si_no",
            },
            {
                title: "S.I AMT",
                data: "si_amount",
            },
            {
                title: "CHECK DATE",
                data: "check_date",
            },
            {
                title: "BANK CODE",
                data: "bank_code",
            },
            {
                title: "CHECK NO.",
                data: "check_no",
            },
            {
                title: "AMOUNT",
                data: "amount",
            },
        ]

TableLoader.loadTable({
    url: "getDCRtable",
    tableId: "#DcrDataTable",
    columns: DcrColumns,
    pageLength: 5,

    onSuccess: (data) => {
        console.log(data.length);
        console.log("dcr");
    }
});

DropDownLoader.loadDropdown({
    url: "/salesmen",
    dropdownId: "dcrItems",

    onSuccess: (data) => {

    }
});

$(document).on("click", ".salesman-item", function (e) {
    e.preventDefault();

    const salesman = $(this).data("salesman");

    $("#salesmanName").text(salesman || "Select Salesman");
    
    loadTable(salesman);

    $(this).blur();
    $('.dropdownTrigger [role="button"]').blur();
    console.log(salesman);
});