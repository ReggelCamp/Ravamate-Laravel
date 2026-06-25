import Api from "../helper/Api.js";
import getActive from "../helper/theme_state.js"

let array = [];
let carImg = [];
let CarouselOrder = [];
let DeleteCarouselImg = [];
let ImgArray = [];
let updateId;

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

            let activeTheme = array.find((item) => item.is_active);
            //console.log("pola",array);
            
            const defaultTheme = array[0]?.id;
            
            //console.log("def",defaultTheme);
            

            $("#table").html(`
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full overflow-visible p-4 ">
            `);

            const $grid = $("#table .grid");

            data.forEach((item) => {
                let isActive = item.is_active ? "bg-blue-50 border-4 border-blue-600" : "bg-base-100 border border-base-300";
                const isDefaultTheme = item.id === defaultTheme;
                
                $grid.append(`
                    <div id="themeCard"
                        class="card bg-base-100 shadow-xl  transition-all 
                            hover:-translate-y-2
                            hover:shadow-2xl
                            hover:scale-105  border ${isActive}">

                        <div class="card-body p-0">

                            <!-- HEADER -->
                            <div class="flex w-full justify-between items-center pt-5 pl-5 pr-5">

                                <h2 class="card-title text-[20px]">
                                    ${item.theme_name}
                                </h2>

                                <label class=" text-base-content switch ${item.is_active}">
                                    <input type="checkbox"
                                        data-id="${item.id}"
                                        class="flipswitch"
                                        ${item.is_active ? "checked" : ""}/>
                                    <span class="slider"></span>
                                </label>
                            </div>

                            <!-- IMAGE -->
                            <div class="flex justify-center items-center h-48 mt-2 bg-gray-400 w-full p-5">
                                <img
                                    src="${item.logo?.[0]?.url ? item.logo[0].url + '?t=' + Date.now() : ''}"
                                    class="max-w-[150px] max-h-[150px] object-contain overflow-visible skeleton"
                                    onload="this.classList.remove('skeleton')"
                                    onerror="this.classList.remove('skeleton')">
                            </div>

                            <div class="flex w-full flex-col pl-5 pr-5">
                                <h2 class="card-title tooltip w-fit" data-tip="Company Name">
                                     ${item.company_name}
                                </h2>

                                <div>
                                    <div class="text-gray-500 tooltip" data-tip="Site">${item.report_header ? item.report_header : "NULL"}</div>
                                </div>
                            </div>

                            <!-- COLORS -->
                            <div class="flex flex-col w-full pl-5 pr-5">
                                <h1>Color Palette</h1>
                                <div class="flex w-full gap-2 mt-2">

                                    <div class="w-[30px] h-[30px] rounded-[4px] ${item.primary_color?.toLowerCase() === '#ffffff' ? 'border border-[#E5E5E7]' : ''} tooltip tooltip-primary"
                                        data-tip="Primary Color"
                                        style="background:${item.primary_color}">
                                    </div>
                                    
                                    <div class="w-[30px] h-[30px] rounded-[4px] ${item.secondary_color?.toLowerCase() === '#ffffff' ? 'border border-[#E5E5E7]' : ''} tooltip tooltip-primary"
                                        data-tip="Primary Color"
                                        style="background:${item.secondary_color}">
                                    </div>

                                    <div class="w-[30px] h-[30px] rounded-[4px] ${item.accent_color?.toLowerCase() === '#ffffff' ? 'border border-[#E5E5E7]' : ''} tooltip tooltip-primary"
                                        data-tip="Primary Color"
                                        style="background:${item.accent_color}">
                                    </div>

                                    <div class="w-[30px] h-[30px] rounded-[4px] ${item.background_color?.toLowerCase() === '#ffffff' ? 'border border-[#E5E5E7]' : ''} tooltip tooltip-primary"
                                        data-tip="Primary Color"
                                        style="background:${item.background_color}">
                                    </div>

                                </div>
                            </div>

                        <!-- FONT INFO -->
                        <div class="flex justify-between w-full mt-2 pl-5 pr-5">

                            
                            <div class="flex justify-between items-center mt-2">
                                <div>
                                    <span class="text-gray-500 text-sm">Body Font:</span>
                                    <div>${item.body_font}</div>
                                </div>

                                
                            </div>

                            <div class="flex justify-between items-center mt-2">
                                <div>
                                    <span class="text-gray-500 text-sm">Header Font:</span>
                                    <div>${item.header_font}</div>
                                </div>

                                
                            </div>
                        </div>

                        <!-- BUTTONS -->
                        <div class="flex w-full gap-2 mt-3 pl-5 pr-5 pb-5">
                            <button class="bg-blue-700 w-full rounded-xl h-[34px] text-white cursor-pointer"
                                data-id="${item.id}" id="updatebtn"> <i class="fa-solid fa-pen-to-square"></i>
                                Edit
                            </button>

                            <button class="bg-red-500 p-2 w-[40px] h-[34px] text-white rounded-lg cursor-pointer ${isDefaultTheme ? "hidden" : "flex justify-center"}"
                                data-id="${item.id}" id="deletebtn"> <i class="fa-solid fa-trash"></i>
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

    const logoUrl = row.logo[0].url;
    const filename = logoUrl.split("/").pop();
    updateId = $(this).data().id;

    $("#logo_id").val("");

    $("#CarouselError").text("").addClass("hidden");
    $("#logo-error").text("").addClass("hidden");
    $("#CompanyName-error").text("").addClass("hidden");
    $("#ThemeName-error").text("").addClass("hidden");

    $("#theme_name").val(row.theme_name);
    $("#company_name").val(row.company_name);
    $("#primary_color").val(row.primary_color);
    $("#secondary_color").val(row.secondary_color);
    $("#accent_color").val(row.accent_color);
    $("#background_color").val(row.background_color);
    $("#BodyFont_color").val(row.body_color);
    $("#HeaderFont_color").val(row.header_color);
    $("#body_font").val(row.body_font);
    $("#header_font").val(row.header_font);
    $("#report_header").val(row.report_header);
    
    console.log("dasd",row);
    

    //$("#LogoImg").text("Current File " + filename);
    

    $("#executeSavebtn").hide();
    $("#executeEditbtn").show();
    $("#modalTitle").text("Update Theme");

    
    // ImgArray = [];
    // DeleteCarouselImg = [];
    // CarouselOrder = [];
    // $("#carouselImg").val("");

    ClearImgContainer();
    //DisplayLogoImg(row.logo[0]);
    DisplayLogoImg(logoUrl,filename);

    if (row.carouselImg && row.carouselImg.length > 0) {
        DisplayCarouselImg(row.carouselImg);
    }
    AddThemeModal.showModal();

    // console.log("a",logoUrl);
    // console.log("b",filename);
});

//for add
$(document).on("click", "#addbtn", function () {
    carouselSortable.option("disabled", true);

    $("#CarouselError").text("").addClass("hidden");
    $("#logo-error").text("").addClass("hidden");
    $("#CompanyName-error").text("").addClass("hidden");
    $("#ThemeName-error").text("").addClass("hidden");

    $("#theme_name").val("");
    $("#company_name").val("");
    $("#logo_id").val("");
    $("#primary_color").val("#3b82f6");
    $("#secondary_color").val("#3b82f6");
    $("#accent_color").val("#3b82f6");
    $("#background_color").val("#3b82f6");
    $("#BodyFont_color").val("#ffffff");
    $("#HeaderFont_color").val("#000000");
    $("#body_font").val("Roboto");
    $("#header_font").val("Roboto");
    $("#report_header").val("");
    $("#carouselImg").val("");
    $("#executeSavebtn").show();
    $("#executeEditbtn").hide();
    $("#modalTitle").html(`
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" class="inline-block align-middle mr-2 relative top-[-2px]">
            <path d="M8.25 1.5H6.75C3 1.5 1.5 3 1.5 6.75V11.25C1.5 15 3 16.5 6.75 16.5H11.25C15 16.5 16.5 15 16.5 11.25V9.75" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12.03 2.26592L6.12 8.17592C5.895 8.40092 5.67 8.84342 5.625 9.16592L5.3025 11.4234C5.1825 12.2409 5.76 12.8109 6.5775 12.6984L8.835 12.3759C9.15 12.3309 9.5925 12.1059 9.825 11.8809L15.735 5.97092C16.755 4.95092 17.235 3.76592 15.735 2.26592C14.235 0.765922 13.05 1.24592 12.03 2.26592Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M11.1825 3.11328C11.685 4.90578 13.0875 6.30828 14.8875 6.81828" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Add Theme
    `);

    $("#LogoImg").html(`
        <div class="flex flex-col">
            <span class="font-semibold border bg-[#CFDFFF] text-[#366EFB] text-md p-2 rounded-lg">
                Upload Logo <i class="fa-solid fa-upload ml-2"></i>
            </span>
            <span class="text-gray-400">
                SVG, PNG, or JPEG (max, 800x400px)
            </span>
        </div>
    `);
    
    ClearImgContainer();

    $("#addImg").html(`
        <div class="flex flex-col">
            <span class="font-semibold border bg-[#CFDFFF] text-[#366EFB] text-md p-2 rounded-lg">
                Upload Logo <i class="fa-solid fa-upload ml-2"></i>
            </span>
            <span class="text-gray-400">
                SVG, PNG, or JPEG (max, 800x400px)
            </span>
        </div>
    `);

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
   if (!theme_name || !company_name || !logoFile) {

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
    }
   
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
        body_color: $("#BodyFont_color").val(),
        header_color: $("#HeaderFont_color").val(),
        body_font: $("#body_font").val(),
        header_font: $("#header_font").val(),
        report_header: $("#report_header").val(),
    }));

    $("#executeSavebtn")
    .prop("disabled", true)
    .html('<span class="loading loading-spinner text-primary"></span>');

    Api.post({
        url: "/customize_theme",
        data: form,
        processData: false,
        contentType: false,
        onSuccess: () => {
            $("#executeSavebtn")
                .prop("disabled", false)
                .html("Save");
            AddThemeModal.close();
            getAll();
            localStorage.setItem("themeUpdated", Date.now());  
        },
        onFail: (error) => {
            $("#executeSavebtn")
                .prop("disabled", false)
                .html("Save");
            Swal.fire("Error", error?.message ?? "Something went wrong.", "error");
        }
    });
});

//for updating tha card
$(document).on("click", "#executeEditbtn", function () {
    const logoFile = $("#logo_id")[0]?.files[0];
    const isEdit = $("#executeEditbtn").is(":visible"); 

    const theme_name = $("#theme_name").val();
    const company_name = $("#company_name").val();

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
        body_color: $("#BodyFont_color").val(),
        header_color: $("#HeaderFont_color").val(),
        body_font: $("#body_font").val(),
        header_font: $("#header_font").val(),
        report_header: $("#report_header").val(),
    }));
    
    $("#executeEditbtn")
    .prop("disabled", true)
    .html('<span class="loading loading-spinner text-primary"></span>');

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
            $("#executeEditbtn")
                .prop("disabled", false)
                .html("Confirm");
            AddThemeModal.close();
            getAll();
            localStorage.setItem("themeUpdated", Date.now());  
        },
        onFail: (error) => {
            $("#executeEditbtn")
                .prop("disabled", false)
                .html("Confirm");
            Swal.fire("Error", error?.message ?? "Something went wrong.", "error");
        }
    });
});

$("#accent_color").on("input", function () {
    $("#accentColorHex").val($(this).val());
});

$("#accentColorHex").on("input", function () {
    let hex = $(this).val();

    if (/^#([0-9A-F]{3}){1,2}$/i.test(hex)) {
        $("#accent_color").val(hex);
    }
});

$("#primary_color").on("input", function () {
    $("#primaryColorHex").val($(this).val());
});

$("#primaryColorHex").on("input", function () {
    let hex = $(this).val();

    if (/^#([0-9A-F]{3}){1,2}$/i.test(hex)) {
        $("#primary_color").val(hex);
    }
});

$("#secondary_color").on("input", function () {
    $("#secondaryColorHex").val($(this).val());
});

$("#secondaryColorHex").on("input", function () {
    let hex = $(this).val();

    if (/^#([0-9A-F]{3}){1,2}$/i.test(hex)) {
        $("#secondary_color").val(hex);
    }
});

$("#background_color").on("input", function () {
    $("#backgroundColorHex").val($(this).val());
});

$("#backgroundColorHex").on("input", function () {
    let hex = $(this).val();

    if (/^#([0-9A-F]{3}){1,2}$/i.test(hex)) {
        $("#background_color").val(hex);
    }
});

$("#BodyFont_color").on("input", function () {
    $("#BodyFontColorHex").val($(this).val());
});

$("#HeaderFont_color").on("input", function () {
    $("#HeaderFontColorHex").val($(this).val());
});

function RenderLogo(file) {
    const logo_reader = new FileReader();

    logo_reader.onload = function (e) {
        $("#LogoImg").html(`
            <img src="${e.target.result}" 
                 class="h-[85px] w-[100px] object-contain  ">
            <span class="text-sm text-black truncate max-w-[120px]">${file.name}</span>
        `);
    };

    logo_reader.readAsDataURL(file);
}

$("#logo_id").on("change", function () {
    const file = this.files[0];
    const FileName = this.files[0].name;
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
    //$("#LogoImg").text(FileName);
    $("#logo-error").text("").addClass("hidden");
    console.log("filesss",FileName);
    console.log("filexxx",file);
    RenderLogo(file);
});

function DisplayLogoImg(LogoImg,LogoName){

    $("#LogoImg").html(`
            <img src="${LogoImg}" 
                 class="h-[85px] w-[100px] object-contain  ">
            <span class="text-sm text-black truncate max-w-[120px]">${LogoName}</span>
        `);
}

function renderCarouselPreviews(files) {
    carouselSortable.option("disabled", true);

    Array.from(files).forEach((file) => {

        ImgArray.push(file);

        const imgIndex = ImgArray.length - 1;

        const reader = new FileReader();

        reader.onload = function (e) {
            $("#imgContainer").append(`
                <div class="uploaderSort newCarouselImage"
                     data-type="new"
                     data-index="${imgIndex}">

                    <div class="card bg-base-100 black h-[250px] w-[250px] ImgContent shadow-sm carouseltemp">

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

const nameCount = {};
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
    // const duplicates = [];

    // acceptedFiles.forEach((file) => {
    //     const name = file.name;
    //     nameCount[name] = (nameCount[name] || 0) + 1;

    //     if (nameCount[name] > 1) {
    //         duplicates.push(name);
    //     }
    // });

    // if (duplicates.length > 0) {
    //     $("#CarouselError")
    //         .text(`Duplicate files: ${duplicates.join(", ")}`)
    //         .removeClass("hidden");
    // } else {
    //     $("#CarouselError").text("").addClass("hidden");
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

    if(ImgArray.length == 0){
        ClearImgContainer();
    }
    
    console.log("Iac",ImgArray.length);
    console.log("Iacqq",ImgArray);
    console.log("llplp",targetIndex);

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

    console.log("Del",delete_id);
});

function ClearImgContainer(){
    $("#imgContainer").empty();
    $("#carouselImg").val("");

    ImgArray = [];
    CarouselOrder = [];
    DeleteCarouselImg = [];

    // $("#addImg").html('<i class="fa-solid fa-upload"></i> Add Image');
    $("#addImg").html(`
        <div class="flex flex-col">
            <span class="font-semibold border bg-[#CFDFFF] text-[#366EFB] text-md p-2 rounded-lg">
                Upload Logo <i class="fa-solid fa-upload ml-2"></i>
            </span>
            <span class="text-gray-400">
                SVG, PNG, or JPEG (max, 800x400px)
            </span>
        </div>
    `);
}

function getImagePosition(index) {
    return index + 1;
}

function renumberPositions() {
    document.querySelectorAll("#imgContainer .uploaderSort").forEach((el, i) => {
        const posEl = el.querySelector(".img-position");

        if (posEl) {
            posEl.textContent = i + 1;
        }
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
    console.log("dd",count);
}

