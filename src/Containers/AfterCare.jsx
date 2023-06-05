import React from 'react'

import all_Aftercares from '../Constants/Aftercare'
import AfterCareCard from '../Components/AfterCareCard'
import aftercareImg from '../Asset/images/aftercare.png'

const AfterCare = () => {
  return (
    <div className="px-4 lg:px-20 bg-blog pt-[220px] -mb-[95px] xl:-mb-[130px]">
        <h4 className="text-text py-2 font-bold text-xl">AFTERCARE</h4>
        <h2 className='font-Poppins text-2xl md:text-4xl text-bg font-bold md:mb-8'>Permanent Makeup Aftercare.</h2>
        <div className='flex flex-col-reverse md:flex-row items-center md:items-end justify-center md:justify-start mb-8'>
            <div className="flex-1">
                <img src={aftercareImg} alt="new_girl_pic" />
            </div>
            <div className="flex-1 mt-8 md:mt-0 mb-[80px] grid grid-rows-4 sm:grid-rows-2 grid-flow-col gap-2">
                {all_Aftercares.map(item =><AfterCareCard item={item} /> )}
            </div>
        </div>
    </div>
  )
}

export default AfterCare