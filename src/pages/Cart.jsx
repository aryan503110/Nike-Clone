import React, { useState, useEffect } from "react";
import "./Cart.css"; // Make sure to import the CSS file

function Cart({ cart,CART, setCART }) {
  
  useEffect(() => {
    setCART(cart);
  }, [cart]);

  return (
    <>
    {CART.length > 0 ? <div className="cart-container">
      {CART.map((cart, cartindex) => (
        <div key={cartindex} className="cart-item">
          <img src={cart.img} alt={cart.name} className="cart-item-image" />
          <div className="cart-item-details">
            <h2 className="cart-item-name">{cart.name}</h2>
            <p className="cart-item-price">$ {cart.price * cart.quantity}</p>
          </div>
          <div className="quantity-controls">
            <button
              className="quantity-btn"
              onClick={() => {
                const _CART = CART.map((item, index) => {
                  return cartindex === index
                    ? {
                        ...item,
                        quantity: item.quantity > 0 ? item.quantity - 1 : 0,
                      }
                    : item;
                });
                setCART(_CART);
              }}
            >
              -
            </button>
            <span className="quantity-display">{cart.quantity}</span>
            <button
              className="quantity-btn"
              onClick={() => {
                const _CART = CART.map((item, index) => {
                  return cartindex === index
                    ? { ...item, quantity: item.quantity + 1 }
                    : item;
                });
                setCART(_CART);
              }}
            >
              +
            </button>
          </div>
        </div>
      ))}
      <div className="cart-total">
        <span>Order Total: $</span>
        <span>
          {CART.map((item) => item.price * item.quantity).reduce(
            (total, value) => total + value,
            0
          )}
        </span>
      </div>
      <div>
        <a href="/orderplaced"><button className="checkout">Checkout</button></a>
      </div>
    </div> : <center><h3>No Orders Yet</h3></center>}
    </>
  );
}

export default Cart;
