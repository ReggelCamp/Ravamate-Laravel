@extends('layout.app')
@section('content')
<body class="w-full h-full">
    <div class="w-full bodyBg h-full flex gap-10 flex-col">
        <div class="flex w-full h-[250px] border p-5 pl-20 pr-20 justify-between">
            {{-- User Config --}}
            <div class="bg-base-100 w-[680px] border shadow-sm">
                <div class="card-head w-full h-[50px] bg-blue-500">
                    <div class="avatar">
                    <div class="w-[40px]  rounded-full">
                        <img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" />
                    </div>
                    </div>  
                </div>
                <div class="card-body">
                    <h2 class="card-title">Card title!</h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div class="card-actions justify-end">
                    <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
            {{-- Server Config --}}
            <div class=" bg-base-100 w-[680px] border shadow-sm">
                <div class="card-body">
                    <h2 class="card-title">Card title!</h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div class="card-actions justify-end">
                    <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full flex h-[320px] pl-20 pr-20 ">
            <div class="bg-base-100 w-full border shadow-sm">
                <div class="card-body">
                    <h2 class="card-title">Card title!</h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div class="card-actions justify-end">
                    <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
@endsection