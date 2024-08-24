import React from 'react'

import schedules from '../Constants/Schedules'
import dot from '../Asset/icons/dot.svg'

const HoursofOperation = () => {
  return (
    <div className="px-4 lg:px-20 bg-bg py-8 sm:py-20 lg:py-28 2xl:py-36 
    -my-4 sm:-my-10 lg:-my-16 2xl:-my-20" id='hours'>
        <div className="py-4 md:py-10 text-bg bg-slate-200 rounded-lg">
            <div className="flex flex-col md:flex-row justify-between">
              {schedules.map(time => (
                    <div key={time.id} className="md:flex-1">
                        <div className="flex flex-row-reverse md:flex-col items-center justify-around md:justify-center">
                            <div className="mb-2 flex md:flex-col items-center justify-center">
                                <h1 className="text-sm font-bold mr-2">{time.day}</h1>
                                <p className={`${time.id === 5? 'text-red-500' : 'text-bg'} text-[12px]`}>{time.hours}</p>
                            </div>
                            <div className={`hidden md:flex items-center w-full ${time.id === 1? 'justify-end' : time.id === 5 ? 'justify-start' : 'justify-center'}`}>
                                <div className={` bg-text h-[3px]  ${time.id===5? 'w-1/2' : 'w-full'} ${time.id===1 && 'hidden'}`}></div>
                                  <img src={dot} alt='dot-icon' className='m-0'/>
                                <div className={` bg-text h-[3px] ${time.id===1? 'w-1/2' : 'w-full'} ${time.id===5 && 'hidden'}`}></div>
                            </div>
                        </div>
                    </div>
              ))}
            </div>
        </div>
    </div>
  )
}

export default HoursofOperation