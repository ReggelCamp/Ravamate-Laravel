<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">

<div class="flex w-full h-[70px] px-6 items-center headerFont justify-between border-b headerTheme">


    <div class="flex items-center w-1/3">

        <label for="my-drawer-1" class="rounded-lg p-2 cursor-pointer hover-secondary hover:scale-110 transition-transform duration-200">

            <i class="fa-solid fa-bars  text-xl"></i>

        </label>

    </div>

    <div class="flex justify-center w-1/3">

        <h1 class="report_header animate__backInLeft text-2xl font-semibold truncate" id="company_name">
        </h1>

    </div>

    <!-- RIGHT -->
    <div class="flex items-center justify-end gap-5 w-1/3">
        <div class="indicator">
            <span class="indicator-item  badge badge-xs badge-secondary">12</span>
            <i class="fa-solid fa-bell  text-lg cursor-pointer" onclick="notif.showModal()"></i>
        </div>
        
        <div class="dropdown dropdown-end">
            <div tabindex="0" role="button">
                <i class="fa-solid fa-circle-user text-2xl cursor-pointer"></i>
            </div>
            <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                <li><a href="{{ route('profile') }}">My Account</a></li>
                <li><a>Settings</a></li>
            </ul>
        </div>
    </div>

    {{-- modal for notif --}}
    <dialog id="notif" class="modal">
        <div class="modal-box">
            <h3 class="text-lg font-bold">Notifiications</h3>
            <div tabindex="0" class="collapse bg-base-100 border-base-300 border">
                <div class="collapse-title font-semibold">How do I create an account?</div>
                <div class="collapse-content text-sm">
                    Click the "Sign Up" button in the top right corner and follow the registration process.
                </div>
            </div>
            <div tabindex="0" class="collapse bg-base-100 border-base-300 border">
                <div class="collapse-title font-semibold">How do I create an account?</div>
                <div class="collapse-content text-sm">
                    Click the "Sign Up" button in the top right corner and follow the registration process.
                </div>
            </div>
        </div>
        <form method="dialog" class="modal-backdrop">
            <button>close</button>
        </form>
    </dialog>

</div>

