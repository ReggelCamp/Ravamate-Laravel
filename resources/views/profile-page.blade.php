@extends('layout.app')
@section('content')

    <body class="w-full h-full">
        <div class="w-full bodyBg h-full flex gap-10 pl-20 pr-20  flex-col">
            <div class="flex w-full h-[400px] pt-15 justify-between">
                {{-- User Config --}}
                <div class="bg-base-100 w-[680px] border rounded-2xl shadow-sm">

                    <!-- Header -->
                    <div class="relative flex justify-center items-center h-[50px] rounded-t-2xl bg-blue-500">
                        <div class="avatar absolute -top-8 left-10">
                            <div
                                class="w-[70px] rounded-full border-2 border-white justify-center flex items-center h-[70px] bg-white">
                                <i class="fa-solid fa-user-gear text-3xl"></i>
                            </div>
                        </div>
                        <h2 class="text-white font-semibold text-lg">USER CONFIGURATION</h2>
                    </div>

                    <!-- Body -->
                    <div class="flex flex-col p-5 gap-1">
                        <div class="flex gap-20">
                            <span class="text-sm text-gray-400 w-28">FULLNAME</span>
                            <span class="font-medium" id="name"></span>
                        </div>
                        <div class="divider my-1"></div>

                        <div class="flex gap-20">
                            <span class="text-sm text-gray-400 w-28">Email</span>
                            <span class="font-medium" id="email"></span>
                        </div>
                        <div class="divider my-1"></div>

                        <div class="flex gap-20">
                            <span class="text-sm text-gray-400 w-28">Contact Number</span>
                            <span class="font-medium" id="contact_number"></span>
                        </div>
                        <div class="divider my-1"></div>

                        <div class="flex gap-20">
                            <span class="text-sm text-gray-400 w-28">Account</span>
                            <span class="font-medium" id="account"></span>
                        </div>
                    </div>
                </div>
                {{-- Server Config --}}
                <div class="bg-base-100 w-[680px] border rounded-2xl shadow-sm">
                    <div
                        class="card-head w-full relative h-[50px] flex justify-center items-center rounded-t-2xl bg-blue-500">
                        <div class="avatar absolute -top-8 left-10 ">
                            <div
                                class="w-[70px] h-[70px] items-center justify-center flex bg-white  border-2 border-base-300 rounded-full  border-white rounded-full">
                                <i class="fa-solid fa-server"></i>
                            </div>
                        </div>
                        <h2 class="card-title ">Card title!</h2>
                    </div>
                    <div class="card-body">
                        <div class="flex flex-col p-5 gap-1">
                            <div class="flex gap-20">
                                <span class="text-sm text-gray-400 w-28">FULLNAME</span>
                                <span class="font-medium"></span>
                            </div>
                            <div class="divider my-1"></div>

                            <div class="flex gap-20">
                                <span class="text-sm text-gray-400 w-28">Full Name</span>
                                <span class="font-medium"></span>
                            </div>
                            <div class="divider my-1"></div>

                            <div class="flex gap-20">
                                <span class="text-sm text-gray-400 w-28">Full Name</span>
                                <span class="font-medium"></span>
                            </div>
                            <div class="divider my-1"></div>

                            <div class="flex gap-20">
                                <span class="text-sm text-gray-400 w-28">Full Name</span>
                                <span class="font-medium"></span>
                            </div>
                            <div class="divider my-1"></div>

                            <div class="flex gap-20">
                                <span class="text-sm text-gray-400 w-28">Full Name</span>
                                <span class="font-medium"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bg-base-100 w-full h-[320px] border rounded-2xl shadow-sm">
                <div class="card-head relative w-full h-[50px] flex justify-center items-center rounded-t-2xl bg-blue-500">
                    <div class="avatar absolute -top-8 left-10 ">
                        <div
                            class="w-[70px] h-[70px] flex items-center justify-center bg-white border-2 border-base-300 rounded-full  border-white rounded-full">
                            <i class="fa-solid fa-info"></i>
                        </div>
                    </div>
                    <h2 class="card-title ">Card title!</h2>
                </div>
                <div class="card-body">
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    </body>
@endsection