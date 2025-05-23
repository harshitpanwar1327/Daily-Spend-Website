import React from 'react'
import './testimonial.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import { clients } from '../util/MyClients'
import { motion } from 'motion/react'

const Testimonial = () => {
  return (
    <div className='page'>
      <div className="whyUs-page-content">
        <motion.h1 className='whyUs-page-heading'
          initial = {{opacity: 0, y: 100}}
          whileInView = {{opacity: 1, y: 0}}
          transition = {{type: 'spring', stiffness: 100, damping: 10, delay: 0.2}}
        >
          Testimonial
        </motion.h1>
        <motion.p className='whyUs-page-subheading'
          initial = {{opacity: 0, y: 100}}
          whileInView = {{opacity: 1, y: 0}}
          transition = {{type: 'spring', stiffness: 100, damping: 10, delay: 0.2}}
        >
          My client saying
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
              spaceBetween: 24,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 36,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 48,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {clients.map((data, index) => (
            <SwiperSlide key={index} className="review-container">
              <motion.div className="review-box"
                initial = {{opacity: 0, x: 100}}
                whileInView = {{opacity: 1, x: 0}}
                viewport={{ once: true }}
                transition = {{type: 'spring', stiffness: 100, damping: 10, delay: 0.4}}
              >
                {data.review}
              </motion.div>
              <motion.div className="client-profile"
                initial = {{opacity: 0, x: 100}}
                whileInView = {{opacity: 1, x: 0}}
                transition = {{type: 'spring', stiffness: 100, damping: 10, delay: 0.6}}
              >
                <img src={data.image} alt="image" className='client-img'/>
                <div>
                  <p className='client-name'><b>{data.name}</b></p>
                  <p className='client-work'>{data.work}</p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Testimonial