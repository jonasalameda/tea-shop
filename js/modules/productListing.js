import { fetchData } from "./fetchwrapper.js";
//import { addProduct } from "./cartScript.js"

let catalog = [];


export function initProductsListing(){
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

export  function addToCart(itemId) {
    const product = catalog.find( p => p.itemID === itemId );
    console.log(product);

}

function parseProducts(products){
    catalog = [...products.products];    
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
                <h5 class="card-title">${product.itemTitle}</h5>
                <p class="card-text">${product.make}</p>
                <p class="card-text">$${product.unitPrice.toFixed(2)}</p>
            </div>
        `;
        //
        //<button class="btn btn-primary add-cart" onclick="addToCart(${product.itemID})">Add to Cart</button>
        //<button class="btn btn-primary add-cart" onclick="alert('oiioi')">Click me </button>
        const btnViewDetails = createCustomElement(productCard, 'button', 'View details');
        btnViewDetails.classList = "btn btn-success add-cart";
        btnViewDetails.setAttribute('data-item-id', product.itemID);
        btnViewDetails.addEventListener('click', (event)=>{
                // Get the id of the selected item.
                const itemId = event.target.getAttribute("data-item-id");
                console.log(itemId);
                // Save into the localStorage.
            //save it in the local storage
            const selectedItem = JSON.stringify(product)
            localStorage.setItem("selected-item", selectedItem);
            // TODO: DO NOT FORGET             
            //redirect user to the details page
            window.location = 'details.html'
                
        });


        const btnAddToCart = createCustomElement(productCard, 'button', 'Add to cart');
        btnAddToCart.classList = "btn btn-primary add-cart";
        btnAddToCart.setAttribute('data-item-id', product.itemID);
        btnAddToCart.addEventListener('click', (event)=>{
                // Get the id of the selected item.
                const itemId = event.target.getAttribute("data-item-id");
                console.log(itemId);
                // Save into the localStorage.
                //save it in the local storage
            const selectedItem = JSON.stringify(product)
            localStorage.setItem("selected-item", selectedItem);

        });


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
