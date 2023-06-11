import React from 'react'

const AboutCard = ({person}) => {
  return (
    <div data-aos="zoom-in" className='flex flex-col items-center justify-center m-2'>
        <div className="w-[275px] h-[400px]">
            <img src={person.img} alt='person-img' className='w-full h-full object-cover'/>
        </div>
        <div className="flex flex-col items-center justify-center mt-2">
          <h3 className='text-text text-lg font-Poppins'>{person.names}</h3>
          <p className='text-sm text-gray-400'>{person.title}</p>
        </div>
    </div>
  )
}

export default AboutCard