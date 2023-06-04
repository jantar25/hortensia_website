import React from 'react'

const ServicesCard = ({service}) => {
  return (
    <div className='h-[170px] min-w-[80px] flex flex-col items-center justify-center bg-white border border-gray-300 hover:bg-gray-100'>
        <div className="w-[80px]">
            <img src={service.icon} alt='service_icon' className='w-full'/>
        </div>
        <h2 className='text-md mt-2 text-text font-bold'>{service.title}</h2>
    </div>
  )
}

export default ServicesCard