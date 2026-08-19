import Api from "../helper/Api.js";
import TableLoader from "../helper/TableLoader.js";

function getAllSalesman() {

    Api.get({
        url: "/getSalesman",

        onSuccess: (data) => {
            
            TableLoader.tableData(
                '#salesmanTable',
                data,[
                    {
                        title:'Salesman Name',
                        data:'salesman_name'
                    },
                    {
                        title:'Attendance',
                        data:'attendance'
                    },
                    {
                        title:'Target MCP',
                        data:'target_mcp'
                    },
                    {
                        title:'Productive',
                        data:'productive'
                    },
                    {
                        title:'Unproductive',
                        data:'unproductive'
                    },
                    {
                        title:'Strike Rate',
                        data:'strike_rate'
                    },
                    {
                        title:'Selling Hours',
                        data:'selling_hrs'
                    },
                    {
                        title:'Sale',
                        data:'sale'
                    }
                ],
                // {
                //     onRowClick: (rowData) => {
                //         replaceSidePanel(rowData);
                //     }
                // }
            );
        }
    });
}

// function replaceSidePanel(rowData) {
//     const $panel = $("#dashboardSidePanel");

//     if (!$panel.length) return;

//     // Destroy the owl carousel if it exists
//     const $carousel = $("#carouselContainer");
//     if ($carousel.length && $carousel.data("owl.carousel")) {
//         $carousel.trigger("destroy.owl.carousel");
//     }

//     // Replace the panel content with row details
//     $panel.html(`
//         <div class="w-full h-full flex flex-col items-center justify-center gap-4 p-6">
//             <div class="w-[120px] h-[120px] rounded-full bg-[#2279a9] flex items-center justify-center text-white text-4xl font-bold shadow-lg">
//                 ${(rowData.salesman_name || '?').charAt(0).toUpperCase()}
//             </div>
//             <h2 class="text-2xl font-bold text-center">${rowData.salesman_name || 'N/A'}</h2>
//             <div class="w-full max-w-[300px] space-y-2 text-sm">
//                 <div class="flex justify-between border-b pb-1">
//                     <span class="font-semibold">Attendance</span>
//                     <span>${rowData.attendance ?? '—'}</span>
//                 </div>
//                 <div class="flex justify-between border-b pb-1">
//                     <span class="font-semibold">Target MCP</span>
//                     <span>${rowData.target_mcp ?? '—'}</span>
//                 </div>
//                 <div class="flex justify-between border-b pb-1">
//                     <span class="font-semibold">Productive</span>
//                     <span>${rowData.productive ?? '—'}</span>
//                 </div>
//                 <div class="flex justify-between border-b pb-1">
//                     <span class="font-semibold">Unproductive</span>
//                     <span>${rowData.unproductive ?? '—'}</span>
//                 </div>
//                 <div class="flex justify-between border-b pb-1">
//                     <span class="font-semibold">Strike Rate</span>
//                     <span>${rowData.strike_rate ?? '—'}</span>
//                 </div>
//                 <div class="flex justify-between border-b pb-1">
//                     <span class="font-semibold">Selling Hours</span>
//                     <span>${rowData.selling_hrs ?? '—'}</span>
//                 </div>
//                 <div class="flex justify-between">
//                     <span class="font-semibold">Sale</span>
//                     <span>${rowData.sale ?? '—'}</span>
//                 </div>
//             </div>
//             <button id="backToCarousel" class="mt-4 px-6 py-2 rounded-full bg-[#2279a9] text-white text-sm font-semibold hover:bg-[#1a5f85] transition-colors">
//                 ← Back to Carousel
//             </button>
//         </div>
//     `);

//     // Back button restores the carousel
//     $("#backToCarousel").on("click", function() {
//         restoreCarousel();
//     });
// }

// function restoreCarousel() {
//     const $panel = $("#dashboardSidePanel");
//     if (!$panel.length) return;

//     // Restore the original carousel HTML structure
//     $panel.html(`
//         <div class="flex w-full justify-center items-center">
//             <div class="w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] flex items-center justify-center pt-[30px] lg:pt-[80px]">
//                 <img src="" class="object-cover themeLogo" />
//             </div>
//         </div>
//         <div class="w-full max-w-[500px] lg:max-w-[2000px] mx-auto">
//             <div class="owl-carousel" id="carouselContainer"></div>
//         </div>
//     `);

//     // Re-trigger theme state to re-populate the carousel
//     if (typeof window.getActive === "function") {
//         window.getActive();
//     } else {
//         // Fallback: manually re-render from saved theme
//         const savedTheme = localStorage.getItem("savedTheme");
//         if (savedTheme) {
//             window.renderActive(JSON.parse(savedTheme));
//         }
//     }
// }

document.addEventListener('DOMContentLoaded', function() {
    getAllSalesman();
})


// Custom Search
$(document).on('input', '#customSearch', function () {
    $('#salesmanTable')
        .DataTable()
        .search(this.value)
        .draw();
});

$(document).on("focus", "#customSearch", function () {
    // $(this).addClass("outline-2 outline outline-[#0060df]");
    $(this).addClass("search-focus");
});

$(document).on("blur", "#customSearch", function () {
    // $(this).addClass("outline-2 outline outline-[#0060df]");
    $(this).removeClass("search-focus");
});

//for copy
$(document).on("click",".copyBtn", function(){
    $('#salesmanTable')
    .DataTable()
    .button('.buttons-copy')
    .trigger();
});

//for dropdown excel
$(document).on("click",".excelBtn", function(){
    $('#salesmanTable')
    .DataTable()
    .button('.buttons-excel')
    .trigger();
});

$(document).on("click",".csvBtn", function(){
    $('#salesmanTable')
    .DataTable()
    .button('.buttons-csv')
    .trigger();
});


//for print
$(document).on("click",".printBtn", function(){
    $('#salesmanTable')
    .DataTable()
    .button('.buttons-print')
    .trigger();
});

$(document).on("keyup", "#customSearch", function() {
    let value = $(this).val().toLowerCase();

    $("#otherReports li").each(function() {
        $(this).toggle(
            $(this).text().toLowerCase().includes(value)
        );
    });

     $("#actions li").each(function() {
        $(this).toggle(
            $(this).text().toLowerCase().includes(value)
        );
    });
});

console.log(document.getElementById('dsrSearch'));