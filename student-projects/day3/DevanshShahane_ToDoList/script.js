let taskList = document.getElementById('task-list');
let addButton = document.getElementById('add-button');
let taskInput = document.getElementById('task-input');


addButton.addEventListener('click', function(){
   let taskTitle = taskInput.value;
   addTask(taskTitle);
   taskInput.value = "";
});


function addTask(title){
   let taskItem = document.createElement('li');
   taskItem.className = 'task-item';
   taskItem.textContent = title;
   taskList.appendChild(taskItem);


   let editButton = document.createElement('button');
   editButton.textContent = 'Edit Task';
   editButton.className = 'edit-button';
   editButton.addEventListener('click',function(){
       let newTitle = prompt("Edit task:", taskItem.firstChild.textContent);
       if (newTitle !== null && newTitle !==""){
           taskItem.firstChild.textContent = newTitle;
       } else {
           alert("Input Empty or not supported");
       }
   });


   let deleteButton = document.createElement('button');
   deleteButton.textContent = 'Delete Task';
   deleteButton.className = 'delete-button';
   deleteButton.addEventListener('click',function(){
       taskList.removeChild(taskItem);
   });


   taskItem.appendChild(editButton);
   taskItem.appendChild(deleteButton);
}