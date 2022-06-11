import React, { createContext } from 'react';
import ProductsData from './ProductsData';

const initialState = {
  products: ProductsData,
  cartItems: [],
  addCartItem: (product) => {},
  removeCartItem: (productId) => {},
};

// Create Context
const CartContext = createContext(initialState);

export default CartContext;
