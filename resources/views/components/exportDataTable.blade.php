{{-- @props([
'id' => 'exportDropdown',
'label' => 'Export',
'leftIcon' => null,
'rightIcon' => 'fa-solid fa-caret-down',
'itemClass' => '',
])

<div {{ $attributes->merge(['class' => 'flex rounded-2xl']) }}>
    <x-dropdown>
        <x-slot:dropdownName>
            <span id="{{ $id }}" {{ $attributes->merge([
                "class" => "border sheenFilterBtn rounded-2xl h-[30px] flex items-center gap-2 cursor-pointer w-fit
                px-5"
                ]) }}>
                @if($leftIcon)
                <i class="{{ $leftIcon }}"></i>
                @endif

                {{ $label }}

                @if($rightIcon)
                <i class="{{ $rightIcon }}"></i>
                @endif
            </span>
        </x-slot:dropdownName>

        <div class="w-full text-[13px] bg-white">
            <li class="shine-bgExportBtn ">
                <a class="printBtn">
                    <i class="fa-solid fa-print"></i>
                    Print
                </a>
            </li>

            <li class="shine-bgExportBtn">
                <a class="csvBtn">
                    <i class="fa-solid fa-file-csv"></i>
                    CSV
                </a>
            </li>

            <li class="shine-bgExportBtn">
                <a class="excelBtn">
                    <i class="fa-solid fa-file-excel"></i>
                    Excel
                </a>
            </li>

            <li class="shine-bgExportBtn">
                <a class="copyBtn">
                    <i class="fa-solid fa-copy"></i>
                    Copy
                </a>
            </li>

            {{ $slot }}
        </div>
    </x-dropdown>
</div> --}}


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
])

<div class="dropdown dropdown-end">
    <button id="{{ $id }}" {{ $attributes->merge([
    'class' => 'btn btn-sm flex items-center justify-center gap-2'
]) }}>
        {{ $label }}

        @if($rightIcon)
            <i class="{{ $rightIcon }}"></i>
        @endif
    </button>

    <ul tabindex="0" class="dropdown-content menu  rounded-lg overflow-hidden font-medium shadow-lg p-0 w-fit z-50">
        <li class="shine-bgExportBtn">
            <a class="printBtn">
                <i class="fa-solid fa-print"></i>
                Print
            </a>
        </li>

        <li class="shine-bgExportBtn">
            <a class="csvBtn">
                <i class="fa-solid fa-file-csv"></i>
                CSV
            </a>
        </li>

        <li class="shine-bgExportBtn">
            <a class="excelBtn">
                <i class="fa-solid fa-file-excel"></i>
                Excel
            </a>
        </li>

        <li class="shine-bgExportBtn">
            <a class="copyBtn">
                <i class="fa-solid fa-copy"></i>
                Copy
            </a>
        </li>

        {{ $slot }}
    </ul>
</div>