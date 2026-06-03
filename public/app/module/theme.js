import Api from "../helper/Api.js";

let array = [];
let carImg = [];
let updateId;

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
                <div class="flex justify-center w-full gap-2 mb-4">
                    <button id="prevBtn" class="btn bg-amber-100 text-black btn-sm btn-outline">
                        ❮ Prev
                    </button>

                    <button id="nextBtn" class="btn btn-sm btn-outline bg-amber-100 text-black">
                        Next ❯
                    </button>
                </div>

                <div class="carousel w-full space-x-4 overflow-x-auto">
                </div>
            `);

            const $carousel = $("#table .carousel");

            data.forEach((item) => {

                $("#nextBtn").on("click", function () {
                    $carousel.animate({
                        scrollLeft: $carousel.scrollLeft() + 370
                    }, 300);
                });

                $("#prevBtn").on("click", function () {
                    $carousel.animate({
                        scrollLeft: $carousel.scrollLeft() - 370
                    }, 300);
                });

                let isActive = item.is_active ? " shine-pulse " : "bg-base-100";

                $carousel.append(`
        <div class="carousel-item">
            <div id="themeCard"
                class="card bg-base-100 w-[350px] h-[600px] shadow-sm border-4 border-solid ${isActive}">

                <div class="card-body">

                    <!-- HEADER -->
                    <div class="flex w-full justify-between items-center">

                        <h2 class="card-title">
                            ${item.theme_name}
                        </h2>

                        <label class="toggle theme-toggle text-base-content ${item.is_active ? "bg-green-500 " : ""}">
                            <input type="checkbox"
                                data-id="${item.id}"
                                class="flipswitch"
                                id="flipswitch"
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
                    <div class="flex justify-center items-center h-48 bg-base-200 rounded-xl mt-2">
                        <img src="${item.logo[0]?.url}"
                            class="max-h-40 max-w-full object-contain">
                    </div>

                    <h2 class="card-title">
                        Company Name: ${item.company_name}
                    </h2>

                    <!-- COLORS -->
                    <div class="flex justify-start w-full gap-5 mt-4">

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
                            <div>${item.report_header}</div>
                        </div>

                        <div class="flex justify-between items-center mt-2">
                            <div>
                                <span class="text-gray-500 text-sm">Body Font:</span>
                                <div>${item.body_font}</div>
                            </div>

                            <div class="flex items-center gap-2">
                                <div class="w-6 h-6 rounded border"
                                    style="background:${item.body_color}"></div>
                            </div>
                        </div>

                        <div class="flex justify-between items-center mt-2">
                            <div>
                                <span class="text-gray-500 text-sm">Header Font:</span>
                                <div>${item.header_font}</div>
                            </div>

                            <div class="flex items-center gap-2">
                                <div class="w-6 h-6 rounded border"
                                    style="background:${item.header_color}"></div>
                            </div>
                        </div>

                    </div>

                    <!-- BUTTONS -->
                    <div class="flex gap-2">
                        <button class="bg-green-400 p-2 rounded-xl text-white"
                            data-id="${item.id}" id="updatebtn">
                            Edit
                        </button>

                        <button class="bg-red-500 p-2 text-white rounded-lg"
                            data-id="${item.id}" id="deletebtn">
                            Delete
                        </button>
                    </div>

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

//for displaying the current data into the card
$(document).on("click", "#updatebtn", function () {
    let row = array.find((item) => {
        return item.id == $(this).data().id;
    });

    updateId = $(this).data().id;

    $("#theme_name").val(row.theme_name);
    $("#primary_color").val(row.primary_color);
    $("#secondary_colorr").val(row.secondary_color);
    $("#accent_colorr").val(row.accent_color);
    $("#background_color").val(row.background_color);
    $("#body_color").val(row.body_color);
    $("#font_color").val(row.font_color);
    $("#body_font").val(row.body_font);
    $("#header_font").val(row.header_font);
    $("#report_header").val(row.report_header);

    $("#executeSavebtn").hide();
    $("#executeEditbtn").show();
    $("#modalTitle").text("Update Theme");
    AddThemeModal.showModal();
});

//for add
$(document).on("click", "#addbtn", function () {
    $("#theme_name").val("");
    $("#primary_color").val(" #3b82f6");
    $("#secondary_color").val("#3b82f6");
    $("#accent_color").val(" #3b82f6");
    $("#background_color").val(" #3b82f6");
    $("#body_font").val("");
    $("#header_font").val("");
    $("#report_header").val("");

    $("#executeSavebtn").show();
    $("#executeEditbtn").hide();
    $("#modalTitle").text("Add Theme");

    AddThemeModal.showModal();
});

