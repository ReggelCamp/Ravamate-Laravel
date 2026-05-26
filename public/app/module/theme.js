import Api from "../helper/Api.js";

let array = [];
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
        confirmButtonText: "Confirm"
    }).then((result) => {

        if (result.isConfirmed) {
            toggle.checked = !toggle.checked;

            let finalStatus = toggle.checked ? 1 : 0;
        
            Api.put({
                url: `/customize_theme/${$(toggle).data("id")}`,
                data: JSON.stringify({
                    is_active: finalStatus        
                }),
                onSuccess: () => {
                    Swal.fire({
                        title: "Updated",
                        icon: "success"
                    });
                    getAll();
                }
            });
        }
    });
});

//function for displaying
function getAll(){
    Api.get({
    url: "/customize_theme/getAll",
    onSuccess: (data) => {
        array = data;

        let activeTheme = array.find(item=>item.is_active);
        if(activeTheme){
            $(".primary_color").css("background",activeTheme.primary_color);
        }

        $("#table").html("");

        data.forEach((item) => {
            $("#table").append(
                `
                        <div id= "themeCard"class="card bg-base-100 w-96 shadow-sm border">

                            <div class="card-body">

                                <!-- HEADER -->
                                <div class="flex w-full justify-between items-center">

                                    <h2 class="card-title">
                                        ${item.theme_name}
                                    </h2>

                                    <label class="toggle theme-toggle text-base-content">
                                        <input type="checkbox" 
                                            data-id="${item.id}"
                                            class="flipswitch"
                                            id="flipswitch"
                                            ${item.is_active ? "checked" : ""}/>
                                            <svg
                                                aria-label="disabled"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="4"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            >
                                                <path d="M18 6 6 18" />
                                                <path d="m6 6 12 12" />
                                            </svg>

                                            <svg aria-label="enabled" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <g
                                                stroke-linejoin="round"
                                                stroke-linecap="round"
                                                stroke-width="4"
                                                fill="none"
                                                stroke="currentColor"
                                                >
                                                <path d="M20 6 9 17l-5-5"></path>
                                                </g>
                                            </svg>
                                    </label>
                                </div>

                                <div class = "w-full h-full ">
                                    <img src="${item.logo[0]?.url}" class = "w-full h-[200px]">
                                            
                                    </img>
                                </div>

                                <!-- COLORS -->
                                <div class="flex justify-start w-full gap-5 mt-4">

                                    <div class="w-full h-full flex flex-col">
                                        <h1>
                                            Primary color
                                        </h1>
                                         <div class="w-[40px] h-[40px] "
                                            style="background-color: ${item.primary_color}">
                                        </div>
                                    </div>
                                    <div class="w-full h-full flex flex-col">
                                        <h1>
                                            Secondary color
                                        </h1>
                                         <div class="w-[40px] h-[40px] "
                                            style="background-color: ${item.secondary_color}">
                                        </div>
                                    </div>
                                    <div class="w-full h-full flex flex-col">
                                        <h1>
                                            Accent color
                                        </h1>
                                         <div class="w-[40px] h-[40px] "
                                            style="background-color: ${item.accent_color}">
                                        </div>
                                    </div>
                                    <div class="w-full h-full flex flex-col">
                                        <h1>
                                            Background color
                                        </h1>
                                         <div class="w-[40px] h-[40px] "
                                            style="background-color: ${item.background_color}">
                                        </div>
                                    </div>

                                    

                                </div>

                                <!-- FONT INFO -->
                                <div class="flex flex-col  w-full h-full mt-3">
                                    <div class="w-full h-full flex flex-col">
                                        <h1>
                                            <span class="text-gray-500 text-sm">Report Header:</span>
                                            ${item.report_header}
                                        </h1>
                                        <h1>
                                            <span class="text-gray-500 text-sm">Body Font:</span>
                                            ${item.body_font}
                                        </h1>
                        
                                        <h1>
                                            <span class="text-gray-500 text-sm">Header Font:</span>
                                            ${item.header_font}
                                        </h1>
                                    </div>
                                     <div class w-full flex>
                                        <button class="bg-green-400 w-fit p-2.5 items-center rounded-xl text-white" data-id="${item.id}"id="updatebtn">
                                            Edit
                                        </button>
                                        <button class="mt-4 bg-red-500 p-2 text-white rounded-lg" id="deletebtn" data-id="${item.id}">
                                            Delete
                                        </button>
                                    </div>
                                </div>

                            </div>

                        </div>
                    `,
            );
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
        confirmButtonText: "Yes, delete it!"
        }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed){
                Api.delete({
                url: `/customize_theme/delete/${$(this).data("id")}`,
                onSuccess: (data) => {
                    $(this).closest('#themeCard').remove();
                }
            });
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
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
    $("#body_font").val(row.body_font);
    $("#header_font").val(row.header_font);
    $("#report_header").val(row.report_header);

    $('#executeSavebtn').hide();
    $('#executeEditbtn').show();
    $('#modalTitle').text('Update Theme')
    AddThemeModal.showModal();
});

//for add
$(document).on("click", "#addbtn", function () {

    $("#theme_name").val('');
    $("#primary_color").val(' #3b82f6');
    $("#secondary_color").val('#3b82f6');
    $("#accent_color").val(' #3b82f6');
    $("#background_color").val(' #3b82f6');
    $("#body_font").val('');
    $("#header_font").val('');
    $("#report_header").val('');
    
    $('#executeSavebtn').show();
    $('#executeEditbtn').hide();
    $('#modalTitle').text('Add Theme')

    AddThemeModal.showModal();
});

//for executing the save btn
$(document).on("click", "#executeSavebtn", function(){
    let form = new FormData();
    form.append("logo[]", $("#logo_id")[0].files[0]);
    form.append("json", JSON.stringify({
             theme_name: $("#theme_name").val(),
             primary_color: $("#primary_color").val(),
             secondary_color: $("#secondary_color").val(),
             accent_color: $("#accent_color").val(),
             background_color: $("#background_color").val(),
             body_font: $("#body_font").val(),
             header_font: $("#header_font").val(),        
             report_header: $("#report_header").val(),        
         })
        );

    Api.post({
        url: `/customize_theme`,
        data:form,
        processData: false, 
        contentType: false , 
        onSuccess:(data)=> {
            getAll();
            AddThemeModal.close();
        }
    });
});

//for updating tha card
$(document).on("click", "#executeEditbtn", function () {

    let form = new FormData();

    form.append("logo[]", $("#logo_id")[0].files[0]);

    form.append("json", JSON.stringify({
        theme_name: $("#theme_name").val(),
        primary_color: $("#primary_color").val(),
        secondary_color: $("#secondary_color").val(),
        accent_color: $("#accent_color").val(),
        background_color: $("#background_color").val(),
        body_font: $("#body_font").val(),
        header_font: $("#header_font").val(),
        report_header: $("#report_header").val(),
    }));

    Api.post({
        url: `/customize_theme/update/${updateId}`,
        processData: false,  // IMPORTANT
        contentType: false ,  // IMPORTANT
        headers: { "X-HTTP-Method-Override": "PUT",'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content },
        data: form,

        onSuccess: (data) => {
            
            getAll();
            AddThemeModal.close();
        }
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

