import Api from "../helper/Api.js";

function getActive() {
    Api.get({
        url: "/customize_theme/getActive",
        onSuccess: (data) => {

            let activeTheme = data;

            if (activeTheme) {

            
                document.documentElement.style.setProperty('--primary', activeTheme.primary_color);
                document.documentElement.style.setProperty('--secondary', activeTheme.secondary_color);
                document.documentElement.style.setProperty('--accent', activeTheme.accent_color);
                document.documentElement.style.setProperty('--background', activeTheme.background_color);

                
                document.documentElement.style.setProperty('--header-font', activeTheme.header_font);
                document.documentElement.style.setProperty('--body-font', activeTheme.body_font);
                document.documentElement.style.setProperty('--body-color', activeTheme.body_color);
                document.documentElement.style.setProperty('--header-color', activeTheme.header_color);


                
                $("#themeLogo").attr("src", activeTheme.logo[0]?.url);
                $(".report_header").text(activeTheme.report_header);
            }
        }
    });
}

$(document).ready(function () {
    getActive();
});