const recipes = [];

document.getElementById('addRecipeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const recipeName = document.getElementById('recipeNameInput').value;
    const ingredients = document.getElementById('ingredientsInput').value.split(',');
    const instructions = document.getElementById('instructionsInput').value;

    const recipe = { name: recipeName, ingredients: ingredients.map(ing => ing.trim()), instructions };
    recipes.push(recipe);
    displayRecipeList(recipes);

    // Clear the form inputs
    document.getElementById('recipeNameInput').value = '';
    document.getElementById('ingredientsInput').value = '';
    document.getElementById('instructionsInput').value = '';
});

document.getElementById('recipeFinderForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const searchQuery = document.getElementById('searchInput').value.toLowerCase();
    const filteredRecipes = recipes.filter(recipe => recipe.name.toLowerCase().includes(searchQuery));
    displayRecipeList(filteredRecipes);
});

document.getElementById('closeButton').addEventListener('click', function() {
    document.getElementById('recipeDetails').classList.add('hidden');
});

function displayRecipeList(recipeArray) {
    const recipeList = document.getElementById('recipeList');
    recipeList.innerHTML = '';

    recipeArray.forEach(recipe => {
        const recipeItem = document.createElement('div');
        recipeItem.className = 'recipeItem';
        recipeItem.textContent = recipe.name;
        recipeItem.addEventListener('click', function() {
            document.getElementById('recipeName').textContent = recipe.name;
            const ingredientList = document.getElementById('ingredientList');
            ingredientList.innerHTML = '';
            recipe.ingredients.forEach(function(ingredient) {
                const li = document.createElement('li');
                li.textContent = ingredient;
                ingredientList.appendChild(li);
            });
            document.getElementById('recipeInstructions').textContent = recipe.instructions;
            document.getElementById('recipeDetails').classList.remove('hidden');
        });
        recipeList.appendChild(recipeItem);
    });
}