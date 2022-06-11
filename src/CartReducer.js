import React from 'react';
import actions from './Actions';

const addCartItem = (product, state) => {
  const existedCartItems = [...state.cartItems];
  const matchedIndex = existedCartItems.findIndex(
    (item) => item.id === product.id
  );

  if (matchedIndex < 0) {
    existedCartItems.push({ ...product, quantity: 1 });
  } else {
    const updatedItem = { ...existedCartItems[matchedIndex] };
    updatedItem.quantity++;
    existedCartItems[matchedIndex] = updatedItem;
  }

  return { ...state, cartItems: existedCartItems };
};

const removeCartItem = (productId, state) => {
  const existedCartItems = [...state.cartItems];
  const matchedIndex = existedCartItems.findIndex(
    (item) => item.id === productId
  );
  const updatedItem = { ...existedCartItems[matchedIndex] };
  updatedItem.quantity--;

  if (updatedItem.quantity <= 0) {
    existedCartItems.splice(matchedIndex, 1);
  } else {
    existedCartItems[matchedIndex] = updatedItem;
  }

  return { ...state, cartItems: existedCartItems };
};

// Create reducer function
const CartReducer = (state, action) => {
  const { type, product, productId } = action;
  switch (type) {
    case actions.ADD_ITEM_TO_CART:
      addCartItem(product, state);

    case actions.REMOVE_ITEM_FROM_CART:
      removeCartItem(productId, state);

    default:
      return state;
  }
};

export default CartReducer;
