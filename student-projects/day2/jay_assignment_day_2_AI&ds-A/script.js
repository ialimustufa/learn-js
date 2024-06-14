document.getElementById('add-recipe-btn').addEventListener('click', addRecipe);

function addRecipe() {
    const title = document.getElementById('title').value;
    const ingredients = document.getElementById('ingredients').value;
    const instructions = document.getElementById('instructions').value;

    if (title && ingredients && instructions) {
        const recipeList = document.getElementById('recipe-list');
        const recipeItem = document.createElement('li');

        const recipeTitle = document.createElement('h3');
        recipeTitle.textContent = title;
        recipeItem.appendChild(recipeTitle);

        const recipeIngredients = document.createElement('p');
        recipeIngredients.textContent = `Ingredients: ${ingredients}`;
        recipeItem.appendChild(recipeIngredients);

        const recipeInstructions = document.createElement('p');
        recipeInstructions.textContent = `Instructions: ${instructions}`;
        recipeItem.appendChild(recipeInstructions);

        recipeList.appendChild(recipeItem);

        document.getElementById('title').value = '';
        document.getElementById('ingredients').value = '';
        document.getElementById('instructions').value = '';
    } else {
        alert('Please fill out all fields');
    }
}
