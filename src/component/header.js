// src/component/Header.js
import React from 'react';
import './header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img src="https://upload.wikimedia.org/wikipedia/en/4/45/Mody_University_logo.png" alt="Logo" className="logo" />
        <span className="logo-name">Mody University</span>
      </div>
      <div className="header-content">
        <input type="text" placeholder="Search..." className="search-bar" />
        <div className="header-right">
          <button className="logout-btn">Logout</button>
          <a href="#profile" className="profile">
            <img src="" alt="Profile" />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
