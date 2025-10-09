import { ArrowBack } from '@mui/icons-material'
import { motion, AnimatePresence } from 'motion/react'
import { useState } from 'react'

const plans = [
  {
    name: "Silver",
    quarterlyPrice: 149,
    annuallyPrice: 499,
    quarterlyMonthly: 50,
    annuallyMonthly: 42 ,
    features: [
      { text: "Add Unlimited Transactions", included: true },
      { text: "Data backup on server", included: true },
      { text: "Track 5 entries of Lend and Borrow", included: true },
      { text: "Remove ads after add transaction", included: true },
      { text: "Generate Monthly Report with Ads", included: true },
      { text: "Generate 1 custom report", included: true },
      { text: "Remove Ads", included: false },
      { text: "Add Bills On Transactions", included: false },
    ]
  },
  {
    name: "Gold",
    quarterlyPrice: 299,
    annuallyPrice: 899,
    quarterlyMonthly: 100,
    annuallyMonthly: 75,
    features: [
      { text: "Add Unlimited Transactions", included: true },
      { text: "Data backup on server", included: true },
      { text: "Track 8 entries of Lend and Borrow", included: true },
      { text: "Remove ads after add transaction", included: true },
      { text: "Generate Monthly Report", included: true },
      { text: "Generate 2 custom report", included: true },
      { text: "Remove Ads", included: true },
      { text: "Add Bills On Transactions", included: false },
    ]
  },
  {
    name: "Diamond",
    quarterlyPrice: 499,
    annuallyPrice: 1499,
    quarterlyMonthly: 166,
    annuallyMonthly: 125,
    features: [
      { text: "Add Unlimited Transactions", included: true },
      { text: "Data backup on server", included: true },
      { text: "Track unlimited entries of Lend and Borrow", included: true },
      { text: "Remove ads after add transaction", included: true },
      { text: "Generate Monthly Report", included: true },
      { text: "Generate unlimited custom report", included: true },
      { text: "Remove Ads", included: true },
      { text: "Add Bills On Transactions", included: true },
    ]
  }
];

const Pricing = ({ setOpenModal }) => {
  const [duration, setDuration] = useState("quarterly");
  
  return (  
    <div className='w-screen h-screen fixed top-0 left-0 bg-white overflow-y-auto z-100'>
      <AnimatePresence>
        <ArrowBack style={{ fontSize: '32px' }} className='absolute top-5 left-5 cursor-pointer' onClick={()=>setOpenModal(false)} />

        <motion.div className='min-h-full flex flex-col items-center justify-center gap-8 py-16 px-8 md:px-12 lg:px-16'
          initial={{ y: '-100%' }}
          animate={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 uppercase">Flexible Plans For Every Need</h2>

          <div className="flex items-center gap-1 bg-gray-100 rounded-md p-1">
            <button className={`px-6 py-2 text-sm font-semibold rounded-md flex items-center gap-4 ${duration === 'quarterly' ? 'bg-white': 'hover:bg-gray-200'}`} onClick={()=>setDuration('quarterly')}>Quarterly <span className={`text-[#f19509] ${duration === 'annually' && 'hidden'}`}>15 Days Free</span></button>
            <button className={`px-6 py-2 text-sm font-semibold rounded-md flex items-center gap-4 ${duration === 'annually' ? 'bg-white': 'hover:bg-gray-200'}`} onClick={()=>setDuration('annually')}>Annually <span className={`text-[#f19509] ${duration === 'quarterly' && 'hidden'}`}>15 Days Free</span></button>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-8 w-full">
            {plans.map((plan, index) => (
              <motion.div key={index} className={`flex flex-col justify-between gap-2 rounded-2xl shadow-lg p-6 border border-gray-200 bg-gray-100 hover:bg-white group`} 
                whileHover={{ y: -5 }}
              >
                <h3 className="uppercase text-sm font-bold bg-white self-start px-1 rounded group-hover:bg-gray-100">{plan.name}</h3>
                <p className="text-5xl font-semibold">{duration==='quarterly' ? plan.quarterlyPrice: plan.annuallyPrice}</p>
                <p className="text-sm text-gray-600">₹ {duration==='quarterly' ? plan.quarterlyMonthly: plan.annuallyMonthly} per month</p>

                <p className='mt-2 font-semibold'>Features</p>
                <ul className="space-y-2 text-sm text-gray-700">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      {feature.included ? (
                        <span className="text-green-500">✔</span>
                      ) : (
                        <span className="text-red-500">✖</span>
                      )}
                      {feature.text}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>  
  )
}

export default Pricing