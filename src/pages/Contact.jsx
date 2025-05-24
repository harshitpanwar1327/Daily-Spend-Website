import React, {useState, useRef} from 'react'
import './contact.css'
import WorldMap from '../assets/worldmap.png'
import { motion } from 'motion/react'
import { toast, Bounce } from 'react-toastify'
import emailjs from '@emailjs/browser'
import { SyncLoader } from "react-spinners"

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      emailjs
      .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, {
        publicKey: import.meta.env.VITE_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          toast.success('Message sent successfully.', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
          });
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.success('Message not sent!', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
          });
        },
      );
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='page'>
      {loading && (
        <div className="overlay">
          <SyncLoader color="#ff9509" />
        </div>
      )}
      <div className="contact-page-content">
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <motion.h1
            initial = {{opacity: 0, y: 100}}
            whileInView = {{opacity: 1, y: 0}}
            viewport={{ once: true }}
            transition = {{type: 'spring', stiffness: 100, damping: 10, delay: 0.2}}
            style = {{marginBottom: '0'}}
          >We’d Love to Hear From You</motion.h1>
          <motion.input type="text" placeholder='Name' name='user_name' id='user_name'
            className='contact-form-input' required
            initial = {{opacity: 0, y: 100}}
            whileInView = {{opacity: 1, y: 0}}
            viewport={{ once: true }}
            transition = {{type: 'spring', stiffness: 100, damping: 10, delay: 0.4}}
          />
          <motion.input type="email" placeholder='Email' name='user_email' id='user_email'
            className='contact-form-input' required
            initial = {{opacity: 0, y: 100}}
            whileInView = {{opacity: 1, y: 0}}
            viewport={{ once: true }}
            transition = {{type: 'spring', stiffness: 100, damping: 10, delay: 0.6}}
          />
          <motion.textarea placeholder='Message' name="message" id="message" 
            className='contact-form-message-box' rows={5} required
            initial = {{opacity: 0, y: 100}}
            whileInView = {{opacity: 1, y: 0}}
            viewport={{ once: true }}
            transition = {{type: 'spring', stiffness: 100, damping: 10, delay: 0.8}}
          ></motion.textarea>
          <motion.button className='contact-form-button'
            initial = {{opacity: 0, y: 100}}
            whileInView = {{opacity: 1, y: 0}}
            viewport={{ once: true }}
            transition = {{type: 'spring', stiffness: 100, damping: 10, delay: 1}}
          >Send Message <i className="fa-regular fa-paper-plane"></i>
          </motion.button>
        </form>

        <motion.img src={WorldMap} alt="world-map" className="world-map-image"
          initial = {{opacity: 0, scale: 0.5}}
          whileInView = {{opacity: 1, scale: 1}}
          viewport={{ once: true }}
          transition = {{type: 'spring', stiffness: 100, damping: 10, delay: 1}}
        />
      </div>
    </div>
  )
}

export default Contact