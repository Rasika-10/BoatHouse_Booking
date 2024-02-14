// import React, { useState } from 'react';
// import {
//     FaRegArrowAltCircleRight
// }from "react-icons/fa";
// import { Link, NavLink } from 'react-router-dom';
// import admin from "../assets/images/adminProfile.png"
// import '../assets/css/Sidebar.css'

// const Sidebar = ({children}) => {
//     const menuItem=[
//         {
//             path:"/",
//             name:"Logout",
//             icon:< FaRegArrowAltCircleRight/>
//         }
//     ]
    
//     return (
//         <div className="container-sidebar">
//            <div  className="sidebar">
//                <div className="top_section">
//                <div className='admin-image'>
//                      <img src={admin} alt="profile" className="admin-img"/>
//                      <p style={{paddingLeft:"5px",color:"white"}}>Admin</p>
//                    </div>
               
//                </div>
//                        <p style={{fontSize:"16px",backgroundColor:"grey",padding:"8px"}}>REPORTS</p>
//                        <NavLink to="/about"  className="link" activeclassName="active">
                          
//                         <div className="link_text">Dashboard</div>
//                        </NavLink>
                   
//                        {/* <NavLink to="/votes"  className="link" activeclassName="active">
//                            <div className="link_text">View Results</div>
//                        </NavLink> */}

//                         <p style={{fontSize:"16px",backgroundColor:"grey",padding:"8px"}}>MANAGE</p>
//                        <NavLink to="/about"  className="link" activeclassName="active">
//                            <div className="link_text">Add Candidate</div>
//                        </NavLink>
                   
//                        <NavLink to="/about"  className="link" activeclassName="active">
//                            <div className="link_text">View Voters</div>
//                        </NavLink>
//             <div className="logout">
//                {
//                    menuItem.map((item, index)=>(
//                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
//                            <div className="icon">{item.icon}</div>
//                            <div className="link_text">{item.name}</div>
//                        </NavLink>
//                    ))
//                }
//             </div>          
               
//            </div>
//            <main>{children}</main>
//         </div>
//     );
// };

// export default Sidebar;

import React, { useState } from 'react';
import { MdOutlineDirectionsBoatFilled } from 'react-icons/md';
import { MdOutlineDashboardCustomize } from 'react-icons/md';
import { RiLogoutCircleLine } from 'react-icons/ri';
import { VscArrowCircleLeft } from "react-icons/vsc";
import { FiUser } from 'react-icons/fi';
import {
 
  FaRegChartBar,
 
} from 'react-icons/fa';
import { PiUserListDuotone } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";
import { TiContacts } from "react-icons/ti";
import { NavLink } from 'react-router-dom';
import { MdOutlineCancel } from "react-icons/md";
import '../assets/css/Sidebar.css';
import admin from '../assets/images/adminprofile1.webp';
import { FiToggleLeft, FiToggleRight } from 'react-icons/fi';

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [toggleIcon, setToggleIcon] = useState(<VscArrowCircleLeft />);

  const toggle = () => {
    setIsOpen(!isOpen);
    setToggleIcon(isOpen ? <VscArrowCircleLeft />: <MdOutlineCancel />);
  };

  const menuItem = [
    {
      path: '/admin-dashboard',
      name: 'Dashboard',
      icon: <FaRegChartBar />,
    },
    {
      path: '/add-boat',
      name: 'Add Boat',
      icon: <MdOutlineDirectionsBoatFilled />,
    },
    {
      path: '/view-booking-list',
      name: 'View Booking',
      icon: <PiUserListDuotone />,
    },
    {
      path: '/contact-list',
      name: 'Contact List',
      icon: <TiContacts />,
    },
    {
      path: '/admin-about',
      name: 'Setting',
      icon: <IoSettingsOutline />,
    },
    {
      path: '/admin',
      name: 'Logout',
      icon: <RiLogoutCircleLine />,
    },
  ];

  return (
    <div className="sidebar-container">
      <div style={{ width: isOpen ? '160px' : '50px' }} className="sidebar">
        <div className="top_section">
          <div className="admin-text" style={{ display: isOpen ? 'block' : 'none' }}>
            <span>Admin</span>
          </div>

          <div style={{ marginLeft: isOpen ? '10px' : '0px' }} className="sidebar-bars">
            <button style={{ fontSize: '23px' }} onClick={toggle}>{toggleIcon}</button>
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink to={item.path} key={index} className="sidebar-link" activeclassname="active">
            <div className="sidebar-icon">{item.icon}</div>
            <div style={{ display: isOpen ? 'block' : 'none' }} className="sidebar-link_text">
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
