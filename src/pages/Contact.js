import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-page">

      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you! Reach out to us for inquiries or bookings.</p>
      </div>
      <div className="contact-container">
       {/* Contact Information */}
       <div className="contact-info">
          <h2>Contact Information</h2>
          <p><strong>Phone:</strong> <a href="tel:+919080020887">+91 9080020887</a></p>
          <p><strong>Email:</strong> <a href="mailto:info@cleaningcompany.com">info@cleaningcompany.com</a></p>
          <p><strong>Address:</strong> 123, Cleaning Street, Chennai, India</p>
        </div>
        {/* Contact Form */}
        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" required />

            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required />

            <label htmlFor="message">Your Message</label>
            <textarea id="message" name="message" placeholder="Write your message here" rows="5" required></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>

       
      </div>
    </div>
  );
}

export default Contact;
