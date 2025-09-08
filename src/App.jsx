import './app.css'
import Home from './pages/Home'
import WhyUs from './pages/WhyUs'
import AboutUs from './section/About.jsx'
import Testimonial from './section/Testimonials.jsx'
import Contact from './section/Contact.jsx'
import Download from './pages/Download'
import Footer from './components/Footer'
import FAQ from './section/FAQ.jsx'
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