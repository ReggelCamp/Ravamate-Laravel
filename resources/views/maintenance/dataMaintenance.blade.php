@extends('layout.app')
@section('headerTitle', 'DATA ALIGNMENT')
@section('content')

<style>

    #syncConfirmModal .modal-box {
        position: fixed;
        top: 40px;
        left: 50%;
        transform: translateX(-50%);
        margin: 0;
    }

</style>

    <div class="transparentBg w-full h-screen overflow-y-auto px-4 py-6">

        <div class="flex flex-col w-full px-25 pt-5">

            <!-- TITLE -->
            <h1 class="text-2xl text-center headerColor">
                CDO Sync
            </h1>

            <!-- DIVIDER -->
            <div class="flex justify-center w-full">
                <div class="divider w-full max-w-[1200px]"></div>
            </div>

            @php
                // label => route name
                $cdoSyncCards = [
                    'Sync CDO Customer' => 'customer',
                    'Sync CDO Customer Discount' => 'product',
                    'Sync CDO Inventory' => 'placementmaintenance',
                    'Sync CDO Operation' => 'bankmaintenance',
                    'Sync CDO Past Transaction' => 'salesmanobjective',
                    'Sync CDO Products' => 'mustcarry',
                    'Sync CDO Salesman' => 'salesman',
                ];
            @endphp

            <!-- CARDS WRAPPER -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-15 py-6">

                @foreach ($cdoSyncCards as $label => $route)
                    <div class="flex flex-col gap-0 w-full max-w-[300px] mx-auto h-[240px]">

                        <h2 class="card-title rounded-t-4xl py-2 w-full flex justify-center headerColor maintinanceCard">
                            {{ $label }}
                        </h2>

                        <div class="card-body flex-1
                                        rounded-b-4xl
                                        flex justify-center items-center w-full
                                        dataSync group
                                        transition-colors duration-300 py-5">
                            <span
                                class="relative flex items-center justify-center w-[100px] h-[100px] rounded-full border overflow-hidden transition-colors duration-300">

                                <!-- Icon -->
                                <i class="fa-solid fa-user text-4xl relative z-10"></i>

                            </span>

                            <div class="flex w-full items-end justify-end">
                                    <a   class="flex execute-sync-btn" data-url="{{ route($route) }}" data-label="{{ $label }}">
                                        <span
                                            class="shine-sync w-[80px]  whitespace-nowrap items-center justify-center flex py-2 rounded-xl text-xs">
                                            Execute
                                        </span>
                                </a>
                            </div>
                        </div>
                    </div>
                @endforeach
            </div>

            <h1 class="text-2xl text-center headerColor">
                SFA Plus Sync
            </h1>

            <!-- DIVIDER -->
            <div class="flex justify-center w-full">
                <div class="divider w-full max-w-[1200px]"></div>
            </div>

            @php
                // label => route name
                $cdoSyncCards = [
                    'Sync CDO Customer' => 'customer',
                    'Sync CDO Products' => 'mustcarry',
                ];
            @endphp

            <!-- CARDS WRAPPER -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-15 py-6">

                @foreach ($cdoSyncCards as $label => $route)
                    <div class="flex flex-col gap-0 w-full max-w-[300px] mx-auto h-[240px]">

                        <h2 class="card-title rounded-t-4xl py-2 w-full flex justify-center headerColor maintinanceCard">
                            {{ $label }}
                        </h2>

                        <div class="card-body flex-1
                                        rounded-b-4xl
                                        flex justify-center items-center w-full
                                        dataSync group
                                        transition-colors duration-300 py-5">
                            <span
                                class="relative flex items-center justify-center w-[100px] h-[100px] rounded-full border overflow-hidden transition-colors duration-300">

                                <!-- Icon -->
                                <i class="fa-solid fa-user text-4xl relative z-10"></i>

                            </span>

                            <div class="flex w-full items-end justify-end">
                                <a   class="flex execute-sync-btn" data-url="{{ route($route) }}" data-label="{{ $label }}">
                                    <span
                                        class="shine-sync w-[80px]  whitespace-nowrap items-center justify-center flex py-2 rounded-xl text-xs">
                                        Execute
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                @endforeach

            </div>

        </div>
    </div>

    <dialog id="syncConfirmModal" class="modal">
    <div class="modal-box pt-0 pb-0">
        <h3 class="font-bold text-lg" id="syncModalTitle"></h3>
        <p class="py-4" id="syncModalBody">Are you sure you want to run this sync?</p>
        {{-- <div class="modal-action">
            <form method="dialog" class="flex gap-2">
                <button class="btn">Cancel</button>
                <button type="button" id="syncConfirmBtn" class="btn btn-primary">Execute</button>
            </form>
        </div> --}}
    </div>
</dialog>


@endsection