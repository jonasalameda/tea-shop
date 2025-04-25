import { fetchData } from "./fetchwrapper.js";
import { addProduct } from "./cartScript.js"

export function initProducts(){
    console.log("Loading products...");
    getProducts();
}

 async function getProducts() {
    try {
        const products = await fetchData("../data/catalog.json");
        parseProducts(products);
    } catch (error) {
        console.error(error);
    }
}

function parseProducts(products){
    console.log(products);
    console.log(products.products)
    console.log(products.products.description)
    const productCards = document.getElementById("index-catalog-products");
    productCards.classList.add("row", "justify-content-evenly", "flex-wrap");

    products.products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("col-8","card","col-sm-6", "col-md-4","col-lg-3", "m-2", "p-2", "text-center", "shadow-sm", "rounded");
        productCard.innerHTML = `
          <img src="${product.thumbnail}" class="card-img-top" alt="${product.description}" style="height: 200px; object-fit: cover;">
            <div class="card-body">
                <h5 class="card-title">${product["item-title"]}</h5>
                <p class="card-text">${product.make}</p>
                <p class="card-text">$${product["unit-price"].toFixed(2)}</p>
                <button class="btn btn-primary add-cart">Add to Cart</button>
            </div>
        `;
        productCard.addEventListener("click", () => {

        })
        //  <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
        productCards.appendChild(productCard);
    });

}

function createCustomElement(parent, newElementName, content){
    const newElement = document.createElement(newElementName);
    newElement.textContent = content;
    parent.appendChild(newElement);
    return newElement;
}
