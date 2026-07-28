const CustomermaintenanceCards = [
    {
        label: 'Customer',
        route: 'customer',
        img: "https://cdo.sfa-plus.com/SFA/v2/img/maintenance02_customer.png",
        id: "customerMaintenance",
    },
    {
        label: 'CMF',
        route: 'cmf',
        img: "https://cdo.sfa-plus.com/SFA/v2/img/maintenance03_CMF.png",
        id: "cmfMaintenace",
    },
    {
        label: 'Customer Tagging',
        route: 'customertagging',
        img: "https://cdo.sfa-plus.com/SFA/v2/img/maintenance08_customerTagging.png",
        id: "taggingMaintenace",
    },
    {
        label: 'MCP Layout',
        route: 'mcplayout',
        img: "https://cdo.sfa-plus.com/SFA/v2/img/maintenance11_mcpLayout.png",
        id: "mcpMaintenace",
    },

];

 const ProductmaintenanceCards = [
    {
        label: 'Product',
        route: 'product',
        img: "https://cdo.sfa-plus.com/SFA/v2/img/maintenance06_produt.png",
        id: "productMaintenance",
    },
    {
        label: 'Placement',
        route: 'placementmaintenance',
        img: "https://cdo.sfa-plus.com/SFA/v2/img/maintenance10_mcp.png",
        id: "placementMaintenance",
    },
    {
        label: 'Must Carry',
        route: 'mustcarry',
        img: "https://cdo.sfa-plus.com/SFA/v2/img/reports10_stockTake.png",
        id: "mustcarryMaintenance",
    }
];

const OthermaintenanceCards = [
    {
        label: 'Bank',
        route: 'bankmaintenance',
        img: "https://cdo.sfa-plus.com/SFA/v2/img/maintenance09_bank.png",
        id: "bankMaintenance",
    },
    {
        label: 'Salesman',
        route: 'salesman',
        img: "https://cdo.sfa-plus.com/SFA/v2/img/maintenance02_customer.png",
        id: "salesmanMaintenance",
    },
    {
        label: 'Sales Objective',
        route: 'salesmanobjective',
        img: "https://cdo.sfa-plus.com/SFA/v2/img/maintenance05_salesman.png",
        id: "objectiveMaintenance",
    },
        
];

CustomermaintenanceCards.forEach(card => {
    $('.customerCardContent').append(`
        <div class="w-[240px] min-h-[150px] gap-0">
            <h2 class="card-title headerColor  rounded-t-2xl py-2 flex justify-center maintinanceCard">
                ${card.label}
            </h2>

            <div class="card-actions
                        rounded-b-2xl
                        flex justify-center items-center w-full
                         bg-white hover:bg-gray-500 group
                        transition-colors duration-300 py-5">
                <span
                    class=" relative flex items-center justify-center w-[100px] h-[100px] rounded-full border overflow-hidden transition-colors duration-300 ">

                   <span class="relative flex items-center justify-center w-[50px] h-[50px] overflow-hidden">

                    <img
                        src="${card.img}"
                        alt="${card.label}"
                        class="w-full h-full object-cover">

                    </span>

                    <!-- Hover Overlay -->
                    <a href="${card.route}" class="absolute inset-0 z-20 flex items-center justify-center
                        opacity-0 group-hover:opacity-100
                        transition-opacity duration-300">

                        <span class="shine-bgBtn px-3 py-2 rounded-xl text-xs">
                            See Details
                        </span>
                    </a>

                </span>
            </div>
        </div>
        
        
        
    `);
});

ProductmaintenanceCards.forEach(card => {
    $('.productCardContent').append(`
        <div class="w-[240px] min-h-[150px] gap-0">
            <h2 class="card-title headerColor  rounded-t-2xl py-2 flex justify-center maintinanceCard">
                ${card.label}
            </h2>

            <div class="card-actions
                                rounded-b-2xl
                                flex justify-center items-center w-full
                                         bg-white hover:bg-gray-500 group
                                transition-colors duration-300 py-5">
                <span
                    class=" relative flex items-center justify-center w-[100px] h-[100px] rounded-full border overflow-hidden transition-colors duration-300 ">

                    <span class="relative flex items-center justify-center w-[50px] h-[50px] overflow-hidden">

                        <img
                            src="${card.img}"
                            alt="${card.label}"
                            class="w-full h-full object-cover">

                    </span>

                    <!-- Hover Overlay -->
                        <a href="${card.route}" class="absolute inset-0 z-20 flex items-center justify-center
                                opacity-0 group-hover:opacity-100
                                transition-opacity duration-300 py-5">

                        <span class="shine-bgBtn px-3 py-2 rounded-xl text-xs">
                            See Details
                        </span>
                    </a>

                </span>
            </div>
        </div>
    `);
});

OthermaintenanceCards.forEach(card => {
    $('.otherCardContent').append(`
        <div class="w-[240px] min-h-[150px] gap-0">
            <h2 class="card-title headerColor  rounded-t-2xl py-2 flex justify-center maintinanceCard">
                ${card.label}
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
                            src="${card.img}"
                            alt="${card.label}"
                            class="w-full h-full object-cover">

                    </span>

                    <!-- Hover Overlay -->
                    <a href="${card.route}" class="absolute inset-0 z-20 flex items-center justify-center
                                        opacity-0 group-hover:opacity-100
                                        transition-opacity duration-300">

                        <span class="shine-bgBtn px-3 py-2 rounded-xl text-xs">
                            See Details
                        </span>
                    </a>

                </span>
            </div>
        </div>
 
    `);
});