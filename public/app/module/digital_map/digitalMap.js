import Api from "../../helper/Api.js"

let map;

function initMap() {
    const container = document.getElementById('digital_map_container');

    if (!container) {
        console.error('#digital_map_container not found in DOM');
        return;
    }

    map = new google.maps.Map(container, {
        center: { lat: 10.55, lng: 124.05 },
        zoom: 8,
        cameraControl: false,
        zoomControl: false,
        mapTypeControl: false,
        streetViewControl: true,
        fullscreenControl: false,
    });

    // Make the map accessible to other JS modules
    window.dashboardMap = map;

    initSpeedDial();
}

window.initMap = initMap;

function initSpeedDial() {
    const toggleBtn = document.getElementById('mapSpeedDial_toggle');
    if (!toggleBtn) {
        console.error('Speed dial markup not found in DOM');
        return;
    }

    toggleBtn.addEventListener('click', () => {
        const items = document.getElementById('mapSpeedDial_items');
        const icon = document.getElementById('mapSpeedDial_icon');
        const opening = items.classList.contains('hidden');

        items.classList.toggle('hidden', !opening);
        items.classList.toggle('flex', opening);
        icon.classList.toggle('fa-layer-group', !opening);
        icon.classList.toggle('fa-xmark', opening);
    });

    document.getElementById('mapControl_Fullscreen').addEventListener('click', () => {
        const el = document.getElementById('digital_map_container');
        if (!document.fullscreenElement) el.requestFullscreen();
        else document.exitFullscreen();
    });

    document.getElementById('mapControl_ZoomIn').addEventListener('click', () => {
        map.setZoom(map.getZoom() + 1);
    });

    document.getElementById('mapControl_ZoomOut').addEventListener('click', () => {
        map.setZoom(map.getZoom() - 1);
    });

    document.getElementById('mapControl_Recenter').addEventListener('click', () => {
        navigator.geolocation.getCurrentPosition((pos) => {
            map.panTo({ lat: pos.coords.latitude, lng: pos.coords.longitude });
        });
    });

    // document.getElementById('mapControl_StreetView').addEventListener('click', () => {
    //     const panorama = map.getStreetView();
    //     panorama.setPosition(map.getCenter());
    //     panorama.setVisible(!panorama.getVisible());
    // });
}

// Expose globally so the Maps API callback can find it
window.initMap = initMap;

$(document).on("change", "#heatmapToggle", function () {
    if (this.checked) {
        console.log("checked");
        let html = `
        <x-datepicker id="dcrDatepicker" drops="down" opens="left" class="whitespace-nowrap h-[30px] text-[13px]" />
       `;
    }
    else {
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

