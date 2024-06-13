let recipes = [];

function addRecipe() {
    const mealType = document.getElementById('mealType').value;
    const recipeName = document.getElementById('recipeName').value;
    const instructions = document.getElementById('instructions').value;

    if (mealType && recipeName && instructions) {
        recipes.push({ mealType: mealType, name: recipeName, instructions: instructions });
        document.getElementById('mealType').value = 'breakfast';
        document.getElementById('recipeName').value = '';
        document.getElementById('instructions').value = '';
        alert("Recipe added successfully!");
    } else {
        alert("Please fill out all fields.");
    }
}

function searchRecipe() {
    const searchName = document.getElementById('searchRecipeName').value.toLowerCase();
    const recipeInstructionsDiv = document.getElementById('recipeInstructions');
    recipeInstructionsDiv.innerHTML = '';

    const recipe = recipes.find(r => r.name.toLowerCase() === searchName);
    if (recipe) {
        recipeInstructionsDiv.innerHTML = `
            <h3>${recipe.name} (${recipe.mealType})</h3>
            <p>${recipe.instructions}</p>
        `;
    } else {
        recipeInstructionsDiv.innerHTML = "<p>Recipe not found.</p>";
    }
}
