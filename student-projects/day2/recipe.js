const recipeForm = document.getElementById('recipeForm');
const recipeList = document.getElementById('recipeList');
const modalTitle = document.getElementById('modalTitle');
const modalIngredients = document.getElementById('modalIngredients');
const modalDescription = document.getElementById('modalDescription');
const modal = document.getElementById('recipeDetails');
const closeModal = document.getElementsByClassName('close')[0];

let recipes = JSON.parse(localStorage.getItem('recipes')) || [];

// Function to add a new recipe
function addRecipe(event) {
    event.preventDefault();

    const recipeName = document.getElementById('recipeName').value;
    const ingredients = document.getElementById('ingredients').value;
    const description = document.getElementById('description').value;

    const recipe = { name: recipeName, ingredients, description };
    recipes.push(recipe);
    localStorage.setItem('recipes', JSON.stringify(recipes));
    displayRecipes();
    recipeForm.reset();
}

// Function to display recipes
function displayRecipes() {
    recipeList.innerHTML = '';
    recipes.forEach((recipe, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = recipe.name;
        listItem.addEventListener('click', () => showRecipeDetails(index));
        recipeList.appendChild(listItem);
    });
}

// Function to show recipe details in modal
function showRecipeDetails(index) {
    const recipe = recipes[index];
    modalTitle.textContent = recipe.name;
    modalIngredients.textContent = 'Ingredients: ' + recipe.ingredients;
    modalDescription.textContent = 'Description: ' + recipe.description;
    modal.style.display = 'block';
}

// Event to close the modal
closeModal.onclick = function() {
    modal.style.display = 'none';
};

// Event to close the modal if clicked outside of it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};

// Event to handle form submission
recipeForm.addEventListener('submit', addRecipe);

// Display the initial list of recipes on page load
window.onload = displayRecipes;