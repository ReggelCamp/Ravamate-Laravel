
<style>
.daterangepicker .drp-calendar {
    padding-top: 8px;
}

.daterangepicker .drp-date-input-wrap {
    display: flex;
    align-items: center;
    gap: 8px;
    height: 38px;
    margin: 0 8px 8px;
    padding: 0 10px;
    border: 1px solid #cfd4da;
    border-radius: 5px;
    background: #fff;
}

.daterangepicker .drp-date-input-wrap i {
    color: #1f2937;
}

.daterangepicker .drp-date-input {
    width: 100%;
    min-width: 0;
    border: 0;
    outline: 0;
    background: transparent;
    color: #374151;
    font-size: 16px;
}

@media (max-width: 760px) {
    .daterangepicker 
    {
        max-width: calc(100vw - 16px);
    }

    .daterangepicker .drp-calendar
    {
        max-width: 50%;
    }
}

.daterangepicker .drp-selected{
        display: none !important;
    }
    
.daterangepicker .ranges ul{
    width: 140px !important;
    height: 203px !important;
}

.daterangepicker .ranges ul {
    display: flex !important;
    flex-direction: column;
    gap: 3px;
    /* justify-content: space-evenly !important; */
    height: 250px;
}

.daterangepicker .calendar-table th, .daterangepicker .calendar-table td {
    line-height: 0px !important;
}

.daterangepicker .drp-buttons{
    text-align: center !important;
}

</style>


<link
    rel="stylesheet"
    type="text/css"
    href="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.css"
/>

@props([
    'displayOnly' => false,
    'id' => 'datePicker',
    'label' => 'Filter by Date',
])

<div class="flex h-[30px] justify-end">
    <div class="dateColor flex items-center h-full justify-end text-[12px]">

        @if($displayOnly)
            <div id="dateButton" class="cursor-pointer flex items-center"></div>
        @else
            <button
                type="button"
                name="datePicker"
                id="{{ $id }}"
                {{ $attributes->merge([
                    'class' => 'date-picker js-daterangepicker headerFont flex items-center justify-center transition'
                ]) }}>
                {{ $label }}
            </button>

            {{-- holds the selected range as a plain string, e.g. "2026-01-01 - 2026-01-31" --}}
            <input type="hidden" id="{{ $id }}_value" name="date_range">
        @endif

    </div>
</div>

{{-- <script type="module" src="/app/module/daterange.js"></script> --}}
<script type="module" src="/app/helper/datePicker.js"></script>
