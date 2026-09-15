import TableLoader from "../../../helper/TableLoader.js";
import DatePicker from "../../../helper/datePicker.js";
import "../../../helper/exportDataTable.js";
import ComponentHelper from "../../../helper/ComponentHelper.js"
import Api from "../../../helper/Api.js";

let salesmanName = null;

const ReturnLogsColumns = [
    {
        title: "Transaction ID",
        data: "transaction_id",
    },
    {
        title: "Salesman",
        data: "salesman_name",
    },
    {
        title: "CustomerCode",
        data: "customercode",
    },
    {
        title: "Invoice No.",
        data: "invoice_no",
    },
    {
        title: "Site",
        data: "site",
    },
    {
        title: "Item No.",
        data: "item_no",
    },
    {
        title: "UM",
        data: "um",
    },
    {
        title: "Quantity",
        data: "quantity",
    },
    {
        title: "Reason Code",
        data: "reason_code",
    },
    {
        title: "API Status",
        data: "api_status",
    },
    {
        title: "API Response",
        data: "api_response",
    },
    {
        title: "Last Updated",
        data: "updated_at",
    },
    {
        title: "Date Added",
        data: "created_at",
    },
];

const SoToFdisColumns = [
    {
        title: "Transaction ID",
        data: "transaction_id",
    },
    {
        title: "Salesman",
        data: "salesman_name",
    },
    {
        title: "Order Type",
        data: "transaction_salesman.default_ord_type",
    },
    {
        title: "CustomerCode",
        data: "customercode",
    },
    {
        title: "Item Number",
        data: "item_no",
    },
    {
        title: "Site",
        data: "site",
    },
    {
        title: "UM",
        data: "um",
    },
    {
        title: "QTY Ordered",
        data: "quantity",
    },
    {
        title: "API Status",
        data: "api_status",
    },
    {
        title: "API Response",
        data: "api_response",
    },
    {
        title: "Last Updated",
        data: "updated_at",
    },
    {
        title: "Date Added",
        data: "created_at",
    },
];

const PaymentLogsColumns = [
    {
        title: "Transaction ID",
        data: "transaction_id",
    },
    {
        title: "Invoice No.",
        data: "invoice_no",
    },
    {
        title: "Document. #",
        data: "document_no",
    },
    {
        title: "Mode",
        data: "mode",
    },
    {
        title: "Transaction Amount",
        data: "transaction_amt",
    },
    {
        title: "Bank",
        data: "bank_code",
    },
    {
        title: "Check No.",
        data: "check_no",
    },
    {
        title: "Check Date",
        data: "check_date",
    },
    {
        title: "API Status",
        data: "api_status",
    },
    {
        title: "API Response",
        data: "api_response",
    },
    {
        title: "Last Updated",
        data: "updated_at",
    },
    {
        title: "Date Added",
        data: "created_at",
    },
];

const AutoLogsColumns = [
    {
        title: "Transaction ID",
        data: "transaction_id",
    },
    {
        title: "Source",
        data: "source",
    },
    {
        title: "Destination",
        data: "destination",
    },
    {
        title: "Item No.",
        data: "item_no",
    },
    {
        title: "UM",
        data: "um",
    },
    {
        title: "QTY Ordered",
        data: "quantity",
    },
    {
        title: "API Status",
        data: "api_status",
    },
    {
        title: "API Response",
        data: "api_response",
    },
    {
        title: "Last Updated",
        data: "updated_at",
    },
    {
        title: "Date Added",
        data: "created_at",
    },
];

const SyncTransactionsColumns = [
    {
        title: '<input type="checkbox" id="selectAll" class="checkbox checkbox-sm">',
        data: null,
        orderable: false,
        className: "text-center",
        render: function (data, type, row) {
            return `<input type="checkbox" class="checkbox checkbox-sm row-checkbox" value="${row.transaction_id}">`;
        }
    },
    {
        title: "Transaction ID",
        data: "transaction_id",
    },
    {
        title: "Salesman",
        data: "salesman",
    },
    {
        title: "Customer",
        data: "customer",
    },
    {
        title: "Document #",
        data: "document_no",
    },
    {
        title: "Total SKU",
        data: "total_sku",
    },
    {
        title: "Up Time",
        data: "up_time",
    },
    {
        title: "Sales",
        data: "sales",
    },
    {
        title: "Address",
        data: "address",
    },
    {
        title: "Delivery Date",
        data: "delivery_date",
    },
]

