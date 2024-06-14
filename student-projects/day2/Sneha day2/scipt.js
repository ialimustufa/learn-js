

document.addEventListener('DOMContentLoaded', function(){
    document.getElementById("recipeMakerForm").addEventListener('submit', function(event){
        event.preventDefault();

        const recipeName = document.getElementById("recipeName").value;

        const ingredientsList = document.getElementById('recipeIngredients').value.split(',').filter(ingrd => ingrd.trim() !== "");
        
        const recipeProcess = document.getElementById('recipeMakingSteps').value;

        let newRecipe = new DataView(recipeName, ingredientsList, recipeProcess)
        console.log(newRecipe)
        storeData(newRecipe);
        displayRecipes()
        clearForm();


    });
    displayRecipes();
});


const displayRecipes = () => {
    const recipeArea = document.getElementById("recipeList");
    let data = getData();
    if (data) {
        let dataParsed = JSON.parse(data);
        let values = ``;
        dataParsed.forEach((recipe, index) => {
            values += <span class="recipeInfo" data-index="${index}" style="cursor: pointer; display: block; margin: 5px 0;">${recipe.recipeName}</span>;
        });
        recipeArea.innerHTML = values;

    
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

function DataView(recipeName, recipeIngrd, recipeProcess) {
    this.recipeName = recipeName;
    this.recipeIngrd = recipeIngrd;
    this.recipeProcess = recipeProcess;
}

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