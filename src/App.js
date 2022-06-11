import React from 'react';
import CartProvider from './CartProvider';
import ProductsList from './ProductsList';
import Cart from './Cart';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './style.css';

export default function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<ProductsList />} exact />
          <Route path="/cart" element={<Cart />} exact />
        </Routes>
      </Router>
    </CartProvider>
  );
}
