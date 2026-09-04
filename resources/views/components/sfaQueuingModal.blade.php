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
    <div class="modal-box w-[800px] rounded-2xl mt-[60px] mb-[60px] max-w-5xl p-0 overflow-auto">
        <div class="primaryBg w-full h-[50px]">
            <form method="dialog">
                <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
        </div>
        <div class="flex flex-col w-full h-full p-5 pt-3">
            <div class="flex justify-between gap-1 pb-2">
                <div class="flex flex-col w-full shadow-[2px_2px_10px] p-2 rounded-2xl gap-3 pb-10">
                    <div class="flex flex-col rounded-2xl bg-[#5d0616] text-white items-center w-full">
                        <span class="font-bold text-[16px]">Salesman Details</span>
                        <div class="flex items-center justify-center gap-3 w-full">
                            <span class="flex w-[80px] h-[80px] rounded-full border"></span>
                            <div class="flex flex-col ">
                                <span class="text-[11px]">Salesman</span>
                                <span class="text-[16px] font-medium">JASON DIANALA</span>
                            </div>
                        </div>
                        <div class="flex flex-col justify-end items-end w-full">
                            <span class="pr-20 text-[11px]">Status</span>
                            <span class="bg-white rounded-tl-2xl px-10 text-[13px] text-black">Pending</span>
                        </div>
                    </div>
                    <div class="flex w-full rounded-2xl shadow-[2px_2px_10px] px-5 text-[12px] justify-between py-3 shadow-lg">
                        <span class="">Document No.</span>
                        <span class="font-medium">GP_7202607011006227</span>
                    </div>
                    <div class="flex w-full rounded-2xl shadow-[2px_2px_10px] px-5 text-[12px] justify-between py-3">
                        <span class="">MD Code</span>
                        <span class="font-medium">CD00033 (B)</span>
                    </div>
                    <div class="flex w-full rounded-2xl shadow-[2px_2px_10px] px-5 text-[12px] justify-between py-3">
                        <span class="">Warehouse Code</span>
                        <span class="font-medium">1</span>
                    </div>
                    <div class="flex w-full rounded-2xl shadow-[2px_2px_10px] px-5 text-[12px] justify-between py-3">
                        <span class="">Bad Order Warehouse</span>
                        <span class="font-medium">BO</span>
                    </div>
                    <div class="flex w-full rounded-2xl shadow-[2px_2px_10px] px-5 text-[12px] justify-between py-3">
                        <span class="">Good Stock Return WH</span>
                        <span class="font-medium">HO</span>
                    </div>
                </div>

                <div class="flex flex-col w-full shadow-[2px_2px_10px] px-0 pt-2 rounded-2xl gap-3">
                    <div class="px-2 flex flex-col gap-3">
                    <div class="flex flex-col rounded-2xl bg-[#5d0616] items-center w-full text-white">
                        <span class="font-bold text-[16px]">Sales Details</span>
                        <div class="flex items-center justify-center gap-3 w-full">
                            <span class="flex w-[80px] h-[80px] rounded-full border"></span>
                            <div class="flex flex-col ">
                                <span class="text-[11px]">Customer</span>
                                <span class="text-[16px] font-medium">V1-TRIPLE J3511_GP</span>
                            </div>
                        </div>
                        <div class="flex flex-col justify-end items-end w-full">
                            <span class="pr-20 text-[11px]">Reference No.</span>
                            <span class="bg-white rounded-tl-2xl px-10 text-[13px] text-black">989-2606079</span>
                        </div>
                    </div>
                    <div class="flex w-full rounded-2xl shadow-[2px_2px_10px] flex-col px-5 justify-between py-[3px]">
                        <span class="text-[13px]">Address</span>
                        <span>
                            <i class="fa-solid fa-location-dot"></i>
                            ,,
                        </span>
                    </div>
                    <div class="flex w-full  justify-between">
                        <div class="flex flex-col shadow-[2px_2px_10px] rounded-2xl w-[201px] justify-start ">
                            <span class="text-[12px] justify-center flex">Delivery Date</span>
                            <div class="flex items-center gap-5 px-5 pt-2">
                                <span class=" salesDetailsIcon text-[20px] rounded-lg p-1 bg-red-800 text-white">
                                    <i class="mdi mdi-calendar-month-outline"></i>
                                </span>
                                <div class="flex flex-col items-center">
                                    <span class="text-[7.5px]">Date</span>
                                    <span class="text-[12px]">07/01/2026</span>
                                    <span class="text-[7.5px]">MM/DD/YYYY</span>
                                </div>
                            </div>
                            <div class="flex  items-center gap-5 px-5 pb-2">
                                <span class="mdi mdi-clock-time-five-outline salesDetailsIcon text-[20px] text-white rounded-lg p-1 bg-red-800"></span>
                                <div class="flex flex-col items-center">
                                    <span class="text-[7.5px]">Time</span>
                                    <span class="text-[12px]">10:06:22.347</span>
                                    <span class="text-[7.5px]">H/M/S/MS</span>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col items-center justify-between">
                            <div class="battery-card pb-2">
                                <div class="battery-title text-[12px]">
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
                    <div class="flex w-full rounded-2xl shadow-[2px_2px_10px] px-5 justify-between h-[85px]">
                        <span class="w-full justify-center flex">Remarks</span>
                    </div>
                    </div>
                    <div class="flex w-full rounded-b-2xl shadow-[2px_2px_10px] px-5 justify-between py-1 bg-[#5d0616] text-white">
                        <span class="">API STATUS:</span>
                        <span>Pending</span>
                    </div>
                </div>
            </div>

            <div class="w-full h-fit pb-10 flex flex-col shadow-[2px_2px_10px] rounded-2xl">
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