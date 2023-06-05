import React from 'react'

import Navbar from '../Containers/Navbar'
import Hero from '../Containers/Hero'
import ServicesCards from '../Containers/ServicesCards'
import AfterCare from '../Containers/AfterCare'
import AboutUs from '../Containers/AboutUs'
import HoursofOperation from '../Containers/HoursofOperation'
import Treatments from '../Containers/Treatments'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <ServicesCards />
        <AfterCare />
        <AboutUs />
        <Treatments />
        <HoursofOperation />
    </div>
  )
}

export default Home