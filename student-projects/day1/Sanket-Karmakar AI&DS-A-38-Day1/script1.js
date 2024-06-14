function startTask(){
    let character = document.getElementById("character").value;
    let task;
    switch(character){
        case "Spiderman":
            task = "Fight Winter Soldier";
            break;

        case "Dr Strange":
            task = "Fight Dormammu"
            break;

        case "Ironman":
            task = "Fight Thanos"
            break;

        case "Thor":
            task = "Fight Ragnarok"
            break;

        case "Captain America":
            task = "Fight Red Skull"

        default:
            task = "Select a valid character."
    }

    document.getElementById("task").innerHTML = "Task: " + task;
    document.getElementById("message").innerHTML = "Good Luck!";

}