import React, { useState } from 'react';

const SignIn = ({ onSignIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignInClick = () => {
    // Here you can perform your sign-in logic, e.g., send a request to your backend
    // For simplicity, we'll just call the onSignIn callback with the email and password
    onSignIn(email, password);
  };

  return (
    <div>
      <h2>Sign In</h2>
      <label>Email:</label>
      <input type="email" value={email} onChange={handleEmailChange} />
      <br />
      <label>Password:</label>
      <input type="password" value={password} onChange={handlePasswordChange} />
      <br />
      <button onClick={handleSignInClick}>Sign In</button>
    </div>
  );
};

export default SignIn;
