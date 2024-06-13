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

        case "KINGO":
                task = "Gaddi me kuch the kyaaa?";
                break;

        case "Munna Bhai":
                    task = "room change k liye form chaiye ";
                    break;
            
        default:
            task = "select a valid character";
    }
 
 
    document.getElementById("task").innerHTML = "Task: "+ task;
    document.getElementById("message").innerHTML = "Good luck!";
    document.getElementById("task").classList.add("highlight");
 }
 
 