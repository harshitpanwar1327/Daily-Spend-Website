import './testimonial.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import { clients } from '../util/MyClients'
import { motion } from 'motion/react'

const Testimonials = () => {
  return (
    <div className='flex flex-col items-center py-24 px-8 md:px-16 lg:px-24'>
      <motion.h2 className='text-4xl md:text-5xl font-bold text-gray-900'
        initial = {{opacity: 0, y: 100}}
        whileInView = {{opacity: 1, y: 0}}
        viewport={{ once: true }}
        transition = {{type: 'spring', stiffness: 100, damping: 10, delay: 0.2}}
      >
        Testimonial
      </motion.h2>
      <motion.p className='mt-2 mb-8 text-xl font-semibold text-gray-600'
        initial = {{opacity: 0, y: 100}}
        whileInView = {{opacity: 1, y: 0}}
        viewport={{ once: true }}
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
          <SwiperSlide key={index} className="mb-8">
            <motion.div className="review-box"
              initial = {{opacity: 0, x: 100}}
              whileInView = {{opacity: 1, x: 0}}
              viewport={{ once: true }}
              transition = {{type: 'spring', stiffness: 100, damping: 10, delay: 0.4}}
            >
              <h3 className='text-xl font-semibold'>{data.heading}</h3>
              <p>{data.review}</p>
            </motion.div>
            <motion.div className="client-profile"
              initial = {{opacity: 0, x: 100}}
              whileInView = {{opacity: 1, x: 0}}
              viewport={{ once: true }}
              transition = {{type: 'spring', stiffness: 100, damping: 10, delay: 0.6}}
            >
              <div>
                <p className='client-name'><b>{data.name}</b></p>
                <p className='client-work'>{data.work}</p>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Testimonials