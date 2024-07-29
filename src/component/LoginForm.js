import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../common/LoginForm.css'; // Import the regular CSS file

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your login logic here
    alert("Login successful! Welcome back");
    navigate('/dashboard');
  };

  return (
    <div className="loginContainer">
      <div className="formSection">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="formGroup">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="formGroup">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="error">{error}</p>}
          <div className="formFooter">
            <a href="/forgot-password" className="forgotPasswordLink">Forgot password?</a>
            <button type="submit" className="loginButton">Login</button>
            <p>Don't have an account? <a href="/signup">Sign Up</a></p>
          </div>
        </form>
        <div className="socialSignup">
          <hr className="divider" />
          <p className="orText">or Login with</p>
          <hr className="divider" />
          <div className="socialIcons">
            <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
              <img src="https://i.pinimg.com/564x/60/41/99/604199df880fb029291ddd7c382e828b.jpg" alt="Google" className="socialIcon" />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="https://i.pinimg.com/736x/b2/ef/68/b2ef689d1f387dfc949d0f63c3865441.jpg" alt="Facebook" className="socialIcon" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <img src="https://i.pinimg.com/564x/cf/5f/7d/cf5f7dca8d30d52a39f4043f3796d7f0.jpg" alt="GitHub" className="socialIcon" />
            </a>
          </div>
        </div>
      </div>
      <div className="imageSection">
        <img src="https://i.pinimg.com/564x/51/9f/da/519fdac7a469c748cc58b19bea79836a.jpg" alt="Login" />
      </div>
    </div>
  );
};

export default LoginForm;
