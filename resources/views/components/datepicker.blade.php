
<style>
    
.daterangepicker{
    display:flex;
    flex-wrap:wrap;
    width:900px;
}

.drp-header{
    width:100%;
    display:flex;
    gap:12px;
    padding:12px;
}

.daterangepicker .drp-calendar{
    width:320px;
}

.daterangepicker .ranges{
    order:3;
    width:180px;
    margin-left:15px;
}

.daterangepicker .drp-buttons{
    margin-top:15px;
    border-top:none;
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
                {{ $label }}
            </button>

            {{-- holds the selected range as a plain string, e.g. "2026-01-01 - 2026-01-31" --}}
            <input type="hidden" id="{{ $id }}_value" name="date_range">
        @endif

    </div>
</div>

{{-- <script type="module" src="/app/module/daterange.js"></script> --}}
<script type="module" src="/app/helper/datePicker.js"></script>
