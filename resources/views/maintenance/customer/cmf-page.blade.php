<x-index title="Customer Maintenance Form"/>
<div class="flex w-full h-[50px] justify-between items-center pl-2 pr-2 bg-blue-500">
    <div class="w-full h-full items-center ">
        <x-report-header-title title="Customer Maintenance Form" />
    </div>
    <div class="w-fit h-[30px]">
        <x-datepicker/>
    </div>
</div>

<body class="w-full h-full">
    <div class="w-full h-full flex flex-col p-5">
        <div class="flex w-full h-full justify-between">
            <div class="flex w-full gap-5 h-full">  
                <button class="btn-format">
                    <i class="fa-solid fa-arrow-rotate-right"></i>
                </button>
                <button class="btn-format">
                    Excel
                </button>
                <button class="btn-format">
                    CSV
                </button>
            </div>
            <x-searchbar/>
        </div>
        <x-datatable/>
    </div>    
</body>