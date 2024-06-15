
document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const prioritySelect = document.getElementById('priority-select');
    const taskList = document.getElementById('task-list');

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        addTask(taskInput.value, prioritySelect.value);
        taskInput.value = '';
    });

    taskList.addEventListener('click', (e) => {
        if (e.target.classList.contains('remove')) {
            removeTask(e.target.parentElement.parentElement);
        } else if (e.target.classList.contains('done')) {
            toggleDone(e.target.parentElement.parentElement);
        }
    });

    function addTask(task, priority) {
        const li = document.createElement('li');
        li.className = priority;
        li.innerHTML = `
            <span>${task}</span>
            <div class="task-actions">
                <button class="done">✓</button>
                <button class="remove">✕</button>
            </div>
        `;
        taskList.appendChild(li);
    }

    function removeTask(task) {
        taskList.removeChild(task);
    }

    function toggleDone(task) {
        task.classList.toggle('done');
    }
}); 