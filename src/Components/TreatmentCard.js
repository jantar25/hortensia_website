import React from 'react'

const TreatmentCard = ({item}) => {
  return (
    <div className='relative bg-white text-black p-2 m-1 flex flex-col items-center justify-center 
    rounded-lg h-[260px] w-[200px] md:w-[150px] lg:w-[135px] xl:w-[160px] md:last:hidden lg:last:flex'>
        <div className='h-[80px]'>
            <img src={item.icon} alt={item.title} className='h-full'/>
        </div>
        <h2 className='font-bold mb-1 text-lg'>{item.title}</h2>
        <ul className='list-disc'>
            {item.services.map((service,index) =>
            <li key={index} className='text-text'>
                <span className='text-black'>{service}</span>
            </li>)}
        </ul>
        <p className='absolute mx-auto bottom-1 text-text font-bold text-md'>{item.price} $</p>
    </div>
  )
}

export default TreatmentCard