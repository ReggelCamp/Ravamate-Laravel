<x-index title="Pending Orders"/>
<div class="flex w-full h-[50px] justify-between items-center pl-2 pr-2 bg-blue-500">
    <div class="w-full h-full items-center ">
        <x-report-header-title title="Pending Orders" />
    </div>
    <div class="w-fit h-[30px]">
        <x-datepicker/>
    </div>
</div>

<body class="w-full h-full">
    <div class="flex flex-col w-full h-full gap-5">
        <div class="flex w-full p-5 h-full justify-between">
            <div class="flex w-full h-full gap-5">
                
                 <el-dropdown class="inline-block">
                            <button class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-gray-600 text-white px-3 py-2 text-sm font-semibold shadow-sm 0">
                                Operation type
                                <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" class="-mr-1 size-5 text-gray-400">
                                <path d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" fill-rule="evenodd" />
                                </svg>
                            </button>
    
                            <el-menu anchor="bottom end" popover class="w-56 origin-top-right divide-y divide-white/10 rounded-md bg-gray-800 outline-1 -outline-offset-1 outline-white/10 transition transition-discrete [--anchor-gap:--spacing(2)] data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in">
                                <div class="py-1">
                                    <a href="#" class="block px-4 py-2 text-sm text-gray-300 focus:bg-white/5 focus:text-white focus:outline-hidden">Edit</a>
                                    <a href="#" class="block px-4 py-2 text-sm text-gray-300 focus:bg-white/5 focus:text-white focus:outline-hidden">Duplicate</a>
                                </div>
                            </el-menu>
                        </el-dropdown>

                <button class="bg-blue-500 w-[100px] rounded-xl">
                    Excel
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