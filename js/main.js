import { initProducts } from "./modules/productDetails.js";



document.addEventListener("DOMContentLoaded", initApp);

function initApp() {
    console.log("App initialized");

    initProducts();
    // const cartButton = document.getElementById("cart-button");
    // cartButton.addEventListener("click", toggleCart);
}
