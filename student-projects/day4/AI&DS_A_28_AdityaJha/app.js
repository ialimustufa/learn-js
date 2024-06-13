document.getElementById('infoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Clear previous error messages
    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach(el => el.style.display = 'none');
    
    // Get form values
    const name = document.getElementById('name').value.trim();
    const age = document.getElementById('age').value.trim();
    const email = document.getElementById('email').value.trim();
    const city = document.getElementById('city').value.trim();
    
    let hasError = false;
    
    // Validate form values
    if (name === '') {
        document.getElementById('nameError').style.display = 'block';
        hasError = true;
    }
    if (age === '' || isNaN(age) || age <= 0) {
        document.getElementById('ageError').style.display = 'block';
        hasError = true;
    }
    if (email === '' || !validateEmail(email)) {
        document.getElementById('emailError').style.display = 'block';
        hasError = true;
    }
    if (city === '') {
        document.getElementById('cityError').style.display = 'block';
        hasError = true;
    }
    
    if (!hasError) {
        // Display the submitted information
        document.getElementById('displayName').textContent = name;
        document.getElementById('displayAge').textContent = age;
        document.getElementById('displayEmail').textContent = email;
        document.getElementById('displayCity').textContent = city;
        
        // Show the success message
        document.getElementById('savedMessage').classList.remove('hidden');
        
        // Clear the form
        document.getElementById('infoForm').reset();
    }
});

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}
