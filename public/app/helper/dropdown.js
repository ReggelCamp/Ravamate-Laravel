export default class Dropdown {
    static search(id, list_id){
        $(document).on('input',id, function(){
            let search = $(this).val().toLowerCase();

            document.querySelectorAll(`${ list_id } li`).forEach(li => {
                const text = li.textContent.toLowerCase();
                li.hidden = !text.includes(search);
            });
        });
    }
}