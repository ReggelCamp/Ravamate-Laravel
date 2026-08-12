import Api from "./Api.js";

export default class TableLoader {

    static tableData(id, json, columns, options = {}) {

        const table = $(id).DataTable({
            data: json,

            searching: true,
            lengthChange: false,
            responsive: true,

            scrollX: true,
            scrollY: options.scrollY ?? '100px',
            scrollCollapse: true,

            dom: '<"top">rt<"dataTable-info"ip><"clear">',

            buttons: [
                {
                    extend: 'copy',
                    className: 'dt-hidden-copy'
                },
                {
                    extend: 'csv',
                    className: 'dt-hidden-csv'
                },
                {
                    extend: 'excel',
                    text: 'Export Excel',
                    className: 'dt-hidden-excel'
                },
                {
                    extend: 'print',
                    className: 'dt-hidden-print'
                }
            ],

            columns,

            ...options
        });

        return table;
    }


    static loadTable(config) {

        console.log("loadTable called");

        Api.get({
            url: config.url,
            data: config.filters,

            onSuccess: (data) => {

                const table = TableLoader.tableData(
                    config.tableId,
                    data,
                    config.columns,
                    {
                        pageLength: config.pageLength,
                        scrollY: config.scrollY
                    }
                );

                // Store the DataTable instance if you need it
                config.table = table;

                if (config.onSuccess) {
                    config.onSuccess(data, table);
                }
            },
        });
    }
}