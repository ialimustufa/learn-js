document.getElementById('recipeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const recipeName = document.getElementById('recipeName').value;
    const ingredients = document.getElementById('ingredients').value.split(',').map(ing => ing.trim());
    const instructions = document.getElementById('instructions').value;

    if (recipeName && ingredients.length && instructions) {
        const recipeList = document.getElementById('recipeList');
        
        const li = document.createElement('li');
        
        const h3 = document.createElement('h3');
        h3.textContent = recipeName;
        li.appendChild(h3);
        
        const pIngredients = document.createElement('p');
        pIngredients.textContent = `Ingredients: ${ingredients.join(', ')}`;
        li.appendChild(pIngredients);
        
        const pInstructions = document.createElement('p');
        pInstructions.textContent = `Instructions: ${instructions}`;
        li.appendChild(pInstructions);
        
        recipeList.appendChild(li);

        // Clear form inputs
        document.getElementById('recipeForm').reset();
    } else {
        alert('Please fill out all fields.');
    }
});
