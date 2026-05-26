@extends('layout.app')
@section('content')
    <!DOCTYPE html>
    <html lang="en">
    <head>

        <style>

            .owl-item.active.center{
                z-index: 10000 !important;
            }

        </style>

    </head>

    <body class="w-full h-screen">

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
            $(".owl-carousel").owlCarousel({
                loop: true,
                margin: 0,
                center: true,
                nav: true,
                autoplay: true,
                autoplayTimeout: 3000,
                responsive: {
                    0: { items: 1 },
                    768: { items: 2 },
                    1024: { items: 3 }
                }
            });

            $('#dateButton').text(moment().format('LLL'));
            });


        </script>

        {{-- <script>
            $(document).ready(function () {
                $(".owl-carousel").owlCarousel({
                    loop: true,
                    margin: 10,
                    center: true,
                    nav: true,
                    dots: true,
                    autoplay: true,
                    autoplayTimeout: 3000,
                    autoplayHoverPause: true,
                    responsive: {
                        0: { items: 1 },
                        768: { items: 1 },
                        1024: { items: 1 }
                    }
                });

                $('#dateButton').text(moment().format('LLL'));
            });
        </script> --}}



        <div class="w-full h-full flex">
            <div class="hidden lg:flex flex-col w-[500px] p-5 h-screen justify-center gap-20 items-center primary_color ">
                {{-- RAVAMATE LOGO --}}
                <div class="w-[150px] h-[150px]">
                    {{-- <img src="/static/images/ravamatedashboard.png" class="object-cover"/> --}}
                    <img src="/${item.logo[0]?.url}" class="object-cover" id="themeLogo"/>
                </div>

                {{-- Carousel --}}
                <div class="w-full sm:max-w-[900px]">
                   <div class="owl-carousel ">
                        <div class="item ">
                            <img src="/static/images/MCP Screen.png" style="overflow: visible;" class="w-[650px] h-[300px]  object-cover"/>
                        </div>
                        <div class="item ">
                            <img src="/static/images/Product List.png"style="overflow: visible; z-index:1000" class="w-[650px] h-[300px] object-cover"/>
                        </div>
                        <div class="item ">
                            <img src="/static/images/MTD Overview.png"style="overflow: visible;" class="w-[650px] h-[300px] object-cover"/>
                        </div>
                    </div>
                </div>

                {{-- <div class="w-full max-w-5xl mx-auto">
                    <div class="owl-carousel">

                        <div class="item flex justify-center items-center">
                            <img src="/static/images/MCP Screen.png" class="w-full h-auto max-h-[400px]  object-contain" />
                        </div>

                        <div class="item flex justify-center items-center">
                            <img src="/static/images/Product List.png" class="w-full h-auto max-h-[400px] object-contain" />
                        </div>

                        <div class="item flex justify-center items-center">
                            <img src="/static/images/MTD Overview.png" class="w-full h-auto max-h-[400px] object-contain" />
                        </div>
                    </div>
                </div> --}}

            </div>


            <div class="flex flex-col w-full h-full flex-1 border-l-1">

                {{-- MAP --}}
                <div class="w-full h-full">
                    <div class="w-full h-[50px] flex justify-between items-center bg-blue-500 p-2 border-1">
                        <div class="w-full h-[30px] items-center">
                            <x-report-header-title title="Dashboard"/>
                        </div>
                        <div class="flex w-fit h-[30px]  whitespace-nowrap gap-2 ">
                            <x-datepicker displayOnly="true"/>
                        </div>
                    </div>
                </div>

                {{-- TABLE --}}
                <div class="w-full h-full flex flex-col bg-yellow-500">
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
                                <x-searchbar/>
                            </div>
                        </div>
                    </div>
                    <div class="overflow-auto">
                        <x-datatable/>
                    </div>
                </div>
            </div>
        </div>



    </body>
    </html>
@endsection