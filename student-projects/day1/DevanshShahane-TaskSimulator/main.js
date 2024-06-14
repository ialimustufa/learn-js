document.getElementById('characterForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const selectedCharacter = document.getElementById('charac').value;
    
    const resultDiv = document.getElementById('result');
    
    const answers = {
        "assane": "The only thing more elusive than the truth is a lie well told.",
        "lucifer": "What is it that you truly desire?",
        "ironman": "I am Iron Man."
    }
    
    resultDiv.innerHTML = `<p>${answers[selectedCharacter]}<br><span>Get Going Now!</span></p>`;
});
