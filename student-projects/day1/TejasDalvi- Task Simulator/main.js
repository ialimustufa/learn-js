document.getElementById('characterForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const selectedCharacter = document.getElementById('charac').value;

    // console.log('Selected character:', selectedCharacter);
    
    const resultDiv = document.getElementById('result');
    
    const answers = {
        "Kakashi Hatake": "Those who break the rules are scum, but those who abandon their friends are worse than scum.",
        "Eren Yeager": "If you win, you live. If you lose, you die. If you don’t fight, you can’t win!",
        "Madara Uchiha" : "Wake up to reality! Nothing ever goes as planned in this accursed world."
    }
    
    resultDiv.innerHTML = `<p>${answers[selectedCharacter]}<br><span>Get Going Now!</span></p>`;
    
});