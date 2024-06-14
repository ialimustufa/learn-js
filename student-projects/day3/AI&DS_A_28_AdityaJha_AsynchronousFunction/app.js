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
taskList.innerHTML = "<li class='task-item'><span>Updated Task 1</span><div class='task-buttons'><button class='edit-button'>Edit</button><button class='delete-button'>Delete</button></div></li>";

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
        let taskItem = event.target.closest('.task-item');
        taskList.removeChild(taskItem);
    } else if (event.target && event.target.classList.contains('edit-button')) {
        let taskItem = event.target.closest('.task-item');
        let newTitle = prompt("Edit task:", taskItem.querySelector('span').textContent);
        if (newTitle !== null && newTitle !== "") {
            taskItem.querySelector('span').textContent = newTitle;
        }
    }
});

// Creating and appending a new element
let newTask = document.createElement('li');
newTask.className = "task-item";
newTask.innerHTML = "<span>New Task</span><div class='task-buttons'><button class='edit-button'>Edit</button><button class='delete-button'>Delete</button></div>";
taskList.appendChild(newTask);

// Removing an element
taskList.removeChild(newTask);
