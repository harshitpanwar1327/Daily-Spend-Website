import React from 'react'
import './app.css'
import Home from './pages/Home'
import WhyUs from './pages/WhyUs'
import Testimonial from './pages/Testimonial'
import Contact from './pages/Contact'
import Download from './pages/Download'
import Footer from './pages/Footer'
import { Element } from 'react-scroll';

const App = () => {
  return (
    <div>
      <Element name='home'>
        <Home />
      </Element>
      <Element name='about'>
        <WhyUs />
      </Element>
      <Testimonial />
      <Element name='contact'>
        <Contact />
      </Element>
      <Element name='download'>
        <Download />
      </Element>
      <Footer />
    </div>
  )
}

export default App