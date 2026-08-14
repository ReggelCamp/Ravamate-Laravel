@props([
    'buttonClass' => '',
    'menuClass' => '',
])

<div class="dropdown">
    <div
        tabindex="0"
        role="button"
        class="h-[30px] flex justify-between items-center  {{ $buttonClass }}"
    >
        <span class=" dropdownName flex-1">
            {{ $dropdownName }}
        </span>

        @isset($icon)
            {{ $icon }}
        @endisset
    </div>

    <ul
        tabindex="0"
        class="dropdown-content menu rounded-box z-50 min-w-full whitespace-nowrap p-2 font-medium text-[16px] {{ $menuClass }}"
    >
        {{ $slot }}
    </ul>
</div>