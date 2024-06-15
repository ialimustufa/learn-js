function startTask(){
    let character=document.getElementById('character').value;
    let task;
    switch (character){
        case"master":
            task="disciple the dragon warrior";
            break;
        case"dragon warrior":
            task="maintain peace in Valley";
            break;
        case"father":
            task="feed Po";
            break;
        case"villian":
            task="gain powers of Dragon Warrior";
            break;
        case"grand master":
            task="reside in Soul Heaven";
            break;
        default:
            task="Select a valid character";
    }
    document.getElementById("task").innerHTML="Task: "+task;
    document.getElementById("message").innerHTML="Good Luck !";
    document.getElementById("task").classList.add("highlight");
}