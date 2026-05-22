import Api from "../helper/Api.js";

let array = [];

function getActive(){
    Api.get({
        url:"/customize_theme/getActive",
        onSuccess: (data) => {

            let activeTheme = data; 

            if(activeTheme){
                $(".primary_color").css("background",activeTheme.primary_color);
                $(".secondary_color").css("background",activeTheme.secondary_color);
                $(".accent_color").css("background",activeTheme.accent_color);
                $(".background_color").css("background",activeTheme.background_color);
                $(".report_header").text(activeTheme.report_header);
                $("#themeLogo").attr(
                    "src",
                    activeTheme.logo[0]?.url
                );
                $(".header_font").css("font-family",activeTheme.header_font);
                $(".body_font").css("font-family",activeTheme.body_font);
            }
        }
    });
}

$(document).ready(function () {
    getActive();
});