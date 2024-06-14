// App.js

import React from 'react';
import ProductList from './ProductList';

function App() {
  const products = [
    { name: 'Product 1', price: 29.99 },
    { name: 'Product 2', price: 39.99 },
    { name: 'Product 3', price: 49.99 },
  ];

  return (
    <div className="App">
      <ProductList products={products} />
    </div>
  );
}

export default App;