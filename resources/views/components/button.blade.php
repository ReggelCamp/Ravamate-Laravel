<style>
    .btn{
        height: 100%;
        width: 100%;
        box-shadow: none;
        border: none;
    }
</style>

<div class="w-full flex h-full dropdownTrigger">
    <button {{ $attributes->merge(['class' => 'btn  shine-bg ']) }}>
        <span class="bodyFont">{{$buttonName}}</span>
    </button>
</div>