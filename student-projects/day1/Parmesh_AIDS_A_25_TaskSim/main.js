function startTask(){
    let character = document.getElementById("Character").value;

    let task;
    switch(character){
        case "Vegeta":
            task = "Vegeta: You say I’m arrogant, I say damn right, That’s pride, Pride in the Saiyan I am.";
            break;
        
        case "Itachi":
            task = "Itachi: One's Reality Might Be Another's Illusion.";
            break;

        case "Aizen":
            task = "Aizen: Welcome To My Soul Society";
            break;

        case "Zaemon":
            task = "Buri Buri Zaemon: I am always of winning side";
            break;
        default :
        "Select Proper character"
    }

    document.getElementById("task").innerHTML = task;
    document.getElementById("Good Luck").innerHTML = "Lightspeed";

    document.getElementById("Good Luck").classList.add("highlight");
}
