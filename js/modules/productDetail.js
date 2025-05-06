export function initProductDetails(){
    const name = document.querySelector("#product-name");
    const desc = document.querySelector("#desc");
    const price = document.querySelector("#price");
    const img = document.querySelector("#thumbnail")
    
    const data = JSON.parse(localStorage.getItem("selected-item"));

    name.textContent = data.itemTitle;
    desc.textContent = data.description;
    price.textContent = "$" + data.unitPrice;
    img.src = data.thumbnail;
}
