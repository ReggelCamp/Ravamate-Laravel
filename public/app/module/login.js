import Api from "../helper/Api.js";

$("#LoginForm").on("submit",function(e){
    e.preventDefault();

    Api.post({
        url: "/adminLogin",
        data: JSON.stringify({
           contact_number: $("input[name='contact_number']").val()
        }),
        onSuccess: () => {
            window.location.href = "/dashboard";
        }
    });
});