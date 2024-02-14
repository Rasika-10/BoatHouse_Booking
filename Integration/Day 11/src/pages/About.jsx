


// import '../assets/css/About.css'
// import Navbar from "../components/Navbar.jsx";
// import img from '../assets/images/about.jpeg'
// import img1 from '../assets/images/about3.jpeg'
// import f1 from '../assets/images/f1.png'
// import f2 from '../assets/images/f2.png'
// import f3 from '../assets/images/f3.png'
// import f4 from '../assets/images/f4.png'
// import b1 from '../assets/images/b1.jpeg'
// import b2 from '../assets/images/b2.jpeg'
// import b3 from '../assets/images/b3.jpeg'



// const About = () => {
 
//   return (
//     <>

//      <Navbar/>
    
    
//      <div className='about-container'>
//      <div className="about-us-container">
//       <h1 className="about-us-header">About Us</h1>
//       <br></br>
     
//       <div className="about-us-content">
//         <div className="about-us-text">
//           <p>
//           Welcome to our Boat House Booking Service, where every journey is an unforgettable adventure on the water. We are passionate about providing you with the perfect getaway experience, combining comfort, luxury, and the serenity of the open sea.
//           </p>
//           <h4>Our Story:</h4>
//           <p>Established with a vision to redefine the way you experience waterfront living, our Boat House Booking Service was born out of a love for the ocean and a desire to create lasting memories for our guests.</p>
//         </div>
//         <div className="about-us-image">
//           <img src={img} alt="Placeholder Image" />
//         </div>
//       </div>
//      <div className="about-us-service">
//       <h1 className="about-us-header" >Our Services</h1>

//       <div className="text-and-image-container">
//       <div className="image-container">
//         <img src={img1} alt="Right side image" />
//       </div>
//       <div className="about-us-text">
          
//           <h4>Customized Experiences</h4>
//           <p>Elevate your stay with our personalized experiences. From private boat tours to adventurous water sports, we tailor activities to suit your preferences, creating unforgettable memories.</p>
//           <br></br>
//            <h4>Expert Guidance</h4>
//           <p>Our team of experienced professionals is dedicated to ensuring a seamless and enjoyable experience. From booking assistance to on-site support, we are committed to making your time with us exceptional.</p>
//         </div>
//      </div>
//      <div className="features-container">
     
//       <div className="features-content">
//         <div className="feature-item">
//           <img src={f1} alt="Houseboat" />
//           <h3>200+ Houseboats</h3>
        
//         </div>
//         <div className="feature-item">
//           <img src={f2} alt="Exotic Routes" />
//           <h3>Exotic Routes</h3>
          
//         </div>
//         <div className="feature-item">
//           <img src={f3} alt="Easy Booking" />
//           <h3>Easy Booking</h3>
         
//         </div>
//         <div className="feature-item">
//           <img src={f4} alt="Fulltime Support" />
//           <h3>Fulltime Support</h3>
          
//         </div>
        
//       </div>
//     </div>
//     <h2 className='about-h2'><center>Best Tour Packages!!</center></h2>
//     <div className="aboutus-container">
    
   
   
//     <div className="aboutus-item">
//       <div className="aboutus-card">
//         <img src={b1} alt="Sport Activities" className="aboutus-card-image" />
//         <div className="aboutus-card-content">
//           <h3 className="aboutus-card-title">Deluxe Boats</h3>
        
          
          
         
//         </div>
//       </div>
//     </div>
//     <div className="aboutus-item">
//       <div className="aboutus-card">
//         <img src={b2} alt="Sport Activities" className="aboutus-card-image" />
//         <div className="aboutus-card-content">
//           <h3 className="aboutus-card-title">Premium Boats</h3>
         
          
         
//         </div>
//       </div>
//     </div>
//     <div className="aboutus-item">
//       <div className="aboutus-card">
//         <img src={b3} alt="Sport Activities" className="aboutus-card-image" />
//         <div className="aboutus-card-content">
//           <h3 className="aboutus-card-title">Luxury Boats</h3>
          
          
         
