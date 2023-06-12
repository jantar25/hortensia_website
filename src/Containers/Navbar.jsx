import React, { useState } from "react";
import { HashLink } from 'react-router-hash-link';

import Logo from "../Asset/images/logo.png";
import MenuIcon from '../Asset/icons/bars.svg'
import useClickOutside from "../Hooks/useClickOutside";

const Navbar = () => {
  const [toggleMenu,setToggleMenu] = useState(false);
  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu)
  }
  const closeMenu = () => {
    setToggleMenu(false)
  }

  const dropDownRef = useClickOutside(closeMenu)

  const Menu = () => (
    <>
      <li className="m-1 hover:text-gray-500 cursor-pointer" onClick={closeMenu}>
        <HashLink smooth to="/#services">Services</HashLink>
      </li>
      <li className="m-1 hover:text-gray-500 cursor-pointer" onClick={closeMenu}>
        <HashLink smooth to="/#aftercare">Aftercare</HashLink>
      </li>
      <li className="m-1 hover:text-gray-500 cursor-pointer" onClick={closeMenu}>
        <HashLink smooth to="/#about">About Us</HashLink>
      </li>
      <li className="m-1 hover:text-gray-500 cursor-pointer" onClick={closeMenu}>
        <HashLink smooth to="/#treatment">Pricelist</HashLink>
      </li>
      <li className="m-1 hover:text-gray-500 cursor-pointer" onClick={closeMenu}>
        <HashLink smooth to="/#customers">Customers</HashLink>
      </li>
    </>
  );

  return (
    <div className='sticky top-0 z-30 py-4 text-white bg-bg'>
      <div className="flex items-center justify-between px-4 lg:px-20 z-20">
        <div className="flex items-center sm:mr-8">
          <img src={Logo} alt="Logo" className="w-8 mr-2" />
          <div className="hidden sm:inline">
            <h1 className="text-md font-[700] text-text">
              ORGANIC ESSENTIALS
            </h1>
            <p className="text-xs">Skin & Nails Spa</p>
          </div>
        </div>
        <ul className='hidden md:flex items-center text-gray-300'>
          <Menu />
        </ul>
        <button className="p-2 border rounded-full">
          <HashLink smooth to="/#contacts">Book Appointment</HashLink>
        </button>
        <img src={MenuIcon} alt="menu-bar" className="md:hidden cursor-pointer" onClick={handleToggleMenu}/>
      </div>
      {toggleMenu && (
            <div ref={dropDownRef} className="flex justify-start items-start bg-bg text-left p-8 absolute
             top-12 right-2 mt-8 min-w-[210px] rounded shadow-lg shadow-text z-50" >
              <ul className=' text-gray-300'>
                <Menu />
              </ul>
            </div>
          )}
    </div>
  );
};

export default Navbar;
