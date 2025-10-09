import React from 'react'
import './whyUs.css'
import {motion} from 'motion/react'
import {aboutApplication} from '../util/AboutApplication'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const WhyUs = () => {
  return (
    <div className='flex flex-col items-center pb-24 px-8 md:px-16 lg:px-24 text-center'>
      <motion.h2 className='text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900'
        initial = {{opacity: 0, y: 100}}
        whileInView = {{opacity: 1, y:0}}
        viewport={{ once: true }}
        transition = {{type: "spring", stiffness: 100, damping: 12, delay: 0.2}}
      >
        Why Daily Spend?
      </motion.h2>
      <motion.p className='mt-2 mb-8 text-md md:text-xl font-semibold text-gray-600 text-center'
        initial = {{opacity: 0, y: 100}}
        whileInView = {{opacity: 1, y:0}}
        viewport={{ once: true }}
        transition = {{type: "spring", stiffness: 100, damping: 12, delay: 0.2}}
      >
        Smart tools. Simple tracking. Better control.
      </motion.p>

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {aboutApplication.map((data, index) => (
          <SwiperSlide key={index} className='cursor-pointer mb-8'>
            <div className='flex flex-col items-center gap-4'>
              <motion.img src={data.image} alt="mobile" className="mobile-screenshot" 
                initial = {{opacity: 0, x: 100}}
                whileInView = {{opacity: 1, x: 0}}
                viewport={{ once: true }}
                transition = {{type: 'spring', stiffness: 100, damping: 12, delay: 0.2}}
              />
              <motion.p className='text-center'
                initial = {{opacity: 0, x: 100}}
                whileInView = {{opacity: 1, x: 0}}
                viewport={{ once: true }}
                transition = {{type: 'spring', stiffness: 100, damping: 12, delay: 0.4}}
              >{data.description}</motion.p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default WhyUs