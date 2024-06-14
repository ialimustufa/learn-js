document.getElementById('recipe-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const recipeName = document.getElementById('recipe-name').value;
    const ingredients = document.getElementById('ingredients').value;
    const instructions = document.getElementById('instructions').value;

    // Create a new recipe element
    const recipeElement = document.createElement('div');
    recipeElement.classList.add('recipe');
    recipeElement.innerHTML = `
        <h3>${recipeName}</h3>
        <p><strong>Ingredients:</strong> ${ingredients}</p>
        <p><strong>Instructions:</strong> ${instructions}</p>
    `;

    // Add the recipe to the list
    document.getElementById('recipe-list').appendChild(recipeElement);

    // Clear the form
    document.getElementById('recipe-form').reset();
});
