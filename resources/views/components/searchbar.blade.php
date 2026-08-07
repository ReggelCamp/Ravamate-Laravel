@props([
    'placeholder' => 'Search',
])


    
    <div class="relative items-center ">
        
        {{-- <i class="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2"></i> --}}
        
        {{-- <input 
            type="text" 
            id="customSearch"
            class="border rounded-lg bodyFont searchBar w-full h-[40px] pl-10 pr-3"
            placeholder="Search..."
        > --}}
        <input
        {{-- id="SearchInput" --}}
            type="text"
            {{ $attributes->merge([
                'id' => 'SearchInput',
                'class' => 'bodyFont pl-3 searchBar text-[14px] h-[30px] font-medium '
                // 'class' => 'bodyFont searchBar pl-10 pr-3'
                // 'class' => 'border rounded-lg bodyFont searchBar w-full h-[40px] pl-10 pr-3'
            ]) }}
            placeholder="{{ $placeholder }}"
        >
        
    </div>

