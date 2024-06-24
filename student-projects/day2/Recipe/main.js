
document.addEventListener('DOMContentLoaded', function(){
    document.getElementById("recipeMakerForm").addEventListener('submit', function(event){
        event.preventDefault();
        // Get inputs of recipe name,ingredients list and process of making

        // Recipe Name
        const recipeName = document.getElementById("recipeName").value;

        // Recipe Ingredients List
        const ingredientsList = document.getElementById('recipeIngredients').value.split(',').filter(ingrd => ingrd.trim() !== "");
        // console.log(ingredientsList)

        // Recipe Making Process
        const recipeProcess = document.getElementById('recipeMakingSteps').value;

        let newRecipe = new DataView(recipeName, ingredientsList, recipeProcess)
        console.log(newRecipe)
        storeData(newRecipe);
        displayRecipes()
        clearForm();


    });
    displayRecipes();
});

//diplay available recipes

const displayRecipes = () => {
    const recipeArea = document.getElementById("recipeList");
    let data = getData();
    if (data) {
        let dataParsed = JSON.parse(data);
        let values = ``;
        dataParsed.forEach((recipe, index) => {
            values += `<span class="recipeInfo" data-index="${index}" style="cursor: pointer; display: block; margin: 5px 0;">${recipe.recipeName}</span>`;
        });
        recipeArea.innerHTML = values;

        // Attach click event listeners to the recipe names
        document.querySelectorAll('.recipeInfo').forEach(item => {
            item.addEventListener('click', function() {
                const index = this.getAttribute('data-index');
                displayRecipeDetails(index);
            });
        });
    } else {
        recipeArea.innerHTML = "NO Recipes to Show";
    }
};

// Function to display recipe details
const displayRecipeDetails = (index) => {
    let data = getData();
    let dataParsed = JSON.parse(data);
    const recipe = dataParsed[index];

    const recipeLoadArea = document.getElementById("recipeLoad");
    recipeLoadArea.innerHTML = `
        <h3>${recipe.recipeName}</h3>
        <p><strong>Ingredients:</strong> ${recipe.recipeIngrd.join(',<br> ')}</p>
        <p><strong>Process:</strong> ${recipe.recipeProcess}</p>
    `;
};



// constructor for Recipe Data
function DataView(recipeName, recipeIngrd, recipeProcess) {
    this.recipeName = recipeName;
    this.recipeIngrd = recipeIngrd;
    this.recipeProcess = recipeProcess;
}

// Function to Store Data
const storeData = (newData)=>{
    
    let oldData = getData();
    if (oldData){
        let oldDataParsed = JSON.parse(oldData);

        oldDataParsed.push(newData);
        data = JSON.stringify(oldDataParsed);
        setData(data);
    }else{
        let data = [];
        data.push(newData);
        data = JSON.stringify(data);
        setData(data);
    }
};

const getData= ()=>{
    return localStorage.getItem("recipes");
}
const setData= (data)=>{
    localStorage.setItem("recipes", data);
    return true;
}

const clearForm = ()=> document.getElementById('recipeMakerForm').reset()