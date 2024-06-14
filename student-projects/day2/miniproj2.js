let recipes = [
    {
        name: "Banana Pancakes",
        ingredients: ["Rip Banana", "Egg", "Baking Powder"],
        instructions: "Crack the eggs into the bowl with the mashed banana and add the baking powder. Mix well until you have a smooth batter and then cook."
    },
    {
        name: "Biryani",
        ingredients: ["Rice", "Vegetables", "Spices", "Yogurt"],
        instructions: "Layer rice and marinated vegetables. Cook on low heat with fragrant spices."
    },
    {
        name: "Indian Classic Tea",
        ingredients: ["Milk", "Water", "Tea leaves", "Sugar","ginger","cloves"],
        instructions: "Boil water and milk then add tea leaves,sugar and little bit of crushed ginger and clove."
    }
];

const recipeList = document.getElementById("recipeList");
const recipeDetails = document.getElementById("recipeDetails");
const addRecipeForm = document.getElementById("addRecipeForm"); 
const recipeNameInput = document.getElementById("recipeNameInput");
const ingredientsInput = document.getElementById("ingredientsInput");
const instructionsInput = document.getElementById("instructionsInput");

function showRecipeDetails(recipe) {
    document.getElementById("addRecipeForm").textContent = recipe.name;
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

function createRecipeCard(recipe) {
    const card = document.createElement("div");
    card.classList.add("recipe-card");
    card.textContent = recipe.name;
    card.addEventListener("click", () => showRecipeDetails(recipe));
    recipeList.appendChild(card);
}

addRecipeForm.addEventListener("submit", function(event) {
    event.preventDefault(); 

    const newRecipe = {
        name: recipeNameInput.value,
        ingredients: ingredientsInput.value.split(",").map(item => item.trim()),
        instructions: instructionsInput.value
    };
    
    recipes.push(newRecipe); 
    createRecipeCard(newRecipe); 

    recipeNameInput.value = "";
    ingredientsInput.value = "";
    instructionsInput.value = "";
});

document.getElementById("closeButton").addEventListener("click", () => {
    recipeDetails.classList.add("hidden");
});
 
recipes.forEach(createRecipeCard);
