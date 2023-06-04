import React from 'react'

import all_Aftercares from '../Constants/Aftercare'
import AfterCareCard from '../Components/AfterCareCard'
import aftercareImg from '../Asset/images/aftercare.png'

const AfterCare = () => {
  return (
    <div className="px-4 lg:px-20 bg-slate-200 pt-4 sm:pt-[220px]">
        <h4>AFTERCARE</h4>
        <h2>Permanent Makeup Aftercare</h2>
        <div className='flex flex-col md:flex-row items-center justify-center md:justify-start '>
            <div className="flex-1">
                <img src={aftercareImg} alt="new girl pic" />
            </div>
            <div className="flex-1 flex flex-wrap justify-center">
                {all_Aftercares.map(item =><AfterCareCard item={item} /> )}
            </div>
        </div>
    </div>
  )
}

export default AfterCare