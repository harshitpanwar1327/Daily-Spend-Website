import React, { useState } from 'react'
import CountUp from "react-countup"
import { useInView } from "react-intersection-observer"
import Logo from '../assets/logo.png'
import AppStore from '../assets/app_store.png'
import IosShareIcon from '@mui/icons-material/IosShare'
import { motion } from "motion/react"
import Pricing from '../modals/Pricing'

const hero = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.7,
  });

  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="py-24 px-8 md:px-16 lg:px-24 flex flex-col justify-center items-center gap-16" ref={ref}>
      <div className="flex flex-col items-center gap-4">
        <motion.img src={Logo} alt="DailySpend Logo" className="w-28 md:w-36 lg:w-40" 
          initial = {{opacity: 0, scale: 0.5}}
          whileInView = {{opacity: 1, scale: 1}}
          viewport={{ once: true }}
          transition = {{type: 'spring', stiffness: 100, damping: 12, delay: 0.2}}
        />
        <motion.h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center"
          initial = {{opacity: 0, y: 100}}
          whileInView = {{opacity: 1, y: 0}}
          viewport={{ once: true }}
          transition = {{type: 'spring', stiffness: 100, damping: 12, delay: 0.4}}
        >Track Your Expenses Smartly</motion.h2>
        <motion.p className="md:text-xl font-semibold text-gray-600 text-center max-w-lg"
          initial = {{opacity: 0, y: 100}}
          whileInView = {{opacity: 1, y: 0}}
          viewport={{ once: true }}
          transition = {{type: 'spring', stiffness: 100, damping: 12, delay: 0.6}}
        >Manage your daily spend with insights, analytics, and a touch of simplicity.</motion.p>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <motion.a href="https://apps.apple.com/in/app/daily-spend-expense-tracker/id1494517202" target='_blank'
            initial = {{opacity: 0, y: 100}}
            whileInView = {{opacity: 1, y: 0}}
            viewport={{ once: true }}
            transition = {{type: 'spring', stiffness: 100, damping: 12, delay: 0.8}}
          >
            <img src={AppStore} alt="App-store" width={200} className='!cursor-pointer' />
          </motion.a>
          <motion.p className="text-blue-500 hover:text-blue-700 cursor-pointer flex items-center gap-1" onClick={() => setOpenModal(true)}
            initial = {{opacity: 0, y: 100}}
            whileInView = {{opacity: 1, y: 0}}
            viewport={{ once: true }}
            transition = {{type: 'spring', stiffness: 100, damping: 12, delay: 1}}
          >View Pricing & Features <IosShareIcon sx={{fontSize: '18px'}}/></motion.p>
        </div>
      </div>

      { openModal && <Pricing setOpenModal={setOpenModal} /> }

      <div className="grid grid-cols-2 md:grid-cols-4 gap-16 text-center">
        <div>
          <h3 className="text-4xl font-bold text-black">{inView && <CountUp end={95} duration={4} />}K+</h3>
          <p className="text-gray-600 mt-2">Downloads</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold text-black">{inView && <CountUp end={2.5} duration={4} decimals={1}/>}K+</h3>
          <p className="text-gray-600 mt-2">Active Users</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold text-black">{inView && <CountUp end={4.6} duration={4} decimals={1}/>}</h3>
          <p className="text-gray-600 mt-2">User Rating</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold text-black">{inView && <CountUp end={2.2} duration={4} separator="," decimals={1}/>}K+</h3>
          <p className="text-gray-600 mt-2">Reviews</p>
        </div>
      </div>
    </div>
  )
}

export default hero