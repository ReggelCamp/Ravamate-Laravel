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
                        "Yesterday":[moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                        "Last 7 Days": [moment().subtract(6, "days"), moment()],
                        "This Month": [
                            moment().startOf("month"),
                            moment().endOf("month"),
                        ],
                        "Last Month": [
                            moment().subtract(1, "month").startOf("month"),
                            moment().subtract(1, "month").endOf("month")
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

                // Add a date field above each calendar.  The daterangepicker
                // plugin does not render these fields by default.
                $container.find(".drp-calendar.left, .drp-calendar.right").each(function () {
                    const $calendar = $(this);
                    if (!$calendar.find(".drp-date-input").length) {
                        $calendar.prepend(`
                            <div class="drp-date-input-wrap">
                                <i class="fa-solid fa-calendar-day" aria-hidden="true"></i>
                                <input type="text" class="drp-date-input" readonly>
                            </div>
                        `);
                    }
                });

                const syncDateInputs = () => {
                    $container.find(".drp-calendar.left .drp-date-input")
                        .val(picker.startDate.format("MM/DD/YYYY"));
                    $container.find(".drp-calendar.right .drp-date-input")
                        .val(picker.endDate.format("MM/DD/YYYY"));
                };

                syncDateInputs();

                // Mirror the date currently under the pointer in the field
                // above that calendar, just like the range preview.
                const showHoveredDate = (event) => {
                    const $day = $(event.currentTarget);
                    const match = ($day.attr("data-title") || "").match(/^r(\d+)c(\d+)$/);
                    if (!match) return;

                    const calendar = $day.closest(".drp-calendar").hasClass("left")
                        ? picker.leftCalendar.calendar
                        : picker.rightCalendar.calendar;
                    const hoveredDate = calendar?.[Number(match[1])]?.[Number(match[2])];
                    if (!hoveredDate) return;

                    $day.closest(".drp-calendar").find(".drp-date-input")
                        .val(moment(hoveredDate).format("MM/DD/YYYY"));
                };

                $container
                    .off("mouseenter.dateInputs", "td.available")
                    .on("mouseenter.dateInputs", "td.available", showHoveredDate)
                    .off("mouseleave.dateInputs", ".drp-calendar")
                    .on("mouseleave.dateInputs", ".drp-calendar", syncDateInputs);

                $btn.off("apply.daterangepicker.dateInputs")
                    .on("apply.daterangepicker.dateInputs", syncDateInputs);
                $btn.off("hide.daterangepicker.dateInputs")
                    .on("hide.daterangepicker.dateInputs", function () {
                        $container.find(".drp-date-input-wrap").remove();
                    });

                // Move ranges to the right
                $container.append($container.find(".ranges"));

                // Move buttons under the ranges
                $container
                    .find(".ranges")
                    .append($container.find(".drp-buttons"));
            });

            // $btn.on("apply.daterangepicker", function (ev, picker) {
            //     const $container = picker.container;

            //     $container
            //         .find(".drp-start")
            //         .val(picker.startDate.format("MM/DD/YYYY"));

            //     $container
            //         .find(".drp-end")
            //         .val(picker.endDate.format("MM/DD/YYYY"));

            //     // Update your button text
            //     if (picker.startDate.isSame(picker.endDate, "day")) {
            //         $btn.text(picker.startDate.format("ll"));
            //     } else {
            //         $btn.text(
            //             `${picker.startDate.format("ll")} → ${picker.endDate.format("ll")}`,
            //         );
            //     }
            // });

            $btn.on("cancel.daterangepicker", function () {
                $btn.text("Filter by Date");
            });
        });
    }
}
