function calculate(operation) {
     var num1 = parseFloat(document.getElementById('num1').value);
     var num2 = parseFloat(document.getElementById('num2').value);
     var result;
 
     switch(operation) {
         case 'add':
             result = num1 + num2;
             break;
         case 'subtract':
             result = num1 - num2;
             break;
         case 'multiply':
             result = num1 * num2;
             break;
         case 'divide':
             result = num1 / num2;
             break;
         default:
             result = 'Invalid operation';
     }
 
     document.getElementById('result').innerText = result;
 }