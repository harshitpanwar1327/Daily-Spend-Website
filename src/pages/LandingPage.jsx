import { Element } from "react-scroll";
import Home from "../section/Home";
import Hero from "../section/Hero";
import WhyUs from "../section/WhyUs";
import AboutUs from "../section/About";
import Testimonial from "../section/Testimonials";
import Contact from "../section/Contact";
import FAQ from "../section/FAQ";
import Download from "../section/Download";
import Footer from "../components/Footer";
import '../app.css'

const LandingPage = () => {
  return (
    <>
      <Home />
      <Hero />
      <WhyUs />
      <AboutUs />
      <Testimonial />
      <Contact />
      <FAQ />
      <Download />
      <Footer />
    </>
  );
};

export default LandingPage;