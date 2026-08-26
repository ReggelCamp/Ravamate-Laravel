@extends('layout.app')
@section('headerTitle', 'DATA ALIGNMENT')
@section('content')
@section('title', 'DATA ALIGNMENT')
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>

    <style>
        #syncConfirmModal .modal-box {
            position: fixed;
            top: 40px;
            left: 50%;
            transform: translateX(-50%);
            margin: 0;
        }

        .dropdown, .dropdownName {
            width: 100% !important;
        }
    </style>

    <div class="Linear_BG w-full h-screen overflow-y-auto px-4 py-6">

        <div class="flex flex-col w-full px-25 pt-5">

            <!-- TITLE -->
            <h1 class="text-2xl text-center text-[30px] font-medium headerColor">
                CDO Sync
            </h1>

            <!-- DIVIDER -->
            <div class="flex justify-center w-full">
                <div class="divider w-full max-w-[1200px]"></div>
            </div>

            <!-- CARDS WRAPPER -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-15 py-6 cardContent">

            </div>

            <h1 class="text-2xl text-center text-[30px] font-medium headerColor">
                SFA Plus Sync
            </h1>

            <!-- DIVIDER -->
            <div class="flex justify-center w-full">
                <div class="divider w-full max-w-[1200px]"></div>
            </div>


            <!-- CARDS WRAPPER -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-15 py-6 SfaContent mb-10">

            </div>

        </div>
    </div>

    <dialog id="syncConfirmModal" class="modal">
        <div class="modal-box pt-0 pb-0">
            <h3 class="font-bold text-lg" id="syncModalTitle"></h3>
            <p class="py-4" id="syncModalBody">Are you sure you want to run this sync?</p>
            <div class="modal-action">
                <form method="dialog" class="flex gap-2">
                    <button class="btn">Cancel</button>
                    <button type="button" id="syncConfirmBtn" class="btn btn-primary">Execute</button>
                </form>
            </div>
        </div>
    </dialog>

    <dialog id="cdo_sync" class="modal">
        <div class="modal-box p-0">
            <form method="dialog">
                <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <h3 class="text-lg font-bold text-[20px] p-5">Select Service Type</h3>
            <span class="w-full border-t border-gray-300 flex"></span>
            <div class="flex p-10 px-15 justify-between">
                <div
                    class="Service_type border w-[160px] h-[147px] sheenFilterBtn items-center rounded-[20px] justify-center flex flex-col cursor-pointer hover:bg-gray-100 transition-colors">
                    <i class="fas fa-cube text-[48px]"></i>
                    <span class="flex font-medium">Frozen Products</span>
                </div>
                <div
                    class="Service_type border w-[160px] h-[147px] items-center sheenFilterBtn rounded-[20px] justify-center flex flex-col cursor-pointer hover:bg-gray-100 transition-colors">
                    <i class="fas fa-cubes text-[48px]"></i>
                    <span class="flex font-medium">Grocery Products</span>
                </div>
            </div>
        </div>
    </dialog>

    <dialog id="productSyncModal" class="modal">
        <div class="modal-box p-0 rounded-2xl overflow-visible">

            <!-- HEADER -->
            <div class="flex items-center justify-between p-5 border-b">
                <h1 class="text-xl font-semibold">Salesman</h1>
                <form method="dialog">
                    <button class="btn btn-sm btn-circle btn-ghost">✕</button>
                </form>
            </div>

            <!-- BODY -->
            <div class="flex flex-col w-full">

                <!-- CONTENT -->
                <div class="w-full p-5">

                    <div class="relative w-full">
                        <x-dropdown class="w-full">

                            <x-slot:dropdownName class="w-full">
                                <span
                                    class="flex items-center justify-between w-full h-[40px] px-5 border rounded-xl sheenFilterBtn font-medium text-[12px]">
                                    <span class="flex items-center gap-2">
                                        <span>Select Salesman</span>
                                    </span>

                                    <i class="mdi mdi-chevron-down text-base"></i>
                                </span>
                            </x-slot:dropdownName>

                            <ul id="salesmanSelect"
                                class="dropdown_item w-[300px] max-h-[300px] overflow-y-auto p-2 bg-white border rounded-xl z-[999999]">
                            </ul>

                        </x-dropdown>
                    </div>

                </div>

                <!-- FOOTER -->
                <div class="flex items-center justify-end gap-3 w-full border-t p-5">

                    <form method="dialog">
                        <button type="submit" class="btn btn-neutral rounded-lg">
                            Close
                        </button>
                    </form>

                    <button type="button" id="executeInventoryBtn" class="btn rounded-lg text-white"
                        style="background-color:#7a1420;">
                        Execute Inventory
                    </button>

                </div>

            </div>

        </div>
    </dialog>

@endsection

<script type="module" src="/app/module/Maintenance/ericDataAlignmentCard.js"></script>