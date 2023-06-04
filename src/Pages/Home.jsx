import React from 'react'

import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import ServicesCards from '../Containers/ServicesCards'
import AfterCare from '../Containers/AfterCare'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <ServicesCards />
        <AfterCare />
    </div>
  )
}

export default Home