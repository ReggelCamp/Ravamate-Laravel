@extends('layout.app')
@section('content')
<div class="flex w-full h-[50px] justify-between items-center pl-2 pr-2 bg-blue-500">
    <div class="w-full h-full items-center ">
        <x-report-header-title title="DSR" />
    </div>
    <div class="w-fit h-[30px]">
        <x-datepicker/>
    </div>
</div>
<body class="bg-gray-300">
    <div class="w-full flex flex-col h-full">
        
        <div class="flex justify-between p-5  w-full h-full">  
            <div class="w-full flex max-h-[35px] r">
                <button class="bg-green-500 w-[150px] rounded-xl h-full">
                    Filter Salesman
                </button>
            </div>

            <div class="flex w-full max-h-[35px] gap-5 justify-end ">
                <button class="bg-green-500 w-[200px] h-full rounded-xl">
                    Filter Salesman
                </button>
                <button class="bg-green-500 w-[200px] h-full rounded-xl">
                    Filter Salesman
                </button>
            </div>
        </div>

    </div>
</body>
@endsection