import Api from "../../helper/Api.js";

function displayMap() {
    Api.get({
        url: "GOOGLE_MAPS_API",
        onSuccess: (data) => {
           $("digital_map_container").append(`
                <div class="w-full h-[100px]">
                    Hello World
                </div>
            `);
        },
        onError: (error) => {
            console.error(error);
        }
    });
}

displayMap();