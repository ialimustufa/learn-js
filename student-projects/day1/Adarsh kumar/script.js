function startTask(){
    let character = document.getElementById("character").value;
    let task;
    switch (character) {
        case "abhishek":
            task = "File a RTI";
            break;
        case "professor":
            task = "Plan a heist";
            break;
        default:
            task = "select a valid character";
    }
 
 
    document.getElementById("task").innerHTML = "Task: "+ task;
    document.getElementById("message").innerHTML = "Good luck!";
    document.getElementById("task").classList.add("highlight");
 }
 
 