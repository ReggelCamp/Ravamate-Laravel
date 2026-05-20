<x-index title="Delivery Monitoring"/>
<div class="flex w-full h-[50px] justify-between items-center pl-2 pr-2 bg-blue-500">
    <div class="w-full h-full items-center ">
        <x-report-header-title title="Delivery Monitoring" />
    </div>
    <div class="w-fit h-[30px]">
        <x-datepicker/>
    </div>
</div>
<body class="w-full h-full">
    <div class="page-format">
        <div class="w-full h-full flex p-5 justify-between">
            <div class="flex w-full h-full gap-5">
                <button class="btn-format">
                    Print
                </button>
                <button class="btn-format">
                    Excel
                </button>
                <button class="btn-format">
                    Copy
                </button>
            </div>
            <x-searchbar/>
        </div>
        <x-datatable/>
    </div>
</body>