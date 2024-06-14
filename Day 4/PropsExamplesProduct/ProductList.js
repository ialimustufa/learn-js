// Product List Component Example 
// src/ProductList.js
// Demonstrates how to pass an array of objects as a prop (products) to a 
// component and render each item in a list using the map function.

import React from 'react';

function ProductList(props) {
  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {props.products.map((product, index) => (
          <li key={index}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;