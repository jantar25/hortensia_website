import React from 'react'

import Navbar from '../Containers/Navbar'
import Hero from '../Containers/Hero'
import ServicesCards from '../Containers/ServicesCards'
import AfterCare from '../Containers/AfterCare'
import AboutUs from '../Containers/AboutUs'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <ServicesCards />
        <AfterCare />
        <AboutUs />
    </div>
  )
}

export default Home