import Api from "./Api.js";

let windowHeight = 0;
let tableHeight = 0;

function getPageLength() {
    tableHeight = window.innerHeight * 0.5;
    const rowHeight = 34; // 13px text + 8px top/bottom padding

    return Math.max(1, Math.floor(tableHeight / rowHeight));
};

function getResponsiveScrollY() {
    windowHeight = window.innerHeight;
    if (windowHeight < 650) {
        return "35vh";
    }
    else if (windowHeight <= 700) {
        return "40vh";
    }
    else if (windowHeight < 1000) {
        return "45vh";
    }
    else
        return "50vh";
}

export default class TableLoader {

    static tableData(id, json, columns, options = {}) {

        if ($.fn.DataTable.isDataTable(id)) {
            $(id).DataTable().destroy();
            $(id).empty(); // clear old thead/tbody so re-init starts clean
        }

        let tableRows = json;

        // Flatten transaction_details
        if (options.flattenDetails) {
            const field = options.flattenField ?? "transaction_details";

            tableRows = json.flatMap(parent => {
                const details = parent[field] ?? [];

                if (details.length === 0) {
                    return [{ ...parent }];
                }

                return details.map(detail => ({
                    ...parent,
                    ...detail,
                }));
            });
        }

        const table = $(id).DataTable({
            data: tableRows,
            searching: true,
            lengthChange: false,
            responsive: false,
            autoWidth: true,
            scrollY: options.scrollY ?? getResponsiveScrollY(),
            scrollX: options.scrollX ?? true,
            scrollCollapse: true,
            pageLength: options.pageLength ?? getPageLength(),
            dom: '<"top">rt<"dataTable-info"ip><"clear">',
            buttons: [ /* keep your original buttons config here */ ],
            columns: columns,
            drawCallback: function () { /* keep your original drawCallback here */ },
        });

        // Re-measure once layout has settled
        setTimeout(() => table.columns.adjust(), 250);
        document.fonts?.ready.then(() => table.columns.adjust());

        // Re-measure on window resize (namespaced so it never stacks)
        $(window).off("resize.dtAdjust").on("resize.dtAdjust", () => {
            table.columns.adjust();
        });

        const searchSelector =
            options.searchInput || `[data-table-search="${id}"]`;

        TableLoader.bindSearch(searchSelector, table);
        TableLoader.getTableId(
            id,
            table,
            options.onRowClick
        );

        return table;
    }

    static bindSearch(selector, table) {
        $(document)
            .off("input.tableSearch", selector)
            .on("input.tableSearch", selector, function () {
                const value = $(this).val();
                table.search(value).draw();
            });
    }

    // static getTableId(TableId, table, onRowClick) {
    //     $(document)
    //         .off("click.tableRow", `${TableId} tbody tr`)
    //         .on("click.tableRow", `${TableId} tbody tr`, function () {
    //             const row_data = table.row(this).data();
    //             if (!row_data) return;

    //             if (typeof onRowClick === "function") {
    //                 onRowClick(row_data, this);
    //             } else {
    //                 console.log(row_data);
    //             }
    //         });
    // }

    static getTableId(TableId, table, onRowClick) {
    $(document).off("click.tableRow", `${TableId} tbody tr`);

    if (typeof onRowClick !== "function") {
        $(TableId).removeClass("table-clickable");
        return;
    }

    $(TableId).addClass("table-clickable");

    $(document)
        .on("click.tableRow", `${TableId} tbody tr`, function () {
            const row_data = table.row(this).data();

            if (!row_data) return;

            onRowClick(row_data, this);
        });
}

    static loadTable(config) {
        Api.get({
            url: config.url,
            data: config.filters,

            onSuccess: (data) => {

                if (
                    typeof config.isCurrent === "function" &&
                    !config.isCurrent()
                ) {
                    return;
                }

                let rows = Array.isArray(data)
                    ? data
                    : (data?.data ?? []);

                // Optional client-side filter hook, runs BEFORE render
                if (typeof config.filterRows === "function") {
                    rows = config.filterRows(rows);
                }

                const table = TableLoader.tableData(
                    config.tableId,
                    rows,
                    config.columns,
                    {
                        pageLength: config.pageLength ?? getPageLength(),
                        scrollY: config.scrollY ?? getResponsiveScrollY(),
                        searchInput: config.searchInput,
                        flattenDetails: config.flattenDetails ?? false,
                        flattenField: config.flattenField,
                    },
                );

                config.table = table;

                if (config.onSuccess) {
                    config.onSuccess(rows, table);
                }
            },
        });
    }
}