function series() {
    let character = document.getElementById("character").value;
    let series;
    switch (character) {
        case "professor":
            series= "Sherlock";
            break;
        case "eleven":
            series= "Stranger Things";
            break;
        case "white":
            series= "Breaking Bad";
            break;
        default:
            series = "Select a valid character";
    }
    document.getElementById("task").innerHTML = "Series of the selected character: " + series;
    document.getElementById("message").innerHTML = "Great!";
    document.getElementById("message").classList.add("highlight");
}