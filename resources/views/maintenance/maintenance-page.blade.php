<x-index title=" Maintenance"/>
<body class="w-full h-full">
    <div class="w-full h-full  flex-col p-5">
        
        {{-- Customer --}}
        <div class="w-full flex flex-col h-full ">

            <h1 class=" text-xl justify-center w-full flex">Customer</h1>
            {{-- DIVIDER --}}
            <div class="flex justify-center w-full">
                <div class="divider w-[1200px]"></div>
            </div>
            
            {{-- IMAGES OR CONTENT --}}
            <div class="flex w-full h-full flex-col sm:flex-row justify-center p-10 gap-5 flex-wrap">

            <div class="card bg-base-100 image-full w-full sm:w-96 h-[200px] shadow-sm">
                    <figure>
                        <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" />
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title w-full flex justify-center">Customer</h2>
                        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                        <div class="absolute inset-0 flex items-center justify-center">  
                                <a href={{ route('customer') }} class="btn btn-primary opacity-0 scale-90
                                                group-hover:opacity-100 group-hover:scale-100
                                                transition-all duration-300">
                                        See Details
                                </a>
                        </div>  
                    </div>
                </div>

        <div class="card bg-base-100 image-full w-full sm:w-96 h-[200px] shadow-sm">
                <figure>
                    <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title w-full flex justify-center">CMF</h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div class="absolute inset-0 flex items-center justify-center">  
                            <a href={{ route('cmf') }} class="btn btn-primary opacity-0 scale-90
                                            group-hover:opacity-100 group-hover:scale-100
                                            transition-all duration-300">
                                    See Details
                            </a>
                    </div>  
                </div>
            </div>

        <div class="card bg-base-100 image-full w-full sm:w-96 h-[200px] shadow-sm">
                <figure>
                    <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"/>
                </figure>
                <div class="card-body">
                    <h2 class="card-title w-full flex justify-center">Georeset</h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div class="absolute inset-0 flex items-center justify-center">  
                            <button onclick="my_modal_2.showModal()" class="btn btn-primary opacity-0 scale-90
                                            group-hover:opacity-100 group-hover:scale-100
                                            transition-all duration-300">
                                    See Details
                            </button>
                    </div>  
                </div>
            </div>

        <div class="card bg-base-100 image-full w-full sm:w-96 h-[200px] shadow-sm">
                <figure>
                    <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"/>
                </figure>
                <div class="card-body">
                    <h2 class="card-title w-full flex justify-center">Customer Tagging</h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div class="absolute inset-0 flex items-center justify-center">  
                            <a href={{ route('customertagging') }} class="btn btn-primary opacity-0 scale-90
                                            group-hover:opacity-100 group-hover:scale-100
                                            transition-all duration-300">
                                    See Details
                            </a>
                    </div>  
                </div>
            </div>

        <div class="card bg-base-100 image-full w-full sm:w-96 h-[200px] shadow-sm">
                <figure>
                    <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"/>
                </figure>
                <div class="card-body">
                    <h2 class="card-title w-full flex justify-center">MCP Layout</h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div class="absolute inset-0 flex items-center justify-center">  
                            <a href={{ route('mcplayout') }} class="btn btn-primary opacity-0 scale-90
                                            group-hover:opacity-100 group-hover:scale-100
                                            transition-all duration-300">
                                    See Details
                            </a>
                    </div>  
                </div>
            </div>

        <div class="card bg-base-100 image-full w-full sm:w-96 h-[200px] shadow-sm">
                <figure>
                    <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"/>
                </figure>
                <div class="card-body">
                    <h2 class="card-title w-full flex justify-center">Channel Mapping</h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div class="absolute inset-0 flex items-center justify-center">  
                           <a href={{ route('channelmapping') }} class="btn btn-primary opacity-0 scale-90
                                            group-hover:opacity-100 group-hover:scale-100
                                            transition-all duration-300">
                                    See Details
                            </a>
                    </div>  
                </div>
            </div>

        </div>
            
        
        {{-- PRODUCT --}}
        <div class="w-full flex flex-col h-full ">

            <h1 class=" text-xl justify-center w-full flex">Product</h1>
            {{-- DIVIDER --}}
            <div class="flex justify-center w-full">
                <div class="divider w-[1200px]"></div>
            </div>
            
            {{-- IMAGES OR CONTENT MAIN DIV --}}
            <div class="flex w-full h-full justify-center p-10 gap-5 flex-wrap">

            {{-- SINGLE IMG --}}
        <div class="card bg-base-100 image-full w-full sm:w-96 h-[200px] shadow-sm">
                <figure>
                    <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title w-full flex justify-center">Product</h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div class="absolute inset-0 flex items-center justify-center">  
                            < <a href={{ route('product') }} class="btn btn-primary opacity-0 scale-90
                                            group-hover:opacity-100 group-hover:scale-100
                                            transition-all duration-300">
                                    See Details
                            </a>
                    </div>  
                </div>
            </div>

        <div class="card bg-base-100 image-full w-full sm:w-96 h-[200px] shadow-sm">
                <figure>
                    <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title w-full flex justify-center">Placement</h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div class="absolute inset-0 flex items-center justify-center">  
                            < <a href={{ route('placementmaintenance') }} class="btn btn-primary opacity-0 scale-90
                                            group-hover:opacity-100 group-hover:scale-100
                                            transition-all duration-300">
                                    See Details
                            </a>
                    </div>  
                </div>
            </div>

        <div class="card bg-base-100 image-full w-full sm:w-96 h-[200px] shadow-sm">
                <figure>
                    <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title w-full flex justify-center">Must Carry</h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div class="absolute inset-0 flex items-center justify-center">  
                            < <a href={{ route('mustcarry') }} class="btn btn-primary opacity-0 scale-90
                                            group-hover:opacity-100 group-hover:scale-100
                                            transition-all duration-300">
                                    See Details
                            </a>
                    </div>  
                </div>
            </div>

        </div>
            
        {{-- OTHERS --}}
        <div class="w-full flex flex-col h-full ">

            <h1 class=" text-xl justify-center w-full flex">Others</h1>
            {{-- DIVIDER --}}
            <div class="flex justify-center w-full">
                <div class="divider w-[1200px]"></div>
            </div>
            
            {{-- IMAGES OR CONTENT --}}
            <div class="flex w-full h-full justify-center p-10 gap-5 flex-wrap">


        <div class="card bg-base-100 image-full w-full sm:w-96 h-[200px] shadow-sm">
                    <figure>
                        <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" />
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title w-full flex justify-center">Bank</h2>
                        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                        
                        <div class="absolute inset-0 flex items-center justify-center">
                            < <a href={{ route('bankmaintenance') }}
                                class="btn btn-primary opacity-0 scale-90
                                    group-hover:opacity-100 group-hover:scale-100
                                    transition-all duration-300">
                                See Details
                            </a>
                        </div>

                    </div>
                </div>

        <div class="card bg-base-100 image-full w-full sm:w-96 h-[200px] shadow-sm">
                    <figure>
                        <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" />
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title w-full flex justify-center">Salesman</h2>
                        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                         <div class="absolute inset-0 flex items-center justify-center">  
                            < <a href={{ route('salesman') }} class="btn btn-primary opacity-0 scale-90
                                            group-hover:opacity-100 group-hover:scale-100
                                            transition-all duration-300">
                                    See Details
                            </a>
                        </div>  
                    </div>
                </div>

        <div class="card bg-base-100 image-full w-full sm:w-96 h-[200px] shadow-sm">
                    <figure>
                        <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" />
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title w-full flex justify-center">Sales Objective</h2>
                        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                         <div class="absolute inset-0 flex items-center justify-center">  
                            < <a href={{ route('salesmanobjective') }} class="btn btn-primary opacity-0 scale-90
                                            group-hover:opacity-100 group-hover:scale-100
                                            transition-all duration-300">
                                    See Details
                            </a>
                        </div>  
                    </div>
                </div>

            </div>
        </div>  
          
    </div>   

{{-- Georeset Modal --}}
<dialog id="my_modal_2" class="modal">
    <div class="modal-box p-0 relative">
        <form class="flex w-full h-full flex-col justify-center items-center gap-5">
            <!-- HEADER -->
            <div class="flex justify-between items-center w-full bg-blue-500 p-4">
                <h1 class="text-white text-sm font-bold">
                    <i class="fa-solid fa-globe"></i>
                    FAST UNIMERCHANTS INC. - CEBU | GEORESET
                </h1>
                <button
                    class="btn btn-sm btn-circle btn-ghost hover:text-black hover:bg-red-500 text-white"type="button"onclick="my_modal_2.close()">
                    ✕
                </button>
            </div>
            <!-- BODY -->
            <div class="flex flex-col items-center gap-5 p-5 w-full">
                <h1>Georeset by Customer:</h1>
                <input
                    type="text"
                    class="border rounded-lg p-2 w-full max-w-[200px]"
                    placeholder="Type customer code">
                <button
                    class="w-[120px] rounded-xl bg-blue-500 text-white p-2">
                    Reset
                </button>
            </div>
        </form>
    </div>
    <!-- BACKDROP -->
    <form method="dialog" class="modal-backdrop">
        <button></button>
    </form>
</dialog>


</body>