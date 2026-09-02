import TableLoader from "../../../helper/TableLoader.js";
import ComponentHelper from "../../../helper/ComponentHelper.js";
import DatePicker from "../../../helper/datePicker.js";
import "../../../helper/exportDataTable.js";

const TransactionColumns = [
    {
        title: "Transaction Date",
        data: "transactionDate"
    },
    {
        title: "Salesman",
        data: "salesman"
    },
    {
        title: "Cust Code",
        data: "custCode"
    },
    {
        title: "Customer",
        data: "customer"
    },
    {
        title: "Reason Code",
        data: "reasonCode"
    },
    {
        title: "Remarks",
        data: "remarks"
    }
];

const sampleTransactionData = [
    {
        transactionDate: "08/01/2026 10:36 AM",
        salesman: "Nicolas Ramboyong",
        custCode: "179_FPM",
        customer: "Marife Ablay",
        reasonCode: "OUT-OF-COVERAGE",
        remarks: "Account order outside day of coverage — 15.07km away"
    },
    {
        transactionDate: "08/01/2026 11:12 AM",
        salesman: "Nicolas Ramboyong",
        custCode: "42_FPM",
        customer: "Argel Joseph E. Garcia",
        reasonCode: "STOCK-OUT",
        remarks: "Requested item not available in van stock"
    },
    {
        transactionDate: "08/02/2026 09:05 AM",
        salesman: "Alejandro Cruz",
        custCode: "03_FPM",
        customer: "Reggel Santos",
        reasonCode: "PRICE-DISPUTE",
        remarks: "Customer disputed listed unit price"
    },
    {
        transactionDate: "08/02/2026 01:47 PM",
        salesman: "Alejandro Cruz",
        custCode: "17_FPM",
        customer: "Maria Dela Cruz",
        reasonCode: "CLOSED",
        remarks: "Store closed at time of visit"
    },
    {
        transactionDate: "08/03/2026 03:20 PM",
        salesman: "Nicolas Ramboyong",
        custCode: "88_FPM",
        customer: "Junel Bautista",
        reasonCode: "NO-ORDER",
        remarks: "Customer declined to place order this cycle"
    }
];

TableLoader.tableData(
    "#unproductiveTable",
    sampleTransactionData,
    TransactionColumns,
    {
        scrollY: "50vh",
        pageLength: 25
    }
);

ComponentHelper.select().loadByApi({
    url: "/salesmen",
    selectID: "select_items",
    noDataText: "No salesman Found"
});

$(document).ready(function () {
    DatePicker.init();
});