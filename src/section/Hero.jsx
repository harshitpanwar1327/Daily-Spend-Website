import { useState } from 'react'
import CountUp from "react-countup"
import { useInView } from "react-intersection-observer"
import Logo from '../assets/logo.png'
import AppStore from '../assets/app_store.png'
import IosShareIcon from '@mui/icons-material/IosShare'
import { motion, AnimatePresence } from "motion/react"
import Pricing from '../modals/Pricing'
import QrCodeScannerRoundedIcon from '@mui/icons-material/QrCodeScannerRounded'

const Hero = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="py-24 px-8 md:px-16 lg:px-24 flex flex-col justify-center items-center gap-16" ref={ref}>
      <div className='flex flex-col items-center gap-8 lg:gap-16'>
        <div className="flex flex-col items-center gap-4">
          <motion.img src={Logo} alt="DailySpend Logo" className="w-28 lg:w-32" 
            initial = {{opacity: 0, scale: 0.5}}
            whileInView = {{opacity: 1, scale: 1}}
            viewport={{ once: true }}
            transition = {{type: 'spring', stiffness: 100, damping: 12, delay: 0.2}}
          />
          <motion.h2 className="text-xl lg:text-2xl font-bold text-gray-900 text-center"
            initial = {{opacity: 0, y: 100}}
            whileInView = {{opacity: 1, y: 0}}
            viewport={{ once: true }}
            transition = {{type: 'spring', stiffness: 100, damping: 12, delay: 0.4}}
          >Track Your Expenses Smartly</motion.h2>
          <motion.p className="lg:text-lg font-semibold text-gray-600 text-center max-w-lg"
            initial = {{opacity: 0, y: 100}}
            whileInView = {{opacity: 1, y: 0}}
            viewport={{ once: true }}
            transition = {{type: 'spring', stiffness: 100, damping: 12, delay: 0.6}}
          >Manage your daily spend with insights, analytics, and a touch of simplicity.</motion.p>
          <div className="flex flex-col lg:flex-row items-center gap-4">
            <motion.a href="https://apps.apple.com/in/app/daily-spend-expense-tracker/id1494517202" target='_blank'
              initial = {{opacity: 0, y: 100}}
              whileInView = {{opacity: 1, y: 0}}
              viewport={{ once: true }}
              transition = {{type: 'spring', stiffness: 100, damping: 12, delay: 0.8}}
            >
              <img src={AppStore} alt="App-store" width={150} className='!cursor-pointer' />
            </motion.a>
            <motion.p className="text-blue-500 hover:text-blue-700 cursor-pointer flex items-center gap-1" onClick={() => setOpenModal(true)}
              initial = {{opacity: 0, y: 100}}
              whileInView = {{opacity: 1, y: 0}}
              viewport={{ once: true }}
              transition = {{type: 'spring', stiffness: 100, damping: 12, delay: 1}}
            >View Pricing & Features <IosShareIcon sx={{fontSize: '18px'}}/></motion.p>
          </div>
        </div>

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

      <motion.div
        initial={{opacity: 0, y: 100}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{ once: true }}
        transition={{type: 'spring', stiffness: 100, damping: 14, delay: 0.2}}
        whileHover={{ scale: 1.03, rotate: 0.5 }}
        className="relative flex flex-col items-center justify-between gap-4 bg-black text-[#F1DABF] text-white rounded-2xl p-8 text-center shadow-2xl group"
      >
        <motion.div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.09),transparent_70%)] opacity-50"
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ repeat: Infinity, duration: 5 }}
        />
        <div>
          <motion.h2 className="flex items-center gap-2 text-2xl lg:text-3xl font-extrabold"
            initial={{y: 20, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{delay: 0.4, type: 'spring', stiffness: 100, damping: 10}}
            viewport={{once: true}}
          >
            <QrCodeScannerRoundedIcon sx={{fontSize: '40px'}} /> Introducing
          </motion.h2>
          <motion.h2 className="text-2xl lg:text-3xl font-extrabold drop-shadow-lg"
            style={{ color: "#F19509" }}
            initial={{y: 20, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{delay: 0.4, type: 'spring', stiffness: 100, damping: 10}}
            viewport={{once: true}}
            whileHover={{
              textShadow: "0px 0px 20px rgba(255, 215, 0, 0.9)",
              scale: 1.1,
              rotate: [0, 2, -2, 0],
              transition: { duration: 0.6 },
            }}
          >QweRty</motion.h2>
        </div>

        <motion.p className="lg:text-lg text-blue-50 text-white/70"
          initial={{opacity: 0, y: 30}}
          whileInView={{opacity: 1, y: 0}}
          transition={{delay: 0.6, type: 'spring', stiffness: 100, damping: 12}}
          viewport={{once: true}}
        >
          Create <span className="font-semibold text-white">dynamic, customizable QR codes</span> that grow with your business.  Track scans, analyze performance, and make every connection smarter — with <span className="font-semibold text-[#F19509]">QweRty</span>.
        </motion.p>

        <motion.a href="https://codeweaveqwerty.site" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#F19509] px-8 py-3 rounded-full font-semibold shadow-md hover:bg-gray-100 hover:text-black hover:shadow-xl transition-all relative"
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 0px 25px rgba(255,255,255,0.6)",
          }}
          whileTap={{ scale: 0.95 }}
        >Try QweRty Now →</motion.a>
      </motion.div>

      <AnimatePresence mode='wait'>
        {openModal && <Pricing setOpenModal={setOpenModal} />}
      </AnimatePresence>
    </div>
  )
}

export default Hero