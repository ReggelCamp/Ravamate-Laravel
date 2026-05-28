@extends("layout.app")
@section("content")

<body class="w-full h-full">
    <div class="w-full h-full flex flex-col">
        <div class="flex w-full justify-between">
           <div class="flex w-full h-full justify-between items-center bg-primary">
                <div class="w-full h-[50px] pl-5">
                    <x-report-header-title title="Offsite Transaction" />
                </div>
                <div class="w-fit h-[30px] pr-5 text-accent">
                    <x-datepicker/>
                </div>
            </div> 
        </div>
        <div class="flex flex-col-reverse sm:flex-row w-full justify-between p-5 background_color">
            <div class="w-full h-full gap-2 items-center flex">
                <div class="w-[100px] h-[40px] flex ">
                    <x-button class="excelBtn">
                        <x-slot:buttonName>
                        Excel
                        </x-slot:buttonName>
                    </x-button>
                </div>
                <div class="w-[100px] h-[40px] flex">
                    <x-button class="printBtn">
                        <x-slot:buttonName>
                        Print
                        </x-slot:buttonName>
                    </x-button>
                </div>
                <div class="w-[100px] h-[40px] flex">
                    <x-button class="copyBtn">
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

