import React from 'react'

const Subscribe = () => {
  return (
    <div className='sm:px-4 lg:px-20 bg-blog py-16' id='Services'>
        <div className='flex flex-col items-center mb-8'>
            <h3 className='text-text py-2 font-bold text-xl'>SUBSCRIBE TO US</h3>
            <h1 data-aos="flip-up" className='font-Poppins text-2xl md:text-3xl font-bold text-center'>
                Lets Stay in The Know About Our. 
            </h1>
            <p className="flex-1 text-center m-4 text-gray-500 text-sm">The range of practices that support skin integrity, enhance its appearance, and relieve skin conditions</p>
        </div>
        <div className='flex items-center justify-center'>
            <input placeholder='Enter your email address' className='py-2 px-4 rounded-full text-bg bg-slate-100 w-1/2' />
            <button className='py-2 px-4 ml-1 sm:ml-4 text-white bg-bg rounded-full font-bold'>Subscribe</button>
        </div>
    </div>
  )
}

export default Subscribe