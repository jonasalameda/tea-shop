import { fetchData,  } from "./fetchwrapper.js"; 





export function initRenderDrinks(){
    console.log("Loading drinks...");
    getDrinks();
    
}

async function getDrinks() {
    try {
        const drinks = await fetchData("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita");
        // console.log(drinks)        
        parseDrinks(drinks); 
    } catch (error) {
        console.error(error);
    }
}


function parseDrinks(drinks){
    // drinks = [];    
    console.log(drinks);
    console.log(drinks.drinks.strDrink)
    const drinkCards = document.getElementById("seli-place-holder");
    drinkCards.classList.add("row", "justify-content-evenly", "flex-wrap");

    drinks.drinks.forEach(drink => {
        const drinkCard = document.createElement("div");
        drinkCard.classList.add("col-8","card","col-sm-6", "col-md-4","col-lg-3", "m-2", "p-2", "text-center", "shadow-sm");
        drinkCard.innerHTML = `
          <img src="${drink.strDrinkThumb}" class="card-img-top" alt="${drink.strImageSource}" style="height: 200px; object-fit: cover;">
            <div class="card-body">
                <h5 class="card-title">${drink.strDrink}</h5>
                <p class="card-text">Main ingredients: ${drink.strIngredient1}, ${drink.strIngredient2}, ${drink.strIngredient3}, ${drink.strIngredient4}</p>
                <p class="card-text">${drink.strInstructions}</p>

            </div>`;
        
        drinkCard.addEventListener("click", () => {
            
        })
        //  <button class="add-to-cart" data-id="${drink.id}">Add to Cart</button>
        drinkCards.appendChild(drinkCard);
    });

    
}

