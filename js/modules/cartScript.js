let cart = []


document.addEventListener("DOMContentLoaded", initCart);

export function initCart() {
    let index = 1

    cart = JSON.parse(localStorage.getItem("cart")) || [];
    const items = document.querySelector("#cart-items")

    let totalAmount = 0;
    cart.forEach((product, index) => {
        const productHTML = document.createElement("div")
        productHTML.classList.add("row", "product-item-cart")
        
        productHTML.innerHTML = `
            <div class="col">
            <hr>
                <img src="${product.thumbnail}" width="150px" height="180px">
              </div>
              <div class="col">
                <h3 class="h3">${product.itemTitle}</h3>
                <h4 class="h4">Price: ${product.unitPrice}</h4>
                <h5> Quantity: ${product.quantity}</h5> 
              </div>
                <div class="col-3">
                  <div class="input-group">
                    <button class="btn add-button input-group-text" id="add${index}"> + </button>
                    <input class="form-control" type="number" name="quantity" id="quantity${index}" size="" aria-describedby="add${index} subtract${index}">
                    <button class="btn subtract-button input-group-text" id="subtract${index}"> - </button>
                  </div>
                    <br>
                    <button id="remove" class="btn remove-button"> 🗑️ </button>  
                    </hr>                  
                </div>`;
                totalAmount += (product.unitPrice * product.quantity);
        
        items.appendChild(productHTML)
    })

    const totPrice = document.getElementById("total-amount");
    totPrice.textContent = `$${totalAmount.toFixed(2)}`;
}

export function addProduct(name, price, thumbnail) {
    const product = {
        "name": name,
        "price": parseInt(price),
        "thumbnail": thumbnail
    }
    
    cart.push(product)
}

// function totalPrice() {
//     let finalPrice = 0

//     cart.forEach((product) => {
//         finalPrice += product.price
//     })

//     document.querySelector("#total-amount").textContent = finalPrice
// }


//its just extra lol
const btn = document.querySelector("#checkout-button");
btn.addEventListener("click", () => {
    const defaults = {
        spread: 360,
        ticks: 100,
        gravity: 0,
        decay: 0.94,
        startVelocity: 30,
        shapes: ["star"],
        colors: ["FFE400", "FFBD00", "E89400", "FFCA6C", "FDFFB8"],
    };

    confetti({
    ...defaults,
    particleCount: 50,
    scalar: 2,
    });

    confetti({
    ...defaults,
    particleCount: 25,
    scalar: 3,
    });

    confetti({
    ...defaults,
    particleCount: 10,
    scalar: 4,
    });
});
