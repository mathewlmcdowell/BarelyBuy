import React, { useState } from 'react';
import Card from './components/Card';
import { faker } from '@faker-js/faker';

export default function Faker() {
  const [selectedProduct, setSelectedProduct] = useState(null); // Initialize selected product state
  const data = [];

  for (let i = 0; i < 50; i++) {
    // Generate a random price between $8 and $20
    const minPrice = 8;
    const maxPrice = 20;
    const price = `$${(minPrice + Math.random() * (maxPrice - minPrice)).toFixed(2)}`;

    const fakee = {
      id: i,
      product_name: faker.commerce.product(),
      price: price,
    };
    data.push(fakee);
  }

  // Define the handleProductClick function to set the selected product
  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleAddToCart = (product) => {
    // Implement your logic to add the product to the cart here
    console.log(`Added ${product.product_name} to the cart`);
  };

  return (
    <>
      <h1>Inventory</h1>
      {data.map((product) => (
        <div key={product.id} onClick={() => handleProductClick(product)}>
          <Card product={product} onAddToCart={handleAddToCart} />
        </div>
      ))}

      {selectedProduct && <ProductDetail product={selectedProduct} />}
    </>
  );
}
