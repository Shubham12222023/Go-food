// src/context/UserContext.js
import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem("foodies-user");
    return stored ? JSON.parse(stored) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem("foodies-user", JSON.stringify(user));
    } else {
      localStorage.removeItem("foodies-user");
    }
  }, [user]);

  const login = (email, password) => {
    const storedUser = JSON.parse(localStorage.getItem("foodies-register"));
    if (
      storedUser &&
      storedUser.email === email &&
      storedUser.password === password
    ) {
      setUser({ name: storedUser.name, email });
      return true;
    }
    return false;
  };

  const logout = () => setUser(null);

  const register = (name, email, password) => {
    const newUser = { name, email, password };
    localStorage.setItem("foodies-register", JSON.stringify(newUser));
    return true;
  };

  return (
    <UserContext.Provider value={{ user, login, logout, register }}>
      {children}
    </UserContext.Provider>
  );
}
