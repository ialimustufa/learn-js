console.log(num1)
    res=document.getElementById("res")
    function add(){
        num1=parseInt(document.getElementById("num1").value)
        num2= parseInt(document.getElementById("num2").value)
        res.innerText="Result: "+String(num1+num2)
    }
    function sub(){
        num1=parseInt(document.getElementById("num1").value)
        num2= parseInt(document.getElementById("num2").value)
        res.innerText="Result: "+String(num1-num2)
    
    }
    function mul(){
        num1=parseInt(document.getElementById("num1").value)
        num2= parseInt(document.getElementById("num2").value)
        res.innerText="Result: "+String(num1*num2)
    
    }
    function div(){
        num1=parseInt(document.getElementById("num1").value)
        num2= parseInt(document.getElementById("num2").value)
        res.innerText="Result: "+String(num1/num2)
    
    }