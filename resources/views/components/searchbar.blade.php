<div class="w-full flex sm:justify-end">
    
    <div class="relative w-full h-full items-center sm:w-[300px]">
        
        <i class="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"></i>
        
        {{-- <input 
            type="text" 
            id="customSearch"
            class="border rounded-lg bodyFont searchBar w-full h-[40px] pl-10 pr-3"
            placeholder="Search..."
        > --}}
        <input
        id="SearchInput"
            type="text"
            {{ $attributes->merge([
                'class' => 'border rounded-lg bodyFont searchBar w-full h-[30px] pl-10 pr-3'
                // 'class' => 'border rounded-lg bodyFont searchBar w-full h-[40px] pl-10 pr-3'
            ]) }}
            placeholder="Search..."
        >
        
    </div>

</div>