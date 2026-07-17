@extends('layout.app')
@section('content')

      <div class="w-full flex flex-col mainBG">
            <x-header/>
        

    <div class="w-full h-full flex flex-col  lg:flex-row overflow-y-scroll ">

        {{-- Carousel Panel --}}
        <div class="order-last DarkMode  lg:order-first flex flex-col w-full lg:w-[400px] h-auto py-8 sm:py-0 sm:h-screen justify-center gap-5 lg:gap-20 items-center ">

            {{-- Logo --}}
            <div class="flex w-full justify-center items-center">
                <div class="w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] flex items-center justify-center pt-[30px] lg:pt-[80px]">
                    <img src="/${item.logo[0]?.url}" class="object-cover themeLogo"/>
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
                <div class="w-full h-[50px] flex-shrink-0 flex justify-between report_title items-center ">
                    <div class="w-full items-center">
                        <x-report-header-title title="Dashboard"/>
                    </div>
                    <div class="flex w-[150px] sm:w-full h-[50px] whitespace-nowrap gap-2">
                        <x-datepicker displayOnly="true"/>
                    </div>
                </div>

                {{-- Map Body --}}
                <div class="w-full h-full bg-white flex-1">
                    <div class="w-full h-full flex justify-center p-2 items-end">
                        <div class="flex w-[450px] gap-5 ps-2 rounded-lg h-[35px] bg-gray-200">
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
            <div class="w-full bodyFont flex flex-col tableSec h-[400px] sm:h-[350px] lg:h-[300px] ">

                {{-- Toolbar --}}
                <div class="w-full h-[217px] sm:h-[60px] flex-shrink-0 flex flex-col-reverse sm:flex-row justify-between gap-5 p-5">
                    <div class="flex flex-col sm:flex-row gap-5 w-full md:w-auto">
                        <div class="w-full sm:w-[170px] h-[30px]">
                            <x-dropdown>
                                <x-slot:dropdownName>Operation Type</x-slot:dropdownName>
                                <li><a>Edit</a></li>
                                <li><a>Duplicate</a></li>
                                <li><a>Archive</a></li>
                                <li><a>Move</a></li>
                            </x-dropdown>
                        </div>
                        <div class="w-full sm:w-[100px] h-[30px]">
                            <x-dropdown>
                                <x-slot:dropdownName>Icon</x-slot:dropdownName>
                                <li><a>Edit</a></li>
                                <li><a>Duplicate</a></li>
                                <li><a>Archive</a></li>
                                <li><a>Move</a></li>
                            </x-dropdown>
                        </div>
                    </div>
                    <div class="flex flex-col-reverse sm:flex-row gap-5 w-full h-full md:w-auto">
                        <div class="h-[30px] flex w-full sm:w-auto">
                            <x-button id="ExpandBtn">
                                <x-slot:buttonName>Expand</x-slot:buttonName>
                            </x-button>
                        </div>
                        <div class="w-full h-[30px] sm:w-auto">
                            <x-searchbar id="customSearch" class="h-[30px]"/>
                        </div>
                    </div>
                </div>

                {{-- DataTable --}}
                <div class="w-full flex-1 overflow-auto" id="DataTable">
                    <x-datatable />
                </div>

            </div>

        </div>

    </div>
</div>
@endsection