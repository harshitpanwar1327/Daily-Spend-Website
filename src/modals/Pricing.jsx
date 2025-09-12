import React from 'react'
import KeyboardDoubleArrowUpRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowUpRounded'
import { motion } from 'motion/react'

const Pricing = ({ setOpenModal }) => {
  return (
    <div className='w-screen h-screen fixed top-0 left-0 bg-white flex flex-col items-center gap-4 py-4'>
        <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
            <KeyboardDoubleArrowUpRoundedIcon sx={{fontSize: '32px'}} className='cursor-pointer transition duration-300 hover:scale-105' onClick={()=>setOpenModal(false)}/>
        </motion.div>
    </div>
  )
}

export default Pricing