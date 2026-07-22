{{-- Date Range Picker --}}
<style>
    .daterangepicker{
        /* width: 860px;
        height: 350px;
        color: black;
        background: linear-gradient(90deg, var(--primary), var(--secondary), var(--accent), var(--primary));
        background-size: 200% auto; */
        width: auto;
        max-width: 500px;
        /* margin-right: 20px; */
        height: auto !important;
        color: black;
        background: linear-gradient(90deg, var(--primary), var(--secondary), var(--accent), var(--primary));
        background-size: 200% auto;
    }
    /* .daterangepicker .drp-calendar.left {
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
        padding-right: 8px !important;
    } */
   
    .daterangepicker .drp-calendar.left,
    .daterangepicker .drp-calendar.right {
    padding-right: 3px !important;
    }

    .daterangepicker .drp-buttons {
        display: flex;
        justify-content: center;
        gap: 5px;
        height: auto !important;
        padding-bottom: 20px !important;
        padding-right: 20px !important;
    }
    .daterangepicker .ranges{
        background-color:var(--background);
        color: var(--header-color);
        
    }
    .daterangepicker .ranges ul li:hover,
    .daterangepicker .ranges li:hover,
    .daterangepicker .ranges li.active {
        background-color: var(--secondary) !important;
        color: var(--body-color) !important;
    }
    .cancelBtn{
        background-color: var(--primary);
        color: var(--body-color);
        border: 1px solid var(--background) !important;

    }
    .applyBtn{
        background-color: var(--accent);
        border: 1px solid #555 !important;
        box-shadow: none !important;
        color: var(--body-color);
        border: 1px solid var(--background) !important;

    }
    .daterangepicker .month{
       color: var(--primary);
    }
    /* .daterangepicker .today.active{
       background-color: aqua;
       color: black;
    } */
    .daterangepicker .drp-selected {
        color: var(--body-color);
        height: 25px;
    }
    
    
</style>


{{-- <script 
    type="text/javascript"
    src="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.min.js">
</script>

<link
    rel="stylesheet"
    type="text/css"
    href="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.css"
/> --}}

@props([
    'displayOnly' => false,
    'id' => 'datePicker'
])

<div class=" flex h-full justify-end pr-2">

    {{-- <div class="w-[250px] dateColor flex items-center h-full justify-end "> --}}
    <div class="dateColor flex items-center h-full justify-end ">

        @if($displayOnly)

            <div
                id="dateButton"
                class="cursor-pointer text-sm flex items-center">
            </div>

        @else

            {{-- <button
                id="dateButton"
                {{ $attributes }}
                class="border text-xs md:text-base w-[200px] h-full headerFont rounded-2xl flex items-center justify-center shine-bg transition">
                Filter by Date
            </button> --}}

            <button
                id="{{ $id }}"
                {{ $attributes->merge([
                    'class' => 'date-picker border text-xs md:text-base w-[200px] h-full headerFont flex items-center justify-center shine-bg transition'
                ]) }}>
                Filter by Date
            </button>

        @endif

    </div>

</div>

{{-- <script>
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
</script> --}}