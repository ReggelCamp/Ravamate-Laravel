$(document).on('click', '.printBtn, .csvBtn, .excelBtn, .copyBtn', function (e) {

    e.preventDefault();

    const button = $(this);
    const tableId = button.data('table');

    if (!tableId) {
        console.error('No table ID specified.');
        return;
    }

    const table = $(tableId).DataTable();

    if (button.hasClass('printBtn')) {
        table.button('.dt-hidden-print').trigger();
    }

    else if (button.hasClass('csvBtn')) {
        table.button('.dt-hidden-csv').trigger();
    }

    else if (button.hasClass('excelBtn')) {
        table.button('.dt-hidden-excel').trigger();
    }

    else if (button.hasClass('copyBtn')) {
        table.button('.dt-hidden-copy').trigger();
    }
});