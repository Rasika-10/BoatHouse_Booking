// import React from 'react'
// import Sidebar from '../components/Sidebar'
// export default function Admin_Profile() {
//   return (
//     <>
//     <Sidebar/>
    
//     </>
//   )
// }

// import React from 'react';
// import '../assets/css/Admin_Profile.css'; // Import the CSS file for styling
// import profile from '../assets/images/adminprofile1.webp';
// import Sidebar from '../components/Sidebar';

// const Admin_Profile = () => {
//   const user = {
//     name: 'John Doe',
//     age: 25,
//     gender: 'Male',
//     idProof: 'Driver\'s License', // You can replace this with the actual ID proof
//     imageSrc: 'path/to/user-image.jpg', // Replace with the actual path to the user's image
//   };

//   return (
//     <div className="main-container">
//       <Sidebar />
     
//      <div className='profile-move'>
//       <div className="profile-card">
//         <div className="profile-image">
//           <img src={profile} alt="User" />
//         </div>
//         <div className="profile-details">
//           <h2>{user.name}</h2>
//           <p>Age: {user.age}</p>
//           <p>Gender: {user.gender}</p>
//           <p>ID Proof: {user.idProof}</p>
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default Admin_Profile;

// BoatHouseAdminProfile.js
// BoatHouseAdminProfile.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/Admin_Profile.css'; // Import the CSS file for styling
import profile from '../assets/images/adminprofile1.webp';
import Sidebar from '../components/Sidebar';

const Admin_Profile = () => {
  const [editMode, setEditMode] = useState(false);
  const [admin, setAdmin] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phoneNumber: '123-456-7890',
    // Add more admin details as needed
  });

  const [cardWidth, setCardWidth] = useState(330); // Initial card width
  const [cardHeight, setCardHeight] = useState(350); // Initial card height

  const navigate = useNavigate();

  const handleEdit = () => {
    // Switch to edit mode
    setEditMode(true);
    // Adjust card width and height when entering edit mode
    setCardWidth(370); // Adjust the width as needed
    setCardHeight(450); // Adjust the height as needed
  };

  const handleSave = () => {
    // Save the edited admin details and switch back to view mode
    // You can add logic here to send the updated data to your server/database
    setEditMode(false);
    // Adjust card width and height when exiting edit mode
    setCardWidth(330); // Adjust the width as needed
    setCardHeight(350); // Adjust the height as needed
  };

  const handleChange = (e) => {
    // Handle changes in the input fields
    const { name, value } = e.target;
    setAdmin((prevAdmin) => ({
      ...prevAdmin,
      [name]: value,
    }));
  };

  return (
    <div className="main-container">
      <Sidebar />

      <div className='profile-move'>
        <div className="profile-card" style={{ width: `${cardWidth}px`, height: `${cardHeight}px` }}>
          <div className="profile-image">
            <img src={profile} alt="Admin" />
          </div>
          <div className="profile-details">
            <h2>{admin.name}</h2>
            <p>Email: {admin.email}</p>
            <p>Phone Number: {admin.phoneNumber}</p>
            {/* Add more admin details here */}
            {editMode ? (
              <>
                <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  value={admin.name}
                  onChange={handleChange}
                />
                <label>Email:</label>
                <input
                  type="text"
                  name="email"
                  value={admin.email}
                  onChange={handleChange}
                />
                <label>Phone Number:</label>
                <input
                  type="text"
                  name="phoneNumber"
                  value={admin.phoneNumber}
                  onChange={handleChange}
                />
                {/* Add more input fields for other admin details as needed */}
                <button className="save-btn" onClick={handleSave}>
                  Save
                </button>
              </>
            ) : (
              <button className="edit-btn" onClick={handleEdit}>
                Edit
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin_Profile;
