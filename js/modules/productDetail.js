import { addToCart } from "./productListing.js";


export function initProductDetails(){
    const name = document.querySelector("#product-name");
    const desc = document.querySelector("#desc");
    const price = document.querySelector("#price");
    const img = document.querySelector("#thumbnail")
    
    const data = JSON.parse(sessionStorage.getItem("selected-item"));

    name.textContent = data.itemTitle;
    desc.textContent = data.description;
    price.textContent = "$" + data.unitPrice;
    img.src = data.thumbnail;
    const addBtn = document.getElementById("detail-btn");
    addBtn.addEventListener('click', () => addToCart())
}
