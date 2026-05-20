<x-index title="Sales Report"/>
<div class="flex w-full h-[50px] justify-between items-center pl-2 pr-2 bg-blue-500">
    <div class="w-full h-full items-center ">
        <x-report-header-title title="Sales Report" />
    </div>
    <div class="w-fit h-[30px]">
        <x-datepicker/>
    </div>
</div>

<body class="w-full h-full">
    <div class="flex w-full h-full flex-col">
        <div class="flex w-full h-full justify-between p-5">
            <div class="w-[250px] bg-gray-200 rounded-xl">
            </div>

            <div class="w-full h-full flex justify-end">
                 <input type="text" class="border rounded-lg p-2  flex w-[200px]" placeholder="Search...">
            </div>
        </div>
        <x-datatable/>
    </div>

</body>