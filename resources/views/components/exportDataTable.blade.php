@props([
    'id' => 'exportDropdown',
    'label' => 'Export',
])

<div {{ $attributes->merge(['class' => 'flex rounded-2xl h-[25px]']) }}>
    <x-dropdown>
        <x-slot:dropdownName>
            <span
                id="{{ $id }}"
                class="border px-2 rounded-2xl flex items-center gap-2 cursor-pointer">
                {{ $label }}
                <i class="fa-solid fa-caret-down"></i>
            </span>
        </x-slot:dropdownName>

        <div class="w-full text-[13px] bg-white">
            <li>
                <a class="printBtn">
                    <i class="fa-solid fa-print"></i>
                    Print
                </a>
            </li>

            <li>
                <a class="csvBtn">
                    <i class="fa-solid fa-file-csv"></i>
                    CSV
                </a>
            </li>

            <li>
                <a class="excelBtn">
                    <i class="fa-solid fa-file-excel"></i>
                    Excel
                </a>
            </li>

            <li>
                <a class="copyBtn">
                    <i class="fa-solid fa-copy"></i>
                    Copy
                </a>
            </li>

            {{ $slot }}
        </div>
    </x-dropdown>
</div>