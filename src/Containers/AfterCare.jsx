import React from 'react'

import all_Aftercares from '../Constants/Aftercare'
import AfterCareCard from '../Components/AfterCareCard'
import aftercareImg from '../Asset/images/aftercare.png'

const AfterCare = () => {
  return (
    <div className="px-4 lg:px-20 bg-slate-200 pt-64">
        <div className='flex items-center justify-cente'>
            <div className="flex-1">
                <h4>AFTERCARE</h4>
                <h2>Permanent Makeup Aftercare</h2>
                <img src={aftercareImg} alt="new girl pic" />
            </div>
            <div className="flex-1 flex flex-wrap">
                {all_Aftercares.map(item =><AfterCareCard item={item} /> )}
            </div>
        </div>
    </div>
  )
}

export default AfterCare