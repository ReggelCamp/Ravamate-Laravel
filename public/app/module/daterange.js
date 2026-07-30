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

         // Move Apply/Clear below the ranges
        $btn.on('show.daterangepicker', function (ev, picker) {
            picker.container
                .find('.drp-buttons')
                .appendTo(picker.container.find('.ranges'));
        });

$btn.on('show.daterangepicker', function (ev, picker) {
    const $container = picker.container;

    // Move the selected text above everything
    $container.find('.drp-selected').prependTo($container);
});

        // Handle Clear/Cancel - reset button text back to default
        $btn.on('cancel.daterangepicker', function () {
            $btn.text('Filter by Date');
        });
    });
});
