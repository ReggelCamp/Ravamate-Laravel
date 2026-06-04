import Api from "../helper/Api.js";

function getUser(){
Api.get({
    url: "/getUser",

    onSuccess: (data) => {
        let res = data;
        $("#name").text(res.name);
    }

    })
    console.log("response: ",res);
}

$(document).ready(function(){
    getUser();
})