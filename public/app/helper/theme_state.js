import Api from "./Api.js";

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
                document.documentElement.style.setProperty('--body-color', activeTheme.body_color);
                document.documentElement.style.setProperty('--header-color', activeTheme.header_color);
                
                $(".themeLogo").attr("src", activeTheme.logo[0]?.url);
               
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
                        margin:-20,
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


window.addEventListener("storage", function (e) {
    if (e.key === "themeUpdated") {
        getActive();
    }
});

$("#ExpandBtn").click(function () {
    const isExpanding = $(".HideMap").is(":visible");
    $("#ExpandBtn").text
    $(".HideMap").toggle();
    $(".tableSec").toggleClass("expanded");
    $("#DataTable").toggleClass("expanded");

    $("#ExpandBtn").text(
    $("#DataTable").hasClass("expanded")
        ? "Collapse"
        : "Expand"
    );

    let table = $("#salesmanTable").DataTable();
    if (isExpanding) {
        table.page.len(10).draw(false);
    } else {
        table.page.len(5).draw(false);
    }
});