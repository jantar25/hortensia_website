import React from 'react'

import schedules from '../Constants/Schedules'
import dot from '../Asset/icons/dot.svg'

const HoursofOperation = () => {
  return (
    <div className="px-4 lg:px-20 bg-bg pb-8 pt-8 sm:pt-20 lg:pt-28 2xl:pt-36 
    -mt-4 sm:-mt-10 lg:-mt-16 2xl:-mt-20">
        <div className="py-4 text-bg bg-slate-200 rounded-lg">
            <div className="flex flex-col md:flex-row justify-between">
              {schedules.map(time => (
                    <div key={time.id} className="flex-1 flex md:flex-col">
                        <div className="flex flex-row-reverse md:flex-col items-center justify-center">
                            <div className="md:mb-2 ml-4 md:ml-0 flex flex-col sm:flex-row md:flex-col items-center justify-center">
                                <h1 className="text-sm font-bold mr-2">{time.day}</h1>
                                <p className={`${time.id === 5? 'text-red-500' : 'text-bg'} text-[12px]`}>{time.hours}</p>
                            </div>
                            <div className={`flex items-center w-full ${time.id === 1? 'justify-end' : time.id === 5 ? 'justify-start' : 'justify-center'}`}>
                                <div className={`bg-text h-[3px]  ${time.id===5? 'w-1/2' : 'w-full'} ${time.id===1 && 'hidden'}`}></div>
                                <img src={dot} alt='dot-icon' className='m-0'/>
                                <div className={`bg-text h-[3px] ${time.id===1? 'w-1/2' : 'w-full'} ${time.id===5 && 'hidden'}`}></div>
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