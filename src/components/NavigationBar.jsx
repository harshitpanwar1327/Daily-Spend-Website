import React from 'react'
import { motion } from 'motion/react'
import MenuIcon from '@mui/icons-material/Menu'

const NavigationBar = ({sidebar, setSidebar}) => {
  return (
    <motion.div
      className='flex items-center justify-between absolute top-0 left-0 w-full p-9 text-white'
      initial = {{opacity: 0, y: -100}}
      animate = {{opacity: 1, y: 0}}
      transition = {{type: 'spring', stiffness: 100, damping: 10, delay: 0.2}}
    >
      <h2 className='text-xl font-semibold'><span style={{color: '#f19509'}}>Expense</span> Tracker.</h2>
      <MenuIcon sx={{fontSize: '32px'}} className='text-white cursor-pointer hover:scale-120 !transition duration-500 z-20' onClick={() => setSidebar(!sidebar)}/>
    </motion.div>
  )
}

export default NavigationBar