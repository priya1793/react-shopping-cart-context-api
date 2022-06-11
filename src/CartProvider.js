import React, { useReducer } from 'react';
import actions from './Actions';
import ProductsData from './ProductsData';
import CartContext from './CartContext';
import CartReducer from './CartReducer';

const CartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(CartReducer, { cartItems: [] });

  const providerValue = {
    products: ProductsData,
    cartItems: cartState.cartItems,
    addCartItem: (product) =>
      dispatch({ type: actions.ADD_ITEM_TO_CART, product: product }),
    removeCartItem: (productId) =>
      dispatch({ type: actions.REMOVE_ITEM_FROM_CART, productId: productId }),
    // increaseProductCount: (productName) =>
    //   dispatch({ type: actions.INCREASE_PRODUCT_COUNT, productName }),
    // reduceProductCount: (productName) =>
    //   dispatch({ type: actions.DECREASE_PRODUCT_COUNT, productName }),
  };

  return (
    <CartContext.Provider value={providerValue}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
