import Api from "../helper/Api.js";
import MyDataTables from "./../module/dataTable.js";

export function loadTable(config) {
    console.log("loadTable called");

    Api.get({
        url: config.url,
        data: config.filters,

        onSuccess: (data) => {
            MyDataTables.tableData(config.tableId, data, config.columns, {
                pageLength: config.pageLength,
            });

            if (config.onSuccess) {
                config.onSuccess(data);
            }
        },
    });
}
