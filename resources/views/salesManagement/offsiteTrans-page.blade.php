@extends("layout.app")
@section("content")

<body class="w-full h-full">
    <div class="w-full h-full flex flex-col">
        <div class="flex w-full justify-between">
           <div class="flex w-full h-full justify-between items-center primary_color">
                <div class="w-full h-[50px] pl-5">
                    <x-report-header-title title="Offsite Transaction" />
                </div>
                <div class="w-fit h-[30px] pr-5 ">
                    <x-datepicker/>
                </div>
            </div> 
        </div>
        <div class="flex flex-col-reverse sm:flex-row w-full justify-between p-5 background_color">
            <div class="w-full h-[30px] gap-3 items-center flex">
                <button class=" w-[80px]  rounded-2xl border">
                    Excel
                </button>
                 <button class=" w-[80px]  rounded-2xl border">
                    Print
                </button>
                 <button class=" w-[80px]  rounded-2xl border">
                    Copy
                </button>
            </div>
            <div class="flex w-full  h-[30px]">
                <x-searchbar/>
            </div>
        </div>
        <div class="w-full h-full overflow-auto">
            <x-datatable/>
        </div>
   </div>
</body>
@endsection

