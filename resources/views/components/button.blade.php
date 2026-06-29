<style>
    .btn{
        height: 100%;
        width: 100%;
        border-radius: 8px;
        border: 1px black;
    }
</style>

<div class="w-full flex h-full dropdownTrigger rounded-lg">
    <button {{ $attributes->merge(['class' => 'btn  shine-bg ']) }}>
        <span class="bodyFont">{{$buttonName}}</span>
    </button>
</div>