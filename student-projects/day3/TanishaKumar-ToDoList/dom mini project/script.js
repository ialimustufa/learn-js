let todoList = [];
let todoInput = document.getElementById('todo-input');
let addBtn = document.getElementById('add-btn');
let todoListElement = document.getElementById('todo-list');

addBtn.addEventListener('click', addTodo);

function addTodo() {
    let todoText = todoInput.value.trim();
    if (todoText) {
        todoList.push({ text: todoText, done: false });
        todoInput.value = '';
        renderTodoList();
    }
}

function renderTodoList() {
    todoListElement.innerHTML = '';
    todoList.forEach((todo, index) => {
        let todoElement = document.createElement('li');
        todoElement.textContent = todo.text;
        if (todo.done) {
            todoElement.classList.add('done');
        }
        todoElement.addEventListener('click', () => {
            todo.done =!todo.done;
            renderTodoList();
        });

        let todoActions = document.createElement('div');
        todoActions.className = 'todo-actions';

        let editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click', () => {
            editTodo(todo, index);
        });
        todoActions.appendChild(editBtn);

        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => {
            deleteTodo(index);
        });
        todoActions.appendChild(deleteBtn);

        todoElement.appendChild(todoActions);
        todoListElement.appendChild(todoElement);
    });
}

function editTodo(todo, index) {
    let editText = prompt('Edit todo:', todo.text);
    if (editText) {
        todoList[index].text = editText;
        renderTodoList();
    }
}

function deleteTodo(index) {
    if (confirm(`Are you sure you want to delete todo "${todoList[index].text}"?`)) {
        todoList.splice(index, 1);
        renderTodoList();
    }
}

renderTodoList();