import Api from "./Api.js";

function isLightColor(hex) {
    if (!hex) return true; // default to light if no color

    hex = hex.replace("#", "");

    
    if (hex.length === 3) {
        hex = hex.split("").map(c => c + c).join("");
    }

    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    
    const brightness = (0.299 * r) + (0.587 * g) + (0.114 * b);

    return brightness > 186;
}

function determineFontColorForMainBG(primaryColor, secondaryColor) {
    const isPrimaryLight = isLightColor(primaryColor);
    const isSecondaryLight = isLightColor(secondaryColor);

    if (!isPrimaryLight && !isSecondaryLight) {
        return "#FFFFFF"; 
    } else if (isPrimaryLight && isSecondaryLight) {
        return "#000000";
    } else if (!isPrimaryLight) {
        return "#FFFFFF";
    } else {
       
        return "#000000";
    }
}

function determineFontColorForTableBG(backgroundColor){
    const isBackgroundLight = isLightColor(backgroundColor);

    if(!isBackgroundLight){
        return "#FFFFFF";
    }
    else{
        return "#333";
    }
}

export default function getActive() {
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

                 const HeaderFontColor = determineFontColorForMainBG(
                    activeTheme.primary_color,
                    activeTheme.secondary_color
                );

                const BodyFontColor = determineFontColorForTableBG(
                    activeTheme.background_color
                );

                // document.documentElement.style.setProperty('--body-color', fontColor);
                document.documentElement.style.setProperty('--header-color', HeaderFontColor);
                document.documentElement.style.setProperty('--body-color', BodyFontColor);

                // document.documentElement.style.setProperty('--body-color', activeTheme.body_color);
                // document.documentElement.style.setProperty('--header-color', activeTheme.header_color);
                
                // $(".themeLogo").attr("src", activeTheme.logo[0]?.url);

                $(".themeLogo").attr(
                    "src",
                    activeTheme.logo[0]?.url + "?t=" + Date.now()
                );
               
                const $container = $("#carouselContainer");

                if ($container.length) {
                    let html = "";
                    
                    activeTheme.carouselImg?.forEach(img => {
                        html += `
                            <div class="item ">
                                <img src="${img.url}" class=" " id="${img.id}" />
                            </div>
                        `;
                    });

                    $container.html(html);

                    if ($container.data("owl.carousel")) {
                        $container.trigger("destroy.owl.carousel");
                    }

                    $container.owlCarousel({
                        loop: true,
                        margin:20,
                        center: true,
                        nav: false,
                        autoplay: true,
                        autoplayTimeout: 3000,
                        responsive: {
                            0: { items: 1 },
                            768: { items: 3 },
                            1024: { items: 3 }
                        }
                    });
                }
                                $("#site_name").text(activeTheme.site_name);
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

window.addEventListener("storage", function (e) {
    if (e.key === "themeUpdated") {
        getActive();
    }
});
