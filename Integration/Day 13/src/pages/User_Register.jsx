import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import Axios
import Navbar from '../components/Navbar';
import admin from '../assets/images/userside.jpeg';
import '../assets/css/User_Register.css';

export default function User_Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !number || !password || !confirmPassword) {
      alert('Please fill in all fields');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post(`http://localhost:8081/api/v1/auth/register`, {
        name,
        email,
        number,
        password,
      });

      console.log(response.data); // Log the response if needed

      alert('Registered Successfully!!');
      window.location.href = '/user'; // Redirect to user home upon successful registration
    } catch (error) {
      console.error('Registration Error:', error);
      alert('Registration failed. Please try again.'); // Show an alert if registration fails
    }
  };

  return (
    <>
      <Navbar />
      <div className="signup-container">
        <div className="signup-side-image">
          <img src={admin} alt="Side Image" />
        </div>
        <div className="signup-form">
          <h1 className="signup-title">Sign Up</h1>
          <br />

          <form onSubmit={handleSubmit}>
            <div className="signup-form-group">
              <label htmlFor="name" style={{ fontSize: '18px' }}>
                Name:
              </label>
              <input
                type="text"
                className="signup-form-control"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="signup-form-group">
              <label htmlFor="email" style={{ fontSize: '18px' }}>
                Email:
              </label>
              <input
                type="email"
                className="signup-form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="signup-form-group">
              <label htmlFor="number" style={{ fontSize: '18px' }}>
                Number:
              </label>
              <input
                type="text"
                className="signup-form-control"
                id="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
            <div className="signup-form-group">
              <label htmlFor="password" style={{ fontSize: '18px' }}>
                Password:
              </label>
              <input
                type="password"
                className="signup-form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="signup-form-group">
              <label htmlFor="confirmPassword" style={{ fontSize: '18px' }}>
                Confirm Password:
              </label>
              <input
                type="password"
                className="signup-form-control"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Register
            </button>
            <div>
              <br />
              <p>
                Already Registered?? Click 
                <Link to="/user">
                  <a className="signup" href="#">
                    Login
                  </a>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
