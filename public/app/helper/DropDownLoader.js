import Api from "../helper/Api.js";

//export function loadDropdown(config) {
export default class loadDropdown {
    
    static loadDropdown(config) {
        Api.get({
        url: config.url,
        data: config.filters,

        onSuccess: (data) => {
            console.log("daaw", data);
            let html = "";

            html += `
                    <div class="flex flex-col">
                        <input class="DropdownSearchBar border p-2 w-[280px] h-[30px] rounded-lg" type="search" required placeholder="Search" />
                        <span id="NoResult" class="hidden">
                            No Salesman found
                        </span>
                    </div>
                    `;
            $.each(data, function (index, item) {
                html += `
                    <li>
                        <a href="#" class="salesman-item"
                           data-salesman="${item.salesman_name}">
                            ${item.salesman_name}
                        </a>
                    </li>
                `;
            });

            $("#dcrItems").html(html);
            },
        });
    }

    
}

$(document).on("input", ".DropdownSearchBar", function(){
    const keyword = this.value.toLowerCase().trim();
    let found = false;

    // Get the dropdown (<ul>) that contains this search bar
    const $dropdown = $(this).closest("ul");

    // Loop through every <li> in that dropdown
    $dropdown.find("li").each(function () {

        const text = $(this).text().toLowerCase();

        const match = text.includes(keyword);
         $("#NoResult").addClass("hidden");
        $(this).prop("hidden", !match);

        if (match) {
            found = true;
        }
        else if (!found){
             $("#NoResult").removeClass("hidden");
        }
        console.log();
    });

    console.log(found);
});