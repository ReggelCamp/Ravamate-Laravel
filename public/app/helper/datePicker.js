export default class DatePicker {
    static init(selector = ".js-daterangepicker") {
        $(selector).each(function () {
            const $btn = $(this);
            const $modal = $btn.closest(".modal");

            $btn.daterangepicker(
                {
                    parentEl: $modal.length ? $modal : "body",
                    showWeekNumbers: false,
                    alwaysShowCalendars: true,
                    autoUpdateInput: false,
                    opens: "left",
                    locale: {
                        format: "MMM DD, YYYY",
                        cancelLabel: "Clear",
                    },
                    ranges: {
                        Today: [moment(), moment()],
                        "Last 7 Days": [moment().subtract(6, "days"), moment()],
                        "This Month": [
                            moment().startOf("month"),
                            moment().endOf("month"),
                        ],
                    },
                },
                function (start, end) {
                    if (start.isSame(end, "day")) {
                        $btn.text(start.format("ll"));
                    } else {
                        $btn.text(
                            `${start.format("ll")} → ${end.format("ll")}`,
                        );
                    }
                },
            );

            $btn.on("show.daterangepicker", function (ev, picker) {
                const $container = picker.container;

                // Move ranges to the right
                $container.append($container.find(".ranges"));

                // Move buttons under the ranges
                $container
                    .find(".ranges")
                    .append($container.find(".drp-buttons"));
            });

            $btn.on("apply.daterangepicker", function (ev, picker) {
                const $container = picker.container;

                $container
                    .find(".drp-start")
                    .val(picker.startDate.format("MM/DD/YYYY"));

                $container
                    .find(".drp-end")
                    .val(picker.endDate.format("MM/DD/YYYY"));

                // Update your button text
                if (picker.startDate.isSame(picker.endDate, "day")) {
                    $btn.text(picker.startDate.format("ll"));
                } else {
                    $btn.text(
                        `${picker.startDate.format("ll")} → ${picker.endDate.format("ll")}`,
                    );
                }
            });

            $btn.on("cancel.daterangepicker", function () {
                $btn.text("Filter by Date");
            });
        });
    }
}
