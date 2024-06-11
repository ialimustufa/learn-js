document.addEventListener('DOMContentLoaded', function() {
    const square = document.getElementById('square');
    const gameArea = document.getElementById('gameArea');
    const step = 10; // Pixels to move on each key press

    // Event listener for keydown events to move the square with arrow keys
    document.addEventListener('keydown', function(event) {
        const left = square.offsetLeft;
        if (event.key === 'ArrowLeft' && left > 0) {
            square.style.left = left - step + 'px';
        } else if (event.key === 'ArrowRight' && left < gameArea.clientWidth - square.clientWidth) {
            square.style.left = left + step + 'px';
        }
        // to not go out
        // && left > 0 
        // && left < gameArea.clientWidth - square.clientWidth
    });

    // Event listener for mouseover event to change square color when cursor hovers over it
    square.addEventListener('mouseover', function() {
        square.style.backgroundColor = 'blue';
    });

    // Event listener for mouseout event 
    square.addEventListener('mouseout', function() {
        square.style.backgroundColor = 'red';
    });

    // Event listener for click event to display an alert 
    square.addEventListener('click', function() {
        alert('Square clicked!');
    });
});
