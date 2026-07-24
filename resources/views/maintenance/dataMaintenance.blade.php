@extends('layout.app')
@section('content')


    <div class="flex flex-col w-full h-screen px-5 gap-5 transparentBg">

        <!-- TITLE -->
        <h1 class="text-2xl text-center py-5">
            Eric Data Alignment
        </h1>

        <!-- DIVIDER -->
        <div class="flex justify-center w-full">
            <div class="divider w-full max-w-[1200px]"></div>
        </div>

        <!-- CARDS WRAPPER -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 justify-items-center">

            <!-- CARD 1 -->
            <div class=" gap-0">
                <div class="w-[300px] ">
                    <h2 class="card-title rounded-t-2xl py-2   flex justify-center maintinanceCard">
                        Sync CDO Customer
                    </h2>

                    <div class="card-actions
                                        rounded-b-2xl
                                                flex justify-center items-center 
                                                bg-white hover:bg-gray-500 group
                                                transition-colors duration-300 py-5">
                        <span
                            class=" relative flex items-center justify-center w-[100px] h-[100px] rounded-full border overflow-hidden transition-colors duration-300 ">

                            <!-- Icon -->
                            <i class="fa-solid fa-user text-4xl relative z-10"></i>

                            <!-- Hover Overlay -->
                            <a href="{{ route('customer') }}" class="absolute inset-0 z-20 flex items-center justify-center
                                                opacity-0 group-hover:opacity-100
                                                transition-opacity duration-300">

                                <span class="shine-bgBtn px-3 py-2 rounded-xl text-xs">
                                    See Details
                                </span>
                            </a>

                        </span>
                    </div>
                </div>
            </div>

            <!-- CARD 2 -->
            <div class=" gap-0">
                <div class="w-[300px]">
                    <h2 class="card-title rounded-t-2xl py-2   flex justify-center maintinanceCard">
                        Sync CDO Customer
                    </h2>

                    <div class="card-actions
                                        rounded-b-2xl
                                                flex justify-center items-center 
                                                bg-white hover:bg-gray-500 group
                                                transition-colors duration-300 py-5">
                        <span
                            class=" relative flex items-center justify-center w-[100px] h-[100px] rounded-full border overflow-hidden transition-colors duration-300 ">

                            <!-- Icon -->
                            <i class="fa-solid fa-user text-4xl relative z-10"></i>

                            <!-- Hover Overlay -->
                            <a href="{{ route('customer') }}" class="absolute inset-0 z-20 flex items-center justify-center
                                                opacity-0 group-hover:opacity-100
                                                transition-opacity duration-300">

                                <span class="shine-bgBtn px-3 py-2 rounded-xl text-xs">
                                    See Details
                                </span>
                            </a>

                        </span>
                    </div>
                </div>
            </div>

            <!-- CARD 3 -->
            <div class=" gap-0">
                <div class="w-[300px]">
                    <h2 class="card-title rounded-t-2xl py-2   flex justify-center maintinanceCard">
                        Sync CDO Customer
                    </h2>

                    <div class="card-actions
                                        rounded-b-2xl
                                                flex justify-center items-center 
                                                bg-white hover:bg-gray-500 group
                                                transition-colors duration-300 py-5">
                        <span
                            class=" relative flex items-center justify-center w-[100px] h-[100px] rounded-full border overflow-hidden transition-colors duration-300 ">

                            <!-- Icon -->
                            <i class="fa-solid fa-user text-4xl relative z-10"></i>

                            <!-- Hover Overlay -->
                            <a href="{{ route('customer') }}" class="absolute inset-0 z-20 flex items-center justify-center
                                                opacity-0 group-hover:opacity-100
                                                transition-opacity duration-300">

                                <span class="shine-bgBtn px-3 py-2 rounded-xl text-xs">
                                    See Details
                                </span>
                            </a>

                        </span>
                    </div>
                </div>
            </div>

            <!-- CARD 4 -->
            <div class=" gap-0">
                <div class="w-[300px]">
                    <h2 class="card-title rounded-t-2xl py-2   flex justify-center maintinanceCard">
                        Sync CDO Customer
                    </h2>

                    <div class="card-actions
                                        rounded-b-2xl
                                                flex justify-center items-center 
                                                bg-white hover:bg-gray-500 group
                                                transition-colors duration-300 py-5">
                        <span
                            class=" relative flex items-center justify-center w-[100px] h-[100px] rounded-full border overflow-hidden transition-colors duration-300 ">

                            <!-- Icon -->
                            <i class="fa-solid fa-user text-4xl relative z-10"></i>

                            <!-- Hover Overlay -->
                            <a href="{{ route('customer') }}" class="absolute inset-0 z-20 flex items-center justify-center
                                                opacity-0 group-hover:opacity-100
                                                transition-opacity duration-300">

                                <span class="shine-bgBtn px-3 py-2 rounded-xl text-xs">
                                    See Details
                                </span>
                            </a>

                        </span>
                    </div>
                </div>
            </div>

            <!-- CARD 5 -->
            <div class=" gap-0">
                <div class="w-[300px]">
                    <h2 class="card-title rounded-t-2xl py-2   flex justify-center maintinanceCard">
                        Sync CDO Customer
                    </h2>

                    <div class="card-actions
                                        rounded-b-2xl
                                                flex justify-center items-center 
                                                bg-white hover:bg-gray-500 group
                                                transition-colors duration-300 py-5">
                        <span
                            class=" relative flex items-center justify-center w-[100px] h-[100px] rounded-full border overflow-hidden transition-colors duration-300 ">

                            <!-- Icon -->
                            <i class="fa-solid fa-user text-4xl relative z-10"></i>

                            <!-- Hover Overlay -->
                            <a href="{{ route('customer') }}" class="absolute inset-0 z-20 flex items-center justify-center
                                                opacity-0 group-hover:opacity-100
                                                transition-opacity duration-300">

                                <span class="shine-bgBtn px-3 py-2 rounded-xl text-xs">
                                    See Details
                                </span>
                            </a>

                        </span>
                    </div>
                </div>
            </div>

            <!-- CARD 6 -->
            <div class=" gap-0">
                <div class="w-[300px]">
                    <h2 class="card-title rounded-t-2xl py-2   flex justify-center maintinanceCard">
                        Sync CDO Customer
                    </h2>

                    <div class="card-actions
                                        rounded-b-2xl
                                                flex justify-center items-center 
                                                bg-white hover:bg-gray-500 group
                                                transition-colors duration-300 py-5">
                        <span
                            class=" relative flex items-center justify-center w-[100px] h-[100px] rounded-full border overflow-hidden transition-colors duration-300 ">

                            <!-- Icon -->
                            <i class="fa-solid fa-user text-4xl relative z-10"></i>

                            <!-- Hover Overlay -->
                            <a href="{{ route('customer') }}" class="absolute inset-0 z-20 flex items-center justify-center
                                                opacity-0 group-hover:opacity-100
                                                transition-opacity duration-300">

                                <span class="shine-bgBtn px-3 py-2 rounded-xl text-xs">
                                    See Details
                                </span>
                            </a>

                        </span>
                    </div>
                </div>
            </div>

            <!-- CARD 7 -->
            <div class=" gap-0">
                <div class="w-[300px]">
                    <h2 class="card-title rounded-t-2xl py-2   flex justify-center maintinanceCard">
                        Sync CDO Customer
                    </h2>

                    <div class="card-actions
                                        rounded-b-2xl
                                                flex justify-center items-center 
                                                bg-white hover:bg-gray-500 group
                                                transition-colors duration-300 py-5">
                        <span
                            class=" relative flex items-center justify-center w-[100px] h-[100px] rounded-full border overflow-hidden transition-colors duration-300 ">

                            <!-- Icon -->
                            <i class="fa-solid fa-user text-4xl relative z-10"></i>

                            <!-- Hover Overlay -->
                            <a href="{{ route('customer') }}" class="absolute inset-0 z-20 flex items-center justify-center
                                                opacity-0 group-hover:opacity-100
                                                transition-opacity duration-300">

                                <span class="shine-bgBtn px-3 py-2 rounded-xl text-xs">
                                    See Details
                                </span>
                            </a>

                        </span>
                    </div>
                </div>
            </div>

        </div>

    </div>



@endsection