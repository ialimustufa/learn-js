function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');
    
    if (taskInput.value.trim() === '') {
        alert('Please enter a task.');
        return;
    }
    
    const newTask = document.createElement('li');
    newTask.innerHTML = `${taskInput.value} <button class="delete" onclick="deleteTask(this)">Delete</button>`;
    newTask.onclick = function() {
        newTask.classList.toggle('completed');
    };
    
    taskList.appendChild(newTask);
    taskInput.value = '';
}

function deleteTask(button) {
    const taskItem = button.parentElement;
    taskItem.remove();
}





