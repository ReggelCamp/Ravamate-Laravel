import Api from "../helper/Api.js";
import getActive from "../helper/theme_state.js";
//import { getActivityLogs } from "./activityLog.js";

let array = [];
let carImg = [];
let CarouselOrder = [];
let DeleteCarouselImg = [];
let ImgArray = [];
let updateId;
let headerTomSelect = null;
let bodyTomSelect = null;
//let AcceptedFile = [];
let originalTheme = null;

let ImgFileCount = 0;

let $logs = [];
//let changes = 0;

//for switch
$(document).on("change", ".flipswitch", function () {
    let toggle = this;

    let status = toggle.checked ? 1 : 0;

    toggle.checked = !toggle.checked;

    if (status === 0) {
        Swal.fire({
            title: "A theme must remain active",
            icon: "warning",
        });

        return;
    }

    Swal.fire({
        title: "Activate this theme?",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Confirm",
    }).then((result) => {
        if (result.isConfirmed) {
            toggle.checked = true;

            Api.put({
                url: `/customize_theme/${$(toggle).data("id")}`,
                data: JSON.stringify({
                    is_active: 1,
                }),
                onSuccess: () => {
                    Swal.fire({
                        title: "Updated",
                        icon: "success",
                    });

                    getAll();
                    //window.getActive();
                    getActive();
                    localStorage.setItem("themeUpdated", Date.now());
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

            const activeTheme = array.find(item => item.is_active);
            const defaultTheme = array[0]?.id;

            // Theme to display as checked
            const checkedThemeId = activeTheme ? activeTheme.id : defaultTheme;
            
             if (array.length === 0) {
                $("#table").html(`
                    <div class="flex flex-col w-full h-full justify-center items-center">
                        <span class="text-gray-300 text-[100px]">Empty Theme</span>
                        <button class="bg-[#366EFB] w-fit p-5 btn rounded-[8px] text-white" id='addbtn'>
                            <span class="hidden md:inline">Create new</span>
                            <i class="fa-solid fa-plus"></i>
                        </button>
                    </div>
                `);
                return;
            }

            $("#table").html(`
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 w-full overflow-visible p-4 "></div>
            `);

            const $grid = $("#table .grid");

            data.forEach((item) => {
                const isChecked = item.id === checkedThemeId;
                let isActive = isChecked
                    ? "bg-blue-50 border-[4px] border-[#CFDFFF]"
                    : "bg-base-100 border border-base-300";
                const isDefaultTheme = item.id === defaultTheme;
                console.log("plpl",item);
                $grid.append(`
                    <div id="themeCard"
                        class="card bg-base-100 shadow-xl  transition-all 
                            hover:-translate-y-2
                            hover:shadow-2xl
                            hover:scale-105 h-[550px] w-[307px] border ${isActive}">

                        <div class="card-body p-0 gap-0">

                            <!-- HEADER -->
                            <div class="flex w-full justify-between p-[16px] items-center h-[56px]">
                                 <label class=" text-base-content switch ${item.is_active}">
                                    <input
                                        type="checkbox"
                                        data-id="${item.id}"
                                        class="flipswitch"
                                        ${isChecked ? "checked" : ""}
                                    />
                                    <span class="slider"></span>
                                </label>

                                <h2 class=" text-[20px] font-medium">
                                    ${item.theme_name}
                                </h2>

                                <span class="relative inline-block w-[24px] h-[24px] text-[#C1C3C7]">
                                    <i class="text-3xl ti ti-info-circle tooltip-info" data-id="${item.id}"></i>
                                    <div class="tooltip-box hidden absolute z-20 rounded-[10px] top-0 right-full mr-0.5 bg-[#FFFFFF] shadow-xl border border-[#C1C3C7] rounded-2xl p-4 w-[290px]"></div>
                                </span>

                            </div>

                            <!-- IMAGE -->
                            <div class="flex justify-center items-center h-48 bg-[#E3E5E8] w-full">
                                <img
                                    src="${item.logo?.[0]?.url ? item.logo[0].url + "?t=" + Date.now() : ""}"
                                    class="max-w-[150px] max-h-[150px] object-contain overflow-visible skeleton"
                                    onload="this.classList.remove('skeleton')"
                                    onerror="this.classList.remove('skeleton')">
                            </div>

                            <div class="flex flex-col w-full p-[16px] gap-[18px]">

                            <!-- Brand -->
                                <div class="flex w-full  m-0 gap-[8px] h-full  flex-col ">
                                    <div class="flex w-full justify-between">
                                        <span class=" custom-tooltip tooltip w-fit leading-none  font-bold  text-[20px]" data-tip="Company Name">
                                            ${item.company_name}
                                        </span>
                                        ${
                                            isDefaultTheme
                                                ? `
                                            <h2 class="text-[20px] font-medium">
                                                <span class="text-xs text-blue-600">(Default)</span>
                                            </h2>
                                        `
                                                : ""
                                        }
                                    </div>

                                    <div>
                                        <div class="text-[#444A51] custom-tooltip tooltip  text-[16px] font-normal" data-tip="Site">${item.site_name ? item.site_name : "NULL"}</div>
                                    </div>
                                </div>

                                <!-- COLORS -->
                                <div class="flex flex-col gap-[8px] w-full h-full ">
                                    <h1 class="text-[16px] text-[#9599A1] font-normal">COLOR PALETTE</h1>
                                    <div class="flex w-full gap-[13px] ">

                                        <div class="w-[35px] h-[35px] rounded-[4px] ${item.primary_color?.toLowerCase() === "#ffffff" ? "border border-[#E5E5E7]" : ""} tooltip custom-tooltip"
                                            data-tip="Primary Color"
                                            style="background:${item.primary_color}">
                                        </div>
                                        
                                        <div class="w-[35px] h-[35px] rounded-[4px] ${item.secondary_color?.toLowerCase() === "#ffffff" ? "border border-[#E5E5E7]" : ""} tooltip custom-tooltip"
                                            data-tip="Secondary Color"
                                            style="background:${item.secondary_color}">
                                        </div>

                                        <div class="w-[35px] h-[35px] rounded-[4px] ${item.accent_color?.toLowerCase() === "#ffffff" ? "border border-[#E5E5E7]" : ""} tooltip custom-tooltip"
                                            data-tip="Accent Color"
                                            style="background:${item.accent_color}">
                                        </div>

                                        <div class="w-[35px] h-[35px] rounded-[4px] ${item.background_color?.toLowerCase() === "#ffffff" ? "border border-[#E5E5E7]" : ""} tooltip custom-tooltip"
                                            data-tip="Background Color"
                                            style="background:${item.background_color}">
                                        </div>

                                    </div>
                                </div>

                            <!-- FONT INFO -->
                            <div class="flex gap-[15px] w-full h-full">

                                <div class="flex w-full h-full justify-between items-center ">
                                    <div class="gap-[8px] flex flex-col ">
                                        <span class="text-[#9599A1] font-normal text-[16px]">HEADER FONT</span>
                                        <div class="text-[12px]" font-normal>${item.header_font}</div>
                                    </div>
                                </div>

                                <div class="flex w-full   justify-between items-center ">
                                    <div class="gap-[8px] flex flex-col" >
                                        <span class="text-[#9599A1] font-normal text-[16px]">BODY FONT</span>
                                        <div class="text-[12px]" font-normal>${item.body_font}</div>
                                    </div>
                                </div>

                            </div>

                            <!-- BUTTONS -->
                            <div class="flex w-full items-center justify-between gap-[12px]">
                                <button class="bg-[#18B173] w-full text-[14px] pt-[8px] pr-[20px] pb-[8px] pl-[20px] gap-[6px] rounded-[8px] h-[40px] text-white cursor-pointer"
                                    data-id="${item.id}" id="updatebtn"> <i class="fa-solid fa-pen-to-square"></i>
                                    Edit
                                </button>

                                <button class="bg-[#FDE3E3] p-[8px] items-center justify-center w-[40px] h-[40px] text-[#B92123] rounded-[8px] cursor-pointer ${isDefaultTheme ? "hidden" : "flex justify-center"}
                                    ${item.is_active ? "hidden" : "flex justify-center"}"
                                    data-id="${item.id}" id="deletebtn"> <i class="fa-regular fa-trash-can"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                `);
            });
            // console.log("aaa",array);
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
        if (result.isConfirmed) {
            Api.delete({
                url: `/customize_theme/delete/${$(this).data("id")}`,
                onSuccess: (data) => {
                    getAll();
                    getActive();
                    localStorage.setItem("themeUpdated", Date.now());
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

    originalTheme = structuredClone(row);

    const logoUrl = row.logo[0].url;
    const filename = logoUrl.split("/").pop();
    updateId = $(this).data().id;

    $("#logo_id").val("");

    $("#CarouselError").text("").addClass("hidden");
    $("#logo-error").text("").addClass("hidden");
    $("#CompanyName-error").text("").addClass("hidden");
    $("#ThemeName-error").text("").addClass("hidden");
    $("#SiteName-error").text("").addClass("hidden");

    $("#theme_name").val(row.theme_name);
    $("#company_name").val(row.company_name);

    // $("#primary_color").val(row.primary_color);
    // $("#secondary_color").val(row.secondary_color);
    // $("#accent_color").val(row.accent_color);

    updateColorPicker(
        "#primary_color",
        "#primaryColorWrapper",
        "#primaryColorHex",
        row.primary_color,
    );

    updateColorPicker(
        "#secondary_color",
        "#secondaryColorWrapper",
        "#secondaryColorHex",
        row.secondary_color,
    );

    updateColorPicker(
        "#accent_color",
        "#accentColorWrapper",
        "#accentColorHex",
        row.accent_color,
    );

    updateColorPicker(
        "#background_color",
        "#backgroundColorWrapper",
        "#backgroundColorHex",
        row.background_color,
    );

    bodyTomSelect.setValue(row.body_font);
    headerTomSelect.setValue(row.header_font);
    $("#body_font").val(row.body_font);
    $("#header_font").val(row.header_font);
    $("#site_name").val(row.site_name);

    console.log("dasd", row);
    console.log("dd", filename);
    console.log("dasded", row.updated_at);

    //$("#LogoImg").text("Current File " + filename);

    $("#executeSavebtn").hide();
    $("#executeEditbtn").show();
    // $("#modalTitle").text("Update Theme");
    $("#modalTitle").html(`
        <i class="fa-solid fa-pen-to-square"></i> Update Theme
        `);

    ClearImgContainer();
    //DisplayLogoImg(row.logo[0]);
    DisplayLogoImg(logoUrl, filename);

    if (row.carouselImg && row.carouselImg.length > 0) {
        DisplayCarouselImg(row.carouselImg);
    }
    AddThemeModal.showModal();
    //localStorage.setItem("themeUpdated", Date.now());
    localStorage.setItem("activityLogsUpdated", Date.now());
});

//for add
$(document).on("click", "#addbtn", function () {
    originalTheme = null; 

    carouselSortable.option("disabled", true);

    $("#CarouselError").text("").addClass("hidden");
    $("#logo-error").text("").addClass("hidden");
    $("#CompanyName-error").text("").addClass("hidden");
    $("#ThemeName-error").text("").addClass("hidden");
    //$("#SiteName-error").text("").addClass("hidden");

    $("#theme_name").val("");
    $("#company_name").val("");
    $("#logo_id").val("");
    // $("#primary_color").val("#3b82f6");

    updateColorPicker(
        "#primary_color",
        "#primaryColorWrapper",
        "#primaryColorHex",
        "#3b82f6",
    );
    updateColorPicker(
        "#secondary_color",
        "#secondaryColorWrapper",
        "#secondaryColorHex",
        "#3b82f6",
    );
    updateColorPicker(
        "#accent_color",
        "#accentColorWrapper",
        "#accentColorHex",
        "#3b82f6",
    );
    updateColorPicker(
        "#background_color",
        "#backgroundColorWrapper",
        "#backgroundColorHex",
        "#3b82f6",
    );

    $("#secondary_color").val("#3b82f6");
    $("#accent_color").val("#3b82f6");
    $("#background_color").val("#3b82f6");
    $("#BodyFont_color").val("#ffffff");
    $("#HeaderFont_color").val("#000000");
    bodyTomSelect.setValue("Roboto");
    headerTomSelect.setValue("Roboto");
    $("#site_name").val("");
    $("#carouselImg").val("");
    $("#executeSavebtn").show();
    $("#executeEditbtn").hide();
    $("#modalTitle").html(`
        <i class="fa-solid fa-pen-to-square"></i>
        Add Theme
    `);

    $("#LogoImg").html(`
        <div class="flex flex-col gap-[12px]">
            <span class="font-semibold border bg-[#CFDFFF] text-[#366EFB] text-md p-2 rounded-lg">
                Upload Logo <i class="fa-solid fa-upload ml-2"></i>
            </span>
            <span class="text-[#9599A1]">
                SVG, PNG, or JPEG (max 5MB)
            </span>
        </div>
    `);

    ClearImgContainer();

    $("#addImg").html(`
        <div class="flex flex-col gap-[12px]">
            <span class="font-semibold border bg-[#CFDFFF] text-[#366EFB] text-md p-2 rounded-lg">
                Upload Carousel Images <i class="fa-solid fa-upload ml-2"></i>
            </span>
            <span class="text-[#9599A1]">
                SVG, PNG, or JPEG (max 5MB)
            </span>
        </div>
    `);

    AddThemeModal.showModal();
    //localStorage.setItem("themeUpdated", Date.now());
});

//for executing the save btn
$(document).on("click", "#executeSavebtn", function () {
    const logoFile = $("#logo_id")[0]?.files[0];
    const theme_name = $("#theme_name").val().trim();
    const company_name = $("#company_name").val().trim();
    const site_name = $("#site_name").val().trim();

    // clear previous errors
    $("#CompanyName-error, #ThemeName-error, #logo-error, #SiteName-error")
        .text("")
        .addClass("hidden");

    // validate individually
    if (!theme_name || !company_name || !logoFile || !site_name) {
        if (!theme_name) {
            $("#ThemeName-error")
                .text("Theme name is required")
                .removeClass("hidden")[0]
                .scrollIntoView({ behavior: "smooth", block: "center" });
        }

        if (!company_name) {
            $("#CompanyName-error")
                .text("Company name is required")
                .removeClass("hidden")[0]
                .scrollIntoView({ behavior: "smooth", block: "center" });
        }

        if (!logoFile) {
            $("#logo-error")
                .text("Logo is required")
                .removeClass("hidden")[0]
                .scrollIntoView({ behavior: "smooth", block: "center" });
        }

        if (!site_name) {
            $("#SiteName-error")
                .text("Site Name is required")
                .removeClass("hidden")[0]
                .scrollIntoView({ behavior: "smooth", block: "center" });
        }
    }

    if (!theme_name || !company_name || !logoFile || !site_name) return;

    const duplicate = array.some(
        (theme) =>
            theme.theme_name.trim().toLowerCase() ===
            theme_name.trim().toLowerCase(),
    );

    if (duplicate) {
        $("#ThemeName-error")
            .text("Theme name already exists.")
            .removeClass("hidden")[0]
            .scrollIntoView({
                behavior: "smooth",
                block: "center",
            });

        return;
    }

    let form = new FormData();

    form.append("logo[]", logoFile);

CarouselOrder = [];

if (ImgArray.length > 0) {
    document
        .querySelectorAll("#imgContainer .uploaderSort")
        .forEach((el, index) => {
            const originalIndex = Number(el.dataset.index);
            const file = ImgArray[originalIndex];

            if (file) {
                form.append("CarouselImgList[]", file);
            }

            CarouselOrder.push({
                position: index + 1,
            });
        });
}

    form.append("carousel_order", JSON.stringify(CarouselOrder));

    form.append(
        "json",
        JSON.stringify({
            theme_name,
            company_name,
            primary_color: $("#primary_color").val(),
            secondary_color: $("#secondary_color").val(),
            accent_color: $("#accent_color").val(),
            background_color: $("#background_color").val(),
            body_color: $("#BodyFont_color").val(),
            header_color: $("#HeaderFont_color").val(),
            body_font: $("#body_font").val(),
            header_font: $("#header_font").val(),
            site_name: $("#site_name").val(),
        }),
    );

    $("#executeSavebtn")
        .prop("disabled", true)
        .html('<span class="loading loading-spinner text-white"></span>');

    // loadGoogleFont("header-font-link", font, ".header-preview");
    // loadGoogleFont("body-font-link", font, ".body-preview");
    Api.post({
        url: "/customize_theme",
        data: form,
        processData: false,
        contentType: false,
        onSuccess: () => {
            $("#executeSavebtn").prop("disabled", false).html("Save");

            Swal.fire({
                icon: "success",
                title: "Theme created successfully!",
                timer: 3000, // closes after 3 seconds
                //showConfirmButton: false
            });

            AddThemeModal.close();
            getAll();
            getActive();
            localStorage.setItem("themeUpdated", Date.now());
        },
        onError: (error) => {
            $("#executeSavebtn").prop("disabled", false).html("Save");

            $("#errorMessage").text(
                error.responseJSON?.message ?? "Something went wrong.",
            );

            $("#ErrorModal")[0].showModal();
        },
    });
});

//for updating tha card
$(document).on("click", "#executeEditbtn", function () {
    const logoFile = $("#logo_id")[0]?.files[0];
    const isEdit = $("#executeEditbtn").is(":visible");

    // console.log("daasa",array);

    //getThemeChanges();
    //countChanges();

    const theme_name = $("#theme_name").val().trim();
    const company_name = $("#company_name").val().trim();

    $("#CompanyName-error, #ThemeName-error, #logo-error")
        .text("")
        .addClass("hidden");

    // validate individually
    if (!theme_name || !company_name || (!logoFile && !isEdit)) {
        if (!theme_name) {
            $("#ThemeName-error")
                .text("Theme name is required")
                .removeClass("hidden")[0]
                .scrollIntoView({ behavior: "smooth", block: "center" });
        }

        if (!company_name) {
            $("#CompanyName-error")
                .text("Company name is required")
                .removeClass("hidden")[0]
                .scrollIntoView({ behavior: "smooth", block: "center" });
        }

        if (!logoFile && !isEdit) {
            $("#logo-error")
                .text("Logo is required")
                .removeClass("hidden")[0]
                .scrollIntoView({ behavior: "smooth", block: "center" });
        }

        if (!site_name) {
            $("#SiteName-error")
                .text("Site Name is required")
                .removeClass("hidden")[0]
                .scrollIntoView({ behavior: "smooth", block: "center" });
        }

        return;
    }

    const duplicate = array.some(
        (theme) =>
            theme.theme_name.trim().toLowerCase() ===
                theme_name.trim().toLowerCase() &&
            (!isEdit || theme.id !== updateId),
    );

    if (duplicate) {
        $("#ThemeName-error")
            .text("Theme name already exists.")
            .removeClass("hidden")[0]
            .scrollIntoView({
                behavior: "smooth",
                block: "center",
            });

        return;
    }

    //if (!theme_name || !company_name || !logoFile) return;

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

    document
        .querySelectorAll("#imgContainer .uploaderSort")
        .forEach((el, index) => {
            CarouselOrder.push({
                type: el.dataset.type || "existing",
                id: el.dataset.url || null,
                temp_index: el.dataset.index || null,
                position: index + 1,
            });
        });

    if (!hasChanges()) {
        AddThemeModal.close();

        Swal.fire({
            icon: "info",
            title: "No changes detected",
            text: "Please modify at least one field before updating.",
        });

        return;
    }

    form.append("carousel_order", JSON.stringify(CarouselOrder));
    form.append("deleted_carousel_images", JSON.stringify(DeleteCarouselImg));

    form.append(
        "json",
        JSON.stringify({
            theme_name,
            company_name,
            primary_color: $("#primary_color").val(),
            secondary_color: $("#secondary_color").val(),
            accent_color: $("#accent_color").val(),
            background_color: $("#background_color").val(),
            body_color: $("#BodyFont_color").val(),
            header_color: $("#HeaderFont_color").val(),
            body_font: $("#body_font").val(),
            header_font: $("#header_font").val(),
            site_name: $("#site_name").val(),
        }),
    );

    $("#executeEditbtn")
        .prop("disabled", true)
        .html('<span class="loading loading-spinner text-white"></span>');

    Api.post({
        url: `/customize_theme/update/${updateId}`,
        processData: false,
        contentType: false,
        headers: {
            "X-HTTP-Method-Override": "PUT",
            "X-CSRF-TOKEN": document.querySelector('meta[name="csrf-token"]')
                .content,
        },
        data: form,

        onSuccess: () => {
            $("#executeEditbtn").prop("disabled", false).html("Confirm");
            Swal.fire({
                icon: "success",
                title: "Theme updated successfully!",
                timer: 3000, // closes after 3 seconds
                //showConfirmButton: false
            });
            AddThemeModal.close();
            getAll();
            getActive();
            localStorage.setItem("themeUpdated", Date.now());
            console.log("aasd", updateId);
        },
        onError: (error) => {
            $("#executeEditbtn").prop("disabled", false).html("Confirm");

            $("#errorMessage").text(
                error.responseJSON?.message ?? "Something went wrong.",
            );

            $("#ErrorModal")[0].showModal();
        },
    });
});

bindColorPicker("#primary_color", "#primaryColorWrapper", "#primaryColorHex");

bindColorPicker(
    "#secondary_color",
    "#secondaryColorWrapper",
    "#secondaryColorHex",
);

bindColorPicker("#accent_color", "#accentColorWrapper", "#accentColorHex");

bindColorPicker(
    "#background_color",
    "#backgroundColorWrapper",
    "#backgroundColorHex",
);

$("#BodyFont_color").on("input", function () {
    $("#BodyFontColorHex").val($(this).val());
});

$("#HeaderFont_color").on("input", function () {
    $("#HeaderFontColorHex").val($(this).val());
});

function RenderLogo(file) {
    const logo_reader = new FileReader();

    logo_reader.onload = function (e) {
        const dataUrl = e.target.result;
        $("#LogoImg").html(`
            <img src="${dataUrl}" 
                 class="h-[85px] w-[100px] object-contain  ">
            <span class="text-sm text-black truncate max-w-[120px]">${file.name}</span>
        `);

        // Extract color palette from the logo using Color Thief
        extractColorsFromLogo(dataUrl);
    };

    logo_reader.readAsDataURL(file);
}

/**
 * Extract dominant colors from a logo image using Color Thief
 * and auto-populate the color picker fields.
 */
function extractColorsFromLogo(imageUrl) {
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = imageUrl;

    img.onload = function () {
        try {
            const colorThief = new window.ColorThief();
            const dominant = colorThief.getColor(img);       // [R, G, B]
            const palette = colorThief.getPalette(img, 4);    // [[R,G,B], ...]

            const dominantHex = rgbToHex(dominant[0], dominant[1], dominant[2]);
            const secondaryHex = palette[1] ? rgbToHex(palette[1][0], palette[1][1], palette[1][2]) : dominantHex;
            const accentHex = palette[2] ? rgbToHex(palette[2][0], palette[2][1], palette[2][2]) : dominantHex;
            const bgHex = palette[3] ? rgbToHex(palette[3][0], palette[3][1], palette[3][2]) : lightenColor(dominantHex, 60);

            updateColorPicker("#primary_color", "#primaryColorWrapper", "#primaryColorHex", dominantHex);
            updateColorPicker("#secondary_color", "#secondaryColorWrapper", "#secondaryColorHex", secondaryHex);
            updateColorPicker("#accent_color", "#accentColorWrapper", "#accentColorHex", accentHex);
            updateColorPicker("#background_color", "#backgroundColorWrapper", "#backgroundColorHex", bgHex);

        } catch (e) {
            console.warn("Color Thief extraction failed:", e);
        }
    };

    img.onerror = function () {
        console.warn("Failed to load image for color extraction");
    };
}

/**
 * Convert RGB components to hex string (e.g. #ff00aa)
 */
function rgbToHex(r, g, b) {
    return "#" + [r, g, b]
        .map((c) => Math.max(0, Math.min(255, Math.round(c))))
        .map((c) => c.toString(16).padStart(2, "0"))
        .join("");
}

/**
 * Lighten a hex color by a percentage (0–100).
 */
function lightenColor(hex, percent) {
    const num = parseInt(hex.replace("#", ""), 16);
    const r = Math.min(255, (num >> 16) + Math.round(255 * percent / 100));
    const g = Math.min(255, ((num >> 8) & 0x00ff) + Math.round(255 * percent / 100));
    const b = Math.min(255, (num & 0x0000ff) + Math.round(255 * percent / 100));
    return rgbToHex(r, g, b);
}

$("#logo_id").on("change", function () {
    const file = this.files[0];
    if (!file) return;

    const FileName = this.files[0].name;
    const maxSize = 5;

    const FileSize = this.files[0].size / 1024 / 1024;

    const allowedTypes = ["image/jpeg", "image/png", "image/webp", "image/svg"];

    // Wrong file type
    if (!allowedTypes.includes(file.type)) {
        $("#logo-error")
            .text("Invalid file type. Only JPG, PNG, and WEBP are allowed.")
            .removeClass("hidden");

        $(this).val("");
        return;
    }

    if (FileSize > maxSize) {
        $("#logo-error")
            .text(
                `Invalid! file to large your. File has ${FileSize.toFixed(2)}MB limit is ${maxSize}MB`,
            )
            .removeClass("hidden");

        $(this).val("");
        return;
    }

    // clear error
    //$("#LogoImg").text(FileName);
    $("#logo-error").text("").addClass("hidden");
    console.log("filesss", FileName);
    console.log("filexxx", file);
    console.log("faa", FileSize);
    RenderLogo(file);
});

function DisplayLogoImg(LogoImg, LogoName) {
    $("#LogoImg").html(`
        <img src="${LogoImg}?t=${Date.now()}"
             class="h-[85px] w-[100px] object-contain">
        <span class="text-sm text-black truncate max-w-[120px]">${LogoName}</span>
    `);
}

function renderCarouselPreviews(files) {
    carouselSortable.option("disabled", false);
    
    
    console.log("Carousel count:", getCarouselCounts());

    const existingCount = document.querySelectorAll(
        '#imgContainer .uploaderSort[data-type="existing"]'
    ).length;
    
    const newCount = document.querySelectorAll(
        '#imgContainer .uploaderSort[data-type="new"]'
    ).length;


    const startingPosition = existingCount + newCount;

    Array.from(files).forEach((file,index) => {
        ImgArray.push(file);
        console.log("gerw",existingCount);

        const position = startingPosition + index + 1;

        const imgIndex = ImgArray.length - 1;
        const originalName = file.name;
        const normalizedName = file.name
        .replace(/\.[^/.]+$/, "")      // remove extension
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")   // similar to Str::slug()
        .replace(/^-|-$/g, "");
        
        //const reader = new FileReader();

        const imageUrl = URL.createObjectURL(file);

        //reader.onload = function (e) {
            $("#imgContainer").append(`
                <div class="flex w-full carousel-item justify-center relative hover:z-50">
                    <div class="uploaderSort newCarouselImage"
                        data-type="new"
                        data-index="${imgIndex}"
                        data-file="${normalizedName}">

                        <div class="card bg-base-100 h-[110px] w-[110px] tooltip tooltip-bottom custom-tooltip shadow-sm carouseltemp" data-tip="${originalName}">

                            <div class="relative">
                                <button  onclick="deleteCarouselModal.showModal()" class="absolute z-10 rounded-xl w-[20px] h-[20px] text-red-500 right-2 top-2 btn-sm DeleteCarousel"
                                    data-index="${imgIndex}">
                                    <i class="fa-regular fa-trash-can text-[15px] cursor-pointer"></i>
                                </button>
                            </div>

                            <img src="${imageUrl}" class=" object-cover rounded">
                            <div class="img-position absolute top-2 left-2 z-10 flex border border-white
                                    items-center justify-center bg-[#3B81E9] rounded-xl
                                    text-white text-[10px] w-[20px] h-[20px]">
                            ${position}
                        </div>
                        </div>
                    </div>
                </div>
            `);
            Filecount();
        //};
        // reader.readAsDataURL(file);
        // console.log("gee",ImgArray);
    });
}

const nameCount = {};

// displaying Img when adding img
$("#carouselImg").on("change", function () {
    const allowedTypes = ["image/jpeg", "image/png", "image/webp"];
    const maxSize = 5; // MB

    let AcceptedFile = [];
    let RejectedFilesbyType = [];
    let RejectedFilesbySize = [];
    let RejectedFilesbyDuplicate = [];
    let ErrorHandler = "";

    // const files = Array.from(this.files);
    const files = Array.from(this.files).sort((a, b) =>
        a.name.localeCompare(b.name)
    );

    console.log("lp",files.length);

    

    // count occurrences of name+size within THIS selection
    const fileCounts = {};
    files.forEach((file) => {
        const key = `${file.name}_${file.size}`;
        fileCounts[key] = (fileCounts[key] || 0) + 1;
    });

    // names/sizes already present in the carousel (adjust to your actual array/property)
    const existingKeys = new Set(
        (typeof ImgArray !== "undefined" ? ImgArray : []).map(
            (img) => `${img.name}_${img.size}`
        )
    );

    // Build set of slugified filenames from currently visible saved images.
    // Exclude images that have been marked for deletion (DeleteCarouselImg).
    const deletedUrls = new Set(DeleteCarouselImg || []);
    const existingThemeFiles = new Set(
        (originalTheme?.carouselImg ?? [])
            .filter(img => !deletedUrls.has(img.url))
            .map(img => {
                const filename = img.url.split("/").pop();
                const originalName = filename.split("_").slice(2).join("_");
                return normalizeFileName(originalName);
            })
    );

    files.forEach((file) => {
        const key = `${file.name}_${file.size}`;
        const sizeMB = file.size / 1024 / 1024;

        if (!allowedTypes.includes(file.type)) {
            RejectedFilesbyType.push(file);

        } else if (sizeMB > maxSize) {
            RejectedFilesbySize.push(file);

        } else if (
            fileCounts[key] > 1 ||
            existingKeys.has(key) ||
            existingThemeFiles.has(normalizeFileName(file.name))
        ) {
            RejectedFilesbyDuplicate.push(file);

        } else {
            AcceptedFile.push(file);
        }
    });

    // for invalid files by type
    if (RejectedFilesbyType.length > 0) {
        const names = RejectedFilesbyType.map((file) => file.name).join(", ");
        ErrorHandler += `Rejected files: ${names}. Only JPG, PNG, WEBP are allowed. <br>`;
    }

    // for invalid files by size
    if (RejectedFilesbySize.length > 0) {
        const names = RejectedFilesbySize.map((file) => file.name).join(", ");
        ErrorHandler += `Rejected files: ${names}. Too large max size is ${maxSize} MB. <br>`;
    }

    // for duplicate files
    if (RejectedFilesbyDuplicate.length > 0) {
        const names = RejectedFilesbyDuplicate.map((file) => file.name).join(", ");
        ErrorHandler += `Rejected files: ${names}. Due to duplication. <br>`;
    }

    // show or hide error box based on whether anything was rejected
    if (ErrorHandler.length > 0) {
        $("#CarouselError").html(ErrorHandler).removeClass("hidden");
    } else {
        $("#CarouselError").text("").addClass("hidden");
    }

    // approved files
    if (AcceptedFile.length > 0) {
        renderCarouselPreviews(AcceptedFile);
    }
});

// Deleting carousel when add modal
let pendingDelete = null;

$(document).on("click", ".DeleteCarousel", function (e) {
    e.preventDefault();
    e.stopPropagation();

    pendingDelete = $(this);

    document.getElementById("deleteCarouselModal").showModal();
});

$("#confirmDelete").on("click", function () {

    if (!pendingDelete) return;

    const $item = pendingDelete.closest(".uploaderSort");
    const $carouselItem = pendingDelete.closest(".carousel-item");

    const type = $item.data("type");
    let deleted = false;

    if (type === "existing") {

        DeleteCarouselImg.push($item.data("url"));

        $carouselItem.remove();
        renumberPositions();
        deleted = true;

    } else {

        const targetIndex = Number(pendingDelete.data("index"));

        ImgArray.splice(targetIndex, 1);

        $carouselItem.remove();

        reindexCarousel();
        renumberPositions();
        deleted = true;
    }

    Filecount();

    // If no images remain
    if ($("#imgContainer .uploaderSort").length === 0) {

        ClearImgContainer();

    } else {

        // Current search keyword
        const keyword = $(".searchBar").val().trim().toLowerCase();

        if (keyword !== "") {

            // Check if there are still matching images
            const remainingMatches = $("#imgContainer .uploaderSort[data-file]")
                .filter(function () {
                    return ($(this).data("file") || "")
                        .toLowerCase()
                        .includes(keyword);
                }).length;

            // If no matches remain, clear the search and show all images
            if (remainingMatches === 0) {
                $(".searchBar")
                    .val("")
                    .trigger("input");
            }
        }
    }

    pendingDelete = null;

    document.getElementById("deleteCarouselModal").close();

    if (deleted) {
        document.getElementById("ConfirmDeleteModal").showModal();

        $("#confirmBtn")
            .off("click")
            .on("click", function () {
                document.getElementById("ConfirmDeleteModal").close();
            });
    }
});


$.ajax({
    url: "/fonts",
    type: "GET",
    success: function (fonts) {
        // Destroy existing Tom Select instances
        if (headerTomSelect) {
            headerTomSelect.destroy();
            headerTomSelect = null;
        }

        if (bodyTomSelect) {
            bodyTomSelect.destroy();
            bodyTomSelect = null;
        }

        // Clear existing options
        $("#header_font, #body_font").empty();

        // Add placeholder
        $("#header_font, #body_font").append(
            '<option value="">Pick a font</option>',
        );

        // Limit to first 100 fonts
        const Fonts = fonts.slice(0, 100);

        Fonts.forEach((font) => {
            $("#header_font").append(
                `<option value="${font.family}">${font.family}</option>`,
            );

            $("#body_font").append(
                `<option value="${font.family}">${font.family}</option>`,
            );
        });

        // Initialize Tom Select
        headerTomSelect = new TomSelect("#header_font", {
            create: false,
            placeholder: "Search header font...",
            searchField: ["text"],
            maxOptions: 100,
        });

        bodyTomSelect = new TomSelect("#body_font", {
            create: false,
            placeholder: "Search body font...",
            searchField: ["text"],
            maxOptions: 100,
        });

        const DEFAULT_FONT = "Roboto";
        let previousHeaderFont = "Roboto";
        let previousBodyFont = "Roboto";

        headerTomSelect.on("initialize", function () {
            this.control_input.readOnly = true;
        });

        bodyTomSelect.on("initialize", function () {
            this.control_input.readOnly = true;
        });

        headerTomSelect.on("dropdown_open", function () {
            this.control_input.readOnly = false;
            this.control_input.focus();
            previousHeaderFont = this.getValue();
            this.clear();
        });

        bodyTomSelect.on("dropdown_open", function () {
            this.control_input.readOnly = false;
            this.control_input.focus();
            previousBodyFont = this.getValue();
            this.clear();
        });

        bodyTomSelect.on("dropdown_close", function () {
            this.control_input.readOnly = true;
            const currentFont = this.getValue();
            if (!currentFont) {
                this.setValue(previousBodyFont);
            }
        });

        headerTomSelect.on("dropdown_close", function () {
            this.control_input.readOnly = true;
            const currentFont = this.getValue();
            if (!currentFont) {
                this.setValue(previousHeaderFont);
            }
        });

        // Set default value
        headerTomSelect.setValue("Roboto");
        bodyTomSelect.setValue("Roboto");
        localStorage.setItem("activityLogsUpdated", Date.now());
    },
    error: function (xhr) {
        console.error("Failed to load fonts:", xhr);
    },
});

// Header font preview
$("#header_font").on("change", function () {
    const font = $(this).val();

    if (!font) return;

    //loadGoogleFont("header-font-link", font, ".header-preview")
});

// Body font preview
$("#body_font").on("change", function () {
    const font = $(this).val();

    if (!font) return;

    //loadGoogleFont("body-font-link", font, ".body-preview")
});

// displaying img when edit btn is click
function DisplayCarouselImg(images) {
    $("#imgContainer").empty();
    console.log("faqw",images);

    images.forEach((img, index) => {
        const ImgPosition = getImagePosition(index);
        const parts = img.url.split("_");

        const idPart = `${parts[0]}_${parts[1]}`;
        const filePart = parts.slice(2).join("_");
        
        const displayName = filePart.substring(0, 10) + "...";

        console.log("cc",ImgPosition);

       $("#imgContainer").append(`
        <div  class="flex w-full justify-center relative hover:z-50 carousel-item">
            <div class="uploaderSort " data-type="existing" data-url="${img.url}"  data-file="${filePart.toLowerCase()}">
                <div class="card  shadow-xl  transition-all duration-300 ease-out cursor-pointer
                    hover:-translate-y-2
                    hover:shadow-2xl
                    hover:scale-105">
                    <div class="card bg-base-100 tooltip tooltip-bottom custom-tooltip  h-[110px] w-[110px] 
                    shadow-sm carouseltemp overflow-visible" data-tip="${filePart.length > 10 ? displayName : filePart}">
                        <div class="relative">
                            <button onclick="deleteCarouselModal.showModal()" class=" absolute z-10 text-red-500  right-2 top-2 btn-sm DeleteCarousel"
                                    data-index="${index}">
                                    <i class="fa-regular fa-trash-can text-[15px] cursor-pointer"></i>
                            </button>
                        </div>
                        <img src="${img.url}" class="object-cover rounded max-w-[110px] max-h-[110px]">
                        <div class="img-position absolute top-2 left-2 z-10 flex border border-white
                                    items-center justify-center bg-[#3B81E9] rounded-xl
                                    text-white text-[10px] w-[20px] h-[20px]">
                            ${ImgPosition}
                        </div>
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
        renumberPositions();
    }
});

function ClearImgContainer() {
    $("#imgContainer").empty();
    $("#carouselImg").val("");
    $(".searchbar").val("");
    //$("#primary_color").val("");

    ImgArray = [];
    CarouselOrder = [];
    DeleteCarouselImg = [];

    // $("#addImg").html('<i class="fa-solid fa-upload"></i> Add Image');
    $("#addImg").html(`
        <div class="flex flex-col gap-[12px]">
            <span class="font-semibold border bg-[#CFDFFF] text-[#366EFB] text-md p-2 rounded-lg">
                Upload Carousel Images <i class="fa-solid fa-upload ml-2"></i>
            </span>
            <span class="text-[#9599A1]">
                SVG, PNG, or JPEG (max 5MB)
            </span>
        </div>
    `);
}

function getImagePosition(index) {
    return index + 1;
}

function renumberPositions() {
    document
        .querySelectorAll("#imgContainer .uploaderSort")
        .forEach((el, i) => {
            const posEl = el.querySelector(".img-position");

            if (posEl) {
                posEl.textContent = i + 1;
            }
        });

    CarouselOrder = [];

    document
        .querySelectorAll("#imgContainer .uploaderSort")
        .forEach((el, index) => {
            CarouselOrder.push({
                id: el.dataset.url,
                position: index + 1,
            });
        });

    Filecount();
}

function reindexCarousel() {
    $(".uploaderSort").each(function (i) {
        $(this).find(".DeleteCarousel").
        attr("data-index", i).
        data("index", i);
    });
}

function Filecount() {
    const count = document.querySelectorAll(
        '#imgContainer .uploaderSort[data-type="new"]',
    ).length;

    if (count > 0) {
        $("#addImg").html(`
            <span class="font-semibold border bg-[#CFDFFF] text-[#366EFB] text-md p-2 rounded-lg">
                ${count} files selected
            </>`
            );
    } else {
        $("#addImg").html(`<div class="flex flex-col gap-[12px]">
            <span class="font-semibold border bg-[#CFDFFF] text-[#366EFB] text-md p-2 rounded-lg">
                Upload Carousel Images <i class="fa-solid fa-upload ml-2"></i>
            </span>
            <span class="text-[#9599A1]">
                SVG, PNG, or JPEG (max 5MB)
            </span>
        </div>`);
    }
    
    console.log("dd", count);
}

function isWhiteColor(hex) {
    let clean = hex.replace("#", "");
    if (clean.length === 3) {
        clean = clean
            .split("")
            .map((c) => c + c)
            .join(""); // fff → ffffff
    }
    const r = parseInt(clean.substring(0, 2), 16);
    const g = parseInt(clean.substring(2, 4), 16);
    const b = parseInt(clean.substring(4, 6), 16);
    return r === 255 && g === 255 && b === 255;
}

function updateColorPicker(inputId, wrapperId, hexInputId, color) {
    const selectedColor = color ?? "#ffffff";
    $(inputId).val(selectedColor);
    $(hexInputId).val(selectedColor);
    $(wrapperId).css(
        "border",
        isWhiteColor(selectedColor) ? "1px solid #E5E5E7" : "none",
    );
}

function bindColorPicker(inputId, wrapperId, hexInputId) {
    $(inputId).on("input", function () {
        const color = $(this).val();

        $(hexInputId).val(color);

        $(wrapperId).css(
            "border",
            isWhiteColor(color) ? "1px solid #E5E5E7" : "none",
        );
    });

    $(hexInputId).on("input", function () {
        const hex = $(this).val();

        if (/^#([0-9A-F]{3}){1,2}$/i.test(hex)) {
            $(inputId).val(hex);

            $(wrapperId).css(
                "border",
                isWhiteColor(hex) ? "1px solid #E5E5E7" : "none",
            );
        }
    });
}

function loadGoogleFont(id, font, selector) {
    $("#" + id).remove();

    $("head").append(`
        <link
            id="${id}"
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=${font.replace(/ /g, "+")}&display=swap">
    `);

    $(selector).css("font-family", `'${font}', sans-serif`);
}

$(document).on("mouseenter", ".tooltip-info", function () {
    const id = $(this).data("id");
    const item = array.find((x) => x.id == id);
    if (!item) return;

    const convert_date = new Date(item.updated_at);
    const convert_createdAt = new Date(item.created_at);
    const formatDateUpdated = convert_date
        .toLocaleDateString("en-PH", {
            year: "numeric",
            month: "numeric",
            day: "numeric",
            hour: "numeric",
            minute: "2-digit",
        })
        .replace(",", " |");
    const formatDateCreated = convert_createdAt
        .toLocaleDateString("en-PH", {
            year: "numeric",
            month: "numeric",
            day: "numeric",
            hour: "numeric",
            minute: "2-digit",
        })
        .replace(",", " |");
    const createdBy = item.user?.admin_name ?? "Unknown";
    const updatedBy = item.updated_by_name ?? "";

    $(".tooltip-box").addClass("hidden");

    // <div class="absolute -top-2 right-4 w-4 h-4 bg-[#F5F5F5] rotate-45 shadow-sm"></div>
    $(this).siblings(".tooltip-box").removeClass("hidden").html(`

    <div class="flex text-[12px] gap-[18px] flex-col relative z-10">
        <div class="flex gap-[15px] justify-between">
            <div class="flex gap-[4px] flex-col">
                <span class="text-[#9599A1]">Created by:</span>
                <span class="text-[#17191C]">${createdBy}</span>
            </div>
            <div class="flex gap-[4px] flex-col">
                <span class="text-[#9599A1]">Created at:</span>
                <span class="text-[#17191C]">${formatDateCreated}</span>
            </div>
        </div>

        <div class="flex gap-[15px] justify-between ${updatedBy ? "" : "hidden"}">
            <div class="flex gap-[4px] flex-col">
                <span class="text-[#9599A1]">Updated by:</span>
                <span class="text-[#17191C]">${updatedBy}</span>
            </div>
            <div class="flex gap-[4px] flex-col">
                <span class="text-[#9599A1]">Updated at:</span>
                <span class="text-[#17191C]">${formatDateUpdated}</span>
            </div>
        </div>
    </div>
`);
});

$(document).on("mouseleave", ".tooltip-info", function () {
    $(this).siblings(".tooltip-box").addClass("hidden");
});

function hasChanges() {
    if (!originalTheme) return false;

    const sameValue = (oldValue, newValue) =>
        (oldValue ?? "") === (newValue ?? "");
    const originalCarouselUrls = (originalTheme.carouselImg ?? []).map(
        (img) => img.url,
    );
    const currentCarouselUrls = Array.from(
        document.querySelectorAll("#imgContainer .uploaderSort"),
    )
        .filter((el) => el.dataset.type !== "new")
        .map((el) => el.dataset.url);

    return (
        !sameValue(originalTheme.theme_name, $("#theme_name").val()) ||
        !sameValue(originalTheme.company_name, $("#company_name").val()) ||
        !sameValue(originalTheme.primary_color, $("#primary_color").val()) ||
        !sameValue(
            originalTheme.secondary_color,
            $("#secondary_color").val(),
        ) ||
        !sameValue(originalTheme.accent_color, $("#accent_color").val()) ||
        !sameValue(
            originalTheme.background_color,
            $("#background_color").val(),
        ) ||
        !sameValue(originalTheme.body_color, $("#BodyFont_color").val()) ||
        !sameValue(originalTheme.header_color, $("#HeaderFont_color").val()) ||
        !sameValue(originalTheme.body_font, $("#body_font").val()) ||
        !sameValue(originalTheme.header_font, $("#header_font").val()) ||
        !sameValue(originalTheme.site_name, $("#site_name").val()) ||
        JSON.stringify(originalCarouselUrls) !==
            JSON.stringify(currentCarouselUrls) ||
        $("#logo_id")[0].files.length > 0 ||
        ImgArray.length > 0 ||
        DeleteCarouselImg.length > 0
    );
}

$(document).on("input", ".searchBar", function () {

    const keyword = this.value.toLowerCase().trim();
    let found = false;

    $("#imgContainer .uploaderSort[data-file]").each(function () {

        const fileName = ($(this).data("file") || "").toLowerCase();

        const match = keyword === "" || fileName.includes(keyword);

        $(this).parent().toggle(match);

        if (match) {
            found = true;
        }
    });

    if (keyword === "") {
        $("#CarouselError").text("").addClass("hidden");
        return;
    }

    $("#CarouselError").toggleClass("hidden", found);

    if (!found) {
        $("#CarouselError").text("No image found");
    }
});

$(document).on("focus", ".searchBar", function () {
    $(this).removeClass("border");
});

$(document).on("blur", ".searchBar", function () {
    $(this).addClass("border");
});

function normalizeFileName(name) {
    const parts = name.split(".");
    const extension = parts.pop().toLowerCase();

    const base = parts.join(".")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");

    return `${base}.${extension}`;
}

function getCarouselCounts() {
    const all = document.querySelectorAll("#imgContainer .uploaderSort");
    const existing = document.querySelectorAll('#imgContainer .uploaderSort[data-type="existing"]');
    const newFiles = document.querySelectorAll('#imgContainer .uploaderSort[data-type="new"]');

    return {
        total: all.length,
        existing: existing.length,
        new: newFiles.length,
    };
}
