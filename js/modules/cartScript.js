const cart = []

document.addEventListener("DOMContentLoaded", initCart);

export function initCart() {
    let index = 1

    cart.forEach((product) => {
        const items = document.querySelector("#cart-items")
        const productHTML = document.createElement("div")
        productHTML.classList.add("row", "product-item-cart")
        
        productHTML.innerHTML = `
            <div class="col">
                <img src="${product.thumbnail}" width="150px" height="180px">
              </div>
              <div class="col">
                <h3 class="h3">${product.name}</h3>
                <h4 class="h4">Price: ${product.price}</h4>
              </div>
                <div class="col-3">
                  <div class="input-group">
                    <button class="btn add-button input-group-text" id="add${index}"> + </button>
                    <input class="form-control" type="number" name="quantity" id="quantity${index}" size="" aria-describedby="add${index} subtract${index}">
                    <button class="btn subtract-button input-group-text" id="subtract${index}"> - </button>
                  </div>
                    <br>
                    <button class="btn remove-button"> 🗑️ </button>                    
                </div>`;
        
        items.appendChild(productHTML)
    })
}

export function addProduct(name, price, thumbnail) {
    const product = {
        "name": name,
        "price": parseInt(price),
        "thumbnail": thumbnail
    }
    
    cart.push(product)
}

function totalPrice() {
    let finalPrice = 0

    cart.forEach((product) => {
        finalPrice += product.price
    })

    document.querySelector("#total-amount").textContent = finalPrice
}
