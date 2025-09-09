import React from 'react'
import YouTubeIcon from '@mui/icons-material/YouTube'
import InstagramIcon from '@mui/icons-material/Instagram'
import { motion } from 'framer-motion'
import './socialMediaBar.css'

const SocialMediaBar = () => {
  return (
    <motion.div 
      className='social-media-bar'
      initial={{ x: '100%' }}
      whileInView={{ x: 0 }}
      transition={{ type: 'spring', delay: 0.2 }}
    >
      <div className="white-line"></div>
      <a href="https://youtube.com/@dailyspend3363?si=wX5DzHMOJ3Skpr3i" target='_blank' rel="noopener noreferrer"><YouTubeIcon className='social-media-icons'/></a>
      <a href="https://www.instagram.com/dailyspendapp?igsh=Z3U2dnF6c3Myejl3" target='_blank' rel="noopener noreferrer"><InstagramIcon className='social-media-icons'/></a>
      <div className="white-line"></div>
    </motion.div>
  )
}

export default SocialMediaBar