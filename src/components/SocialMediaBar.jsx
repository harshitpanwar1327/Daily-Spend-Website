import YouTubeIcon from '@mui/icons-material/YouTube'
import InstagramIcon from '@mui/icons-material/Instagram'
import { motion } from 'framer-motion'

const SocialMediaBar = ({ setSidebar }) => {
  return (
    <div className='fixed top-0 left-0 w-screen h-screen flex flex-row-reverse z-10' onClick={()=>setSidebar(false)}>
      <motion.div className='h-screen w-[100px] bg-gradient-to-b from-[rgba(255,149,9,0.87)] to-[rgba(255,149,9,0.5)] flex flex-col justify-center items-center gap-6'
        initial={{ x: '100%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: '100%', opacity: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 15, duration: 0.7 }}
        onClick={(e)=>e.stopPropagation()}
      >
        <div className="h-25 border border-white"></div>
        <a href="https://youtube.com/@dailyspend3363?si=wX5DzHMOJ3Skpr3i" target='_blank' rel="noopener noreferrer"><YouTubeIcon sx={{fontSize: '32px'}} className='text-white cursor-pointer hover:scale-120 !transition duration-500'/></a>
        <a href="https://www.instagram.com/dailyspendapp?igsh=Z3U2dnF6c3Myejl3" target='_blank' rel="noopener noreferrer"><InstagramIcon sx={{fontSize: '32px'}} className='text-white cursor-pointer hover:scale-120 !transition duration-500'/></a>
        <div className="h-25 border border-white"></div>
      </motion.div>
    </div>
  )
}

export default SocialMediaBar