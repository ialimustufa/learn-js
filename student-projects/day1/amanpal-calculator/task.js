function addNumbers() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    document.getElementById('result').innerText = 'Result: ' + (num1 + num2);
}

function subtractNumbers() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    document.getElementById('result').innerText = 'Result: ' + (num1 - num2);
}

function multiplyNumbers() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    document.getElementById('result').innerText = 'Result: ' + (num1 * num2);
}

function divideNumbers() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    if (num2 !== 0) {
        document.getElementById('result').innerText = 'Result: ' + (num1 / num2);
    } else {
        document.getElementById('result').innerText = 'Result: Cannot divide by zero';
    }
}
