document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("recipeMakerForm").addEventListener('submit', function(event) {
        event.preventDefault();
        const recipeName = document.getElementById("recipeName").value;
        const ingredientsList = document.getElementById('recipeIngredients').value.split(',').map(ing => ing.trim());
        const recipeProcess = document.getElementById('recipeMakingSteps').value;

        let newRecipe = { recipeName, ingredientsList, recipeProcess };
        storeData(newRecipe);
        displayRecipes();
        this.reset();
    });
    displayRecipes();
});

function displayRecipes() {
    const recipeArea = document.getElementById("recipeList");
    let data = getData();
    if (data) {
        let dataParsed = JSON.parse(data);
        recipeArea.innerHTML = dataParsed.map((recipe, index) =>
            `<div class="recipeInfo" data-index="${index}">${recipe.recipeName}</div>`
        ).join('');

        document.querySelectorAll('.recipeInfo').forEach(item => {
            item.addEventListener('click', function() {
                const index = this.getAttribute('data-index');
                displayRecipeDetails(index);
            });
        });
    } else {
        recipeArea.innerHTML = "<p>No Recipes to Show</p>";
    }
}

function displayRecipeDetails(index) {
    let data = getData();
    let dataParsed = JSON.parse(data);
    const recipe = dataParsed[index];

    const recipeLoadArea = document.getElementById("recipeLoad");
    recipeLoadArea.innerHTML = `
        <h3>${recipe.recipeName}</h3>
        <p><strong>Ingredients:</strong> ${recipe.ingredientsList.join(', ')}</p>
        <p><strong>Process:</strong> ${recipe.recipeProcess}</p>
    `;
}

function storeData(newData) {
    let oldData = getData();
    let data = oldData ? JSON.parse(oldData) : [];
    data.push(newData);
    localStorage.setItem("recipes", JSON.stringify(data));
}

function getData() {
    return localStorage.getItem("recipes");
}
