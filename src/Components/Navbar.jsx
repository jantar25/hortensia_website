import React,{ useState } from 'react'




const Navbar = () => {
    const [navbar,setNavbar]=useState(false);

    const changeBackground=()=>{
        if(window.scrollY>=80){
          setNavbar(true)
        } else{
          setNavbar(false)
        }
      }
    window.addEventListener('scroll',changeBackground)

    // const navLinkActive = "bg-blue-300 rounded-full"
    // const LinkActive = "border-blue-300 border-b-4"
  return (
    <div className={`sticky top-0 z-30 bg-[#040C18] text-white px-4 lg:px-20 py-4  ${navbar? 'bg-[#000]' : 'bg-transparent'}`} >
            <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                    <h1 className='text-2xl font-[700] mr-16'>LOGO</h1>
                    <ul className='flex items-center text-gray-300'>
                        <li className='mx-2'>Services</li>
                        <li className='mx-2'>Aftercare</li>
                        <li className='mx-2'>Pricelist</li>
                        <li className='mx-2'>FAQ</li>
                        <li className='mx-2'>About Us</li>
                    </ul>
                </div>
                <button className='px-4 py-2 border'>Book Appointment</button>
            </div>
    </div>
  )
}

export default Navbar