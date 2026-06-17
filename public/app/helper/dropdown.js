export default class Dropdown {
    static search(id, list_id){
        $(document).on('input',id, function(){
            let search = $(this).val().toLowerCase();

            let hasMatch = false;

            document.querySelectorAll(`${list_id} li`).forEach(li => {
                const text = li.textContent.toLowerCase();
                const match = text.includes(search);

                li.hidden = !match;

                if (match) {
                    hasMatch = true;
                }
            });

                if (!hasMatch) {
                    $(".noRec").prop("hidden", false);
                } else {
                    $(".noRec").prop("hidden", true);
                }
        });
    }
}