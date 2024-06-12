document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('recipe-form');
    const recipeList = document.getElementById('recipe-list');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const recipeName = document.getElementById('recipe-name').value;
        const ingredients = document.getElementById('ingredients').value;
        const instructions = document.getElementById('instructions').value;

        if (recipeName && ingredients && instructions) {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<strong>${recipeName}</strong><br>Ingredients: ${ingredients}<br>Instructions: ${instructions}`;
            recipeList.appendChild(listItem);

            form.reset();
        }
    });
});
