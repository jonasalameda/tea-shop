let cart = []

export function initCart() {
    let index = 1

    cart = JSON.parse(localStorage.getItem("cart")) || [];
    const items = document.getElementById("cart-items")

    let totalAmount = 0;
    cart.forEach((product, index) => {
        const productHTML = document.createElement("div")
        productHTML.classList.add("row", "product-item-cart")
        
        productHTML.innerHTML = `
            <div class="col">
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
                    <button id="remove${index}" class="btn remove-button"> 🗑️ </button>  
                                   
                </div>
                <hr>`;
                totalAmount += (product.unitPrice * product.quantity);

        // productHTML.querySelector(`#quantity${index}`).addEventListener("change", (e) => {
        //   const quantity = e.target.value;
        //   if (quantity < 1) {
        //     alert("Quantity must be at least 1");
        //     e.target.value = 1;
        //   } else {
        //     product.quantity = quantity;
        //     localStorage.setItem("cart", JSON.stringify(cart));
        //   }
        // });
        // productHTML.querySelector(`#quantity${index}`).value = product.quantity;
        items.appendChild(productHTML)

        items.querySelector(`#remove${index}`).addEventListener("click", () => {
          deleteProduct(product.itemID);
        })
        items.querySelector(`#subtract${index}`).addEventListener("click", () => {
          substractQuantity(product.itemID);
        });
        
        //TODO incomplete subtract and add buttons
      // const subtractQuantityBtn = document.getElementById(`subtract${index}`);
      // substractQuantityBtn.addEventListener('click', substractQuantity() )

    });


 

    const totPrice = document.getElementById("total-amount");
    totPrice.textContent = `$${totalAmount.toFixed(2)}`;
    
    
    //its just extra lol
const checkBtn = document.getElementById("checkout-button");
checkBtn.addEventListener("click", ()=>{
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
    particleCount: 70,
    scalar: 2,
    });

    confetti({
    ...defaults,
    particleCount: 65,
    scalar: 3,
    });

    confetti({
    ...defaults,
    particleCount: 10,
    scalar: 2,
    });
});
}

export function addProduct(name, price, thumbnail) {
    const product = {
        "name": name,
        "price": parseInt(price),
        "thumbnail": thumbnail
    }
    
    cart.push(product)
}

function substractQuantity(itemNo){
  const inCartItems = JSON.parse(localStorage.getItem("cart"));
  const product = inCartItems.find(p => p.itemID == itemNo);
  
  console.log(product);

  if(!product){
    console.error("Product is not in your cart");
    alert("product not in cart");
    return;
  }
  if(product.quantity <= 1){
    deleteProduct(itemNo);
    return;
  }

  inCartItems.find(p => p.itemID == itemNo).quantity = product.quantity - 1;
  cart = inCartItems;
  localStorage.setItem("cart", JSON.stringify(cart));
  location.reload();
}

function deleteProduct(itemNo){
  const inCartItems = JSON.parse(localStorage.getItem("cart"));
  const product = inCartItems.find(p => p.itemID == itemNo);
  
  if(!product){
    console.error("Product is not in your cart");
    alert("product not in cart");
  }

  inCartItems.splice(inCartItems.indexOf(product), 1);
  console.log(inCartItems);
  cart = inCartItems;
  localStorage.setItem("cart", JSON.stringify(cart));
  location.reload();
}
