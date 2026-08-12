console.log("DataTable Export JS loaded");


// ==============================
// PRINT
// ==============================

$(document).on("click", ".printBtn", function (e) {
    e.preventDefault();

    const tableId = $(this).data("table");

    if (!tableId) {
        console.error("No table ID specified");
        return;
    }

    const table = document.querySelector(tableId);

    if (!table) {
        console.error("Table not found:", tableId);
        return;
    }

    const printWindow = window.open("", "_blank");

    // Get header
    const thead = table.querySelector("thead");

    // Get body rows
    const rows = Array.from(
        table.querySelectorAll("tbody tr")
    );

    // Get footer
    const tfoot = table.querySelector("tfoot");

    // Maximum rows per page
    const rowsPerPage = 25;

    let pages = "";

    // Split rows into groups of 25
    for (let i = 0; i < rows.length; i += rowsPerPage) {

        const pageRows = rows.slice(i, i + rowsPerPage);

        pages += `
            <div class="print-page">

                <table>

                    ${thead ? thead.outerHTML : ""}

                    <tbody>
                        ${pageRows.map(row => row.outerHTML).join("")}
                    </tbody>

                    ${
                        i + rowsPerPage >= rows.length && tfoot
                            ? tfoot.outerHTML
                            : ""
                    }

                </table>

            </div>
        `;
    }

    printWindow.document.write(`
        <!DOCTYPE html>
        <html>

        <head>

           

            <style>

                @page {
                    size: A4 portrait;
                    margin: 8mm;
                }

                * {
                    box-sizing: border-box;
                }

                html,
                body {
                    margin: 0;
                    padding: 0;
                }

                body {
                    font-family: Arial, sans-serif;
                }

                .print-page {
                    width: 100%;
                    page-break-after: always;
                    break-after: page;
                }

                .print-page:last-child {
                    page-break-after: auto;
                    break-after: auto;
                }

                table {
                    width: 100%;
                    border-collapse: collapse;
                    table-layout: auto;
                }

                th,
                td {
                    border: 1px solid #000;
                    padding: 3px 4px;
                    font-size: 8px;
                }

                th {
                    text-align: center;
                    font-weight: bold;
                }

                td {
                    white-space: nowrap;
                }

                tfoot td {
                    white-space: normal;
                }

                thead {
                    display: table-header-group;
                }

                tfoot {
                    display: table-footer-group;
                }

                tr {
                    page-break-inside: avoid;
                    break-inside: avoid;
                }

                @media print {

                    .print-page {
                        page-break-after: always;
                        break-after: page;
                    }

                    .print-page:last-child {
                        page-break-after: auto;
                        break-after: auto;
                    }

                }

            </style>

        </head>

        <body>

            ${pages}

        </body>

        </html>
    `);

    printWindow.document.close();

    printWindow.focus();

    printWindow.onload = function () {

        setTimeout(() => {
            printWindow.print();
        }, 300);

    };
});

// ==============================
// EXCEL
// ==============================

$(document).on("click", ".excelBtn", function (e) {

    e.preventDefault();

    const tableId = $(this).data("table");

    if (!tableId) {
        console.error("No table ID specified");
        return;
    }

    const table = $(tableId).DataTable();

    table.button(".buttons-excel").trigger();
});
