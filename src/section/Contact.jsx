import { useRef } from 'react'
import { Phone, Mail } from "lucide-react"
import { ArrowRight } from "lucide-react"
import { Element } from 'react-scroll'
import { toast } from 'react-toastify'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    try {

      emailjs
      .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, {
        publicKey: import.meta.env.VITE_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          toast.success('Message sent successfully.');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.error('Message not sent!');
        },
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
        <Element name='contact' className='relative w-screen p-4 md:px-12 lg:p-30 pb-8 bg-black overflow-hidden flex flex-col justify-between gap-16'>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 text-white">
          <div className='flex flex-col gap-8'>
            <h2 className='text-5xl md:text-6xl font-semibold'>Need Help? We’re Here for You.</h2>
            <p className='text-justify'>At <span className='text-[#f19509]'>Daily Spend</span> – Expense Tracker, we care about our users. Whether you’re facing a technical issue, need help with budgeting features, or just want to share feedback, our support team is ready to assist you.</p>
            <p>Feel free to reach out through the form or the contact details below.</p>
            <hr className='text-white/50'/>
            <p className='flex items-center gap-3'><Phone className='w-5 h-5'/>+91 6283 731 156</p>
            <p className='flex items-center gap-3'><Mail className='w-5 h-5'/> support@dailyspend.in</p>
            <p>We typically reply within 12-24 hours on business days.</p>
          </div>

          <form className='bg-neutral-900 p-8 rounded-2xl space-y-4'  ref={form} onSubmit={sendEmail}>
            <div>
              <label className='block mb-2'>Name</label>
              <input type="text" placeholder='Jane Smith' className='w-full p-3 rounded-lg bg-neutral-800 text-white focus:outline-none focus:ring-1 focus:ring-white' name='name'/>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div>
                <label className='block mb-2'>Email</label>
                <input type="email" placeholder='example@example.com' className='w-full p-3 rounded-lg bg-neutral-800 text-white focus:outline-none focus:ring-1 focus:ring-white' name='email'/>
              </div>
              <div>
                <label className='block mb-2'>Phone (optional)</label>
                <input type="tel" placeholder='+123456789' className='w-full p-3 rounded-lg bg-neutral-800 text-white focus:outline-none focus:ring-1 focus:ring-white' name='phone'/>
              </div>
            </div>

            <div>
              <label className="block mb-2">Message</label>
              <textarea placeholder="I need..." rows="3" className="w-full p-3 rounded-lg bg-neutral-800 text-white focus:outline-none focus:ring-1 focus:ring-white" name='message'/>
            </div>

            <button className="flex items-center justify-between bg-white p-1 rounded-full font-semibold hover:bg-gray-200 group w-full">
              <p className='text-black px-3 mx-auto'>Submit</p>
              <ArrowRight size={40} className='bg-black text-white rounded-full p-2 -rotate-45 group-hover:rotate-0 transition duration-300 ease-in-out'/>
            </button>
          </form>
        </div>
      </Element>
    </>
  )
}

export default Contact