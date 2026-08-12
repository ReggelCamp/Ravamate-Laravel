import TableLoader from "../../../helper/TableLoader.js";
import DatePicker from "../../../helper/datePicker.js";
import "../../helper/exportDataTable.js";

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

$(document).ready(function () {
    DatePicker.init();
});