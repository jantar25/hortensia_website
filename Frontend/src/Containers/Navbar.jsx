import React, { useState } from "react";
import { HashLink } from 'react-router-hash-link';

import { menuLanguages } from "../Constants/menuLanguages";
import useClickOutside from "../Hooks/useClickOutside";
import TogglableMenu from "../Components/TogglableMenu";
import Logo from "../Asset/images/h_logo.PNG";
import MainLogo from "../Asset/images/hortensia_logo.PNG";
import MenuIcon from '../Asset/icons/bars.svg'


const Navbar = () => {
  const [toggleMenu,setToggleMenu] = useState(false);
  const [toggleLanguage,setToggleLanguage] = useState(false);
  const language = localStorage.getItem('i18nextLng')
  const currentLanguage = menuLanguages.find((lang) => lang.title === language.toLowerCase())

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu)
  }
  const closeMenu = () => {
    setToggleMenu(false)
  }

  const dropDownRef = useClickOutside(closeMenu)
  const suggestionsRef = useClickOutside(() => {
    setToggleLanguage(false)
  })

  const changeChange = (newLanguage) => {
    localStorage.setItem('i18nextLng', newLanguage.title.toLowerCase())
    setToggleLanguage(false)
  }

  const Menu = () => (
    <>
      {/* <li className="m-1 hover:text-gray-500 cursor-pointer" onClick={closeMenu}>
        <HashLink smooth to="/#services">Services</HashLink>
      </li> */}
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
    <div className='sticky top-0 z-30 h-16 flex items-center text-white bg-bg'>
      <div className="relative w-full">
        <div className="flex items-center justify-between px-4 lg:px-20 z-20">
          <HashLink smooth to="/#">
            <div className="flex items-center sm:mr-8 cursor-pointer">
              <img src={Logo} alt="Logo" className="h-12 mr-2 sm:hidden" />
              <img src={MainLogo} alt="Logo" className="h-12 mr-2 hidden sm:inline" />
            </div>
          </HashLink>
          <ul className='hidden md:flex items-center text-gray-300'>
            <Menu />
          </ul>
          <div className="flex items-center gap-2">
            <img
              data-testid='language-button'
              src={currentLanguage?.image}
              alt={currentLanguage?.title}
              onClick={() => setToggleLanguage(!toggleLanguage)}
              className='w-6 h-6 md:w-8 md:h-8 cursor-pointer rounded-full'
            />
            <button className="py-2 px-8 border rounded-full">
              <HashLink smooth to="/donate">Donate</HashLink>
            </button>
          </div>
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
        {toggleLanguage &&
          <div
            ref={suggestionsRef}
            className='absolute top-[40px] md:top-[80px] right-12 md:right-24 border border-main p-2 bg-white rounded-md shadow-xl z-10'>
            <TogglableMenu
              data-testid="togglable-menu"
              changeChange={changeChange}
              items={menuLanguages}
              isLanguageMenu={true}
              isVisible={toggleLanguage}
            />
          </div>
        }
      </div>
    </div>
  );
};

export default Navbar;
