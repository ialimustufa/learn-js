let recipes = [
    {
        name: "Matar Panner",
        ingredients: ["Panner", "Tomato", "Onion", "Butter", "Spices", "Peas"],
        instructions: "Marinate Panner in yogurt and spices. Cook in a creamy tomato sauce with butter."
    },
    {
        name: "Biryani",
        ingredients: ["Rice", "Meat/Vegetables", "Spices", "Yogurt"],
        instructions: "Layer rice and marinated meat/vegetables. Cook on low heat with fragrant spices."
    }
];

const recipeList = document.getElementById("recipeList");
const recipeDetails = document.getElementById("recipeDetails");
const addRecipeForm = document.getElementById("addRecipeForm");
const recipeNameInput = document.getElementById("recipeNameInput");
const ingredientsInput = document.getElementById("ingredientsInput");
const instructionsInput = document.getElementById("instructionsInput");

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
