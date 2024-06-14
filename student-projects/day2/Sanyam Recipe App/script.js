var recipeForm = document.getElementById('recipe-form');
var recipeList = document.getElementById('recipe-list');
var recipeDetail = document.getElementById('recipe-detail');

recipeForm.onsubmit = function(e) {
    e.preventDefault();
    var name = document.getElementById('name').value;
    var ingredients = document.getElementById('ingredients').value;
    var instructions = document.getElementById('instructions').value;
            
    var recipeElement = document.createElement('div');
    recipeElement.innerHTML = '<h2>' + name + '</h2>' + '<p><strong>Ingredients:</strong><br>' + ingredients + '</p>' + '<p><strong>Instructions:</strong><br>' + instructions + '</p>';
    recipeList.appendChild(recipeElement);
    recipeForm.reset();
};