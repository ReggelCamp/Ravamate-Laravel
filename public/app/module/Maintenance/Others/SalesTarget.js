import TableLoader from "../../../helper/TableLoader.js";
import DatePicker from "../../../helper/datePicker.js";
import "../../../helper/exportDataTable.js";
import ComponentHelper from "../../../helper/ComponentHelper.js";
import Api from "../../../helper/Api.js";

const SalesTargetColumns = [
    {
        title: "Md Code",
        data: null,
        render: function (data, type, row) {
            console.log("Row data:", row);
            return row.md_code ? row.md_code : "N/A";
        }
    },
    {
        title: "Salesman",
        data: "id",
    },
    {
        title: "Year",
        data: null,
        render: function (data, type, row) {
            console.log("Row data:", row);
            return moment(row.created_at).format("YYYY");
        }
    },
    {
        title: "Month",
        data: null,
        render: function (data, type, row) {
            console.log("Row data:", row);
            return moment(row.created_at).format("MM");
        }
    },
    {
        title: "Sales Target",
        data: null,
        render: function (data, type, row) {
            console.log("Row data:", row);
            return formatCurrency(row.sales_target);
        }
    },
    {
        title: "Markup %",
        data: null,
        render: function (data, type, row) {
            console.log("Row data:", row);
            return row.markup_percentage ? row.markup_percentage : "N/A";
        }
    },
    {
        title: "Last Updated",
        data: null,
        render: function (data, type, row) {
            console.log("Row data:", row);
            return moment(row.last_updated).format("YYYY-MM-DD HH:mm:ss");
        }
    },
];

$(document)
    .off("click.dashboardRow", "#SalesTargetDataTable tbody tr")
    .on("click.dashboardRow", "#SalesTargetDataTable tbody tr", function () {
        if (!$.fn.DataTable.isDataTable("#SalesTargetDataTable")) return;
        const row = $("#SalesTargetDataTable").DataTable().row(this).data();
        
        DisplayModal(row);
        console.log("clicked row data:", row);
    });

function displaySalesTargetTable() {
    TableLoader.loadTable({
        url: "salesman/getSalesmanStore",
        tableId: "#SalesTargetDataTable",
        columns:SalesTargetColumns,
    });
}

displaySalesTargetTable();

$(document).ready(function () {
    DatePicker.init();
});

ComponentHelper.dropdown().LoadCheckBoxByApi({
    url: "salesman/getSalesmanNames",
    dropdownId: "SalesmanCheckbox",
    noDataText: "No SalesMan Found",
    displayField: "salesman_name",
    dataField: "salesman_id",
});

function DisplayModal(data) {
     console.log("Selected row:", data);

    $("#SalesTargetModal")[0].showModal();

    $("#salesTarget_Id").val(data.id);
    $("#salesTarget_Salesman").text(data.id);
    $("#salesTarget_Year").text(moment(data.created_at).format("YYYY"));
    $("#salesTarget_Month").text(moment(data.created_at).format("MM"));
    $("#salesTarget_Amount").val(data.sales_target);
    $("#salesTarget_Markup").val(data.markup);
}

$(document).on("click", "#updateSalesTarget", function (e) {
    e.preventDefault();
    const id = $("#salesTarget_Id").val();
    document.getElementById("SalesTargetModal")?.close();

    Swal.fire({
        title: "Updating",
        text: "Updating salesman, please wait.",
        allowOutsideClick: false,
        didOpen: () => Swal.showLoading(),
    });

    Api.post({
        url: "salesman/updateSalesman",
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        data: {
            id: id,
            sales_target: $("#salesTarget_Amount").val(),
            markup: $("#salesTarget_Markup").val(),
        },
        onSuccess: (data) => {
            console.log("Success:", data);
            Swal.close();

            Swal.fire({
                title: "Saved",
                text: data.message ?? "Salesman saved successfully.",
                icon: "success",
                timer: 1500,
                showConfirmButton: false,
            });
            displaySalesTargetTable();
        },
    });
});

function formatCurrency(value) {
    return `₱ ${Number(value ?? 0).toLocaleString("en-PH", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    })}`;
}