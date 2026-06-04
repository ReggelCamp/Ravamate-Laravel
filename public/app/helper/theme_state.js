import Api from "./Api.js";

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

              
                
                $(".carouselImg1").attr("src", activeTheme.carouselImg1[0]?.url);
                $(".carouselImg2").attr("src", activeTheme.carouselImg2[0]?.url);
                $(".carouselImg3").attr("src", activeTheme.carouselImg3[0]?.url);
                
                $(".themeLogo").attr("src", activeTheme.logo[0]?.url);
                $("#report_header").text(activeTheme.report_header);
                $("#company_name").text(activeTheme.company_name);
            }
        }
    });
}

$(document).ready(function () {
    getActive();
});

$(document).ready(function () {
    const savedTheme = localStorage.getItem("theme") || "light";

    document.documentElement.setAttribute("data-theme", savedTheme);

    $("#theme-toggle").prop("checked", savedTheme === "dark");
});

$(document).on("change", "#theme-toggle", function () {
    const theme = this.checked ? "dark" : "light";

    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
});


