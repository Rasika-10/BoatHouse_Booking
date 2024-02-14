

import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Choose.css'// Import the CSS file
import Navbar from "../components/Navbar";
import admin from '../assets/images/adminchoose.png'
import user from '../assets/images/userchoose.png'
const Choose = () => {
  return (
    <>
    <Navbar/>
    <div className="choose-container">
      <h2>Discover Your Role</h2>
      <p>Choose who you are in this journey:</p>
      <div className="card-container">
        <Link to="/admin">
          <div className="role-card user-card">
            <img
              src={admin}
              alt="admin"
            />
            <h3>Admin</h3>
          </div>
        </Link>
        <Link to="/user">
          <div className="role-card admin-card">
            <img
              src={user}
              alt="user"
            />
            <h3>User</h3>
          </div>
        </Link>
      </div>
    </div>
    </>
  );
};

export default Choose;

