import React, { useState } from 'react';
import { MdOutlineDirectionsBoatFilled } from "react-icons/md";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { RiLogoutCircleLine } from "react-icons/ri";
import { MdOutlineCancel } from "react-icons/md";
import { VscArrowCircleLeft } from "react-icons/vsc";
import { FiUser } from "react-icons/fi";
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList
} from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import '../assets/css/Sidebar.css';
import admin from '../assets/images/userprofile.png';

const User_Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [toggleIcon, setToggleIcon] = useState(<VscArrowCircleLeft />);

  const toggle = () => {
    setIsOpen(!isOpen);
    setToggleIcon(isOpen ? <VscArrowCircleLeft />: <MdOutlineCancel />);
  };
    const menuItem = [
        {
            path: "/user-dashboard",
            name: "Dashboard",
            icon: <FaRegChartBar />
            
        },
        {
            path: "/user-profile",
            name: "Profile",
            icon: <FiUser />
        },
        {
            path: "/view-boat-list",
            name: "View Boat",
            icon: <MdOutlineDirectionsBoatFilled />
        },
        // {
        //     path: "/user_curd",
        //     name: "Add Booking",
        //     icon: <MdOutlineDashboardCustomize />
        // },
        {
            path: "/user",
            name: "Logout",
            icon: <RiLogoutCircleLine />
        },
        
    ];

    return (
        <div className="sidebar-container">
            <div style={{ width: isOpen ? "180px" : "50px" }} className="sidebar">
                <div className="top_section">
                    {/* Image tag for the logo */}
                    {/* <img
                        src={admin} // Replace with the actual path to your image
                        alt="Logo"
                        style={{ display: isOpen ? "block" : "none", width: "100px", height: "100px" }}
                    /> */}

                 <div className="admin-text" style={{ display: isOpen ? 'block' : 'none' }}>
                     <span>User</span>
                   </div>
                    
                   <div style={{ marginLeft: isOpen ? '35px' : '0px' }} className="sidebar-bars">
                      <button style={{ fontSize: '24px' }} onClick={toggle}>{toggleIcon}</button>
                  </div>
              </div>
                {menuItem.map((item, index) => (
                    <NavLink to={item.path} key={index} className="sidebar-link" activeclassname="active">
                        <div className="sidebar-icon">{item.icon}</div>
                        <div style={{ display: isOpen ? "block" : "none" }} className="sidebar-link_text">{item.name}</div>
                    </NavLink>
                ))}
            </div>
            <main>{children}</main>
        </div>
    );
};

export default User_Sidebar;
