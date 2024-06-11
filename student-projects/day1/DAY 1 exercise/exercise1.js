function print(){
    var value=document.getElementById("characters").value
    let task;
    let task2;

    switch(value){
        case "c1":
            task=`Task 1: Make Friends`
            task2=`Good Luck!`
            break;
        case "c2":
            task=`Task 1: Find Criminals`
            task2=`Good Luck!`
            break;
        case "c3":
            task=`Task 1: Solve the case`
            task2=`Good Luck!`
            break;
        default:
            task="Select an opt";
            task2="";
    }
    document.getElementById("msg").innerHTML=task;
    document.getElementById("msg2").innerHTML=task2;
}