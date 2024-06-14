function displaySelectedText() {
    var dropdown = document.getElementById("dropdown");
    
    var displayText = document.getElementById("displayText");
    
    var selectedValue = dropdown.value;
    
    switch(selectedValue) {
        case 'option1':
            displayText.textContent = "You selected GERMANY.";
            break;
        case 'option2':
            displayText.textContent = "You selected INDIA.";
            break;
        case 'option3':
            displayText.textContent = "You selected USA";
            break;
        default:
            displayText.textContent = "Invalid selection";
    }
}