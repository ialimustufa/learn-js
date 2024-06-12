function getnumbers(){
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    return {num1, num2};
}

function add(){
    const {num1, num2} = getnumbers()
    const result = num1+num2;
    displayResult(result)
}
function subtract(){
    const {num1,num2} = getnumbers()
    const result = num1 - num2;
    displayResult(result)
}
function mul(){
    const {num1,num2} = getnumbers()
    const result = num1 * num2;
    displayResult(result)
}
function divide(){
    const {num1,num2} = getnumbers()
    if (num2 == 0){
        displayResult("error !")
    }
    else{
        const result = num1 / num2;
        displayResult(result)
    }
}

function displayResult(result){
    document.getElementById('value').textContent = 'Result : ' + result;
}