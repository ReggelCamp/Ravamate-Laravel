import TableLoader from "../../../helper/TableLoader.js";
import ComponentHelper from "../../../helper/ComponentHelper.js";
import DatePicker from "../../../helper/datePicker.js";
import "../../../helper/exportDataTable.js";

const SalesSummaryColumns = [
    {
        title: "#",
        data: "number"
    },
    {
        title: "SALESMAN",
        data: "salesman"
    },
    {
        title: "TARGET",
        data: "target"
    },
    {
        title: "PROD.",
        data: "prod"
    },
    {
        title: "UNPROD.",
        data: "unprod"
    },
    {
        title: "MISS",
        data: "miss"
    },
    {
        title: "FIRST",
        data: "first"
    },
    {
        title: "LAST",
        data: "last"
    },
    {
        title: "# HOURS",
        data: "hours"
    },
    {
        title: "AMOUNT",
        data: "amount"
    }
];

const sampleData = [
    {
        number: 1,
        salesman: "FPM_2_JAYSON ANDAYA",
        target: 8,
        prod: 9,
        unprod: 0,
        miss: "-",
        first: "8:11AM",
        last: "3:35PM",
        hours: "7h 24min",
        amount: "₱ 405,787.40"
    },
    {
        number: 2,
        salesman: "FPM_4_NINO LAURENTE",
        target: 15,
        prod: 9,
        unprod: 0,
        miss: "(18)",
        first: "8:51AM",
        last: "1:32PM",
        hours: "4h 41min",
        amount: "₱ 128,356.47"
    },
    {
        number: 3,
        salesman: "FPM_7_GERARD MUNDALA",
        target: 22,
        prod: 12,
        unprod: 0,
        miss: "(34)",
        first: "9:22AM",
        last: "4:56PM",
        hours: "7h 34min",
        amount: "₱ 111,256.47"
    }
];

TableLoader.tableData(
    "#rangeMonitoringTable",
    sampleData,
    SalesSummaryColumns,
    {
        scrollY: "500px"
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