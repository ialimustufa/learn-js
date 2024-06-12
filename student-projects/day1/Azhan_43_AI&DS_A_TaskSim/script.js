document.getElementById('characterForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const selectedCharacter = document.getElementById('charac').value;

    //console.log('Selected character:', selectedCharacter);
    
    const resultDiv = document.getElementById('result');
    
    const answers = {
        "dr.Doom": "You are going to fight yourself, till eternity",
        "SuperMan": "I will not let them Die",
        "MoonKnight" : "Be Prepared I don't know what I'm gonna do next"
    }
    
    resultDiv.innerHTML = `<p>${answers[selectedCharacter]}<br><span>Choose your FATE!</span></p>`;
    
});