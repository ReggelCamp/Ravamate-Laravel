import Api from "./Api.js";

let windowHeight = 0;
let tableHeight = 0;

function getPageLength() {
    tableHeight = window.innerHeight * 0.5;
    const rowHeight = 40;

    return Math.max(1, Math.floor(tableHeight / rowHeight));
};

function getResponsiveScrollY() {
    windowHeight = window.innerHeight;
    if(windowHeight < 650){
        return "35vh";
    }
    else if (windowHeight <= 700) {
        return "40vh";
    }
    else if (windowHeight < 1000){
        return "45vh";
    }

    else
        return "50vh";

    
}

export default class TableLoader {
    static tableData(id, json, columns, options = {}) {
        const table = $(id).DataTable({
            data: json,

            searching: true,
            lengthChange: false,
            responsive: false,

            scrollX: options.scrollX ?? true,
            //scrollY: options.scrollY ?? "100px",
            scrollY: getResponsiveScrollY() ?? "100px",
            pageLength:getPageLength(),
            scrollCollapse: true,
            autoWidth: true,

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

             drawCallback: function () {
            const api = this.api();
            const pageInfo = api.page.info();

            const pagination = $(api.table().container())
                .find(".dt-paging");

            if (pageInfo.pages <= 1) {
                pagination.hide();
            } else {
                pagination.show();
            }

            // Keep any drawCallback passed through options
            if (typeof options.drawCallback === "function") {
                options.drawCallback.call(this, api);
            }
        },

        });
        setTimeout(() => $(id).DataTable().columns.adjust(), 250);

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
                        pageLength: getPageLength(),
                        // pageLength: config.pageLength,
                        scrollY: getResponsiveScrollY(),
                        // scrollY: config.scrollY,
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
