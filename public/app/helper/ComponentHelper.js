import Api from "./Api.js";

//export function loadDropdown(config) {
export default class ComponentHelper {
    static dropdown() {
        return {
            load: (data) => {
                console.log("daaw", data);
                let html = "";

                html += `
                    <div class="flex flex-col pt-5 px-2">
                        <input id="dropdown_search" class="DropdownSearchBar border p-2 w-[250px] h-[30px] rounded-lg" type="search" required placeholder="Search" />
                        <span id="NoResult" class="hidden">
                           ${data.noDataText ?? "No Match Result"}
                        </span>
                    </div>
                    `;
                $.each(data.json, function (index, item) {
                    html += `
                        <li>
                            <a href="#"
                            id= "dropdown_Item"
                            class="dropdown-item"
                            data-value="${item[data.displayField]}"
                            data-id="${item[data.dataField]}">
                                ${item[data.displayField]}
                            </a>
                        </li>
                    `;
                });

                // $(".Load_DropDown_Items").html(html);
                $("#" + data.dropdownId).html(html);

                this.dropdown().search(data);
            },

            loadByApi: (config) => {
                console.log("fea", config);
                Api.get({
                    url: config.url,

                    onSuccess: (data) => {
                        this.dropdown().load({
                            ...config,
                            json: data,
                        });
                    },
                });
            },

            search: (data) => {
                $(document).on("input","#" + data.dropdownId + " #dropdown_search",
                    function () {
                        let found = false;
                        let keyword = $(this).val();

                        const $dropdown = $(this).closest("ul");

                        // Loop through every <li> in that dropdown
                        $dropdown.find("li").each(function () {
                            const text = $(this).text().toLowerCase();

                            const match = text.includes(keyword);
                            $("#NoResult").addClass("hidden");
                            $(this).prop("hidden", !match);

                            if (match) {
                                found = true;
                            } else if (!found) {
                                $("#NoResult").removeClass("hidden");
                            }
                            console.log();
                        });

                        console.log(found);
                    },
                );
            },
            clear: () => {},
            loading: () => {},
        };
    }

    static select() {
        return {

            load: (data) => {
                let html = "";

                html += `
                    <div class="flex flex-col">
                        <input id="dropdown_search" class="DropdownSearchBar border p-2 w-[280px] h-[30px] rounded-lg" type="search" required placeholder="Search" />
                        <span id="NoResult" class="hidden">
                           ${data.noDataText ?? "No Match Result"}
                        </span>
                    </div>
                `;
                
                $.each(data.data, function (index, item) {
                    html += `
                    <option class="salesman-item"  data-salesman="${item.salesman_name}">
                            ${item.salesman_name}
                    </option>
                `;
                });

                $("#" + data.selectID).html(html);

                this.dropdown().search(data);
            },

            loadByApi: (config) => {
                Api.get({
                    url: config.url,

                    onSuccess: (data) => {
                        this.select().load({
                            selectID : config.selectID,
                            data,
                        });
                    }
                });
            },
            
            search: (data) => {

            },

        }
    }
}

// $(document).on("input", ".DropdownSearchBar", function(){
//     const keyword = this.value.toLowerCase().trim();
//     let found = false;

//     // Get the dropdown (<ul>) that contains this search bar
//     const $dropdown = $(this).closest("ul");

//     // Loop through every <li> in that dropdown
//     $dropdown.find("li").each(function () {

//         const text = $(this).text().toLowerCase();

//         const match = text.includes(keyword);
//          $("#NoResult").addClass("hidden");
//         $(this).prop("hidden", !match);

//         if (match) {
//             found = true;
//         }
//         else if (!found){
//              $("#NoResult").removeClass("hidden");
//         }
//         console.log();
//     });

//     console.log(found);
// });
