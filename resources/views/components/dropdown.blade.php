<style>
    .btn{
        height: 100%;
        width: 100%;
    }
</style>

<div class="dropdown flex justify-between h-full">
    
    <div 
        tabindex="0" 
        role="button" 
        class="btn w-full h-full flex justify-between items-center rounded-lg"
    >
        <span>{{$dropdownName}}</span>

        <i class="fa-solid fa-angle-down text-sm"></i>
    </div>

    <ul 
        tabindex="-1"
        class="dropdown-content menu bg-base-100 rounded-box z-[1] w-full p-2 shadow-sm"
    >
        {{$slot}}
    </ul>

</div>