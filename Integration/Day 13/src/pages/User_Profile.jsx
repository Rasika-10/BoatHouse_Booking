import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../assets/css/Admin_Profile.css';
import profile from '../assets/images/userprofile1.png';
import User_Sidebar from '../components/User_Sidebar';
import { MdEdit, MdSave, MdClose } from 'react-icons/md';
import axios from 'axios';

const User_Profile = () => {
  const { email } = useParams();
  const [editMode, setEditMode] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Function to fetch user details by ID
    const fetchUserDetails = async () => {
      try {
        const userId = localStorage.getItem('userId'); // Get the user ID from localStorage
        const response = await axios.get(`http://localhost:8081/user/get/${userId}`);
        setUser(response.data); // Set the user details in state
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchUserDetails(); // Call the function to fetch user details
  }, []);

 

  const [cardWidth, setCardWidth] = useState(330);
  const [cardHeight, setCardHeight] = useState(350);
  const [imageWidth, setImageWidth] = useState(150);
  const [imageHeight, setImageHeight] = useState(160);

  const handleEdit = () => {
    setEditMode(true);
    setCardWidth(360);
    setCardHeight(470);
    setImageWidth(110);
    setImageHeight(140);
  };

  // const handleSave = async () => {
  //   try {
  //     const token = localStorage.getItem('token');
  //     await axios.put(`http://localhost:8081/user/update/${user.id}`, user, {
  //       headers: {
  //         Authorization: `Bearer ${token}`
  //       }
  //     });
  //     setEditMode(false);
  //     setCardWidth(330);
  //     setCardHeight(350);
  //     setImageWidth(150);
  //     setImageHeight(160);
  //   } catch (error) {
  //     console.error('Error saving user data:', error);
  //   }
  // };

  const handleSave = async () => {
    try {
      const token = localStorage.getItem('token');
      // Send a PUT request to update user details
      const userId = localStorage.getItem('userId');
      await axios.put(`http://localhost:8081/user/put/${userId}`, user, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      // After successful update, exit edit mode and reset card dimensions
      setEditMode(false);
      setCardWidth(330);
      setCardHeight(350);
      setImageWidth(150);
      setImageHeight(160);
    } catch (error) {
      console.error('Error saving user data:', error);
    }
  };
  const handleCancel = () => {
    setEditMode(false);
    // Reset the user data if in edit mode
 
    // Reset card dimensions
    setCardWidth(330);
    setCardHeight(350);
    setImageWidth(150);
    setImageHeight(160);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  return (
    <div className="main-container">
      <User_Sidebar />
      {user && (
        <div className='profile-move'>
          <div className="profile-card" style={{ width: `${cardWidth}px`, height: `${cardHeight}px` }}>
            <div className="profile-image" style={{ width: `${imageWidth}px`, height: `${imageHeight}px` }}>
              <img src={profile} alt="User" />
            </div>
            <div className="profile-details">
              <h2>{user.name}</h2>
              {editMode ? (
                <>
                  <div className="input-group">
                    <label>Name:</label>
                    <input
                      type="text"
                      name="name"
                      value={user.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="input-group">
                    <label>Email:</label>
                    <input
                      type="email"
                      name="email"
                      value={user.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="input-group">
                    <label>Phone Number:</label>
                    <input
                      type="text"
                      name="number"
                      value={user.number}
                      onChange={handleChange}
                    />
                  </div>
                  <button className="save-btn" onClick={handleSave}>
                    <MdSave /> Save
                  </button>
                  <span className='close-btn-move'>
                  <button className="close-btn" onClick={handleCancel}> {/* Close button */}
                      <MdClose /> Close
                    </button>
                    </span>
                </>
              ) : (
                <>
                 <div className='profile-main'>
                  <p><strong>Email:</strong> {user.email}</p>
                  <p><strong>Phone Number:</strong> {user.number}</p>
                  </div>
    
                  <button className="edit-btn" onClick={handleEdit}>
                    <MdEdit /> Edit
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default User_Profile;


// import React, { useState, useEffect } from 'react';
// import User_Sidebar from '../components/User_Sidebar';
// import axios from 'axios'; // Import Axios library
// import profile from '../assets/images/userprofile1.png';
// const User_Profile = () => {
//   const [user, setUser] = useState({
//     name: '',
//     email: '',
//     number: '',
//   });
//   const [isEditing, setIsEditing] = useState(false);

//   useEffect(() => {
//     // Function to fetch user details by ID
//     const fetchUserDetails = async () => {
//       try {
//         const userId = localStorage.getItem('userId'); // Get the user ID from localStorage
//         const response = await axios.get(`http://localhost:8081/user/get/${userId}`);
//         setUser(response.data); // Set the user details in state
//       } catch (error) {
//         console.error('Error fetching user details:', error);
//       }
//     };

//     fetchUserDetails(); // Call the function to fetch user details
//   }, []);

//   const handleEdit = () => {
//     setIsEditing(true);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUser((prevUser) => ({
//       ...prevUser,
//       [name]: value,
//     }));
//   };

//   const handleSave = async () => {
//     try {
//       const userId = localStorage.getItem('userId'); // Get the user ID from localStorage
//       await axios.put(`http://localhost:8081/user/put/${userId}`, user); // Update user details
//       setIsEditing(false);
//     } catch (error) {
//       console.error('Error updating user details:', error);
//     }
//   };

//   return (
//     <div className='user' style={{textAlign:"center"}}>
//       <User_Sidebar />
//       <div className='user-profile-container'>
//         <div className="user-card">
//         <div className="profile-pic">
//             {/* <img src={profile} alt="Common" />  */}
//           </div>
//           {/* Profile pic */}
//           <div className="user-details">
//             <div className="detail">
//               <span>Name:</span>
//               {isEditing ? (
//                 <input
//                   type="text"
//                   name="name"
//                   value={user.name}
//                   onChange={handleChange}
//                   className="input-field"
//                 />
//               ) : (
//                 <span>{user.name}</span>
//               )}
//             </div>
//             <div className="detail">
//               <span>Mobile Number:</span>
//               {isEditing ? (
//                 <input
//                   type="text"
//                   name="number"
//                   value={user.number}
//                   onChange={handleChange}
//                   className="input-field"
//                 />
//               ) : (
//                 <span>{user.number}</span>
//               )}
//             </div>
//             <div className="detail">
//               <span>Email:</span>
//               {isEditing ? (
//                 <input
//                   type="email"
//                   name="email"
//                   value={user.email}
//                   onChange={handleChange}
//                   className="input-field"
//                 />
//               ) : (
//                 <span>{user.email}</span>
//               )}
//             </div>
//             {isEditing ? (
//               <button onClick={handleSave} className="save-button">
//                 Save
//               </button>
//             ) : (
//               <button onClick={handleEdit} className="edit-button">
//                 Edit
//               </button>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default User_Profile;