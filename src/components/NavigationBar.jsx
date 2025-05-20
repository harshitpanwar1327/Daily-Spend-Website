import React from 'react'
import './navigationBar.css'
import { motion } from 'motion/react'

const NavigationBar = ({sidebar, setSidebar}) => {
  return (
    <motion.div 
      className='navigation-bar'
      initial = {{opacity: 0, y: -100}}
      animate = {{opacity: 1, y: 0}}
      transition = {{type: 'spring', stiffness: 100, damping: 10, delay: 0.2}}
    >
      <h2><span style={{color: '#f19509'}}>Expense</span> Tracker.</h2>
      <i className="fa-solid fa-bars" onClick={() => setSidebar(!sidebar)}></i>
    </motion.div>
  )
}

export default NavigationBar