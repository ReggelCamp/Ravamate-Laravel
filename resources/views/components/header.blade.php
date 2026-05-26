<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
<div class="flex w-full h-[80px] p-5 items-center bg-blue-800 justify-between border ">
    <div class="justify-start flex w-full ">
        <button class="hover:bg-blue-700 rounded p-1" onclick="toggleSidebar()">
            <i class="fa-solid fa-bars text-white text-xl"></i>
        </button>
    </div>
    <h1>RAVAMATE</h1>
    <div class="flex w-full text-white justify-end gap-7">
        <i class="fa-solid fa-bell text-lg"></i>
        <i class="fa-solid fa-circle-user text-lg"></i>
    </div>
</div>



<aside id="sidenav"
    class="hidden fixed top-0 left-0 h-full w-[250px] sm:w-[350px] bg-blue-900 text-white flex flex-col p-5 z-30 ">
    <div class="w-full flex items-center justify-center h-[250px]">
        <img src="/static/images/ravamatedashboard.png" class="w-[145px] h-[115px]  object-cover"/> 
    </div>

  <nav class="flex w-full flex-col gap-2 text-white">

    {{-- DASHBOARD --}}
    <a href="{{ route('dashboard') }}"
       class="hover:bg-blue-700 px-4 py-2 rounded transition">
        Dashboard
    </a>

    {{-- ANALYTICS --}}
    <a href="{{ route('analytics') }}"
       class="hover:bg-blue-700 px-4 py-2 rounded transition">
        Analytics
    </a>

    {{-- REPORTS --}}
    <div>

        <input id="stock-toggle" type="checkbox" class="peer hidden" />

        <label for="stock-toggle"
               class="flex items-center justify-between cursor-pointer hover:bg-blue-700 px-4 py-2 rounded transition">

            <span>Reports</span>

            <svg class="w-4 h-4 transition-transform peer-checked:rotate-180"
                 xmlns="http://www.w3.org/2000/svg"
                 fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M19 9l-7 7-7-7" />
            </svg>

        </label>

        <!-- dropdown content -->
        <div class="max-h-0 overflow-hidden transition-all duration-300 peer-checked:max-h-96">

            <ul class="bg-blue-900 mt-1 rounded p-2 space-y-1">

                <!-- Sales Management sub-collapse -->
                <li>

                    <div>

                        <input id="sales-toggle" type="checkbox" class="peer hidden" />

                        <label for="sales-toggle"
                               class="flex justify-between cursor-pointer px-4 py-2 rounded hover:bg-blue-700">

                            <span>Sales Management</span>

                            <svg class="w-4 h-4 transition-transform peer-checked:rotate-180"
                                 xmlns="http://www.w3.org/2000/svg"
                                 fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                      stroke-width="2" d="M19 9l-7 7-7-7" />
                            </svg>

                        </label>

                        <div class="max-h-0 overflow-auto transition-all duration-300 peer-checked:max-h-40">

                            <a href="{{ route('dcr') }}"
                               class="block px-6 py-2 hover:bg-blue-700 rounded">
                                Daily Collection Report
                            </a>
                           
                            <a href="{{ route('dsr') }}"
                               class="block px-6 py-2 hover:bg-blue-700 rounded">
                                Daily sales Report
                            </a>

                            <a href="{{ route('dsrr') }}"
                               class="block px-6 py-2 hover:bg-blue-700 rounded">
                                Daily sales Remmitance Report
                            </a>

                            <a href="{{ route('ecmf') }}"
                               class="block px-6 py-2 hover:bg-blue-700 rounded">
                                Electronic CMF
                            </a>
                           
                            <a href="{{ route('pendingbo') }}"
                               class="block px-6 py-2 hover:bg-blue-700 rounded">
                                Hold Bad Orders
                            </a>
                           
                            <a href="{{ route('pendingrequest') }}"
                               class="block px-6 py-2 hover:bg-blue-700 rounded">
                                Hold Sales Orders
                            </a>
                           
                            <a href="{{ route('missedcall') }}"
                               class="block px-6 py-2 hover:bg-blue-700 rounded">
                                Missed Calls
                            </a>
                            
                            <a href="{{ route('offsitetransaction') }}"
                               class="block px-6 py-2 hover:bg-blue-700 rounded">
                                Offsite Transactions
                            </a>
                            
                            <a href="{{ route('pendingorders') }}"
                               class="block px-6 py-2 hover:bg-blue-700 rounded">
                                Pending Orders
                            </a>
                            
                            <a href="{{ route('salesreport') }}"
                               class="block px-6 py-2 hover:bg-blue-700 rounded">
                                Sales Report
                            </a>
                            
                            <a href="{{ route('salesreturnBO') }}"
                               class="block px-6 py-2 hover:bg-blue-700 rounded">
                                Sales Return (BO)
                            </a>
                            
                            <a href="{{ route('salesreturnRGS') }}"
                               class="block px-6 py-2 hover:bg-blue-700 rounded">
                                Sales Return (RGS)
                            </a>
                            
                            <a href="{{ route('salessummary') }}"
                               class="block px-6 py-2 hover:bg-blue-700 rounded">
                                Sales Summary
                            </a>
                        </div>

                    </div>

                </li>

                 <!-- Inventory Management sub-collapse -->
                <li>

                    <div>

                        <input id="inventory-toggle" type="checkbox" class="peer hidden" />

                        <label for="inventory-toggle"
                               class="flex justify-between cursor-pointer px-4 py-2 rounded hover:bg-blue-700">

                            <span>Inventory Management</span>

                            <svg class="w-4 h-4 transition-transform peer-checked:rotate-180"
                                 xmlns="http://www.w3.org/2000/svg"
                                 fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                      stroke-width="2" d="M19 9l-7 7-7-7" />
                            </svg>

                        </label>

                        <div class="max-h-0 overflow-auto transition-all duration-300 peer-checked:max-h-40">

                            <a href="{{ route('invValuation') }}"
                               class="block px-6 py-2 hover:bg-blue-700 rounded">
                                Inventory Valuation
                            </a>
                           
                            <a href="{{ route('placementCheck') }}"
                               class="block px-6 py-2 hover:bg-blue-700 rounded">
                                Placement Check
                            </a>

                            <a href="{{ route('stockcheck') }}"
                               class="block px-6 py-2 hover:bg-blue-700 rounded">
                                Store Inventory
                            </a>

                        </div>

                    </div>

                </li>

                  <!-- Audit Trail sub-collapse -->
                <li>

                    <div>

                        <input id="Audit-toggle" type="checkbox" class="peer hidden" />

                        <label for="Audit-toggle"
                               class="flex justify-between cursor-pointer px-4 py-2 rounded hover:bg-blue-700">

                            <span>Audit Trail</span>

                            <svg class="w-4 h-4 transition-transform peer-checked:rotate-180"
                                 xmlns="http://www.w3.org/2000/svg"
                                 fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                      stroke-width="2" d="M19 9l-7 7-7-7" />
                            </svg>

                        </label>

                        <div class="max-h-0 overflow-auto transition-all duration-300 peer-checked:max-h-40">

                            <a href="{{ route('syncReport') }}"
                               class="block px-6 py-2 hover:bg-blue-700 rounded">
                                Sales man Data sync
                            </a>

                        </div>

                    </div>

                </li>

                  <!-- Change Site sub-collapse -->
                <li>

                    <div>

                        <input id="other-toggle" type="checkbox" class="peer hidden" />

                        <label for="other-toggle"
                               class="flex justify-between cursor-pointer px-4 py-2 rounded hover:bg-blue-700">

                            <span>Others</span>

                            <svg class="w-4 h-4 transition-transform peer-checked:rotate-180"
                                 xmlns="http://www.w3.org/2000/svg"
                                 fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                      stroke-width="2" d="M19 9l-7 7-7-7" />
                            </svg>

                        </label>

                        <div class="max-h-0 overflow-auto transition-all duration-300 peer-checked:max-h-40">

                            <a href="{{ route('deliveryMonitoring') }}"
                               class="block px-6 py-2 hover:bg-blue-700 rounded">
                                Delivery Monitoring
                            </a>

                            <a href="{{ route('deliveryMonitoring') }}"
                               class="block px-6 py-2 hover:bg-blue-700 rounded">
                                Prebooking Delivery Monitoring
                            </a>

                        </div>

                    </div>

                </li>

            </ul>

        </div>

    </div>

    {{-- MAINTENANCE --}}
     <div>

    <!-- checkbox -->
    <input id="maintenance-toggle" type="checkbox" class="peer hidden" />

    <!-- header -->
    <label for="maintenance-toggle"
           class="flex items-center justify-between cursor-pointer hover:bg-blue-700 px-4 py-2 rounded transition">

        <span>Maintenance</span>

        <!-- arrow -->
        <svg class="w-4 h-4 transition-transform peer-checked:rotate-180"
             xmlns="http://www.w3.org/2000/svg"
             fill="none" viewBox="0 0 24 24" stroke="currentColor">

            <path stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7" />

        </svg>

    </label>

    <!-- dropdown content -->
    <div class="max-h-0 overflow-hidden transition-all duration-300 peer-checked:max-h-96">

        <ul class="bg-blue-900 mt-1 rounded p-2 space-y-1">

            <li>
                <a href="{{ route('maintenance') }}"
                   class="block px-6 py-2 hover:bg-blue-700 rounded">
                    Data Maintenance
                </a>
            </li>

            <li>
                <a href="{{ route('datamaintenance') }}"
                   class="block px-6 py-2 hover:bg-blue-700 rounded">
                    Eric Data Alignment
                </a>
            </li>

            <li>
                <a href="{{ route('sfaqueuing') }}"
                   class="block px-6 py-2 hover:bg-blue-700 rounded">
                    SFA Queuing
                </a>
            </li>

        </ul>

    </div>

    </div>

     {{-- Change Sites --}}
     <div >

    <!-- checkbox -->
    <input id="changesite-toggle" type="checkbox" class="peer hidden" />

    <!-- header -->
    <label for="changesite-toggle"
           class="flex items-center justify-between cursor-pointer hover:bg-blue-700 px-4 py-2 rounded transition">

        <span>Change Sites</span>

        <!-- arrow -->
        <svg class="w-4 h-4 transition-transform peer-checked:rotate-180"
             xmlns="http://www.w3.org/2000/svg"
             fill="none" viewBox="0 0 24 24" stroke="currentColor">

            <path stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7" />

        </svg>

    </label>

    <!-- dropdown content -->
    <div class="max-h-0 overflow-y-auto transition-all duration-300 peer-checked:max-h-96">

        <ul class="bg-blue-900 mt-1 rounded p-2 space-y-1">

            <li>
                <a href="{{ route('maintenance') }}"
                   class="block px-6 py-2 hover:bg-blue-700 rounded">
                    Fast Unimerchant Cebu
                </a>
            </li>
           
            <li>
                <a href="{{ route('maintenance') }}"
                   class="block px-6 py-2 hover:bg-blue-700 rounded">
                    Fast Unimerchant Bohol
                </a>
            </li>
           
            <li>
                <a href="{{ route('maintenance') }}"
                   class="block px-6 py-2 hover:bg-blue-700 rounded">
                    MNC PDB
                </a>
            </li>
           
            <li>
                <a href="{{ route('maintenance') }}"
                   class="block px-6 py-2 hover:bg-blue-700 rounded">
                    MNC SYL
                </a>
            </li>
           
            <li>
                <a href="{{ route('maintenance') }}"
                   class="block px-6 py-2 hover:bg-blue-700 rounded">
                    MNC MCM
                </a>
            </li>
           
            <li>
                <a href="{{ route('maintenance') }}"
                   class="block px-6 py-2 hover:bg-blue-700 rounded">
                    MNC RAC
                </a>
            </li>
           
            <li>
                <a href="{{ route('maintenance') }}"
                   class="block px-6 py-2 hover:bg-blue-700 rounded">
                    MNC DCI
                </a>
            </li>
           
            <li>
                <a href="{{ route('maintenance') }}"
                   class="block px-6 py-2 hover:bg-blue-700 rounded">
                    MNC NVM
                </a>
            </li>
           
            <li>
                <a href="{{ route('maintenance') }}"
                   class="block px-6 py-2 hover:bg-blue-700 rounded">
                    MNC ABRI CAVITE
                </a>
            </li>
           
            <li>
                <a href="{{ route('maintenance') }}"
                   class="block px-6 py-2 hover:bg-blue-700 rounded">
                    IMDC GROUP CALBAYOG
                </a>
            </li>
           
            <li>
                <a href="{{ route('maintenance') }}"
                   class="block px-6 py-2 hover:bg-blue-700 rounded">
                    IMDC GROUP TACLOBAN
                </a>
            </li>
           
            <li>
                <a href="{{ route('maintenance') }}"
                   class="block px-6 py-2 hover:bg-blue-700 rounded">
                    IMDC GROUP ORMOC
                </a>
            </li>
           
            <li>
                <a href="{{ route('maintenance') }}"
                   class="block px-6 py-2 hover:bg-blue-700 rounded">
                    MEM
                </a>
            </li>
           
            <li>
                <a href="{{ route('maintenance') }}"
                   class="block px-6 py-2 hover:bg-blue-700 rounded">
                    Fast Unimerchants P.O.D 
                </a>
            </li>
           
            <li>
                <a href="{{ route('maintenance') }}"
                   class="block px-6 py-2 hover:bg-blue-700 rounded">
                    DGV
                </a>
            </li>
           
            <li>
                <a href="{{ route('maintenance') }}"
                   class="block px-6 py-2 hover:bg-blue-700 rounded">
                    SMI
                </a>
            </li>
           
            <li>
                <a href="{{ route('maintenance') }}"
                   class="block px-6 py-2 hover:bg-blue-700 rounded">
                    DBV
                </a>
            </li>
           
            <li>
                <a href="{{ route('maintenance') }}"
                   class="block px-6 py-2 hover:bg-blue-700 rounded">
                    DCMI
                </a>
            </li>


        </ul>

    </div>

    </div>

</nav>

</aside>

<script>
    function toggleSidebar() {
        document.getElementById('sidenav').classList.toggle('hidden');

        document.addEventListener('click', function(e) {
    const sidebar = document.getElementById('sidenav');
    if (!sidebar.contains(e.target) && !e.target.closest('button')) {
        sidebar.classList.add('hidden');
    }
});
    }
</script>

