// script.js
const userInfoForm = document.getElementById('userInfoForm');
const displayInfo = document.getElementById('displayInfo');

userInfoForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;
    const birthdate = document.getElementById('birthdate').value;
    const hobbies = document.getElementById('hobbies').value;
    const achievements = document.getElementById('achievements').value;

    // Display collected information
    displayInfo.innerHTML = `
        <h2>User Information:</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone Number:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>Birthdate:</strong> ${birthdate}</p>
        <p><strong>Hobbies:</strong> ${hobbies}</p>
        <p><strong>Achievements:</strong> ${achievements}</p>
    `;
});
