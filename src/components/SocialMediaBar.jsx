import React from 'react'
import './socialMediaBar.css'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'
import { motion } from 'motion/react'

const SocialMediaBar = () => {
  return (
    <motion.div 
      className='social-media-bar'
      initial = {{x: '100%'}}
      whileInView = {{x: 0}}
      transition = {{type: 'spring', delay: 0.2}}
    >
      <div className="white-line"></div>
      <FaFacebook className='social-media-icons'/>
      <FaTwitter className='social-media-icons'/>
      <a href="https://www.instagram.com/dailyspendapp?igsh=Z3U2dnF6c3Myejl3" target='_blank'><FaInstagram className='social-media-icons'/></a>
      <div className="white-line"></div>
    </motion.div>
  )
}

export default SocialMediaBar