@extends("layout.app")
@section("content")

<body class="w-full h-full">
    <div class="w-full h-full flex flex-col">
        <div class="flex w-full justify-between">
           <div class="flex w-full h-full justify-between items-center primary_color">
                <div class="w-full h-[50px] pl-5">
                    <x-report-header-title title="Unprocessed Orders" />
                </div>
                <div class="w-fit h-[30px] pr-5">
                    <x-datepicker/>
                </div>
            </div> 
        </div>
        <div class="flex flex-col-reverse sm:flex-row w-full justify-between p-5 background_color">
            <div class="w-full h-[30px] gap-5  items-center flex m-2">
                <button class="btn" popovertarget="popover-1" style="anchor-name:--anchor-1">
                    Filter Transaction
                    <i class="fa-solid fa-angle-down"></i>
                </button>
                    <ul class="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
                    popover id="popover-1" style="position-anchor:--anchor-1">
                    <li><a>Booking Transaction</a></li>
                    <li><a>Extruct Transaction</a></li>
                    <li><a>BTDT Transaction</a></li>
                    </ul>
                 <button class=" w-[80px]  rounded-2xl border">
                    Print
                </button>
            </div>
            <div class="flex w-full h-[30px]">
                <x-searchbar/>
            </div>
        </div>
        <div class="w-full h-full overflow-auto">
            <x-datatable/>
        </div>
   </div>
</body>
@endsection

