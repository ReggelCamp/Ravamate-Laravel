import Api from "../helper/Api.js";

$("#LoginForm").on("submit",function(e){
    e.preventDefault();
    console.log("Form submitted!");
    Api.post({
        url: "/adminLogin",
        data: JSON.stringify({
           contact_number: $("input[name='contact_number']").val()
        }),
        
        onSuccess: () => {
            window.location.href = "/customize_theme";
            console.log("Success");
        },
        onFail: (error) => {
            console.log(error);
        }
    });
});

$("#logoutbtn").on("click", function(e) {
    e.preventDefault();
    console.log("Logout button clicked!");
    Api.post({
        url: "/logout",
        data: JSON.stringify({}),
        onSuccess: () => {
            window.location.href = "/login";
            console.log("Logged out successfully");
        },
        onFail: (error) => {
            console.log(error);
        }
    });
});