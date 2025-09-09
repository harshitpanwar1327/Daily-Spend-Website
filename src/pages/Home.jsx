import React, {useState} from 'react'
import './home.css'
import NavigationBar from '../components/NavigationBar'
import SocialMediaBar from '../components/SocialMediaBar'
import Iphone from '../assets/iphone.png'
import { motion } from "motion/react"

const Home = () => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <div className='page bg-[url(/src//assets/bg-slate.png)] bg-center bg-cover py-10'>
      <NavigationBar sidebar={sidebar} setSidebar={setSidebar}/>

      <div className="home-page-content">
        <div className="flex flex-col gap-20">
          <motion.div className='flex flex-col gap-2 font-semibold'
            initial = {{opacity: 0, y: -100}}
            whileInView = {{opacity: 1, y: 0}}
            viewport={{ once: true }}
            transition = {{type: 'spring', stiffness: 100, damping: 10, delay: 0.8}}
          >
            <h2 className='text-5xl'>Daily Spend</h2>
            <h3 className='text-2xl'>Expense Tracker</h3>
          </motion.div>
          <motion.div 
            className='bg-gradient-to-r from-[#37415140] from-[70%] to-transparent to-[30%] p-4 rounded-lg flex flex-col gap-2'
            initial = {{opacity: 0, y: 100}}
            whileInView = {{opacity: 1, y: 0}}
            viewport={{ once: true }}
            transition = {{type: 'spring', stiffness: 100, damping: 10, delay: 1.2}}
          >
            <h3 className='text-lg font-semibold'>Take Control of Your Spending</h3>
            <p>Daily Spend makes it easy to log your daily expenses, view monthly summaries, and stay within your budget—all from your phone.</p>
          </motion.div>
        </div>

        <div>
          <motion.h2 className='hidden md:block absolute top-10 left-[55vw] text-8xl font-bold text-[#1a1f2566]'
            initial = {{opacity: 0, x: -100}}
            whileInView = {{opacity: 1, x: 0}}
            viewport={{ once: true }}
            transition = {{type: 'spring', stiffness: 100, damping: 10, delay: 0.8}}
          >Daily <br /> Spend</motion.h2>
          <motion.img src={Iphone} alt="iphone" className='iphone img' 
            initial = {{opacity: 0, scale: 0}}
            whileInView = {{opacity: 1, scale: 1}}
            viewport={{ once: true }}
            transition = {{type: 'spring', stiffness: 100, damping: 10, delay: 0.4}}
          />
        </div>

        <motion.div 
          className="bg-gradient-to-l from-[#1a1f2580] from-[70%] to-transparent to-[30%] p-4 rounded-lg flex flex-col gap-2"
          initial = {{opacity: 0, y: 100}}
          whileInView = {{opacity: 1, y: 0}}
          viewport={{ once: true }}
          transition = {{type: 'spring', stiffness: 100, damping: 10, delay: 1.6}}
        >
          <h3 className='text-lg font-semibold'>Your Finances at a Glance</h3>
          <p>Beautiful charts, smart insights, and real-time tracking give you a clear view of where your money goes—instantly.</p>
        </motion.div>
      </div>

      {sidebar && <SocialMediaBar />}
    </div>
  )
}

export default Home