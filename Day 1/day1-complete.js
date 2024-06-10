// Variables
var name = "Srikant";
let age = 40;
const PI = 3.14;

// Data types
let number = 2023;        // number
let string = "Sacred Games";   // string
let boolean = true;    // boolean
let nullValue = null;   // null
let undefinedValue;     // undefined (implicitly)
let symbolValue = Symbol('secret'); // symbol
let bigIntValue = 12345678901234567890n; // bigint
let object = {          // object
    showName: "Made in Heaven",
    season: 2
};
let array = ["Gully Boy", "Mirzapur", "Paatal Lok"];  // array


// Multi-line string
let multiLineString = `Welcome to the world of
Indian web series.
Enjoy the show!`;
console.log(multiLineString);

let a = 10;
let b = 3;

// Addition
let sum = a + b;
console.log(`Sum: ${sum}`); // Sum: 13

// Subtraction
let difference = a - b;
console.log(`Difference: ${difference}`); // Difference: 7

// Multiplication
let product = a * b;
console.log(`Product: ${product}`); // Product: 30

// Division
let quotient = a / b;
console.log(`Quotient: ${quotient}`); // Quotient: 3.3333...

// Modulus (remainder)
let remainder = a % b;
console.log(`Remainder: ${remainder}`); // Remainder: 1

// Exponentiation
let power = a ** b;
console.log(`Power: ${power}`); // Power: 1000

// Assignment Operators

let x = 5;

// Assignment
x = 10;
console.log(`x = 10: ${x}`); // x = 10: 10

// Addition assignment
x += 5;
console.log(`x += 5: ${x}`); // x += 5: 15

// Subtraction assignment
x -= 3;
console.log(`x -= 3: ${x}`); // x -= 3: 12

// Multiplication assignment
x *= 2;
console.log(`x *= 2: ${x}`); // x *= 2: 24

// Division assignment
x /= 4;
console.log(`x /= 4: ${x}`); // x /= 4: 6

// Modulus assignment
x %= 5;
console.log(`x %= 5: ${x}`); // x %= 5: 1

// Exponentiation assignment
x **= 3;
console.log(`x **= 3: ${x}`); // x **= 3: 1

// Logical Operators 

let isAdult = true;
let hasTicket = false;

// AND (&&) - true if both operands are true
console.log(`isAdult && hasTicket: ${isAdult && hasTicket}`); // isAdult && hasTicket: false

// OR (||) - true if at least one operand is true
console.log(`isAdult || hasTicket: ${isAdult || hasTicket}`); // isAdult || hasTicket: true

// NOT (!) - inverts the boolean value
console.log(`!isAdult: ${!isAdult}`); // !isAdult: false


// Type Operators

let str = "Hello, World!";
console.log(`typeof str: ${typeof str}`); // typeof str: string

let date = new Date();
console.log(`date instanceof Date: ${date instanceof Date}`); // date instanceof Date: true

// Type conversion

let numStr = "123";
let num = Number(numStr);
console.log(`num: ${num}, typeof num: ${typeof num}`); // num: 123, typeof num: number

let boolStr = "true";
let bool = Boolean(boolStr);
console.log(`bool: ${bool}, typeof bool: ${typeof bool}`); // bool: true, typeof bool: boolean


// Basic Input/Output
alert("Welcome to the JavaScript tutorial inspired by 'Panchayat'!");
let myname = prompt("What is your name?");
console.log("Employee's name is " + myname);


// Debugging with breakpoints can be done in the browser's developer tools.
console.log("This is a log message.");
console.warn("This is a warning message.");
console.error("This is an error message.");
console.table([{name: "Kabir", age: 29}, {name: "Radhika", age: 34}]);


// Conditional Statements

let workHours = prompt("Enter the number of hours you worked today:");
workHours = parseInt(workHours);
if (workHours > 8) {
    console.log("Great job! You have worked extra hours today.");
} else if (workHours == 8) {
    console.log("Good job! You have completed your work hours.");
} else {
    console.log("You need to work more hours.");
}

switch (workHours) {
    case 8:
        console.log("Standard work hours.");
        break;
    case 10:
        console.log("Overtime work hours.");
        break;
    default:
        console.log("Varied work hours.");
}

// Loop Example

// for loop
for (let i = 1; i <= 5; i++) {
    console.log("Task " + i + ": Complete Panchayat duty");
}

// while Loop
let i = 1;
while (i <= 5) {
    console.log("Task " + i + ": Review Gram Sabha decisions");
    i++;
}

// do-while Loop
let j = 1;
do {
    console.log("Task " + j + ": Prepare report");
    j++;
} while (j <= 3);

// For...of Loop:

let directors = ["Anurag Kashyap", "Zoya Akhtar", "Vikramaditya Motwane"];

for (let director of directors) {
    console.log(director); // Anurag Kashyap, Zoya Akhtar, Vikramaditya Motwane
}

// For...in Loop:

let actor = {
    firstName: "Nawazuddin",
    lastName: "Siddiqui",
    age: 47
};

for (let key in actor) {
    console.log(`${key}: ${actor[key]}`); // firstName: Nawazuddin, lastName: Siddiqui, age: 47
}

// Javascript Literals

let agentName = 'Srikant';
let mission = 'Operation Zulfiqar';
let newmessage = `Agent ${agentName}, your next mission is ${mission}.`;
console.log(newmessage);

let firstName = "Radhika";
let lastName = "Apte";
let fullName = `${firstName} ${lastName}`;
console.log(`Hello, I am ${fullName}, your host for the evening.`);

// Function Examples

function greet(name) {
    return "Hello, " + name + "! Ready for the next 'Panchayat' task?";
}

let message = greet("Abhishek");
console.log(message);

function add(a, b) {
    return a + b;
}

let sum = add(5, 10);
console.log(sum);

function multiply(a, b) {
    return a * b;
}

let product = multiply(4, 5);
console.log(product);

// Function Expressions

// Function expression
const greet = function(name) {
    console.log("Hello, " + name + "!");
}; // Note the semicolon at the end

greet("Bob"); // Call the function (same as before)

// Arrow function (ES6+)
const greet = (name) => console.log("Hello, " + name + "!");
// Or with implicit return (for single-line functions)
const add = (x, y) => x + y;

function sayHello(name = "friend") {
    console.log(`Hello, ${name}!`);
}

sayHello();          // Output: Hello, friend!
sayHello("Emily");   // Output: Hello, Emily!

greet("Charlie");
let result = add(5, 3); // result is 8