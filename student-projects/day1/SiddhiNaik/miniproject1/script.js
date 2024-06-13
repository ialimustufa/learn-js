document.getElementById('submitBtn').addEventListener('click', function() {
    let selectedValue = document.getElementById('dropdown').value;
    let resultDiv = document.getElementById('result');
    if (selectedValue === "Ross") {
        resultDiv.textContent = "We were on a break..";
    } 
    else if (selectedValue === "Rachel") {
        resultDiv.textContent = "I got off the plane...";
    } 
    else if (selectedValue === "Monica") {
        resultDiv.textContent = "Damn the jellyfish!"; 
    } 
    else if (selectedValue === "Chandler") {
        resultDiv.textContent = "Would I be anymore funny?";
    } 
    else if (selectedValue === "Phoebe") {
        resultDiv.textContent = "They don't know that we know they know we know";
    } 
    else if (selectedValue === "Joey") {
        resultDiv.textContent = "How You Doin'";
    } });