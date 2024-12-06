import Leaflet from "leaflet"; // import everything from leaflet
import "leaflet/dist/leaflet.css"; // import leaflet css

const WBS = [48.14201995127035, 11.579561109440888]; // WBS coordinates
const map = Leaflet.map("map").setView(WBS, 13); // create a map object with a center and zoom level
const markerIcon = Leaflet.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconAnchor: [10, 20],
}); // There was an issue with the default marker icon, so we create a new one
Leaflet.marker(WBS, { icon: markerIcon }).addTo(map); // add a marker to the map at the WBS coordinates

Leaflet.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map); // add a tile layer to the map, the tiles are those images that make up the map
const myLocations = [
  {
    name: "marien platz",
    location: [48.13720022916716, 11.575719841863489],
    description: "The best coding school in the world",
  },
  {
    name: "Au Hassen",
    location: [48.128841911526294, 11.594158679205703],
    description: "The best coding school in the world",
  },
  {
    name: "Harden",
    location: [48.116087976990705, 11.473582161236207],
    description: "The best coding school in the world",
  },
];
myLocations.forEach((location) => {
  Leaflet.marker(location.location, { icon: markerIcon })
    .bindPopup(location.description)
    .addTo(map);
});
const bounds = Leaflet.latLngBounds(
  myLocations.map((location) => location.location)
);
map.fitBounds(bounds);
