// create file JSXExamples.js in src folder

import React from 'react';

// Example 1: Basic JSX
function BasicExample() {
  return (
    <div>
      <h1>Hello, World!</h1>
      <p>This is a basic JSX example.</p>
    </div>
  );
}

// Example 2: Embedding Expressions in JSX
function ExpressionExample() {
  const name = 'John Doe';
  const age = 30;

  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>You are {age} years old.</p>
    </div>
  );
}

// Example 3: Conditional Rendering
function ConditionalExample(props) {
  const isLoggedIn = props.isLoggedIn;

  return (
    <div>
      <h1>{isLoggedIn ? 'Welcome back!' : 'Please sign in.'}</h1>
    </div>
  );
}

// Example 4: Rendering Lists
function ListExample() {
  const items = ['Apple', 'Banana', 'Cherry'];

  return (
    <div>
      <h1>Fruits List</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

// Example 5: Using Attributes in JSX
function AttributesExample() {
  return (
    <div>
      <h1>JSX Attributes Example</h1>
      <img src="https://via.placeholder.com/150" alt="Placeholder" />
      <input type="text" placeholder="Enter text here" />
      <button disabled={false}>Click Me</button>
    </div>
  );
}

// Example 6: Inline Styles in JSX
function InlineStylesExample() {
  const style = {
    color: 'blue',
    backgroundColor: 'lightgray',
    padding: '10px',
    borderRadius: '5px',
  };

  return (
    <div style={style}>
      <h1>Inline Styles Example</h1>
      <p>This div is styled using inline styles in JSX.</p>
    </div>
  );
}

// Example 7: Nested Components
function Header() {
  return <h1>My Website</h1>;
}

function Content() {
  return <p>Welcome to my website. Here is some content.</p>;
}

function Footer() {
  return <footer>&copy; 2024 My Website</footer>;
}

function NestedComponentsExample() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

// Exporting all examples together
function JSXExamples() {
  return (
    <div>
      <BasicExample />
      <ExpressionExample />
      <ConditionalExample isLoggedIn={true} />
      <ListExample />
      <AttributesExample />
      <InlineStylesExample />
      <NestedComponentsExample />
    </div>
  );
}

export default JSXExamples;