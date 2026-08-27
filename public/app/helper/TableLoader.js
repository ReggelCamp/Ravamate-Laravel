import Api from "./Api.js";

export default class TableLoader {
    static tableData(id, json, columns, options = {}) {
        const table = $(id).DataTable({
            data: json,

            searching: true,
            lengthChange: false,
            responsive: true,

            scrollX: true,
            scrollY: options.scrollY ?? "100px",
            scrollCollapse: true,

            dom: '<"top">rt<"dataTable-info"ip><"clear">',

            buttons: [
                {
                    extend: "copy",
                    className: "dt-hidden-copy",
                },
                {
                    extend: "csv",
                    className: "dt-hidden-csv",
                },
                {
                    extend: "excel",
                    text: "Export Excel",
                    className: "dt-hidden-excel",
                },
                {
                    extend: "print",
                    className: "dt-hidden-print",
                },
            ],

            columns,

            ...options,
        });

        const searchSelector =
            options.searchInput || `[data-table-search="${id}"]`;

        TableLoader.bindSearch(searchSelector, table);

        TableLoader.getTableId(id, table, options.onRowClick);

        return table;
    }

    static bindSearch(selector, table) {
        $(document)
            .off("input.tableSearch", selector)
            .on("input.tableSearch", selector, function () {
                const value = $(this).val();

                console.log("Searching:", value);

                table.search(value).draw();
            });
    }

    static getTableId(TableId, table, onRowClick) {
        $(document)
            .off("click.tableRow", `${TableId} tbody tr`)
            .on("click.tableRow", `${TableId} tbody tr`, function () {
                const row_data = table.row(this).data();
                if (!row_data) return;

                if (typeof onRowClick === "function") {
                    onRowClick(row_data, this);
                } else {
                    console.log(row_data);
                }
            });
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
                        scrollY: config.scrollY,
                        searchInput: config.searchInput,
                    },
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
