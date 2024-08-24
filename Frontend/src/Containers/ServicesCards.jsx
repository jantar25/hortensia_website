import React from 'react'
import ServicesCard from '../Components/ServicesCard'
import Services from '../Constants/Services'

const ServicesCards = () => {
  return (
    <div className="sm:px-2 lg:px-20 bg-transparent" id='services'>
        <div className='z-10 grid grid-rows-6 sm:grid-rows-2 grid-flow-col mx-auto -my-[150px]'>
            {Services.map(service => <ServicesCard key={service.id} service={service} />)}
        </div>
    </div>
  )
}

export default ServicesCards