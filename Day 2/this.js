//Global Context:
console.log(this); // In the browser, this will log the window object.

// Object Method:
let task = {
    title: "Buy groceries",
    isCompleted: false,
    toggleCompletion: function() {
        console.log(this); // Logs the task object.
        this.isCompleted = !this.isCompleted;
    }
};

task.toggleCompletion(); // `this` refers to the `task` object.
console.log(task.isCompleted); // Output: true

// Function Context:
function showGlobalThis() {
    console.log(this); // In non-strict mode, logs the global object (window).
}

showGlobalThis();

// show html file Event Handlers

// Constructor Functions:
function Task(title) {
    this.title = title;
    this.isCompleted = false;
}

let myTask = new Task("Buy groceries");
console.log(myTask.title); // Output: Buy groceries

// Arrow Functions:

let tasks = {
    title: "Buy groceries",
    isCompleted: false,
    toggleCompletion: function() {
        let innerFunction = () => {
            console.log(this); // `this` refers to the `task` object.
            this.isCompleted = !this.isCompleted;
        };
        innerFunction();
    }
};

tasks.toggleCompletion(); // `this` refers to the `task` object.
console.log(tasks.isCompleted); // Output: true