import React from 'react';
import '../assets/css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__content">
          <div className="footer__left">
           Boat House Booking
            <p>Explore a curated collection of boat houses, each with its own charm and character. </p>
          </div>
          <div className="footer__right">
            <ul className="footer__nav">
              <li className="footer__nav-item">
                <a href="#" className="footer__nav-link">FAQ</a>
              </li>
              <li className="footer__nav-item">
                <a href="#" className="footer__nav-link">About</a>
              </li>
              <li className="footer__nav-item">
                <a href="#" className="footer__nav-link">Contact</a>
              </li>
              <li className="footer__nav-item">
                <a href="#" className="footer__nav-link">Blog</a>
              </li>
            </ul>
            <ul className="footer__social">
              <li className="footer__social-item">
                <a href="#" className="footer__social-link">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="footer__social-item">
                <a href="#" className="footer__social-link">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li className="footer__social-item">
                <a href="#" className="footer__social-link">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__copyright">
          &copy; 2024 Company. All Rights Reserved. Terms & Privacy
        </div>
      </div>
    </footer>
  );
};

export default Footer;