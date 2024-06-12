function startTask() {
    const character = document.getElementById('character').value;
    let task;

    switch (character) {
        case 'Pikachu':
            task = "Thunderbolt !!";
            break;
        case 'Charmander':
            task = "Flamethrower !!";
            break;
        case 'Bulbasaur':
            task = "Razor leaf !!";
            break;
        case 'Ekanse':
            task = "Poison tail !!";
            break;
        case 'Squirtle':
            task = "Water gun";
            break;
        default:
            task = "Good luck!";
    }

    document.getElementById('task').innerText = `Task: ${task}`;
}
