import React from 'react'
import YouTubeIcon from '@mui/icons-material/YouTube'
import InstagramIcon from '@mui/icons-material/Instagram'
import GPay from '../assets/footer/googlepay.png'
import Maestro from '../assets/footer/maestrocard.png'
import Master from '../assets/footer/mastercard.png'
import Paytm from '../assets/footer/paytm.png'
import Visa from '../assets/footer/visa.png'
import { Phone, Mail, Map } from "lucide-react"
import { motion } from 'motion/react'
import { Link } from 'react-scroll'

const Footer = () => {
  return (
    <div className='text-white py-8 px-8 bg-gradient-to-r from-[#f19509] to-[#e86f00] flex flex-col gap-10'>
      <div className="flex flex-col md:flex-row justify-between gap-16">
        <motion.div className="w-full md:w-1/3 flex flex-col gap-4"
          initial = {{opacity: 0, y: 100}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{ once: true }}
          transition={{delay: 0.4, duration: 0.4}}
        >
          <h2 className='font-semibold text-lg'>EXPENSE TRACKER</h2>
          <p className='text-sm'>Daily Spend is a smart expense tracker app that helps you manage daily spending, set budgets, and visualize monthly expenses easily.</p>
          <p className='flex items-center gap-3'><Phone className='w-5 h-5'/>+91 6283 731 156, +91 97809 26717</p>
          <p className='flex items-center gap-3'><Mail className='w-5 h-5'/> support@dailyspend.in</p>
          <p className='flex items-center gap-3'><Map className='w-5 h-5'/> Mohali, Punjab</p>
        </motion.div>

        <motion.div className="w-full md:w-1/3 flex flex-col gap-4"
          initial = {{opacity: 0, y: 100}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{ once: true }}
          transition={{delay: 0.6, duration: 0.4}}
        >
          <h2 className='font-semibold text-lg'>QUICK LINKS</h2>
          <div className="flex flex-col gap-2">
            <Link to="home" smooth={true} duration={500} className='cursor-pointer'>Home</Link>
            <Link to="about" smooth={true} duration={500} className='cursor-pointer'>About</Link>
            <Link to="contact" smooth={true} duration={500} className='cursor-pointer'>Contact Us</Link>
            <Link to="download" smooth={true} duration={500} className='cursor-pointer'>Download</Link>
          </div>
        </motion.div>

        <motion.div className="w-full md:w-1/3 flex flex-col gap-4"
          initial = {{opacity: 0, y: 100}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{ once: true }}
          transition={{delay: 0.8, duration: 0.4}}
        >
          <h2 className='font-semibold text-lg'>FOLLOW US</h2>
          <div className="flex gap-2">
            <a href="https://youtube.com/@dailyspend3363?si=wX5DzHMOJ3Skpr3i" target='_blank'><YouTubeIcon className='social-media-icons'/></a>
            <a href="https://www.instagram.com/dailyspendapp?igsh=Z3U2dnF6c3Myejl3" target='_blank'><InstagramIcon className='social-media-icons'/></a>
          </div>
          <h2 className='font-semibold text-lg'>Payment Modes</h2>
          <div className='flex flex-wrap gap-2'>
            <img src={Visa} alt="payment-cards" width={40} className='bg-white px-2 rounded'/>
            <img src={Maestro} alt="payment-cards" width={40} className='bg-white px-2 rounded'/>
            <img src={Master} alt="payment-cards" width={40} className='bg-white px-2 rounded'/>
            <img src={Paytm} alt="payment-cards" width={40} className='bg-white px-2 rounded'/>
            <img src={GPay} alt="payment-cards" width={40} className='bg-white px-2 rounded'/>
          </div>
        </motion.div>
      </div>

      <hr />

      <div className="text-center">
        <p>Copyright © 2024 Company Name. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer