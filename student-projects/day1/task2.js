function startTask(){
    let character= document.getElementById("character").value
    let task;
    switch(character){

        case "captain":
            task="Keeps the team Together"
            break;

        case "nickfury":
            task="Looks for possible Threats"
            break;

        case "thor":
            task="King of Asguard"
            break;
        case "loki":
            task="Try being superior than Thor"
            break;

        default:
            task="Select a Valid Character"

    }

document.getElementById("task").innerText="Task: "+task;
document.getElementById("message").innerHTML = "Good luck!";
document.getElementById("task").classList.add("highlight");
}





