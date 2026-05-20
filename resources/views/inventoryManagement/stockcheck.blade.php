<x-index title="Stock Check Report"/>
<div class="flex w-full h-[50px] justify-between items-center pl-2 pr-2 bg-blue-500">
    <div class="w-full h-full items-center ">
        <x-report-header-title title="Stock Check Report" />
    </div>
    <div class="w-fit h-[30px]">
        <x-datepicker/>
    </div>
</div>

<body class="w-full h-full">
    <div class="flex flex-col w-full h-full">
        <div class="w-full h-full flex p-5">
            <div class="flex w-full h-full gap-5">
                <button class="flex w-[100px] h-[25px] rounded-xl items-center justify-center bg-blue-500">
                    Print
                </button>
                <button class="flex w-[100px] h-[25px] rounded-xl items-center justify-center bg-blue-500">
                    Excel
                </button>
            </div>
            <x-searchbar/>
        </div>
        <x-datatable/>
    </div>
</body>