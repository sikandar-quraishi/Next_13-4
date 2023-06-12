// pages/login.js

import { useContext } from 'react';
import AuthContext from './context/AuthContext';

const Login = () => {
  const {login} = useContext(AuthContext);
  console.log("login", login)

  const handleLogin = () => {
    // Perform login logic, e.g., send API request, verify credentials
    login();
  };

  return (
    <div>
      <h1>Login</h1>
      {/* Login form */}
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
