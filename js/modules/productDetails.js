import { fetchData } from "./fetchwrapper.js";

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

    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        productCard.innerHTML = `
            <img src="${product.thumbnail}" alt="${product.description}">
            <h3>${product["item-title"]}</h3>
            <p>${product.make}</p>
        <p>Price: $${product["unit-price"]}</p>
        `;
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
