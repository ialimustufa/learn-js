function selectTask(taskName) {
    switch(taskName) {
        case "Task1":
            Task1();
            break;
        case "Task2":
            Task2();
            break;
        case "Task3":
            Task3();
            break;
        case "Task4":
            Task4();
            break;
        case "Task5":
            Task5();
            break;
        default:
            Task();
            break;
    }
}

function Task1(){
    document.getElementById("demo").innerHTML = "Content for Task 1 Updated";    
}
function Task2(){
    document.getElementById("demo").innerHTML = "Content for Task 2 Updated";    
}
function Task3(){
    document.getElementById("demo").innerHTML = "Content for Task 3 Updated";    
}
function Task4(){
    document.getElementById("demo").innerHTML = "Content for Task 4 Updated";    
}
function Task5(){
    document.getElementById("demo").innerHTML = "Content for Task 5 Updated";    
}
function Task(){
    document.getElementById("demo").innerHTML = "Content Updated";    
}
