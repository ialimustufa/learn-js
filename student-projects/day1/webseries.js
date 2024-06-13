function startTask(){
    let character = document.getElementById("character").value;
    let task;
    switch (character) {
        case "Harry Potter":
            task = "WIN";
            break;
        case "Abhishek":
            task = "DO SOME WORK";
            break;
            case "John":
                task = "REVENGE";
                break;
        default:
            task = "select a valid character";
    }
 
 
    document.getElementById("task").innerHTML = "Task: "+ task;
    document.getElementById("message").innerHTML = "Good luck!";
    document.getElementById("task").classList.add("highlight");
 }
 