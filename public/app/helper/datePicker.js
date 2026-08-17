export default class DatePicker {
    static init(selector = ".js-daterangepicker") {
        $(selector).each(function () {
            const $btn = $(this);
            const $modal = $btn.closest(".modal");

            // Read whether this specific date picker should be single-date
            const singleDate = $btn.data("single-date") === true;
            const opens = $btn.data("opens") || "left";

            $btn.daterangepicker(
                {
                    parentEl: $modal.length ? $modal : "body",

                    // TRUE  = single date
                    // FALSE = date range
                    singleDatePicker: singleDate,

                    showWeekNumbers: false,
                    alwaysShowCalendars: true,
                    autoUpdateInput: false,
                    opens: open,

                    locale: {
                        format: "MMM DD, YYYY",
                        cancelLabel: "Clear",
                    },

                    // Only show ranges when using range mode
                    ...(singleDate
                        ? {}
                        : {
                              ranges: {
                                  Today: [
                                      moment(),
                                      moment(),
                                  ],

                                  Yesterday: [
                                      moment().subtract(1, "days"),
                                      moment().subtract(1, "days"),
                                  ],

                                  "Last 7 Days": [
                                      moment().subtract(6, "days"),
                                      moment(),
                                  ],

                                  "This Month": [
                                      moment().startOf("month"),
                                      moment().endOf("month"),
                                  ],

                                  "Last Month": [
                                      moment()
                                          .subtract(1, "month")
                                          .startOf("month"),

                                      moment()
                                          .subtract(1, "month")
                                          .endOf("month"),
                                  ],
                              },
                          }),
                },

                function (start, end) {

                    // ==========================
                    // SINGLE DATE
                    // ==========================

                    if (singleDate) {
                        $btn.text(
                            `${start.format("ddd").toUpperCase()} | ${start.format(
                                "YYYY-MM-DD"
                            )}`
                        );

                        return;
                    }

                    // ==========================
                    // DATE RANGE
                    // ==========================

                    if (start.isSame(end, "day")) {
                        $btn.text(start.format("ll"));
                    } else {
                        $btn.text(
                            `${start.format("ll")} → ${end.format("ll")}`
                        );
                    }
                }
            );

            // ==========================================
            // SHOW DATE PICKER
            // ==========================================

            $btn.on("show.daterangepicker", function (ev, picker) {
                const $container = picker.container;

                // ==========================================
                // ADD CUSTOM DATE INPUT
                // ==========================================

                $container
                    .find(".drp-calendar.left, .drp-calendar.right")
                    .each(function () {

                        const $calendar = $(this);

                        if (!$calendar.find(".drp-date-input").length) {
                            $calendar.prepend(`
                                <div class="drp-date-input-wrap">
                                    <i
                                        class="fa-solid fa-calendar-day"
                                        aria-hidden="true"
                                    ></i>

                                    <input
                                        type="text"
                                        class="drp-date-input"
                                        readonly
                                    >
                                </div>
                            `);
                        }
                    });

                // ==========================================
                // SYNC DATE INPUTS
                // ==========================================

                const syncDateInputs = () => {

                    // LEFT CALENDAR
                    $container
                        .find(".drp-calendar.left .drp-date-input")
                        .val(
                            picker.startDate.format("MM/DD/YYYY")
                        );

                    // RIGHT CALENDAR only exists in range mode
                    if (!singleDate) {
                        $container
                            .find(".drp-calendar.right .drp-date-input")
                            .val(
                                picker.endDate.format("MM/DD/YYYY")
                            );
                    }
                };

                syncDateInputs();

                // ==========================================
                // HOVER DATE
                // ==========================================

                const showHoveredDate = (event) => {

                    const $day = $(event.currentTarget);

                    const match = (
                        $day.attr("data-title") || ""
                    ).match(/^r(\d+)c(\d+)$/);

                    if (!match) {
                        return;
                    }

                    const $calendarElement =
                        $day.closest(".drp-calendar");

                    let calendar;

                    if ($calendarElement.hasClass("left")) {

                        calendar =
                            picker.leftCalendar.calendar;

                    } else {

                        calendar =
                            picker.rightCalendar.calendar;
                    }

                    const hoveredDate =
                        calendar?.[
                            Number(match[1])
                        ]?.[
                            Number(match[2])
                        ];

                    if (!hoveredDate) {
                        return;
                    }

                    $calendarElement
                        .find(".drp-date-input")
                        .val(
                            moment(hoveredDate).format(
                                "MM/DD/YYYY"
                            )
                        );
                };

                // ==========================================
                // MOUSE ENTER
                // ==========================================

                $container
                    .off(
                        "mouseenter.dateInputs",
                        "td.available"
                    )
                    .on(
                        "mouseenter.dateInputs",
                        "td.available",
                        showHoveredDate
                    );

                // ==========================================
                // MOUSE LEAVE
                // ==========================================

                $container
                    .off(
                        "mouseleave.dateInputs",
                        ".drp-calendar"
                    )
                    .on(
                        "mouseleave.dateInputs",
                        ".drp-calendar",
                        syncDateInputs
                    );

                // ==========================================
                // APPLY
                // ==========================================

                $btn
                    .off(
                        "apply.daterangepicker.dateInputs"
                    )
                    .on(
                        "apply.daterangepicker.dateInputs",
                        function () {

                            syncDateInputs();

                            // Single date
                            if (singleDate) {

                                $btn.text(
                                    `${picker.startDate
                                        .format("ddd")
                                        .toUpperCase()} | ${picker.startDate.format(
                                        "YYYY-MM-DD"
                                    )}`
                                );

                                return;
                            }

                            // Range
                            if (
                                picker.startDate.isSame(
                                    picker.endDate,
                                    "day"
                                )
                            ) {

                                $btn.text(
                                    picker.startDate.format("ll")
                                );

                            } else {

                                $btn.text(
                                    `${picker.startDate.format(
                                        "ll"
                                    )} → ${picker.endDate.format(
                                        "ll"
                                    )}`
                                );
                            }
                        }
                    );

                // ==========================================
                // HIDE
                // ==========================================

                $btn
                    .off(
                        "hide.daterangepicker.dateInputs"
                    )
                    .on(
                        "hide.daterangepicker.dateInputs",
                        function () {

                            $container
                                .find(".drp-date-input-wrap")
                                .remove();
                        }
                    );

                // ==========================================
                // RANGE MODE ONLY
                // ==========================================

                if (!singleDate) {

                    // Move ranges to the right
                    $container.append(
                        $container.find(".ranges")
                    );

                    // Move buttons under the ranges
                    $container
                        .find(".ranges")
                        .append(
                            $container.find(".drp-buttons")
                        );
                }
            });

            // ==========================================
            // CANCEL
            // ==========================================

            $btn.on(
                "cancel.daterangepicker",
                function () {

                    if (singleDate) {
                        $btn.text("Pick a date");
                    } else {
                        $btn.text("Filter by Date");
                    }
                }
            );
        });
    }
}