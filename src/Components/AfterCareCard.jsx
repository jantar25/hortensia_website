import React from 'react'

import ArrowRight from '../Asset/icons/arrow-right.svg'

const AfterCarCard = ({item}) => {
  return (
    <div className='relative max-w-[250px] h-[200px] p-2'>
        <h1 className='text-lg font-bold'>{item.title}</h1>
        <p className='text-gray-500 mt-1 text-sm'>{item.description}</p>
        <div className='absolute left-2 bottom-2 flex items-center justify-start font-bold'>
            <span className='text-sm mr-2'>Learn more</span>
            <img src={ArrowRight} alt="arrow-right icon" />
        </div>
    </div>
  )
}

export default AfterCarCard