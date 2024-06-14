// Recipe Data (Array of Objects)
let recipes = JSON.parse(localStorage.getItem("recipes")) || [
    {
        name: "Butter Chicken",
        ingredients: ["Chicken", "Tomato", "Onion", "Butter", "Spices"],
        instructions: "Marinate chicken in yogurt and spices. Cook in a creamy tomato sauce with butter."
    },
    {
        name: "Biryani",
        ingredients: ["Rice", "Meat/Vegetables", "Spices", "Yogurt"],
        instructions: "Layer rice and marinated meat/vegetables. Cook on low heat with fragrant spices."
    }
];

// Get references to DOM elements
const recipeList = document.getElementById("recipeList");
const recipeDetails = document.getElementById("recipeDetails");
const addRecipeForm = document.getElementById("addRecipeForm"); 
const recipeNameInput = document.getElementById("recipeNameInput");
const ingredientsInput = document.getElementById("ingredientsInput");
const instructionsInput = document.getElementById("instructionsInput");

// Function to display recipe details
function showRecipeDetails(recipe) {
    document.getElementById("recipeName").textContent = recipe.name;
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
    recipeList.appendChild(card);
}

// Add Recipe Form Handling
addRecipeForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    const newRecipe = {
        name: recipeNameInput.value,
        ingredients: ingredientsInput.value.split(",").map(item => item.trim()),
        instructions: instructionsInput.value
    };

    recipes.push(newRecipe);
    createRecipeCard(newRecipe);
    saveRecipesToLocalStorage(); // Save to local storage
    
    // Clear form fields
    recipeNameInput.value = "";
    ingredientsInput.value = "";
    instructionsInput.value = "";
});

// Close button event listener
document.getElementById("closeButton").addEventListener("click", () => {
    recipeDetails.classList.add("hidden");
});

// Initial Recipe Card Creation
recipes.forEach(createRecipeCard);

// Save recipes to local storage
function saveRecipesToLocalStorage() {
    localStorage.setItem("recipes", JSON.stringify(recipes));
}
