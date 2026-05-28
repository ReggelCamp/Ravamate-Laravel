{{-- <x-index title="DCR"/> --}}
@extends('layout.app')
@section('content')
<body class="w-full h-full">
    <div class="flex flex-col w-full h-full">
         <div class="flex w-full h-[50px] justify-between items-center no-hover bg-primary p-5">
            <div class="w-full h-[50px]">
                <x-report-header-title title="DCR" />
            </div>
            <div class="w-fit h-[30px]">
                <x-datepicker/>
            </div>
        </div>
       <div class="w-full text-background p-5 flex flex-col-reverse gap-4 sm:flex-row sm:justify-between bg-secondary">
            <div class="flex flex-wrap gap-3">
                <div class="w-full h-[50px] flex gap-5">
                    {{-- dropdown --}}
                    <x-dropdown>
                        <x-slot:dropdownName>
                            Filter by Salesman
                        </x-slot:dropdownName>
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                    </x-dropdown>
                    {{-- Btn --}}
                     <x-button class="printBtn">
                        <x-slot:buttonName>
                        Print
                        </x-slot:buttonName>
                    </x-button>
                    <x-button class="copyBtn">
                        <x-slot:buttonName>
                            Copy
                        </x-slot:buttonName>
                    </x-button>
                </div>                
            </div>
            <div class="relative w-full sm:w-[500px]">
                <x-searchbar/>
            </div>
        </div>
         <div class="w-full max-h-96 text-background flex flex-col secondary_color overflow-auto ">
            <x-datatable/>
         </div>
    </div>
</body>
</html>
@endsection

