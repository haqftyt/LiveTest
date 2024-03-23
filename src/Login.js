import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Login.css'; // import your CSS file

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = () => {
    // Perform login logic here, for simplicity let's just check if both fields are filled
    if (username && password) {
      // Redirect to main page
      history.push('/main');
    } else {
      alert('Please fill in both fields');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
