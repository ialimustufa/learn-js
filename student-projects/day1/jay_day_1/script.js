function updateFranchise() {
    var franchiseList = document.getElementById("franchiseList");
    var selectedFranchise = franchiseList.value;
    document.getElementById("selectedFranchise").value = selectedFranchise;

    var characterList = document.getElementById("characterList");
    var marvelCharacters = ["Iron Man", "Spider Man", "Captain America", "Thor"];
    var dcCharacters = ["Batman", "Superman", "Wonder Woman", "Flash"];

    characterList.innerHTML = "<option value=''>---Choose Character---</option>"; // Reset character options

    var characters = [];
    if (selectedFranchise === "Marvel") {
        characters = marvelCharacters;
    } else if (selectedFranchise === "DC") {
        characters = dcCharacters;
    }

    characters.forEach(function (character) {
        var option = document.createElement("option");
        option.text = character;
        characterList.add(option);
    });

    // Reset selected character input
    document.getElementById("selectedCharacter").value = "";
}

function updateCharacter() {
    var characterList = document.getElementById("characterList");
    var selectedCharacter = characterList.value;
    document.getElementById("selectedCharacter").value = selectedCharacter;
}