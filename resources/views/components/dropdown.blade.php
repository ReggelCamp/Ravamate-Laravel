<style>

</style>

@props([
    'buttonClass' => '',
    'menuClass' => '',
    'direction' => '',
])

<div class="dropdown  {{ $direction }} ">

    <div
        tabindex="0"
        role="button"
        class="h-[30px] flex justify-between  items-center {{ $buttonClass }}"
    >
        <span class="dropdownName">
            {{ $dropdownName }}
        </span>

        @isset($icon)
            {{ $icon }}
        @endisset
    </div>

    <ul
        tabindex="0"
        class="dropdown-content menu rounded-box z-[999] min-w-full whitespace-nowrap p-2 font-medium text-[16px] {{ $menuClass }}"
    >
        {{ $slot }}
    </ul>

</div>