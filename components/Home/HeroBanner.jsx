"use client"


// import Swiper core and required modules
import { Swiper, SwiperSlide, useSwiper, } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, Autoplay, EffectCreative, EffectFade } from 'swiper/modules';
import { SwiperButtonNext, SwiperButtonPrev } from '../swiper/SwiperButtonNext ';




// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';



// icons 
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";


import { useScroll, motion, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { fadeIn } from '@/varient';




const images = [
    "/slide2.webp",
    "/slide3.webp",
]

const slideData = [
    {
        img: "/slide-1.jpg",
        title: 'New Arrivals',
        desc: "It's The Standard",
    },
    {
        img: "/slide4.webp",
        title: 'Best Seller',
        desc: "It's The Standard",
    }
]



export default function HeroBanner() {

    return (
        <>
            <div className='relative min-h-screen md:min-h-[102vh] select-none overflow-hidden md:-mt-[80px] -mt-[60px] text-white antialiased top-0 bg-white/20 '>
                <motion.div
                    variants={fadeIn(0.1, 0.5)}
                    initial={{
                        opacity: 0,
                    }}
                    animate='show'
                    exit='hidden'
                    whileInView={{
                        opacity: 1,
                    }}
                    viewport={{
                        amount: "all"
                    }}
                >
                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, Pagination, Scrollbar, Autoplay, EffectFade]}
                        effect='fade'
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        spaceBetween={0}
                        slidesPerView={1}
                    // onSlideChange={() => console.log('slide change')}
                    // onSwiper={(swiper) => console.log(swiper)}
                    >
                        {/* {isNext ? "hello" : ""} */}
                        {/* <SwiperButtonNext >
                            <MdKeyboardArrowRight className='hidden md:flex' />
                        </SwiperButtonNext>

                        <SwiperButtonPrev >
                            <MdKeyboardArrowLeft className='hidden md:flex' />
                        </SwiperButtonPrev> */}

                        {
                            slideData?.map((slide, i) => {
                                return <SwiperSlide key={i}>
                                    <>
                                        <img className=' min-h-screen  md:min-h-[102vh] object-cover brightness-90 grayscale-5' src={slide?.img} alt={slide?.title} />
                                        {/* <img className='md:hidden min-h-screen object-cover brightness-90' src="/MOBILESLIDE1.webp" alt="" srcSet="" /> */}
                                        <motion.div
                                            key={slide?.title}
                                            initial={{
                                                opacity: 0,
                                            }}
                                            animate='show'
                                            exit='hidden'
                                            whileInView={{
                                                opacity: 1,
                                            }}
                                            viewport={{
                                                amount: "all"
                                            }}
                                            className='absolute z-20 top-[82vh] md:left-8 left-4'>

                                            <motion.h1
                                                className='md:text-5xl text-4xl font-bold'>{slide?.title}</motion.h1>

                                            <p className="text-2xl  -mt-2">{slide?.desc}</p>
                                        </motion.div>
                                    </>
                                </SwiperSlide>
                            })
                        }


                        {/* <SwiperSlide>
                            <img className=' min-h-screen md:min-h-[102vh] object-cover brightness-90' src="/slide5.webp" alt="" srcSet="" />
                            <img className='md:hidden min-h-screen object-cover brightness-90' src="/MOBILESLIDE2.webp" alt="" srcSet="" />
                            <motion.div className='absolute z-20 top-[82vh] md:left-8 left-4'>
                                <h1 className='md:text-5xl text-4xl font-bold'>Best Seller</h1>
                                <p className="text-2xl  -mt-2">It's The Standard</p>
                            </motion.div>
                        </SwiperSlide> */}
                    </Swiper>
                </motion.div>



            </div>
        </>


    )
}