//for executing the save btn
$(document).on("click", "#executeSavebtn", function () {
    let form = new FormData();

    // let uploaded_img = $("#carouselImg1")[0].files;
    // let uploaded_img = $("#carouselImg2")[0].files;
    // let uploaded_img = $("#carouselImg3")[0].files;

    // let carousel_img = [];

    // for (let i = 0; i < uploaded_img.length; i++) {

    //     carousel_img.push(uploaded_img[i]);

    //     form.append("carouselName[]", uploaded_img[i]);

    //    console.log($("#carouselImg")[0].files);
    //    console.log($("#carouselImg")[0].files.length);
    // }

    form.append("carouselImg1[]", $("#carouselImg1")[0].files[0]);
    form.append("carouselImg2[]", $("#carouselImg2")[0].files[0]);
    form.append("carouselImg3[]", $("#carouselImg3")[0].files[0]);
    form.append("logo[]", $("#logo_id")[0].files[0]);
    form.append(
        "json",
        JSON.stringify({
            theme_name: $("#theme_name").val(),
            company_name: $("#company_name").val(),
            primary_color: $("#primary_color").val(),
            secondary_color: $("#secondary_color").val(),
            accent_color: $("#accent_color").val(),
            background_color: $("#background_color").val(),
            body_color: $("#body_color").val(),
            header_color: $("#header_color").val(),
            body_font: $("#body_font").val(),
            header_font: $("#header_font").val(),
            report_header: $("#report_header").val(),
        }),
    );

    Api.post({
        url: `/customize_theme`,
        data: form,
        processData: false,
        contentType: false,
        onSuccess: (data) => {
            getAll();
            AddThemeModal.close();
        },
        // on422: data => {
        //     console.log(data.responseJSON.message);
        // }
    });
});

//for updating tha card
$(document).on("click", "#executeEditbtn", function () {
    let form = new FormData();

    form.append("logo[]", $("#logo_id")[0].files[0]);
    form.append("carouselImg1[]", $("#carouselImg1")[0].files[0]);
    form.append("carouselImg2[]", $("#carouselImg2")[0].files[0]);
    form.append("carouselImg3[]", $("#carouselImg3")[0].files[0]);

    form.append(
        "json",
        JSON.stringify({
            theme_name: $("#theme_name").val(),
            company_name: $("#company_name").val(),
            primary_color: $("#primary_color").val(),
            secondary_color: $("#secondary_color").val(),
            accent_color: $("#accent_color").val(),
            background_color: $("#background_color").val(),
            body_color: $("#body_color").val(),
            header_color: $("#header_color").val(),
            body_font: $("#body_font").val(),
            header_font: $("#header_font").val(),
            report_header: $("#report_header").val(),
        }),
    );

    Api.post({
        url: `/customize_theme/update/${updateId}`,
        processData: false, // IMPORTANT
        contentType: false, // IMPORTANT
        headers: {
            "X-HTTP-Method-Override": "PUT",
            "X-CSRF-TOKEN": document.querySelector('meta[name="csrf-token"]')
                .content,
        },
        data: form,

        onSuccess: (data) => {
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

$("#logo_id").on("change", function () {
    const file = this.files[0];
    const allowedTypes = ["image/jpeg", "image/png", "image/webp"];

    if (!file) return;

    // Wrong file type
    if (!allowedTypes.includes(file.type)) {
        $("#logo-error")
            .text("Invalid file type. Only JPG, PNG, and WEBP are allowed.")
            .removeClass("hidden");

        $(this).val(""); // clear the input
        return;
    }

    // Optional: file size check
    if (file.size > maxSize) {
        $("#logo-error")
            .text("File is too large. Maximum size is 2MB.")
            .removeClass("hidden");

        $(this).val(""); // clear the input
        return;
    }

    // All good — clear error
    $("#logo-error").text("").addClass("hidden");
});

// $("#addImg").on("click", function(){
//     let html = `
//          <div class="flex w-full gap-0.5 h-full pt-5">

//                 <input type="file" class="file-input" id="carouselImg" name="carouselName" />
//                 <input type="file" class="file-input" id="carouselImg" name="carouselName" />
//                 <input type="file" class="file-input" id="carouselImg" name="carouselName" />

//             <button class = "btn" >
//                 Remove
//             </button>
//         </div>
//     `
//     $("#imgContainer").append(html);
// });

$.ajax({
    url: "/fonts",
    type: "GET",
    success: function (fonts) {
        $("#header_font","#body_font").empty();

        $("#header_font", "#body_font").append(
            "<option disabled selected>Pick a font</option>",
        );

        const Fonts = fonts.slice(0, 100);

        Fonts.forEach((font) => {
            $("#header_font").append(`
        <option value="${font.family}">
            ${font.family}
        </option>
        `);
            $("#body_font").append(`
                <option value="${font.family}">
                    ${font.family}
                </option>
            `);
        });

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
