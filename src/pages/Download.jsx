import React from 'react'
import './download.css'
import {motion} from 'motion/react'
import AppStore from '../assets/app_store.png'

const Download = () => {
  return (
    <div className='page'>
      <div className="download-page-content">
        <div className="download-section">
          <motion.h2 className='download-section-heading'
            initial = {{opacity: 0, y: 100}}
            whileInView = {{opacity: 1, y: 0}}
            viewport={{ once: true }}
            transition = {{type: 'spring', stiffness: 100, damping: 10, delay: 0.2}}
          >
            Start Managing Your Money Today
          </motion.h2>
          <motion.p
            initial = {{opacity: 0, y: 100}}
            whileInView = {{opacity: 1, y: 0}}
            viewport={{ once: true }}
            transition = {{type: 'spring', stiffness: 100, damping: 10, delay: 0.4}}
          >
            Get Daily Spend on your device and take control of your finances.
          </motion.p>
          <a href="https://apps.apple.com/in/app/daily-spend-expense-tracker/id1494517202" target='_blank'>
            <motion.img src={AppStore} alt="App-store" width={200}
              initial = {{opacity: 0, y: 100}}
              whileInView = {{opacity: 1, y: 10}}
              viewport={{ once: true }}
              transition = {{type: 'spring', stiffness: 100, damping: 10, delay: 0.8}}
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Download