import React from 'react'
import './contact.css'
import WorldMap from '../assets/worldmap.png'
import {motion} from 'motion/react'

const Contact = () => {
  return (
    <div className='page'>
      <div className="contact-page-content">
        <form className="contact-form">
          <motion.h1
            initial = {{opacity: 0, y: 100}}
            whileInView = {{opacity: 1, y: 0}}
            transition = {{type: 'spring', stiffness: 100, damping: 10, delay: 0.2}}
            style={{marginBottom: '0'}}
          >We’d Love to Hear From You</motion.h1>
          <motion.input type="text" placeholder='Name' name='user_name' id='user_name'
            className='contact-form-input' required
            initial = {{opacity: 0, y: 100}}
            whileInView = {{opacity: 1, y: 0}}
            transition = {{type: 'spring', stiffness: 100, damping: 10, delay: 0.4}}
          />
          <motion.input type="email" placeholder='Email' name='user_email' id='user_email'
            className='contact-form-input' required
            initial = {{opacity: 0, y: 100}}
            whileInView = {{opacity: 1, y: 0}}
            transition = {{type: 'spring', stiffness: 100, damping: 10, delay: 0.6}}
          />
          <motion.textarea placeholder='Message' name="message" id="message" 
            className='contact-form-message-box' rows={5} required
            initial = {{opacity: 0, y: 100}}
            whileInView = {{opacity: 1, y: 0}}
            transition = {{type: 'spring', stiffness: 100, damping: 10, delay: 0.8}}
          ></motion.textarea>
          <motion.button className='contact-form-button'
            initial = {{opacity: 0, y: 100}}
            whileInView = {{opacity: 1, y: 0}}
            transition = {{type: 'spring', stiffness: 100, damping: 10, delay: 1}}
          >Send Message <i className="fa-regular fa-paper-plane"></i>
          </motion.button>
        </form>

        <motion.img src={WorldMap} alt="world-map" className="world-map-image"
          initial = {{opacity: 0, scale: 0.5}}
          whileInView = {{opacity: 1, scale: 1}}
          transition = {{type: 'spring', stiffness: 100, damping: 10, delay: 1}}
        />
      </div>
    </div>
  )
}

export default Contact