import React, { useState } from 'react';
import axios from 'axios';
import '../assets/css/Admin_Login.css';
import Navbar from '../components/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import admin from '../assets/images/userside.jpeg';

export default function User_Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`http://localhost:8081/api/v1/auth/login`, {
        email,
        password,
      });

      if (response.status === 200) {
        const token = response.data.token;
        localStorage.setItem('token', token);
        localStorage.setItem('userId', response.data.id); 
        localStorage.setItem('email', response.data.email); 

        // console.log(response.data.email);
        navigate(`/user-profile`);
      } else {
        alert('Invalid email or password!');
      }
    } catch (error) {
      console.error('Login Error:', error);
      alert('Invalid email or password! Please try again.');
    }
  };

  return (
    <>
      <Navbar />
      <div className="signin-container">
        <div className="side-image">
          <img src={admin} alt="Side Image" />
        </div>
        <div className="signin-form">
          <h1 className="signin-title">Sign In</h1>

          <br />
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email" style={{ fontSize: '20px' }}>
                Email:
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password" style={{ fontSize: '20px' }}>
                Password:
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Log In
            </button>
            <div>
              <br />
              <p>
                Don't have an account?{' '}
                <Link to="/user-register">Register</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
