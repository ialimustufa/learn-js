document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todo-input');
    const addBtn = document.getElementById('add-btn');
    const todoList = document.getElementById('todo-list');

    function addTodo() {
        const todoText = todoInput.value.trim();
        if (todoText !== '') {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <span>${todoText}</span>
                <div class="todo-actions">
                    <button class="complete-btn">Complete</button>
                    <button class="delete-btn">Delete</button>
                </div>
            `;

            todoList.appendChild(listItem);
            todoInput.value = '';

            const completeBtn = listItem.querySelector('.complete-btn');
            const deleteBtn = listItem.querySelector('.delete-btn');

            completeBtn.addEventListener('click', () => {
                listItem.classList.toggle('done');
            });

            deleteBtn.addEventListener('click', () => {
                todoList.removeChild(listItem);
            });
        }
        todoInput.focus();
    }

    addBtn.addEventListener('click', addTodo);
    todoInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTodo();
        }
    });
});