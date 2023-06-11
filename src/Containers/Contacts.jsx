import React from 'react'

import marker from '../Asset/icons/marker.svg'
import phone from '../Asset/icons/phone.svg'
import mail from '../Asset/icons/envelope.svg'
import whatsapp from '../Asset/icons/whatsapp.svg'
import instagram from '../Asset/icons/instagram.svg'
import facebook from '../Asset/icons/facebook.svg'

const Contacts = () => {
  return (
    <div className='flex flex-col px-4 lg:px-20 pt-16 bg-blog' id='contact'>
        <h4 className="text-text py-2 font-bold text-xl">CONTACT US</h4>
        <h2 className='font-Poppins text-2xl md:text-4xl text-bg font-bold md:mb-8'>We would love to hear fom you.</h2>
            <div className='flex flex-col md:flex-row'>
                <div className='flex-1'>
                    <h2 className='font-[700] text-[1.3rem] mt-4'>Get In Touch</h2>
                    <div className='w-[30px] h-[3px] bg-text shadow-lg mt-2 mb-8'/>
                    <div className='mt-8'>
                        <div className='flex items-center mb-2'>
                            <img src={marker} alt='marker-icon' />
                            <div className='ml-4'>
                                <h3 className='text-[1rem] font-[600]'>Address</h3>
                                <span className='text-[0.8rem] '>Kigali/RWANDA</span>
                            </div>
                        </div>
                        <div className='flex items-center mb-2'>
                            <img src={phone} alt='phone-icon' />
                            <div className='ml-4'>
                                <h3 className='text-[1rem] font-[600]'>Phone</h3>
                                <span className='text-[0.8rem] '>+250786120934/+250725868316</span>
                            </div>
                        </div>
                        <div className='flex items-center mb-2'>
                            <img src={mail} alt='email-icon' />
                            <div className='ml-4'>
                                <h3 className='text-[1rem] font-[600]'>Mail</h3>
                                <span className='text-[0.8rem]'>glodybulambo@gmail.com</span>
                            </div>
                        </div>
                        <div className='flex items-center justify-start mt-4'>
                            <img src={whatsapp} alt='whatsapp-icon' />
                            <img src={instagram} alt='Instagram-icon' className='mx-4'/>
                            <img src={facebook} alt='facebook-icon' />
                        </div>
                    </div>
                </div>
                <div className='flex-1'>
                    <h2 className='font-[700] text-[1.3rem] mt-4'>Message Us</h2>
                    <div className='w-[30px] h-[3px] bg-text shadow-lg mt-2 mb-8'/>
                    <form className='flex flex-col my-4 lg:ml-4 max-w-5/6 text-black'>
                        <div className='flex justify-between mb-4'>
                            <input placeholder='Name' type='text' name='name' className='rounded w-1/2 px-4 py-2 mr-2'/>
                            <input placeholder='Email' type='email' name='email' className='rounded w-1/2 px-4 py-2'/>
                        </div>
                        <input placeholder='Subject' type='text' name='subject' className='rounded mb-4 px-4 py-2'/>
                        <textarea placeholder='Message' name='message' rows={4} className='rounded mb-4 px-4 py-2'/>
                        <button type='submit' className='flex justify-center items-center bg-bg rounded px-4 py-2 w-1/3 font-[500] text-white'>
                            Send <p className='ml-1 hidden sm:flex'>Message</p></button>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default Contacts