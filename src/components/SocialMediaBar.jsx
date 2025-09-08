import React from 'react'
import './socialMediaBar.css'
import YouTubeIcon from '@mui/icons-material/YouTube'
import InstagramIcon from '@mui/icons-material/Instagram'
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
      <a href="https://youtube.com/@dailyspend3363?si=wX5DzHMOJ3Skpr3i" target='_blank'><YouTubeIcon className='social-media-icons'/></a>
      <a href="https://www.instagram.com/dailyspendapp?igsh=Z3U2dnF6c3Myejl3" target='_blank'><InstagramIcon className='social-media-icons'/></a>
      <div className="white-line"></div>
    </motion.div>
  )
}

export default SocialMediaBar