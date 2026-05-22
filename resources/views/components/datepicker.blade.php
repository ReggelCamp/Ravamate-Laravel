<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.min.js"></script>
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.css" />
@props([
    'displayOnly' => false
])
 <div id="datepicker" class="sm:w-full w-[150px]  flex h-full sm:justify-end overflow-auto">
              <div id="datepicker" class="w-[150px] flex h-full sm:justify-end">

    @if($displayOnly)

        <div id="dateButton"
            {{-- class="cursor-pointer text-sm flex items-center"> --}}
            class="cursor-pointer text-sm flex ">
            
        </div>

    @else

        <button
            class="border flex w-[150px] h-full p-2 rounded-2xl items-center justify-center"
            id="dateButton">

            Filter by date

        </button>

    @endif

</div>
            <script>
                
            $(function () {
                $('#dateButton').daterangepicker({
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

                }, function(start, end) {

                    // Change button text
                    if (start.format('L') == end.format('L')) {
                        $('#dateButton').text(start.format('ll'));
                    } else {
                        $('#dateButton').text(
                            `${start.format('ll')} -> ${end.format('ll')}`
                        );
                    }

                });

            });
            </script>
            </div>