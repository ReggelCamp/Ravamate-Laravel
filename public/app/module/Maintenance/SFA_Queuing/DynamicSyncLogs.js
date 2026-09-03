import TableLoader from "../../../helper/TableLoader.js";
import DatePicker from "../../../helper/datePicker.js";
import "../../../helper/exportDataTable.js";

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

const DynamicSyncLogsSampleData = [
    {
        admin: "Juan Dela Cruz",
        module: "Sales",
        sync_date: "2026-08-14 08:30:15",
    },
    {
        admin: "Maria Santos",
        module: "Inventory",
        sync_date: "2026-08-14 09:15:42",
    },
    {
        admin: "Pedro Garcia",
        module: "Customer",
        sync_date: "2026-08-13 10:05:27",
    },
    {
        admin: "Anna Reyes",
        module: "Orders",
        sync_date: "2026-08-13 13:42:18",
    },
    {
        admin: "Michael Torres",
        module: "Products",
        sync_date: "2026-08-12 14:20:33",
    },
    {
        admin: "James Fernandez",
        module: "Salesman",
        sync_date: "2026-08-12 16:08:51",
    },
    {
        admin: "Robert Mendoza",
        module: "Transactions",
        sync_date: "2026-08-11 09:47:06",
    },
    {
        admin: "Sofia Navarro",
        module: "Payments",
        sync_date: "2026-08-11 11:32:45",
    },
    {
        admin: "Daniel Ramos",
        module: "Routes",
        sync_date: "2026-08-10 15:18:29",
    },
    {
        admin: "Christine Flores",
        module: "Reports",
        sync_date: "2026-08-10 17:05:12",
    },
];

TableLoader.tableData(
    "#AdminSyncLogsDataTable",
    DynamicSyncLogsSampleData,
    DynamicSyncLogsColumns,
    {

    }
);

$(document).ready(function () {
    DatePicker.init();
});