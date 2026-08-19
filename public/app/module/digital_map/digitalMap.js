// Renders a Google Map inside #digital_map_container

function initMap() {
    const container = document.getElementById('digital_map_container');

    if (!container) {
        console.error('#digital_map_container not found in DOM');
        return;
    }

    const map = new google.maps.Map(container, {
        center: { lat: 10.55, lng: 124.05 },
        zoom: 8,
        zoomControl: true,
        mapTypeControl: true,
        streetViewControl: true,
        fullscreenControl: true,
        zoomControlOptions: {
            position: google.maps.ControlPosition.RIGHT_CENTER,
        },
        mapTypeControlOptions: {
            position: google.maps.ControlPosition.TOP_LEFT,
        },
        streetViewControlOptions: {
            position: google.maps.ControlPosition.RIGHT_BOTTOM,
        },
        fullscreenControlOptions: {
            position: google.maps.ControlPosition.TOP_RIGHT,
        },
    });

}

// Expose globally so the Maps API callback can find it
window.initMap = initMap;

$(document).on("change","#heatmapToggle", function(){
    if(this.checked){
        console.log("checked");
       let html = `
        <x-datepicker id="dcrDatepicker" drops="down" opens="left" class="whitespace-nowrap h-[30px] text-[13px]" />
       `;
    }
    else{
        console.log("wwwww");
    }
    
});

function loadGoogleMaps() {
    // Already loaded (e.g. navigated back to this page) — just init directly
    if (window.google && window.google.maps) {
        initMap();
        return;
    }

    const apiKey = window.APP_CONFIG?.googleMapsApiKey;

    if (!apiKey) {
        console.error('Google Maps API key is missing — check window.APP_CONFIG.googleMapsApiKey');
        return;
    }

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places,visualization&callback=initMap`;
    script.async = true;
    script.onerror = () => console.error('Failed to load Google Maps script');
    document.head.appendChild(script);
}

loadGoogleMaps();
