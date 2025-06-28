import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";

function Navbar() {
  const { cart } = useContext(CartContext);
  const { user, logout } = useContext(UserContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <Link className="navbar-brand" to="/">🍴 Foodies</Link>
      <ul className="navbar-nav ms-auto">
        <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/cart">Cart ({cart.length})</Link></li>
        {user ? (
          <>
            <li className="nav-item"><span className="nav-link">Hi, {user.name}</span></li>
            <li className="nav-item"><button className="btn btn-sm btn-warning" onClick={logout}>Logout</button></li>
          </>
        ) : (
          <>
            <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/register">Register</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
