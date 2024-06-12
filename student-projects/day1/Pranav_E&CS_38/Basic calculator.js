let displayElement = document.getElementById('calc-display');
let currentOperand = '';
let previousOperand = '';
let currentOperation = null;

function inputDigit(digit) {
    currentOperand += digit;
    updateDisplay();
}

function performOperation(operation) {
    if (currentOperand === '') return;
    if (previousOperand !== '') {
        calculateResult();
    }
    currentOperation = operation;
    previousOperand = currentOperand;
    currentOperand = '';
}

function calculateResult() {
    let result;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);

    if (isNaN(prev) || isNaN(current)) return;

    switch (currentOperation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }

    currentOperand = result;
    currentOperation = null;
    previousOperand = '';
    updateDisplay();
}

function clearCalculator() {
    currentOperand = '';
    previousOperand = '';
    currentOperation = null;
    updateDisplay();
}

function updateDisplay() {
    displayElement.value = currentOperand;
}
