import React from "react";
import "../styles/footer.css";

import locationIcon from "../assets/location-icon.png";
import phoneIcon from "../assets/phone-icon.png";
import mailIcon from "../assets/mail-icon.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LEFT SECTION */}
        <div className="footer-left">
          <h2>Tapal Chai</h2>
          <p>
            Bringing you the finest tea blends with authentic taste and premium quality. 
            Enjoy the perfect cup, every time.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* CONTACT SECTION */}
        <div className="footer-contact">
          <h3>Contact Us</h3>

          <div className="contact-item">
            <img src={locationIcon} alt="Location" />
            <span>Tapal Chai Market, Karachi, Pakistan</span>
          </div>

          <div className="contact-item">
            <img src={phoneIcon} alt="Phone" />
            <span>+92 311 1234567</span>
          </div>

          <div className="contact-item">
            <img src={mailIcon} alt="Email" />
            <span>support@tapalchai.com</span>
          </div>

        </div>
      </div>

      {/* BOTTOM COPYRIGHT */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Tapal Chai Umair. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
