// import Api from "./Api.js";

// let windowHeight = 0;
// let tableHeight = 0;

// function getPageLength() {
//     tableHeight = window.innerHeight * 0.5;
//     const rowHeight = 40;

//     return Math.max(1, Math.floor(tableHeight / rowHeight));
// };

// function getResponsiveScrollY() {
//     windowHeight = window.innerHeight;
//     if(windowHeight < 650){
//         return "35vh";
//     }
//     else if (windowHeight <= 700) {
//         return "40vh";
//     }
//     else if (windowHeight < 1000){
//         return "45vh";
//     }

//     else
//         return "50vh";

    
// }

// export default class TableLoader {
    
// static tableData(id, json, columns, options = {}) {

//     if ($.fn.DataTable.isDataTable(id)) {
//         $(id).DataTable().destroy();
//     }

//     let tableRows = json;

//     // Flatten transaction_details
//     if (options.flattenDetails) {

//         tableRows = json.flatMap(transaction => {

//             const details = transaction.transaction_details ?? [];

//             // No details
//             if (details.length === 0) {
//                 return [{
//                     ...transaction,
//                     detail_id: null,
//                     product_id: null,
//                     detail_quantity: null,
//                     detail_um: null,
//                 }];
//             }

//             // One DataTable row per detail
//             return details.map(detail => ({
//                 ...transaction,

//                 // Keep parent transaction ID
//                 transaction_id: transaction.transaction_id,

//                 // Detail values
//                 detail_id: detail.id,
//                 product_id: detail.product_id,
//                 detail_quantity: detail.quantity,
//                 detail_um: detail.u_m,
//             }));
//         });
//     }

//     const table = $(id).DataTable({
//         data: tableRows,
//         searching: true,
//         lengthChange: false,
//         responsive: false,
//         autoWidth: true,
//         scrollY: options.scrollY ?? getResponsiveScrollY(),
//         scrollX: options.scrollX ?? true,
//         scrollCollapse: true,
//         pageLength: options.pageLength ?? getPageLength(),
//         dom: '<"top">rt<"dataTable-info"ip><"clear">',
//         buttons: [ /* unchanged */ ],
//         columns: columns,
//         drawCallback: function () { /* unchanged */ },
//     });

//     setTimeout(() => {
//         table.columns.adjust();
//     }, 250);

//     const searchSelector =
//         options.searchInput || `[data-table-search="${id}"]`;

//     TableLoader.bindSearch(searchSelector, table);
//     TableLoader.getTableId(
//         id,
//         table,
//         options.onRowClick
//     );

//     return table;
// }

//     static bindSearch(selector, table) {
//         $(document)
//             .off("input.tableSearch", selector)
//             .on("input.tableSearch", selector, function () {
//                 const value = $(this).val();

//                 console.log("Searching:", value);

//                 table.search(value).draw();
//             });
//     }

//     static getTableId(TableId, table, onRowClick) {
//         $(document)
//             .off("click.tableRow", `${TableId} tbody tr`)
//             .on("click.tableRow", `${TableId} tbody tr`, function () {
//                 const row_data = table.row(this).data();
//                 if (!row_data) return;

//                 if (typeof onRowClick === "function") {
//                     onRowClick(row_data, this);
//                 } else {
//                     console.log(row_data);
//                 }
//             });
//     }

//     static loadTable(config) {
//         console.log("loadTable called");

//         Api.get({
//             url: config.url,
//             data: config.filters,

//             onSuccess: (data) => {

//                 if (
//                     typeof config.isCurrent === "function" &&
//                     !config.isCurrent()
//                 ) {
//                     return;
//                 }

//                 const rows = Array.isArray(data)
//                     ? data
//                     : (data?.data ?? []);

//                 const table = TableLoader.tableData(
//                     config.tableId,
//                     rows,
//                     config.columns,
//                     {
//                         pageLength: config.pageLength ?? getPageLength(),
//                         scrollY: config.scrollY ?? getResponsiveScrollY(),
//                         searchInput: config.searchInput,

//                         // ADD THIS
//                         flattenDetails: config.flattenDetails ?? false,
//                     },
//                 );

//                 config.table = table;

//                 if (config.onSuccess) {
//                     config.onSuccess(data, table);
//                 }
//             },
//         });
//     }
// }


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
        }

        let tableRows = json;

        // Flatten transaction_details
        if (options.flattenDetails) {

            tableRows = json.flatMap(transaction => {

                const details = transaction.transaction_details ?? [];

                // No details
                if (details.length === 0) {
                    return [{
                        ...transaction,
                        detail_id: null,
                        product_id: null,
                        detail_quantity: null,
                        detail_um: null,
                    }];
                }

                // One DataTable row per detail
                return details.map(detail => ({
                    ...transaction,

                    // Keep parent transaction ID
                    transaction_id: transaction.transaction_id,

                    // Detail values
                    detail_id: detail.id,
                    product_id: detail.product_id,
                    detail_quantity: detail.quantity,
                    detail_um: detail.u_m,
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
            buttons: [ /* unchanged */ ],
            columns: columns,
            drawCallback: function () { /* unchanged */ },
        });

        setTimeout(() => {
            table.columns.adjust();
        }, 250);

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

                if (
                    typeof config.isCurrent === "function" &&
                    !config.isCurrent()
                ) {
                    return;
                }

                let rows = Array.isArray(data)
                    ? data
                    : (data?.data ?? []);

                // Optional client-side filter hook — runs BEFORE the table
                // is rendered, so what's on screen matches what callers
                // receive in onSuccess. Pass config.filterRows to use it.
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
                    },
                );

                config.table = table;

                if (config.onSuccess) {
                    // Pass the FILTERED rows back, not the raw response,
                    // so callers' own state (e.g. `array`) matches the table.
                    config.onSuccess(rows, table);
                }
            },
        });
    }
}