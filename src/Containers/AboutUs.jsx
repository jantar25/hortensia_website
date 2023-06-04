import React from 'react'

import Persons from '../Constants/Persons'
import AboutCard from '../Components/AboutCard'

const AboutUs = () => {
  return (
    <div className='px-4 lg:px-20 bg-bg pt-4 text-white'>
        <div className="">
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