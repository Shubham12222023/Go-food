import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const { cart, setCart } = useContext(CartContext);
  const { user } = useContext(UserContext);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  // 🚫 Protect Route: Require login
  if (!user) {
    return (
      <div className="container mt-4">
        <h3 className="text-danger">Access Denied</h3>
        <p>Please login to continue to checkout.</p>
      </div>
    );
  }

  const handlePlaceOrder = () => {
    setOrderPlaced(true);
    localStorage.removeItem("foodies-cart");
    setCart([]);
    setTimeout(() => navigate("/"), 3000);
  };

  if (orderPlaced) {
    return (
      <div className="container mt-4 text-center">
        <h3>🎉 Order Placed Successfully!</h3>
        <p>Redirecting to homepage...</p>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h3>Checkout Summary</h3>
      <ul className="list-group mb-3">
        {cart.map((item, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between"
          >
            <span>{item.name}</span>
            <span>₹{item.price}</span>
          </li>
        ))}
      </ul>
      <h5>Total: ₹{total}</h5>
      <button className="btn btn-success mt-3" onClick={handlePlaceOrder}>
        Place Order
      </button>
    </div>
  );
}

export default Checkout;
