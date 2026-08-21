import TableLoader from "../../../helper/TableLoader.js";
import ComponentHelper from "../../../helper/ComponentHelper.js";
import DatePicker from "../../../helper/datePicker.js";
import "../../../helper/exportDataTable.js";

const GeoCallRateColumns = [
    {
        title: "TrnDate",
        data: "trn_date"
    },
    {
        title: "MdCode",
        data: "md_code"
    },
    {
        title: "MdSalesmanCode",
        data: "md_salesman_code"
    },
    {
        title: "MdName",
        data: "md_name"
    },
    {
        title: "Calls",
        data: "calls"
    },
    {
        title: "MCP",
        data: "mcp"
    },
    {
        title: "GeoCallRate",
        data: "geo_call_rate"
    },
    {
        title: "Remarks",
        data: "remarks"
    }
];

const geoCallRateSampleData = [
    {
        trn_date: "2026-08-05",
        md_code: "MD-1001",
        md_salesman_code: "SM-2045",
        md_name: "Juan Dela Cruz",
        calls: 12,
        mcp: 10,
        geo_call_rate: "83.33%",
        remarks: "On track"
    },
    {
        trn_date: "2026-08-05",
        md_code: "MD-1002",
        md_salesman_code: "SM-2046",
        md_name: "Maria Santos",
        calls: 15,
        mcp: 14,
        geo_call_rate: "93.33%",
        remarks: "Above target"
    },
    {
        trn_date: "2026-08-04",
        md_code: "MD-1003",
        md_salesman_code: "SM-2047",
        md_name: "Pedro Reyes",
        calls: 9,
        mcp: 6,
        geo_call_rate: "66.67%",
        remarks: "Below target"
    },
    {
        trn_date: "2026-08-03",
        md_code: "MD-1004",
        md_salesman_code: "SM-2048",
        md_name: "Ana Garcia",
        calls: 8,
        mcp: 8,
        geo_call_rate: "100.00%",
        remarks: "Perfect coverage"
    },
    {
        trn_date: "2026-08-02",
        md_code: "MD-1005",
        md_salesman_code: "SM-2049",
        md_name: "Jose Lim",
        calls: 11,
        mcp: 7,
        geo_call_rate: "63.64%",
        remarks: "Needs follow-up"
    }
];

TableLoader.tableData(
    "#geocallRateTable",
    geoCallRateSampleData,
    GeoCallRateColumns,
    {
        scrollY: "500px"
    }
);

ComponentHelper.select().loadByApi({
    url: "/salesmen",
    selectID: "select_items",
    noDataText: "No salesman Found"
});