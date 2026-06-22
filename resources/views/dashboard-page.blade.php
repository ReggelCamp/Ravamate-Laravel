@extends('layout.app')
@section('content')
    <!DOCTYPE html>
    <html lang="en">
    <head>

    </head>

    <body class="w-full h-full">

        <script>
            $(document).ready(function () {
                $('#myTable').DataTable({
                    searching: false,
                    ordering:  false,
                    lengthChange: false,
                });
            });
        </script>

        <script>
            $(document).ready(function(){
                $('#dateButton').text(moment().format('LLL'));
            });
        </script>

        <div class="w-full h-full flex flex-col lg:flex-row overflow-y-scroll">

            
            <div class="order-last lg:order-first flex lg:flex-rox flex-col w-full lg:w-[500px] h-auto py-8 sm:py-0 sm:h-screen justify-center gap-5 lg:gap-20 items-center no-hover carouselBg">
                
                {{-- Logo --}}
                <div class="flex w-full justify-center items-center">
                    <div class="sm:w-[150px] w-[100px] h-[100px] flex items-center justify-center sm:h-[150px]">
                        <img src="/${item.logo[0]?.url}" class="object-cover themeLogo"/>
                    </div>
                </div>

                {{-- Carousel --}}
                <div class="w-full max-w-[500px] lg:max-w-[2000px] mx-auto  overflow-hidden">
                    <div class="owl-carousel" id="carouselContainer"></div>
                </div>

            </div>

            
            <div class="flex flex-col w-full sm:h-auto lg:h-full flex-1 border-l-1">

                {{-- MAP --}}
                <div class="w-full h-full">
                    <div class="w-full h-[50px] flex justify-between report_title items-center">
                        <div class="w-full h-[50px] items-center">
                            <x-report-header-title title="Dashboard"/>
                        </div>
                        <div class="flex w-[150px] sm:w-full h-[50px] whitespace-nowrap gap-2">
                            <x-datepicker displayOnly="true"/>
                        </div>
                    </div>
                    <div class="w-full h-[400px] lg:h-auto flex">
                    </div>
                </div>

                {{-- TABLE --}}
                <div class="w-full bodyFont h-auto flex flex-col tableSec">
                    <div class="w-full flex flex-col-reverse md:flex-row justify-between gap-5 p-5">
                        <div class="flex flex-col sm:flex-row gap-5 w-full md:w-auto">

                            <div class="w-full sm:w-[170px] h-[40px]">
                                <x-dropdown>
                                    <x-slot:dropdownName>
                                        Operation Type
                                    </x-slot:dropdownName>
                                    <li><a>Edit</a></li>
                                    <li><a>Duplicate</a></li>
                                    <li><a>Archive</a></li>
                                    <li><a>Move</a></li>
                                </x-dropdown>
                            </div>

                            <div class="w-full sm:w-[100px] h-[40px]">
                                <x-dropdown>
                                    <x-slot:dropdownName>
                                        Icon
                                    </x-slot:dropdownName>
                                    <li><a>Edit</a></li>
                                    <li><a>Duplicate</a></li>
                                    <li><a>Archive</a></li>
                                    <li><a>Move</a></li>
                                </x-dropdown>
                            </div>

                        </div>

                        <div class="flex flex-col-reverse sm:flex-row gap-5 w-full h-full md:w-auto">
                            <div class="h-[40px] flex w-full sm:w-auto">
                                <x-button>
                                    <x-slot:buttonName>
                                        Expand
                                    </x-slot:buttonName>
                                </x-button>
                            </div>
                            <div class="w-full sm:w-auto">
                                <x-searchbar id="customSearch"/>
                            </div>
                        </div>
                    </div>

                    <div class="overflow-auto w-full h-full">
                        <x-datatable/>
                    </div>
                </div>

            </div>

        </div>

    </body>
    </html>
@endsection