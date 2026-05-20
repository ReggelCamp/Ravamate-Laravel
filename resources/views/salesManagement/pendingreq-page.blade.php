<x-index title="Pending Request"/>
<div class="flex w-full h-[50px] justify-between items-center pl-2 pr-2 bg-blue-500">
    <div class="w-full h-full items-center ">
        <x-report-header-title title="Pending Request" />
    </div>
    <div class="w-fit h-[30px]">
        <x-datepicker/>
    </div>
</div>

<script>
    window.onload = function(){
        if(window.location.pathname === "/pendingrequest"){
            $('#datepicker').remove();
        }
    }
</script>

<body class="w-full h-full">
        <div class="w-full p-5">

    <!-- Tabs -->
    <div class="flex gap-2 border-b">

        <button 
            data-id="#pendingbo"
            class="tab_btn px-4 py-2 bg-blue-500 text-white rounded-t-lg">
            SO Transaction
        </button>


    </div>

    <div class="p-5 border bt-none">

        <div id="pendingbo" class="tab-content">
           <div class="flex flex-col w-full h-full ">

                <div class="flex w-full  h-full gap-3 ">
                    <div class="w-full gap-5 flex">
                        <div class=" h-full  flex">
                            <el-dropdown class="inline-block">
                                <button class="inline-flex w-full h-[30px] items-center justify-center gap-x-1.5 rounded-md bg-gray-600 text-white px-3 py-2 text-sm font-semibold shadow-sm 0">
                                    Export
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
                        </div>
                        <div class="flex h-[30px]">
                            <x-datepicker/>
                        </div>
                    </div>

                        <div class=" h-full ">
                             <input type="text" class="border rounded p-2 h-[30px]" placeholder="Search...">
                        </div>
                </div>
                    <x-datatable/>
            </div>
        </div>

    </div>

</div>
</body>
