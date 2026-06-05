import Api from "../helper/Api.js";

function getUser(){
Api.get({
    url: "/getUser",

    onSuccess: (data) => {
        let res = data;
        $("#name").text(res.name);
        $("#email").text(res.email);
        $("#contact_number").text(res.contact_number);
        $("#account").text(res.account);
        
    }

    })
    console.log("response: ",res);
}

$(document).ready(function(){
    getUser();
})