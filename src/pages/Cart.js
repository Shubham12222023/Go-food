// src/pages/Cart.js
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="container mt-4">
      <h3>Your Cart</h3>
      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>
          <ul className="list-group mb-3">
            {cart.map((item, index) => (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <div>
                  <h6>{item.name}</h6>
                  <p className="m-0 text-muted">₹{item.price}</p>
                </div>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => removeFromCart(index)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <h5>Total: ₹{total}</h5>
          <Link to="/checkout" className="btn btn-success mt-2">
            Proceed to Checkout
          </Link>
        </>
      )}
    </div>
  );
}

export default Cart;
