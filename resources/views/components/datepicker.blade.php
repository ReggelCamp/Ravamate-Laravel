{{-- Date Range Picker --}}
<style>
    .daterangepicker{
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
        color: var(--body-color);
        float: right !important;
        
    }
    .daterangepicker .ranges ul li:hover,
    .daterangepicker .ranges li:hover,
    .daterangepicker .ranges li.active {
        background-color: var(--secondary) !important;
        color: var(--header-color) !important;
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
    .daterangepicker .today.active{
       background-color: var(--primary) !important;
       color: var(--header-color) !important;
    }
    .daterangepicker .drp-selected {
        color: var(--header-color);
        height: 25px;
    }
    
    
</style>


<link
    rel="stylesheet"
    type="text/css"
    href="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.css"
/>

@props([
    'displayOnly' => false,
    'id' => 'datePicker'
])

<div class="flex h-full justify-end">
    <div class="dateColor flex items-center h-full justify-end ">

        @if($displayOnly)
            <div id="dateButton" class="cursor-pointer text-sm flex items-center"></div>
        @else
            <button
                type="button"
                name="datePicker"
                id="{{ $id }}"
                {{ $attributes->merge([
                    'class' => 'date-picker js-daterangepicker headerFont flex items-center justify-center transition'
                ]) }}>
                Filter by Date
            </button>

            {{-- holds the selected range as a plain string, e.g. "2026-01-01 - 2026-01-31" --}}
            <input type="hidden" id="{{ $id }}_value" name="date_range">
        @endif

    </div>
</div>

