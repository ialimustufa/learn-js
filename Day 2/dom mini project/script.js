// Selecting an element by ID
let taskList = document.getElementById('task-list');
console.log(taskList);


// Selecting elements by class
let taskItems = document.getElementsByClassName('task-item');
console.log(taskItems);


// Selecting an element by CSS selector
let addButton = document.querySelector('.add-button');
console.log(addButton);


// Changing text content
addButton.textContent = "Add a New Task";


// Changing HTML content
taskList.innerHTML = "<li class='task-item'>Updated Task 1<button class='edit-button'>Edit</button><button class='delete-button'>Delete</button></li>";


// Changing attributes
taskList.setAttribute('class', 'updated-task-list');
console.log(taskList.getAttribute('class')); // Output: updated-task-list


// Adding a click event listener
addButton.addEventListener('click', function() {
    alert('Add button clicked!');
});


// Event delegation example
taskList.addEventListener('click', function(event) {
    if (event.target && event.target.classList.contains('delete-button')) {
        let taskItem = event.target.parentElement;
        taskList.removeChild(taskItem);
    } else if (event.target && event.target.classList.contains('edit-button')) {
        let taskItem = event.target.parentElement;
        let newTitle = prompt("Edit task:", taskItem.firstChild.textContent);
        if (newTitle !== null && newTitle !== "") {
            taskItem.firstChild.textContent = newTitle;
        }
    }
});


// Creating and appending a new element
let newTask = document.createElement('li');
newTask.textContent = "New Task";
newTask.className = "task-item";
taskList.appendChild(newTask);


// Removing an element
taskList.removeChild(newTask);