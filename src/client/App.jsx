import React, { useState } from 'react';
import Card from './components/Card';
import ProductDetail from './components/ProductDetail';
import SearchBar from './components/SearchBar'; // Import the SearchBar component
import { faker } from '@faker-js/faker';
import './style.css'; // Import your CSS file


export default function Faker() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchText, setSearchText] = useState(''); // State for search text
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

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  // Function to filter products based on search text
  const filterProducts = (products, text) => {
    return products.filter((product) =>
      product.product_name.toLowerCase().includes(text.toLowerCase())
    );
  };

  // Update the search text and filtered products when the user types in the search bar
  const handleSearch = (text) => {
    setSearchText(text);
  };

  // Filter the products based on the search text
  const filteredProducts = filterProducts(data, searchText);

  return (
    <>
      <h1>Inventory</h1>
      <SearchBar onSearch={handleSearch} /> {/* Add the SearchBar component */}
      {filteredProducts.map((product) => (
        <div key={product.id} onClick={() => handleProductClick(product)}>
          <Card product={product} />
        </div>
      ))}

      {selectedProduct && <ProductDetail product={selectedProduct} />}
    </>
  );
}
