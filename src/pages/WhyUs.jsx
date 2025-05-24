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
    <div className='page'>
      <div className="whyUs-page-content">
        <motion.h1 className='whyUs-page-heading'
          initial = {{opacity: 0, y: 100}}
          whileInView = {{opacity: 1, y:0}}
          viewport={{ once: true }}
          transition = {{type: "spring", stiffness: 100, damping: 10, delay: 0.2}}
        >
          Why Daily Spend?
        </motion.h1>
        <motion.p className='whyUs-page-subheading'
          initial = {{opacity: 0, y: 100}}
          whileInView = {{opacity: 1, y:0}}
          viewport={{ once: true }}
          transition = {{type: "spring", stiffness: 100, damping: 10, delay: 0.2}}
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
            <SwiperSlide key={index} className='mobile-content'>
              <motion.img src={data.image} alt="mobile" className="mobile-screenshot" 
                initial = {{opacity: 0, x: 100}}
                whileInView = {{opacity: 1, x: 0}}
                viewport={{ once: true }}
                transition = {{type: 'spring', stiffness: 100, damping: 10, delay: 0.4}}
              />
              <motion.p className='mobile-description'
                initial = {{opacity: 0, x: 100}}
                whileInView = {{opacity: 1, x: 0}}
                viewport={{ once: true }}
                transition = {{type: 'spring', stiffness: 100, damping: 10, delay: 0.6}}
              >{data.description}</motion.p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default WhyUs