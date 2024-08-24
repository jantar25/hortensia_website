import React from 'react'
import { HashLink } from 'react-router-hash-link';

import Logo from "../Asset/images/logo.png";

const Footer = () => {
  return (
    <div className='sm:px-4 lg:px-20 bg-bg text-white py-16'>
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">
            <HashLink smooth to="/#">
                <div className="flex items-center my-4">
                    <img src={Logo} alt="Logo" className="w-8 mr-2" />
                    <div>
                        <h1 className="text-md font-[700] text-text">
                        ORGANIC ESSENTIALS
                        </h1>
                        <p className="text-xs">Skin & Nails Spa</p>
                    </div>
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
        <p className='text-center text-gray-400'>Ⓒ2023, All rights powered by Lorganic Essentials.</p>
    </div>
  )
}

export default Footer