function startTask(){
    let character = document.getElementById("character").value;
    let task;
    switch(character){
        case "Abhishek":
            task="File an RTI";
            break;
        case "Professor":
            task="Plan a heist";
            break;
        case "Eleven":
            task="Close the gate";
            break;
        case "Jeetu Bhaiya":
            task="Inspire students";
            break;

        default:
            task="select a valid character;"
    }
    document.getElementById("task").innerHTML="Task:"+task;
    document.getElementById("message").innerHTML="Good Luck!";
    document.getElementById("message").classList.add("highlight");
}