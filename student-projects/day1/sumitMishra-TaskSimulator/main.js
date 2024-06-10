document.getElementById('characterForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const selectedCharacter = document.getElementById('charac').value;

    // console.log('Selected character:', selectedCharacter);
    
    const resultDiv = document.getElementById('result');
    
    const answers = {
        "thanos": "You’re strong. But I could snap my fingers and you’d all cease to exist.",
        "homelander": "I’m the world’s greatest superhero. I can do whatever I want.",
        "joker" : "You see, in their last moments, people show you who they really are."
    }
    
    resultDiv.innerHTML = `<p>${answers[selectedCharacter]}<br><span>Get Going Now!</span></p>`;
    
});
