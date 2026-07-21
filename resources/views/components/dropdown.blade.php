<style>
    .btn{
        height: 100%;
        width: 100%;
    }
</style>

<div {{ $attributes->merge([
    'class' => 'dropdown dropdownTrigger bodyFont flex justify-between font-bold h-full'
]) }}>
    <div
        tabindex="0"
        role="button"
        class="p-2 w-full h-full shine-bg gap-2 flex justify-between items-center"
    >
        <span class="dropdownName">{{ $dropdownName }}</span>
        
        @isset($icon)
            {{ $icon }}
        @endisset
    </div>

    <ul
        tabindex="0"
        class="dropdown-content menu bg-base-100 rounded-box z-[1] w-max min-w-full whitespace-nowrap p-2 shadow-sm"
    >
    {{ $slot }}
</ul>
</div>