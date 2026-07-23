<style>
    .btn{
        height: 100%;
        width: 100%;
    }
</style>

@props([
    'buttonClass' => '',
    'menuClass' => '',
])

<div {{ $attributes->merge([
    'class' => 'dropdown dropdownTrigger bodyFont'
]) }}>

    <div
        tabindex="0"
        role="button"
        class="flex justify-between items-center {{ $buttonClass }}"
    >
        <span class="dropdownName flex-1">
            {{ $dropdownName }}
        </span>

        @isset($icon)
            {{ $icon }}
        @endisset
    </div>

    <ul
        tabindex="0"
        class="dropdown-content menu rounded-box z-[1] min-w-full whitespace-nowrap p-2 font-medium text-[16px] {{ $menuClass }}"
    >
        {{ $slot }}
    </ul>

</div>