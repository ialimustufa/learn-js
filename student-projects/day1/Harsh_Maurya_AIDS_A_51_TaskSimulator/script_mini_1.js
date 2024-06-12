function startTask(){
    let character = document.getElementById("character").value;
    let task;
    switch (character) {
        case "Eleven":
            task = "Stopping the distruction of Hawkins";
            break;
        case "Tyler":
            task = "Obeys its owner";
            break;
        case "Professor":
            task = "Plan a heist";
            break;
        default:
            task = "Select a valid character";
    }
 
    document.getElementById("task").innerHTML = "Task: " + task;
    document.getElementById("message").innerHTML = "Good luck!";

    document.getElementById("message").classList.add("highlight");
    document.getElementById("task").classList.add("high");
 }
 