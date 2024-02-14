// import React from 'react'
// import Sidebar from '../components/Sidebar'

// export default function Admin_Home() {
//   return (

//     <>
 
//     <Sidebar/>

    
//     </>
//   )
// }

import React from 'react';
import '../assets/css/Admin_Profile.css'; // Import the CSS file for styling
import profile from '../assets/images/adminprofile1.webp';
import Sidebar from '../components/Sidebar';

const Admin_Home= () => {
  const adminInfo = {
    welcomeText: 'Welcome, Admin!',
   
  };

  return (
    <div className="main-container">
      <Sidebar />
      <div className="admin-content">
        <div className="header">
          <h2>{adminInfo.welcomeText}</h2>
          
        </div>
       
      </div>
    </div>
  );
};

export default Admin_Home;
