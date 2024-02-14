import React from 'react';
import '../assets/css/Admin_Profile.css'; // Import the CSS file for styling
import profile from '../assets/images/adminprofile1.webp';
import Sidebar from '../components/Sidebar';
import User_Sidebar from '../components/User_Sidebar';

const User_Home = () => {
  const adminInfo = {
    welcomeText: 'Welcome, User!',
   
  };

  return (
    <div className="main-container">
      <User_Sidebar />
      <div className="admin-content">
        <div className="header">
          <h2>{adminInfo.welcomeText}</h2>
          
        </div>
       
      </div>
    </div>
  );
};

export default User_Home;
