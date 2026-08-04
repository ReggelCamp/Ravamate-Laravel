import TableLoader from "../../../helper/TableLoader.js";

const DynamicSyncLogsColumns = [
    {
        title: "Admin",
        data: "admin",
    },
    {
        title: "Module",
        data: "module",
    },
    {
        title: "Sync Date",
        data: "sync_date",
    },
];

TableLoader.tableData(
    "#AdminSyncLogsDataTable",
    [],
    DynamicSyncLogsColumns,
);