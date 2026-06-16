import Api from "../helper/Api.js";

let array = [];
let carImg = [];
let CarouselOrder = [];
let DeleteCarouselImg = [];
let ImgArray = [];
let updateId;
//  let ImgPostion = [];

//for switch
$(document).on("change", ".flipswitch", function () {
    let toggle = this;

    let status = toggle.checked ? 1 : 0;

    toggle.checked = !toggle.checked;

    Swal.fire({
        title: "Are you sure?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Confirm",
    }).then((result) => {
        if (result.isConfirmed) {
            toggle.checked = !toggle.checked;

            let finalStatus = toggle.checked ? 1 : 0;

            Api.put({
                url: `/customize_theme/${$(toggle).data("id")}`,
                data: JSON.stringify({
                    is_active: finalStatus,
                }),
                onSuccess: () => {
                    Swal.fire({
                        title: "Updated",
                        icon: "success",
                    });
                    getAll();
                },
            });
        }
    });
});

//function for displaying
function getAll() {
    Api.get({
        url: "/customize_theme/getAll",
        onSuccess: (data) => {
            array = data;

            let activeTheme = array.find((item) => item.is_active);

            $("#table").html(`
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
    </div>
`);

            const $grid = $("#table .grid");

            data.forEach((item) => {
                let isActive = item.is_active ? "shine-pulse" : "bg-base-100";

                $grid.append(`
        <div id="themeCard"
            class="card bg-base-100  transition-all duration-300 ease-out cursor-pointer
                    hover:-translate-y-2
                    hover:shadow-2xl
                    hover:scale-105  shadow-sm border-4 border-solid ${isActive}">

            <div class="card-body">

                <!-- HEADER -->
                <div class="flex w-full justify-between items-center">

                    <h2 class="card-title">
                        ${item.theme_name}
                    </h2>

                    <label class="toggle theme-toggle text-base-content ${item.is_active ? "bg-green-500" : ""}">
                        <input type="checkbox"
                            data-id="${item.id}"
                            class="flipswitch"
                            ${item.is_active ? "checked" : ""}/>

                        <svg aria-label="disabled" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                        </svg>

                        <svg aria-label="enabled" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <g stroke-linejoin="round" stroke-linecap="round"
                                stroke-width="4" fill="none" stroke="currentColor">
                                <path d="M20 6 9 17l-5-5"></path>
                            </g>
                        </svg>
                    </label>

                </div>

                <!-- IMAGE -->
                <div class="flex justify-center items-center h-48 rounded-xl mt-2">
                    <img src="${item.logo?.[0]?.url || ""}"
                        class="max-h-48 max-w-full skeleton  object-contain">
                </div>

                <h2 class="card-title">
                    Company Name: ${item.company_name}
                </h2>

                <!-- COLORS -->
                <div class="flex justify-between w-full gap-2 mt-4 flex-wrap">

                    <div class="flex flex-col">
                        <h1>Primary</h1>
                        <div class="w-[30px] h-[30px] border" style="background:${item.primary_color}"></div>
                    </div>

                    <div class="flex flex-col">
                        <h1>Secondary</h1>
                        <div class="w-[30px] h-[30px] border" style="background:${item.secondary_color}"></div>
                    </div>

                    <div class="flex flex-col">
                        <h1>Accent</h1>
                        <div class="w-[30px] h-[30px] border" style="background:${item.accent_color}"></div>
                    </div>

                    <div class="flex flex-col">
                        <h1>BG</h1>
                        <div class="w-[30px] h-[30px] border" style="background:${item.background_color}"></div>
                    </div>

                </div>

                <!-- FONT INFO -->
                <div class="flex flex-col w-full mt-3">

                    <div>
                        <span class="text-gray-500 text-sm">Report Header:</span>
                        <div>${item.report_header? item.report_header : "NULL"}</div>
                    </div>

                    <div class="flex justify-between items-center mt-2">
                        <div>
                            <span class="text-gray-500 text-sm">Body Font:</span>
                            <div>${item.body_font}</div>
                        </div>

                        <div class="w-6 h-6 rounded border"
                            style="background:${item.body_color}"></div>
                    </div>

                    <div class="flex justify-between items-center mt-2">
                        <div>
                            <span class="text-gray-500 text-sm">Header Font:</span>
                            <div>${item.header_font}</div>
                        </div>

                        <div class="w-6 h-6 rounded border"
                            style="background:${item.header_color}"></div>
                    </div>

                </div>

                <!-- BUTTONS -->
                <div class="flex gap-2 mt-3">
                    <button class="bg-green-400 p-2 rounded-xl text-white"
                        data-id="${item.id}" id="updatebtn">
                        Edit
                    </button>

                    <button class="bg-red-500 p-2 text-white rounded-lg"
                        data-id="${item.id}" id="deletebtn"> Delete 
                    </button>
                </div>

            </div>
        </div>
    `);
            });
        },
    });
}

