<style>
    .shine-bgExportBtn {
        padding-left: 5px;
        padding-right: 5px;
    }
</style>

@props([
    'id' => 'exportDropdown',
    'label' => 'Export',
    'leftIcon' => null,
    'rightIcon' => 'fa-solid fa-caret-down',
    'tableId' => null,
    'report' => null,
    'hideCsv' => false,
    'hidePrint' => false,
    'hideCopy' => false,
    'hideExcel' => false,

])

<div class="dropdown dropdown-end">

    <button
        id="{{ $id }}"
        {{ $attributes->merge([
            'class' => 'btn-sm flex items-center justify-center gap-2 h-[30px] rounded-2xl text-[12px] border px-5'
        ]) }}
    >
        {{ $label }}

        @if($rightIcon)
            <i class="{{ $rightIcon }}"></i>
        @endif
    </button>

    {{-- <ul
        tabindex="0"
        class="dropdown-content menu rounded-lg overflow-hidden font-medium shadow-lg p-0 w-fit z-50"
    >

        <li class="shine-bgExportBtn">
            <a
                href="#"
                class="printBtn"
                data-table="{{ $tableId }}"
            >
                <i class="fa-solid fa-print"></i>
                Print
            </a>
        </li>

        <li class="shine-bgExportBtn">
            <a
                href="#"
                class="csvBtn"
                data-table="{{ $tableId }}"
            >
                <i class="fa-solid fa-file-csv"></i>
                CSV
            </a>
        </li>

        <li class="shine-bgExportBtn">
            <a
                href="#"
                class="excelBtn"
                data-table="{{ $tableId }}"
            >
                <i class="fa-solid fa-file-excel"></i>
                Excel
            </a>
        </li>

        <li class="shine-bgExportBtn">
            <a
                href="#"
                class="copyBtn"
                data-table="{{ $tableId }}"
            >
                <i class="fa-solid fa-copy"></i>
                Copy
            </a>
        </li>

        {{ $slot }}

    </ul> --}}

    <ul
    tabindex="0"
    class="dropdown-content menu rounded-lg overflow-hidden font-medium shadow-lg p-0 w-fit z-50"
>

    {{-- Print --}}
    @if(!$hidePrint)
        <li class="shine-bgExportBtn">
            <a
                href="#"
                class="printBtn"
                data-table="{{ $tableId }}"
                data-report="{{ $report }}"
            >
                <i class="fa-solid fa-print"></i>
                Print
            </a>
        </li>
    @endif

    {{-- CSV --}}
    @if(!$hideCsv)
        <li class="shine-bgExportBtn">
            <a
                href="#"
                class="csvBtn"
                data-table="{{ $tableId }}"
            >
                <i class="fa-solid fa-file-csv"></i>
                CSV
            </a>
        </li>
    @endif

    {{-- Excel --}}
    @if(!$hideCopy)
        <li class="shine-bgExportBtn">
            <a
                href="#"
                class="excelBtn"
                data-table="{{ $tableId }}"
            >
                <i class="fa-solid fa-file-excel"></i>
                Excel
            </a>
        </li>
    @endif

    {{-- Copy --}}
    @if(!$hideCopy)
        <li class="shine-bgExportBtn">
            <a
                href="#"
                class="copyBtn"
                data-table="{{ $tableId }}"
            >
                <i class="fa-solid fa-copy"></i>
                Copy
            </a>
        </li>
    @endif

    {{ $slot }}

</ul>
</div>
