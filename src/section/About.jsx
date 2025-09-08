import { Element } from 'react-scroll'
import founderImg from '../assets/about1.jpg'
import cofounderImg from '../assets/about2.jpg'

const About = () => {
  return (
    <Element 
      name='about' 
      className='bg-black text-white flex flex-col justify-center items-center gap-16 py-24 px-8 md:px-16 lg:px-24'
    >
      <div className='max-w-4xl text-center space-y-6'>
        <h2 className='text-4xl md:text-5xl font-bold'>About Us</h2>
        <p className='text-lg text-white/80 leading-relaxed'>
          <span className='font-semibold text-[#f19509]'>Daily Spend</span> – Expense Tracker was created with a vision to make personal finance simple, intuitive, and accessible for everyone. Since our launch in April 2020, we have grown organically, building a strong community of users who value simplicity, accuracy, and control in managing their expenses. With an outstanding 4.6-star rating, Daily Spend has become a reliable companion for thousands of users worldwide.
        </p>
      </div>

      <div className='w-full flex flex-col gap-12'>
        <h2 className='text-3xl md:text-4xl font-semibold text-center'>Our Founders</h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
          <div className='flex flex-col items-center text-center gap-4 bg-neutral-900 p-8 rounded-2xl shadow-lg'>
            <img src={founderImg} alt="Founder" className='w-32 h-32 object-cover rounded-full border-4 border-white/20' />
            <h3 className='text-xl font-bold'>Shashank Panwar (CTO & Founder)</h3>
            <p className='text-white/70 italic'>“An M.Tech graduate in Computer Science from Thapar University. With his strong technical background and hands-on expertise in mobile app development, Shashank single-handedly built the initial version of the Daily Spend app, laying the foundation for a platform that blends intuitive design with powerful functionality. Today, he continues to drive the technology vision, ensuring Daily Spend evolves with the needs of its users.”</p>
          </div>

          <div className='flex flex-col items-center text-center gap-4 bg-neutral-900 p-8 rounded-2xl shadow-lg'>
            <img src={cofounderImg} alt="Co-Founder" className='w-32 h-32 object-cover rounded-full border-4 border-white/20' />
            <h3 className='text-xl font-bold'>Kirti Ahlawat (CEO & Founder)</h3>
            <p className='text-white/70 italic'>“An MBA graduate from IMED, Pune. Kirti brings her strategic leadership, business acumen, and user-focused approach to the venture, ensuring that Daily Spend continues to grow while staying true to its mission of empowering people to take control of their finances. Together, they form the driving force behind Daily Spend, blending technology with practical usability to make financial tracking effortless.”</p>
          </div>
        </div>
      </div>
    </Element>
  )
}

export default About