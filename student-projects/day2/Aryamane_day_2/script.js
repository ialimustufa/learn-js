// Recipe Data (Array of Objects)
let recipes = [
    {
        name: "Omlette",
        ingredients: ["Egg", "Oil", "Salt", "Spices"],
        instructions: "Add oil To a pan and let it heat. After a while, crack an egg and add salt and spices and letr it cook for 5 minutes. After that flip the egg. Let it cook on the other side as well and then serve."
    },
    {
        name: "Roti",
        ingredients: ["Wheat flour", "Water", "Oil", "Salt"],
        instructions: "Add wheat flour, water, little bit of oil and salt and knead it in it a dough. Create small dough balls and using a rolling pin make round rotis. Then cook them on a pan."
    },

    {
        name: "Tea",
        ingredients: ["Tea leaves", "Water", "Sugar", "Milk"],
        instructions: "Add water to a utensil. Add tea leaves and sugar and let it boil. At the end add milk, boil for a few minutes and then serve!"
    },
    {
        name: "Maggi",
        ingredients: ["Maggi cake", "Maggi tastemaker", "Water", "Spices"],
        instructions: "Add water to a utensil. Add maggi cake and tastemaker and let it boil. Add spices according to your taste and let it boil for a few minutes. "
    }

];

// Get references to DOM elements
const List = document.getElementById("List");
const recipeDetails = document.getElementById("recipeDetails");
const addRecipeForm = document.getElementById("addRecipeForm"); 
const NewRecipeIn = document.getElementById("NewRecipeIn");
const ingredientsInput = document.getElementById("ingredientsInput");
const instructionsInput = document.getElementById("instructionsInput");

// Function to display recipe details
function showRecipeDetails(recipe) {
    document.getElementById("NewRecipe").textContent = recipe.name;
    const ingredientList = document.getElementById("ingredientList");
    ingredientList.innerHTML = ""; 
    recipe.ingredients.forEach(ingredient => {
        const listItem = document.createElement("li");
        listItem.textContent = ingredient;
        ingredientList.appendChild(listItem);
    });
    document.getElementById("recipeInstructions").textContent = recipe.instructions;
    recipeDetails.classList.remove("hidden");
}

// Function to create and add a recipe card
function createRecipeCard(recipe) {
    const card = document.createElement("div");
    card.classList.add("recipe-card");
    card.textContent = recipe.name;
    card.addEventListener("click", () => showRecipeDetails(recipe));
    List.appendChild(card);
}


// Add Recipe Form Handling (Revised)
addRecipeForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    const newRecipe = {
        name: NewRecipeIn.value,
        ingredients: ingredientsInput.value.split(",").map(item => item.trim()),
        instructions: instructionsInput.value
    };
    
    recipes.push(newRecipe); 
    createRecipeCard(newRecipe); 
    
    // Clear form fields
    NewRecipeIn.value = "";
    ingredientsInput.value = "";
    instructionsInput.value = "";
});

// Close button event listener (No Changes)
document.getElementById("closeButton").addEventListener("click", () => {
    recipeDetails.classList.add("hidden");
});


// Initial Recipe Card Creation 
recipes.forEach(createRecipeCard);

/* 
Advance - store in local memory

function loadRecipesFromLocalStorage() {
    const storedRecipes = localStorage.getItem("recipes");
        recipes = JSON.parse(storedRecipes);
        recipes.forEach(createRecipeCard); // Create cards for stored recipes
    }

function saveRecipesToLocalStorage() {
    localStorage.setItem("recipes", JSON.stringify(recipes));
}

loadRecipesFromLocalStorage();

Add this line in the add recipie

*/