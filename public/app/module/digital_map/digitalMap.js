// Renders a Google Map inside #digital_map_container

function initMap() {
    const container = document.getElementById('digital_map_container');

    if (!container) {
        console.error('#digital_map_container not found in DOM');
        return;
    }

    const map = new google.maps.Map(container, {
        center: { lat: 14.5995, lng: 120.9842 }, // Manila — change to your default location
        zoom: 12,
    });

    // Optional: drop a marker at the center
    new google.maps.Marker({
        position: { lat: 14.5995, lng: 120.9842 },
        map: map,
    });
}

// Expose globally so the Maps API callback can find it
window.initMap = initMap;

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
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&callback=initMap`;
    script.async = true;
    script.onerror = () => console.error('Failed to load Google Maps script');
    document.head.appendChild(script);
}

loadGoogleMaps();