import TableLoader from "../helper/TableLoader.js";
import { loadDropdown } from "../helper/DropDownLoader.js";

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

TableLoader.loadTable({
    url: "getDCRtable",
    tableId: "#PendingLogs",
    columns: ReturnLogsColumns,
    pageLength: 5,

    onSuccess: (data) => {
    },
});

TableLoader.loadTable({
    url: "getDCRtable",
    tableId: "#FailedLogs",
    columns: ReturnLogsColumns,
    pageLength: 5,

    onSuccess: (data) => {
    },
});

TableLoader.loadTable({
    url: "getDCRtable",
    tableId: "#SuccessLogs",
    columns: ReturnLogsColumns,
    pageLength: 5,

    onSuccess: (data) => {
    },
});

$(".container_trigger").on("click", function(){
    $(".table_container").fadeOut(100);
    $($(this).data().id).fadeIn(100);
});

$(".container_trigger")[0].click();
