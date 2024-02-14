
import React from 'react';
import '../assets/css/home.css';

import logo from '../assets/images/home4.jpeg';
import houseboat from '../assets/images/houseboat.jpg';
import motorboat from '../assets/images/motor boat.jpg';
import shikaraboat from '../assets/images/shikaraboat.jpg';
import img from '../assets/images/boat3.jpg';
import Navbar from "../components/Navbar";
import { Button } from 'antd';
import Footer from '../components/Footer';
import imagehome from '../assets/images/home4.jpeg'
const Home = () => {
  return (

    <>
    <Navbar/>

  
 
   <br/>
   <br/>
   <br></br>
 
    <div className="text-and-image-container">
      <div className="text-container">
      <div className="shop-text">
        <h2>Explore The Backwaters</h2>
          <p>
          "Explore! Dream! Discover! On the boat of life, the destination is not a place but a new way of seeing things."Discover the perfect getaway on the water. Whether you're seeking a tranquil escape or an adventurous waterside experience, we have the ideal accommodations for you.
          </p>
          <div className="homebutton-container">
            <Button type="primary">Enjoy!!</Button>
            
          </div>
        </div>
      </div>
      <div className="image-container">
        <img src={imagehome} alt="Right side image" />
      </div>
    </div>
    {/* <div className="shop-with-us-template">
   
  
      <div className="homeimage-container">

        <img
          src={logo}
          alt="Shop with us"
          className="shop-image"
          />
  
  
        <div className="shop-text">
          <p>
          "Explore! Dream! Discover! On the boat of life, the destination is not a place but a new way of seeing things."
          </p>
          <div className="homebutton-container">
            <Button type="primary">Explore!!</Button>
            
          </div>
        </div>
      </div>
    </div> */}
   
    <h2 className='home-h1'>Watercraft Collection</h2>
    <div className="home-container">
    
      <div className="home-item">
        <div className="home-card">
          <img src={houseboat} alt="Sport Activities" className="home-card-image" />
          <div className="home-card-content">
            <h3 className="home-card-title">HOUSE BOATS</h3>
            <p className="home-card-description">
            Houseboats were traditionally cargo boats that carried rice and other commodities, which now are transformed into luxury boats.
            </p>
            
            
           
          </div>
        </div>
      </div>
      <div className="home-item">
        <div className="home-card">
          <img src={motorboat} alt="Our Services" className="home-card-image" />
          <div className="home-card-content">
            <h3 className="home-card-title">MOTOR BOATS</h3>
            <p className="home-card-description">
            Motor Boat is suitable for tourists who do not have the luxury of time, but still want to enjoy a cruise along the stunning waters of travel.
           </p>
          </div>
        </div>
      </div>
      
      
      <div className="home-item">
        <div className="home-card">
          <img src={shikaraboat} alt="Climbing Instructor" className="home-card-image" />
          <div className="home-card-content">
            <h3 className="home-card-title">SHIKARA BOATS</h3>
            <p className="home-card-description">
            Shikara boats are traditional motorized canoe boats with large seating capacity.With the bamboo and all four sides open for sightseeing.
            </p>
           
          </div>
        </div>
      </div>

  
      
     
    </div>
    {/* <Footer/> */}
    </>
  );
};

export default Home;

