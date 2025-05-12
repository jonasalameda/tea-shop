import { fetchData } from "./fetchwrapper.js";

// let markers = {};
// Implement map functionality 
// and load the content of the places.json file 
// and handle the user interaction with the list of places
export function initMapView() {
    console.log("initialzing map");
    
    // 1) Create an instance of the Leaflet map and set the initial view to your favorite
    // 45.5591915,-74.0408199
    const map = L.map('map').setView(
        [45.503029486526536, -73.67433891534192],
        11)
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

    getPlaces(map)
}

async function getPlaces(map) {
    const data = await fetchData("../data/places.json");
    const locationList = document.getElementById("map-locations");
    const ol = createCustomElement(locationList, 'ol','')
    ol.setAttribute('class','overflow-auto');
    ol.setAttribute('style','max-height: 80vh; list-style-position: inside;')
   
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
        // markers[element.id] = marker;
        const popUpString = `<b>${element.title}</b><br>${element.description}.`;
        marker.bindPopup(popUpString);

       
        const newLocation = createCustomElement(ol,'li',`${element.title} : ${element.description}`);
        newLocation.setAttribute('class',"bg-success-subtle");
        newLocation.setAttribute("data-place-id", element.placeID);
        const hr = document.createElement('hr');
        ol.appendChild(hr);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 20,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map)
        newLocation.addEventListener("click",()=>  {map.panTo(marker.getLatLng(),15); 
        marker.openPopup();} );
    }
}

// function showLocation(placeId){
//     const marker = markers[placeId]; 
//         map.setView(marker.getLatLng(),15); 
//         marker.openPopup(); 
    
// }

function createCustomElement(parent, newElementName, content){
    const newElement = document.createElement(newElementName);
    newElement.textContent = content;
    parent.appendChild(newElement);
    return newElement;
}



