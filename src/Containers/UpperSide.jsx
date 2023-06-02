import React from 'react'

import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'

const UpperSide = () => {
  return (
    <div className='px-4 lg:px-20 text-white bg-[#040C18]'>
        <Navbar />
        <Hero />
    </div>
  )
}

export default UpperSide