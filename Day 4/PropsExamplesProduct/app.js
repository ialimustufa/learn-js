// App.js code

import React from 'react';
import UserCard from './UserCard';

function App() {
  return (
    <div className="App">
      <UserCard name="John Doe" email="john.doe@example.com" />
      <UserCard name="Jane Smith" email="jane.smith@example.com" />
    </div>
  );
}

export default App;