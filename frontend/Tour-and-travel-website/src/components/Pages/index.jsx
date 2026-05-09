import React from 'react'
import Nav from '../Nav/Nav'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade'
import {EffectFade, Navigation} from 'swiper/modules'

import btnArrow from './../../assets/btn-arrow.svg'

const Index = () => {
  return (
    <>
       {/* Hero slider */}
       <Swiper
          modules={[Navigation, EffectFade]}
          slidesPreview={1}
          spaceBetween={30}
          loop={true}
          autoplay={true}
          effect={'fade'}
          navigation={{
            prevEl: '.swiper-prev',
            nextEl: '.swiper-next',
          }}
          className='overflow-hidden'
       >
        <SwiperSlide>
          <div className="hero hero1 d-flex flex-column justufy-content-center align-items-center">
            <div className="hero-content w-100 d-flex flex-column justufy-content-center align-items-center">
                <h2 className="text-white">THE KINGDOM OF ICE</h2>
                <h1 className="text-white">Green Lan</h1>
                <button className='btn text-white hero-btn mt-5'>LEARN MORE <img src={btnArrow} className='img-fluid' alt="" /></button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero hero2 d-flex flex-column justufy-content-center align-items-center">
            <div className="hero-content w-100 d-flex flex-column justufy-content-center align-items-center">
                <h2 className="text-white">THE KINGDOM OF ICE</h2>
                <h1 className="text-white">Green Lan</h1>
                <button className='btn text-white hero-btn mt-5'>LEARN MORE <img src={btnArrow} className='img-fluid' alt="" /></button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero hero3 d-flex flex-column justufy-content-center align-items-center">
            <div className="hero-content w-100 d-flex flex-column justufy-content-center align-items-center">
                <h2 className="text-white">THE KINGDOM OF ICE</h2>
                <h1 className="text-white">Green Lan</h1>
                <button className='btn text-white hero-btn mt-5'>LEARN MORE <img src={btnArrow} className='img-fluid' alt="" /></button>
            </div>
          </div>
        </SwiperSlide>
          <i className="bi bi-arrow-left-short swiper-btn swiper-prev"></i>
          <i className="bi bi-arrow-right-short swiper-btn swiper-next"></i>
       </Swiper>
    </>
  )
}

export default Index