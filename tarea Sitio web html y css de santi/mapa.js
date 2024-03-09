// Función para inicializar el mapa
function initMap() {
    // Coordenadas del centro del mapa
    var center = {lat: 40.7128, lng: -74.0060}; // Por ejemplo, Nueva York

    // Crear un nuevo mapa en el elemento con id "map"
    var map = new google.maps.Map(document.getElementById('map'), {
        center: center, // Establecer el centro del mapa
        zoom: 8 // Establecer el nivel de zoom
    });
}

