console.log("DSR TABLE JS LOADED");

import TableLoader from "../../helper/TableLoader.js";
import ComponentHelper from "../../helper/ComponentHelper.js";

const DsrColumns = [

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
    tableId: "#DsrDataTable",
    columns: DsrColumns,

    onSuccess: (data) => {
        console.log(data.length);
        console.log("dsr");
    }
});

ComponentHelper.dropdown().loadByApi({
    url: "/salesmen",
    displayField: "salesman_name",
    dataField: "salesman_id",
    dropdownId: "dsrItems"
});

$(document).on("click", "#dropdown_Item", function (e) {
    e.preventDefault();
     const salesman = $(this).data("value");

    $("#DsrSalesmanName").text(salesman || "Select Salesman");
    
    //loadTable(salesman);

    $(this).blur();
    $('.dropdownTrigger [role="button"]').blur();
    console.log("man",salesman);
});