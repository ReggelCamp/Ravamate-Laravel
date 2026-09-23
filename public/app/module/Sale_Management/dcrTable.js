import TableLoader  from "../../helper/TableLoader.js";
import ComponentHelper  from "../../helper/ComponentHelper.js";
import DatePicker from "../../helper/datePicker.js";
import "../../helper/exportDataTable.js";


const SearchedWord = "";

const DcrColumns = [
    {
        title: "Salesman",
        data: "salesman_name",
    },
    {
        title: "O.R",
        data: "or_no",
        render: function (data) {
            return data ? data : "N/A";
        }
    },
    {
        title: "CUSTOMER",
        data: "transaction_store.store_name",
        defaultContent: "N/A"
    },
    {
        title: "S.I NO.",
        data: "invoice_no",
        render: function (data) {
            return data ? data : "N/A";
        }
    },
    {
        title: "S.I AMT",
        data: "transaction_amt",
        render: function (data) {
            return data ? data : "N/A";
        }
    },
    {
        title: "CHECK DATE",
        data: "check_date",
        render: function (data) {
            return data ? data : "N/A";
        }
    },
    {
        title: "BANK CODE",
        data: "bank_code",
        render: function (data) {
            return data ? data : "N/A";
        }
    },
    {
        title: "CHECK NO.",
        data: "check_no",
        render: function (data) {
            return data ? data : "N/A";
        }
    },
    {
        title: "AMOUNT",
        data: null,
        render: function (data, type, row) {
            const price = row.product_details?.price;
            const quantity = row.quantity;

            if (price == null || quantity == null) return "N/A";

            return price * quantity;
        }
    }
];

// TableLoader.loadTable({
//     url: "salesman/getSalesmanWithTransaction",
//     tableId: "#DcrDataTable",
//     columns: DcrColumns,
//     flattenDetails: true,
//     flattenField: "salesman_transaction",
//     onSuccess: (data) => {
//         console.log(data.length);
//         console.log("dcr",data);
//     }
// });

TableLoader.loadTable({
    url: "salesman/getSalesmanWithTransaction",
    tableId: "#DcrDataTable",
    columns: DcrColumns,

    filterRows: (rows) => {
        return rows.flatMap(salesman => {
            const transactions = salesman.salesman_transaction ?? [];

            if (transactions.length === 0) {
                return [{
                    salesman_name: salesman.salesman_name,
                    salesman_id: salesman.salesman_id,
                }];
            }

            return transactions.flatMap(txn => {
                const details = txn.transaction_details ?? [];

                if (details.length === 0) {
                    return [{
                        salesman_name: salesman.salesman_name,
                        salesman_id: salesman.salesman_id,
                        ...txn,
                    }];
                }

                return details.map(detail => ({
                    salesman_name: salesman.salesman_name,
                    salesman_id: salesman.salesman_id,
                    ...txn,
                    ...detail,
                }));
            });
        });
    },

    onSuccess: (data) => {
        console.log(data.length);
        console.log("dcr", data);
    }
});

ComponentHelper.dropdown().loadByApi({
    // url: "/salesmen",
    url: "dashboard/getSalesman",
    dropdownId: "dcrItems",
    noDataText: "No SalesMan Found",
    displayField: "salesman_name",
    dataField: "salesman_id",
});

$(document).on("click", "#dropdown_Item", function (e) {
    e.preventDefault();

    const salesman = $(this).data("value");

    $("#salesmanName").text(salesman || "Select Salesman");
    
    //loadTable(salesman);

    $(this).blur();
    $('.dropdownTrigger [role="button"]').blur();
    console.log("man",salesman);
});

$(document).ready(function () {
    DatePicker.init();
});