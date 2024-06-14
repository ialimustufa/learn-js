let recipes = [
    { category: "Breakfast", name: "Scrambled Eggs", ingredients: ["eggs", "milk", "salt", "pepper"] },
    { category: "Lunch", name: "Caesar Salad", ingredients: ["lettuce", "croutons", "parmesan cheese", "caesar dressing"] },
    { category: "Dinner", name: "Spaghetti Bolognese", ingredients: ["spaghetti", "ground beef", "tomato sauce", "onion", "garlic"] }
];

const categoryList = document.getElementById("categoryList");
const recipeList = document.getElementById("recipeList");
const ingredientList = document.getElementById("ingredientList");

function populateCategories() {
    const categories = Array.from(new Set(recipes.map(recipe => recipe.category)));
    categories.forEach(category => {
        const li = document.createElement("li");
        li.textContent = category;
        li.addEventListener("click", () => {
            displayRecipes(category);
        });
        categoryList.appendChild(li);
    });
}

function displayRecipes(category) {
    recipeList.innerHTML = "";
    const filteredRecipes = recipes.filter(recipe => recipe.category === category);
    filteredRecipes.forEach(recipe => {
        const li = document.createElement("li");
        li.textContent = recipe.name;
        li.addEventListener("click", () => {
            displayIngredients(recipe.ingredients);
        });
        recipeList.appendChild(li);
    });
}

function displayIngredients(ingredients) {
    ingredientList.innerHTML = "";
    ingredients.forEach(ingredient => {
        const li = document.createElement("li");
        li.textContent = ingredient;
        ingredientList.appendChild(li);
    });
}

function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value === "") {
        alert("Please enter a task!");
        return;
    }

    var li = document.createElement("li");
    li.textContent = taskInput.value;

    var checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.addEventListener("change", function () {
        if (this.checked) {
            li.classList.add("completed");
        } else {
            li.classList.remove("completed");
        }
    });

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(checkBox);
    li.appendChild(deleteButton);
    taskList.appendChild(li);

    taskInput.value = "";
}

function addRecipe() {
    const recipeName = document.getElementById("recipeName").value;
    const recipeIngredients = document.getElementById("recipeIngredients").value.split(",").map(ingredient => ingredient.trim());

    if (!recipeName || recipeIngredients.length === 0) {
        alert("Please enter recipe name and ingredients!");
        return;
    }

    const newRecipe = {
        category: "Custom",
        name: recipeName,
        ingredients: recipeIngredients
    };

    recipes.push(newRecipe);

    // Clear input fields
    document.getElementById("recipeName").value = "";
    document.getElementById("recipeIngredients").value = "";

    // Update categories
    categoryList.innerHTML = "";
    populateCategories();
}

// Populate category list
populateCategories();