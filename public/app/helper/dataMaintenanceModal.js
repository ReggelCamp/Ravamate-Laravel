$(document).on("click", ".execute-sync-btn", function (){
     let targetUrl = null;

    $('.execute-sync-btn').on('click', function () {
        targetUrl = $(this).data('url');
        const label = $(this).data('label');

       $('#syncModalTitle').html(`
            <div class="flex items-center justify-between
                border-b
                px-6 py-4
                text-gray-300
                -mx-6">
                <span class="font-semibold text-black">Service Type</span>

                <form method="dialog">
                    <button type="submit">
                        <i class="text-black fa-regular fa-circle-xmark text-2xl"></i>
                    </button>
                </form>
            </div>
`);
        $(`#syncModalBody`).html(`
            <div class="flex w-full justify-between px-10 py-5 ">
                <div class="w-[150px] h-[150px] shine-bgBtn text-black! hover:text-white! border flex flex-col rounded-xl items-center justify-center"><i class="fa-solid fa-cube text-5xl"></i>
                    <span>Frozen Products </span>
                </div>
                <div class="w-[150px] h-[150px] shine-bgBtn text-black! hover:text-white! border flex flex-col rounded-xl items-center justify-center"><i class="fa-solid fa-cubes text-5xl"></i>
                    <span>Grocery Products </span>
                </div>
            </div> 
        `);

        document.getElementById('syncConfirmModal').showModal();
    });

    $('#syncConfirmBtn').on('click', function () {
        if (targetUrl) {
            window.location.href = targetUrl;
        }
    });
});