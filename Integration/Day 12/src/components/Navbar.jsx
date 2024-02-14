import React from 'react'
import '../assets/css/Navbar.css';
import logo from '../assets/images/boat-logo-design.jpg';
import search_icon_light from '../assets/images/search-w.png';
import { Link } from "react-router-dom"

const Navbar = () => {
  const [activeLink, setActiveLink] = React.useState("Home");

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };

  return (

     
    <div>
    <div className='navbar-container' >
        <img src={logo} alt="" className='logo' height="8%" width="8%" />
        
        <ul className='navbar-ul'>
        {/* <li onClick={() => handleLinkClick("Home")} className={activeLink === "Home" ? 'link active' : 'link'}>
          <Link to="/" className='link'>Home   </Link>
        </li>
         
            
            <li onClick={() => handleLinkClick("About Us")} className={activeLink === "About Us" ? 'link active' : 'link'}>
          <Link to="/about" className='link'>About us</Link>
        </li>
        <li onClick={() => handleLinkClick("Contact Us")} className={activeLink === "Contact Us" ? 'link active' : 'link'}>
          <Link to="/contact" className='link'>Contact us</Link>
        </li> */}

<Link to="/" className='link'>Home   </Link>
      
         
            
            
      <Link to="/about" className='link'>About us</Link>
    
   
      <Link to="/contact" className='link'>Contact us</Link>
   
            
        </ul>


        <ul className='ul-right'>
          <Link to='/choose'>
          <li className='sign-radius'>Login</li>
          </Link>
          
        </ul>
        {/* <div className='search-box'>
            <input type='text' placeholder='Search'/>
            <img src={search_icon_light} alt=""/>
        </div> */}
        
      
    </div>
    
    </div>
    
  )
}

export default Navbar


