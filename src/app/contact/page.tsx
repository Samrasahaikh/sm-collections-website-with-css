import React from 'react';
import "@/style/contact.css";
import Link from 'next/link';
import { FaFacebookSquare, FaGithub, FaInstagramSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';

const Contact = () => {
  return (
    <main className="contact-page">
      <section className="contact-hero">
        <h1>Get in Touch</h1>
        <p>We’re here to help you with any questions or feedback.</p>
      </section>
      <section className="contact-card">
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p><strong>Email:</strong> shaikhsamra855@gmail.com</p>
          <p><strong>Phone:</strong> +92 3168596692</p>
          <p><strong>Address:</strong> Karachi, Sindh, Pakistan</p>

          <div className="social-icons">
              < Link href="https://linkedin.com/in/samra-shaikh-7164142b6"
              target="blank"> <FaLinkedin className="icon"/></Link>
              
             <Link href="https://github.com/Samrasahaikh" target="blank">
              <FaGithub className="icon"/></Link>

             <Link href="https://facebook.com/samra.shaikh.14289"
              target="blank">
              <FaFacebookSquare className="icon" /></Link>
              
              <Link href="https://twitter.com">
              <FaTwitterSquare className="icon"/>
              </Link>

              <Link href="https://instagram.com">
              <FaInstagramSquare className="icon"/>
              </Link>
            </div>
        </div>

        <div className="form-container">
          <h2>Send Us a Message</h2>
          <form className="contact-form">
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <textarea rows={4} placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" className="submit-button">Send</button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Contact;
