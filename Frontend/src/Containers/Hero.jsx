import React from 'react'
import { HashLink } from 'react-router-hash-link';
import { useTranslation } from 'react-i18next'

import Skincare from '../Asset/images/skincare.png'
import Spiral from '../Asset/images/star.png'
import ArrowDown from '../Asset/icons/arrow-down.svg'
import FilledStar from '../Asset/icons/star.svg'
import UnFilledStar from '../Asset/icons/starunfill.svg'

const Hero = () => {
  const { t } = useTranslation()
  return (
    <div className='flex flex-col-reverse md:flex-row items-end justify-center pb-[150px] 
    pt-4 lg:pt-16 px-4 lg:px-20 text-white bg-bg'>
        <div className="flex-1 relative w-full h-full mt-4 md:mt-0">
            <img src={Spiral} alt='Spiral pic' className='w-20 absolute left-0 bottom-32'/>
            <img src={Spiral} alt='Spiral pic' className='w-20 absolute right-8 top-0'/>
            <img src={Skincare} alt='Skincare pic' className='w-full h-full'/>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start py-4 relative w-full h-full">
            <p className='text-center md:text-start text-2xl md:text-3xl lg:text-5xl xl:w-[90%] my-4 md:leading-tight font-bold'>
                Make your look even<span className='text-text mx-2'>More Perfect</span>with our treatment.
            </p>
            <div className='md:ml-8'>
                <p className='text-center md:text-start text-gray-400 text-md my-2'>
                    "Everything has a beauty but not everyone sees it"
                    <span className='text-text ml-1'>.Konfisius</span>
                    <span className='text-text ml-1'>{t('hello-world')}</span> 
                </p>
                <div className="flex items-center justify-center md:justify-start mb-8 xl:mb-20 mt-4">
                    <span className='mr-2 font-semibold'>See our treatment</span>
                    <HashLink smooth to="/#treatment">
                        <img src={ArrowDown} alt='arrow-down pic' className='animate-bounce' />
                    </HashLink>
                </div>
                <div className='flex items-center justify-center md:justify-start'>
                    <hr className='hidden md:flex w-[50px] lg:w-[150px] border-slate-600'/>
                    <div className='flex items-center'>
                        <span className="text-5xl font-bold border-r-2 px-4">9.0</span>
                        <div className='ml-2'>
                            <div className='flex'>
                                <img src={FilledStar} alt='filledStar' />
                                <img src={FilledStar} alt="unfilledStar" />
                                <img src={FilledStar} alt="unfilledStar" />
                                <img src={FilledStar} alt="unfilledStar" />
                                <img src={UnFilledStar} alt="unfilledStar" />
                            </div>
                            <span className='text-sm'>378 Reviews</span>
                        </div>
                    </div>
                </div>
            </div>
            <img src={Spiral} alt='Spiral pic' className='w-10 absolute right-0 bottom-0'/>    
        </div>
    </div>
  )
}

export default Hero