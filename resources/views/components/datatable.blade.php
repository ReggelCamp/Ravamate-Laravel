<style>
/* ===========================
   DataTable Header
=========================== */

.dt-scroll-head {
    background-color: var(--primary) !important;
    
}

.dt-scroll-head table thead th {
    color: var(--header-color) !important;
    font-size: 10px !important;
    font-weight: 600;
    text-align: left !important;
    padding-left: 12px !important;
}

.dt-scroll-head th {
    position: relative;
    text-align: left !important;
    padding-right: 28px !important; /* room for sort icon */
}

/* Header title */
.dt-scroll-head .dt-column-title {
    display: block;
    text-align: left !important;
}

/* Sort icon */
.dt-scroll-head .dt-column-order {
    position: absolute !important;
    right: 8px;
    top: 50%;
    transform: translateY(-50%);
}

/* ===========================
   Table Body
=========================== */

.dt-scroll-body {
    background-color: var(--background);
    color: var(--body-color);
    position: relative;
    z-index: 1;
}

.dt-scroll-body table tbody td {
    text-align: left !important;
    vertical-align: middle;
    padding-left: 12px !important;
} 
/* Empty table message */
.dt-empty {
    text-align: center !important;
    vertical-align: middle !important;
    color: var(--body-color);
    white-space: normal !important;
    word-break: break-word;
    padding: 1rem;
    font-size: 10px;
    align-items: center !important;
}

/* ===========================
   Pagination
=========================== */

.dataTable-info {
    display: flex !important;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 2px;
}

.dt-paging {
    display: flex;
    justify-content: flex-end;
    width: fit-content;
    border-radius: 8px;
    background-color: var(--background);
}

/* .dt-paging-button:hover {
    padding: 1 !important;
    background-color: var(--primary) !important;
    color:var(--header-color) !important;
} */

.dt-paging-button:hover,
.dt-paging-button:focus,
.dt-paging-button:active {
    background: var(--primary) !important;
    color: var(--accent) !important;
    border: none !important;
    box-shadow: none !important;
    outline: none !important;
}

div.dt-container .dt-paging .dt-paging-button.current,
div.dt-container .dt-paging .dt-paging-button.current:hover {
    color: var(--header-color) !important;
    background-color: var(--primary) !important;
}

div.dt-container .dt-paging .dt-paging-button.disabled:hover{
    color: var(--header-color) !important;
    background-color: var(--primary) !important;
}

</style>

{{-- <div class="w-full h-full text-sm bodyFont ">
    <table id="salesmanTable" class="w-full bodyFont headerColor text-center tableBg">

    </table>
</div> --}}

@props([
    'id' => 'salesmanTable',
])

<div class="w-full h-full">
    <table
        {{ $attributes->merge([
            'class' => 'w-full bodyFont tableBg text-medium text-[10px]'
        ]) }}
        id="{{ $id }}">
    </table>
</div>

<script type="module" src="/app/helper/TableLoader.js"></script>