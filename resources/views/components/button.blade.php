<style>
    .btn{
        height: 100%;
        width: 100%;
        
    }
</style>

<div class="w-full flex h-full dropdownTrigger rounded-lg">
    <button {{ $attributes->merge(['class' => 'btn  shine-shimmer ']) }}>
        <span class="bodyFont">{{$buttonName}}</span>
    </button>
</div>