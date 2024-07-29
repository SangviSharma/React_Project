// src/component/Dashboard.js
import React from 'react';
import '../common/Dashboard.css';
import Header from './header';

function Dashboard() {
  return (
    <div>
      <Header />
      
      <div className="sidebar">
        <a href="#Dashboard">Dashboard</a>
        <a href="#Profile">Profile</a>
        <a href="#Settings">Settings</a>
        <a href="#Service">Service</a>
        <a href="#contact">Contact</a>
        <button className="logout-btn">Logout</button>
      </div>
      <div className="main-content">
      <h1 className="animated-header">Welcome to the College Dashboard.</h1>
        <p><span>This is our first Dashboard and we have created it under the guidance of Mr.Amit Rai.</span>
          <span>We would try to learn more and will keep learing and improving our knowledge.</span>
        </p>
        
        <div className="flex-container">
          <div className="left-section">
            <div className="flex-box image-box">
              <img src="https://lh3.googleusercontent.com/p/AF1QipOTCjU-HuMB0t5ABgb8_gzp8iVreho64633ESS1=s1360-w1360-h1020" alt="Example" />
            </div>
            <div className="flex-box image-box">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTavo5lnKjiTy-IWWQptUx3i1QjFjcDObwbUQ&s" alt="example"/>
            </div>
            <div className="flex-box image-box">
              <img src="https://i.ytimg.com/vi/WyStSY9Jj4Q/maxresdefault.jpg" alt="example"/>
            </div>
          </div>
          <div className="right-section">
           <div className="right-section-row">
            <div className="flex-box small-box">
             <div className="header-box">
              <h5>User1</h5>
             </div>
             <div className="content-box">
               <p>
                <span>Name: Sakshi</span>
                <span>Enroll: 220207</span>
                <span>CTC: 50LPA</span>
                <span>Grade: A+</span>
               </p>
               <div className="button-container">
               <button className="add-profile-button">Add Profile</button>
               </div>
            </div>
            </div>
            <div className="flex-box small-box">
            <div className="header-box">
              <h5>User2</h5>
             </div>
             <div className="content-box">
               <p>
                <span>Name: Ronak</span>
                <span>Enroll: 220206</span>
                <span>CTC: 50LPA</span>
                <span>Grade: A+</span>
               </p>
               <div className="button-container">
               <button className="add-profile-button">Add Profile</button>
               </div>
            </div>
            </div>
           </div>
           <div className="right-section-row">
            <div className="flex-box small-box">
            <div className="header-box">
              <h5>User3</h5>
             </div>
             <div className="content-box">
               <p>
                <span>Name: Vishu</span>
                <span>Enroll: 220228</span>
                <span>CTC: 50LPA</span>
                <span>Grade: A+</span>
               </p>
               <div className="button-container">
               <button className="add-profile-button">Add Profile</button>
               </div>
            </div>
           </div>
           <div className="flex-box small-box">
           <div className="header-box">
              <h5>User4</h5>
             </div>
             <div className="content-box">
               <p>
                <span>Name: Taniya</span>
                <span>Enroll: 220221</span>
                <span>CTC: 50LPA</span>
                <span>Grade: A+</span>
               </p>
               <div className="button-container">
               <button className="add-profile-button">Add Profile</button>
               </div>
            </div>
           </div>
          </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
