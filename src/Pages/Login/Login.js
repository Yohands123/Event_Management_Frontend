import React from 'react';

const Login = () => {
  return (
    <div className="login">
      <h2>Login</h2>
      <form>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />
        <button type="submit">Sign In</button>
      </form>
      <div>
        <p>Don't have an account?</p>
        <button>Sign Up</button>
      </div>
    </div>
  );
};

export default Login;
