import React, { useState } from "react";

import Logo from "../Asset/images/logo.png";
import MenuIcon from '../Asset/icons/bars.svg'

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [toggleMenu,setToggleMenu] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 15) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  const Menu = () => (
    <>
      <li className="m-1">Services</li>
      <li className="m-1">Aftercare</li>
      <li className="m-1">Pricelist</li>
      <li className="m-1">FAQ</li>
      <li className="m-1">About Us</li>
    </>
  );

  // const navLinkActive = "bg-blue-300 rounded-full"
  // const LinkActive = "border-blue-300 border-b-4"
  return (
    <div
      className={`sticky top-0 z-30 py-4 text-white ${
        navbar ? "bg-[#040C18]" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center sm:mr-8">
          <img src={Logo} alt="Logo" className="w-8 mr-2" />
          <div className="hidden sm:inline">
            <h1 className="text-md font-[700] text-[#e9a460]">
              ORGANIC ESSENTIALS
            </h1>
            <p className="text-xs">Skin & Nails Spa</p>
          </div>
        </div>
        <ul className='hidden md:flex items-center text-gray-300'>
          <Menu />
        </ul>
        <button className="p-2 border rounded-full">
          Book Appointment
        </button>
        <img src={MenuIcon} alt="menu-bar" className="md:hidden" onClick={()=>setToggleMenu(!toggleMenu)}/>
      </div>
      {toggleMenu && (
            <div className="flex justify-start items-start bg-[#040C18] text-left p-8 absolute
             top-12 right-2 mt-8 min-w-[210px] rounded shadow-lg shadow-[#e9a460] z-50">
              <ul className=' text-gray-300'>
                <Menu />
              </ul>
            </div>
          )}
    </div>
  );
};

export default Navbar;
