// follow setup file

// install react
/*

npm install -g create-react-app

Create a react app
npx create-react-app my-react-app
cd my-react-app
npm start
*/

// Creating a Simple Component

// add below code to App.js

import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to React</h1>
        <p>This is a simple React component.</p>
      </header>
    </div>
  );
}

export default App;


/*

public: Contains the public assets of the application, such as index.html.
src: Contains the source code of the React application.

    index.js: The entry point of the React application.
    App.js: The main App component.
    App.css: The CSS file for styling the App component.

*/

// class component example
// new file - src folder -  Greeting.js

import React, { Component } from 'react';

class Greeting extends Component {
  render() {
    return <h1>Hello, Welcome to React!</h1>;
  }
}

export default Greeting;

// render Method: Returns the JSX to display the greeting message.

// all it in App.js -> top line
import Greeting from './Greeting';

// functional component example
// new file - src folder -  ClickMeButton.js

import React, { Component } from 'react';

class ClickMeButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
  }

  handleClick = () => {
    this.setState({ clicked: true });
  };

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.clicked ? 'Clicked!' : 'Click Me'}
      </button>
    );
  }
}

export default ClickMeButton;

/*
code explanation:

Constructor: Initializes the state with a clicked property set to false.
handleClick Method: Updates the state by setting clicked to true.
render Method: Returns the JSX to display the button. The button's text changes based on the clicked state.

*/

// Final App.js file

import React from 'react';
import Greeting from './Greeting';
import ClickMeButton from './ClickMeButton';

function App() {
  return (
    <div className="App">
      <Greeting />
      <ClickMeButton />
    </div>
  );
}

export default App;

/*

These smaller examples illustrate the basics of 
creating and using class components in React.
 The Greeting component shows a simple static 
 message, while the ClickMeButton component 
 demonstrates handling state and events within a class component.

*/

// create a new file - src folder - Welcome.js

import React from 'react';

function Welcome(props) {
  return <h2>Welcome, {props.name}!</h2>;
}

export default Welcome;

// Use the Welcome component in App.js.
// App.js

import React from 'react';
import './App.css';
import Welcome from './Welcome';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to React</h1>
        <Welcome name="John Doe" />
        <p>This is a simple React component.</p>
      </header>
    </div>
  );
}

export default App;