//function call for displaying
getAll();

//for delete
$(document).on("click", "#deletebtn", function () {
    let row = array.find((item) => {
        return item.id == $(this).data().id;
    });

    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            Api.delete({
                url: `/customize_theme/delete/${$(this).data("id")}`,
                onSuccess: (data) => {
                    $(this).closest("#themeCard").remove();
                },
            });
            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
            });
        }
    });
});

//for displaying the current data into the modal
$(document).on("click", "#updatebtn", function () {
    carouselSortable.option("disabled", false);
    let row = array.find((item) => {
        return item.id == $(this).data().id;
    });

    updateId = $(this).data().id;

    $("#CarouselError").text("").addClass("hidden");
    $("#logo-error").text("").addClass("hidden");

    $("#theme_name").val(row.theme_name);
    $("#company_name").val(row.company_name);
    $("#primary_color").val(row.primary_color);
    $("#secondary_color").val(row.secondary_color);
    $("#accent_color").val(row.accent_color);
    $("#background_color").val(row.background_color);
    $("#body_color").val(row.body_color);
    $("#header_color").val(row.header_color);
    $("#body_font").val(row.body_font);
    $("#header_font").val(row.header_font);
    $("#report_header").val(row.report_header);
    
    const logoUrl = row.logo[0].url;
    const filename = logoUrl.split("/").pop();

    $("#LogoImg").text("Current File " + filename);
    

    $("#executeSavebtn").hide();
    $("#executeEditbtn").show();
    $("#modalTitle").text("Update Theme");

    
    ImgArray = [];
    DeleteCarouselImg = [];
    CarouselOrder = [];
    $("#carouselImg").val("");

    ClearImgContainer();

    if (row.carouselImg && row.carouselImg.length > 0) {
        DisplayCarouselImg(row.carouselImg);
    }
    AddThemeModal.showModal();

    console.log(row,"daadf");
});

//for add
$(document).on("click", "#addbtn", function () {
    carouselSortable.option("disabled", true);

    $("#CarouselError").text("").addClass("hidden");
    $("#logo-error").text("").addClass("hidden");

    $("#theme_name").val("");
    $("#company_name").val("");
    $("#logo_id").val("");
    $("#primary_color").val(" #3b82f6");
    $("#secondary_color").val("#3b82f6");
    $("#accent_color").val(" #3b82f6");
    $("#background_color").val(" #3b82f6");
    $("#BodyFont_color").val(" #ffffff");
    $("#HeaderFont_color").val(" #000000");
    $("#body_font").val("Roboto");
    $("#header_font").val("Roboto");
    $("#report_header").val("");
    $("#carouselImg").val("");
    $("#executeSavebtn").show();
    $("#executeEditbtn").hide();
    $("#modalTitle").text("Add Theme");
    $("#LogoImg").html('<i class="fa-solid fa-upload"></i> Add Image');
    $("#addImg").html('<i class="fa-solid fa-upload"></i> Add Image');


    ClearImgContainer();
    AddThemeModal.showModal();
});

