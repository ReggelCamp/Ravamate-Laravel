@extends('layout.app')
@section('content')

<body class="w-full min-h-screen">

<div class="flex flex-col w-full px-5 gap-5 bodyBg">

    <!-- TITLE -->
    <h1 class="text-2xl text-center py-5">
        Eric Data Alignment
    </h1>

    <!-- DIVIDER -->
    <div class="flex justify-center w-full">
        <div class="divider w-full max-w-[1200px]"></div>
    </div>

    <!-- CARDS WRAPPER -->
    <div class="flex flex-col sm:flex-row gap-5 w-full  items-center sm:items-stretch">

        <!-- CARD 1 -->
        <div class="card bg-base-100 image-full w-full sm:w-96 h-[200px] shadow-sm">

            <figure>
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes"
                />
            </figure>

            <div class="card-body p-4">
                <h2 class="card-title">Card Title</h2>
                <p>
                    A card component has a figure, a body part, and inside body there are title and actions parts
                </p>
                <div class="card-actions justify-end">
                    <div class="w-[100px] h-[40px] flex">
                        <x-button>
                            <x-slot:buttonName>
                                Details
                            </x-slot:buttonName>
                        </x-button>
                    </div>
                </div>
            </div>

        </div>

        <!-- CARD 2 -->
        <div class="card bg-base-100 image-full w-full sm:w-96 h-[200px] shadow-sm">

            <figure>
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes"
                />
            </figure>

            <div class="card-body p-4">
                <h2 class="card-title">Card Title</h2>
                <p>
                    A card component has a figure, a body part, and inside body there are title and actions parts
                </p>
                <div class="card-actions justify-end">
                    <div class="w-[100px] h-[40px] flex">
                        <x-button>
                            <x-slot:buttonName>
                                Details
                            </x-slot:buttonName>
                        </x-button>
                    </div>
                </div>
            </div>
        </div>

    </div>

</div>

</body>

@endsection