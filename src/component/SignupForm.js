import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../common/SignupForm.css';

const SignupForm = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    setError('');
    alert("Signup successful");
    navigate('/login');
  };

  return (
    <div className="signupContainer">
      <div className="imageSection">
        <img src="https://i.pinimg.com/564x/51/9f/da/519fdac7a469c748cc58b19bea79836a.jpg" alt="Signup" />
      </div>
      <div className="formSection">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="formGroup">
            <label>Username</label>
            <input type="text" placeholder="Enter your name" required />
          </div>
          <div className="formGroup">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
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
          <div className="formGroup">
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="error">{error}</p>}
          <div className="formFooter">
            <a href="/forgot-password" className="forgotPasswordLink">Forgot password?</a>
            <button type="submit" className="signUpButton">Register</button>
            <p>Already have an account? <a href="/login">Login</a></p>
          </div>
        </form>
        <div className="socialSignup">
          <hr className="divider" />
          <p className="orText">Or Sign Up with</p>
          <hr className="divider" />
          <div className="socialIcons">
            <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
              <img src="https://i.pinimg.com/564x/60/41/99/604199df880fb029291ddd7c382e828b.jpg" alt="Google" className="socialIcon" />
              <p>Google</p>
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="https://i.pinimg.com/736x/b2/ef/68/b2ef689d1f387dfc949d0f63c3865441.jpg" alt="Facebook" className="socialIcon" />
              <p>Facebook</p>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <img src="https://i.pinimg.com/564x/cf/5f/7d/cf5f7dca8d30d52a39f4043f3796d7f0.jpg" alt="GitHub" className="socialIcon" />
              <p>GitHub</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
