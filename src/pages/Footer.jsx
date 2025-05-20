import React from 'react'
import './footer.css'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'
import PaymentCards from '../assets/payment-cards.webp'
import { motion } from 'motion/react'
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <div className='footer-section'>
      <motion.div className="footer-section-content"
        initial = {{opacity: 0, y: 100}}
        whileInView={{opacity: 1, y: 0}}
        transition={{delay: 0.2, duration: 0.6}}
      >
        <div className="about-section">
          <h2>EXPENSE TRACKER</h2>
          <p className='footer-about-para'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore sint aliquid eius. Fuga ad architecto amet minima beatae natus animi?</p>
          <p><i className="fa-solid fa-phone-flip"></i> +91 6283 731 156</p>
          <p><i className="fa-solid fa-map-location-dot"></i> Mohali, Punjab</p>
        </div>

        <div className="quick-links-section">
          <h2>QUICK LINKS</h2>
          <div className="quick-links">
            <Link to="home" smooth={true} duration={500}>Home</Link>
            <Link to="about" smooth={true} duration={500}>About</Link>
            <Link to="contact" smooth={true} duration={500}>Contact Us</Link>
            <a href='#'>Privacy</a>
          </div>
        </div>

        <div className="follow-us-section">
          <h2>FOLLOW US</h2>
          <div className="follow-us-icons">
            <FaFacebook className='social-media-icons'/>
            <FaTwitter className='social-media-icons'/>
            <a href="https://www.instagram.com/dailyspendapp?igsh=Z3U2dnF6c3Myejl3" target='_blank'><FaInstagram className='social-media-icons'/></a>
          </div>
          <h3>Payment Modes</h3>
          <img src={PaymentCards} alt="payment-cards" className='payment-cards'/>
        </div>
      </motion.div>

      <div className="footer-line"></div>

      <div className="copyright-section">
        <p>Copyright © 2024 Company Name. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer