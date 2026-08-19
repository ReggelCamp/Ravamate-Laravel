@extends('layout.app')
@section('content')
@section('title', 'MAINTENANCE')

<style>
    .divider::before,
    .divider::after {
        background-color: white !important;
    }
</style>

    <div class="Linear_BG w-full h-full overflow-y-auto px-4 pb-20">

        <div class="flex flex-col w-full px-25 pt-5 ">
            <!--Cutomer-->
            <h1 class="text-2xl text-center font-semibold text-[30px] headerColor ">
                Customer
            </h1>
            <!-- DIVIDER -->
            <div class="flex justify-center p-0 w-full">
                <div class="divider text-white w-full max-w-[1200px]"></div>
            </div>

            <!-- CARDS WRAPPER -->
            <div class="customerCardContent font-medium text-[12px] flex flex-col sm:flex-row gap-5 w-full items-stretch sm:flex-wrap">
              
                {{-- <div class="w-[250px] min-h-[150px] gap-0">
                    <h2 class="card-title rounded-t-2xl py-2 w-full flex justify-center maintinanceCard headerColor">
                        Georeset
                    </h2>

                    <div class="card-actions
                                            rounded-b-2xl
                                                    flex justify-center items-center  w-full
                                                    bg-white hover:bg-gray-500 group
                                                    transition-colors duration-300 py-5">
                        <span
                            class=" relative flex items-center justify-center w-[100px] h-[100px] rounded-full border overflow-hidden transition-colors duration-300 ">

                            <span class="relative flex items-center justify-center w-[50px] h-[50px] overflow-hidden">

                                <img
                                    src="https://cdo.sfa-plus.com/SFA/v2/img/maintenance04_georeset.png"
                                    alt="${card.label}"
                                    class="w-full h-full object-cover">

                            </span>

                            <!-- Hover Overlay -->
                            <div class="absolute inset-0 z-20 flex items-center justify-center
                                                    opacity-0 group-hover:opacity-100
                                                    transition-opacity duration-300">

                                <span class="shine-bgBtn px-3 py-2 rounded-xl text-xs" onclick="georeset_modal.showModal()">
                                    See Details
                                </span>
                            </div>

                        </span>
                    </div>
                </div> --}}

            </div>

        </div>

        <div class="flex flex-col w-full px-25 pt-5 ">
            <!--Product-->
            <h1 class="text-2xl text-center font-semibold text-[30px] headerColor">
                Product
            </h1>

            <!-- DIVIDER -->
            <div class="flex justify-center p-0 w-full">
                <div class="divider w-full max-w-[1200px]"></div>
            </div>

            <!-- CARDS WRAPPER -->
            <div class="productCardContent flex flex-col sm:flex-row gap-5 w-full items-stretch sm:flex-wrap">
                
            </div>

        </div>

        <div class="flex flex-col w-full px-25 pt-10">
            <!--Others-->
            <h1 class="text-2xl text-center font-semibold text-[30px] headerColor">
                Others
            </h1>

            <!-- DIVIDER -->
            <div class="flex justify-center p-0 w-full">
                <div class="divider w-full max-w-[1200px]"></div>
            </div>

            <!-- CARDS WRAPPER -->
            <div class="otherCardContent flex flex-col sm:flex-row gap-5 w-full items-stretch sm:flex-wrap">
               
            </div>

        </div>

    </div>

    <script>
        $(document).on("click", "#georesetbtn", function () {
            document.getElementById('georeset_modal').showModal();
        });
    </script>

    <dialog id="georeset_modal" class="modal">
        <div class="modal-box w-11/12 max-w-md rounded-2xl p-0 overflow-hidden shadow-xl">

            <!-- Header -->
            <div class="report_title relative px-5 py-4">
                <x-report-header-title title="GEORESET" />

                <form method="dialog" class="absolute to right-7 top-4.5">
                    <button class=" ">
                        <i class="fa-regular fa-circle-xmark text-2xl"></i>
                    </button>
                </form>
            </div>

            <!-- Body -->
            <div class="p-6 flex flex-col gap-5">

                <div class="flex flex-col gap-2">
                    <label for="customerCode" class="font-medium">
                        Customer Code
                    </label>

                    <input id="customerCode" type="text" class="input input-bordered w-full rounded-xl"
                        placeholder="Enter Customer Code">
                </div>

                <div class="flex justify-end gap-2">
                    <button class="btn primary_color rounded-xl text-white report_title">
                        Reset
                    </button>
                </div>

            </div>

        </div>

        <!-- Click outside to close -->
        <form method="dialog" class="modal-backdrop">
            <button>close</button>
        </form>
    </dialog>

@endsection

<script type="module" src="/app/module/Maintenance/dataMaintenanceCard.js"></script>
<script type="module" src="/app/helper/dataMaintenanceModal.js"></script>