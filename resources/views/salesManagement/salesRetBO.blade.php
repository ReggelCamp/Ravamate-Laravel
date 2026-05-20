<x-index title="Sales Return BO"/>
<x-report-header-title title="Sales Return BO"/>

<body class="w-full h-full">
    <div class="w-full flex h-full flex-col">
        <div class="w-full h-full flex justify-between p-5">
            <div class="flex w-full h-full gap-5">
                <button class="w-[100px] bg-blue-500 rounded-xl">
                    Print
                </button>
                <button class="w-[100px] bg-blue-500 rounded-xl">
                    Excel
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