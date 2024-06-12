recipe=document.getElementById("recipenameInput")
ingredients=document.getElementById("ingredientsInput")
instructions=document.getElementById("instructionsInput")
submit=document.getElementById("submit")

recipeList=document.getElementById("recipe_container")
ingredientList=document.getElementById("ingredientList")
recipes=[]

function onclick(recipe){
    document.getElementById("recipeName").textContent = recipe.value;
    ingredientList.innerHTML = ""; 

    recipe.ingredients.forEach(ingredient => {
            let listItem = document.createElement("li");
            listItem.textContent = ingredient;
            ingredientList.appendChild(listItem);
    });

    document.getElementById("recipeInstructions").textContent = recipe.instruction;
    recipeDetails.classList.remove("hidden");
}

document.getElementById("closeButton").addEventListener("click", () => {
    recipeDetails.classList.add("hidden");
});


function addRecipe(recipe){
    let card = document.createElement("div");
    card.classList.add("recipe-card");
    card.textContent = recipe.name;
    card.addEventListener("click", () => onclick(recipe));
    recipeList.appendChild(card);

}

submit.addEventListener('click',function(event){
    event.preventDefault(); // Prevent default form submission

    let newRecipe={
        name:recipe.value ,
        ingredients:ingredients.value.split(",") ,
        instruction:instructions.value 
    };

    addRecipe(newRecipe); 


    recipe.value = "";
    ingredients.value = "";
    instructions.value = "";
    });