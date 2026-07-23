<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">

@props([
    'mainTitle' => 'Dashboard',
    'showLogo' => true,
])

<div class="flex w-full h-[50px] pt-5 px-6 items-center headerFont headerColor justify-between">
{{-- <div class="flex w-full h-[70px] px-6 items-center headerFont justify-between border-b headerTheme"> --}}

    <div class="flex w-full pt[30px] items-center justify-between">
        <div class="flex w-fit items-center">
            <label for="my-drawer-1" class="rounded-lg p-2 cursor-pointer hover-secondary hover:scale-110 transition-transform duration-200">
                <i class="fa-solid fa-bars  text-xl"></i>
            </label>
            @if($showLogo)
                <div class="flex h-[50px] px-6">
                    <img src="/${item.logo[0]?.url}" class="w-[50px] object-contain themeLogo" />
                </div>
            @endif
        </div>
        {{-- <h1 class="report_header animate__backInLeft text-2xl font-semibold truncate" id="company_name">
        </h1> --}}
        <span class="text-2xl">{{ $mainTitle }}</span>

        <!-- RIGHT -->
        <div class="flex items-center justify-end gap-5 ">
            <div class="">
                    <label class="theme-switch">
                    <input type="checkbox" id="theme-toggle" class="theme-switch__checkbox">
                    <div class="theme-switch__container">
                        <div class="theme-switch__clouds"></div>
                        <div class="theme-switch__stars-container">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144 55" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M135.831 3.00688C135.055 3.85027 134.111 4.29946 133 4.35447C134.111 4.40947 135.055 4.85867 135.831 5.71123C136.607 6.55462 136.996 7.56303 136.996 8.72727C136.996 7.95722 137.172 7.25134 137.525 6.59129C137.886 5.93124 138.372 5.39954 138.98 5.00535C139.598 4.60199 140.268 4.39114 141 4.35447C139.88 4.2903 138.936 3.85027 138.16 3.00688C137.384 2.16348 136.996 1.16425 136.996 0C136.996 1.16425 136.607 2.16348 135.831 3.00688ZM31 23.3545C32.1114 23.2995 33.0551 22.8503 33.8313 22.0069C34.6075 21.1635 34.9956 20.1642 34.9956 19C34.9956 20.1642 35.3837 21.1635 36.1599 22.0069C36.9361 22.8503 37.8798 23.2903 39 23.3545C38.2679 23.3911 37.5976 23.602 36.9802 24.0053C36.3716 24.3995 35.8864 24.9312 35.5248 25.5913C35.172 26.2513 34.9956 26.9572 34.9956 27.7273C34.9956 26.563 34.6075 25.5546 33.8313 24.7112C33.0551 23.8587 32.1114 23.4095 31 23.3545ZM0 36.3545C1.11136 36.2995 2.05513 35.8503 2.83131 35.0069C3.6075 34.1635 3.99559 33.1642 3.99559 32C3.99559 33.1642 4.38368 34.1635 5.15987 35.0069C5.93605 35.8503 6.87982 36.2903 8 36.3545C7.26792 36.3911 6.59757 36.602 5.98015 37.0053C5.37155 37.3995 4.88644 37.9312 4.52481 38.5913C4.172 39.2513 3.99559 39.9572 3.99559 40.7273C3.99559 39.563 3.6075 38.5546 2.83131 37.7112C2.05513 36.8587 1.11136 36.4095 0 36.3545ZM56.8313 24.0069C56.0551 24.8503 55.1114 25.2995 54 25.3545C55.1114 25.4095 56.0551 25.8587 56.8313 26.7112C57.6075 27.5546 57.9956 28.563 57.9956 29.7273C57.9956 28.9572 58.172 28.2513 58.5248 27.5913C58.8864 26.9312 59.3716 26.3995 59.9802 26.0053C60.5976 25.602 61.2679 25.3911 62 25.3545C60.8798 25.2903 59.9361 24.8503 59.1599 24.0069C58.3837 23.1635 57.9956 22.1642 57.9956 21C57.9956 22.1642 57.6075 23.1635 56.8313 24.0069ZM81 25.3545C82.1114 25.2995 83.0551 24.8503 83.8313 24.0069C84.6075 23.1635 84.9956 22.1642 84.9956 21C84.9956 22.1642 85.3837 23.1635 86.1599 24.0069C86.9361 24.8503 87.8798 25.2903 89 25.3545C88.2679 25.3911 87.5976 25.602 86.9802 26.0053C86.3716 26.3995 85.8864 26.9312 85.5248 27.5913C85.172 28.2513 84.9956 28.9572 84.9956 29.7273C84.9956 28.563 84.6075 27.5546 83.8313 26.7112C83.0551 25.8587 82.1114 25.4095 81 25.3545ZM136 36.3545C137.111 36.2995 138.055 35.8503 138.831 35.0069C139.607 34.1635 139.996 33.1642 139.996 32C139.996 33.1642 140.384 34.1635 141.16 35.0069C141.936 35.8503 142.88 36.2903 144 36.3545C143.268 36.3911 142.598 36.602 141.98 37.0053C141.372 37.3995 140.886 37.9312 140.525 38.5913C140.172 39.2513 139.996 39.9572 139.996 40.7273C139.996 39.563 139.607 38.5546 138.831 37.7112C138.055 36.8587 137.111 36.4095 136 36.3545ZM101.831 49.0069C101.055 49.8503 100.111 50.2995 99 50.3545C100.111 50.4095 101.055 50.8587 101.831 51.7112C102.607 52.5546 102.996 53.563 102.996 54.7273C102.996 53.9572 103.172 53.2513 103.525 52.5913C103.886 51.9312 104.372 51.3995 104.98 51.0053C105.598 50.602 106.268 50.3911 107 50.3545C105.88 50.2903 104.936 49.8503 104.16 49.0069C103.384 48.1635 102.996 47.1642 102.996 46C102.996 47.1642 102.607 48.1635 101.831 49.0069Z" fill="currentColor"></path>
                        </svg>
                        </div>
                        <div class="theme-switch__circle-container">
                        <div class="theme-switch__sun-moon-container">
                            <div class="theme-switch__moon">
                            <div class="theme-switch__spot"></div>
                            <div class="theme-switch__spot"></div>
                            <div class="theme-switch__spot"></div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </label>
            </div>

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


            <div class="flex items-center justify-center h-[180px] px-6">

                <img src="/${item.logo[0]?.url}" class="w-[140px] object-contain themeLogo" id="" />

            </div>

            {{-- <div class="flex w-full justify-start p-2">
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
            </div> --}}

            <ul class="menu p-4 gap-2 w-full">


                <li>

                    <a href="{{ route('dashboard') }}"
                        class="shine-bgNav headerFont  rounded-xl px-4 py-3 text-sm font-medium">

                        <i class="fa-solid fa-house"></i>

                        Dashboard

                    </a>

                </li>

                <!-- ANALYTICS -->
                <li>

                    <a href="{{ route('analytics') }}"
                        class="shine-bgNav  rounded-xl headerFont px-4 py-3 text-sm font-medium">

                        <i class="fa-solid fa-chart-line"></i>

                        Analytics

                    </a>

                </li>

                <!-- REPORTS -->
                <li>

                    <details>
                        <summary class="shine-bgNav w-full rounded-xl px-4 py-3 text-sm font-medium dropdownIcon">
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
                                        class="dropdownIcon rounded-lg shine-bgNav headerFont  px-4 py-2 text-sm">

                                        Sales Management
                                        <div class="flex w-full arrowIcon justify-end">
                                            <i class="fa-solid fa-angle-down"></i>
                                        </div>
                                    </summary>

                                    <ul class="mt-1 space-y-1">

                                        <li>
                                            <a href="{{ route('dcr') }}"
                                                class="rounded-lg px-4 shine-bgNav headerFont  py-2 text-sm">

                                                Daily Collection Report

                                            </a>
                                        </li>

                                        <li>
                                            <a href="{{ route('dsr') }}"
                                                class="rounded-lg px-4 shine-bgNav headerFont  py-2 text-sm">

                                                Daily Sales Report

                                            </a>
                                        </li>

                                        <li>
                                            <a href="{{ route('dsrr') }}"
                                                class="rounded-lg px-4 shine-bgNav headerFont  py-2 text-sm">

                                                Daily Sales Remittance Report

                                            </a>
                                        </li>

                                        <li>
                                            <a href="{{ route('ecmf') }}"
                                                class="rounded-lg px-4 shine-bgNav headerFont  py-2 text-sm">

                                                Electronic CMF

                                            </a>
                                        </li>

                                        <li>
                                            <a href="{{ route('pendingbo') }}"
                                                class="rounded-lg px-4 shine-bgNav headerFont  py-2 text-sm">

                                                Hold Bad Orders

                                            </a>
                                        </li>

                                        <li>
                                            <a href="{{ route('pendingrequest') }}"
                                                class="rounded-lg px-4 shine-bgNav headerFont  py-2 text-sm">

                                                Hold Sales Orders

                                            </a>
                                        </li>

                                        <li>
                                            <a href="{{ route('missedcall') }}"
                                                class="rounded-lg px-4 shine-bgNav headerFont  py-2 text-sm">

                                                Missed Calls

                                            </a>
                                        </li>

                                        <li>
                                            <a href="{{ route('offsitetransaction') }}"
                                                class="rounded-lg px-4 shine-bgNav headerFont py-2 text-sm">
                                                Offsite Transactions
                                            </a>
                                        </li>

                                        <li>
                                            <a href="{{ route('pendingorders') }}"
                                                class="rounded-lg px-4 shine-bgNav headerFont  py-2 text-sm">

                                                Pending Orders

                                            </a>
                                        </li>

                                        <li>
                                            <a href="{{ route('salesreport') }}"
                                                class="rounded-lg shine-bgNav headerFont  px-4 py-2 text-sm">

                                                Sales Report

                                            </a>
                                        </li>

                                        <li>
                                            <a href="{{ route('salesreturnBO') }}"
                                                class="rounded-lg shine-bgNav headerFont  px-4 py-2 text-sm">

                                                Sales Return (BO)

                                            </a>
                                        </li>

                                        <li>
                                            <a href="{{ route('salesreturnRGS') }}"
                                                class="rounded-lg headerFont shine-bgNav  px-4 py-2 text-sm">

                                                Sales Return (RGS)

                                            </a>
                                        </li>

                                        <li>
                                            <a href="{{ route('salessummary') }}"
                                                class="rounded-lg headerFont shine-bgNav  px-4 py-2 text-sm">

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
                                        class="rounded-lg dropdownIcon headerFont shine-bgNav  px-4 py-2 text-sm">
                                        Inventory Management
                                        <div class="flex w-full arrowIcon justify-end">
                                            <i class="fa-solid fa-angle-down"></i>
                                        </div>
                                    </summary>

                                    <ul class="mt-1 space-y-1">

                                        <li>
                                            <a href="{{ route('invValuation') }}"
                                                class="rounded-lg shine-bgNav headerFont px-4 py-2 text-sm">

                                                Inventory Valuation

                                            </a>
                                        </li>

                                        <li>
                                            <a href="{{ route('placementCheck') }}"
                                                class="rounded-lg shine-bgNav headerFont  px-4 py-2 text-sm">

                                                Placement Check

                                            </a>
                                        </li>

                                        <li>
                                            <a href="{{ route('stockcheck') }}"
                                                class="rounded-lg shine-bgNav headerFont  px-4 py-2 text-sm">

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
                                        class="rounded-lg dropdownIcon headerFont  shine-bgNav px-4 py-2 text-sm">

                                        Audit Trail
                                        <div class="flex w-full arrowIcon justify-end">
                                            <i class="fa-solid fa-angle-down"></i>
                                        </div>

                                    </summary>

                                    <ul class="mt-1 space-y-1">

                                        <li>
                                            <a href="{{ route('syncReport') }}"
                                                class="rounded-lg headerFont shine-bgNav  px-4 py-2 text-sm">

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
                                        class="rounded-lg dropdownIcon headerFont shine-bgNav px-4 py-2 text-sm">

                                        Others
                                        <div class="flex w-full arrowIcon justify-end">
                                            <i class="fa-solid fa-angle-down"></i>
                                        </div>
                                    </summary>

                                    <ul class="mt-1 space-y-1">

                                        <li>
                                            <a href="{{ route('deliveryMonitoring') }}"
                                                class="rounded-lg shine-bgNav headerFont  px-4 py-2 text-sm">

                                                Delivery Monitoring

                                            </a>
                                        </li>

                                        <li>
                                            <a href="{{ route('deliveryMonitoring') }}"
                                                class="rounded-lg shine-bgNav headerFont  px-4 py-2 text-sm">

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

                        <summary class="w-full shine-bgNav dropdownIcon rounded-xl px-4 py-3 text-sm font-medium">

                            <div class="flex w-full headerFont items-center gap-3">

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
                                    class="rounded-lg shine-bgNav headerFont px-4 py-2 text-sm">

                                    Data Maintenance

                                </a>
                            </li>

                            <li>
                                <a href="{{ route('datamaintenance') }}"
                                    class="rounded-lg shine-bgNav headerFont  px-4 py-2 text-sm">

                                    Eric Data Alignment

                                </a>
                            </li>

                            <li>
                                <a href="{{ route('sfaqueuing') }}"
                                    class="rounded-lg shine-bgNav headerFont  px-4 py-2 text-sm">

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
                            class="shine-bgNav dropdownIcon rounded-xl px-4 py-3 text-sm font-medium">

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
                                    class="rounded-lg px-4 shine-bgNav headerFont  py-2 text-sm">Fast
                                    Unimerchant Cebu</a></li>

                            <li><a href="{{ route('maintenance') }}"
                                    class="rounded-lg px-4 shine-bgNav headerFont  py-2 text-sm">Fast
                                    Unimerchant Bohol</a></li>

                            <li><a href="{{ route('maintenance') }}"
                                    class="rounded-lg px-4 shine-bgNav headerFont  py-2 text-sm">MNC
                                    PDB</a></li>

                            <li><a href="{{ route('maintenance') }}"
                                    class="rounded-lg px-4 shine-bgNav headerFont  py-2 text-sm">MNC
                                    SYL</a></li>

                            <li><a href="{{ route('maintenance') }}"
                                    class="rounded-lg px-4 shine-bgNav headerFont  py-2 text-sm">MNC
                                    MCM</a></li>

                            <li><a href="{{ route('maintenance') }}"
                                    class="rounded-lg px-4 shine-bgNav headerFont  py-2 text-sm">MNC
                                    RAC</a></li>

                            <li><a href="{{ route('maintenance') }}"
                                    class="rounded-lg px-4 shine-bgNav headerFont  py-2 text-sm">MNC
                                    DCI</a></li>

                            <li><a href="{{ route('maintenance') }}"
                                    class="rounded-lg px-4 shine-bgNav headerFont  py-2 text-sm">MNC
                                    NVM</a></li>

                            <li><a href="{{ route('maintenance') }}"
                                    class="rounded-lg px-4 shine-bgNav headerFont  py-2 text-sm">MNC
                                    ABRI CAVITE</a></li>

                            <li><a href="{{ route('maintenance') }}"
                                    class="rounded-lg px-4 shine-bgNav headerFont  py-2 text-sm">IMDC
                                    GROUP CALBAYOG</a></li>

                            <li><a href="{{ route('maintenance') }}"
                                    class="rounded-lg px-4 shine-bgNav headerFont  py-2 text-sm">IMDC
                                    GROUP TACLOBAN</a></li>

                            <li><a href="{{ route('maintenance') }}"
                                    class="rounded-lg px-4 shine-bgNav headerFont  py-2 text-sm">IMDC
                                    GROUP ORMOC</a></li>

                            <li><a href="{{ route('maintenance') }}"
                                    class="rounded-lg px-4 shine-bgNav headerFont  py-2 text-sm">MEM</a>
                            </li>

                            <li><a href="{{ route('maintenance') }}"
                                    class="rounded-lg px-4 shine-bgNav headerFont  py-2 text-sm">Fast
                                    Unimerchants P.O.D</a></li>

                            <li><a href="{{ route('maintenance') }}"
                                    class="rounded-lg px-4 shine-bgNav headerFont  py-2 text-sm">DGV</a>
                            </li>

                            <li><a href="{{ route('maintenance') }}"
                                    class="rounded-lg px-4 shine-bgNav headerFont  py-2 text-sm">SMI</a>
                            </li>

                            <li><a href="{{ route('maintenance') }}"
                                    class="rounded-lg px-4 shine-bgNav headerFont  py-2 text-sm">DBV</a>
                            </li>

                            <li><a href="{{ route('maintenance') }}"
                                    class="rounded-lg px-4 shine-bgNav headerFont  py-2 text-sm">DCMI</a>
                            </li>

                        </ul>

                    </details>

                </li>

            </ul>

        </div>

    </div>

</div>