import React from 'react'
import {motion} from 'motion/react'
import AppStore from '../assets/app_store.png'

const Download = () => {
  return (
    <div className='h-[80vh] bg-[url(/src//assets/download-bg.jpg)] bg-center bg-cover mb-16 mx-8 rounded-lg grid grid-cols-1 lg:grid-cols-3 place-items-center'>
      <div className='lg:col-start-2 lg:col-span-2 flex flex-col items-center gap-2'>
        <motion.h2 className='text-3xl md:text-4xl font-bold text-center'
          initial = {{opacity: 0, y: 100}}
          whileInView = {{opacity: 1, y: 0}}
          viewport={{ once: true }}
          transition = {{type: 'spring', stiffness: 100, damping: 12, delay: 0.2}}
        >
          Start Managing Your Money Today
        </motion.h2>
        <motion.p className='md:text-lg text-center'
          initial = {{opacity: 0, y: 100}}
          whileInView = {{opacity: 1, y: 0}}
          viewport={{ once: true }}
          transition = {{type: 'spring', stiffness: 100, damping: 12, delay: 0.4}}
        >
          Get Daily Spend on your device and take control of your finances.
        </motion.p>
        <a href="https://apps.apple.com/in/app/daily-spend-expense-tracker/id1494517202" target='_blank'>
          <motion.img src={AppStore} alt="App-store" width={200} className='!cursor-pointer'
            initial = {{opacity: 0, y: 100}}
            whileInView = {{opacity: 1, y: 10}}
            viewport={{ once: true }}
            transition = {{type: 'spring', stiffness: 100, damping: 12, delay: 0.6}}
          />
        </a>
      </div>
    </div>
  )
}

export default Download