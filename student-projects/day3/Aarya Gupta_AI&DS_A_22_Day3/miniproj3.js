let taskList = document.getElementById('task-list');
console.log(taskList);

let taskItems = document.getElementsByClassName('task-item');
console.log(taskItems);

let addButton = document.querySelector('.add-button');
console.log(addButton);

addButton.textContent = "Add a New Task";

taskList.innerHTML = "<li class='task-item'>Updated Task 1<button class='edit-button'>Edit</button><button class='delete-button'>Delete</button></li>";

taskList.setAttribute('class', 'updated-task-list');
console.log(taskList.getAttribute('class')); 

addButton.addEventListener('click', function() {
    alert('Add button clicked!');
});

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

let newTask = document.createElement('li');
newTask.textContent = "New Task";
newTask.className = "task-item";
taskList.appendChild(newTask);

taskList.removeChild(newTask);