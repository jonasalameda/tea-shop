import { addToCart } from "./productListing.js";
import { fetchData } from "./fetchwrapper.js";

let catalog = [];

async function setCatalog(){
 try {
    const products = await fetchData("/data/catalog.json");
    // parseProducts(products);
    catalog = products;
    console.log(catalog);
    
  } catch (error) {
    console.error(error);
  }
}
export function initProductDetails(){
    // console.log("lalal");
    // console.log(catalog);
    setCatalog();
    
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
    addBtn.setAttribute("data-item-id", data.itemID);
    addBtn.addEventListener("click", (event) => {
       
         const itemNo = event.target.getAttribute("data-item-id");
        addToCart(itemNo, catalog);
    });    
   
   
}
