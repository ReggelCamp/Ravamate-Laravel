@extends('layout.app')
@section('content')

    <div class="w-full flex flex-col bg-transparent ">

        <div class="w-full h-full flex flex-col lg:flex-row overflow-y-scroll ">

            {{-- Carousel Panel --}}
            <div
                class="order-last DarkMode  lg:order-first flex flex-col w-full lg:w-[400px] h-auto py-8 sm:py-0 sm:h-screen justify-center gap-5 lg:gap-20 items-center ">

                {{-- Logo --}}
                <div class="flex w-full justify-center items-center">
                    <div
                        class="w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] flex items-center justify-center pt-[30px] lg:pt-[80px]">
                        <img src="/${item.logo[0]?.url}" class="object-cover themeLogo" />
                    </div>
                </div>

                {{-- Carousel --}}
                <div class="w-full max-w-[500px] lg:max-w-[2000px] mx-auto overflow-hidden">
                    <div class="owl-carousel" id="carouselContainer"></div>
                </div>

            </div>

            {{-- Main div --}}
            <div class="flex flex-col w-full flex-1  ">

                {{-- Map --}}
                <div class="w-full flex flex-col HideMap h-[450px] sm:h-[500px] lg:flex-1 lg:h-auto ">

                    {{-- Map Header --}}
                    <div class="w-full h-[50px] flex-shrink-0 flex font-medium justify-between report_title items-center ">
                        <div class="w-full  items-center">
                            <x-report-header-title class="font-[16px]" title="Dashboard" />
                        </div>
                        <div class="flex w-[150px] sm:w-full h-[50px] whitespace-nowrap gap-1 pr-5 items-center font-medium justify-end">
                            <i  class="items-center justify-center w-5 h-5 flex" data-lucide="calendar-days"></i>
                            <x-datepicker displayOnly="true" />
                        </div>
                    </div>

                    {{-- Map Body --}}
                    <div class="w-full h-[500px] bg-white ">
                        <div class="w-full h-full flex justify-center p-2 items-end">
                            <div class="flex w-[450px] gap-5 ps-2 justify-center items-center rounded-lg h-[35px] bg-gray-200">
                                {{-- avatar --}}
                                <div class="flex h-full items-center gap-2">
                                    <div class="avatar">
                                        <div class="w-[25px] h-[25px] rounded-2xl">
                                            <img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" />
                                        </div>
                                    </div>
                                    <div class="avatar">
                                        <div class="w-[25px] h-[25px] rounded-2xl">
                                            <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
                                        </div>
                                    </div>
                                    <div class="avatar">
                                        <div class="w-[25px] h-[25px] rounded-2xl">
                                            <img src="https://img.daisyui.com/images/profile/demo/averagebulk@192.webp" />
                                        </div>
                                    </div>
                                </div>
                                {{-- end --}}
                            </div>
                        </div>
                    </div>
                </div>

                {{-- Table --}}
                <div class="w-full bodyFont flex flex-col tableSec pr-2 h-[400px] sm:h-[350px] lg:h-[300px] ">

                    {{-- Toolbar --}}
                    <div
                        class="w-full h-[217px] sm:h-[60px] flex-shrink-0 flex flex-col-reverse  sm:flex-row justify-between gap-5 ">
                        <div class="flex flex-col h-full items-center justify-center sm:flex-row gap-[5px] w-full md:w-auto">
                            <div class="w-full sm:text-[10px] whitespace-nowrap sm:w-[110px]">
                                <x-dropdown class="w-full h-[26px] rounded-2xl ">
                                    <x-slot:dropdownName class="font-semibold">
                                        Operation Type
                                    </x-slot:dropdownName>

                                    <x-slot:icon>
                                        <i class="fa-solid fa-angle-down"></i>
                                    </x-slot:icon>

                                    <li><a>Edit</a></li>
                                    <li><a>Duplicate</a></li>
                                    <li><a>Archive</a></li>
                                    <li><a>Move</a></li>
                                </x-dropdown>
                            </div>
                            <div class="w-full sm:text-[10px] rounded-2xl whitespace-nowrap sm:w-fit ">
                                <x-dropdown class="rounded-2xl w-[100px] h-[26px]">
                                    <x-slot:dropdownName>
                                        <span class="flex items-center font-semibold justify-evenly w-full">
                                            <i class="fa-solid fa-angle-down"></i>
                                            <i class="fa-regular fa-clock"></i>
                                            <span>Icon</span>
                                        </span>
                                    </x-slot:dropdownName>
                                    <div class="">
                                        <li><a>Off</a></li>
                                        <li><a>1 Minute</a></li>
                                        <li><a>5 Minutes</a></li>
                                        <li><a>10 Minutes</a></li>
                                        <li><a>15 Minutes</a></li>
                                        <li><a>30 Minutes</a></li>
                                        <li><a>60 Minutes</a></li>
                                    </div>
                                </x-dropdown>
                            </div>
                            <div class="w-[26px] h-[26px] shine-bg rounded-4xl flex justify-center border items-center ">
                                <i class="fa-solid fa-arrow-rotate-right text-[13px] "></i>
                            </div>
                        </div>
                        <div class="flex flex-col-reverse sm:flex-row gap-2 w-full items-center h-full md:w-auto">
                            <div class="  flex w-full sm:w-auto">
                                <x-button class="h-[26px] w-[70px] rounded-2xl items-center justify-center flex">
                                    <x-slot:buttonName>
                                        <span class="bodyFont font-semibold text-[10px]">
                                            Expand
                                        </span>
                                    </x-slot:buttonName>
                                </x-button>
                            </div>
                            <div class="w-full h-[26px] sm:w-auto">
                                <x-searchbar id="customSearch" placeholder="Search Salesman" class="h-[26px] w-[250px] headerColor text-[13px] rounded-4xl bg-transparent border focus:outline-none border-white" />
                            </div>
                        </div>
                    </div>

                    {{-- DataTable --}}
                    <div class="w-full  overflow-auto rounded-2xl" id="DataTable">
                        <x-datatable />
                    </div>

                </div>

            </div>

        </div>
    </div>
@endsection