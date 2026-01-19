import React from 'react';
import './Login.css';

function Login() {
  return (
    <div className="login-container">
      <h2>Login Section</h2>
      <input type="text" placeholder="Username" />
      <button>Submit</button>
    </div>
  );
}

export default Login; // <--- THIS IS THE MOST IMPORTANT LINE