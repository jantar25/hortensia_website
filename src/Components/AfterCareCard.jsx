import React from 'react'

import ArrowRight from '../Asset/icons/arrow-right.svg'

const AfterCarCard = ({item}) => {
  return (
    <div className='max-w-[250px] p-4'>
        <h1>{item.title}</h1>
        <p>{item.description}</p>
        <div className='flex items-center justify-start'>
            <span>Learn more</span>
            <img src={ArrowRight} alt="arrow-right icon" />
        </div>
    </div>
  )
}

export default AfterCarCard