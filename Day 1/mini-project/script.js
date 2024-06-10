function startTask() {
    let character = document.getElementById("character").value;
    let task;
    switch (character) {
        case "abhishek":
            task = "File an RTI";
            break;
        case "professor":
            task = "Plan a heist";
            break;
        case "eleven":
            task = "Close the Gate";
            break;
        default:
            task = "Select a valid character";
    }
    document.getElementById("task").innerHTML = "Task: " + task;
    document.getElementById("message").innerHTML = "Good luck!";
    document.getElementById("message").classList.add("highlight");
}