//for executing the save btn
$(document).on("click", "#executeSavebtn", function () {
    const logoFile = $("#logo_id")[0]?.files[0];
    const theme_name = $("#theme_name").val();
    const company_name = $("#company_name").val();

    // clear previous errors
    $("#CompanyName-error, #ThemeName-error, #logo-error").text("").addClass("hidden");

    // validate individually
    if (!theme_name) $("#ThemeName-error").text("This field is required").removeClass("hidden");
    if (!company_name) $("#CompanyName-error").text("This field is required").removeClass("hidden");
    if (!logoFile) $("#logo-error").text("This field is required").removeClass("hidden");

    if (!theme_name || !company_name || !logoFile) return;

    let form = new FormData();

    form.append("logo[]", logoFile);
    
    CarouselOrder = [];
    if (ImgArray.length > 0) {
        ImgArray.forEach((file, index) => {
            form.append("CarouselImgList[]", file);

            CarouselOrder.push({
                id: index,
                position: index + 1
            });
        });
    }
    
    form.append("carousel_order", JSON.stringify(CarouselOrder));

    form.append("json", JSON.stringify({
        theme_name,
        company_name,
        primary_color: $("#primary_color").val(),
        secondary_color: $("#secondary_color").val(),
        accent_color: $("#accent_color").val(),
        background_color: $("#background_color").val(),
        body_color: $("#body_color").val(),
        header_color: $("#header_color").val(),
        body_font: $("#body_font").val(),
        header_font: $("#header_font").val(),
        report_header: $("#report_header").val(),
    }));

    Api.post({
        url: `/customize_theme`,
        data: form,
        processData: false,
        contentType: false,
        onSuccess: () => {
            getAll();
            AddThemeModal.close();
        },
    });
});

//for updating tha card
$(document).on("click", "#executeEditbtn", function () {

    const logoFile = $("#logo_id")[0]?.files[0];

    const theme_name = $("#theme_name").val();
    const company_name = $("#company_name").val();

    $("#CompanyName-error, #ThemeName-error, #logo-error")
        .text("")
        .addClass("hidden");

    if (!theme_name) {
        $("#ThemeName-error").text("This field is required").removeClass("hidden");
    }

    if (!company_name) {
        $("#CompanyName-error").text("This field is required").removeClass("hidden");
    }

    if (!theme_name || !company_name) return;

    let form = new FormData();

    // logo optional on edit
    if (logoFile) {
        form.append("logo[]", logoFile);
    }
    
    CarouselOrder = [];

    ImgArray.forEach((file) => {
        if (!file) return;
        form.append("CarouselImgList[]", file);
    });

    document.querySelectorAll("#imgContainer .uploaderSort").forEach((el, index) => {
        CarouselOrder.push({
            type: el.dataset.type || "existing",
            id: el.dataset.id || null,
            temp_index: el.dataset.index || null,
            position: index + 1
        });
    });

    form.append("carousel_order", JSON.stringify(CarouselOrder));
    form.append("deleted_carousel_images", JSON.stringify(DeleteCarouselImg));

    form.append("json", JSON.stringify({
        theme_name,
        company_name,
        primary_color: $("#primary_color").val(),
        secondary_color: $("#secondary_color").val(),
        accent_color: $("#accent_color").val(),
        background_color: $("#background_color").val(),
        body_color: $("#body_color").val(),
        header_color: $("#header_color").val(),
        body_font: $("#body_font").val(),
        header_font: $("#header_font").val(),
        report_header: $("#report_header").val(),
    }));
    
    
    Api.post({
        url: `/customize_theme/update/${updateId}`,
        processData: false,
        contentType: false,
        headers: {
            "X-HTTP-Method-Override": "PUT",
            "X-CSRF-TOKEN": document.querySelector('meta[name="csrf-token"]').content,
        },
        data: form,

        onSuccess: () => {
            getAll();
            AddThemeModal.close();
        },
    });
});

$("#accent_color").on("input", function () {
    $("#accentColorHex").val($(this).val());
});

