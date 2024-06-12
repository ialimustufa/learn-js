function StartTask(){
    let character=document.getElementById("character").value;
    let task;
    switch(character){
        case "professor":
            task="be more wise";
            break;
        case "eleven":
            task="use your powers";
            break;
        case "jeetu bhaiya":
            task="believe in your dreams";
            break;
        case "chandler bing":
            task="make people laugh";
            break;
        default:
            task="select a valid character";
}
document.getElementById("task").innerHTML="task:"+ task;
document.getElementById("message").innerHTML="Good Luck";
document.getElementById("task").classList.add("highlights");
}
