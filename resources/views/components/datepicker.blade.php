{{-- Date Range Picker --}}
<style>
    .daterangepicker{
        width: 860px;
        height: 330px;
        color: black;
        background: linear-gradient(90deg, var(--primary), var(--secondary), var(--accent), var(--primary));
        background-size: 200% auto;
        animation: gradientShift 3s ease-in-out infinite;
    }
    .daterangepicker .drp-calendar.left {
        width: 350px;
        max-width: 350px;
        background-color: var(--primary);
        color: black;
    }
    .daterangepicker .drp-calendar.right {
        width: 350px;
        max-width: 350px;
        background-color: var(--primary);
        color: black;
    }
    .daterangepicker .drp-buttons {
        display: flex;
        justify-content: center;
        gap: 5px;
        height: 45px;
    }
    .daterangepicker .ranges{
        background-color:var(--primary);
        color: var(--body-color);
    }
    .daterangepicker .ranges ul li:hover,
    .daterangepicker .ranges li:hover,
    .daterangepicker .ranges li.active {
        background-color: var(--secondary) !important;
        color: var(--body-color) !important;
    }
    .cancelBtn{
        background-color: var(--secondary);
    }
    .applyBtn{
        background-color: var(--primary);
        border: 1px solid #555 !important;
        box-shadow: none !important;
    }
</style>

<script 
    type="text/javascript"
    src="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.min.js">
</script>

<link
    rel="stylesheet"
    type="text/css"
    href="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.css"
/>

@props([
    'displayOnly' => false
])

<div class="w-[150px] sm:w-full flex h-full sm:justify-end overflow-auto pr-2">

    <div class="w-[150px] flex items-center h-full sm:justify-end ">

        @if($displayOnly)

            <div
                id="dateButton"
                class="cursor-pointer text-sm flex items-center">
            </div>

        @else

            <button
                id="dateButton"
                class="border text-xs md:text-base w-[150px] h-full  rounded-2xl flex items-center justify-center hover:bg-base-200 transition">

                Filter by Date

            </button>

        @endif

    </div>

</div>

<script>
    $(function () {

        $('#dateButton').daterangepicker({

            showWeekNumbers: false,
            alwaysShowCalendars: true,
            autoUpdateInput: false,            
            //  opens: window.innerWidth < 370 ? 'center' : 'left',
            opens: 'left',
            //  opens: 'center',

            locale: {
                format: 'MMM DD, YYYY',
                cancelLabel: 'Clear'
            },

            ranges: {
                'Today': [
                    moment(),
                    moment()
                ],

                'Last 7 Days': [
                    moment().subtract(6, 'days'),
                    moment()
                ],

                'This Month': [
                    moment().startOf('month'),
                    moment().endOf('month')
                ]
            }

        }, function (start, end) {

            if (start.format('L') === end.format('L')) {

                $('#dateButton').text(
                    start.format('ll')
                );

            } else {

                $('#dateButton').text(
                    `${start.format('ll')} → ${end.format('ll')}`
                );

            }

        });

    });
</script>