$("#primary_color").on("input", function () {
    $("#primaryColorHex").val($(this).val());
});

$("#secondary_color").on("input", function () {
    $("#secondaryColorHex").val($(this).val());
});

$("#background_color").on("input", function () {
    $("#backgroundColorHex").val($(this).val());
});

$("#BodyFont_color").on("input", function () {
    $("#BodyFontColorHex").val($(this).val());
});

$("#HeaderFont_color").on("input", function () {
    $("#HeaderFontColorHex").val($(this).val());
});


$("#logo_id").on("change", function () {
    const file = this.files[0];
    const allowedTypes = ["image/jpeg", "image/png", "image/webp"];

    if (!file) return;
    

    // Wrong file type
    if (!allowedTypes.includes(file.type)) {
        $("#logo-error")
            .text("Invalid file type. Only JPG, PNG, and WEBP are allowed.")
            .removeClass("hidden");

        $(this).val(""); 
        return;
    }

    // clear error
    $("#logo-error").text("").addClass("hidden");
});

function renderCarouselPreviews(files) {

    Array.from(files).forEach((file) => {

        ImgArray.push(file);

        const imgIndex = ImgArray.length - 1;

        const reader = new FileReader();

        reader.onload = function (e) {
            $("#imgContainer").append(`
                <div class="uploaderSort newCarouselImage"
                     data-type="new"
                     data-index="${imgIndex}">

                    <div class="card bg-base-100 border black h-[300px] w-[250px] ImgContent shadow-sm carouseltemp">

                        <div class="relative">
                            <button class="btn btn-square absolute z-10 rounded-xl hover:bg-red-500 text-black left-55 btn-sm DeleteCarousel"
                                    data-index="${imgIndex}">
                                X
                            </button>
                        </div>

                        <img src="${e.target.result}" class="w-full h-40 object-cover rounded">

                        <div class="w-full p-2 bg-gray-100">
                            <p class="text-sm text-black">File name: ${file.name}</p>
                        </div>

                    </div>
                </div>
            `);
            Filecount();
        };
        reader.readAsDataURL(file);
    });
 
}

// displaying Img when adding img
$("#carouselImg").on("change", function () {
    const allowedTypes = ["image/jpeg", "image/png", "image/webp"];

    const files = Array.from(this.files);

    const acceptedFiles = files.filter(
        file => allowedTypes.includes(file.type)
    );

    const rejectedFiles = files.filter(
        file => !allowedTypes.includes(file.type)
    );

    // for invalid files
    if (rejectedFiles.length > 0) {
        const names = rejectedFiles.map(file => file.name).join(", ");

        $("#CarouselError")
            .text(`Rejected files: ${names}. Only JPG, PNG, WEBP are allowed.`)
            .removeClass("hidden");
    } else {
        $("#CarouselError").text("").addClass("hidden");
    }

    if (acceptedFiles.length > 0) {
        renderCarouselPreviews(acceptedFiles);
    }
});

// Deleting carousel when add modal
$(document).on("click", ".DeleteCarousel", function (e) {
    e.preventDefault();
    e.stopPropagation();

    const targetIndex = Number($(this).attr("data-index"));

    ImgArray.splice(targetIndex, 1);
    $(this).closest(".uploaderSort").remove();
    reindexCarousel();
    Filecount();

});

$.ajax({
    url: "/fonts",
    type: "GET",
    success: function (fonts) {
        $("#header_font, #body_font").empty();

        $("#header_font, #body_font").append(
            "<option disabled selected>Pick a font</option>",
        );

        const Fonts = fonts.slice(0, 100);

        Fonts.forEach((font) => {
            $("#header_font").append(`
                <option value="${font.family}">${font.family}</option>
            `);
            $("#body_font").append(`
                <option value="${font.family}">${font.family}</option>
            `);
        });

        // Set defaults after options are loaded
        $("#header_font").val("Roboto");
        $("#body_font").val("Roboto");
    },
});

