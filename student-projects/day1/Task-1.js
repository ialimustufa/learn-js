function startTask() {
    let character = document.getElementById('character').value;
    let task ;

    switch (character) {
        case "Eleven":
            task = 'Close the Gate';
            break;
        case "Jon Snow":
            task = 'Defend the Wall';
            break;
            default:
            task = 'Unknown Task';
    }

    document.getElementById("taskMessage").innerHTML = "Task:"+task;
    document.getElementById("Message").innerHTML = `Good luck!`;
    document.getElementById("task").classList.add("highlight!");

}
