document.addEventListener('DOMContentLoaded', () => {
    const recipeForm = document.getElementById('recipe-form');
    const recipesList = document.getElementById('recipes-list');

    recipeForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const recipeName = document.getElementById('recipe-name').value;
        const ingredients = document.getElementById('ingredients').value;
        const instructions = document.getElementById('instructions').value;

        const recipe = {
            name: recipeName,
            ingredients: ingredients,
            instructions: instructions
        };

        saveRecipe(recipe);
        displayRecipes();
        recipeForm.reset();
    });

    function saveRecipe(recipe) {
        let recipes = JSON.parse(localStorage.getItem('recipes')) || [];
        recipes.push(recipe);
        localStorage.setItem('recipes', JSON.stringify(recipes));
    }

    function displayRecipes() {
        let recipes = JSON.parse(localStorage.getItem('recipes')) || [];
        recipesList.innerHTML = '';
        recipes.forEach((recipe, index) => {
            const recipeDiv = document.createElement('div');
            recipeDiv.classList.add('recipe');
            recipeDiv.innerHTML = `
                <h3>${recipe.name}</h3>
                <p><strong>Ingredients:</strong> ${recipe.ingredients}</p>
                <p><strong>Instructions:</strong> ${recipe.instructions}</p>
                <button onclick="deleteRecipe(${index})">Delete</button>
            `;
            recipesList.appendChild(recipeDiv);
        });
    }

    window.deleteRecipe = function(index) {
        let recipes = JSON.parse(localStorage.getItem('recipes')) || [];
        recipes.splice(index, 1);
        localStorage.setItem('recipes', JSON.stringify(recipes));
        displayRecipes();
    }

    displayRecipes();
});