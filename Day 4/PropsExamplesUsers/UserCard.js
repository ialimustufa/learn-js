// src/UserCard.js
// Demonstrates how to pass multiple props 
//(name and email) to a component and display them in a styled card.

import React from 'react';

function UserCard(props) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <h2>{props.name}</h2>
      <p>Email: {props.email}</p>
    </div>
  );
}

export default UserCard;