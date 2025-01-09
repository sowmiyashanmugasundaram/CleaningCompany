import React from 'react';
import './Footer.css';
import { FaFacebook, FaInstagram } from 'react-icons/fa'; // React icons

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Social Media Links */}
        <div className="footer-socials">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaFacebook /> Facebook
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaInstagram /> Instagram
            </a>
          </div>
        </div>

        {/* License Information */}
        <div className="footer-license">
          <p>© 2025 Velan Cleaners. All Rights Reserved.</p>
          <p>Licensed & Insured Cleaning Company</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
