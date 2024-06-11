res=document.getElementById("res")
function add(){
    num1=parseInt(document.getElementById("num1").value)
    num2= parseInt(document.getElementById("num2").value)
    res.innerText="Result: "+String(num1+num2)
}
function subtract(){
    num1=parseInt(document.getElementById("num1").value)
    num2= parseInt(document.getElementById("num2").value)
    res.innerText="Result: "+String(num1-num2)

}
function multiply(){
    num1=parseInt(document.getElementById("num1").value)
    num2= parseInt(document.getElementById("num2").value)
    res.innerText="Result: "+String(num1*num2)

}
function divide(){
    num1=parseInt(document.getElementById("num1").value)
    num2= parseInt(document.getElementById("num2").value)
    res.innerText="Result: "+String(num1/num2)

}