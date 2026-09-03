import TableLoader from "../../../helper/TableLoader.js";
import ComponentHelper from "../../../helper/ComponentHelper.js";
import DatePicker from "../../../helper/datePicker.js";
import "../../../helper/exportDataTable.js";

const StockRequestColumns = [
    {
        title: "TrnDate",
        data: "TrnDate"
    },
    {
        title: "MdCode",
        data: "MdCode"
    },
    {
        title: "MdSalesmanCode",
        data: "MdSalesmanCode"
    },
    {
        title: "MdName",
        data: "MdName"
    },
    {
        title: "Calls",
        data: "Calls",
        className: "dt-body-center"
    },
    {
        title: "MCP",
        data: "MCP",
        className: "dt-body-center"
    },
    {
        title: "StrikeRate",
        data: "StrikeRate"
    },
    {
        title: "Remarks",
        data: "Remarks",
        className: "dt-body-center"
    }
];

const StockRequestSampleData = [
    {
        TrnDate: "2026-08-24",
        MdCode: "MD001",
        MdSalesmanCode: "SM001",
        MdName: "Juan Dela Cruz",
        Calls: 25,
        MCP: 20,
        StrikeRate: "80%",
        Remarks: "Good"
    },
    {
        TrnDate: "2026-08-24",
        MdCode: "MD002",
        MdSalesmanCode: "SM002",
        MdName: "Pedro Santos",
        Calls: 30,
        MCP: 25,
        StrikeRate: "83.33%",
        Remarks: "Excellent"
    },
    {
        TrnDate: "2026-08-24",
        MdCode: "MD003",
        MdSalesmanCode: "SM003",
        MdName: "Maria Garcia",
        Calls: 18,
        MCP: 15,
        StrikeRate: "83.33%",
        Remarks: "Good"
    },
    {
        TrnDate: "2026-08-23",
        MdCode: "MD004",
        MdSalesmanCode: "SM004",
        MdName: "Jose Reyes",
        Calls: 22,
        MCP: 16,
        StrikeRate: "72.73%",
        Remarks: "Needs Improvement"
    },
    {
        TrnDate: "2026-08-23",
        MdCode: "MD005",
        MdSalesmanCode: "SM005",
        MdName: "Ana Mendoza",
        Calls: 28,
        MCP: 24,
        StrikeRate: "85.71%",
        Remarks: "Excellent"
    }
];

TableLoader.tableData(
    "#strikeRateTable",
    StockRequestSampleData,
    StockRequestColumns,
    {
        // scrollY: "50vh",
        // pageLength: 25
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