let recipes = [
    { category: "Breakfast", name: "Scrambled Eggs", ingredients: ["eggs", "milk", "salt", "pepper"] },
    { category: "Lunch", name: "Caesar Salad", ingredients: ["lettuce", "croutons", "parmesan cheese", "caesar dressing"] },
    { category: "Dinner", name: "Spaghetti Bolognese", ingredients: ["spaghetti", "ground beef", "tomato sauce", "onion", "garlic"] }
];

const categorySelect = document.getElementById("categorySelect");
const recipeList = document.getElementById("recipeList");
const ingredientList = document.getElementById("ingredientList");

// Populate category dropdown
function populateCategoryDropdown() {
    const categories = Array.from(new Set(recipes.map(recipe => recipe.category)));
    categories.forEach(category => {
        const option = document.createElement("option");
        option.textContent = category;
        option.value = category;
        categorySelect.appendChild(option);
    });
}

// Display recipes based on selected category
function displayRecipes() {
    const selectedCategory = categorySelect.value;
    recipeList.innerHTML = "";

    if (selectedCategory === "All") {
        recipes.forEach(recipe => {
            const li = document.createElement("li");
            li.textContent = recipe.name;
            li.addEventListener("click", () => {
                displayIngredients(recipe.ingredients);
            });
            recipeList.appendChild(li);
        });
    } else {
        const filteredRecipes = recipes.filter(recipe => recipe.category === selectedCategory);
        filteredRecipes.forEach(recipe => {
            const li = document.createElement("li");
            li.textContent = recipe.name;
            li.addEventListener("click", () => {
                displayIngredients(recipe.ingredients);
            });
            recipeList.appendChild(li);
        });
    }
}

// Display ingredients for a given recipe
function displayIngredients(ingredients) {
    ingredientList.innerHTML = "";
    ingredients.forEach(ingredient => {
        const li = document.createElement("li");
        li.textContent = ingredient;
        ingredientList.appendChild(li);
    });
}

// Function to add a task
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

// Search recipes based on user input
function searchRecipes() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    recipeList.innerHTML = "";

    recipes.forEach(recipe => {
        if (recipe.name.toLowerCase().includes(searchInput)) {
            const li = document.createElement("li");
            li.textContent = recipe.name;
            li.addEventListener("click", () => {
                displayIngredients(recipe.ingredients);
            });
            recipeList.appendChild(li);
        }
    });
}

// Initialize
populateCategoryDropdown();
displayRecipes();