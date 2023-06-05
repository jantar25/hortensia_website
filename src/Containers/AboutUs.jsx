import React from 'react'

import Persons from '../Constants/Persons'
import AboutCard from '../Components/AboutCard'

const AboutUs = () => {
  return (
    <div className='relative px-4 lg:px-20 bg-bg py-16 text-white -skew-y-2 rounded-tl-[40px]'>
        <div className='w-[80px] h-[80px] bg-blog rounded-full absolute -top-[80px] right-0 z-10'></div>
        <div className='w-[40px] h-[40px] bg-bg absolute -top-[39px] right-0'></div>
        <div className="skew-y-2">
            <h3>About Us</h3>
            <h1>With Successfull Career in the Bealth and Beauty Industry</h1>
            <div className="flex justify-around items-center">
                {Persons.map(person => <AboutCard person={person} />)}
            </div>
            <div className='flex items-center justify-between'>
                <div>
                    <h3>OPEN OPERATION</h3>
                    <h1>OUR HOURS OF OPERATIOJ</h1>
                </div>
                <button>Book Appointment</button>
            </div>
        </div>
    </div>
  )
}

export default AboutUs