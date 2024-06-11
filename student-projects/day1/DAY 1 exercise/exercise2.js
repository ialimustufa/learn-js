function add(){
    var num1=document.getElementById("n1").value;
    var num2=document.getElementById("n2").value;
    sum=parseInt(num1)+parseInt(num2)
    document.getElementById("para").innerHTML=`Sum: ${sum}`
}
function subtract(){
    var num1=document.getElementById("n1").value;
    var num2=document.getElementById("n2").value;
    diff=parseInt(num1)-parseInt(num2)
    document.getElementById("para").innerHTML=`Difference: ${diff}`
}
function multiply(){
    var num1=document.getElementById("n1").value;
    var num2=document.getElementById("n2").value;
    product=parseInt(num1)*parseInt(num2)
    document.getElementById("para").innerHTML=`Product: ${product}`
}
function divide(){
    var num1=document.getElementById("n1").value;
    var num2=document.getElementById("n2").value;
    division=parseInt(num1)/parseInt(num2)
    document.getElementById("para").innerHTML=`Division: ${division}`
}