function updateTeam() {
    var teamList = document.getElementById("teamList");
    var selectedTeam = teamList.value;
    document.getElementById("selectedTeam").value = selectedTeam;

    var playerList = document.getElementById("playerList");
    var indiaPlayers = ["Virat Kohli", "MS Dhoni"];
    var australiaPlayers = ["Steve Smith", "David Warner"];

    playerList.innerHTML = "<option value=''>---Choose Player---</option>"; // Reset player options

    var players = [];
    if (selectedTeam === "India") {
        players = indiaPlayers;
    } else if (selectedTeam === "Australia") {
        players = australiaPlayers;
    }

    players.forEach(function (player) {
        var option = document.createElement("option");
        option.text = player;
        playerList.add(option);
    });

    // Reset selected player input
    document.getElementById("selectedPlayer").value = "";
}

function updatePlayer() {
    var playerList = document.getElementById("playerList");
    var selectedPlayer = playerList.value;
    document.getElementById("selectedPlayer").value = selectedPlayer;
}
