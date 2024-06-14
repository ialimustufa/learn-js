<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Submission</title>
</head>
<body>
    <div class="container">
        <h2>Personal Information Form</h2>
        <form id="infoForm">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required><br>

            <label for="age">Age:</label>
            <input type="number" id="age" name="age" required><br>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required><br>

            <label for="city">City:</label>
            <input type="text" id="city" name="city" required><br>

            <button type="submit">Submit</button>
        </form>

        <div id="savedMessage" class="hidden">
            <h3>Information Saved!</h3>
            <p><strong>Name:</strong> <span id="displayName"></span></p>
            <p><strong>Age:</strong> <span id="displayAge"></span></p>
            <p><strong>Email:</strong> <span id="displayEmail"></span></p>
            <p><strong>City:</strong> <span id="displayCity"></span></p>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
<style>
    body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    margin: 0;
    padding: 0;
}

.container {
    max-width: 600px;
    margin: 50px auto;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h2 {
    text-align: center;
}

form {
    display: flex;
    flex-direction: column;
}

label {
    margin-top: 10px;
}

input {
    padding: 8px;
    margin-top: 5px;
}

button {
    padding: 10px;
    margin-top: 20px;
    background-color: #5cb85c;
    color: white;
    border: none;
    cursor: pointer;
}

button:hover {
    background-color: #4cae4c;
}

#savedMessage {
    margin-top: 20px;
    padding: 10px;
    background-color: #dff0d8;
    border: 1px solid #d6e9c6;
}

.hidden {
    display: none;
}

</style>
<script>
    document.getElementById('infoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const city = document.getElementById('city').value;


    document.getElementById('displayName').textContent = name;
    document.getElementById('displayAge').textContent = age;
    document.getElementById('displayEmail').textContent = email;
    document.getElementById('displayCity').textContent = city;

    document.getElementById('savedMessage').classList.remove('hidden');
});

</script>
