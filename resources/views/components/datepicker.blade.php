{{-- Date Range Picker --}}
<style>
    .daterangepicker .drp-calendar{
        overflow: scroll;
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

    <div class="w-[150px] flex items-center h-full sm:justify-end">

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