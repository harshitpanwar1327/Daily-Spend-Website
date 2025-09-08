import './app.css'
import Home from './pages/Home'
import WhyUs from './section/WhyUs.jsx'
import AboutUs from './section/About.jsx'
import Testimonial from './section/Testimonials.jsx'
import Contact from './section/Contact.jsx'
import FAQ from './section/FAQ.jsx'
import Download from './section/Download.jsx'
import Footer from './components/Footer'
import { Element } from 'react-scroll'

const App = () => {
  return (
    <div>
      <Element name='home'>
        <Home />
      </Element>

      <WhyUs />

      <Element name='about'>
        <AboutUs />
      </Element>

      <Testimonial />

      <Element name='contact'>
        <Contact />
      </Element>

      <FAQ />

      <Element name='download'>
        <Download />
      </Element>

      <Footer />
    </div>
  )
}

export default App