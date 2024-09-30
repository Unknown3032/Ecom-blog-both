"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

// import Swiper core and required modules
import { Swiper, SwiperSlide, useSwiper, } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, Autoplay, EffectFade } from 'swiper/modules';
import { SwiperButtonNext, SwiperButtonPrev } from './swiper/SwiperButtonNext '


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';



// icons 
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";


const images = [
    "/slide2.webp",
    "/slide3.webp",
]


export default function HeroBanner() {




    return (
        <>
            <div>
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, Autoplay, EffectFade]}
                    effect='fade'
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    spaceBetween={0}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {/* {isNext ? "hello" : ""} */}
                    <SwiperButtonNext >
                        <MdKeyboardArrowRight />
                    </SwiperButtonNext>

                    <SwiperButtonPrev >
                        <MdKeyboardArrowLeft />
                    </SwiperButtonPrev>

                    <SwiperSlide>
                        <img className='hidden md:flex' src="/slide2.webp" alt="" srcSet="" />
                        <img className='md:hidden' src="/MOBILESLIDE1.webp" alt="" srcSet="" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img className='hidden md:flex' src="/slide3.webp" alt="" srcSet="" />
                        <img className='md:hidden' src="/MOBILESLIDE2.webp" alt="" srcSet="" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </>

    )
}