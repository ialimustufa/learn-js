
let recipes = [
    {
        name: "Sandwich",
        ingredients: ["Bread", "Tomato", "Onion", "Butter", "Cucumber","Tomato Ketchup"],
        instructions: "Apply Butter on the Bread. Place all the vegetables mentioned in the ingredients. Toast the sandwich in the toaster. Serve it with ketchup and enjoy"
    },
    {
        name: "Burger",
        ingredients: ["Burger Bun", "Onion", "Aloo Patty", "Mayonnaise", "Chipotle Sauce", "Tomato", "Chillie Flakes", "Oregano"],
        instructions: "Divide the burger bun in two halves and toast them equally. Apply mayonnaise on the inner side of both the halves. Then add tomatoes and sprinkle some oregano over it. Then place Aloo patty over it. Apply chipotle sauce over it and place Onion slices. Your Burger is ready!!"
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

