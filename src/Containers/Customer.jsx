import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import { Pagination } from "swiper";

import customerImages from '../Constants/CustomerImgs';

const Customer = () => {
  return (
    <div className="px-4 lg:px-20 bg-blog pt-20 pb-4 lg:pt-32 -mt-10 sm:-mt-16 2xl:-mt-24">
        <div className='flex flex-col items-center mb-8'>
            <h3 className='text-text py-2 font-bold text-xl z-10'>OUR CUSTOMER</h3>
            <h1 className='font-Poppins text-2xl md:text-3xl font-bold md:mb-8 md:w-[60%] text-center z-10'>
                Treatment Process from ours.
            </h1>
        </div>
        <div>
          <div className="">
            <Swiper
              style={{
                "--swiper-pagination-color": "#000",
                "--swiper-pagination-bullet-inactive-color": "#999999",
                "--swiper-pagination-bullet-inactive-opacity": "1",
                "--swiper-pagination-bullet-size": "10px",
                "--swiper-pagination-bullet-horizontal-gap": "5px"
              }}
              spaceBetween={10}
              slidesPerView={1}
              pagination={{
                clickable: true
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                900: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                1120: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                1536: {
                  slidesPerView: 4,
                  spaceBetween: 10,
                },
              }}
              modules={[Pagination]}  
            >
              {customerImages.map((image)=>(
                <SwiperSlide key={image.id} className='flex justify-center mb-12'>
                  <div className="w-full h-[400px] rounded-md cursor-grab">
                    <img src={image.img} alt='customer' className='w-full h-full object-cover rounded-md' />
                  </div>
                </SwiperSlide> ))}
            </Swiper>    
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
            <h2 data-aos="fade-up-right" className='flex-1 text-center text-3xl font-[900] m-4 text-bg'>About our Awesome Service</h2>
            <p className="flex-1 text-center m-4 text-gray-500 text-sm">The range of practices that support skin integrity, enhance its appearance, and relieve skin conditions</p>
            <button data-aos="fade-up-left" className="flex-1 p-2 m-4 border border-bg rounded-full font-bold">See All Treatment</button>
          </div>
          <hr className='border-gray-400 ' />
        </div>
    </div>
  )
}

export default Customer