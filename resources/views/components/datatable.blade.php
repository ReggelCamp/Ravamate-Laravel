<style>
/* ===========================
   DataTable Header
=========================== */

.dt-scroll-head {
    background-color: var(--primary);
}

/* Metrics must match on the visible header AND the hidden header clone
   inside .dt-scroll-body, so target the table itself, not the wrapper */
div.dt-container table.dataTable thead th {
    font-size: 13px !important;
    font-weight: 600;
    text-align: left !important;
    padding: 8px 28px 8px 9px !important; /* right padding = room for sort icon */
    white-space: nowrap;
    position: relative;
}

div.dt-scroll-body table.dataTable thead th,
div.dt-scroll-body table.dataTable thead td {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
    height: 0 !important;
    border-top-width: 0 !important;
    border-bottom-width: 0 !important;
    line-height: 0 !important;
}

/* Colors only apply to the visible header */
.dt-scroll-head table thead th {
    color: var(--header-color);
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

div.dt-container table.dataTable tbody td {
    font-size: 13px !important;
    padding: 8px 12px !important;
    text-align: left !important;
    vertical-align: middle;
    white-space: nowrap;
}

/* for hover */
div.dt-container table.dataTable.table-clickable tbody tr:hover {
    background-color: var(--accent) !important;
    color: var(--header-color) !important;
    cursor: pointer;
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
    padding-top: 20px;
    font-size: 16px;
    height: 30px !important;
}

.dt-paging {
    display: flex;
    justify-content: flex-end;
    width: fit-content;
    border-radius: 8px;
    background-color: var(--background);
    height: 30px;
    align-items: center;
}

.dt-paging-button:hover,
.dt-paging-button:focus,
.dt-paging-button:active {
    background: var(--primary) !important;
    color: var(--accent) !important;
    border: none !important;
    box-shadow: none !important;
    outline: none !important;
    height: 30px !important;
}

div.dt-container .dt-paging .dt-paging-button.current,
div.dt-container .dt-paging .dt-paging-button.current:hover {
    color: var(--header-color) !important;
    background: var(--primary) !important;

    height: 27px !important;
    min-height: 27px !important;
    padding: 0 10px !important;
    margin: 0 !important;

    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;

    border: none !important;
    box-shadow: none !important;
}

div.dt-container .dt-paging .dt-paging-button.disabled:hover {
    color: var(--header-color) !important;
    background-color: var(--primary) !important;
}

div.dt-container div.dt-paging nav button.dt-paging-button {
    color: var(--body-color) !important;
}

div.dt-container .dt-paging .dt-paging-button {
    height: 27px !important;
    min-height: 27px !important;
    padding: 0 10px !important;
    margin: 0 !important;

    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;

    line-height: 1 !important;
    box-sizing: border-box !important;
}

.dt-scroll-body tbody tr:nth-child(even) {
    background-color: #f2f2f2;
}
</style>

@props([
    'id' => 'salesmanTable',
    'defaultClasses' => true,
])

<div class="w-full h-full">
    <table
        {{ $attributes->merge([
            'class' => $defaultClasses
                ? 'bodyFont tableBg text-medium'
                : ''
        ]) }}
        id="{{ $id }}">
    </table>
</div>

<script type="module" src="/app/helper/TableLoader.js"></script>