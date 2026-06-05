@extends('layout.app')
@section('content')

<body class="w-full min-h-screen">

    <div class="w-full bodyBg min-h-screen flex flex-col px-4 sm:px-10 lg:px-20 py-6">

     
        <div class="mt-12 sm:mt-16 lg:mt-20 flex flex-col gap-15">

            
            <div class="flex flex-col lg:flex-row gap-15 lg:gap-10">

                {{-- User Config --}}
                <div class="bg-base-100 w-full lg:w-1/2 border rounded-2xl shadow-sm">

                    
                    <div class="relative flex justify-center items-center h-[50px] rounded-t-2xl bg-blue-500">
                        <div class="avatar absolute -top-8 left-6 sm:left-10">
                            <div class="w-[70px] h-[70px] rounded-full border-2 border-white flex items-center justify-center primaryBg headerColor">
                                <i class="fa-solid fa-user-gear text-3xl"></i>
                            </div>
                        </div>
                        <h2 class="header_title font-semibold text-sm sm:text-lg">
                            USER CONFIGURATION
                        </h2>
                    </div>

            
                    <div class="flex flex-col bodyColor p-4 sm:p-5 gap-2 text-sm sm:text-base">

                        <div class="flex flex-col sm:flex-row sm:gap-10">
                            <span class="text-sm text-gray-400 w-28">FULLNAME</span>
                            <span class="font-medium" id="name"></span>
                        </div>

                        <div class="divider my-1"></div>

                        <div class="flex flex-col sm:flex-row sm:gap-10">
                            <span class="text-sm text-gray-400 w-28">Email</span>
                            <span class="font-medium" id="email"></span>
                        </div>

                        <div class="divider my-1"></div>

                        <div class="flex flex-col sm:flex-row sm:gap-10">
                            <span class="text-sm text-gray-400 w-28">Contact Number</span>
                            <span class="font-medium" id="contact_number"></span>
                        </div>

                        <div class="divider my-1"></div>

                        <div class="flex flex-col sm:flex-row sm:gap-10">
                            <span class="text-sm text-gray-400 w-28">Account</span>
                            <span class="font-medium" id="account"></span>
                        </div>

                    </div>
                </div>

                {{-- Server Config --}}
                <div class="bg-base-100 w-full lg:w-1/2 border rounded-2xl shadow-sm">

                    <div class="relative h-[50px] flex justify-center items-center rounded-t-2xl bg-blue-500">
                        <div class="avatar absolute -top-8 left-6 sm:left-10">
                            <div class="w-[70px] h-[70px] flex items-center justify-center primaryBg headerColor border-2 border-white rounded-full">
                                <i class="fa-solid fa-server"></i>
                            </div>
                        </div>
                        <h2 class="font-semibold text-sm sm:text-lg">Card title!</h2>
                    </div>

                    <div class="p-4 sm:p-5">

                        <div class="flex flex-col gap-2 text-sm sm:text-base">

                            @for ($i = 0; $i < 5; $i++)
                                <div class="flex flex-col sm:flex-row sm:gap-10">
                                    <span class="text-sm text-gray-400 w-28">FULLNAME</span>
                                    <span class="font-medium"></span>
                                </div>
                                <div class="divider my-1"></div>
                            @endfor

                        </div>

                    </div>
                </div>

            </div>

             
            <div class="bg-base-100 w-full border rounded-2xl shadow-sm">

                <div class="relative h-[50px] flex justify-center items-center rounded-t-2xl bg-blue-500">
                    <div class="avatar absolute -top-8 left-6 sm:left-10">
                        <div class="w-[70px] h-[70px] flex items-center justify-center primaryBg headerColor border-2 border-white rounded-full">
                            <i class="fa-solid fa-info"></i>
                        </div>
                    </div>
                    <h2 class="font-semibold text-sm sm:text-lg">Card title!</h2>
                </div>

                <div class="p-4 sm:p-5">
                    <p class="text-sm sm:text-base">
                        A card component has a figure, a body part, and inside body there are title and actions parts
                    </p>

                    <div class="flex justify-end mt-4">
                        <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>

            </div>

        </div>
    </div>

</body>

@endsection