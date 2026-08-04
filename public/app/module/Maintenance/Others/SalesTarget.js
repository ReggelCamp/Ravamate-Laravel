import TableLoader from "../../../helper/TableLoader.js";

const SalesTargetColumns = [
    {
        title: "Md Code",
        data: "md_code",
    },
    {
        title: "Salesman",
        data: "salesman",
    },
    {
        title: "Year",
        data: "year",
    },
    {
        title: "Month",
        data: "month",
    },
    {
        title: "sales Target",
        data: "sales_target",
    },
    {
        title: "Markup %",
        data: "markup_percentage",
    },
    {
        title: "Last Updated",
        data: "last_updated",
    },
]

TableLoader.tableData(
    "#SalesTargetDataTable",
    [],
    SalesTargetColumns,
);