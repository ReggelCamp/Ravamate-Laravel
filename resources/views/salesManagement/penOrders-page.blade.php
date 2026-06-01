@extends("layout.app")
@section("content")

<body class="w-full h-full">
    <div class="w-full h-full flex flex-col">
        <div class="flex w-full justify-between">
           <div class="flex w-full h-full justify-between items-center bg-primary">
                <div class="w-full h-[50px] pl-5">
                    <x-report-header-title title="Unprocessed Orders" />
                </div>
                <div class="w-fit h-[30px] pr-5 ">
                    <x-datepicker/>
                </div>
            </div> 
        </div>
        <div class="flex flex-col-reverse sm:flex-row w-full justify-between p-5 background_color">
            <div class="w-full h-full gap-5 items-center flex ">
                <div class="flex w-[200px] h-[30px]">
                    <x-dropdown> 
                        <x-slot:dropdownName>
                                Filter Transaction
                            </x-slot:dropdownName>
        
                            <li><a>Edit</a></li>
                            <li><a>Duplicate</a></li>
                            <li><a>Archive</a></li>
                            <li><a>Move</a></li>
                    </x-dropdown>
                </div>
                <div class="flex w-[100px] h-[30px]">
                    <x-button>
                        <x-slot:buttonName>
                            Expand
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

