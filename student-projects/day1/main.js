document.getElementById('characterForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const selectedCharacter = document.getElementById('charac').value;

    // console.log('Selected character:', selectedCharacter);
    
    const resultDiv = document.getElementById('result');
    
    const answers = {
        "Assane Diop": "You’re swift. He is the greatest Theif of the history.",
        "homelander": "I’m the world’s greatest superhero. I can do whatever I want.",
        "joker" : "You see, in their last moments, people show you who they really are."
    }
    
    resultDiv.innerHTML = `<p>${answers[selectedCharacter]}<br><span>Get Going Now!</span></p>`;
    
});
