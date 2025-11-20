import { Element } from 'react-scroll'
import { motion } from 'motion/react'
import founderImg from '../assets/about1.jpg'
import cofounderImg from '../assets/about2.jpg'

const About = () => {
  return (
    <Element name='about' className='bg-black text-white flex flex-col justify-center items-center gap-16 py-24 px-8 md:px-16 lg:px-24' >
      <div className='max-w-4xl text-center space-y-6'>
        <motion.h2 className='text-2xl md:text-4xl lg:text-5xl font-bold'
          initial = {{opacity: 0, y: 100}}
          whileInView = {{opacity: 1, y: 0}}
          viewport={{ once: true }}
          transition = {{type: 'spring', stiffness: 100, damping: 12, delay: 0.2}}
        >About Us</motion.h2>
        <motion.p className='text-white/80 leading-relaxed'
          initial = {{opacity: 0, y: 100}}
          whileInView = {{opacity: 1, y: 0}}
          viewport={{ once: true }}
          transition = {{type: 'spring', stiffness: 100, damping: 12, delay: 0.4}}
        >
          <span className='font-semibold text-[#f19509]'>Daily Spend</span> – Expense Tracker was created with a vision to make personal finance simple, intuitive, and accessible for everyone. Since our launch in April 2020, we have grown organically, building a strong community of users who value simplicity, accuracy, and control in managing their expenses. With an outstanding 4.6-star rating, Daily Spend has become a reliable companion for thousands of users worldwide.
        </motion.p>
        <motion.p className='text-white/80 leading-relaxed'
          initial = {{opacity: 0, y: 100}}
          whileInView = {{opacity: 1, y: 0}}
          viewport={{ once: true }}
          transition = {{type: 'spring', stiffness: 100, damping: 12, delay: 0.6}}
        >
          We believe financial awareness drives better decisions. Our mission is to offer a seamless, intuitive experience that helps users spend smarter, save more, and build healthier financial habits—powered by continuous innovation and a passion for simplicity.
        </motion.p>
      </div>

      <div className='w-full flex flex-col gap-12'>
        <motion.h2 className='text-xl md:text-3xl lg:text-4xl font-semibold text-center'
          initial = {{opacity: 0, y: 100}}
          whileInView = {{opacity: 1, y: 0}}
          viewport={{ once: true }}
          transition = {{type: 'spring', stiffness: 100, damping: 12, delay: 0.8}}
        >Our Founders</motion.h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
          <motion.div className='flex flex-col items-center text-center gap-4 bg-neutral-900 p-8 rounded-2xl shadow-lg'
            initial = {{opacity: 0, x: -100}}
            whileInView = {{opacity: 1, x: 0}}
            viewport={{ once: true }}
            transition = {{type: 'spring', stiffness: 100, damping: 12, delay: 1}}
          >
            {/* <img src={founderImg} alt="Founder" className='w-32 h-32 object-cover rounded-full border-4 border-white/20' /> */}
            <h3 className='md:text-xl font-bold'>Shashank Panwar (CTO & Founder)</h3>
            <p className='text-white/70'>“An M.Tech in Computer Science from Thapar University, Shashank built the first version of Daily Spend himself, combining intuitive design with powerful functionality. He continues to lead the technology vision, ensuring the app evolves with its users’ needs.”</p>
          </motion.div>

          <motion.div className='flex flex-col items-center text-center gap-4 bg-neutral-900 p-8 rounded-2xl shadow-lg'
            initial = {{opacity: 0, x: 100}}
            whileInView = {{opacity: 1, x: 0}}
            viewport={{ once: true }}
            transition = {{type: 'spring', stiffness: 100, damping: 12, delay: 1}}
          >
            {/* <img src={cofounderImg} alt="Co-Founder" className='w-32 h-32 object-cover rounded-full border-4 border-white/20' /> */}
            <h3 className='md:text-xl font-bold'>Kirti Ahlawat (CEO & Founder)</h3>
            <p className='text-white/70'>“An MBA from IMED, Pune, Kirti brings strategic leadership and user-focused business acumen, driving Daily Spend’s growth while staying true to its mission of empowering people to manage their finances effortlessly.”</p>
          </motion.div>
        </div>
      </div>
    </Element>
  )
}

export default About