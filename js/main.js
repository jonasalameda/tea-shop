import { initProducts } from "./modules/productDetails.js";



document.addEventListener("DOMContentLoaded", initApp);
const docPage = document.querySelector("[data-page]");
function initApp() {

    console.log("App initialized");

    switch(docPage){
        case "homePage":
            console.log("Home page loaded");
            initProducts();
            break;
        case "productDetailPage":
            console.log("Product detail page loaded");
            initProductDetails();
            break;
        case "cartPage":
            console.log("Cart page loaded");
            initCart();
            break;
        case "conatctPage":
            console.log("Contact page loaded");
            initContact();
            break;
        case "aboutUsPage":
            console.log("About us page loaded");
            initAboutUs();
            break;
        case "loginPage":
            console.log("Login page loaded");
            break;

    }

    initProducts();
    // const cartButton = document.getElementById("cart-button");
    // cartButton.addEventListener("click", toggleCart);
}
