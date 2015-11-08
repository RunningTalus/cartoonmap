var map = L.map('map', { zoomControl: false } ).setView([ 40.014, -105.27], 14);

map.dragging.disable();
map.touchZoom.disable();
map.doubleClickZoom.disable();
map.scrollWheelZoom.disable();

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 14,
    minZoom: 14,
    id: 'runningtalus.cigpkmpvb00xkuekovr1zq8x3',
    accessToken: 'pk.eyJ1IjoicnVubmluZ3RhbHVzIiwiYSI6ImNpZ3BrbXI5eDAwemh1Y2tvZW9oMGp6Z3cifQ.-vtOPlFYya6v3Hh7_SnvUA'
}).addTo(map);