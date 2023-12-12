import React from 'react'
import About from './containers/About/About';
import Contact from './containers/Footer/Contact';
import Pricing from './containers/Pricing/Pricing';
import Service from './containers/Service/Service';
import Cta from './containers/Testimonials/Cta';
import Testimonials from './containers/Testimonials/Testimonials';
import Work from './containers/Work/Work';
import Hero from './containers/Header/Hero';
const Home = () => {
  return (
    <div>
    <Hero/>
    <Service />
      <About  />
      <Work />
      <Pricing />
      <Testimonials />
      <Cta />
      <Contact />
    </div>
  )
}

export default Home