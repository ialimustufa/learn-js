document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("recipeMakerForm").addEventListener('submit', function(event) {
        event.preventDefault();
        
        const recipeName = document.getElementById("recipeName").value.trim();
        const ingredientsList = document.getElementById('recipeIngredients').value.split(',').map(ingrd => ingrd.trim()).filter(ingrd => ingrd !== "");
        const recipeProcess = document.getElementById('recipeMakingSteps').value.trim();

        if (recipeName === "" || ingredientsList.length === 0 || recipeProcess === "") {
            alert("Please fill in all fields.");
            return;
        }
        
        let newRecipe = new Recipe(recipeName, ingredientsList, recipeProcess);
        storeData(newRecipe);
        displayRecipes();
        clearForm();

        alert("Recipe added successfully!");
    });
    
    displayRecipes();
});

const displayRecipes = () => {
    const recipeArea = document.getElementById("recipeList");
    let data = getData();
    if (data && data.length > 0) { // Check if there is data and it's not empty
        let dataParsed = JSON.parse(data);
        let values = ``;
        dataParsed.forEach((recipe, index) => {
            values += `
                <div class="recipeInfoContainer">
                    <div class="recipeInfo" data-index="${index}">
                        <h3>${recipe.recipeName}</h3>
                        <p><strong>Ingredients:</strong> ${recipe.recipeIngrd.join(', ')}</p>
                        <p><strong>Process:</strong> ${recipe.recipeProcess}</p>
                    </div>
                    <button class="deleteRecipe" data-index="${index}">Delete</button>
                </div>`;
        });
        recipeArea.innerHTML = values;

        document.querySelectorAll('.deleteRecipe').forEach(button => {
            button.addEventListener('click', function() {
                const index = this.getAttribute('data-index');
                deleteRecipe(index);
            });
        });
    } else {
        recipeArea.innerHTML = "<p>No Recipes to Show</p>";
    }
};

function Recipe(recipeName, recipeIngrd, recipeProcess) {
    this.recipeName = recipeName;
    this.recipeIngrd = recipeIngrd;
    this.recipeProcess = recipeProcess;
}

const storeData = (newData) => {
    let oldData = getData();
    if (oldData) {
        let oldDataParsed = JSON.parse(oldData);
        oldDataParsed.push(newData);
        let data = JSON.stringify(oldDataParsed);
        setData(data);
    } else {
        let data = [];
        data.push(newData);
        data = JSON.stringify(data);
        setData(data);
    }
};

const deleteRecipe = (index) => {
    let data = getData();
    let dataParsed = JSON.parse(data);
    dataParsed.splice(index, 1);
    setData(JSON.stringify(dataParsed));
    displayRecipes();
    document.getElementById("recipeLoad").innerHTML = "";
    alert("Recipe deleted successfully!");
};

const getData = () => {
    return localStorage.getItem("recipes");
};

const setData = (data) => {
    localStorage.setItem("recipes", data);
    return true;
};

const clearForm = () => document.getElementById('recipeMakerForm').reset();
