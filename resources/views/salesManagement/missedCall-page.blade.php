@extends("layout.app")
@section("content")

<body class="w-full h-full">
    <div class="w-full h-full flex flex-col">
        <div class="flex w-full justify-between">
           <div class="flex w-full h-full justify-between items-center bg-primary">
                <div class="w-full h-[50px] pl-5">
                    <x-report-header-title title="Missed Call" />
                </div>
                <div class="w-fit h-[30px] pr-5">
                    <x-datepicker/>
                </div>
            </div> 
        </div>
        <div class="flex flex-col-reverse sm:flex-row w-full justify-between gap-5 p-5 bg-background">
            <div class="flex  h-[30px]">
                <x-dropdown> 
                    <x-slot:dropdownName>
                            Export
                        </x-slot:dropdownName>
            
                        <li><a class="printBtn">Print</a></li>
                        <li><a class="csvBtn">CSV</a></li>
                        <li><a class="excelBtn">Excel</a></li>
                        <li><a class="copyBtn">Copy</a></li>
                </x-dropdown>
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

