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
        
        <div class="flex justify-between p-5 w-full h-full">  
            <div class="w-full flex max-h-[35px] ">
                <details class="dropdown">
                <summary class="btn ">open or close</summary>
                <ul class="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                </ul>
                </details>
            </div>

            <div class="flex w-full max-h-[35px] gap-5 justify-end ">
                <button class="btn">Default</button>
                <button class="btn">Default</button>
            </div>
        </div>

    </div>
</body>
@endsection