import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from './App';
import Cart from './Cart';
import ProductDetail from './ProductDetail';
import SearchBar from './SearchBar';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/search" element={<SearchBar />} />
      {/* Add more routes as needed */}
    </Routes>
  );
}

export default AppRoutes;
