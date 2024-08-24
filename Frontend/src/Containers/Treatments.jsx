import React from 'react'

import treatment from '../Asset/images/treatment.png'
import TreatmentCard from '../Components/TreatmentCard'
import treatments from '../Constants/Treatments'

const Treatments = () => {
  return (
    <div className='relative px-4 lg:px-20 bg-bg py-10 xl:py-24 text-white skew-y-3 rounded-bl-[40px]' id='treatment'>
        <div className='w-[80px] h-[80px] bg-blog rounded-full absolute bottom-[-80px] right-0 z-10'></div>
        <div className='w-[40px] h-[40px] bg-bg absolute bottom-[-39px] right-0'></div>
        <div className="-skew-y-3 bg-bg text-white flex flex-col items-center justify-center md:flex-row md:items-start md:justify-start my-4">
            <div className='flex-1 mb-4 md:mb-0 md:mr-2 pt-8 xl:pt-0' >
              <div className="self-start mb-8">
                <h4 className="text-text py-2 font-bold text-xl">TREATMENT</h4>
                <h2 className='font-Poppins text-2xl md:text-3xl font-bold mb-8'>Our Featured Beauty Treatment.</h2>
                <p className="text-gray-300">The range of practices that support skin integrity, enhance its appearance, and relieve skin conditions</p>
              </div>
              <div className="text-gray-300 flex items-center justify-around flex-wrap">
                {treatments.map(item => <TreatmentCard key={item.id} item={item} />)}
              </div>
            </div>
            <div className="flex-1 relative md:flex justify-center items-center">
              <div data-aos="flip-right" className='flex items-start bg-[#eeb984] w-[260px] h-[284px] sm:w-[350px] sm:h-[510px] rounded-lg'>
                  <div className=' bg-text self-start w-[260px] h-[284px] sm:w-[350px] sm:h-[510px] mt-4 -ml-4 rounded-lg'>
                      <img src={treatment} alt="homeImg" className='w-full h-full object-cover rounded-lg'/>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Treatments