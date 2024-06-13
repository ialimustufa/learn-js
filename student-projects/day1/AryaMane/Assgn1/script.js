document.getElementById('submitBtn').addEventListener('click', function() {
let selectedValue = document.getElementById('dropdown').value;
let resultDiv = document.getElementById('result');
if (selectedValue === "Iron Man") {
    resultDiv.textContent = "Love you 3000";
} else if (selectedValue === "Captain America") {
    resultDiv.textContent = "I can do this all day!";
} else if (selectedValue === "Thor") {
    resultDiv.textContent = "A friend from Work!"; 
} else if (selectedValue === "Black Widow") {
    resultDiv.textContent = "I'm multi-tasking";
} else if (selectedValue === "Hawkeye") {
    resultDiv.textContent = "The city is flying, we’re fighting an army of robots, and I have a bow and arrow. None of this makes sense.";
} else if (selectedValue === "Hulk") {
    resultDiv.textContent = "Hulk Smash!";
} });