//         </div>
//       </div>
//     </div>
//     </div>
//     </div>
//     </div>
  
       
     
     
//     </div>
 

//     </>
//   );
// };

// export default About;


// About.js
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import img from '../assets/images/about.jpeg';
import img1 from '../assets/images/about3.jpeg';
import f1 from '../assets/images/f1.png';
import f2 from '../assets/images/f2.png';
import f3 from '../assets/images/f3.png';
import f4 from '../assets/images/f4.png';
import b1 from '../assets/images/b1.jpeg';
import b2 from '../assets/images/b2.jpeg';
import b3 from '../assets/images/b3.jpeg';
import axios from 'axios';
import '../assets/css/About.css';

const About = () => {
  const [aboutContent, setAboutContent] = useState({
    header: 'About Us',
    text: '',
    heading: '',
    text1: ''
  });

  useEffect(() => {
    axios.get('http://localhost:8081/about/get/1') // Replace 'your_backend_api_url' with the actual endpoint
      .then(response => {
        setAboutContent(response.data); // Assuming response.data is an object containing the about content
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        // Handle error cases here
      });
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <>
      <Navbar />
      <div className="about-container">
        <div className="about-us-container">
          <h1 className="about-us-header">About Us</h1>
          <br />
          <div className="about-us-content">
            <div className="about-us-text">
              <p>{aboutContent.text}</p>
              <br />
              <h3>{aboutContent.heading}</h3>
              <br />
              <p>{aboutContent.text1}</p>
            </div>
            <div className="about-us-image">
              <img src={img} alt="Placeholder Image" />
            </div>
          </div>
          <div className="about-us-service">
            <h1 className="about-us-header">Our Services</h1>
            <div className="text-and-image-container">
              <div className="image-container">
                <img src={img1} alt="Right side image" />
              </div>
              <div className="about-us-text">
                <h4>Customized Experiences</h4>
                <p>Elevate your stay with our personalized experiences. From private boat tours to adventurous water sports, we tailor activities to suit your preferences, creating unforgettable memories.</p>
                <br />
                <h4>Expert Guidance</h4>
                <p>Our team of experienced professionals is dedicated to ensuring a seamless and enjoyable experience. From booking assistance to on-site support, we are committed to making your time with us exceptional.</p>
              </div>
            </div>
            <div className="features-container">
              <div className="features-content">
                <div className="feature-item">
                  <img src={f1} alt="Houseboat" />
                  <h3>200+ Houseboats</h3>
                </div>
                <div className="feature-item">
                  <img src={f2} alt="Exotic Routes" />
                  <h3>Exotic Routes</h3>
                </div>
                <div className="feature-item">
                  <img src={f3} alt="Easy Booking" />
                  <h3>Easy Booking</h3>
                </div>
                <div className="feature-item">
                  <img src={f4} alt="Fulltime Support" />
                  <h3>Fulltime Support</h3>
                </div>
              </div>
            </div>
            <h2 className='about-h2'><center>Best Tour Packages!!</center></h2>
            <div className="aboutus-container">
              <div className="aboutus-item">
                <div className="aboutus-card">
                  <img src={b1} alt="Sport Activities" className="aboutus-card-image" />
                  <div className="aboutus-card-content">
                    <h3 className="aboutus-card-title">Deluxe Boats</h3>
                  </div>
                </div>
              </div>
              <div className="aboutus-item">
                <div className="aboutus-card">
                  <img src={b2} alt="Sport Activities" className="aboutus-card-image" />
                  <div className="aboutus-card-content">
                    <h3 className="aboutus-card-title">Premium Boats</h3>
                  </div>
                </div>
              </div>
              <div className="aboutus-item">
                <div className="aboutus-card">
                  <img src={b3} alt="Sport Activities" className="aboutus-card-image" />
                  <div className="aboutus-card-content">
                    <h3 className="aboutus-card-title">Luxury Boats</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
