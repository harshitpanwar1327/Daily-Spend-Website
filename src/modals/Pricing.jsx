import KeyboardDoubleArrowUpRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowUpRounded'
import { motion } from 'motion/react'
import { useState } from 'react';

const plans = [
  {
    name: "Silver",
    quaterktPrice: 149,
    annuallyPrice: 500,
    quarterlyMonthly: "₹50 per month",
    annuallyMonthly: "₹42 per month",
    features: [
      { text: "Up to 67 Agent conversations", included: true },
      { text: "Up to 200 Images generation", included: true },
      { text: "Up to 333 Images edit", included: true },
      { text: "Up to 267-second videos", included: true },
      { text: "Up to 4 Veo3 videos", included: true },
      { text: "Commercial license", included: false },
      { text: "Commercial license", included: false },
      { text: "Commercial license", included: false },
    ],
    highlight: false,
  },
  {
    name: "Gold",
    quarterlyPrice: 299,
    annuallyPrice: 999,
    quarterlyMonthly: "₹100 per month",
    annuallyMonthly: "₹84 per month",
    features: [
      { text: "Up to 67 Agent conversations", included: true },
      { text: "Up to 200 Images generation", included: true },
      { text: "Up to 333 Images edit", included: true },
      { text: "Up to 267-second videos", included: true },
      { text: "Up to 4 Veo3 videos", included: true },
      { text: "Unlimited Model Usage", included: true },
      { text: "Unlimited Model Usage", included: true },
      { text: "Commercial license", included: false },
    ],
    highlight: false,
  },
  {
    name: "Diamond",
    quarterlyPrice: 499,
    annuallyPrice: 1499,
    quarterlyMonthly: "₹166 per month",
    annuallyMonthly: "₹125 per month",
    features: [
      { text: "Up to 67 Agent conversations", included: true },
      { text: "Up to 200 Images generation", included: true },
      { text: "Up to 333 Images edit", included: true },
      { text: "Up to 267-second videos", included: true },
      { text: "Up to 4 Veo3 videos", included: true },
      { text: "Unlimited Model Usage", included: true },
      { text: "Unlimited Model Usage", included: true },
    ],
    highlight: true,
  },
];

const Pricing = ({ setOpenModal }) => {
  let [duration, setDuration] = useState("quaterly");
  
  return (
    <div className='z-100 w-screen h-screen fixed top-0 left-0 bg-white flex flex-col items-center gap-4 py-4'>
      <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
      >
          <KeyboardDoubleArrowUpRoundedIcon sx={{fontSize: '32px'}} className='cursor-pointer transition duration-300 hover:scale-105' onClick={()=>setOpenModal(false)}/>
      </motion.div>

      <div className="w-full bg-white px-6 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 uppercase mb-6">Flexible Plans For Every Need</h2>

        <div className="flex items-center gap-4 bg-gray-100 rounded-full px-4 py-2 mb-10">
          <button className="px-4 py-1 bg-black text-white text-sm rounded-full">Quaterly</button>
          <button className="px-4 py-1 text-gray-600 text-sm rounded-full hover:bg-gray-200 transition">Annually</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl w-full">
          {plans.map((plan, index) => (
            <motion.div key={index} className={`flex flex-col justify-between rounded-2xl shadow-lg p-6 border ${plan.highlight ? "border-black scale-105" : "border-gray-200"}`} whileHover={{ y: -5 }}>
              <h3 className="text-lg font-bold text-gray-800 mb-2">{plan.name}</h3>
              <p className="text-3xl font-extrabold text-gray-900">₹ {plan.price}{" "}</p>
              <p className="text-sm text-gray-600 font-medium">{plan.monthly}</p>
              <button className={`mt-4 py-2 rounded-lg text-sm font-semibold 
                ${plan.highlight ? "bg-black text-white hover:bg-green-600": "bg-gray-900 text-white hover:bg-green-600"}`}>Upgrade
              </button>

              <ul className="mt-5 space-y-2 text-sm text-gray-700">
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
      </div>
    </div>
  )
}

export default Pricing