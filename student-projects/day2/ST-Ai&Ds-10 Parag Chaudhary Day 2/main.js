document.addEventListener('DOMContentLoaded', function() {
  const recipeForm = document.getElementById("recipeMakerForm");
  const recipeArea = document.getElementById("recipeList");
  const recipeLoadArea = document.getElementById("recipeLoad");

  recipeForm.addEventListener('submit', function(event) {
      event.preventDefault();

      // Get inputs of recipe name, ingredients list, and process of making
      const recipeName = document.getElementById("recipeName").value.trim();
      const ingredientsList = document.getElementById('recipeIngredients').value.split(',').map(ing => ing.trim()).filter(ing => ing !== "");
      const recipeProcess = document.getElementById('recipeMakingSteps').value.trim();

      if (recipeName && ingredientsList.length && recipeProcess) {
          const newRecipe = new Recipe(recipeName, ingredientsList, recipeProcess);
          storeData(newRecipe);
          displayRecipes();
          clearForm();
      } else {
          alert("Please fill in all fields correctly.");
      }
  });

  displayRecipes();

  // Constructor for Recipe Data
  function Recipe(name, ingredients, process) {
      this.name = name;
      this.ingredients = ingredients;
      this.process = process;
  }

  // Function to store data
  function storeData(newData) {
      let recipes = getData() || [];
      recipes.push(newData);
      localStorage.setItem("recipes", JSON.stringify(recipes));
  }

  // Function to get data from localStorage
  function getData() {
      return JSON.parse(localStorage.getItem("recipes"));
  }

  // Function to display available recipes
  function displayRecipes() {
      let recipes = getData();
      if (recipes && recipes.length) {
          recipeArea.innerHTML = recipes.map((recipe, index) => `<span class="recipeInfo" data-index="${index}" style="cursor: pointer; display: block; margin: 5px 0;">${recipe.name}</span>`).join('');

          // Attach click event listeners to the recipe names
          document.querySelectorAll('.recipeInfo').forEach(item => {
              item.addEventListener('click', function() {
                  displayRecipeDetails(this.getAttribute('data-index'));
              });
          });
      } else {
          recipeArea.innerHTML = "No Recipes to Show";
      }
  }

  // Function to display recipe details
  function displayRecipeDetails(index) {
      let recipes = getData();
      const recipe = recipes[index];
      recipeLoadArea.innerHTML = `
          <h3>${recipe.name}</h3>
          <p><strong>Ingredients:</strong><br>${recipe.ingredients.join(',<br> ')}</p>
          <p><strong>Process:</strong><br>${recipe.process}</p>
      `;
  }

  // Function to clear the form
  function clearForm() {
      recipeForm.reset();
  }
});
