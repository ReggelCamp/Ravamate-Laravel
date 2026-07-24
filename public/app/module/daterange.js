$(document).ready(function () {
    $('.js-daterangepicker').each(function () {
        const $btn = $(this);

        $btn.daterangepicker({
            showWeekNumbers: false,
            alwaysShowCalendars: true,
            autoUpdateInput: false,
            opens: 'left',
            locale: {
                format: 'MMM DD, YYYY',
                cancelLabel: 'Clear'
            },
            ranges: {
                'Today': [moment(), moment()],
                'Last 7 Days': [moment().subtract(6, 'days'), moment()],
                'This Month': [moment().startOf('month'), moment().endOf('month')]
            }
        }, function (start, end) {
            if (start.format('L') === end.format('L')) {
                $btn.text(start.format('ll'));
            } else {
                $btn.text(`${start.format('ll')} → ${end.format('ll')}`);
            }
        });

        // Handle Clear/Cancel - reset button text back to default
        $btn.on('cancel.daterangepicker', function () {
            $btn.text('Filter by Date');
        });
    });
});
