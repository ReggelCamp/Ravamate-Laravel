const cdoSyncCards = [
    {
        label: "Sync CDO Customer",
        route: "customer",
        img: "https://cdo.sfa-plus.com/SFA/v2/img/CDOAlignment_Customer.svg",
        id: "sync-CDOcustomer",
        desc: "This will allign CDO customers to SFA Plus.",
    },
    {
        label: "Sync CDO Customer Discount",
        route: "product",
        img: "https://cdo.sfa-plus.com/SFA/v2/img/CDOAlignment_Products.svg",
        id: "sync-CDOproduct",
        desc: "This will allign customer discount per product",
    },
    {
        label: "Sync CDO Inventory",
        route: "placementmaintenance",
        img: "https://cdo.sfa-plus.com/SFA/v2/img/CDOAlignment_Inventory.svg",
        id: "sync-CDOpalcement",
        desc: "This will allign CDO Inventory.",
    },
    {
        label: "Sync CDO Operation",
        route: "bankmaintenance",
        img: "https://cdo.sfa-plus.com/SFA/v2/img/CDOAlignment_Operations.svg",
        id: "sync-CDObank",
        desc: "This will align operations of CDO to SFA Plus.",
    },
    {
        label: "Sync CDO Past Transaction",
        route: "salesmanobjective",
        img: "https://cdo.sfa-plus.com/SFA/v2/img/CDOAlignment_PastTransactions.svg",
        id: "sync-CDOoblective",
        desc: "This will allign CDO past transactions.",
    },
    {
        label: "Sync CDO Past Products",
        route: "mustcarry",
        img: "https://cdo.sfa-plus.com/SFA/v2/img/CDOAlignment_Products.svg",
        id: "sync-CDOmustcarry",
        desc: "This will allign product details & price list.",
    },
    {
        label: "Sync CDO Salesman",
        route: "salesman",
        img: "https://cdo.sfa-plus.com/SFA/v2/img/CDOAlignment_Salesman.svg",
        id: "sync-CDOsalesman",
        desc: "This will align salesman From CDO to SFA Plus.",
    },
];

const sfaSyncCards = [
    {
        label: "Sync Customer",
        route: "customer",
        icon: "mdi mdi-account-sync",
        id: "sync-customer",
        desc: "This will allign customer details on MCP, NPI Returns Reason, Salesman details, Offtake, Must have, Cycle Plan, buying Accounts from syspro. ",
    },
    {
        label: "Sync Products",
        route: "mustcarry",
        icon: "mdi mdi-archive-sync-outline",
        id: "sync-products",
        desc: "This will allign product details & price list.",
    },
];

    console.log(sfaSyncCards.label);

  cdoSyncCards.forEach(card => {
    $(".cardContent").append(`
        <div id="${card.id}" class="flex cdoSyncCards flex-col gap-0 w-full max-w-[300px] mx-auto h-[240px]">

            <h2 class="card-title rounded-t-4xl py-2 w-full flex justify-center headerColor maintinanceCard">
                ${card.label}
            </h2>

             <div class="card-body relative flex-1 rounded-b-4xl dataSync group overflow-hidden">

                <!-- Centered Content -->
                <div class="flex items-center justify-center w-full h-full">
                    <span class="flex flex-col items-center justify-center">
                    <img
                        src="${card.img}"
                        alt="${card.label}"
                        class="w-[50px] h-[50px] object-cover">
                </span>
                </div>
                <span class="hidden descContainer">${card.desc}</span>

                <div class="flex w-full items-end justify-end">
                    <a class="flex execute-sync-btn"
                       data-url="${card.route}"
                       data-label="${card.label}">

                        <button onclick="cdo_sync.showModal()" class="shine-sync w-[80px] flex items-center justify-center py-2 rounded-xl text-xs">
                            Execute
                        </button>

                    </a>
                </div>

            </div>

        </div>
    `);
});

sfaSyncCards.forEach(card => {
    $('.SfaContent').append(`
        <div id="${card.id}" class="sfaSyncCards flex flex-col gap-0 w-full max-w-[300px] mx-auto h-[240px]">

            <h2 class="card-title rounded-t-4xl py-2 w-full flex justify-center headerColor maintinanceCard">
                ${card.label}
            </h2>

            <div class="card-body relative flex-1 rounded-b-4xl dataSync group overflow-hidden">

                <!-- Centered Content -->
                <div class="flex items-center justify-center w-full h-full">
                    <span class="cardContentWrapper flex flex-col items-center justify-center transition-all duration-300">

                        <i class="${card.icon} sfaIcon text-[80px] leading-none text-[#c1c1c1] transition-all duration-300"></i>

                        <span class="descContainer hidden text-[12px] text-center px-4 mt-2">
                            ${card.desc}
                        </span>

                    </span>
            </div>

                <!-- Bottom Right Button -->
                <div class="absolute bottom-4 right-4">
                    <a class="execute-sync-btn"
                        data-url="${card.route}"
                        data-label="${card.label}">
                        <button class="shine-sync w-[80px] flex items-center justify-center py-2 rounded-xl text-xs">
                            Execute
                        </button>
                    </a>
                </div>

            </div>

        </div>
    `);
});

$('.SfaContent')
.on('mouseenter', '.sfaSyncCards', function () {
    $(this).find('.descContainer').removeClass('hidden');

    $(this).find('.cardContentWrapper').css({
        transform: 'translateY(-25px)'
    });

    $(this).find('.sfaIcon').css({
        fontSize: '30px'
    });
})
.on('mouseleave', '.sfaSyncCards', function () {
    $(this).find('.descContainer').addClass('hidden');

    $(this).find('.cardContentWrapper').css({
        transform: 'translateY(0)'
    });

    $(this).find('.sfaIcon').css({
        fontSize: '80px'
    });
});

$('.cardContent').on('mouseenter', '.cdoSyncCards', function () {
    $(this).find('.descContainer').removeClass('hidden');
}).on('mouseleave', '.cdoSyncCards', function () {
    $(this).find('.descContainer').addClass('hidden');
});