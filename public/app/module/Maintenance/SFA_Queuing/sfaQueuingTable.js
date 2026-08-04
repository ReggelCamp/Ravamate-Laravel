import TableLoader from "../../../helper/TableLoader.js";

const ReturnLogsColumns = [
    {
        title: "Transaction ID",
        data: "transactionId",
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
        data: "last_updated",
    },
    {
        title: "Date Added",
        data: "date_added",
    },
];

const SoToFdisColumns = [
    {
        title: "Transaction ID",
        data: "transactionId",
    },
    {
        title: "Salesman",
        data: "salesman_name",
    },
    {
        title: "Order Type",
        data: "order_type",
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
        data: "last_updated",
    },
    {
        title: "Date Added",
        data: "date_added",
    },
];

const PaymentLogsColumns = [
     {
        title: "Transaction ID",
        data: "transactionId",
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
        data: "bank",
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
        data: "last_updated",
    },
    {
        title: "Date Added",
        data: "date_added",
    },
];

const AutoLogsColumns = [
     {
        title: "Transaction ID",
        data: "transactionId",
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
        data: "last_updated",
    },
    {
        title: "Date Added",
        data: "date_added",
    },
];


// SOLogsColumns
TableLoader.loadTable({
    url: "getDCRtable",
    tableId: "#SOPendingLogs",
    columns: SoToFdisColumns,
    pageLength: 5,

    onSuccess: (data) => {
    },
});

TableLoader.loadTable({
    url: "getDCRtable",
    tableId: "#SOFailedLogs",
    columns:  SoToFdisColumns,
    pageLength: 5,

    onSuccess: (data) => {
    },
});

TableLoader.loadTable({
    url: "getDCRtable",
    tableId: "#SOSuccessLogs",
    columns:  SoToFdisColumns,
    pageLength: 5,

    onSuccess: (data) => {
    },
});

// ReturnLogsColumns
TableLoader.loadTable({
    url: "getDCRtable",
    tableId: "#ReturnPendingLogs",
    columns: ReturnLogsColumns,
    pageLength: 5,

    onSuccess: (data) => {
    },
});

TableLoader.loadTable({
    url: "getDCRtable",
    tableId: "#ReturnFailedLogs",
    columns: ReturnLogsColumns,
    pageLength: 5,

    onSuccess: (data) => {
    },
});

TableLoader.loadTable({
    url: "getDCRtable",
    tableId: "#ReturnSuccessLogs",
    columns: ReturnLogsColumns,
    pageLength: 5,

    onSuccess: (data) => {
    },
});

// PaymentLogColumns
TableLoader.loadTable({
    url: "getDCRtable",
    tableId: "#PaymentPendingLogs",
    columns: PaymentLogsColumns,
    pageLength: 5,

    onSuccess: (data) => {
    },
});

TableLoader.loadTable({
    url: "getDCRtable",
    tableId: "#PaymentFailedLogs",
    columns: PaymentLogsColumns,
    pageLength: 5,

    onSuccess: (data) => {
    },
});

TableLoader.loadTable({
    url: "getDCRtable",
    tableId: "#PaymentSuccessLogs",
    columns: PaymentLogsColumns,
    pageLength: 5,

    onSuccess: (data) => {
    },
});

// AutoLogsColumns
TableLoader.loadTable({
    url: "getDCRtable",
    tableId: "#AutoStockPendingLogs",
    columns: AutoLogsColumns,
    pageLength: 5,

    onSuccess: (data) => {
    },
});

TableLoader.loadTable({
    url: "getDCRtable",
    tableId: "#AutoStockFailedLogs",
    columns: AutoLogsColumns,
    pageLength: 5,

    onSuccess: (data) => {
    },
});

TableLoader.loadTable({
    url: "getDCRtable",
    tableId: "#AutoStockSuccessLogs",
    columns: AutoLogsColumns,
    pageLength: 5,

    onSuccess: (data) => {
    },
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