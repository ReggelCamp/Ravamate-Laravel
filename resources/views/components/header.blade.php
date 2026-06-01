<link rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">

<div class="flex w-full h-[70px] px-6 items-center justify-between border-b gradient2">


    <div class="flex items-center w-1/3">

        <label for="my-drawer-1"
               class="rounded-lg p-2 cursor-pointer hover:bg-base-200 transition-all duration-200">

            <i class="fa-solid fa-bars headerColor text-xl"></i>

        </label>

    </div>

    <div class="flex justify-center w-1/3">

        <h1 class="report_header company_name text-2xl font-semibold truncate">
        </h1>

    </div>

    <!-- RIGHT -->
    <div class="flex items-center justify-end gap-5 w-1/3">

        <i class="fa-solid fa-bell headerColor text-lg cursor-pointer"></i>

        <i class="fa-solid fa-circle-user headerColor text-2xl cursor-pointer"></i>

    </div>

</div>


<div class="drawer">

    <!-- TOGGLE -->
    <input id="my-drawer-1"
           type="checkbox"
           class="drawer-toggle" />

    <!-- PAGE CONTENT -->
    <div class="drawer-content">

    </div>

  
    <div class="drawer-side z-50">

        <label for="my-drawer-1"
               aria-label="close sidebar"
               class="drawer-overlay">
        </label>

        
        <div class="bg-base-200 min-h-full w-[300px] shadow-2xl overflow-y-auto">

            
            <div class="flex items-center justify-center h-[180px] px-6 border-b">

                <img src="/${item.logo[0]?.url}" class="w-[140px] object-contain themeLogo"  id=""/>                    

            </div>

            
            <ul class="menu p-4 gap-2 w-full">

                
                <li>

                    <a href="{{ route('dashboard') }}"
                       class="bg-background headerColor rounded-xl px-4 py-3 text-sm font-medium hover:bg-base-300 transition-all duration-200">

                        <i class="fa-solid fa-house"></i>

                        Dashboard

                    </a>

                </li>

                <!-- ANALYTICS -->
                <li>

                    <a href="{{ route('analytics') }}"
                       class="bg-background headerColor rounded-xl px-4 py-3 text-sm font-medium hover:bg-base-300 transition-all duration-200">

                        <i class="fa-solid fa-chart-line"></i>

                        Analytics

                    </a>

                </li>

                <!-- REPORTS -->
                <li>

                    <details>

                        <summary class="bg-background customHover headerColor rounded-xl px-4 py-3 text-sm font-medium hover:bg-base-300 transition-all duration-200">

                            <div class="flex items-center gap-3 ">

                                <i class="fa-solid fa-file-lines"></i>

                                <span>Reports</span>

                            </div>

                        </summary>

                        <ul class="mt-2 space-y-1">

                            <!-- SALES MANAGEMENT -->
                            <li>

                                <details>

                                    <summary class="rounded-lg px-4 py-2 text-sm hover:bg-base-300 transition-all duration-200">

                                        Sales Management

                                    </summary>

                                    <ul class="mt-1 space-y-1">

                                        <li>
                                            <a href="{{ route('dcr') }}"
                                               class="rounded-lg px-4 py-2 text-sm hover:bg-base-300 transition-all duration-200">

                                                Daily Collection Report

                                            </a>
                                        </li>

                                        <li>
                                            <a href="{{ route('dsr') }}"
                                               class="rounded-lg px-4 py-2 text-sm hover:bg-base-300 transition-all duration-200">

                                                Daily Sales Report

                                            </a>
                                        </li>

                                        <li>
                                            <a href="{{ route('dsrr') }}"
                                               class="rounded-lg px-4 py-2 text-sm hover:bg-base-300 transition-all duration-200">

                                                Daily Sales Remittance Report

                                            </a>
                                        </li>

                                        <li>
                                            <a href="{{ route('ecmf') }}"
                                               class="rounded-lg px-4 py-2 text-sm hover:bg-base-300 transition-all duration-200">

                                                Electronic CMF

                                            </a>
                                        </li>

                                        <li>
                                            <a href="{{ route('pendingbo') }}"
                                               class="rounded-lg px-4 py-2 text-sm hover:bg-base-300 transition-all duration-200">

                                                Hold Bad Orders

                                            </a>
                                        </li>

                                        <li>
                                            <a href="{{ route('pendingrequest') }}"
                                               class="rounded-lg px-4 py-2 text-sm hover:bg-base-300 transition-all duration-200">

                                                Hold Sales Orders

                                            </a>
                                        </li>

                                        <li>
                                            <a href="{{ route('missedcall') }}"
                                               class="rounded-lg px-4 py-2 text-sm hover:bg-base-300 transition-all duration-200">

                                                Missed Calls

                                            </a>
                                        </li>

                                        <li>
                                            <a href="{{ route('offsitetransaction') }}"
                                               class="rounded-lg px-4 py-2 text-sm hover:bg-base-300 transition-all duration-200">

                                                Offsite Transactions

                                            </a>
                                        </li>

                                        <li>
                                            <a href="{{ route('pendingorders') }}"
                                               class="rounded-lg px-4 py-2 text-sm hover:bg-base-300 transition-all duration-200">

                                                Pending Orders

                                            </a>
                                        </li>

                                        <li>
                                            <a href="{{ route('salesreport') }}"
                                               class="rounded-lg px-4 py-2 text-sm hover:bg-base-300 transition-all duration-200">

                                                Sales Report

                                            </a>
                                        </li>

                                        <li>
                                            <a href="{{ route('salesreturnBO') }}"
                                               class="rounded-lg px-4 py-2 text-sm hover:bg-base-300 transition-all duration-200">

                                                Sales Return (BO)

                                            </a>
                                        </li>

                                        <li>
                                            <a href="{{ route('salesreturnRGS') }}"
                                               class="rounded-lg px-4 py-2 text-sm hover:bg-base-300 transition-all duration-200">

                                                Sales Return (RGS)

                                            </a>
                                        </li>

                                        <li>
                                            <a href="{{ route('salessummary') }}"
                                               class="rounded-lg px-4 py-2 text-sm hover:bg-base-300 transition-all duration-200">

                                                Sales Summary

                                            </a>
                                        </li>

                                    </ul>

                                </details>

                            </li>

                            <!-- INVENTORY -->
                            <li>

                                <details>

                                    <summary class="rounded-lg px-4 py-2 text-sm hover:bg-base-300 transition-all duration-200">

                                        Inventory Management

                                    </summary>

                                    <ul class="mt-1 space-y-1">

                                        <li>
                                            <a href="{{ route('invValuation') }}"
                                               class="rounded-lg px-4 py-2 text-sm hover:bg-base-300 transition-all duration-200">

                                                Inventory Valuation

                                            </a>
                                        </li>

                                        <li>
                                            <a href="{{ route('placementCheck') }}"
                                               class="rounded-lg px-4 py-2 text-sm hover:bg-base-300 transition-all duration-200">

                                                Placement Check

                                            </a>
                                        </li>

                                        <li>
                                            <a href="{{ route('stockcheck') }}"
                                               class="rounded-lg px-4 py-2 text-sm hover:bg-base-300 transition-all duration-200">

                                                Store Inventory

                                            </a>
                                        </li>

                                    </ul>

                                </details>

                            </li>

                            <!-- AUDIT -->
                            <li>

                                <details>

                                    <summary class="rounded-lg px-4 py-2 text-sm hover:bg-base-300 transition-all duration-200">

                                        Audit Trail

                                    </summary>

                                    <ul class="mt-1 space-y-1">

                                        <li>
                                            <a href="{{ route('syncReport') }}"
                                               class="rounded-lg px-4 py-2 text-sm hover:bg-base-300 transition-all duration-200">

                                                Salesman Data Sync

                                            </a>
                                        </li>

                                    </ul>

                                </details>

                            </li>

                            <!-- OTHERS -->
                            <li>

                                <details>

                                    <summary class="rounded-lg px-4 py-2 text-sm hover:bg-base-300 transition-all duration-200">

                                        Others

                                    </summary>

                                    <ul class="mt-1 space-y-1">

                                        <li>
                                            <a href="{{ route('deliveryMonitoring') }}"
                                               class="rounded-lg px-4 py-2 text-sm hover:bg-base-300 transition-all duration-200">

                                                Delivery Monitoring

                                            </a>
                                        </li>

                                        <li>
                                            <a href="{{ route('deliveryMonitoring') }}"
                                               class="rounded-lg px-4 py-2 text-sm hover:bg-base-300 transition-all duration-200">

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

                        <summary class="bg-background headerColor rounded-xl px-4 py-3 text-sm font-medium hover:bg-base-300 transition-all duration-200">

                            <div class="flex items-center gap-3">

                                <i class="fa-solid fa-screwdriver-wrench"></i>

                                <span>Maintenance</span>

                            </div>

                        </summary>

                        <ul class="mt-2 space-y-1">

                            <li>
                                <a href="{{ route('maintenance') }}"
                                   class="rounded-lg px-4 py-2 text-sm hover:bg-base-300 transition-all duration-200">

                                    Data Maintenance

                                </a>
                            </li>

                            <li>
                                <a href="{{ route('datamaintenance') }}"
                                   class="rounded-lg px-4 py-2 text-sm hover:bg-base-300 transition-all duration-200">

                                    Eric Data Alignment

                                </a>
                            </li>

                            <li>
                                <a href="{{ route('sfaqueuing') }}"
                                   class="rounded-lg px-4 py-2 text-sm hover:bg-base-300 transition-all duration-200">

                                    SFA Queuing

                                </a>
                            </li>

                        </ul>

                    </details>

                </li>

                <!-- CHANGE SITES -->
                <li>

                    <details>

                        <summary class="bg-background headerColor rounded-xl px-4 py-3 text-sm font-medium hover:bg-base-300 transition-all duration-200">

                            <div class="flex items-center gap-3">

                                <i class="fa-solid fa-location-dot"></i>

                                <span>Change Sites</span>

                            </div>

                        </summary>

                        <ul class="mt-2 space-y-1 max-h-[300px] overflow-y-auto">

                            <li><a href="{{ route('maintenance') }}" class="rounded-lg px-4 py-2 text-sm hover:bg-base-300 transition-all duration-200">Fast Unimerchant Cebu</a></li>

                            <li><a href="{{ route('maintenance') }}" class="rounded-lg px-4 py-2 text-sm hover:bg-base-300 transition-all duration-200">Fast Unimerchant Bohol</a></li>

                            <li><a href="{{ route('maintenance') }}" class="rounded-lg px-4 py-2 text-sm hover:bg-base-300 transition-all duration-200">MNC PDB</a></li>

                            <li><a href="{{ route('maintenance') }}" class="rounded-lg px-4 py-2 text-sm hover:bg-base-300 transition-all duration-200">MNC SYL</a></li>

                            <li><a href="{{ route('maintenance') }}" class="rounded-lg px-4 py-2 text-sm hover:bg-base-300 transition-all duration-200">MNC MCM</a></li>

                            <li><a href="{{ route('maintenance') }}" class="rounded-lg px-4 py-2 text-sm hover:bg-base-300 transition-all duration-200">MNC RAC</a></li>

                            <li><a href="{{ route('maintenance') }}" class="rounded-lg px-4 py-2 text-sm hover:bg-base-300 transition-all duration-200">MNC DCI</a></li>

                            <li><a href="{{ route('maintenance') }}" class="rounded-lg px-4 py-2 text-sm hover:bg-base-300 transition-all duration-200">MNC NVM</a></li>

                            <li><a href="{{ route('maintenance') }}" class="rounded-lg px-4 py-2 text-sm hover:bg-base-300 transition-all duration-200">MNC ABRI CAVITE</a></li>

                            <li><a href="{{ route('maintenance') }}" class="rounded-lg px-4 py-2 text-sm hover:bg-base-300 transition-all duration-200">IMDC GROUP CALBAYOG</a></li>

                            <li><a href="{{ route('maintenance') }}" class="rounded-lg px-4 py-2 text-sm hover:bg-base-300 transition-all duration-200">IMDC GROUP TACLOBAN</a></li>

                            <li><a href="{{ route('maintenance') }}" class="rounded-lg px-4 py-2 text-sm hover:bg-base-300 transition-all duration-200">IMDC GROUP ORMOC</a></li>

                            <li><a href="{{ route('maintenance') }}" class="rounded-lg px-4 py-2 text-sm hover:bg-base-300 transition-all duration-200">MEM</a></li>

                            <li><a href="{{ route('maintenance') }}" class="rounded-lg px-4 py-2 text-sm hover:bg-base-300 transition-all duration-200">Fast Unimerchants P.O.D</a></li>

                            <li><a href="{{ route('maintenance') }}" class="rounded-lg px-4 py-2 text-sm hover:bg-base-300 transition-all duration-200">DGV</a></li>

                            <li><a href="{{ route('maintenance') }}" class="rounded-lg px-4 py-2 text-sm hover:bg-base-300 transition-all duration-200">SMI</a></li>

                            <li><a href="{{ route('maintenance') }}" class="rounded-lg px-4 py-2 text-sm hover:bg-base-300 transition-all duration-200">DBV</a></li>

                            <li><a href="{{ route('maintenance') }}" class="rounded-lg px-4 py-2 text-sm hover:bg-base-300 transition-all duration-200">DCMI</a></li>

                        </ul>

                    </details>

                </li>

            </ul>

        </div>

    </div>

</div>