// SO
TableLoader.loadTable({
    url: "transaction/getTransaction",
    tableId:"#SOPendingLogs",
    columns: SoToFdisColumns
})
TableLoader.loadTable({
    url: "transaction/getTransaction",
    tableId:"#SOFailedLogs",
    columns: SoToFdisColumns
})
TableLoader.loadTable({
    url: "transaction/getTransaction",
    tableId:"#SOSuccessLogs",
    columns: SoToFdisColumns
})

//return
TableLoader.loadTable({
    url: "transaction/getTransaction",
    tableId:"#ReturnPendingLogs",
    columns: ReturnLogsColumns
})
TableLoader.tableData(
    "#ReturnFailedLogs",
    [],
    ReturnLogsColumns,
    {

    },
);
TableLoader.tableData(
    "#ReturnSuccessLogs",
    [],
    ReturnLogsColumns,
    {

    },
);

//payment
TableLoader.loadTable({
    url: "transaction/getTransaction",
    tableId:"#PaymentPendingLogs",
    columns: PaymentLogsColumns
})
TableLoader.tableData(
    "#PaymentFailedLogs",
    [],
    PaymentLogsColumns,
    {

    },
);
TableLoader.tableData(
    "#PaymentSuccessLogs",
    [],
    PaymentLogsColumns,
    {

    },
);

//autostock
TableLoader.loadTable({
    url: "transaction/getTransaction",
    tableId:"#AutoStockPendingLogs",
    columns: AutoLogsColumns
})
TableLoader.tableData(
    "#AutoStockFailedLogs",
    [],
    AutoLogsColumns,
    {

    },
);
TableLoader.tableData(
    "#AutoStockSuccessLogs",
    [],
    AutoLogsColumns,
    {

    },
);


// Select all checkbox toggles all row checkboxes
$(document).on('change', '#selectAll', function () {
    const isChecked = $(this).prop('checked');
    $('.row-checkbox').prop('checked', isChecked);
});

// If any row checkbox is unchecked, uncheck "select all"
$(document).on('change', '.row-checkbox', function () {
    const allChecked = $('.row-checkbox').length === $('.row-checkbox:checked').length;
    $('#selectAll').prop('checked', allChecked);
});

// Get selected transaction IDs (e.g., when "Process to FDIS" is clicked)
function getSelectedTransactions() {
    return $('.row-checkbox:checked').map(function () {
        return $(this).val();
    }).get();
}

function processToFDIS() {
    const selectedIds = getSelectedTransactions();
    if (selectedIds.length === 0) {
        alert('Please select at least one transaction.');
        return;
    }
    console.log('Processing:', selectedIds);
    // your AJAX call here
}

//transactionModal
TableLoader.tableData(
    "#TransactionTable",
    [],
    SyncTransactionsColumns,
    {
        searchInput: "#TransactionTableSearch",
    }
);

// Hide button initially
$(".reprocess_btn").addClass("hidden");

// When any tab is clicked
$(".tab").on("click", function () {
    if ($(this).attr("id").includes("Failed")) {
        $(".reprocess_btn").removeClass("hidden");
    } else {
        $(".reprocess_btn").addClass("hidden");
    }
});

$(".container_trigger").on("click", function () {
    // Remove active state from all cards
    $(".container_trigger").removeClass("active");

    // Add active state to the clicked card
    $(this).addClass("active");

    $(".table_container").fadeOut(100);

    const container = $($(this).data("id"));

    $($(this).data().id).fadeIn(100);
    container.find(".tab").first().click();
});

$(".container_trigger").first().click();

$(document).ready(function () {
    DatePicker.init();
});

// Maps each table's real ID (must match TableLoader.tableData's first arg) to a "type"
// so one populate function can branch on it.
const queueTables = [
    { id: "SOPendingLogs", type: "so" },
    { id: "SOFailedLogs", type: "so" },
    { id: "SOSuccessLogs", type: "so" },

    { id: "ReturnPendingLogs", type: "return" },
    { id: "ReturnFailedLogs", type: "return" },
    { id: "ReturnSuccessLogs", type: "return" },

    { id: "PaymentPendingLogs", type: "payment" },
    { id: "PaymentFailedLogs", type: "payment" },
    { id: "PaymentSuccessLogs", type: "payment" },

    { id: "AutoStockPendingLogs", type: "autostock" },
    { id: "AutoStockFailedLogs", type: "autostock" },
    { id: "AutoStockSuccessLogs", type: "autostock" },
];

