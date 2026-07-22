<style>
    .btn{
        height: 100%;
        width: 100%;
    }
</style>

<div {{ $attributes->merge([
    'class' => 'dropdown dropdownTrigger bodyFont flex justify-between font-bold'
]) }}>
    <div
        tabindex="0"
        role="button"{{ $attributes->merge([
            'class' => "p-2 w-full shine-bg gap-2 flex justify-between items-center"
        ]) }}
    >
        <span class="dropdownName flex-1">{{ $dropdownName }}</span>
        
        @isset($icon)
            {{ $icon }}
        @endisset
    </div>

    <ul
        tabindex="0"
        {{ $attributes -> merge([
            'class'=>"dropdown-content ulMenu menu rounded-box z-[1] min-w-full whitespace-nowrap p-2 font-medium text-[16px]"
        ]) }}
    >

    {{ $slot }}
</ul>
</div>