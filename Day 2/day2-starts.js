// code will be updated at end of day 2// Creating an object
let task = {
    title: "Buy groceries",
    dueDate: "2024-06-10",
    isCompleted: false
};

// Accessing properties using dot notation
console.log(task.title); // Output: Buy groceries

// Accessing properties using bracket notation
console.log(task["dueDate"]); // Output: 2024-06-10

// Adding properties
task.priority = "High";
console.log(task.priority); // Output: High

// Modifying properties
task.isCompleted = true;
console.log(task.isCompleted); // Output: true

// Deleting properties
delete task.dueDate;
console.log(task.dueDate); // Output: undefined

// Methods in Objects

let task = {
    title: "Buy groceries",
    isCompleted: false,
    toggleCompletion: function() {
        this.isCompleted = !this.isCompleted;
    }
};

console.log(task.isCompleted); // Output: false
task.toggleCompletion();
console.log(task.isCompleted); // Output: true

// open this.js file to show example and come back here

// Prototypes and Inheritance

let baseTask = {
    isCompleted: false,
    toggleCompletion: function() {
        this.isCompleted = !this.isCompleted;
    }
};

let task = Object.create(baseTask);
task.title = "Buy groceries";

console.log(task.title); // Output: Buy groceries
console.log(task.isCompleted); // Output: false
task.toggleCompletion();
console.log(task.isCompleted); // Output: true


// Function Scope and Closures show in html

function outerFunction() {
    let outerVar = "I am outside!";  
    function innerFunction() {
        let innerVar = "I am inside!";
        console.log(outerVar); // Can access outerVar
    }
   
    innerFunction();
    //console.log(innerVar); // Error: innerVar is not defined
}

outerFunction();

// Closures

function createCounter() {
    let count = 0; // this will change
    return function() {
        count++;
        return count;
    };
}

let counter = createCounter();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
console.log(counter()); // Output: 3

/*
Closures: Closures preserve the environment of a function, 
allowing inner functions to access variables from their 
outer functions even after those outer functions have finished running.
 This enables data encapsulation and stateful behavior.
*/

// Higher-Order Functions

// Functions can accept other functions as arguments.

function greet(name) {
    return `Hello, ${name}!`;
}

function callWithGreeting(name, func) {
    console.log(func(name));
}

callWithGreeting("Kabir", greet); // Output: Hello, Kabir!

// Traditional Function
function calculateAverageRating(ratings) {
    // if (ratings.length === 0) {
    //     return 0; 
    // }
    const total = ratings.reduce(function(sum, rating) {
        return sum + rating;
    }, 0);

    return total / ratings.length;
}

// Arrow Function with traditional
const calculateAverageRating = (ratings) => {
    const total = ratings.reduce((sum, rating) => sum + rating, 0); // Arrow function inside reduce
    return total / ratings.length;
};

const movieRatings = [4.5, 3.8, 5.0, 4.2];
const averageRating = calculateAverageRating(movieRatings);
console.log("Average Rating:", averageRating); 

// Selecting and Manipulating DOM Elements

// show mini-project of tasks

// show events 