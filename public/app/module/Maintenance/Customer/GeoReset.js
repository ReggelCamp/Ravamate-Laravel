import Api from "../../../helper/Api.js";

$(document).on("click","#GeoResetModalBtn",function(e){
    e.preventDefault();
    const id = $("#customerCode").val();
    console.log("id",id);
    document.getElementById("georeset_modal")?.close();

    Swal.fire({
        title: "Updating",
        text: "Updating salesman, please wait.",
        allowOutsideClick: false,
        didOpen: () => Swal.showLoading(),
    });

    Api.post({
        url: "store/GeoReset",
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        data: {
            store_id: id,
            longitude: 0,
            latitude: 0
        },
        onSuccess: (data) => {
            console.log("Success:", data);
            Swal.close();

            Swal.fire({
                title: "Saved",
                text: data.message ?? "Salesman saved successfully.",
                icon: "success",
                timer: 1500,
                showConfirmButton: false,
            });
        },
        onError: (error) => {
            Swal.close();
            
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
            });
            console.error("GeoReset error:", error);
        }
    });
});