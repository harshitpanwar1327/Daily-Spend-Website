import React, {useState} from 'react'
import './home.css'
import NavigationBar from '../components/NavigationBar'
import SocialMediaBar from '../components/SocialMediaBar'
import Iphone from '../assets/iphone.png'
import { motion } from "motion/react"

const Home = () => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <div className='page home-page'>
      <NavigationBar sidebar={sidebar} setSidebar={setSidebar}/>

      <div className="home-page-content">
        <div className="home-page-content-section1">
          <motion.h1 
            className='home-page-left-heading'
            initial = {{opacity: 0, y: -100}}
            whileInView = {{opacity: 1, y: 0}}
            viewport={{ once: true }}
            transition = {{type: 'spring', stiffness: 100, damping: 10, delay: 0.8}}
          >
            Daily <br /> Spend</motion.h1>
          <motion.div 
            className='home-page-left-content'
            initial = {{opacity: 0, y: 100}}
            whileInView = {{opacity: 1, y: 0}}
            viewport={{ once: true }}
            transition = {{type: 'spring', stiffness: 100, damping: 10, delay: 1.2}}
          >
            <h3 className='home-page-content-heading'>Take Control of Your Spending</h3>
            <p className='home-page-content-para'>Daily Spend makes it easy to log your daily expenses, view monthly summaries, and stay within your budget—all from your phone.</p>
          </motion.div>
        </div>
        <div className="home-page-content-section2">
          <motion.div
            initial = {{opacity: 0, x: -100}}
            whileInView = {{opacity: 1, x: 0}}
            viewport={{ once: true }}
            transition = {{type: 'spring', stiffness: 100, damping: 10, delay: 0.8}}
            className = 'home-page-right-heading-container'
          >
            <h1 className='home-page-right-heading'>Daily <br /> Spend</h1>
          </motion.div>
          <motion.img src={Iphone} alt="iphone" className='iphone img' 
            initial = {{opacity: 0, scale: 0}}
            whileInView = {{opacity: 1, scale: 1}}
            viewport={{ once: true }}
            transition = {{type: 'spring', stiffness: 100, damping: 10, delay: 0.4}}
          />
        </div>
        <motion.div 
          className="home-page-content-section3"
          initial = {{opacity: 0, y: 100}}
          whileInView = {{opacity: 1, y: 0}}
          viewport={{ once: true }}
          transition = {{type: 'spring', stiffness: 100, damping: 10, delay: 1.6}}
        >
          <h3 className='home-page-content-heading'>Your Finances at a Glance</h3>
          <p className='home-page-content-para'>Beautiful charts, smart insights, and real-time tracking give you a clear view of where your money goes—instantly.</p>
        </motion.div>
      </div>

      {sidebar && <SocialMediaBar />}
    </div>
  )
}

export default Home