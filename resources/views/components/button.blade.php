<style>
    .btn{
        height: 100%;
        width: 100%;
    }
</style>

<div class="w-full flex h-full dropdownTrigger">
    <button {{ $attributes->merge(['class' => 'btn  shine-bg ']) }}>
        <span class="bodyFont">{{$buttonName}}</span>
    </button>
</div>