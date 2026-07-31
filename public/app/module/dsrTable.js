console.log("DCR TABLE JS LOADED");

import TableLoader from "../helper/TableLoader.js";

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