import React from 'react'

import Persons from '../Constants/Persons'
import AboutCard from '../Components/AboutCard'

const AboutUs = () => {
  return (
    <div className='relative px-4 lg:px-20 bg-bg py-10 md:py-20 text-white -skew-y-3 rounded-tl-[40px]'>
        <div className='w-[80px] h-[80px] bg-blog rounded-full absolute -top-[80px] right-0 z-10'></div>
        <div className='w-[40px] h-[40px] bg-bg absolute -top-[39px] right-0'></div>
        <div className="skew-y-3">
            <div className='flex flex-col items-center mb-8'>
                <h3 className='text-text py-2 font-bold text-xl'>About Us</h3>
                <h1 className='font-Poppins text-2xl md:text-3xl font-bold md:mb-8 md:w-[60%] text-center'>
                    With Successfull Career in the Bealth and Beauty Industry.
                </h1>
            </div>
            <div className="flex flex-wrap justify-around items-center">
                {Persons.map(person => <AboutCard person={person} />)}
            </div>
            <div className='flex flex-col sm:flex-row items-start sm:justify-between my-8'>
                <div>
                    <h3 className='text-text font-semibold text-md'>OPEN OPERATION</h3>
                    <h1 className='font-bold text-xl'>OUR HOURS OF OPERATION</h1>
                </div>
                <button className="p-2 border rounded-full mt-4 sm:mt-0">Book Appointment</button>
            </div>
        </div>
    </div>
  )
}

export default AboutUs