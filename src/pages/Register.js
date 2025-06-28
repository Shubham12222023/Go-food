import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

function Register() {
  const { register } = useContext(UserContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    register(name, email, password);
    alert("Registered successfully. Please login.");
    navigate("/login");
  };

  return (
    <div className="container mt-4">
      <h3>Register</h3>
      <form onSubmit={handleRegister}>
        <input type="text" className="form-control my-2" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="email" className="form-control my-2" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" className="form-control my-2" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button className="btn btn-primary">Register</button>
      </form>
    </div>
  );
}

export default Register;
