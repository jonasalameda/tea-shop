import { fetchData } from "./fetchwrapper.js";

// Implement map functionality 
// and load the content of the places.json file 
// and handle the user interaction with the list of places
export function initMapView() {
    console.log("initialzing map");
    
    // 1) Create an instance of the Leaflet map and set the initial view to your favorite
    // 45.5591915,-74.0408199
    const map = L.map('map').setView(
        [45.5591915,-73.5408199],
        12)
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

    getPlaces(map)
}

async function getPlaces(map) {
    const data = await fetchData("/data/places.json")

    for (let i = 0; i < data.places.length; i++) {
        const element = data.places[i];

        let elementCategory = data.categories.find(
            category => category.id === element.categoryId
        )

        let icon = L.icon({
            iconUrl: `${elementCategory.markerIcon}`,
            shadowUrl: `${elementCategory.markerShadow}`
        })

        let marker = L.marker(element.point.coordinates, {icon: icon}).addTo(map);
        marker.bindPopup(`<b>${element.title}</b><br>${element.description}.`).openPopup();
    }
}