queueTables.forEach(({ id, type }) => {
    $(document)
        .off(`click.${id}Row`, `#${id} tbody tr`)
        .on(`click.${id}Row`, `#${id} tbody tr`, function () {
            if (!$.fn.DataTable.isDataTable(`#${id}`)) return;

            const rowData = $(`#${id}`).DataTable().row(this).data();
            if (!rowData) return;

            DisplayQueueInfo(type, rowData);
            console.log("dadaa", id);
        });
});

function DisplayQueueInfo(type, rowData) {
    // Fields common-ish across types
    $("#qmodal_status").text(rowData.api_status);

    switch (type) {
        case "so":
            $("#qmodal_title").text("Sales Order to FDIS");
            $("#qmodal_salesman").text(rowData.salesman_name);
            $("#qmodal_ref").text(rowData.transaction_id);
            renderQueueTable(
                "itemCodeBody",
                [rowData],
                (r) => `
                <tr>
                    <td class="text-center">${r.item_no}</td>
                    <td class="text-center">${r.um}</td>
                    <td class="text-center">${r.quantity}</td>
                </tr>`,
            );
            break;

        case "return":
            $("#qmodal_title").text("Return to FDIS");
            $("#qmodal_salesman").text(rowData.salesman_name);
            $("#qmodal_ref").text(rowData.transaction_id);
            renderQueueTable(
                "itemCodeBody",
                [rowData],
                (r) => `
                <tr>
                    <td class="text-center">${r.item_no}</td>
                    <td class="text-center">${r.reason_code}</td>
                    <td class="text-center">${r.quantity}</td>
                </tr>`,
            );
            break;

        case "payment":
            $("#qmodal_title").text("Payment to FDIS");
            $("#qmodal_ref").text(rowData.transaction_id);
            renderQueueTable(
                "itemCodeBody",
                [rowData],
                (r) => `
                <tr>
                    <td class="text-center">${r.mode}</td>
                    <td class="text-right">${r.transaction_amt}</td>
                    <td class="text-center">${r.bank}</td>
                </tr>`,
            );
            break;

        case "autostock":
            $("#qmodal_title").text("Auto Stock Transfer to FDIS");
            $("#qmodal_ref").text(rowData.transaction_id);
            renderQueueTable(
                "itemCodeBody",
                [rowData],
                (r) => `
                <tr>
                    <td class="text-center">${r.source}</td>
                    <td class="text-center">${r.destination}</td>
                    <td class="text-center">${r.quantity}</td>
                </tr>`,
            );
            break;
    }

    document.getElementById("sfaQueueDetailModal").showModal();
}

function renderQueueTable(bodyId, rows, rowTemplate) {
    $("#" + bodyId).html(rows.map(rowTemplate).join(""));
}

$(document).on("click", "#sfaRefresh", function () {
    Swal.fire({
        text: "This could take time, please wait while we process your request.",
        icon: "question",
    });
});


$(document).on("input", '[data-tables]', function () {

    const searchValue = $(this).val();
    const tableIds = $(this).data("tables").split(",");

    tableIds.forEach((tableId) => {

        if ($.fn.DataTable.isDataTable(tableId)) {

            const table = $(tableId);

            // Check whether this table is inside the active tab
            if (table.closest(".tab-content").is(":visible")) {
                table.DataTable()
                    .search(searchValue)
                    .draw();
            }

        }

    });
});

$(document).on("click","#Sync_Salesman_Dropdown",function(){

    GetSyncSalesman();
    console.log(salesmanName,"pop");
    if(salesmanName == null){
        $("#Sync_Salesman").text("Select");
    }
    else{
        $("#Sync_Salesman").text(salesmanName);
    }
});

function GetSyncSalesman() {

    ComponentHelper.dropdown().LoadCheckBoxByApi({
        url: "/salesmen",
        dropdownId: "Sync_Salesman_Transaction",
        displayField: "salesman_name",
        dataField: "salesman_id"
    });

    $(document).off("click.syncSalesman", "#Sync_Salesman_Transaction li")
        .on("click.syncSalesman", "#Sync_Salesman_Transaction li", function () {

            salesmanName = $(this).text().trim();

            console.log("Clicked salesman:", salesmanName);
        });
}

$(document).on(
    "click",
    "#Sync_Salesman_Transaction input[type='search']",
    function (e) {
        e.stopPropagation();
    }
);

