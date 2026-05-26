<style>
    .btn{
        height: 100%;
        width: 100%;
    }
</style>

<div class="w-full flex h-full">
    <button {{ $attributes->merge(['class' => 'btn']) }}>
        <span>{{$buttonName}}</span>
    </button>
</div>