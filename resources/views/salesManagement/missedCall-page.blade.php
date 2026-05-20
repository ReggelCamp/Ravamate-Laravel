<x-index title="Missed Call"/>
<div class="flex w-full h-[50px] justify-between items-center pl-2 pr-2 bg-blue-500">
    <div class="w-full h-full items-center ">
        <x-report-header-title title="Missed Call" />
    </div>
    <div class="w-fit h-[30px]">
        <x-datepicker/>
    </div>
</div>

{{-- <script>
    window.onload = function(){
        if(window.location.pathname === '/missedcall'){
            $('#datepicker').remove();
        }
    }
</script> --}}

<body class="w-full h-full">
    <div class="flex flex-col w-full h-full gap-5">
        <div class="flex w-full p-5 h-full justify-between">
            <div class="flex w-full h-full gap-5">
                <button class="bg-blue-500 w-[100px] rounded-xl">
                    Excel
                </button>
                <button class="bg-blue-500 bg-blue-500 w-[100px] rounded-xl">
                    Print
                </button>
                <button class="bg-blue-500 bg-blue-500 w-[100px] rounded-xl">
                    Copy
                </button>
            </div>
            <div class="w-full h-full flex justify-end">
                 <input type="text" class="border rounded-lg p-2  flex w-[200px]" placeholder="Search...">
            </div>
        </div>
        <div class="flex w-full h-full border">
            <x-datatable/>
        </div>
    </div>

</body>