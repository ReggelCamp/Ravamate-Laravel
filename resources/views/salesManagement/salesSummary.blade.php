<x-index title="Sales Summary"/>
<div class="flex w-full h-[50px] justify-between items-center pl-2 pr-2 bg-blue-500">
    <div class="w-full h-full items-center ">
        <x-report-header-title title="Sales summary" />
    </div>
    <div class="w-fit h-[30px]">
        <x-datepicker/>
    </div>
</div>

<body class="w-full h-full">
    <div class="flex w-full h-full flex-col">
        <div class="flex justify-between w-full h-full p-5">
            <div class="flex gap-5 w-full h-full">
                <button class="w-[100px] bg-blue-500 rounded-xl">
                    Excel
                </button>
                <button class="w-[100px] bg-blue-500 rounded-xl">
                    Print
                </button>
                <button class="w-[100px] bg-blue-500 rounded-xl">
                    Copy
                </button>
            </div>
            <x-searchbar/>
        </div>
        <x-datatable/>
    </div>
</body>