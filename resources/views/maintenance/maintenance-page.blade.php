@extends('layout.app')
@section('content')

    <body class="w-full h-full ">
        <div class="bodyBg w-full h-full flex flex-col overflow-scroll">
            <div class="flex flex-col w-full px-5 gap-5 ">

                <!--Cutomer-->
                <h1 class="text-2xl text-center py-5">
                    Customer
                </h1>

                <!-- DIVIDER -->
                <div class="flex justify-center w-full">
                    <div class="divider w-full max-w-[1200px]"></div>
                </div>

                <!-- CARDS WRAPPER -->
                <div class="flex flex-col sm:flex-row gap-5 w-full justify-center  items-stretch sm:flex-wrap">

                    <!-- CARD 1 -->
                    <div class="card bg-base-100 image-full w-full md:w-full lg:w-96 h-[200px] shadow-sm">

                        <figure>
                            <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                alt="Shoes" />
                        </figure>

                        <div class="card-body p-4">
                            <h2 class="card-title w-full flex justify-center bg-background_color">Customer</h2>
                            <div class="card-actions justify-center items-center h-full flex ">
                                <a href="{{ route('customer') }}" class="btn btn-primary">Buy Now</a>
                            </div>
                        </div>

                    </div>

                    <!-- CARD 2 -->
                    <div class="card bg-base-100 image-full w-full md:w-full lg:w-96 h-[200px] shadow-sm">

                        <figure>
                            <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                alt="Shoes" />
                        </figure>

                        <div class="card-body p-4">
                            <h2 class="card-title w-full flex justify-center bg-background_color">Card CMF</h2>
                            <div class="card-actions justify-center items-center h-full flex ">
                                <a href="{{route('cmf')}}" class="btn btn-primary">Buy Now</a>
                            </div>
                        </div>
                    </div>

                    <div class="card bg-base-100 image-full w-full md:w-full lg:w-96 h-[200px] shadow-sm">

                        <figure>
                            <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                alt="Shoes" />
                        </figure>

                        <div class="card-body p-4">
                            <h2 class="card-title w-full flex justify-center bg-background_color">Georeset</h2>
                            <div class="card-actions justify-center items-center h-full flex ">
                                <button class="btn btn-primary" id="georesetbtn">Buy Now</button>
                            </div>
                        </div>
                    </div>

                    <div class="card bg-base-100 image-full w-full md:w-full lg:w-96 h-[200px] shadow-sm">

                        <figure>
                            <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                alt="Shoes" />
                        </figure>

                        <div class="card-body p-4">
                            <h2 class="card-title w-full flex justify-center bg-background_color">Customer Tagging</h2>
                            <div class="card-actions justify-center items-center h-full flex ">
                                <a href="{{route('customertagging')}}" class="btn btn-primary">Buy Now</a>
                            </div>
                        </div>
                    </div>

                    <div class="card bg-base-100 image-full w-full md:w-full lg:w-96 h-[200px] shadow-sm">

                        <figure>
                            <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                alt="Shoes" />
                        </figure>

                        <div class="card-body p-4">
                            <h2 class="card-title w-full flex justify-center bg-background_color">MCP Layout</h2>
                            <div class="card-actions justify-center items-center h-full flex ">
                                <a href="{{route('mcplayout')}}" class="btn btn-primary">Buy Now</a>
                            </div>
                        </div>
                    </div>

                    <div class="card bg-base-100 image-full w-full md:w-full lg:w-96 h-[200px] shadow-sm">

                        <figure>
                            <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                alt="Shoes" />
                        </figure>

                        <div class="card-body p-4">
                            <h2 class="card-title w-full flex justify-center bg-background_color">Channel Mapping</h2>
                            <div class="card-actions justify-center items-center h-full flex ">
                                <a href="{{route('channelmapping')}}" class="btn btn-primary">Buy Now</a>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <!--Product-->
            <h1 class="text-2xl text-center py-5">
                Product
            </h1>

            <!-- DIVIDER -->
            <div class="flex justify-center w-full">
                <div class="divider w-full max-w-[1200px]"></div>
            </div>

            <!-- CARDS WRAPPER -->
            <div class="flex flex-col sm:flex-row gap-5 w-full justify-center  items-stretch sm:flex-wrap">
                <!-- CARD 1 -->
                <div class="card bg-base-100 image-full w-full md:w-full lg:w-96 h-[200px] shadow-sm">
                    <figure>
                        <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />
                    </figure>

                    <div class="card-body p-4">
                        <h2 class="card-title w-full flex justify-center bg-background_color">Product</h2>
                        <div class="card-actions justify-center items-center h-full flex ">
                            <a href="{{route('product')}}" class="btn btn-primary">Buy Now</a>
                        </div>
                    </div>

                </div>

                <!-- CARD 2 -->
                <div class="card bg-base-100 image-full w-full md:w-full lg:w-96 h-[200px] shadow-sm">
                    <figure>
                        <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />
                    </figure>

                    <div class="card-body p-4">
                        <h2 class="card-title w-full flex justify-center bg-background_color">Placement</h2>
                        <div class="card-actions justify-center items-center h-full flex ">
                            <a href="{{route('placementmaintenance')}}" class="btn btn-primary">Buy Now</a>
                        </div>
                    </div>
                </div>

                <div class="card bg-base-100 image-full w-full md:w-full lg:w-96 h-[200px] shadow-sm">
                    <figure>
                        <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />
                    </figure>

                    <div class="card-body p-4">
                        <h2 class="card-title w-full flex justify-center bg-background_color">Must Carry</h2>
                        <div class="card-actions justify-center items-center h-full flex ">
                            <a href="{{route('mustcarry')}}" class="btn btn-primary">Buy Now</a>
                        </div>
                    </div>
                </div>
            </div>

        <!--Others-->
        <h1 class="text-2xl text-center py-5">
            Others
        </h1>

        <!-- DIVIDER -->
        <div class="flex justify-center w-full">
            <div class="divider w-full max-w-[1200px]"></div>
        </div>

        <!-- CARDS WRAPPER -->
        <div class="flex flex-col sm:flex-row gap-5 w-full justify-center  items-stretch sm:flex-wrap">
            <!-- CARD 1 -->
            <div class="card bg-base-100 image-full w-full md:w-full lg:w-96 h-[200px] shadow-sm">

                <figure>
                    <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />
                </figure>

                <div class="card-body p-4">
                    <h2 class="card-title w-full flex justify-center bg-background_color">Bank</h2>
                    <div class="card-actions justify-center items-center h-full flex ">
                        <a href="{{route('bankmaintenance')}}" class="btn btn-primary">Buy Now</a>
                    </div>
                </div>

            </div>

            <!-- CARD 2 -->
            <div class="card bg-base-100 image-full w-full md:w-full lg:w-96 h-[200px] shadow-sm">
                <figure>
                    <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />
                </figure>

                <div class="card-body p-4">
                    <h2 class="card-title w-full flex justify-center bg-background_color">Salesman</h2>
                    <div class="card-actions justify-center items-center h-full flex ">
                        <a href="{{route('salesman')}}" class="btn btn-primary">Buy Now</a>
                    </div>
                </div>
            </div>

            <div class="card bg-base-100 image-full w-full md:w-full lg:w-96 h-[200px] shadow-sm">

                <figure>
                    <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />
                </figure>

                <div class="card-body p-4">
                    <h2 class="card-title w-full flex justify-center">Sales Objective</h2>
                    <div class="card-actions justify-center items-center h-full flex ">
                        <a href="{{ route('salesmanobjective') }}" class="btn btn-primary">Buy Now</a>
                    </div>
                </div>
            </div>
        </div>

        </div>
    </div>
    
</body>

    <script>
        $(document).on("click", "#georesetbtn", function () {
            document.getElementById('georeset_modal').showModal();
        });
    </script>

    <dialog id="georeset_modal" class="modal">

        <div class="modal-box w-11/12 max-w-2xl rounded-2xl shadow-xl p-0 overflow-hidden">

            <form method="dialog">
                <button
                    class="btn btn-sm btn-circle btn-ghost absolute right-3 top-3 items-center h-full hover:text-black text-white">
                    ✕
                </button>
            </form>

            {{-- Header --}}
            <div class="w-full h-full no-hover bg-primary text-white p-5">
                <x-report-header-title title="GEORESET" />
            </div>

            <div class="flex flex-col w-full h-[250px] justify-center items-center gap-2">
                <h1>
                    GEORESET by Customer:
                </h1>
                <input class="border rounded-2xl p-2" placeholder="Type Customer Code"></input>
                <button class="w-fit p-2 primary_color rounded-2xl text-white">Reset</button>
            </div>

        </div>

    </dialog>

@endsection