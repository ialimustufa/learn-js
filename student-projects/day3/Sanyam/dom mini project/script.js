
const taskInput = document.getElementById('task-input');
const addButton = document.getElementById('add-button');
const taskList = document.getElementById('task-list');

addButton.addEventListener('click', addTask);

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText) {
    const taskItem = document.createElement('li');
    taskItem.className = 'task-item';

    const taskName = document.createElement('span');
    taskName.className = 'task-name';
    taskName.textContent = taskText;

    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'button-container';

    const editButton = document.createElement('button');
    editButton.className = 'edit-button';
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', editTask);

    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-button';
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', deleteTask);

    buttonContainer.appendChild(editButton);
    buttonContainer.appendChild(deleteButton);

    taskItem.appendChild(taskName);
    taskItem.appendChild(buttonContainer);

    taskList.appendChild(taskItem);
    taskInput.value = '';
  }
}

function editTask(event) {
  const taskItem = event.target.parentNode.parentNode;
  const taskName = taskItem.querySelector('.task-name');
  const taskText = taskName.textContent;
  const editInput = document.createElement('input');
  editInput.type = 'text';
  editInput.value = taskText;
  taskName.textContent = '';
  taskName.appendChild(editInput);
  editInput.focus();
}

function deleteTask(event) {
  const taskItem = event.target.parentNode.parentNode;
  taskList.removeChild(taskItem);
}

