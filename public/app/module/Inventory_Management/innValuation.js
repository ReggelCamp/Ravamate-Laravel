import TableLoader from "../../helper/TableLoader.js";
import ComponentHelper from "../../helper/ComponentHelper.js";
import DatePicker from "../../helper/datePicker.js";
import "../../helper/exportDataTable.js";
import Api from "../../helper/Api.js";

const InnValuationColumns = [
    {
        title: "mdCode",
        data: null,
        render:function(row){
            const transaction = row.transaction_salesman;
            return transaction.md_code
        }
    },
    {
        title: "Salesman Code",
        data: null,
        render:function(row){
            const transaction = row.transaction_salesman;
            return transaction.id;
        }
    },
    {
        title: "Salesman",
        data: null,
        render:function(row){
            const transaction = row.transaction_salesman;
            return transaction.salesman_name;
        }
    },
    {
        title: "Stock Code",
        data: null,
        render: function(row){
            const transaction = row.transaction_details;
            let products = [];
            transaction.forEach(details => {
                products = details.product_details;
            });
            return products.StockCode;
        }
    },
    {
        title: "Description",
        data: null,
        render: function(row){
            const transaction = row.transaction_details;
            let products = [];
            transaction.forEach(details => {
                products = details.product_details;
            });
            return products.description;
        }
    },
    {
        title: "Brand",
        data: null,
        render: function(row){
            const transaction = row.transaction_details;
            let products = [];
            transaction.forEach(details => {
                products = details.product_details;
            });
            return products.brand;
        }
    },
    {
        title: "Main Category",
        data: null,
        render: function(row){
            const transaction = row.transaction_details;
            let products = [];
            transaction.forEach(details => {
                products = details.product_details;
            });
            return products.category;
        }
    },
    {
        title: "Quantity (PCS.)",
        data: null,
        render: function(row){
            const transaction = row.transaction_details;
            let products = [];
            transaction.forEach(details => {
                products = details.product_details;
            });
            return products.quantity;
        }
    },
    {
        title: "Last Updated",
        data: null,
        render:function(row){
            const transaction = row.transaction_salesman;
            return moment(transaction.updated_at).format("MMM DD, YYYY HH:mm:ss");
        }
    }
];

function displayTable(salesman) {

    if (!salesman) {
        TableLoader.loadTable({
            url: null,
            tableId: "#innValuationTable",
            columns: InnValuationColumns,
            data: [],
        });

        return ;
    }

    const salesmanId = salesman.id;

    console.log(salesmanId, "papapapa");

    TableLoader.loadTable({
        url: "transaction/getSalesmanTransaction",
        tableId: "#innValuationTable",
        columns: InnValuationColumns,
        filters: {
            salesman_id: salesmanId
        },
    });
}

displayTable();

ComponentHelper.dropdown().loadByApi({
    url: "salesman/getSalesman",
    dropdownId: "innValuationItems",
    noTextFound: "No Salesman Found",
    displayField: "salesman_name",
    dataField: "id",
});

$(document).on("click", "#dropdown_Item", function (e) {
    e.preventDefault();
    
    const salesman = $(this).data();
    const salesmanId = salesman.id;
    console.log("ge",salesman);
    $("#salesmanName").text(salesman.value|| "Select Salesman");
    
    $(this).blur();
    $('.dropdownTrigger [role="button"]').blur();

    displayTable(salesman);
});

$(document).ready(function () {
    DatePicker.init();
});