import CountUp from "react-countup"
import { useInView } from "react-intersection-observer"
import Logo from '../assets/logo.png'
import AppStore from '../assets/app_store.png'
import IosShareIcon from '@mui/icons-material/IosShare'
import { degrees } from "motion"

const hero = () => {
    const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.7,
  });

  return (
    <div className="py-24 px-8 md:px-16 lg:px-24 flex flex-col justify-center items-center gap-16" ref={ref}>
      <div className="flex flex-col items-center gap-4">
        <img src={Logo} alt="DailySpend Logo" className="w-28 md:w-36 lg:w-40" />
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center">Track Your Expenses Smartly</h2>
        <p className="text-xl font-semibold text-gray-600 text-center max-w-lg">Manage your daily spend with insights, analytics, and a touch of simplicity.</p>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <a href="https://apps.apple.com/in/app/daily-spend-expense-tracker/id1494517202" target='_blank'>
            <img src={AppStore} alt="App-store" width={200} className='!cursor-pointer' />
          </a>
          <p className="text-blue-500 hover:text-blue-700 cursor-pointer flex items-center gap-1">View Pricing & Features <IosShareIcon sx={{fontSize: '18px'}}/></p>
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
  )
}

export default hero