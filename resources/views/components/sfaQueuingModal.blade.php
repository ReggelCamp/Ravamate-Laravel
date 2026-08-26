@props(['id' => 'detail_modal'])

<style>
    .battery-card {
    width: 145px;
    height: 115px;

    background: #8d8da3;
    border-radius: 28px 28px 28px 28px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    padding-top: 8px;

    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.battery-title {
    color: #b7e8e8;
    font-size: 13px;
    font-weight: 500;
    margin-bottom: 10px;
}

.battery-progress {
    width: 76px;
    height: 76px;

    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    background:
        conic-gradient(
            #46e49b 0% var(--battery),
            #6f7388 var(--battery) 100%
        );

    position: relative;
}

/* Inner dark circle */
.battery-inner {
    width: 58px;
    height: 58px;

    border-radius: 50%;

    background: #777b91;

    display: flex;
    align-items: center;
    justify-content: center;

    color: white;
    font-size: 12px;
    font-weight: 600;

    position: relative;
}

/* Small inner ring */
.battery-inner::before {
    content: "";

    position: absolute;

    width: 45px;
    height: 45px;

    border-radius: 50%;

    border: 1px solid #a9c5c8;
}
</style>

<dialog id="{{ $id }}" class="modal">
    <div class="modal-box w-[800px] max-w-5xl p-0 overflow-auto">
        <div class="bg-red-700 w-full h-[50px]">
            <form method="dialog">
                <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
        </div>
        <div class="flex flex-col w-full h-full p-5 pt-3">
            <div class="flex justify-between gap-1">
                <div class="flex flex-col w-full inset-shadow-lg p-2 rounded-2xl gap-3 pb-10">
                    <div class="flex flex-col rounded-2xl bg-[#5d0616] text-white items-center w-full">
                        <span>Salesman Details</span>
                        <div class="flex items-center justify-center gap-3 w-full">
                            <span class="flex w-[80px] h-[80px] rounded-full border"></span>
                            <div class="flex flex-col ">
                                <span>Salesman Name</span>
                                <span>JASON DIANALA</span>
                            </div>
                        </div>
                        <div class="flex flex-col justify-end items-end w-full">
                            <span class="pr-20">Status</span>
                            <span class="bg-white rounded-tl-2xl px-10 text-black">Pending</span>
                        </div>
                    </div>
                    <div class="flex w-full rounded-2xl border px-5 justify-between py-3 shadow-lg">
                        <span class="">Document No.</span>
                        <span>GP_7202607011006227</span>
                    </div>
                    <div class="flex w-full rounded-2xl border px-5 justify-between py-3">
                        <span class="">MD Code</span>
                        <span>CD00033 (B)</span>
                    </div>
                    <div class="flex w-full rounded-2xl border px-5 justify-between py-3">
                        <span class="">Warehouse Code</span>
                        <span>1</span>
                    </div>
                    <div class="flex w-full rounded-2xl border px-5 justify-between py-3">
                        <span class="">Bad Order Warehouse</span>
                        <span>BO</span>
                    </div>
                    <div class="flex w-full rounded-2xl border px-5 justify-between py-3">
                        <span class="">Good Stock Return WH</span>
                        <span>HO</span>
                    </div>
                </div>

                <div class="flex flex-col w-full  px-2 pt-2 rounded-2xl gap-3">
                    <div class="flex flex-col rounded-2xl bg-[#5d0616] items-center w-full text-white">
                        <span>Salesman Details</span>
                        <div class="flex items-center justify-center gap-3 w-full">
                            <span class="flex w-[80px] h-[80px] rounded-full border"></span>
                            <div class="flex flex-col ">
                                <span>Customer</span>
                                <span>V1-TRIPLE J3511_GP</span>
                            </div>
                        </div>
                        <div class="flex flex-col justify-end items-end w-full">
                            <span class="pr-20">Status</span>
                            <span class="bg-white rounded-tl-2xl px-10 text-black">Pending</span>
                        </div>
                    </div>
                    <div class="flex w-full rounded-2xl border flex-col px-5 justify-between py-[3px]">
                        <span class="text-[13px]">Address</span>
                        <span>
                            <i class="fa-solid fa-location-dot"></i>
                            ,,
                        </span>
                    </div>
                    <div class="flex w-full  justify-between">
                        <div class="flex flex-col items-center border rounded-2xl px-10 justify-between">
                            <span>Delivery Date</span>
                            <div class="flex justify-between items-center gap-5">
                                <span class=" salesDetailsIcon text-[20px] rounded-2xl p-0.5 bg-amber-400 text-white">
                                    <i class="mdi mdi-calendar-month-outline"></i>
                                </span>
                                <div class="flex flex-col items-center">
                                    <span class="text-[7.5px]">Date</span>
                                    <span class="text-[12px]">07/01/2026</span>
                                    <span class="text-[7.5px]">MM/DD/YYYY</span>
                                </div>
                            </div>
                            <div class="flex justify-between items-center gap-5">
                                <span class="mdi mdi-clock-time-five-outline salesDetailsIcon text-[20px] text-white rounded-2xl p-0.5 bg-amber-400"></span>
                                <div class="flex flex-col items-center">
                                    <span class="text-[7.5px]">Time</span>
                                    <span class="text-[12px]">10:06:22.347</span>
                                    <span class="text-[7.5px]">H/M/S/MS</span>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col items-center  justify-between">
                            <div class="battery-card">
                                <div class="battery-title">
                                    Battery Status
                                </div>

                                <div class="battery-progress" style="--battery: 94%;">
                                    <div class="battery-inner">
                                        <span>94%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex w-full rounded-2xl border px-5 justify-between h-[85px]">
                        <span class="w-full justify-center flex">Remarks</span>
                    </div>
                    <div class="flex w-full rounded-b-2xl border px-5 justify-between py-1 bg-[#5d0616] text-white">
                        <span class="">API STATUS:</span>
                        <span>Pending</span>
                    </div>
                </div>
            </div>

            <div class="w-full flex flex-col rounded-2xl">
                <div class="flex flex-col bg-[#5d0616] w-full items-center rounded-t-2xl text-white pb-3">
                    <span>Items Code</span>
                    <span>Date</span>
                    <span>July 1, 2026</span>
                </div>
<div class="">
    <x-datatable id="sfqQueuingModal" />
</div>
            </div>
        </div>
    </div>
</dialog>

<script type="module" src="/app/module/Maintenance/SFA_Queuing/sfaQueuingModal.js"></script>