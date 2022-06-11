import React, { useContext } from 'react';
import CartContext from './CartContext';
import Navigation from './Navigation';

const Cart = () => {
  const { cartItems, removeCartItem } = useContext(CartContext);

  return (
    <React.Fragment>
      <Navigation
        cartItemNumber={cartItems.reduce((count, currItem) => {
          return count + currItem.quantity;
        }, 0)}
      />
      <ul>
        {cartItems.length === 0 && <p>No Item in the cart</p>}
        {cartItems.map((item) => (
          <li key={item.key}>
            {item.title} ({item.quantity})
            <button onClick={removeCartItem.bind(this, item.id)}>
              Remove from Cart
            </button>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default Cart;
