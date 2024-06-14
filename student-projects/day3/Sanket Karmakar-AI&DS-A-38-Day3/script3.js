function addRecipe() {
    const nameInput = document.getElementById('recipe-name');
    const ingredientsInput = document.getElementById('recipe-ingredients');
    const stepsInput = document.getElementById('recipe-steps');
    const recipeList = document.getElementById('recipe-list');
    
    if (nameInput.value.trim() === '' || ingredientsInput.value.trim() === '' || stepsInput.value.trim() === '') {
        alert('Please fill in all fields.');
        return;
    }
    
    const newRecipe = document.createElement('li');
    const ingredients = ingredientsInput.value.split(',').map(ingredient => ingredient.trim()).join(', ');
    
    newRecipe.innerHTML = `
        <h3>${nameInput.value}</h3>
        <p><strong>Ingredients:</strong> ${ingredients}</p>
        <p><strong>Steps:</strong> ${stepsInput.value}</p>
        <button class="delete" onclick="deleteRecipe(this)">Delete</button>
    `;
    
    recipeList.appendChild(newRecipe);
    nameInput.value = '';
    ingredientsInput.value = '';
    stepsInput.value = '';
}

function deleteRecipe(button) {
    const recipeItem = button.parentElement;
    recipeItem.remove();
}


