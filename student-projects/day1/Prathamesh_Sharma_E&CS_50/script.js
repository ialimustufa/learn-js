const zero = document.querySelector(".zero");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const dot = document.querySelector(".dot");

const addBtn = document.querySelector(".add");
const subtractBtn = document.querySelector(".subtract");
const multiplyBtn = document.querySelector(".multiply");
const divideBtn = document.querySelector(".divide");

const equalsBtn = document.querySelector(".equals-btn");
const clearBtn = document.querySelector(".clear-btn");

const equation = document.querySelector(".equation");
const result = document.querySelector(".result");

let firstNumber = "";
let secondNumber = "";
let operator = "";
let wasOperatorPressed = false;
let lastResult = "";
let wasDotPressecFirstNumber = false;
let wasDotPressedSecondNumber = false;

const buttonsArr = [zero, one, two, three, four, five, six, seven, eight, nine];

for (let i = 0; i < buttonsArr.length; i++) {
  buttonsArr[i].addEventListener("click", () => {
    setNumbers(buttonsArr[i]);

    changeTheEquation();
  });
}

dot.addEventListener("click", () => {
  if (!wasOperatorPressed && !wasDotPressecFirstNumber) {
    firstNumber += ".";
    wasDotPressecFirstNumber = true;
  } else if (wasOperatorPressed && !wasDotPressedSecondNumber) {
    secondNumber += ".";
    wasDotPressedSecondNumber = true;
  }

  changeTheEquation();
});

function setNumbers(number) {
  if (!wasOperatorPressed && firstNumber == lastResult) {
    firstNumber = number.textContent;
  } else if (!wasOperatorPressed && firstNumber != lastResult) {
    if (
      firstNumber.length < 8 ||
      (firstNumber.length < 9 && firstNumber.includes("."))
    ) {
      firstNumber += number.textContent;
    }
  } else if (wasOperatorPressed) {
    if (
      secondNumber.length < 8 ||
      (secondNumber.length < 9 && secondNumber.includes("."))
    ) {
      secondNumber += number.textContent;
    }
  }

  result.textContent = "";
}

clearBtn.addEventListener("click", () => {
  wasOperatorPressed = false;
  firstNumber = "";
  secondNumber = "";
  operator = "";
  equation.textContent = "";
  result.textContent = "";
});

addBtn.addEventListener("click", () => {
  respondToOperator(addBtn);
});

subtractBtn.addEventListener("click", () => {
  respondToOperator(subtractBtn);
});

multiplyBtn.addEventListener("click", () => {
  respondToOperator(multiplyBtn);
});

divideBtn.addEventListener("click", () => {
  respondToOperator(divideBtn);
});

function respondToOperator(oper) {
  operator = oper.textContent;
  wasOperatorPressed = true;

  changeTheEquation();

  result.textContent = "";
}

function changeTheEquation() {
  equation.textContent = `${firstNumber} ${operator} ${
    secondNumber !== "" ? secondNumber : ""
  }`;
}

equalsBtn.addEventListener("click", () => {
  let resultOfEquation = operate(
    firstNumber,
    secondNumber,
    operator
  ).toString();
  if (parseFloat(secondNumber) == 0 && operator == "/") {
    alert("CANT DIVIDE BY 0");

    firstNumber = "";
    wasOperatorPressed = false;
  } else if (isNaN(resultOfEquation) && firstNumber != "") {
    result.textContent = firstNumber;

    lastResult = firstNumber;
  } else if (isNaN(resultOfEquation)) {
    firstNumber = "";
    wasOperatorPressed = false;

    result.textContent = "ERROR";
  } else {
    if (resultOfEquation.length > 10) {
      resultOfEquation = "";
      firstNumber = "";
      alert("TOO BIG NUMBER");
    } else if (resultOfEquation.includes(".")) {
      firstNumber = `${resultOfEquation}`;
      resultOfEquation = resultOfEquation.slice(0, 9);
    } else {
      firstNumber = `${resultOfEquation}`;
      resultOfEquation = resultOfEquation.slice(0, 8);
    }

    wasOperatorPressed = false;

    lastResult = resultOfEquation;

    result.textContent = `${resultOfEquation}`;
  }

  wasDotPressecFirstNumber = false;
  wasDotPressedSecondNumber = false;
  operator = "";
  secondNumber = "";
});

function operate(firstNumber, secondNumber, operator) {
  switch (operator) {
    case "+":
      return add(parseFloat(firstNumber), parseFloat(secondNumber));
    case "-":
      return subtract(parseFloat(firstNumber), parseFloat(secondNumber));
    case "*":
      return multiply(parseFloat(firstNumber), parseFloat(secondNumber));
    case "/":
      return divide(parseFloat(firstNumber), parseFloat(secondNumber));
  }
}

function add(...arr) {
  return arr.reduce((total, current) => total + current, 0);
}

function subtract(...arr) {
  return arr.reduce((total, current) => total - current, arr[0] * 2);
}

function multiply(...arr) {
  return arr.reduce((total, current) => total * current, 1);
}

function divide(...arr) {
  return arr.reduce((total, current) => total / current, arr[0] * arr[0]);
}