$("#header_font").on("change", function () {
    const font = $(this).val();

    $("#google-font-link").remove();

    $("head").append(`
        <link
            id="google-font-link"
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=${font.replace(/ /g, "+")}&display=swap"
        >
    `);

    $(".header-preview").css("font-family", `'${font}', sans-serif`);
});

$("#body_font").on("change", function () {
    const font = $(this).val();

    $("#google-font-link").remove();

    $("head").append(`
        <link
            id="google-font-link"
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=${font.replace(/ /g, "+")}&display=swap"
        >
    `);

    $(".body-preview").css("font-family", `'${font}', sans-serif`);
});

// displaying img when edit btn is click
function DisplayCarouselImg(images){
    $("#imgContainer").empty();
    
    images.forEach((img, index) => {
        const ImgPosition = getImagePosition(index);

        $("#imgContainer").append(`
            <div class="flex w-full justify-center">
                <div class="uploaderSort" data-type="existing" data-id="${img.url}">
                    <div class="card h-[250px] w-[250px] shadow-xl  transition-all duration-300 ease-out cursor-pointer
                    hover:-translate-y-2
                    hover:shadow-2xl
                    hover:scale-105">
                        <div class="relative">
                            <button class="btn btn-square btn-sm absolute z-10 rounded-xl hover:bg-red-500 text-black left-55 DeleteExistingCarousel" data-index="${index}">
                            X
                            </button>
                        </div>  
                     
                        <img src="${img.url}" class="w-full h-40 object-cover rounded skeleton"
                            onload="this.classList.remove('skeleton')"
                            onerror="this.classList.remove('skeleton')"
                        >
                        <div class="w-full flex justify-center p-2 bg-gray-100">
                            <p>Carousel Position: </p>
                            <div class="img-position ">${ImgPosition}</div>
                        </div>

                    </div>
                </div>
            </div>
        `);
    });
}

const carouselSortable = new Sortable(document.getElementById("imgContainer"), {
    animation: 150,
    disabled: true,

    onEnd() {
    CarouselOrder = [];

    const items = document.querySelectorAll("#imgContainer .uploaderSort");

    items.forEach((el, index) => {
        CarouselOrder.push({
        id: el.dataset.id,
        position: index + 1,
        });

       
        const position = el.closest(".flex").querySelector(".img-position");
        if (position) position.textContent = index + 1;
    });
}

});

// Deleting on edit
$(document).on("click", ".DeleteExistingCarousel", function (e) {
    e.preventDefault();
    e.stopPropagation();

    const delete_id = $(this).closest(".uploaderSort").data("id");

    DeleteCarouselImg.push(delete_id);

    $(this).closest(".flex").remove();

    renumberPositions();
});

function ClearImgContainer(){
    $("#imgContainer").empty();
    $("#carouselImg").val("");

    ImgArray = [];
    CarouselOrder = [];
    DeleteCarouselImg = [];

    $("#addImg").html('<i class="fa-solid fa-upload"></i> Add Image');
}

function getImagePosition(index) {
    return index + 1;
}

function renumberPositions() {
    document.querySelectorAll("#imgContainer .uploaderSort").forEach((el, i) => {
        const parentRow = el.closest(".flex.w-full.justify-between");
        const posEl = parentRow ? parentRow.querySelector(".img-position") : null;
        if (posEl) posEl.textContent = i + 1;
    });

    CarouselOrder = [];
    document.querySelectorAll("#imgContainer .uploaderSort").forEach((el, index) => {
        CarouselOrder.push({
            id: el.dataset.id,
            position: index + 1,
        });
    });

    Filecount(); 
}

function reindexCarousel() {
    $(".uploaderSort").each(function (i) {
        $(this)
            .find(".DeleteCarousel")
            .attr("data-index", i)
            .data("index", i);
    });
}

function Filecount() {
    const count = document.querySelectorAll('#imgContainer .uploaderSort[data-type="new"]').length;

    if (count > 0) {
        $("#addImg").text(`${count} files selected`);
    } else {
        $("#addImg").html('<i class="fa-solid fa-upload"></i> Add Image');
    }
}