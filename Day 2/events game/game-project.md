# Mini Move the Square Game using Javascript;

## HTML Structure

- The HTML contains a `div` with the ID `gameArea` representing the game area.
- Inside the `gameArea`, there is a `div` with the ID `square`, representing the player-controlled square.
- Basic CSS styles are applied to the game area and square to set their dimensions and positions.
- The cursor style is set to `pointer` for the square to indicate that it is clickable.

## JavaScript Code

- The `DOMContentLoaded` event listener ensures that the DOM is fully loaded before executing the script.
- Constants are used to store references to the `square` and `gameArea` elements.
- The `step` variable controls the number of pixels the square moves with each key press.

## Square Movement

- A `keydown` event listener is added to the document to detect when the left or right arrow keys are pressed.
- If the left arrow key is pressed and the square is not at the left edge, the square's `left` style property is decreased by the value of `step` to move it left.
- If the right arrow key is pressed and the square is not at the right edge, the square's `left` style property is increased by the value of `step` to move it right.

## Mouse Interaction

- A `mouseover` event listener is added to the square to change its background color to blue when the mouse cursor hovers over it.
- A `mouseout` event listener is added to revert the square's background color to red when the mouse cursor leaves it.
- A `click` event listener is added to display an alert when the square is clicked.