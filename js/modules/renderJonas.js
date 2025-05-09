import { fetchData } from "./fetchwrapper.js"; 

export function initRenderProducts(){
    console.log("Loading foods...");
    getProducts();
}

async function getProducts() {
    try {
        const drinks = await fetchData("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood");
        // console.log(drinks)        
        parseProducts(drinks); 
    } catch (error) {
        console.error(error);
    }
}

function parseProducts(products) {
    const productCards = document.getElementById("jonas-place-holder");
    productCards.classList.add("row", "justify-content-evenly", "flex-wrap");

    products.meals.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("col-8","card","col-sm-6", "col-md-4","col-lg-3", "m-2", "p-2", "text-center", "shadow-sm");
        productCard.innerHTML = `
          <img src="${product.strMealThumb}" class="card-img-top" alt="${product.strImageSource}" style="height: 200px; object-fit: cover;">
            <div class="card-body">
                <h5 class="card-title">${product.strMeal}</h5>
                <p class="card-text">Instructions: ${product.strIngredient1}, ${product.strIngredient2}, ${product.strIngredient3}, ${product.strIngredient4}</p>
                <p class="card-text">${product.strInstructions}</p>
            </div>`;

        productCards.appendChild(productCard);
    });
}
