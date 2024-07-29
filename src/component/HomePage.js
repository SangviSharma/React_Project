import React from 'react';
import '../common/HomePage.css';

const HomePage = () => {
  return (
    <div>
      <header className="header">
        <a href="#"><img src="https://www.modyuniversity.ac.in/wp-content/uploads/2021/11/mody-logo.png.webp" alt="Logo" className="logo" /></a>
        <nav>
          <ul className="navbar">
            <li><a className="active" href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/life">Life@Mody</a></li>
            <li><a href="/admission">Admissions</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <div className="boxesContainer">
        <div className="box">
          <img src="https://www.modyuniversity.ac.in/wp-content/uploads/2024/07/01-400x400.jpg" alt="" className="boxImage" />
        </div>
        <div className="box">
            <img src="https://www.modyuniversity.ac.in/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-04-at-11.28.24-AM-400x400.jpeg" alt="" className="boxImage" />
        </div>
        <div className="box">
            <img src="https://www.modyuniversity.ac.in/wp-content/uploads/2023/03/NAAC-Accredited-University-Banner2.jpeg.webp" alt="" className="boxImage" />
        </div>
      </div>

      <div className="buttonsContainer">
        <button onClick={() => window.location.href='/login'}>Login</button>
        <button onClick={() => window.location.href='/signup'}>Register</button>
      </div>
    </div>
  );
};

export default HomePage;
