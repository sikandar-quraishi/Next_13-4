// AuthContext.js

import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    // Perform your login logic, e.g., send API request, verify credentials
    // Simulating a successful login
    // Perform your login logic
    setIsAuthenticated(true);

    // try {
    //   // Send API request to verify credentials
    //   const response = await fetch('/api/login', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ username, password }),
    //   });

    //   if (response.ok) {
    //     setIsAuthenticated(true);
    //     // Additional logic if login is successful, such as storing tokens or user data
    //   } else {
    //     throw new Error('Invalid credentials');
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
  };

  const logout = () => {
    // Perform your logout logic, e.g., clear session, remove tokens
    // Simulating a successful logout
    // Perform your logout logic
    setIsAuthenticated(false);
  };
  console.log("isAuthenticated", isAuthenticated);

  return <AuthContext.Provider value={{ isAuthenticated, login, logout }}>{children}</AuthContext.Provider>;
};

export default AuthContext;
