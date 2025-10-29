import { useRef, useState } from 'react'
import { Phone, Mail } from "lucide-react"
import { ArrowRight } from "lucide-react"
import { Element } from 'react-scroll'
import { toast } from 'react-toastify'
import emailjs from '@emailjs/browser'
import { motion } from 'motion/react'

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    try {
      setIsSubmitting(true);

      emailjs
      .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, {
        publicKey: import.meta.env.VITE_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          toast.success('Message sent successfully.');
          form.current.reset();
          setIsSubmitting(false);
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.error('Message not sent!');
          setIsSubmitting(false);
        },
      );
    } catch (error) {
      console.log(error);
      setIsSubmitting(false);
    }
  };

  return (
    <Element name='contact' className="grid grid-cols-1 lg:grid-cols-2 gap-16 text-white bg-black py-24 px-8 md:px-16 lg:px-24">
      <div className='flex flex-col gap-8'>
        <motion.h2 className='text-2xl md:text-4xl lg:text-5xl font-bold'
          initial = {{opacity: 0, y: 100}}
          whileInView = {{opacity: 1, y: 0}}
          viewport={{ once: true }}
          transition = {{type: 'spring', stiffness: 100, damping: 12, delay: 0.2}}
        >Need Help? We’re Here for You.</motion.h2>

        <motion.p className='text-justify'
          initial = {{opacity: 0, y: 100}}
          whileInView = {{opacity: 1, y: 0}}
          viewport={{ once: true }}
          transition = {{type: 'spring', stiffness: 100, damping: 12, delay: 0.4}}
        >At <span className='text-[#f19509] font-semibold'>Daily Spend</span> – Expense Tracker, we care about our users. Whether you’re facing a technical issue, need help with budgeting features, or just want to share feedback, our support team is ready to assist you.</motion.p>

        <motion.p className='text-justify'
          initial = {{opacity: 0, y: 100}}
          whileInView = {{opacity: 1, y: 0}}
          viewport={{ once: true }}
          transition = {{type: 'spring', stiffness: 100, damping: 12, delay: 0.6}}
        >Feel free to reach out through the form or the contact details below.</motion.p>

        <motion.hr className='text-white/50' 
          initial = {{opacity: 0, y: 100}}
          whileInView = {{opacity: 1, y: 0}}
          viewport={{ once: true }}
          transition = {{type: 'spring', stiffness: 100, damping: 12, delay: 0.8}}
        />

        <motion.p className='flex items-center gap-3'
          initial = {{opacity: 0, y: 100}}
          whileInView = {{opacity: 1, y: 0}}
          viewport={{ once: true }}
          transition = {{type: 'spring', stiffness: 100, damping: 12, delay: 1}}
        ><Phone className='w-5 h-5'/>+91 6283 731 156, +91 97809 26717</motion.p>

        <motion.p className='flex items-center gap-3'
          initial = {{opacity: 0, y: 100}}
          whileInView = {{opacity: 1, y: 0}}
          viewport={{ once: true }}
          transition = {{type: 'spring', stiffness: 100, damping: 12, delay: 1.2}}
        ><Mail className='w-5 h-5'/> support@dailyspend.in</motion.p>
        
        <motion.p
          initial = {{opacity: 0, y: 100}}
          whileInView = {{opacity: 1, y: 0}}
          viewport={{ once: true }}
          transition = {{type: 'spring', stiffness: 100, damping: 12, delay: 1.4}}
        >We typically reply within 12-24 hours on business days.</motion.p>
      </div>

      <motion.form className='bg-neutral-900 p-8 rounded-2xl flex flex-col justify-center gap-4' ref={form} onSubmit={sendEmail}
        initial = {{opacity: 0, x: 100}}
        whileInView = {{opacity: 1, x: 0}}
        viewport={{ once: true }}
        transition = {{type: 'spring', stiffness: 100, damping: 12, delay: 1.4}}
      >
        <div>
          <label className='block mb-2'>Name</label>
          <input type="text" placeholder='Jane Smith' className='w-full p-3 rounded-lg bg-neutral-800 text-white focus:outline-none focus:ring-1 focus:ring-white' name='user_name'/>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div>
            <label className='block mb-2'>Email</label>
            <input type="email" placeholder='example@example.com' className='w-full p-3 rounded-lg bg-neutral-800 text-white focus:outline-none focus:ring-1 focus:ring-white' name='user_email'/>
          </div>
          <div>
            <label className='block mb-2'>Phone (optional)</label>
            <input type="tel" placeholder='+123456789' className='w-full p-3 rounded-lg bg-neutral-800 text-white focus:outline-none focus:ring-1 focus:ring-white' name='user_phone'/>
          </div>
        </div>

        <div>
          <label className="block mb-2">Message</label>
          <textarea placeholder="I need..." rows="3" className="w-full p-3 rounded-lg bg-neutral-800 text-white focus:outline-none focus:ring-1 focus:ring-white" name='message'/>
        </div>

        <button disabled={isSubmitting}
          className={`flex items-center justify-between p-1 rounded-full font-semibold w-full transition duration-300 ease-in-out ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-white hover:bg-gray-200 group'}`}>
          <p className='text-black px-3 mx-auto'>{isSubmitting ? 'Sending...' : 'Submit'}</p>
          <ArrowRight size={40} className='bg-black text-white rounded-full p-2 -rotate-45 group-hover:rotate-0 transition duration-300 ease-in-out'/>
        </button>
      </motion.form>
    </Element>
  )
}

export default Contact