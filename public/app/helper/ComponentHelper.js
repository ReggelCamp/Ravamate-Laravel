import Api from "./Api.js";

//export function loadDropdown(config) {
export default class ComponentHelper {
    static dropdown() {
        return {
            load: (data) => {
                console.log("dropdown load", data);
                let html = "";

                html += `
                    <div class="flex flex-col pb-2 pt-5 px-2">
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
                            class="dropdown-item sheenFilterBtn"
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
                    data: config.data,

                    onSuccess: (data) => {
                        this.dropdown().load({
                            ...config,
                            json: data,
                        });
                        if (config.onSuccess) config.onSuccess(data);
                    },
                    onError: config.onError,
                });
            },

            search: (data) => {
                $(document).on(
                    "input",
                    "#" + data.dropdownId + " #dropdown_search",
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

            LoadDropdownItems(config) {
                console.log("fea", config);

                let html = "";

                $.each(config.items, function (index, item) {
                    if (item.modal) {
                        html += `
                            <li>
                                <a href="#"
                                    class="dropdown-item h-[30px] flex items-center whitespace-nowrap"
                                    data-value="${item.data}"
                                    data-modal="${item.modal}">
                                    ${item.title}
                                </a>
                            </li>
                        `;
                    } else {
                        html += `
                            <li>
                                <a href="${item.url}"
                                    class="dropdown-item h-[30px] flex items-center whitespace-nowrap"
                                    data-value="${item.data}">
                                    ${item.title}
                                </a>
                            </li>
                        `;
                    }
                });

                $(config.id).html(html);
            },
        };
    }

    // for Select
    static select() {
        return {
            load: (data) => {
                console.log("select load");
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
                            selectID: config.selectID,
                            data,
                        });
                    },
                });
            },

            search: (data) => {},

            LoadSelectItems(config) {
                console.log("fea", config);

                let html = "";

                html += `
                    <div class="flex flex-col pb-2 pt-5 px-2">
                        <input id="dropdown_search" class="DropdownSearchBar border p-2 w-[250px] h-[30px] rounded-lg" type="search" required placeholder="Search" />
                        <span id="NoResult" class="hidden">
                           ${config.noDataText ?? "No Match Result"}
                        </span>
                    </div>
                    `;

                $.each(config.items, function (index, item) {
                   if (item.modal) {
                        html += `
                            <option data-value="${item.data}" 
                                    onclick="openModal('${item.modal}')">
                                ${item.title}
                            </option>
                        `;
                    } else {
                        html += `
                            <option data-value="${item.data}" 
                                    onclick="window.location.href='${item.url}'">
                                ${item.title}
                            </option>
                        `;
                    }
                });

                $(config.id).html(html);
            },
        };
    }
}
