function startTask() {
    let character = document.getElementById("character").value;
    let task;
    switch (character) {
        case "Harshad Mehta":
            task = "Stock market scam";
            break;
        case "Vaibhav Pandey":
            task = "IIT preparation";
            break;
        case "Dhananjay Rajpoot":
            task = "Forensic expert";
            break;
        case "Kaleen Bhaiya":
            task = "Crime lord";
            break;
        case "Srikant Tiwari":
            task = "Srikant Tiwari";
            break;
        default:
            task = "Select a valid character";
    }
    document.getElementById("task").innerHTML = "Task: " + task;
    document.getElementById("message").innerHTML = "Thankyou!";
    document.getElementById("message").classList.add("highlight");
}