import React from 'react'
import { HashLink } from 'react-router-hash-link';

import Logo from "../Asset/images/hortensia_logo.PNG";

const Footer = () => {
  return (
    <div className='sm:px-4 lg:px-20 bg-bg text-white py-16'>
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">
            <HashLink smooth to="/#">
                <div className="flex items-center my-4">
                    <img src={Logo} alt="Logo" className="h-12 mr-2" />
                </div>
            </HashLink>
            <ul className="flex flex-col sm:flex-row items-center my-4">
                <HashLink smooth to="/#customers"><li className='mx-1'>FAQ's</li></HashLink>
                <HashLink smooth to="/#hours"><li className='mx-1'>Trading Hours</li></HashLink>
                <HashLink smooth to="/#about"><li className='mx-1'>Find Us</li></HashLink>
                <HashLink smooth to="/#contacts"><li className='mx-1'>Appointment</li></HashLink>
                
                
                
            </ul>
            <ul className="flex items-center my-4">
                <HashLink smooth to="/#contacts"><li className='mx-1'>Contacts</li></HashLink>
                <HashLink smooth to="/#contacts"><li className='mx-1'>Follow us</li></HashLink>
            </ul>
        </div>
        <hr className='border-gray-800 my-8' />
        <p className='text-center text-gray-400'>Copyright © 2024 Hortensia Organisation™. All rights reserved.</p>
    </div>
  )
}

export default Footer