// import React, { useState } from 'react';
// import { FaUserCog, FaLock } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
// import Navbar from '../components/Navbar';
// import '../assets/css/Admin_Login.css';

// export default function Admin_Login() {
//   // State variables to track user input
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   // Function to handle form submission
//   const handleLogin = () => {
//     // Validate if email and password are provided
//     if (!email || !password) {
//       // Display an alert to the user
//       alert('Please enter both email and password!');
//       return;
//     }

//     // Validate admin credentials (replace with your actual admin credentials)
//     const validAdminEmail = 'admin@gmail.com';
//     const validAdminPassword = 'admin';

//     if (email === validAdminEmail && password === validAdminPassword) {
//       // Redirect to the admin home page
//       window.location.href = '/admin-home';
//     } else {
//       // Display an alert for invalid login
//       alert('Invalid email or password!');
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="adminlogin-container">
//         <div className="wrapper">
//           <div className="card">
//             <div className="image-container">
//               <img src="path/to/your/image.jpg" alt="Admin" />
//             </div>
//             <form>
//               <h1>Admin Login</h1>
//               <div className="input-box">
//                 <input
//                   type="email"
//                   placeholder="Email"
//                   required
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//                 <FaUserCog className="adminlogin-icon" />
//               </div>
//               <div className="input-box">
//                 <input
//                   type="password"
//                   placeholder="Password"
//                   required
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//                 <FaLock className="adminlogin-icon" />
//               </div>

//               <div className="remember-forget">
//                 <label>
//                   <input type="checkbox" /> Remember me
//                 </label>
//                 <a href="/">Forgot password?</a>
//               </div>

//               <button type="button" onClick={handleLogin}>
//                 Login
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }


// components/Signin.js
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import '../assets/css/Admin_Login.css';
// import admin from '../assets/images/adminlogin.jpeg';

// function Admin_Login() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle sign-in logic here
//   };

//   return (
//     <div className="signin-container">
//       <div className="signin-form">
//         <h2>Welcome Back!</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="username">Username</label>
//             <input
//               type="text"
//               className="form-control"
//               id="username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               className="form-control"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>
//           <button type="submit" className="btn btn-primary">
//             Login
//           </button>
//         </form>
//         <Link to="/forgot-password" className="forgot-password">
//           Forgot Password?
//         </Link>
//         <Link to="/signup" className="signup-link">
//           Don't have an account? Signup now
//         </Link>
//       </div>
//       <div className="side-image">
//         <img src={admin} alt="Side Image" />
//       </div>
//     </div>
//   );
// }

// export default Admin_Login;

// components/SigninForm.js
import React, { useState } from 'react';
import '../assets/css/Admin_Login.css';
import Navbar from '../components/Navbar';
import admin from '../assets/images/adminside.jpeg';

function Admin_Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false); // State for checkbox

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation, you may want to add more checks
    if (!email || !password) {
      alert('Please enter both email and password');
      return;
    }

    // Replace these values with your actual admin credentials
    const validAdminEmail = 'admin@gmail.com';
    const validAdminPassword = 'admin123';

    if (email === validAdminEmail && password === validAdminPassword) {
      // Redirect to the admin home page on successful login
      window.location.href = '/admin-dashboard';
    } else {
      alert('Invalid email or password!');
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
          <br></br>
          <br></br>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email" style={{fontSize:"20px"}}>Email:</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password" style={{fontSize:"20px"}}>Password:</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="remember-me"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              <label className="form-check-label" htmlFor="remember-me">
                ✔ Remember me
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Log In
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Admin_Login;
