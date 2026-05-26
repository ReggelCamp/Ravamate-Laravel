@extends('layout.app')
@section('content')

<body class="w-full h-full">
    <div class="flex w-full h-full flex-col">
        <div class="flex w-full h-[50px] justify-between p-5 primary_color items-center">
            <div class="flex w-full ">
                <x-report-header-title title="Delivery Monitoring"/>
            </div>
            <div class="flex w-full h-[30px] justify-end">
                <x-datepicker/>
            </div>
        </div>
        <div class="flex flex-col-reverse sm:flex-row w-full justify-between gap-5 p-5 background_color">
            <div class="w-full h-full gap-2 items-center flex">
                <div class="w-[100px] h-[40px] flex ">
                    <x-button>
                        <x-slot:buttonName>
                        Excel
                        </x-slot:buttonName>
                    </x-button>
                </div>
                <div class="w-[100px] h-[40px] flex">
                    <x-button>
                        <x-slot:buttonName>
                        Print
                        </x-slot:buttonName>
                    </x-button>
                </div>
                <div class="w-[100px] h-[40px] flex">
                    <x-button>
                        <x-slot:buttonName>
                        Copy
                        </x-slot:buttonName>
                    </x-button>
                </div>
            </div>
            <div class="flex w-full h-[40px]">
                <x-searchbar/>
            </div>
        </div>
        <div class="w-full h-full overflow-auto">
            <x-datatable/>
        </div>
    </div>
</body>
@endsection