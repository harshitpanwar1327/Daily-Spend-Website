import {useState} from 'react'
import './home.css'
import NavigationBar from '../components/NavigationBar'
import SocialMediaBar from '../components/SocialMediaBar'
import Iphone from '../assets/iphone3.png'
import { motion } from "motion/react"

const Home = () => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <div className='page bg-[url(/src//assets/bg-slate.png)] bg-center bg-cover min-h-screen flex items-center justify-center'>
      <NavigationBar sidebar={sidebar} setSidebar={setSidebar}/>

      <div className="w-4/5 md:w-[90%] lg:w-4/5 grid grid-cols-1 grid-rows-3 md:grid-cols-2 md:grid-rows-1 lg:grid-cols-3 place-items-center text-[#F1DABF] pt-16">
        <div className="flex flex-col gap-8 lg:gap-16">
          <motion.div className='flex flex-col gap-2 font-semibold'
            initial = {{opacity: 0, x: -100}}
            animate = {{opacity: 1, x: 0}}
            transition = {{type: 'spring', stiffness: 100, damping: 12, delay: 0.4}}
          >
            <h2 className='text-4xl'>Daily Spend</h2>
            <h3 className='text-2xl'>Expense Tracker</h3>
          </motion.div>
          <motion.div 
            className='bg-gradient-to-r from-[#37415140] from-[70%] p-4 rounded-lg flex flex-col gap-2'
            initial = {{opacity: 0, y: 100}}
            animate = {{opacity: 1, y: 0}}
            transition = {{type: 'spring', stiffness: 100, damping: 12, delay: 0.6}}
          >
            <h3 className='text-lg font-semibold'>Take Control of Your Spending</h3>
            <p>Daily Spend makes it easy to log your daily expenses, view monthly summaries, and stay within your budget—all from your phone.</p>
          </motion.div>
        </div>

        <div>
          <motion.h2 className='hidden md:block absolute top-10 left-[55vw] text-8xl font-bold text-[#1a1f2566]'
            initial = {{opacity: 0, x: -100}}
            animate = {{opacity: 1, x: 0}}
            transition = {{type: 'spring', stiffness: 100, damping: 12, delay: 0.8}}
          >Daily <br /> Spend</motion.h2>
          <motion.img src={Iphone} alt="iPhone" className='iphone' 
            initial = {{opacity: 0, scale: 0}}
            animate = {{opacity: 1, scale: 1.1}}
            transition = {{type: 'spring', stiffness: 100, damping: 10, delay: 0.4}}
          />
        </div>

        <div className='flex flex-col justify-end gap-8 md:h-full'>
          <motion.h3 className='text-xl font-semibold text-white px-4'
            initial = {{opacity: 0, y: 100}}
            animate = {{opacity: 1, y: 0}}
            transition = {{type: 'spring', stiffness: 100, damping: 12, delay: 1}}
          ><span style={{color: '#f19509'}}>Track.</span>Save.<span style={{color: '#f19509'}}>Grow.</span></motion.h3>
          <motion.div 
            className="bg-gradient-to-l md:bg-gradient-to-r lg:bg-gradient-to-l from-[#37415140] from-[70%] p-4 rounded-lg flex flex-col gap-2"
            initial = {{opacity: 0, y: 100}}
            animate = {{opacity: 1, y: 0}}
            transition = {{type: 'spring', stiffness: 100, damping: 12, delay: 1.2}}
          >
            <h3 className='text-lg font-semibold'>Your Finances at a Glance</h3>
            <p>Beautiful charts, smart insights, and real-time tracking give you a clear view of where your money goes—instantly.</p>
          </motion.div>
        </div>
      </div>

      {sidebar && <SocialMediaBar setSidebar={setSidebar} />}
    </div>
  )
}

export default Home