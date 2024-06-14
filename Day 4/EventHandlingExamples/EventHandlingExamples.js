/*

ButtonClick Component:

    Demonstrates handling a button click event to increment a counter.
    Method handleClick updates the state when the button is clicked.

InputChange Component:

    Demonstrates handling an input change event to update the state as the user types.
    Method handleChange updates the state based on the input field's value.

MouseOver Component:

    Demonstrates handling a mouse over event to change the background color of a div.
    Methods handleMouseOver and handleMouseOut update the state when the mouse enters and leaves the div.

*/

import React from 'react';

// Example 1: Button Click Event
// This component demonstrates handling a button click event that increments a counter.
class ButtonClick extends React.Component {
  constructor(props) {
    super(props);
    // Initialize the state with a count property set to 0
    this.state = {
      count: 0,
    };
  }

  // Method to handle button click and increment the count
  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h2>Button Click Counter: {this.state.count}</h2>
        <button onClick={this.handleClick}>Click Me!</button>
      </div>
    );
  }
}

// Example 2: Input Change Event
// This component demonstrates handling an input change event that updates the state as the user types in an input field.
class InputChange extends React.Component {
  constructor(props) {
    super(props);
    // Initialize the state with a text property set to an empty string
    this.state = {
      text: '',
    };
  }

  // Method to handle input changes and update the state
  handleChange = (event) => {
    this.setState({ text: event.target.value });
  };

  render() {
    return (
      <div>
        <h2>Input Change Event</h2>
        <input
          type="text"
          value={this.state.text}
          onChange={this.handleChange}
          placeholder="Type something..."
        />
        <p>You typed: {this.state.text}</p>
      </div>
    );
  }
}

// Example 3: Mouse Over Event
// This component demonstrates handling a mouse over event that changes the background color of a div.
class MouseOver extends React.Component {
  constructor(props) {
    super(props);
    // Initialize the state with a color property set to 'lightblue'
    this.state = {
      color: 'lightblue',
    };
  }

  // Method to handle mouse over event and change the color to 'lightgreen'
  handleMouseOver = () => {
    this.setState({ color: 'lightgreen' });
  };

  // Method to handle mouse out event and change the color back to 'lightblue'
  handleMouseOut = () => {
    this.setState({ color: 'lightblue' });
  };

  render() {
    return (
      <div
        style={{ backgroundColor: this.state.color, padding: '20px', textAlign: 'center' }}
        onMouseOver={this.handleMouseOver}
        onMouseOut={this.handleMouseOut}
      >
        <h2>Mouse Over Event</h2>
        <p>Hover over this box to change its color.</p>
      </div>
    );
  }
}

// Exporting all examples together
function EventHandlingExamples() {
  return (
    <div className="App">
      {/* Example 1: Button Click Event */}
      <ButtonClick />
      
      {/* Example 2: Input Change Event */}
      <InputChange />
      
      {/* Example 3: Mouse Over Event */}
      <MouseOver />
    </div>
  );
}

export default EventHandlingExamples;
