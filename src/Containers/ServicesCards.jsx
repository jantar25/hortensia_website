import React from 'react'
import ServicesCard from '../Components/ServicesCard'
import Services from '../Constants/Services'

const ServicesCards = () => {
  return (
    <div className="px-4 lg:px-20 bg-slate-200 sm:bg-transparent">
        <div className='z-10 grid grid-rows-6 sm:grid-rows-2 grid-flow-col mx-auto sm:-my-[170px]'>
            {Services.map(service => <ServicesCard service={service} />)}
        </div>
    </div>
  )
}

export default ServicesCards