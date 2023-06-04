import React from 'react'

const AboutCard = ({person}) => {
  return (
    <div className='flex flex-col items-center justify-center'>
        <div className="w-[275px] h-[400px]">
            <img src={person.img} alt='person-img' className='w-full h-full object-cover' />
        </div>
        <h3>{person.names}</h3>
        <p>{person.title}</p>
    </div>
  )
}

export default AboutCard