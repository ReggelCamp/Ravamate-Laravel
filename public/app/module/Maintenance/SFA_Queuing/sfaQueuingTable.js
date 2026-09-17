import TableLoader from "../../../helper/TableLoader.js";
import DatePicker from "../../../helper/datePicker.js";
import "../../../helper/exportDataTable.js";
import ComponentHelper from "../../../helper/ComponentHelper.js"
import Api from "../../../helper/Api.js";

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
        data: null,
        render: function(row){
            const statusMap = {
                PENDING: '<span class="badge badge-warning">To Sync</span>',
                SYNCED: '<span class="badge badge-success">Synced</span>',
                FAILED: '<span class="badge badge-error">Failed</span>',
            };
            return statusMap[row.api_status] || row.api_status;
        }
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
        data: "detail_quantity"
    },
    {
        title: "API Status",
        data: null,
        render: function(row){
            const statusMap = {
                PENDING: '<span class="badge badge-warning">To Sync</span>',
                SYNCED: '<span class="badge badge-success">Synced</span>',
                FAILED: '<span class="badge badge-error">Failed</span>',
            };
            return statusMap[row.api_status] || row.api_status;
        }
    },
    {
        title: "API Response",
        data: "api_response",
        className: "api-response-column",
        width: "200px",
        render: function(data) {
            return `<div class="api-response-text">${data ?? ""}</div>`;
        }
    },
    {
        title: "Last Updated",
        data: null,
        render: function(row) {
            const updatedAt = row.transaction_details?.[0]?.updated_at; 

            if (!updatedAt) return "N/A";

            return moment(updatedAt).format("MMM DD, YYYY h:mm A");
        }
    },
    {
        title: "Date Added",
        data: null,
        render: function(row) {
            const createdAt = row.transaction_details?.[0]?.created_at; 

            if (!createdAt) return "N/A";

            return moment(createdAt).format("MMM DD, YYYY h:mm A");
        }
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
        data: null,
        render: function(row){
            const statusMap = {
                PENDING: '<span class="badge badge-warning">To Sync</span>',
                SYNCED: '<span class="badge badge-success">Synced</span>',
                FAILED: '<span class="badge badge-error">Failed</span>',
            };
            return statusMap[row.api_status] || row.api_status;
        }
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
        data: null,
        render: function(row){
            const statusMap = {
                PENDING: '<span class="badge badge-warning">To Sync</span>',
                SYNCED: '<span class="badge badge-success">Synced</span>',
                FAILED: '<span class="badge badge-error">Failed</span>',
            };
            return statusMap[row.api_status] || row.api_status;
        }
    },
    {
        title: "API Response",
        data: null,
        className: "whitespace-normal break-words",
        render: function(){
            return '<div class="whitespace-normal break-words max-w-xs">' +
                "" +
                '</div>';
        }
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
        data: "salesman_name",
    },
    {
        title: "Customer",
        data: "customercode",
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
function loadSoTables() {

    TableLoader.loadTable({
        url: "transaction/getSoPendingTransaction",
        tableId:"#SOPendingLogs",
        columns: SoToFdisColumns,
        flattenDetails: true,
        onSuccess: function (response) {
            const count = response.count ?? 0;

            $("#SOPendingLogsTab").attr(
                "aria-label",
                `Pending Logs (${count})`
            );
        }
    })
    TableLoader.loadTable({
        url: "transaction/getSoFailedTransaction",
        tableId:"#SOFailedLogs",
        columns: SoToFdisColumns,
        flattenDetails: true,
        onSuccess: function (response) {

            const count = response.count ?? 0;

            $("#SOFailedLogsTab").attr(
                "aria-label",
                `Failed Logs (${count})`
            );
        }
    })
    TableLoader.loadTable({
        url: "transaction/getSoSuccessTransaction",
        tableId:"#SOSuccessLogs",
        columns: SoToFdisColumns,
        flattenDetails: true,
        onSuccess: function(response, table) {

            const count = table.rows().count();

            $("#SOSuccessLogsTab").attr(
                "aria-label",
                `Success Logs (${count})`
            );
        }
    })

    //transactionModal
    TableLoader.loadTable({
        //url: "transaction/getFdisTransaction",
        url: "transaction/getSoPendingTransaction",
        tableId: "#TransactionTable",
        columns: SyncTransactionsColumns,
        flattenDetails: true,
        searchInput: "#TransactionTableSearch",
        
    });
}

loadSoTables();

$(document).on("click", "#syncFdis", function () {
    const selectedTransactions = getSelectedTransactions();

    document.getElementById('TransactionModal')?.close(); // close the native dialog first

    Swal.fire({
        title: 'Syncing…',
        text: 'Syncing transactions, please wait.',
        allowOutsideClick: false,
        didOpen: () => Swal.showLoading(),
    });

    Api.get({
        url: "transaction/syncTransaction",
        data: { transaction_ids: selectedTransactions },
        onSuccess: function (response) {
            Swal.close();
            loadSoTables();
        }
    });
});

$(document).on("click", "#ReProcess_btn", function () {

    Api.post({
        url: "transaction/retryAllFailed",

        onSuccess: function (response) {

            console.log("Reprocess successful:", response);

            loadSoTables();
        },

        onError: function (error) {

            console.log("Reprocess failed:", error);

        }
    });

});


$(document).on("click","#syncSalesman",function(){
    const selectedSalesmen = getSelectedSalesmanIds();

    // Nothing ticked -> don't fire an empty sync request
    if (!selectedSalesmen.length) {
        Swal.fire({
            title: 'No Salesman Selected',
            text: 'Please select at least one salesman to sync.',
            icon: 'warning',
        });
        return;
    }

    document.getElementById('SalesmanModal')?.close(); // close the native dialog first

    Swal.fire({
        title: 'Syncing…',
        text: 'Syncing transactions, please wait.',
        allowOutsideClick: false,
        didOpen: () => Swal.showLoading(),
    });

    Api.get({
        url: "transaction/syncTransaction",
        data: { salesman_ids: selectedSalesmen },
        onSuccess: function (response) {
            Swal.close();
            GetSyncSalesman(); // refresh the salesman list after a sync
            loadSoTables();
        },
        onError: function (error) {
            Swal.fire({
                title: 'Sync Failed',
                text: error?.responseJSON?.message
                    ?? 'Unable to sync the selected salesmen.',
                icon: 'error',
            });
        }
    });
});


//return
TableLoader.loadTable({
 url: "transaction/getSoSuccessTransaction",
    tableId:"#ReturnPendingLogs",
    columns: ReturnLogsColumns
})
TableLoader.loadTable({
 url: "transaction/getSoSuccessTransaction",
    tableId: "#ReturnFailedLogs",
    columns: ReturnLogsColumns,
});
TableLoader.loadTable({
 url: "transaction/getSoSuccessTransaction",
    tableId: "#ReturnSuccessLogs",
    columns: ReturnLogsColumns,
});

//payment
TableLoader.loadTable({
     url: "transaction/getSoSuccessTransaction",
    tableId:"#PaymentPendingLogs",
    columns: PaymentLogsColumns
})
TableLoader.loadTable({
     url: "transaction/getSoSuccessTransaction",
    tableId: "#PaymentFailedLogs",
    columns: PaymentLogsColumns,
});
TableLoader.loadTable({
    url: "transaction/getSoSuccessTransaction",
    tableId: "#PaymentSuccessLogs",
    columns: PaymentLogsColumns,
});

//autostock
TableLoader.loadTable({
     url: "transaction/getSoSuccessTransaction",
    tableId:"#AutoStockPendingLogs",
    columns: AutoLogsColumns
})
TableLoader.loadTable({
 url: "transaction/getSoSuccessTransaction",
    tableId: "#AutoStockFailedLogs",
    columns: AutoLogsColumns,
});
TableLoader.loadTable({
    url: "transaction/getSoSuccessTransaction",
    tableId: "#AutoStockSuccessLogs",
    columns: AutoLogsColumns,
});


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

function reloadPendingTable(tableId, url, onDone) {
    Api.get({
        url:"/transaction/getSoPendingTransaction",
        onSuccess: (data) => {
            const rows = Array.isArray(data) ? data : (data?.data ?? []);

            if ($.fn.DataTable.isDataTable(tableId)) {
                const table = $(tableId).DataTable();
                table.clear();
                table.rows.add(rows);
                table.draw();
                table.columns.adjust();
            }

            if (typeof onDone === "function") onDone();
        },
        onError: () => {
            if (typeof onDone === "function") onDone();
        },
    });
}

$(document).on("click", "#sfaRefresh", function () {
    Swal.fire({
        title: 'Refreshing…',
        text: 'Reloading pending transactions, please wait.',
        allowOutsideClick: false,
        didOpen: () => Swal.showLoading(),
    });

    // Reload all four Pending tables
    let completed = 0;
    const total = 4;

    function onDone() {
        completed++;
        if (completed >= total) {
            Swal.fire({
                title: 'Refreshed',
                text: 'Pending records have been updated.',
                icon: 'success',
                timer: 1500,
                showConfirmButton: false,
            });
        }
    }

    reloadPendingTable('#SOPendingLogs',        'transaction/getPendingTransaction', onDone);
    reloadPendingTable('#ReturnPendingLogs',     'transaction/getPendingTransaction', onDone);
    reloadPendingTable('#PaymentPendingLogs',    'transaction/getPendingTransaction', onDone);
    reloadPendingTable('#AutoStockPendingLogs',  'transaction/getPendingTransaction', onDone);
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

// ---------------------------------------------------------------------------
// Sync Per Salesman
// ---------------------------------------------------------------------------

function getSelectedSalesmanIds() {
    return $("#Sync_Salesman_Transaction .dropdown_checkbox:checked")
        .map(function () {
            return $(this).val();
        })
        .get()
        .filter(function (salesmanId) {
            return salesmanId !== "" && salesmanId != null;
        });
}

// Reflects the ticked salesmen on the dropdown trigger label
function updateSyncSalesmanLabel() {
const selectedLabels = $("#Sync_Salesman_Transaction .dropdown_checkbox:checked")
        .map(function () {
            return $(this).data("label");
        })
        .get()
        .filter(function (label) {
            return label !== "" && label != null;
        });

    $("#Sync_Salesman").text(
        selectedLabels.length ? selectedLabels.join(", ") : "Select"
    );
}

function GetSyncSalesman() {

    // Keep the salesmen the user already ticked before the list is re-rendered
    const checkedSalesmen = getSelectedSalesmanIds();

    ComponentHelper.dropdown().LoadCheckBoxByApi({
        url: "transaction/getSoPendingSalesman",
        dropdownId: "Sync_Salesman_Transaction",
        displayField: "salesman_name",
        dataField: "salesman_id",
        noDataText: "No Pending Salesman Found",
        onSuccess: function () {

            // Re-check the previously selected salesmen
            $("#Sync_Salesman_Transaction .dropdown_checkbox").each(function () {
                $(this).prop(
                    "checked",
                    checkedSalesmen.includes($(this).val())
                );
            });

            updateSyncSalesmanLabel();
        }
    });
}

// Load a fresh salesman list every time the modal is opened
$(document).ready(function () {
    const salesmanModal = document.getElementById("SalesmanModal");

    salesmanModal?.addEventListener("toggle", function () {
        if (salesmanModal.open) {
            GetSyncSalesman();
        }
    });
});

// Keep the trigger label in sync with the ticked checkboxes
$(document).on(
    "change.syncSalesman",
    "#Sync_Salesman_Transaction .dropdown_checkbox",
    updateSyncSalesmanLabel
);

$(document).on(
    "click",
    "#Sync_Salesman_Transaction input[type='search']",
    function (e) {
        e.stopPropagation();
    }
);

