// Selecting and Manipulating DOM Elements

// Selecting elements
let taskList = document.getElementById('task-list');
let addButton = document.getElementById('add-button');
let taskInput = document.getElementById('task-input');

// Adding a click event listener to the add button
addButton.addEventListener('click', function() {
    let taskTitle = taskInput.value;
    if (taskTitle !== "") {
        addTask(taskTitle);
        taskInput.value = ""; // Clear the input after adding the task
    } else {
        alert('Please enter a task.');
    }
});

// Function to add a new task to the list
function addTask(title) {
    // Create new task item
    let taskItem = document.createElement('li');
    taskItem.className = 'task-item';
    taskItem.textContent = title;

    // Create edit button
    let editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.className = 'edit-button';
    editButton.addEventListener('click', function() {
        let newTitle = prompt("Edit task:", taskItem.firstChild.textContent);
        if (newTitle !== null && newTitle !== "") {
            taskItem.firstChild.textContent = newTitle; // Edit the task item text
        }
    });

    // Create delete button
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-button';
    deleteButton.addEventListener('click', function() {
        taskList.removeChild(taskItem); // Remove the clicked task item
    });

    // Append buttons to task item
    taskItem.appendChild(editButton);
    taskItem.appendChild(deleteButton);

    // Append task item to task list
    taskList.appendChild(taskItem);
}
