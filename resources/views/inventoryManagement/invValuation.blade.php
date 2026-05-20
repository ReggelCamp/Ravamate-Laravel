<x-index title="Inventory Valuation"/>
<div class="flex w-full h-[50px] justify-between items-center pl-2 pr-2 bg-blue-500">
    <div class="w-full h-full items-center ">
        <x-report-header-title title="Inventory Validation" />
    </div>
    <div class="w-fit h-[30px]">
        <x-datepicker/>
    </div>
</div>
<body class="w-full h-full text-black bg-white">

    <div class="flex w-full h-full flex-col">
        <div class="flex w-full h-full justify-between p-5">
            <div class="flex w-full h-full gap-5 text-white">
                <button class="btn h-[27px] rounded-xl bg-blue-500 text-white" onclick="my_modal_3.showModal()">open modal</button>
               
                <dialog id="my_modal_3" class="modal text-black h-full">
                        <div class="modal-box overflow-visible">
                            <form method="dialog" class="">
                            <div class="flex w-full h-full  ">
                                <h1 class="text-2xl font-bold"> Salesman List</h1>
                                <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </div>
                        </form>
                         <div class="divider"></div>
                        <form>
                            <div class="flex w-full h-full items-center gap-5">
                                <h1> Salesman:</h1>
                                <details class="dropdown">
                                <summary class="btn m-1 w-[200px] ">
                                    Select Salaeman
                                    <i class="fa-solid fa-angle-down"></i>
                                </summary>
                                <ul class="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                    <li><a>Item 1</a></li>
                                    <li><a>Item 2</a></li>
                                </ul>
                                </details>
                            </div>
                                <div class="divider"></div>
                            <div class="flex w-full h-full justify-end text-white gap-5">
                                <button class="flex w-[100px] h-[25px] rounded-xl items-center justify-center bg-blue-500">
                                    Filter
                                </button>
                                <button class="flex w-[100px] h-[25px] rounded-xl items-center justify-center bg-red-500">
                                    Close
                                </button>
                             </div>

                        </form>
                    </div>
                </dialog>

                <button class="flex w-[100px] h-[25px] rounded-xl items-center justify-center bg-blue-500">
                    Print
                </button>
                <button class="flex w-[100px] h-[25px] rounded-xl bg-blue-500 items-center justify-center">
                    Copy
                </button>
            </div>
            <x-searchbar/>
        </div>
            <x-datatable/>
    </div>
</body>
