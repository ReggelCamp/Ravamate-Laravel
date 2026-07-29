import Api from "../helper/Api.js";
import MyDataTables from "./dataTable.js";

function getDCRtableContent(salesman = "") {
    Api.get({
        url: "/getDCRtable",
        data: {
            salesman_name: salesman
        },
        onSuccess: (data) => {
            console.log("feq",data);
            MyDataTables.tableData("#dcrTable", data, [
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
            ]);
        },
    });
}

function getSalesman() {
    Api.get({
        url: "/salesmen",

        onSuccess: (data) => {
            console.log("daaw", data);
            let html = "";

            $.each(data, function (index, item) {
                html += `
                    <li>
                        <a href="#" class="salesman-item"
                           data-salesman="${item.salesman_name}">
                            ${item.salesman_name}
                        </a>
                    </li>
                `;
            });

            $("#dsrItems").html(html);
        },
    });
}

$(document).ready(function () {
    getDCRtableContent();
    getSalesman();
    console.log("deym");
});

$(document).on("click", ".salesman-item", function (e) {
    e.preventDefault();

    const salesman = $(this).data("salesman");

    $("#DcrReportname").text(salesman || "Select Salesman");
    
    getDCRtableContent(salesman);

    $(this).blur();
    $('.dropdownTrigger [role="button"]').blur();
    console.log(salesman);
});
