import React from 'react'

import Logo from "../Asset/images/logo.png";

const Footer = () => {
  return (
    <div className='sm:px-4 lg:px-20 bg-bg text-white py-16'>
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">
            <div className="flex items-center my-4">
                <img src={Logo} alt="Logo" className="w-8 mr-2" />
                <div>
                    <h1 className="text-md font-[700] text-text">
                    ORGANIC ESSENTIALS
                    </h1>
                    <p className="text-xs">Skin & Nails Spa</p>
                </div>
            </div>
            <ul className="flex items-center my-4">
                <li className='mx-1'>FAQ's</li>
                <li className='mx-1'>Trading Hours</li>
                <li className='mx-1'>Find Us</li>
                <li className='mx-1'>Appointment</li>
            </ul>
            <ul className="flex items-center my-4">
                <li className='mx-1'>Contacts</li>
                <li className='mx-1'>Follow us</li>
            </ul>
        </div>
        <hr className='border-gray-800 my-8' />
        <p className='text-center text-gray-400'>Ⓒ2023, All rights powered by Lorganic Essentials.</p>
    </div>
  )
}

export default Footer