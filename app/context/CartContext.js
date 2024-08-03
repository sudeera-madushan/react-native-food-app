import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItemToCart = (item) => {
    if (cart.some((cartItem) => cartItem.id === item.id)) {
      cart.some((cartItem) => {
        if (cartItem.id === item.id) {
          cartItem.quantity++;
          return true;
        }
      });
      return;
    }
    setCart((prevCart) => [...prevCart, item]);
  };

  const removeItemFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addItemToCart, removeItemFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