<div class="drawer sidenav headerFont">

    <!-- TOGGLE -->
    <input id="my-drawer-1" type="checkbox" class="drawer-toggle" />

    <!-- PAGE CONTENT -->
    <div class="drawer-content">

    </div>


    <div class="drawer-side z-50">

        <label for="my-drawer-1" aria-label="close sidebar" class="drawer-overlay">
        </label>


        <div class="bg-base-200 min-h-full sm:w-[300px] w-[250px] shadow-2xl overflow-y-auto">


            <div class="flex items-center justify-center h-[180px] px-6 border-b">

                <img src="/${item.logo[0]?.url}" class="w-[140px] object-contain themeLogo" id="" />

            </div>

            <div class="flex w-full justify-start p-2">
                <label class="flex cursor-pointer gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="5" />
                        <path
                            d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                    </svg>
                    <input type="checkbox" id="theme-toggle" value="synthwave" class="toggle theme-controller" />
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                    </svg>
                </label>
            </div>

            <ul class="menu p-4 gap-2 w-full">


                <li>

                    <a href="{{ route('dashboard') }}"
                        class="shine-bg headerFont rounded-xl px-4 py-3 text-sm font-medium">

                        <i class="fa-solid fa-house"></i>

                        Dashboard

                    </a>

                </li>

                <!-- ANALYTICS -->
                <li>

                    <a href="{{ route('analytics') }}"
                        class="shine-bg  rounded-xl headerFont px-4 py-3 text-sm font-medium">

                        <i class="fa-solid fa-chart-line"></i>

                        Analytics

                    </a>

                </li>

                <!-- REPORTS -->
                <li>

                    <details>
                        <summary class="shine-bg w-full rounded-xl px-4 py-3 text-sm font-medium dropdownIcon">
                            <div class="items-center gap-3 ">
                                <i class="fa-solid headerFont fa-file-lines"></i>
                                <span>Reports</span>
                            </div>
                            <div class="flex w-full arrowIcon justify-end">
                                <i class="fa-solid fa-angle-down"></i>
                            </div>
                        </summary>
                        <ul class="mt-2 space-y-1">

                            <!-- SALES MANAGEMENT -->
                            <li>

                                <details>

                                    <summary
                                        class="dropdownIcon rounded-lg shine-bg headerFont  px-4 py-2 text-sm">

                                        Sales Management
                                        <div class="flex w-full arrowIcon justify-end">
                                            <i class="fa-solid fa-angle-down"></i>
                                        </div>
                                    </summary>

                                    <ul class="mt-1 space-y-1">

                                        <li>
                                            <a href="{{ route('dcr') }}"
                                                class="rounded-lg px-4 shine-bg headerFont  py-2 text-sm">

                                                Daily Collection Report

                                            </a>
                                        </li>

                                        <li>
                                            <a href="{{ route('dsr') }}"
                                                class="rounded-lg px-4 shine-bg headerFont  py-2 text-sm">

                                                Daily Sales Report

                                            </a>
                                        </li>

                                        <li>
                                            <a href="{{ route('dsrr') }}"
                                                class="rounded-lg px-4 shine-bg headerFont  py-2 text-sm">

                                                Daily Sales Remittance Report

                                            </a>
                                        </li>

                                        <li>
                                            <a href="{{ route('ecmf') }}"
                                                class="rounded-lg px-4 shine-bg headerFont  py-2 text-sm">

                                                Electronic CMF

                                            </a>
                                        </li>

                                        <li>
                                            <a href="{{ route('pendingbo') }}"
                                                class="rounded-lg px-4 shine-bg headerFont  py-2 text-sm">

                                                Hold Bad Orders

                                            </a>
                                        </li>

                                        <li>
                                            <a href="{{ route('pendingrequest') }}"
                                                class="rounded-lg px-4 shine-bg headerFont  py-2 text-sm">

                                                Hold Sales Orders

                                            </a>
                                        </li>

                                        <li>
                                            <a href="{{ route('missedcall') }}"
                                                class="rounded-lg px-4 shine-bg headerFont  py-2 text-sm">

                                                Missed Calls

                                            </a>
                                        </li>

                                        <li>
                                            <a href="{{ route('offsitetransaction') }}"
                                                class="rounded-lg px-4 shine-bg headerFont py-2 text-sm">

                                                Offsite Transactions
 headerFont
                                            </a>
                                        </li>

                                        <li>
                                            <a href="{{ route('pendingorders') }}"
                                                class="rounded-lg px-4 shine-bg headerFont  py-2 text-sm">

                                                Pending Orders

                                            </a>
                                        </li>

                                        <li>
                                            <a href="{{ route('salesreport') }}"
                                                class="rounded-lg shine-bg headerFont  px-4 py-2 text-sm">

                                                Sales Report

                                            </a>
                                        </li>

                                        <li>
                                            <a href="{{ route('salesreturnBO') }}"
                                                class="rounded-lg shine-bg headerFont  px-4 py-2 text-sm">

                                                Sales Return (BO)

                                            </a>
                                        </li>

                                        <li>
                                            <a href="{{ route('salesreturnRGS') }}"
                                                class="rounded-lg headerFont shine-bg  px-4 py-2 text-sm">

                                                Sales Return (RGS)

                                            </a>
                                        </li>

                                        <li>
                                            <a href="{{ route('salessummary') }}"
                                                class="rounded-lg headerFont shine-bg  px-4 py-2 text-sm">

                                                Sales Summary

                                            </a>
                                        </li>

                                    </ul>

                                </details>

                            </li>

                            <!-- INVENTORY -->
                            <li>

                                <details>

                                    <summary
                                        class="rounded-lg dropdownIcon headerFont shine-bg  px-4 py-2 text-sm">
                                        Inventory Management
                                        <div class="flex w-full arrowIcon justify-end">
                                            <i class="fa-solid fa-angle-down"></i>
                                        </div>
                                    </summary>

                                    <ul class="mt-1 space-y-1">

                                        <li>
                                            <a href="{{ route('invValuation') }}"
                                                class="rounded-lg shine-bg headerFont px-4 py-2 text-sm">

                                                Inventory Valuation

                                            </a>
                                        </li>

                                        <li>
                                            <a href="{{ route('placementCheck') }}"
                                                class="rounded-lg shine-bg headerFont  px-4 py-2 text-sm">

                                                Placement Check

                                            </a>
                                        </li>

                                        <li>
                                            <a href="{{ route('stockcheck') }}"
                                                class="rounded-lg shine-bg headerFont  px-4 py-2 text-sm">

                                                Store Inventory

                                            </a>
                                        </li>

                                    </ul>

                                </details>

                            </li>

                            <!-- AUDIT -->
                            <li>

                                <details>

                                    <summary
                                        class="rounded-lg dropdownIcon headerFont  shine-bg px-4 py-2 text-sm">

                                        Audit Trail
                                        <div class="flex w-full arrowIcon justify-end">
                                            <i class="fa-solid fa-angle-down"></i>
                                        </div>

                                    </summary>

                                    <ul class="mt-1 space-y-1">

                                        <li>
                                            <a href="{{ route('syncReport') }}"
                                                class="rounded-lg headerFont shine-bg  px-4 py-2 text-sm">

                                                Salesman Data Sync

                                            </a>
                                        </li>

                                    </ul>

                                </details>

                            </li>

                            <!-- OTHERS -->
                            <li>

                                <details>

                                    <summary
                                        class="rounded-lg dropdownIcon headerFont shine-bg px-4 py-2 text-sm">

                                        Others
                                        <div class="flex w-full arrowIcon justify-end">
                                            <i class="fa-solid fa-angle-down"></i>
                                        </div>
                                    </summary>

                                    <ul class="mt-1 space-y-1">

                                        <li>
                                            <a href="{{ route('deliveryMonitoring') }}"
                                                class="rounded-lg shine-bg headerFont  px-4 py-2 text-sm">

                                                Delivery Monitoring

                                            </a>
                                        </li>

                                        <li>
                                            <a href="{{ route('deliveryMonitoring') }}"
                                                class="rounded-lg shine-bg headerFont  px-4 py-2 text-sm">

                                                Prebooking Delivery Monitoring

                                            </a>
                                        </li>

                                    </ul>

                                </details>

                            </li>

                        </ul>

                    </details>

                </li>

                <!-- MAINTENANCE -->
                <li>

                    <details>

                        <summary class="w-full shine-bg dropdownIcon rounded-xl px-4 py-3 text-sm font-medium">

                            <div class="flex shine-bg w-full headerFont items-center gap-3">

                                <i class="fa-solid fa-screwdriver-wrench"></i>

                                <span>Maintenance</span>

                            </div>
                            <div class="flex w-full arrowIcon justify-end">
                                <i class="fa-solid fa-angle-down"></i>
                            </div>

                        </summary>

                        <ul class="mt-2 space-y-1">

                            <li>
                                <a href="{{ route('maintenance') }}"
                                    class="rounded-lg shine-bg headerFont px-4 py-2 text-sm">

                                    Data Maintenance

                                </a>
                            </li>

                            <li>
                                <a href="{{ route('datamaintenance') }}"
                                    class="rounded-lg shine-bg headerFont  px-4 py-2 text-sm">

                                    Eric Data Alignment

                                </a>
                            </li>

                            <li>
                                <a href="{{ route('sfaqueuing') }}"
                                    class="rounded-lg shine-bg headerFont  px-4 py-2 text-sm">

                                    SFA Queuing

                                </a>
                            </li>

                        </ul>

                    </details>

                </li>

                <!-- CHANGE SITES -->
                <li>

                    <details>

                        <summary
                            class="shine-bg dropdownIcon rounded-xl px-4 py-3 text-sm font-medium">

                            <div class="flex items-center headerFont gap-3 ">

                                <i class="fa-solid fa-location-dot"></i>

                                <span>Change Sites</span>
                            </div>
                            <div class="flex w-full arrowIcon justify-end">
                                <i class="fa-solid fa-angle-down"></i>
                            </div>
                        </summary>

                        <ul class="mt-2 space-y-1 max-h-[300px] overflow-y-auto">

                            <li><a href="{{ route('maintenance') }}"
                                    class="rounded-lg px-4 shine-bg headerFont  py-2 text-sm">Fast
                                    Unimerchant Cebu</a></li>

                            <li><a href="{{ route('maintenance') }}"
                                    class="rounded-lg px-4 shine-bg headerFont  py-2 text-sm">Fast
                                    Unimerchant Bohol</a></li>

                            <li><a href="{{ route('maintenance') }}"
                                    class="rounded-lg px-4 shine-bg headerFont  py-2 text-sm">MNC
                                    PDB</a></li>

                            <li><a href="{{ route('maintenance') }}"
                                    class="rounded-lg px-4 shine-bg headerFont  py-2 text-sm">MNC
                                    SYL</a></li>

                            <li><a href="{{ route('maintenance') }}"
                                    class="rounded-lg px-4 shine-bg headerFont  py-2 text-sm">MNC
                                    MCM</a></li>

                            <li><a href="{{ route('maintenance') }}"
                                    class="rounded-lg px-4 shine-bg headerFont  py-2 text-sm">MNC
                                    RAC</a></li>

                            <li><a href="{{ route('maintenance') }}"
                                    class="rounded-lg px-4 shine-bg headerFont  py-2 text-sm">MNC
                                    DCI</a></li>

                            <li><a href="{{ route('maintenance') }}"
                                    class="rounded-lg px-4 shine-bg headerFont  py-2 text-sm">MNC
                                    NVM</a></li>

                            <li><a href="{{ route('maintenance') }}"
                                    class="rounded-lg px-4 shine-bg headerFont  py-2 text-sm">MNC
                                    ABRI CAVITE</a></li>

                            <li><a href="{{ route('maintenance') }}"
                                    class="rounded-lg px-4 shine-bg headerFont  py-2 text-sm">IMDC
                                    GROUP CALBAYOG</a></li>

                            <li><a href="{{ route('maintenance') }}"
                                    class="rounded-lg px-4 shine-bg headerFont  py-2 text-sm">IMDC
                                    GROUP TACLOBAN</a></li>

                            <li><a href="{{ route('maintenance') }}"
                                    class="rounded-lg px-4 shine-bg headerFont  py-2 text-sm">IMDC
                                    GROUP ORMOC</a></li>

                            <li><a href="{{ route('maintenance') }}"
                                    class="rounded-lg px-4 shine-bg headerFont  py-2 text-sm">MEM</a>
                            </li>

                            <li><a href="{{ route('maintenance') }}"
                                    class="rounded-lg px-4 shine-bg headerFont  py-2 text-sm">Fast
                                    Unimerchants P.O.D</a></li>

                            <li><a href="{{ route('maintenance') }}"
                                    class="rounded-lg px-4 shine-bg headerFont  py-2 text-sm">DGV</a>
                            </li>

                            <li><a href="{{ route('maintenance') }}"
                                    class="rounded-lg px-4 shine-bg headerFont  py-2 text-sm">SMI</a>
                            </li>

                            <li><a href="{{ route('maintenance') }}"
                                    class="rounded-lg px-4 shine-bg headerFont  py-2 text-sm">DBV</a>
                            </li>

                            <li><a href="{{ route('maintenance') }}"
                                    class="rounded-lg px-4 shine-bg headerFont  py-2 text-sm">DCMI</a>
                            </li>

                        </ul>

                    </details>

                </li>

            </ul>

        </div>

    </div>

</div>
