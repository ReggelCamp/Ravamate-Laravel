<x-index title="MCP Layout"/>
<div class="flex w-full h-[50px] justify-between items-center pl-2 pr-2 bg-blue-500">
    <div class="w-full h-full items-center ">
        <x-report-header-title title="MCP Layout" />
    </div>
    <div class="w-fit h-[30px]">
        <x-datepicker/>
    </div>
</div>

<body class="w-full h-full">
    <div class="flex flex-col w-full h-full p-5">
        <div class="flex w-full h-full justify-between">
             <div class="flex w-full gap-5 h-full">  
                <button class="btn-format">
                    Export Report
                </button>
                <button class="btn-format">
                    Download Template
                </button>
                <button class="btn-format">
                    Upload Template
                </button>
                <button class="btn-format">
                    Filter Result
                </button>
            </div>
            <x-searchbar/>
        </div>
        <x-datatable/>
    </div>

</body>